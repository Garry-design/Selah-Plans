const { moods, plansByMood, clonePlan } = window.BiblePlansData;

const STORAGE_KEY = "bible-app-saved-plans-v2";
const AUTH_SESSION_KEY = "bible-app-auth-session-v1";

const state = {
  moodId: moods[0]?.id || "peace",
  planId: "",
  plan: null,
  dayIndex: 0,
  completed: new Set(),
  user: null
};

const dom = {
  detailTitle: document.getElementById("detail-title"),
  detailSummary: document.getElementById("detail-summary"),
  detailMood: document.getElementById("detail-mood"),
  detailPlan: document.getElementById("detail-plan"),
  detailProgress: document.getElementById("detail-progress"),
  progressFill: document.getElementById("progress-fill"),
  detailPrev: document.getElementById("detail-prev"),
  detailNext: document.getElementById("detail-next"),
  detailComplete: document.getElementById("detail-complete"),
  detailSave: document.getElementById("detail-save"),
  detailStatus: document.getElementById("detail-status"),
  dayTitle: document.getElementById("day-title"),
  dayMeta: document.getElementById("day-meta"),
  dayRefs: document.getElementById("day-refs"),
  dayReflection: document.getElementById("day-reflection"),
  dayPrayer: document.getElementById("day-prayer"),
  dayActionWrap: document.getElementById("day-action-wrap"),
  dayAction: document.getElementById("day-action")
};

function parseQuery() {
  const params = new URLSearchParams(window.location.search);
  const mood = params.get("mood");
  const plan = params.get("plan");
  if (mood && plansByMood[mood]) state.moodId = mood;
  if (plan) state.planId = plan;
}

function loadSession() {
  try {
    const raw = localStorage.getItem(AUTH_SESSION_KEY);
    const parsed = raw ? JSON.parse(raw) : null;
    if (parsed && parsed.email) state.user = parsed;
  } catch (_error) {
    state.user = null;
  }
}

function userPlansKey() {
  if (!state.user || !state.user.email) return null;
  return STORAGE_KEY + "-" + String(state.user.email).toLowerCase();
}

function moodLabel(moodId) {
  return moods.find((m) => m.id === moodId)?.label || moodId;
}

function populateMoodSelect() {
  dom.detailMood.innerHTML = "";
  moods.forEach((mood) => {
    const option = document.createElement("option");
    option.value = mood.id;
    option.textContent = mood.label;
    option.selected = mood.id === state.moodId;
    dom.detailMood.appendChild(option);
  });
}

function populatePlanSelect() {
  const list = plansByMood[state.moodId] || [];
  dom.detailPlan.innerHTML = "";
  list.forEach((plan, index) => {
    const option = document.createElement("option");
    option.value = plan.id;
    option.textContent = plan.planName;
    if (state.planId) {
      option.selected = plan.id === state.planId;
    } else {
      option.selected = index === 0;
    }
    dom.detailPlan.appendChild(option);
  });

  state.planId = dom.detailPlan.value;
}

function loadPlan() {
  const list = plansByMood[state.moodId] || [];
  const picked = list.find((plan) => plan.id === state.planId) || list[0];
  state.plan = picked ? clonePlan(picked) : null;
  state.dayIndex = 0;
  state.completed = new Set();
}

function progressPercent() {
  if (!state.plan || !state.plan.days.length) return 0;
  return Math.round((state.completed.size / state.plan.days.length) * 100);
}

function renderDay() {
  if (!state.plan) return;
  const day = state.plan.days[state.dayIndex];
  if (!day) return;

  dom.detailTitle.textContent = state.plan.planName;
  dom.detailSummary.textContent = state.plan.summary;
  dom.dayTitle.textContent = "Day " + day.day + ": " + day.title;
  dom.dayMeta.textContent = moodLabel(state.plan.moodId) + " • " + state.plan.durationDays + " days • " + state.plan.estMinutesPerDay + " min/day";
  dom.dayRefs.innerHTML = day.readingRefs.map((ref) => "<li>" + ref + "</li>").join("");
  dom.dayReflection.textContent = day.reflection;
  dom.dayPrayer.textContent = day.prayer;

  if (day.optionalAction) {
    dom.dayActionWrap.style.display = "grid";
    dom.dayAction.textContent = day.optionalAction;
  } else {
    dom.dayActionWrap.style.display = "none";
  }

  dom.detailProgress.textContent = "Day " + day.day + " of " + state.plan.days.length + " • " + progressPercent() + "% complete";
  dom.progressFill.style.width = progressPercent() + "%";
  dom.detailPrev.disabled = state.dayIndex === 0;
  dom.detailNext.disabled = state.dayIndex === state.plan.days.length - 1;

  const complete = state.completed.has(day.day);
  dom.detailComplete.textContent = complete ? "Completed" : "Mark complete";
}

function savePlan() {
  if (!state.user) {
    dom.detailStatus.textContent = "Log in on the Plans page before saving.";
    return;
  }
  if (!state.plan) return;

  const key = userPlansKey();
  if (!key) return;
  let existing = [];
  try {
    const raw = localStorage.getItem(key);
    existing = raw ? JSON.parse(raw) : [];
    if (!Array.isArray(existing)) existing = [];
  } catch (_error) {
    existing = [];
  }

  const payload = clonePlan(state.plan);
  payload.savedId = "saved-" + Math.random().toString(36).slice(2, 10);
  payload.savedAt = new Date().toISOString();
  payload.createdAt = payload.createdAt || new Date().toISOString();
  existing.unshift(payload);
  localStorage.setItem(key, JSON.stringify(existing));
  dom.detailStatus.textContent = "Plan saved to your account.";
}

function bindEvents() {
  dom.detailMood.addEventListener("change", () => {
    state.moodId = dom.detailMood.value;
    state.planId = "";
    populatePlanSelect();
    loadPlan();
    renderDay();
  });

  dom.detailPlan.addEventListener("change", () => {
    state.planId = dom.detailPlan.value;
    loadPlan();
    renderDay();
  });

  dom.detailPrev.addEventListener("click", () => {
    if (state.dayIndex > 0) {
      state.dayIndex -= 1;
      renderDay();
    }
  });

  dom.detailNext.addEventListener("click", () => {
    if (!state.plan) return;
    if (state.dayIndex < state.plan.days.length - 1) {
      state.dayIndex += 1;
      renderDay();
    }
  });

  dom.detailComplete.addEventListener("click", () => {
    if (!state.plan) return;
    const day = state.plan.days[state.dayIndex].day;
    if (state.completed.has(day)) {
      state.completed.delete(day);
    } else {
      state.completed.add(day);
    }
    renderDay();
  });

  dom.detailSave.addEventListener("click", savePlan);
}

function init() {
  parseQuery();
  loadSession();
  populateMoodSelect();
  populatePlanSelect();
  loadPlan();
  renderDay();
  bindEvents();
}

init();
