const {
  moods,
  plansByMood,
  themeEmphasisOptions,
  verseBankByMood,
  buildGeneratedPlan,
  regenerateDay,
  validatePlanSchema,
  clonePlan,
  toCompactJson,
  legacyPlans
} = window.BiblePlansData;

const STORAGE_KEY = "bible-app-saved-plans-v2";
const AUTH_USERS_KEY = "bible-app-auth-users-v1";
const AUTH_SESSION_KEY = "bible-app-auth-session-v1";
const CHECKIN_KEY = "bible-app-checkin-v1";

const state = {
  selectedMoodId: moods[0].id,
  moodFilter: "all",
  moodSearch: "",
  selectedBuiltInPlan: null,
  activePlan: null,
  activePlanStarted: false,
  activeDayIndex: 0,
  completedDays: new Set(),
  generatedPlan: null,
  savedPlans: [],
  currentUser: null
};

const dom = {
  todayDate: document.getElementById("today-date"),
  heroPlanTitle: document.getElementById("hero-plan-title"),
  heroPlanDescription: document.getElementById("hero-plan-description"),
  heroPlanTime: document.getElementById("hero-plan-time"),
  moodSearch: document.getElementById("mood-search"),
  moodFilter: document.getElementById("mood-filter"),
  moodGrid: document.getElementById("mood-grid"),
  builtInPlanList: document.getElementById("built-in-plan-list"),
  viewerPlanTitle: document.getElementById("viewer-plan-title"),
  startPlanBtn: document.getElementById("start-plan-btn"),
  planViewer: document.getElementById("plan-viewer"),
  prevDayBtn: document.getElementById("prev-day-btn"),
  nextDayBtn: document.getElementById("next-day-btn"),
  markCompleteBtn: document.getElementById("mark-complete-btn"),
  saveActiveBtn: document.getElementById("save-active-btn"),
  form: document.getElementById("generator-form"),
  moodSelect: document.getElementById("mood-select"),
  durationSelect: document.getElementById("duration-select"),
  minutesSelect: document.getElementById("minutes-select"),
  bibleFocusSelect: document.getElementById("bible-focus-select"),
  outputStyleSelect: document.getElementById("output-style-select"),
  planNameInput: document.getElementById("plan-name-input"),
  themeGroup: document.getElementById("theme-emphasis-group"),
  planOutput: document.getElementById("plan-output"),
  copyBtn: document.getElementById("copy-btn"),
  downloadBtn: document.getElementById("download-btn"),
  exportCompactBtn: document.getElementById("export-compact-btn"),
  saveGeneratedBtn: document.getElementById("save-generated-btn"),
  savedPlansList: document.getElementById("saved-plans-list"),
  importJson: document.getElementById("import-json"),
  importBtn: document.getElementById("import-btn"),
  importMessage: document.getElementById("import-message"),
  statMoods: document.getElementById("stat-moods"),
  statPlans: document.getElementById("stat-plans"),
  statSaved: document.getElementById("stat-saved"),
  verseDisplay: document.getElementById("verse-display"),
  newVerseBtn: document.getElementById("new-verse-btn"),
  copyVerseBtn: document.getElementById("copy-verse-btn"),
  checkinMood: document.getElementById("checkin-mood"),
  checkinNote: document.getElementById("checkin-note"),
  saveCheckinBtn: document.getElementById("save-checkin-btn"),
  loadCheckinBtn: document.getElementById("load-checkin-btn"),
  checkinMessage: document.getElementById("checkin-message"),
  registerName: document.getElementById("auth-register-name"),
  registerEmail: document.getElementById("auth-register-email"),
  registerPassword: document.getElementById("auth-register-password"),
  loginEmail: document.getElementById("auth-login-email"),
  loginPassword: document.getElementById("auth-login-password"),
  registerBtn: document.getElementById("register-btn"),
  loginBtn: document.getElementById("login-btn"),
  logoutBtn: document.getElementById("logout-btn"),
  authStatus: document.getElementById("auth-status")
};

function todayText() {
  const formatter = new Intl.DateTimeFormat("en-US", { weekday: "long", month: "short", day: "numeric" });
  return formatter.format(new Date());
}

function formatDate(iso) {
  if (!iso) return "-";
  const date = new Date(iso);
  if (Number.isNaN(date.getTime())) return "-";
  return new Intl.DateTimeFormat("en-US", { month: "short", day: "numeric", year: "numeric" }).format(date);
}

function moodById(moodId) {
  return moods.find((mood) => mood.id === moodId);
}

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/\"/g, "&quot;");
}

function getTotalBuiltInPlans() {
  return Object.values(plansByMood).reduce((count, list) => count + list.length, 0);
}

function renderOverviewStats() {
  if (dom.statMoods) dom.statMoods.textContent = String(moods.length);
  if (dom.statPlans) dom.statPlans.textContent = String(getTotalBuiltInPlans());
  if (dom.statSaved) dom.statSaved.textContent = String(state.savedPlans.length);
}

function normalizeEmail(value) {
  return String(value || "").trim().toLowerCase();
}

function readUsers() {
  try {
    const raw = localStorage.getItem(AUTH_USERS_KEY);
    const parsed = raw ? JSON.parse(raw) : {};
    return parsed && typeof parsed === "object" ? parsed : {};
  } catch (_error) {
    return {};
  }
}

function writeUsers(users) {
  localStorage.setItem(AUTH_USERS_KEY, JSON.stringify(users));
}

function getUserPlansKey() {
  if (!state.currentUser) return null;
  return STORAGE_KEY + "-" + state.currentUser.email;
}

function setAuthStatus(message) {
  if (dom.authStatus) dom.authStatus.textContent = message;
}

function renderAuthState() {
  const loggedIn = Boolean(state.currentUser);
  if (loggedIn) {
    setAuthStatus("Logged in as " + state.currentUser.name + " (" + state.currentUser.email + ")");
  } else {
    setAuthStatus("Not logged in. Log in to save plans.");
  }
  if (dom.saveActiveBtn) dom.saveActiveBtn.disabled = !loggedIn;
  if (dom.saveGeneratedBtn) dom.saveGeneratedBtn.disabled = !loggedIn;
}

function loadAuthSession() {
  try {
    const raw = localStorage.getItem(AUTH_SESSION_KEY);
    if (!raw) return;
    const parsed = JSON.parse(raw);
    if (parsed && parsed.email) {
      state.currentUser = {
        email: normalizeEmail(parsed.email),
        name: parsed.name || "User"
      };
    }
  } catch (_error) {
    state.currentUser = null;
  }
}

function persistAuthSession() {
  if (!state.currentUser) {
    localStorage.removeItem(AUTH_SESSION_KEY);
    return;
  }
  localStorage.setItem(AUTH_SESSION_KEY, JSON.stringify(state.currentUser));
}

function registerUser() {
  const name = String(dom.registerName?.value || "").trim();
  const email = normalizeEmail(dom.registerEmail?.value);
  const password = String(dom.registerPassword?.value || "");
  if (!name || !email || password.length < 6) {
    setAuthStatus("Enter name, valid email, and password of at least 6 characters.");
    return;
  }
  const users = readUsers();
  if (users[email]) {
    setAuthStatus("An account with this email already exists.");
    return;
  }
  users[email] = { name, email, password, createdAt: new Date().toISOString() };
  writeUsers(users);
  state.currentUser = { name, email };
  persistAuthSession();
  loadPlansFromStorage();
  renderSavedPlans();
  renderAuthState();
}

function loginUser() {
  const email = normalizeEmail(dom.loginEmail?.value);
  const password = String(dom.loginPassword?.value || "");
  const users = readUsers();
  const user = users[email];
  if (!user || user.password !== password) {
    setAuthStatus("Incorrect email or password.");
    return;
  }
  state.currentUser = { name: user.name || "User", email: user.email || email };
  persistAuthSession();
  loadPlansFromStorage();
  renderSavedPlans();
  renderAuthState();
}

function logoutUser() {
  state.currentUser = null;
  state.savedPlans = [];
  persistAuthSession();
  renderSavedPlans();
  renderAuthState();
}

function visibleMoods() {
  return moods.filter((mood) => {
    const byFilter = state.moodFilter === "all" || mood.tags.includes(state.moodFilter);
    const bySearch = !state.moodSearch || mood.label.toLowerCase().includes(state.moodSearch) || mood.description.toLowerCase().includes(state.moodSearch);
    return byFilter && bySearch;
  });
}

function updateHeroFromMood(moodId) {
  const mood = moodById(moodId);
  const firstPlan = plansByMood[moodId][0];
  dom.heroPlanTitle.textContent = firstPlan.planName;
  dom.heroPlanDescription.textContent = mood.description;
  dom.heroPlanTime.textContent = "Estimated time: " + firstPlan.estMinutesPerDay + " min";
}

function createMoodCard(mood) {
  const card = document.createElement("article");
  card.className = "plan-card";
  const firstPlan = (plansByMood[mood.id] || [])[0];
  const firstPlanId = firstPlan ? firstPlan.id : "";
  const detailHref = "plan-view.html?mood=" + encodeURIComponent(mood.id) + "&plan=" + encodeURIComponent(firstPlanId);
  card.innerHTML = [
    '<span class="tag">' + mood.tags.join(" • ") + "</span>",
    "<h3>" + mood.label + "</h3>",
    "<p>" + mood.description + "</p>",
    "<p><strong>Plans:</strong> " + plansByMood[mood.id].length + "</p>",
    '<a class="btn primary" href="' + detailHref + '">View plan</a>',
    '<button class="btn ghost" data-action="select-mood" data-mood-id="' + mood.id + '" type="button">Preview here</button>'
  ].join("");
  return card;
}

function renderMoodGrid() {
  dom.moodGrid.innerHTML = "";
  const list = visibleMoods();
  if (!list.length) {
    dom.moodGrid.innerHTML = '<p class="placeholder">No moods match this filter.</p>';
    return;
  }
  list.forEach((mood) => {
    dom.moodGrid.appendChild(createMoodCard(mood));
  });
}

function createBuiltInPlanCard(plan) {
  const card = document.createElement("article");
  card.className = "plan-card";
  const detailHref = "plan-view.html?mood=" + encodeURIComponent(plan.moodId) + "&plan=" + encodeURIComponent(plan.id);
  card.innerHTML = [
    '<span class="tag">' + plan.durationDays + " days</span>",
    "<h3>" + plan.planName + "</h3>",
    "<p>" + plan.summary + "</p>",
    "<p><strong>Time/day:</strong> " + plan.estMinutesPerDay + " min</p>",
    '<a class="btn primary" href="' + detailHref + '">View plan</a>',
    '<button class="btn ghost" type="button" data-action="load-built-in" data-plan-id="' + plan.id + '">Preview here</button>'
  ].join("");
  return card;
}

function renderBuiltInPlans() {
  const moodPlans = plansByMood[state.selectedMoodId] || [];
  dom.builtInPlanList.innerHTML = "";
  if (!moodPlans.length) {
    dom.builtInPlanList.innerHTML = '<p class="placeholder">No built-in plans available for this mood.</p>';
  } else {
    moodPlans.forEach((plan) => dom.builtInPlanList.appendChild(createBuiltInPlanCard(plan)));
  }

  if (!state.selectedBuiltInPlan && moodPlans.length) {
    state.selectedBuiltInPlan = clonePlan(moodPlans[0]);
    setActivePlan(state.selectedBuiltInPlan);
  }
}

function setActivePlan(plan) {
  state.activePlan = clonePlan(plan);
  state.activePlanStarted = false;
  state.activeDayIndex = 0;
  state.completedDays = new Set();
  dom.viewerPlanTitle.textContent = plan.planName;
  renderPlanViewer();
}

function renderPlanViewer() {
  const plan = state.activePlan;
  dom.planViewer.innerHTML = "";

  if (!plan) {
    dom.planViewer.innerHTML = '<p class="placeholder">Choose a plan to view.</p>';
    return;
  }

  if (!state.activePlanStarted) {
    dom.planViewer.innerHTML = [
      "<h4>" + plan.planName + "</h4>",
      "<p>" + plan.summary + "</p>",
      "<p><strong>Duration:</strong> " + plan.durationDays + " days</p>",
      "<p><strong>Minutes/day:</strong> " + plan.estMinutesPerDay + " min</p>",
      "<p><strong>Tags:</strong> " + (plan.emphasisTags || []).join(", ") + "</p>"
    ].join("");
  } else {
    const entry = plan.days[state.activeDayIndex];
    const isComplete = state.completedDays.has(entry.day);
    const refs = entry.readingRefs.map((ref) => "<li>" + ref + "</li>").join("");

    dom.planViewer.innerHTML = [
      "<h4>Day " + entry.day + " of " + plan.durationDays + ": " + entry.title + "</h4>",
      '<ul class="ref-list">' + refs + "</ul>",
      "<p><strong>Reflection:</strong> " + entry.reflection + "</p>",
      "<p><strong>Prayer:</strong> " + entry.prayer + "</p>",
      entry.optionalAction ? "<p><strong>Action:</strong> " + entry.optionalAction + "</p>" : "",
      "<p><strong>Status:</strong> " + (isComplete ? "Completed" : "In progress") + "</p>"
    ].join("");
  }

  dom.prevDayBtn.disabled = !state.activePlanStarted || state.activeDayIndex === 0;
  dom.nextDayBtn.disabled = !state.activePlanStarted || state.activeDayIndex === plan.days.length - 1;
  dom.markCompleteBtn.disabled = !state.activePlanStarted;
}

function startCurrentPlan() {
  if (!state.activePlan) return;
  state.activePlanStarted = true;
  state.activeDayIndex = 0;
  renderPlanViewer();
}

function populateMoodSelect() {
  dom.moodSelect.innerHTML = "";
  moods.forEach((mood) => {
    const option = document.createElement("option");
    option.value = mood.id;
    option.textContent = mood.label;
    dom.moodSelect.appendChild(option);
  });
}

function populateCheckinMoodSelect() {
  if (!dom.checkinMood) return;
  dom.checkinMood.innerHTML = "";
  moods.forEach((mood) => {
    const option = document.createElement("option");
    option.value = mood.id;
    option.textContent = mood.label;
    dom.checkinMood.appendChild(option);
  });
}

function renderThemeEmphasisOptions() {
  dom.themeGroup.innerHTML = "<legend>Theme emphasis</legend>";
  themeEmphasisOptions.forEach((item, index) => {
    const label = document.createElement("label");
    const checked = index < 3 ? "checked" : "";
    label.innerHTML = '<input type="checkbox" value="' + item + '" ' + checked + " /> " + item;
    dom.themeGroup.appendChild(label);
  });
}

function selectedThemeEmphasis() {
  return [...dom.themeGroup.querySelectorAll("input[type=checkbox]")]
    .filter((check) => check.checked)
    .map((check) => check.value);
}

function renderGeneratedPlanEditor() {
  const plan = state.generatedPlan;
  dom.planOutput.innerHTML = "";
  if (!plan) {
    dom.planOutput.innerHTML = '<p class="placeholder">Generate a plan to edit day-by-day entries here.</p>';
    return;
  }

  plan.days.forEach((day) => {
    const card = document.createElement("div");
    card.className = "plan-day";
    card.dataset.day = String(day.day);
    const refsHtml = day.readingRefs
      .map((ref, refIndex) => '<div class="ref-line"><input data-field="ref" data-ref-index="' + refIndex + '" value="' + escapeHtml(ref) + '" /><button type="button" data-action="remove-ref" data-ref-index="' + refIndex + '">Remove</button></div>')
      .join("");

    card.innerHTML = [
      "<h4>Day " + day.day + "</h4>",
      '<div class="inline-field"><label>Title</label><input data-field="title" value="' + escapeHtml(day.title) + '" /></div>',
      '<div class="inline-field"><label>Scripture references</label>' + refsHtml + '<button class="btn ghost" type="button" data-action="add-ref">Add scripture reference</button></div>',
      '<div class="inline-field"><label>Reflection</label><textarea data-field="reflection" rows="2">' + escapeHtml(day.reflection) + "</textarea></div>",
      '<div class="inline-field"><label>Prayer</label><textarea data-field="prayer" rows="2">' + escapeHtml(day.prayer) + "</textarea></div>",
      day.optionalAction
        ? '<div class="inline-field"><label>Optional action</label><textarea data-field="optionalAction" rows="2">' + escapeHtml(day.optionalAction) + "</textarea></div>"
        : "",
      '<button class="btn ghost" type="button" data-action="regenerate-day">Regenerate day ' + day.day + "</button>"
    ].join("");

    dom.planOutput.appendChild(card);
  });
}

function exportCurrentPlan(plan) {
  if (!plan) return;
  const blob = new Blob([JSON.stringify(plan, null, 2)], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = (plan.planName || "plan").replace(/\s+/g, "-").toLowerCase() + ".json";
  a.click();
  URL.revokeObjectURL(url);
}

function savePlansToStorage() {
  const key = getUserPlansKey();
  if (!key) return;
  localStorage.setItem(key, JSON.stringify(state.savedPlans));
}

function loadPlansFromStorage() {
  const key = getUserPlansKey();
  if (!key) {
    state.savedPlans = [];
    return;
  }
  state.savedPlans = [];
  try {
    const raw = localStorage.getItem(key);
    if (!raw) return;
    const parsed = JSON.parse(raw);
    if (Array.isArray(parsed)) {
      state.savedPlans = parsed;
    }
  } catch (_error) {
    state.savedPlans = [];
  }
}

function savePlan(plan) {
  if (!state.currentUser) {
    setAuthStatus("Log in to save plans.");
    return;
  }
  if (!plan) return;
  const stored = clonePlan(plan);
  stored.savedId = stored.savedId || "saved-" + Math.random().toString(36).slice(2, 10);
  stored.createdAt = stored.createdAt || new Date().toISOString();
  stored.savedAt = new Date().toISOString();
  const existingIndex = state.savedPlans.findIndex((item) => item.savedId === stored.savedId);
  if (existingIndex >= 0) {
    state.savedPlans[existingIndex] = stored;
  } else {
    state.savedPlans.unshift(stored);
  }
  savePlansToStorage();
  renderSavedPlans();
}

function renderSavedPlans() {
  dom.savedPlansList.innerHTML = "";
  if (!state.savedPlans.length) {
    dom.savedPlansList.innerHTML = '<p class="placeholder">No saved plans yet.</p>';
    renderOverviewStats();
    return;
  }

  state.savedPlans.forEach((plan) => {
    const mood = moodById(plan.moodId);
    const card = document.createElement("article");
    card.className = "plan-card";
    card.innerHTML = [
      "<h3>" + plan.planName + "</h3>",
      "<p><strong>Mood:</strong> " + (mood ? mood.label : plan.moodId) + "</p>",
      "<p><strong>Duration:</strong> " + plan.durationDays + " days</p>",
      "<p><strong>Created:</strong> " + formatDate(plan.createdAt) + "</p>",
      '<div class="action-row">',
      '<button class="btn ghost" type="button" data-action="saved-load" data-saved-id="' + plan.savedId + '">Load</button>',
      '<button class="btn ghost" type="button" data-action="saved-duplicate" data-saved-id="' + plan.savedId + '">Duplicate</button>',
      '<button class="btn ghost" type="button" data-action="saved-rename" data-saved-id="' + plan.savedId + '">Rename</button>',
      '<button class="btn ghost" type="button" data-action="saved-delete" data-saved-id="' + plan.savedId + '">Delete</button>',
      "</div>"
    ].join("");
    dom.savedPlansList.appendChild(card);
  });

  renderOverviewStats();
}

function generatePlanFromForm() {
  const duration = Number.parseInt(dom.durationSelect.value, 10);
  const minutes = Number.parseInt(dom.minutesSelect.value, 10);
  const emphasis = selectedThemeEmphasis();

  state.generatedPlan = buildGeneratedPlan({
    moodId: dom.moodSelect.value,
    durationDays: duration,
    minutesPerDay: minutes,
    bibleFocus: dom.bibleFocusSelect.value,
    themeEmphasis: emphasis.length ? emphasis : ["trust"],
    outputStyle: dom.outputStyleSelect.value,
    planName: dom.planNameInput.value.trim() || "My Custom Plan"
  });

  renderGeneratedPlanEditor();
}

function handleGeneratedEditorInput(event) {
  const target = event.target;
  if (!state.generatedPlan) return;
  const card = target.closest(".plan-day");
  if (!card) return;
  const dayNumber = Number.parseInt(card.dataset.day, 10);
  const day = state.generatedPlan.days[dayNumber - 1];
  if (!day) return;

  const field = target.dataset.field;
  if (!field) return;

  if (field === "ref") {
    const refIndex = Number.parseInt(target.dataset.refIndex, 10);
    day.readingRefs[refIndex] = target.value.trim();
  } else {
    day[field] = target.value;
  }
}

function handleGeneratedEditorClick(event) {
  const action = event.target.dataset.action;
  if (!action || !state.generatedPlan) return;

  const card = event.target.closest(".plan-day");
  if (!card) return;
  const dayNumber = Number.parseInt(card.dataset.day, 10);
  const dayIndex = dayNumber - 1;
  const day = state.generatedPlan.days[dayIndex];

  if (action === "remove-ref") {
    const refIndex = Number.parseInt(event.target.dataset.refIndex, 10);
    if (day.readingRefs.length > 1) {
      day.readingRefs.splice(refIndex, 1);
      renderGeneratedPlanEditor();
    }
  }

  if (action === "add-ref") {
    day.readingRefs.push("Psalm 23");
    renderGeneratedPlanEditor();
  }

  if (action === "regenerate-day") {
    state.generatedPlan = regenerateDay(state.generatedPlan, dayNumber);
    renderGeneratedPlanEditor();
  }
}

function copyGeneratedText() {
  if (!state.generatedPlan) return;
  const lines = state.generatedPlan.days.map((day) => {
    const refs = day.readingRefs.join(", ");
    return "Day " + day.day + ": " + day.title + "\nRefs: " + refs + "\nReflection: " + day.reflection + "\nPrayer: " + day.prayer;
  });

  navigator.clipboard.writeText(lines.join("\n\n"));
  dom.copyBtn.textContent = "Copied";
  setTimeout(() => {
    dom.copyBtn.textContent = "Copy";
  }, 1800);
}

function exportCompactPlan() {
  if (!state.generatedPlan) return;
  navigator.clipboard.writeText(toCompactJson(state.generatedPlan));
  dom.exportCompactBtn.textContent = "Copied compact";
  setTimeout(() => {
    dom.exportCompactBtn.textContent = "Export compact JSON";
  }, 1800);
}

function importPlan() {
  if (!state.currentUser) {
    dom.importMessage.textContent = "Log in to import and save plans.";
    return;
  }
  dom.importMessage.textContent = "";
  const input = dom.importJson.value.trim();
  if (!input) {
    dom.importMessage.textContent = "Paste JSON before importing.";
    return;
  }

  let parsed;
  try {
    parsed = JSON.parse(input);
  } catch (_error) {
    dom.importMessage.textContent = "Invalid JSON format.";
    return;
  }

  const validation = validatePlanSchema(parsed);
  if (!validation.valid) {
    dom.importMessage.textContent = "Invalid plan schema: " + validation.errors.join(" ");
    return;
  }

  parsed.savedId = "saved-" + Math.random().toString(36).slice(2, 10);
  parsed.savedAt = new Date().toISOString();
  state.savedPlans.unshift(parsed);
  savePlansToStorage();
  renderSavedPlans();
  dom.importMessage.textContent = "Plan imported and saved.";
}

function allVerseReferences() {
  const refs = [];
  Object.values(verseBankByMood).forEach((focuses) => {
    Object.values(focuses).forEach((list) => {
      list.forEach((ref) => refs.push(ref));
    });
  });
  return [...new Set(refs)];
}

function randomVerseRef() {
  const refs = allVerseReferences();
  if (!refs.length) return "Psalm 23";
  return refs[Math.floor(Math.random() * refs.length)];
}

function showRandomVerse() {
  if (!dom.verseDisplay) return;
  dom.verseDisplay.textContent = randomVerseRef();
}

function saveCheckin() {
  if (!state.currentUser) {
    if (dom.checkinMessage) dom.checkinMessage.textContent = "Log in to save check-ins.";
    return;
  }
  if (!dom.checkinMood || !dom.checkinNote || !dom.checkinMessage) return;
  const key = CHECKIN_KEY + "-" + state.currentUser.email;
  const payload = {
    moodId: dom.checkinMood.value,
    note: dom.checkinNote.value.trim(),
    createdAt: new Date().toISOString()
  };
  localStorage.setItem(key, JSON.stringify(payload));
  dom.checkinMessage.textContent = "Check-in saved.";
}

function loadCheckin() {
  if (!state.currentUser) {
    if (dom.checkinMessage) dom.checkinMessage.textContent = "Log in to load check-ins.";
    return;
  }
  if (!dom.checkinMood || !dom.checkinNote || !dom.checkinMessage) return;
  const key = CHECKIN_KEY + "-" + state.currentUser.email;
  const raw = localStorage.getItem(key);
  if (!raw) {
    dom.checkinMessage.textContent = "No saved check-in yet.";
    return;
  }
  try {
    const parsed = JSON.parse(raw);
    if (parsed.moodId) dom.checkinMood.value = parsed.moodId;
    dom.checkinNote.value = parsed.note || "";
    dom.checkinMessage.textContent = "Loaded check-in from " + formatDate(parsed.createdAt) + ".";
  } catch (_error) {
    dom.checkinMessage.textContent = "Could not load check-in.";
  }
}

function handleSavedPlansClick(event) {
  const action = event.target.dataset.action;
  const savedId = event.target.dataset.savedId;
  if (!action || !savedId) return;

  const index = state.savedPlans.findIndex((plan) => plan.savedId === savedId);
  if (index === -1) return;

  if (action === "saved-load") {
    const plan = clonePlan(state.savedPlans[index]);
    state.generatedPlan = clonePlan(plan);
    renderGeneratedPlanEditor();
    setActivePlan(plan);
  }

  if (action === "saved-duplicate") {
    const plan = clonePlan(state.savedPlans[index]);
    plan.savedId = "saved-" + Math.random().toString(36).slice(2, 10);
    plan.planName = plan.planName + " (Copy)";
    plan.savedAt = new Date().toISOString();
    state.savedPlans.unshift(plan);
    savePlansToStorage();
    renderSavedPlans();
  }

  if (action === "saved-rename") {
    const current = state.savedPlans[index];
    const name = window.prompt("Rename plan", current.planName);
    if (name && name.trim()) {
      current.planName = name.trim();
      savePlansToStorage();
      renderSavedPlans();
    }
  }

  if (action === "saved-delete") {
    state.savedPlans.splice(index, 1);
    savePlansToStorage();
    renderSavedPlans();
  }
}

function bindEvents() {
  dom.moodSearch.addEventListener("input", (event) => {
    state.moodSearch = event.target.value.trim().toLowerCase();
    renderMoodGrid();
  });

  dom.moodFilter.addEventListener("click", (event) => {
    const filter = event.target.dataset.filter;
    if (!filter) return;
    state.moodFilter = filter;
    [...dom.moodFilter.querySelectorAll(".chip")].forEach((chip) => {
      chip.classList.toggle("active", chip.dataset.filter === filter);
    });
    renderMoodGrid();
  });

  dom.moodGrid.addEventListener("click", (event) => {
    const button = event.target.closest('button[data-action="select-mood"]');
    if (!button) return;
    const moodId = button.dataset.moodId;
    if (!moodId) return;
    state.selectedMoodId = moodId;
    state.selectedBuiltInPlan = null;
    updateHeroFromMood(moodId);
    renderBuiltInPlans();
    dom.builtInPlanList.scrollIntoView({ behavior: "smooth", block: "nearest" });
  });

  dom.builtInPlanList.addEventListener("click", (event) => {
    const button = event.target.closest('button[data-action="load-built-in"]');
    if (!button) return;
    const planId = button.dataset.planId;
    if (!planId) return;
    const moodPlans = plansByMood[state.selectedMoodId] || [];
    const picked = moodPlans.find((plan) => plan.id === planId);
    if (!picked) return;
    state.selectedBuiltInPlan = clonePlan(picked);
    setActivePlan(state.selectedBuiltInPlan);
  });

  dom.startPlanBtn.addEventListener("click", () => {
    startCurrentPlan();
  });

  dom.prevDayBtn.addEventListener("click", () => {
    if (state.activeDayIndex > 0) {
      state.activeDayIndex -= 1;
      renderPlanViewer();
    }
  });

  dom.nextDayBtn.addEventListener("click", () => {
    if (!state.activePlan) return;
    if (state.activeDayIndex < state.activePlan.days.length - 1) {
      state.activeDayIndex += 1;
      renderPlanViewer();
    }
  });

  dom.markCompleteBtn.addEventListener("click", () => {
    if (!state.activePlanStarted || !state.activePlan) return;
    const day = state.activePlan.days[state.activeDayIndex].day;
    if (state.completedDays.has(day)) {
      state.completedDays.delete(day);
    } else {
      state.completedDays.add(day);
    }
    renderPlanViewer();
  });

  dom.saveActiveBtn.addEventListener("click", () => {
    if (!state.activePlan) return;
    savePlan(state.activePlan);
  });

  dom.form.addEventListener("submit", (event) => {
    event.preventDefault();
    generatePlanFromForm();
  });

  dom.planNameInput.addEventListener("input", (event) => {
    if (!state.generatedPlan) return;
    state.generatedPlan.planName = event.target.value;
  });

  dom.planOutput.addEventListener("input", handleGeneratedEditorInput);
  dom.planOutput.addEventListener("click", handleGeneratedEditorClick);

  dom.copyBtn.addEventListener("click", copyGeneratedText);
  dom.exportCompactBtn.addEventListener("click", exportCompactPlan);
  dom.downloadBtn.addEventListener("click", () => {
    exportCurrentPlan(state.generatedPlan || state.activePlan);
  });

  dom.saveGeneratedBtn.addEventListener("click", () => {
    if (!state.generatedPlan) return;
    state.generatedPlan.planName = dom.planNameInput.value.trim() || state.generatedPlan.planName;
    savePlan(state.generatedPlan);
  });

  dom.savedPlansList.addEventListener("click", handleSavedPlansClick);
  dom.importBtn.addEventListener("click", importPlan);

  if (dom.newVerseBtn) {
    dom.newVerseBtn.addEventListener("click", showRandomVerse);
  }
  if (dom.copyVerseBtn) {
    dom.copyVerseBtn.addEventListener("click", () => {
      if (!dom.verseDisplay) return;
      navigator.clipboard.writeText(dom.verseDisplay.textContent || "");
      dom.copyVerseBtn.textContent = "Copied";
      setTimeout(() => {
        dom.copyVerseBtn.textContent = "Copy verse ref";
      }, 1600);
    });
  }
  if (dom.saveCheckinBtn) {
    dom.saveCheckinBtn.addEventListener("click", saveCheckin);
  }
  if (dom.loadCheckinBtn) {
    dom.loadCheckinBtn.addEventListener("click", loadCheckin);
  }
  if (dom.registerBtn) {
    dom.registerBtn.addEventListener("click", registerUser);
  }
  if (dom.loginBtn) {
    dom.loginBtn.addEventListener("click", loginUser);
  }
  if (dom.logoutBtn) {
    dom.logoutBtn.addEventListener("click", logoutUser);
  }
}

function bootstrap() {
  dom.todayDate.textContent = todayText();
  loadAuthSession();
  populateMoodSelect();
  populateCheckinMoodSelect();
  renderThemeEmphasisOptions();
  loadPlansFromStorage();
  renderOverviewStats();
  renderMoodGrid();
  renderSavedPlans();
  updateHeroFromMood(state.selectedMoodId);
  renderBuiltInPlans();
  showRandomVerse();

  if (!state.generatedPlan && legacyPlans.length) {
    dom.planNameInput.value = "My Custom Plan";
  }

  renderAuthState();
  bindEvents();
}

bootstrap();
