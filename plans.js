(function () {
  const legacyPlans = [
    {
      id: "peace",
      title: "Peace for the anxious",
      tag: "Calm",
      duration: "7 days",
      description: "Guided readings that slow racing thoughts and center your heart on God's nearness.",
      passages: [
        { theme: "Rest", passage: "Psalm 23", prompt: "Name the places you need the Shepherd's care." },
        { theme: "Release", passage: "Philippians 4:4-7", prompt: "Write down what you are releasing today." },
        { theme: "Quiet", passage: "Isaiah 26:3-4", prompt: "Where can you trust God more fully?" },
        { theme: "Presence", passage: "Matthew 6:25-34", prompt: "Notice where anxiety steals joy." },
        { theme: "Stillness", passage: "Psalm 46", prompt: "What does be still mean for you?" },
        { theme: "Confidence", passage: "2 Timothy 1:7", prompt: "List ways God has given you courage." },
        { theme: "Hope", passage: "Romans 15:13", prompt: "Pray for peace to overflow today." }
      ]
    },
    {
      id: "hope",
      title: "Hope when discouraged",
      tag: "Hope",
      duration: "5 days",
      description: "Lift your eyes with promises of renewal and future goodness.",
      passages: [
        { theme: "Renewal", passage: "Lamentations 3:22-26", prompt: "Identify a new mercy from today." },
        { theme: "Strength", passage: "Isaiah 40:28-31", prompt: "Where do you need fresh strength?" },
        { theme: "Joy", passage: "Psalm 42", prompt: "Speak truth to your soul." },
        { theme: "Faith", passage: "Hebrews 10:23", prompt: "Name a promise you're holding onto." },
        { theme: "Future", passage: "Jeremiah 29:11-13", prompt: "Write one step toward hope." }
      ]
    },
    {
      id: "strength",
      title: "Strength for the brave",
      tag: "Courage",
      duration: "10 days",
      description: "Scripture to fuel courage in hard decisions and big moments.",
      passages: [
        { theme: "Calling", passage: "Joshua 1:6-9", prompt: "Where do you need to be strong?" },
        { theme: "Protection", passage: "Psalm 91", prompt: "Describe God's protection in your life." },
        { theme: "Perseverance", passage: "James 1:2-4", prompt: "What is being formed in you?" },
        { theme: "Boldness", passage: "Acts 4:29-31", prompt: "Pray for boldness." },
        { theme: "Victory", passage: "Romans 8:31-39", prompt: "List what cannot separate you from love." }
      ]
    },
    {
      id: "gratitude",
      title: "Gratitude & joy",
      tag: "Joy",
      duration: "7 days",
      description: "Celebrate God's goodness and cultivate everyday thankfulness.",
      passages: [
        { theme: "Thanks", passage: "Psalm 100", prompt: "Write three gifts from today." },
        { theme: "Delight", passage: "Psalm 16", prompt: "Where do you see God's kindness?" },
        { theme: "Rejoice", passage: "Philippians 4:8-9", prompt: "Notice what is worthy of praise." },
        { theme: "Praise", passage: "Luke 17:11-19", prompt: "What would it mean to return and thank?" },
        { theme: "Contentment", passage: "1 Thessalonians 5:16-18", prompt: "Pray thanksgiving over today." }
      ]
    },
    {
      id: "guidance",
      title: "Guidance for decisions",
      tag: "Direction",
      duration: "6 days",
      description: "Seek clarity and wisdom with passages for discernment.",
      passages: [
        { theme: "Wisdom", passage: "Proverbs 3:5-6", prompt: "Where are you leaning on your own understanding?" },
        { theme: "Listen", passage: "Psalm 25:4-5", prompt: "Ask God to teach you His paths." },
        { theme: "Light", passage: "Psalm 119:105", prompt: "What is the next right step?" },
        { theme: "Discern", passage: "James 1:5", prompt: "Pray for wisdom generously." },
        { theme: "Peace", passage: "Colossians 3:15", prompt: "Notice what brings peace to your heart." }
      ]
    },
    {
      id: "healing",
      title: "Healing in sorrow",
      tag: "Comfort",
      duration: "8 days",
      description: "Gentle readings that bring comfort and healing through grief.",
      passages: [
        { theme: "Comfort", passage: "Psalm 34:18", prompt: "Name a place you need healing." },
        { theme: "Presence", passage: "Matthew 11:28-30", prompt: "What does rest look like for you?" },
        { theme: "Tears", passage: "Psalm 56:8", prompt: "Offer your tears to God." },
        { theme: "Restoration", passage: "Revelation 21:3-4", prompt: "Imagine the future God promises." },
        { theme: "Peace", passage: "John 14:27", prompt: "Receive the peace Jesus offers." }
      ]
    }
  ];

  const moods = [
    { id: "peace", label: "Peace", description: "Calm your heart with Scripture.", tags: ["comfort", "prayer"], iconOrEmoji: "Dove", colourHint: "sage" },
    { id: "hope", label: "Hope", description: "Lift your perspective in hard seasons.", tags: ["comfort", "growth"], iconOrEmoji: "Sunrise", colourHint: "clay" },
    { id: "strength", label: "Strength", description: "Find courage for hard steps.", tags: ["growth", "prayer"], iconOrEmoji: "Shield", colourHint: "dusk" },
    { id: "gratitude", label: "Gratitude", description: "Practice joy and thanksgiving.", tags: ["growth", "prayer"], iconOrEmoji: "Leaf", colourHint: "rose" },
    { id: "guidance", label: "Guidance", description: "Seek wisdom for decisions.", tags: ["wisdom", "prayer"], iconOrEmoji: "Compass", colourHint: "sand" },
    { id: "healing", label: "Healing", description: "Rest in God through sorrow.", tags: ["comfort", "prayer"], iconOrEmoji: "Olive", colourHint: "sage" },
    { id: "anxiety", label: "Anxiety", description: "Trade worry for prayerful trust.", tags: ["comfort", "prayer"], iconOrEmoji: "Anchor", colourHint: "sage" },
    { id: "loneliness", label: "Loneliness", description: "Remember God is present and people matter.", tags: ["comfort", "growth"], iconOrEmoji: "Lantern", colourHint: "clay" },
    { id: "stressBurnout", label: "Stress & Burnout", description: "Recover rhythms of rest and renewal.", tags: ["comfort", "wisdom"], iconOrEmoji: "Cup", colourHint: "sand" },
    { id: "fear", label: "Fear", description: "Build confidence in God's promises.", tags: ["comfort", "growth"], iconOrEmoji: "Mountain", colourHint: "dusk" },
    { id: "decisionMaking", label: "Decision Making", description: "Discern with biblical wisdom.", tags: ["wisdom", "prayer"], iconOrEmoji: "Map", colourHint: "sand" },
    { id: "waitingPatience", label: "Waiting & Patience", description: "Trust God in the in-between.", tags: ["growth", "prayer"], iconOrEmoji: "Hourglass", colourHint: "clay" },
    { id: "forgiveness", label: "Forgiveness", description: "Receive grace and extend mercy.", tags: ["growth", "prayer"], iconOrEmoji: "Hands", colourHint: "rose" },
    { id: "purposeCalling", label: "Purpose & Calling", description: "Live faithfully where God places you.", tags: ["growth", "wisdom"], iconOrEmoji: "Path", colourHint: "dusk" },
    { id: "joy", label: "Joy", description: "Celebrate God in every circumstance.", tags: ["growth", "prayer"], iconOrEmoji: "Song", colourHint: "rose" },
    { id: "anger", label: "Anger", description: "Process emotion with truth and self-control.", tags: ["wisdom", "growth"], iconOrEmoji: "River", colourHint: "dusk" },
    { id: "shameGuilt", label: "Shame & Guilt", description: "Walk in confession and freedom.", tags: ["comfort", "growth"], iconOrEmoji: "Light", colourHint: "sage" },
    { id: "doubt", label: "Doubt", description: "Bring questions to God with honesty.", tags: ["wisdom", "prayer"], iconOrEmoji: "Seed", colourHint: "clay" },
    { id: "grief", label: "Grief", description: "Lament, remember, and heal with God.", tags: ["comfort", "prayer"], iconOrEmoji: "Tear", colourHint: "sage" },
    { id: "relationships", label: "Relationships", description: "Grow in love, patience, and healthy words.", tags: ["growth", "wisdom"], iconOrEmoji: "Bridge", colourHint: "rose" },
    { id: "workPressure", label: "Work Pressure", description: "Work with peace, focus, and integrity.", tags: ["wisdom", "growth"], iconOrEmoji: "Clock", colourHint: "sand" },
    { id: "temptation", label: "Temptation", description: "Stand firm with Scripture and self-control.", tags: ["growth", "prayer"], iconOrEmoji: "Shield", colourHint: "dusk" },
    { id: "finances", label: "Finances", description: "Practice trust, generosity, and stewardship.", tags: ["wisdom", "growth"], iconOrEmoji: "SeedBag", colourHint: "clay" }
  ];

  const themeEmphasisOptions = [
    "identity in Christ",
    "prayer",
    "wisdom",
    "comfort",
    "courage",
    "surrender",
    "forgiveness",
    "gratitude",
    "trust",
    "perseverance"
  ];

  const baseFocusBank = {
    psalms: ["Psalm 1", "Psalm 23", "Psalm 27", "Psalm 34", "Psalm 46", "Psalm 62", "Psalm 91", "Psalm 103", "Psalm 121", "Psalm 139"],
    gospels: ["Matthew 5:1-12", "Matthew 6:25-34", "Mark 8:34-35", "Luke 10:38-42", "Luke 12:22-32", "John 10:10-11", "John 14:1-6", "John 15:1-8", "John 16:33", "John 20:24-29"],
    proverbs: ["Proverbs 3:5-6", "Proverbs 4:23", "Proverbs 9:10", "Proverbs 11:2", "Proverbs 12:25", "Proverbs 15:1", "Proverbs 16:3", "Proverbs 16:9", "Proverbs 18:10", "Proverbs 19:21"],
    letters: ["Romans 5:1-5", "Romans 8:1-2", "Romans 8:31-39", "1 Corinthians 10:13", "2 Corinthians 12:9-10", "Galatians 5:22-23", "Ephesians 2:8-10", "Philippians 4:4-9", "Colossians 3:12-17", "1 Peter 5:6-10"],
    wholeBible: ["Joshua 1:8-9", "1 Samuel 12:24", "Isaiah 40:28-31", "Jeremiah 17:7-8", "Lamentations 3:22-24", "Micah 6:8", "Hebrews 10:23", "James 1:2-5", "Revelation 21:3-5", "2 Timothy 1:7"]
  };

  const moodAnchors = {
    peace: {
      psalms: ["Psalm 4:8", "Psalm 131"], gospels: ["John 14:27", "Luke 8:22-25"], proverbs: ["Proverbs 14:30", "Proverbs 17:1"], letters: ["Philippians 4:6-7", "2 Thessalonians 3:16"], wholeBible: ["Isaiah 26:3-4", "Numbers 6:24-26"]
    },
    hope: {
      psalms: ["Psalm 42", "Psalm 71:14"], gospels: ["Luke 24:13-35", "John 11:25-26"], proverbs: ["Proverbs 13:12", "Proverbs 24:14"], letters: ["Romans 15:13", "Hebrews 6:19"], wholeBible: ["Jeremiah 29:11-13", "Lamentations 3:22-26"]
    },
    strength: {
      psalms: ["Psalm 18:1-2", "Psalm 27:1"], gospels: ["Mark 10:27", "John 16:33"], proverbs: ["Proverbs 24:10", "Proverbs 28:1"], letters: ["Ephesians 6:10-11", "2 Timothy 1:7"], wholeBible: ["Joshua 1:6-9", "Isaiah 41:10"]
    },
    gratitude: {
      psalms: ["Psalm 100", "Psalm 136:1"], gospels: ["Luke 17:11-19", "John 6:11"], proverbs: ["Proverbs 15:15", "Proverbs 17:22"], letters: ["1 Thessalonians 5:16-18", "Colossians 3:15-17"], wholeBible: ["Deuteronomy 8:10", "Nehemiah 8:10"]
    },
    guidance: {
      psalms: ["Psalm 25:4-5", "Psalm 119:105"], gospels: ["John 10:27", "Matthew 7:7-8"], proverbs: ["Proverbs 3:5-6", "Proverbs 11:14"], letters: ["James 1:5", "Colossians 1:9-10"], wholeBible: ["Isaiah 30:21", "Exodus 33:14"]
    },
    healing: {
      psalms: ["Psalm 34:18", "Psalm 147:3"], gospels: ["Matthew 11:28-30", "John 9:1-7"], proverbs: ["Proverbs 4:20-22", "Proverbs 16:24"], letters: ["2 Corinthians 1:3-4", "1 Peter 5:7"], wholeBible: ["Isaiah 61:1-3", "Revelation 21:4"]
    },
    anxiety: {
      psalms: ["Psalm 55:22", "Psalm 94:19"], gospels: ["Luke 12:22-32", "Matthew 11:28-30"], proverbs: ["Proverbs 12:25", "Proverbs 3:24"], letters: ["Philippians 4:6-7", "1 Peter 5:7"], wholeBible: ["Isaiah 41:10", "Deuteronomy 31:8"]
    },
    loneliness: {
      psalms: ["Psalm 68:5-6", "Psalm 27:10"], gospels: ["John 14:18", "Luke 24:15"], proverbs: ["Proverbs 17:17", "Proverbs 18:24"], letters: ["Hebrews 13:5", "Romans 12:15"], wholeBible: ["Genesis 2:18", "Deuteronomy 31:6"]
    },
    stressBurnout: {
      psalms: ["Psalm 61:1-2", "Psalm 90:14"], gospels: ["Mark 6:31", "Matthew 6:33"], proverbs: ["Proverbs 14:29", "Proverbs 17:22"], letters: ["Galatians 6:9", "2 Corinthians 4:16"], wholeBible: ["Isaiah 40:31", "Exodus 18:17-23"]
    },
    fear: {
      psalms: ["Psalm 27:1", "Psalm 56:3-4"], gospels: ["Mark 4:39-40", "John 14:27"], proverbs: ["Proverbs 29:25", "Proverbs 14:26"], letters: ["2 Timothy 1:7", "1 John 4:18"], wholeBible: ["Isaiah 41:10", "Joshua 1:9"]
    },
    decisionMaking: {
      psalms: ["Psalm 32:8", "Psalm 37:5"], gospels: ["Luke 6:12-13", "John 8:12"], proverbs: ["Proverbs 16:3", "Proverbs 16:9"], letters: ["Romans 12:2", "Colossians 3:15"], wholeBible: ["James 1:5", "1 Kings 3:9"]
    },
    waitingPatience: {
      psalms: ["Psalm 27:14", "Psalm 130:5"], gospels: ["Luke 8:15", "Matthew 13:31-32"], proverbs: ["Proverbs 14:29", "Proverbs 16:32"], letters: ["Romans 8:25", "James 5:7-8"], wholeBible: ["Habakkuk 2:3", "Ecclesiastes 3:1"]
    },
    forgiveness: {
      psalms: ["Psalm 32:1-2", "Psalm 103:10-12"], gospels: ["Matthew 6:14-15", "Luke 23:34"], proverbs: ["Proverbs 10:12", "Proverbs 19:11"], letters: ["Ephesians 4:31-32", "Colossians 3:13"], wholeBible: ["Micah 7:18-19", "Genesis 50:20-21"]
    },
    purposeCalling: {
      psalms: ["Psalm 57:2", "Psalm 138:8"], gospels: ["Matthew 5:14-16", "John 15:16"], proverbs: ["Proverbs 16:3", "Proverbs 19:21"], letters: ["Ephesians 2:10", "2 Timothy 1:9"], wholeBible: ["Jeremiah 1:5", "Esther 4:14"]
    },
    joy: {
      psalms: ["Psalm 16:11", "Psalm 126:3"], gospels: ["John 15:11", "Luke 10:20"], proverbs: ["Proverbs 15:13", "Proverbs 17:22"], letters: ["Philippians 4:4", "Romans 12:12"], wholeBible: ["Nehemiah 8:10", "Zephaniah 3:17"]
    },
    anger: {
      psalms: ["Psalm 37:8", "Psalm 141:3"], gospels: ["Matthew 5:22-24", "Luke 6:27-28"], proverbs: ["Proverbs 15:1", "Proverbs 29:11"], letters: ["Ephesians 4:26-27", "James 1:19-20"], wholeBible: ["Genesis 4:6-7", "Ecclesiastes 7:9"]
    },
    shameGuilt: {
      psalms: ["Psalm 51:1-2", "Psalm 103:12"], gospels: ["John 8:10-11", "Luke 15:20-24"], proverbs: ["Proverbs 28:13", "Proverbs 11:2"], letters: ["Romans 8:1", "1 John 1:9"], wholeBible: ["Isaiah 1:18", "Zechariah 3:1-4"]
    },
    doubt: {
      psalms: ["Psalm 73:26", "Psalm 77:11-12"], gospels: ["Mark 9:24", "John 20:27-29"], proverbs: ["Proverbs 3:5", "Proverbs 30:5"], letters: ["Hebrews 11:1", "James 1:6"], wholeBible: ["Habakkuk 1:2-3", "Genesis 15:6"]
    },
    grief: {
      psalms: ["Psalm 30:5", "Psalm 147:3"], gospels: ["John 11:35-36", "Luke 7:13"], proverbs: ["Proverbs 14:10", "Proverbs 17:22"], letters: ["2 Corinthians 1:3-4", "1 Thessalonians 4:13-14"], wholeBible: ["Lamentations 3:31-33", "Revelation 21:4"]
    },
    relationships: {
      psalms: ["Psalm 133:1", "Psalm 19:14"], gospels: ["John 13:34-35", "Matthew 7:12"], proverbs: ["Proverbs 15:1", "Proverbs 27:17"], letters: ["Ephesians 4:2-3", "Colossians 3:13-14"], wholeBible: ["Genesis 2:24", "Micah 6:8"]
    },
    workPressure: {
      psalms: ["Psalm 90:17", "Psalm 127:1-2"], gospels: ["Matthew 11:28-30", "Luke 10:41-42"], proverbs: ["Proverbs 16:3", "Proverbs 22:29"], letters: ["Colossians 3:23-24", "2 Thessalonians 3:10"], wholeBible: ["Exodus 20:8-10", "Ecclesiastes 3:13"]
    },
    temptation: {
      psalms: ["Psalm 119:9-11", "Psalm 141:3-4"], gospels: ["Matthew 4:1-11", "Mark 14:38"], proverbs: ["Proverbs 4:14-15", "Proverbs 25:28"], letters: ["1 Corinthians 10:13", "James 1:14-15"], wholeBible: ["Genesis 39:9", "Deuteronomy 6:5"]
    },
    finances: {
      psalms: ["Psalm 24:1", "Psalm 37:25"], gospels: ["Matthew 6:19-21", "Luke 12:15"], proverbs: ["Proverbs 3:9-10", "Proverbs 21:5"], letters: ["2 Corinthians 9:6-8", "1 Timothy 6:6-10"], wholeBible: ["Malachi 3:10", "Deuteronomy 8:18"]
    }
  };

  const styleGuides = {
    gentle: {
      reflectionOpeners: ["Where do you need comfort today", "What part of this reading quiets your heart", "What burden can you release in prayer"],
      prayerOpeners: ["Jesus, give me rest", "Father, hold me close", "Spirit, remind me of Your peace"],
      actionOpeners: ["Take five slow breaths and pray", "Text one trusted friend for prayer", "Write one sentence of gratitude"]
    },
    balanced: {
      reflectionOpeners: ["What truth stands out for today", "Where do you sense an invitation to trust", "How can this passage shape one decision"],
      prayerOpeners: ["Lord, form my heart", "Father, guide my steps", "Jesus, anchor me in truth"],
      actionOpeners: ["Journal one concrete next step", "Pray through each reference once", "Share one insight with someone"]
    },
    challenge: {
      reflectionOpeners: ["What needs to change in light of this passage", "What step of obedience are you avoiding", "Where must you surrender control"],
      prayerOpeners: ["Lord, make me willing", "Jesus, strengthen me for obedience", "Father, align my desires with Yours"],
      actionOpeners: ["Choose one costly act of obedience today", "Confess one area of resistance", "Serve someone intentionally before the day ends"]
    }
  };

  function toTitle(text) {
    return text.replace(/([A-Z])/g, " $1").replace(/^./, (s) => s.toUpperCase()).trim();
  }

  function unique(values) {
    return [...new Set(values)];
  }

  function buildVerseBankByMood() {
    const bank = {};
    moods.forEach((mood) => {
      const anchors = moodAnchors[mood.id];
      bank[mood.id] = {
        psalms: unique([].concat(anchors.psalms, baseFocusBank.psalms)),
        gospels: unique([].concat(anchors.gospels, baseFocusBank.gospels)),
        proverbs: unique([].concat(anchors.proverbs, baseFocusBank.proverbs)),
        letters: unique([].concat(anchors.letters, baseFocusBank.letters)),
        wholeBible: unique([].concat(anchors.wholeBible, baseFocusBank.wholeBible))
      };
    });
    return bank;
  }

  const verseBankByMood = buildVerseBankByMood();

  function getMoodMeta(moodId) {
    return moods.find((mood) => mood.id === moodId);
  }

  function buildReadingRefs(moodId, focus, dayIndex, variant) {
    const bank = verseBankByMood[moodId];
    const focusKey = focus in bank ? focus : "wholeBible";
    const primary = bank[focusKey];
    const secondaryOne = bank.psalms;
    const secondaryTwo = bank.letters;
    const refs = [];
    refs.push(primary[(dayIndex * 2 + variant) % primary.length]);
    refs.push(secondaryOne[(dayIndex + variant + 1) % secondaryOne.length]);
    refs.push(secondaryTwo[(dayIndex + variant + 3) % secondaryTwo.length]);
    if (variant % 3 === 0) {
      refs.push(bank.wholeBible[(dayIndex + variant + 2) % bank.wholeBible.length]);
    }
    return unique(refs).slice(0, 4);
  }

  function buildDayTitle(moodLabel, day, profileWord) {
    const nouns = ["Foundation", "Trust", "Prayer", "Surrender", "Courage", "Perspective", "Renewal", "Patience", "Hope", "Obedience", "Wisdom", "Peace", "Identity", "Mercy"];
    return profileWord + " " + nouns[(day - 1) % nouns.length] + " (Day " + day + ")";
  }

  function makeDayEntry(args) {
    const mood = getMoodMeta(args.moodId);
    const guide = styleGuides[args.style] || styleGuides.balanced;
    const refs = buildReadingRefs(args.moodId, args.focus, args.day - 1, args.seedOffset);
    const emphasis = args.emphasisTags.length ? args.emphasisTags[(args.day - 1) % args.emphasisTags.length] : "trust";
    const title = buildDayTitle(mood.label, args.day, args.profileWord);
    const reflection = guide.reflectionOpeners[(args.day - 1) % guide.reflectionOpeners.length] + " as you practice " + emphasis + "?";
    const prayer = guide.prayerOpeners[(args.day + 1) % guide.prayerOpeners.length] + " as I walk in " + mood.label.toLowerCase() + " today.";
    const optionalAction = args.style === "challenge" || args.day % 3 === 0 ? guide.actionOpeners[(args.day + 2) % guide.actionOpeners.length] + "." : undefined;

    return {
      day: args.day,
      title,
      readingRefs: refs,
      reflection,
      prayer,
      optionalAction
    };
  }

  function buildPlanFromSettings(settings) {
    const mood = getMoodMeta(settings.moodId);
    const days = [];
    for (let day = 1; day <= settings.durationDays; day += 1) {
      days.push(
        makeDayEntry({
          moodId: settings.moodId,
          focus: settings.bibleFocus,
          style: settings.outputStyle,
          day,
          seedOffset: settings.seedOffset,
          profileWord: settings.profileWord,
          emphasisTags: settings.themeEmphasis
        })
      );
    }

    return {
      id: settings.id,
      moodId: settings.moodId,
      planName: settings.planName,
      title: settings.title,
      summary: settings.summary,
      durationDays: settings.durationDays,
      estMinutesPerDay: settings.minutesPerDay,
      emphasisTags: settings.themeEmphasis,
      createdAt: settings.createdAt,
      source: settings.source,
      generatorSettings: settings.generatorSettings || null,
      days
    };
  }

  function buildGeneratedPlan(options) {
    const mood = getMoodMeta(options.moodId);
    const createdAt = new Date().toISOString();
    const settings = {
      id: "generated-" + Math.random().toString(36).slice(2, 10),
      moodId: options.moodId,
      planName: options.planName || mood.label + " Custom Plan",
      title: mood.label + " Custom Plan",
      summary: "Generated plan focused on " + mood.label.toLowerCase() + ".",
      durationDays: options.durationDays,
      minutesPerDay: options.minutesPerDay,
      bibleFocus: options.bibleFocus,
      themeEmphasis: options.themeEmphasis,
      outputStyle: options.outputStyle,
      createdAt,
      seedOffset: Math.floor(Math.random() * 9),
      profileWord: options.outputStyle === "gentle" ? "Gentle" : options.outputStyle === "challenge" ? "Bold" : "Steady",
      source: "generated",
      generatorSettings: {
        moodId: options.moodId,
        durationDays: options.durationDays,
        minutesPerDay: options.minutesPerDay,
        bibleFocus: options.bibleFocus,
        themeEmphasis: options.themeEmphasis,
        outputStyle: options.outputStyle
      }
    };

    return buildPlanFromSettings(settings);
  }

  function regenerateDay(plan, dayNumber) {
    if (!plan || !Array.isArray(plan.days)) {
      return plan;
    }
    const updated = JSON.parse(JSON.stringify(plan));
    const dayIndex = dayNumber - 1;
    const settings = updated.generatorSettings || {
      moodId: updated.moodId,
      durationDays: updated.durationDays,
      minutesPerDay: updated.estMinutesPerDay,
      bibleFocus: "wholeBible",
      themeEmphasis: updated.emphasisTags || ["trust"],
      outputStyle: "balanced"
    };
    const profileWord = settings.outputStyle === "gentle" ? "Gentle" : settings.outputStyle === "challenge" ? "Bold" : "Steady";

    updated.days[dayIndex] = makeDayEntry({
      moodId: settings.moodId,
      focus: settings.bibleFocus,
      style: settings.outputStyle,
      day: dayNumber,
      seedOffset: dayNumber + Math.floor(Math.random() * 6),
      profileWord,
      emphasisTags: settings.themeEmphasis || ["trust"]
    });

    return updated;
  }

  function adaptLegacyPlan(legacyPlan) {
    const durationDays = Number.parseInt(legacyPlan.duration, 10) || legacyPlan.passages.length;
    const moodLabel = getMoodMeta(legacyPlan.id).label;

    return {
      id: legacyPlan.id + "-legacy",
      moodId: legacyPlan.id,
      planName: legacyPlan.title,
      title: legacyPlan.title,
      summary: legacyPlan.description,
      durationDays,
      estMinutesPerDay: 8,
      emphasisTags: [legacyPlan.tag.toLowerCase()],
      createdAt: null,
      source: "legacy",
      generatorSettings: null,
      days: legacyPlan.passages.map((entry, index) => ({
        day: index + 1,
        title: entry.theme,
        readingRefs: unique([entry.passage, baseFocusBank.psalms[index % baseFocusBank.psalms.length]]),
        reflection: entry.prompt,
        prayer: "Pray for " + moodLabel.toLowerCase() + " in this area today."
      }))
    };
  }

  function buildBuiltinPlansForMood(mood) {
    const baseTags = mood.tags[0] ? [mood.tags[0], "trust"] : ["trust"];
    const resetPlan = buildPlanFromSettings({
      id: mood.id + "-reset-7",
      moodId: mood.id,
      planName: mood.label + " 7 Day Reset",
      title: mood.label + " 7 Day Reset",
      summary: "Seven focused days to reset around God.",
      durationDays: 7,
      minutesPerDay: 10,
      bibleFocus: "wholeBible",
      themeEmphasis: baseTags,
      outputStyle: "balanced",
      createdAt: null,
      seedOffset: 1,
      profileWord: "Reset",
      source: "builtin"
    });

    const deepenPlan = buildPlanFromSettings({
      id: mood.id + "-deepen-14",
      moodId: mood.id,
      planName: mood.label + " 14 Day Deepen",
      title: mood.label + " 14 Day Deepen",
      summary: "Two weeks to deepen conviction and practice.",
      durationDays: 14,
      minutesPerDay: 15,
      bibleFocus: "letters",
      themeEmphasis: unique(baseTags.concat(["perseverance"])),
      outputStyle: "challenge",
      createdAt: null,
      seedOffset: 3,
      profileWord: "Deepen",
      source: "builtin"
    });

    const psalmPlan = buildPlanFromSettings({
      id: mood.id + "-psalm-7",
      moodId: mood.id,
      planName: mood.label + " Psalm Based",
      title: mood.label + " Psalm Based",
      summary: "Psalms-centered readings for honest prayer.",
      durationDays: 7,
      minutesPerDay: 8,
      bibleFocus: "psalms",
      themeEmphasis: unique(baseTags.concat(["prayer"])),
      outputStyle: "gentle",
      createdAt: null,
      seedOffset: 5,
      profileWord: "Psalm",
      source: "builtin"
    });

    const wisdomPlan = buildPlanFromSettings({
      id: mood.id + "-wisdom-21",
      moodId: mood.id,
      planName: mood.label + " 21 Day Wisdom Track",
      title: mood.label + " 21 Day Wisdom Track",
      summary: "Three weeks of practical Scripture habits.",
      durationDays: 21,
      minutesPerDay: 12,
      bibleFocus: "proverbs",
      themeEmphasis: unique(baseTags.concat(["wisdom", "perseverance"])),
      outputStyle: "balanced",
      createdAt: null,
      seedOffset: 7,
      profileWord: "Wisdom",
      source: "builtin"
    });

    return [resetPlan, deepenPlan, psalmPlan, wisdomPlan];
  }

  const plansByMood = {};
  moods.forEach((mood) => {
    plansByMood[mood.id] = buildBuiltinPlansForMood(mood);
  });

  legacyPlans.forEach((legacyPlan) => {
    plansByMood[legacyPlan.id].push(adaptLegacyPlan(legacyPlan));
  });

  function validatePlanSchema(plan) {
    const errors = [];
    if (!plan || typeof plan !== "object") errors.push("Plan must be an object.");
    if (!plan.planName || typeof plan.planName !== "string") errors.push("planName is required.");
    if (!plan.moodId || typeof plan.moodId !== "string") errors.push("moodId is required.");
    if (!Number.isInteger(plan.durationDays)) errors.push("durationDays must be an integer.");
    if (!Number.isInteger(plan.estMinutesPerDay)) errors.push("estMinutesPerDay must be an integer.");
    if (!Array.isArray(plan.days)) errors.push("days must be an array.");

    if (Array.isArray(plan.days)) {
      plan.days.forEach((day, idx) => {
        if (!Number.isInteger(day.day)) errors.push("days[" + idx + "].day must be an integer.");
        if (typeof day.title !== "string") errors.push("days[" + idx + "].title must be a string.");
        if (!Array.isArray(day.readingRefs)) errors.push("days[" + idx + "].readingRefs must be an array.");
        if (typeof day.reflection !== "string") errors.push("days[" + idx + "].reflection must be a string.");
        if (typeof day.prayer !== "string") errors.push("days[" + idx + "].prayer must be a string.");
      });
    }

    return {
      valid: errors.length === 0,
      errors
    };
  }

  function clonePlan(plan) {
    return JSON.parse(JSON.stringify(plan));
  }

  function toCompactJson(plan) {
    return JSON.stringify(plan);
  }

  window.BiblePlansData = {
    legacyPlans,
    moods,
    plansByMood,
    verseBankByMood,
    themeEmphasisOptions,
    toTitle,
    buildGeneratedPlan,
    regenerateDay,
    validatePlanSchema,
    clonePlan,
    toCompactJson
  };
})();
