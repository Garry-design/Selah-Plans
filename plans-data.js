/* ============================================================
   SELAH PLANS v2 — plans-data.js
   15 moods · 40+ built-in plans · Full Scripture content
   ============================================================ */

const MOODS = [
  { id:'anxiety',     label:'Anxiety',      emoji:'🌿', color:'#5A8A6A', desc:'When worry won\'t let go' },
  { id:'grief',       label:'Grief',        emoji:'🌧', color:'#5A6A8A', desc:'Walking through loss' },
  { id:'doubt',       label:'Doubt',        emoji:'🌫', color:'#7A6A8A', desc:'When faith feels thin' },
  { id:'fear',        label:'Fear',         emoji:'🕯', color:'#8A7A5A', desc:'Courage for the afraid' },
  { id:'joy',         label:'Joy',          emoji:'☀️', color:'#C49A38', desc:'Celebrating God\'s goodness' },
  { id:'gratitude',   label:'Gratitude',    emoji:'🌸', color:'#8A5A6A', desc:'The practice of noticing' },
  { id:'loneliness',  label:'Loneliness',   emoji:'🌙', color:'#4A5A7A', desc:'You are not forgotten' },
  { id:'anger',       label:'Anger',        emoji:'🔥', color:'#8A4A3A', desc:'Holy and unholy fire' },
  { id:'shame',       label:'Shame',        emoji:'🍂', color:'#7A5A3A', desc:'Grace for the hidden self' },
  { id:'burnout',     label:'Burnout',      emoji:'🪨', color:'#6A6A5A', desc:'Rest for the exhausted' },
  { id:'hope',        label:'Hope',         emoji:'🌅', color:'#B85E30', desc:'Anchors for the waiting' },
  { id:'identity',    label:'Identity',     emoji:'🪞', color:'#5A7A8A', desc:'Who God says you are' },
  { id:'forgiveness', label:'Forgiveness',  emoji:'🕊', color:'#6A8A7A', desc:'Releasing what was done' },
  { id:'purpose',     label:'Purpose',      emoji:'🧭', color:'#8A6A3A', desc:'Why am I here?' },
  { id:'transition',  label:'Transition',   emoji:'🚪', color:'#7A7A8A', desc:'Standing in the doorway' },
];

const SELAH_PLANS = [

  /* ═══════════════════════════ ANXIETY ═══════════════════════════ */
  {
    id:'anxiety-peace', mood:'anxiety', moodLabel:'Anxiety', moodEmoji:'🌿',
    name:'Peace in the Storm', duration:7, featured:true,
    description:'Walk through God\'s invitations to cast your cares and receive His peace that surpasses understanding.',
    tags:['peace','trust','prayer','surrender'],
    days:[
      { day:1, title:'Cast Your Anxieties', reference:'Philippians 4:6-7',
        reflection:'What specific worry have you been carrying alone? What would it look like to genuinely hand it over today, with thanksgiving rather than dread?',
        prayer:'Lord, I confess I\'ve been trying to carry what only You can hold. I bring my worry to You now and ask for the peace that surpasses all understanding. Guard my heart and mind in Christ Jesus. Amen.' },
      { day:2, title:'God in the Whirlwind', reference:'Psalm 46:1-3,10',
        reflection:'The Psalmist says "Be still and know." What does stillness cost you right now? What would it mean to trust God as your refuge even if the earth gives way?',
        prayer:'God, You are my refuge and strength. When everything shifts, still my striving. Let me know You — truly know You — in this place. Amen.' },
      { day:3, title:'Do Not Worry About Tomorrow', reference:'Matthew 6:25-34',
        reflection:'Jesus points to birds and wildflowers. Which "tomorrow" are you borrowing trouble from today?',
        prayer:'Father, You clothe the lilies and feed the sparrows. Teach me to seek Your kingdom first, trusting that all I truly need will be added. Amen.' },
      { day:4, title:'Perfect Peace', reference:'Isaiah 26:3-4',
        reflection:'"Whose mind is stayed on You." Where is your mind staying today — on the problem or on the Person?',
        prayer:'Lord, I want my mind fixed on You. You are the everlasting Rock. I choose You today. Amen.' },
      { day:5, title:'The God Who Goes Before', reference:'Joshua 1:9',
        reflection:'God commands courage four times in this chapter. What\'s the courageous step you\'ve been afraid to take?',
        prayer:'God, You have not given me a spirit of fear. Whatever I walk into today, You are already there. Amen.' },
      { day:6, title:'Come to Me', reference:'Matthew 11:28-30',
        reflection:'Jesus promises rest for the weary. What is the yoke you\'ve been carrying that He never asked you to bear?',
        prayer:'Jesus, I come. Take my heavy yoke. Teach me to walk with You — gently, humbly, one step at a time. Amen.' },
      { day:7, title:'Nothing Can Separate Us', reference:'Romans 8:38-39',
        reflection:'Paul lists things that cannot separate us from God\'s love — including "things to come." What anxiety belongs in that list for you?',
        prayer:'Father, nothing — not my fears, my failures, my future — can tear me from Your love in Christ. Root me in that love today. Amen.' }
    ]
  },
  {
    id:'anxiety-trust', mood:'anxiety', moodLabel:'Anxiety', moodEmoji:'🌿',
    name:'Trusting When You Cannot See', duration:5,
    description:'Five days exploring the biblical invitation to trust God in the gaps — when the path isn\'t clear and faith is all you have.',
    tags:['trust','faith','sovereignty','patience'],
    days:[
      { day:1, title:'Lean Not on Your Own Understanding', reference:'Proverbs 3:5-6',
        reflection:'What are you trying to "figure out" right now that may need to be released rather than solved?',
        prayer:'Lord, teach me the wisdom of trusting You completely — even when I don\'t have the full picture. Direct my path. Amen.' },
      { day:2, title:'Faith Is the Evidence', reference:'Hebrews 11:1-3',
        reflection:'Faith is "confidence in what we hope for." What unseen thing is God asking you to trust Him about today?',
        prayer:'God, grow my faith — not just faith in doctrines, but faith that walks forward when the way is dark. Amen.' },
      { day:3, title:'Fear Not, I Am With You', reference:'Isaiah 41:10',
        reflection:'God says "do not fear, for I am with you." Notice the reason isn\'t circumstances — it\'s His presence. How does God\'s nearness change what you face?',
        prayer:'Lord, You are WITH me. You uphold me with Your righteous right hand. That is enough. Strengthen me today. Amen.' },
      { day:4, title:'When I Am Afraid', reference:'Psalm 56:3-4',
        reflection:'David writes "when I am afraid" — not "if." He doesn\'t deny the fear; he chooses to trust inside it. What would that look like for you?',
        prayer:'Father, I choose to trust You inside this fear. What can man do to me when You hold all things? Amen.' },
      { day:5, title:'Walk by Faith', reference:'2 Corinthians 5:7',
        reflection:'Look back on a moment when you couldn\'t see what God was doing — but He was working. Let that history give you confidence for today\'s unknown.',
        prayer:'Thank You, God, that my vision is not the limit of Your work. I walk forward in faith today. Amen.' }
    ]
  },
  {
    id:'anxiety-body', mood:'anxiety', moodLabel:'Anxiety', moodEmoji:'🌿',
    name:'Breath and Body', duration:5,
    description:'When anxiety lives in your body as much as your mind. Five days grounding in the physical and spiritual presence of God.',
    tags:['peace','presence','rest','stillness'],
    days:[
      { day:1, title:'Be Still', reference:'Psalm 46:10',
        reflection:'Before you read any further — pause. Take three slow breaths. Where do you feel tension in your body right now? Bring that specific physical place to God.',
        prayer:'God, I am here. In my body, in my tension, in my breath. Be near to me in the physical as much as the spiritual. Amen.' },
      { day:2, title:'The Lord Is My Shepherd', reference:'Psalm 23',
        reflection:'Green pastures and still waters — these are images of the body at rest. What would it mean for your nervous system to trust the Shepherd today?',
        prayer:'Lord, lead me beside still waters. Restore my soul — not just my theology but my body, my nervous system, my sleep. Amen.' },
      { day:3, title:'You Are the Temple', reference:'1 Corinthians 6:19-20',
        reflection:'Your body is the dwelling place of God. How does that reframe how you treat your physical anxiety — with shame or with sacred attention?',
        prayer:'Holy Spirit, You live in me — in this anxious, tired, striving body. Sanctify even my nervous system. Amen.' },
      { day:4, title:'The Lord Gives Sleep', reference:'Psalm 127:2; Psalm 4:8',
        reflection:'God grants sleep to those He loves. Has anxiety stolen your rest? What would it mean to receive sleep as a gift from God rather than something you achieve?',
        prayer:'Father, I lie down in peace and sleep — for You alone make me dwell in safety. Receive this night from me. Amen.' },
      { day:5, title:'Renewed Day by Day', reference:'2 Corinthians 4:16-17',
        reflection:'"Though outwardly we are wasting away, yet inwardly we are being renewed day by day." What is being renewed in you right now, even if you can\'t feel it?',
        prayer:'God, renew me inwardly today. I cannot always feel it — but I trust it is happening. You are working in what I cannot see. Amen.' }
    ]
  },
  {
    id:'anxiety-sovereignty', mood:'anxiety', moodLabel:'Anxiety', moodEmoji:'🌿',
    name:'God Is in Control', duration:7,
    description:'A 7-day anchor in the sovereignty of God — for when the world feels out of control and your heart needs a solid place to stand.',
    tags:['sovereignty','trust','worship','stability'],
    days:[
      { day:1, title:'The Lord Reigns', reference:'Psalm 97:1-6',
        reflection:'The Psalmist declares "The Lord reigns!" before listing chaos — clouds, darkness, fire. What chaos in your life needs this declaration spoken over it today?',
        prayer:'Lord, You reign. Not my anxiety, not the news, not my circumstances. You reign. Let that be the ground I stand on. Amen.' },
      { day:2, title:'He Works All Things', reference:'Romans 8:28',
        reflection:'"All things" — not just the pleasant ones. What "thing" in your life right now is hardest to believe God is working in?',
        prayer:'Father, I believe You work in all things — even this. Even what I cannot understand. Work Your good in it. Amen.' },
      { day:3, title:'The Plans of His Heart', reference:'Psalm 33:10-11',
        reflection:'"The plans of the LORD stand firm forever." Human plans fail — national, personal, economic. What plan of yours has failed? Can you trust His instead?',
        prayer:'God, Your plans stand when mine collapse. I release my grip on what I thought would happen and open my hands to what You have. Amen.' },
      { day:4, title:'Not a Sparrow Falls', reference:'Matthew 10:29-31',
        reflection:'God notices every sparrow. You are worth more than many sparrows. What does it mean to be noticed, counted, and cared for by the Creator of all things?',
        prayer:'Father, You know the number of hairs on my head. Nothing about me escapes Your care. Rest my anxious heart in that knowledge. Amen.' },
      { day:5, title:'Who Can Thwart Him?', reference:'Isaiah 46:9-11',
        reflection:'"I am God, and there is no other." He declares the end from the beginning. What outcome are you afraid of that God already knows and holds?',
        prayer:'Lord, You are the first and last. Every outcome I fear — You know it. Work Your will through it. I trust You. Amen.' },
      { day:6, title:'The Battle Is His', reference:'2 Chronicles 20:15,17',
        reflection:'Jehoshaphat faced an army he couldn\'t fight. God said: "The battle is not yours, but God\'s." Which battle do you need to hand back today?',
        prayer:'God, this battle is not mine. I take my position, stand firm, and see Your deliverance. I will not fight this in my own strength. Amen.' },
      { day:7, title:'He Who Began Will Complete', reference:'Philippians 1:6',
        reflection:'God finishes what He starts — including what He has started in you. What unfinished thing in your life can you trust to His completion?',
        prayer:'Lord, You who began a good work in me will carry it on to completion. I trust Your timeline, Your process, Your faithfulness. Amen.' }
    ]
  },

  /* ════════════════════════════ GRIEF ════════════════════════════ */
  {
    id:'grief-valley', mood:'grief', moodLabel:'Grief', moodEmoji:'🌧',
    name:'Through the Valley', duration:7, featured:true,
    description:'Grief is a holy space. This plan walks slowly alongside you through Scripture\'s most honest words about loss, lament, and the hope that holds.',
    tags:['lament','comfort','hope','mourning'],
    days:[
      { day:1, title:'The Brokenhearted Are Not Abandoned', reference:'Psalm 34:18',
        reflection:'God is close to the brokenhearted. Not "soon" — close, present tense. Do you believe that right now?',
        prayer:'Lord, I am brokenhearted. Draw near to me. I may not feel You, but Your Word says You are close. Be close to me today. Amen.' },
      { day:2, title:'Jesus Wept', reference:'John 11:32-36',
        reflection:'Jesus knew He was about to raise Lazarus — and still He wept. What does it tell you about God that He weeps with us even when He knows the ending?',
        prayer:'Jesus, You wept. You know what loss feels like. Weep with me today, and let me know You\'re here. Amen.' },
      { day:3, title:'Blessed Are Those Who Mourn', reference:'Matthew 5:4',
        reflection:'Jesus calls mourners blessed — not when the mourning ends, but in the mourning. Is there permission here you haven\'t given yourself?',
        prayer:'Father, I receive Your blessing even here, in the middle of my grief. Comfort me. I don\'t want to rush past this. Amen.' },
      { day:4, title:'Yet This I Call to Mind', reference:'Lamentations 3:19-24',
        reflection:'Jeremiah doesn\'t deny the bitterness — "I remember my affliction." But then — "yet this I call to mind." What truth can you call to mind today?',
        prayer:'Your mercies are new every morning. Great is Your faithfulness, even today. Help me hold to that. Amen.' },
      { day:5, title:'Weeping into Dancing', reference:'Psalm 30:5,11',
        reflection:'"Weeping may stay for the night, but rejoicing comes in the morning." You may be in the night. That\'s real. But morning is also real.',
        prayer:'God, I don\'t know when morning comes. But I trust it will. You have turned mourning into dancing before. Amen.' },
      { day:6, title:'Beauty from Ashes', reference:'Isaiah 61:1-3',
        reflection:'God promises to give "beauty for ashes, the oil of joy for mourning." He doesn\'t erase the ashes — He transforms them.',
        prayer:'Lord, I place my ashes before You. I don\'t see beauty yet. But You are the One who makes all things new. Amen.' },
      { day:7, title:'No More Tears', reference:'Revelation 21:3-5',
        reflection:'"He will wipe every tear from their eyes." God will personally wipe them away. What comfort does the promised ending give you for today\'s journey?',
        prayer:'Come, Lord Jesus. Until then — be with me. I hold on to the day when every tear will be gone. Amen.' }
    ]
  },
  {
    id:'grief-lament', mood:'grief', moodLabel:'Grief', moodEmoji:'🌧',
    name:'The Permission to Lament', duration:5,
    description:'The Psalms give us language for grief that the church sometimes doesn\'t. Five days learning to cry out honestly to a God who can handle it.',
    tags:['lament','psalms','honesty','raw'],
    days:[
      { day:1, title:'How Long, O Lord?', reference:'Psalm 13',
        reflection:'David asks "How long?" four times. This is not a lack of faith — it is faith raw enough to demand an answer. What question have you been afraid to ask God?',
        prayer:'God, I ask: how long? I will not pretend I am fine. I bring my honest question and my honest pain. Do not hide from me. Amen.' },
      { day:2, title:'My God, My God', reference:'Psalm 22:1-5,24',
        reflection:'Jesus prayed these words from the cross. What does it do to your faith to know that desolation is not faithlessness — that even the Son of God cried out?',
        prayer:'God, even in the place of abandonment, You did not ultimately abandon. I cry out to You from my own darkness. Hear me. Amen.' },
      { day:3, title:'I Pour Out My Soul', reference:'Psalm 42',
        reflection:'"As the deer pants for water, so my soul pants for you." The Psalmist is desperate and thirsty. Is that where you are? What are you thirsting for that only God can give?',
        prayer:'God, I am thirsty for You — and for what only You can restore. Why are you downcast, O my soul? Put your hope in God. Amen.' },
      { day:4, title:'Remember My Affliction', reference:'Lamentations 3:19-26',
        reflection:'Jeremiah chooses to remember his affliction AND God\'s mercies in the same breath. What would it look like to hold both today — the pain and the steadfast love?',
        prayer:'Lord, I remember the bitterness. And I call to mind Your mercy. Both are true. Great is Your faithfulness. Amen.' },
      { day:5, title:'Out of the Depths', reference:'Psalm 130',
        reflection:'"Out of the depths I cry to you." The depths are a real place — and prayer reaches from there. Where are your depths today? What does it mean to wait for God like a watchman waits for morning?',
        prayer:'Out of the depths I cry to You, Lord. Hear my voice. I wait for You more than watchmen wait for morning. Amen.' }
    ]
  },
  {
    id:'grief-loss', mood:'grief', moodLabel:'Grief', moodEmoji:'🌧',
    name:'After Loss', duration:7,
    description:'For those who have lost someone. A slow, careful walk through grief with the God who holds every tear.',
    tags:['death','loss','comfort','resurrection'],
    days:[
      { day:1, title:'Grieve as Those With Hope', reference:'1 Thessalonians 4:13-14',
        reflection:'Paul does not say "do not grieve." He says grieve differently — as those with hope. What is the hope you are holding today, even in the sadness?',
        prayer:'God, I grieve today. I do not pretend the loss isn\'t real. But I hold onto the hope of resurrection. Both are true today. Amen.' },
      { day:2, title:'Precious in His Sight', reference:'Psalm 116:15',
        reflection:'"Precious in the sight of the LORD is the death of his faithful servants." The one you lost was precious to God too. What does that mean for how they are held now?',
        prayer:'Lord, the one I\'ve lost was precious to You — more precious than I can fully know. I entrust them to Your hands. Amen.' },
      { day:3, title:'He Collects Every Tear', reference:'Psalm 56:8',
        reflection:'God collects your tears in a bottle — every tear. Not one is wasted or unnoticed. Which tears are you crying today that you need to know God sees?',
        prayer:'Father, You have seen every tear I\'ve cried. Not one has been wasted in Your sight. Thank You for seeing me in my grief. Amen.' },
      { day:4, title:'The Resurrection and the Life', reference:'John 11:25-26',
        reflection:'"I am the resurrection and the life." Jesus says this to Martha in her grief. He doesn\'t just promise future resurrection — He says He is it. What does His presence in your grief mean for you today?',
        prayer:'Jesus, You are the resurrection and the life. Be that truth in my grief today — not just in the future, but now. Amen.' },
      { day:5, title:'Comfort to Give Comfort', reference:'2 Corinthians 1:3-5',
        reflection:'God comforts us so we can comfort others. You are not there yet — and that\'s okay. But someday this grief will be a gift you give. How does that future meaning sit with your present pain?',
        prayer:'Father of mercies, comfort me. I trust that this grief will not be wasted — that someday it will become comfort for someone else. Amen.' },
      { day:6, title:'He Carries the Lambs', reference:'Isaiah 40:11',
        reflection:'God gently leads those who have young — and carries the lambs. In your vulnerability and grief, you are the lamb. What does it feel like to be carried rather than expected to walk?',
        prayer:'Good Shepherd, carry me. I don\'t have the strength to walk today. Carry me gently through this season. Amen.' },
      { day:7, title:'I Will See Them Again', reference:'John 14:1-3',
        reflection:'"Do not let your hearts be troubled." Jesus prepares a place. The one who is gone — if they were in Christ — is already in that place. What does the permanence of heaven do to the permanence of this grief?',
        prayer:'Jesus, You have gone to prepare a place. There will be a reunion. Until then, I trust my heart to You. Amen.' }
    ]
  },

  /* ════════════════════════════ DOUBT ════════════════════════════ */
  {
    id:'doubt-questions', mood:'doubt', moodLabel:'Doubt', moodEmoji:'🌫',
    name:'Faith Through Questions', duration:5, featured:true,
    description:'Doubt isn\'t the enemy of faith — it can be its doorway. Five days through Scripture\'s most honest questioners.',
    tags:['faith','honesty','questions','trust'],
    days:[
      { day:1, title:'I Believe — Help My Unbelief', reference:'Mark 9:20-24',
        reflection:'This father says "I believe" and "help my unbelief" in the same breath. Is that where you are? What would it mean to bring your doubt honestly to Jesus rather than hiding it?',
        prayer:'Jesus, I believe — but my belief has cracks. I\'m bringing those cracks to You. Help my unbelief. Amen.' },
      { day:2, title:'Put Your Hand in My Side', reference:'John 20:24-29',
        reflection:'Jesus invites Thomas to touch the wounds. He doesn\'t scold the doubt — He meets it. What would it mean for your doubt to be a place Jesus meets you rather than judges you?',
        prayer:'Lord, You met Thomas in his doubt without condemnation. Meet me here too. I bring my questions to You. Amen.' },
      { day:3, title:'My God, Why Have You Forsaken Me?', reference:'Psalm 22:1-5,19-24',
        reflection:'Jesus prayed these words from the cross. What does it do to your doubt to know the Son of God cried them out and was not ultimately forsaken?',
        prayer:'God, even Jesus cried out in desolation and You did not hide from Him. Don\'t hide from me. I trust You in the silence. Amen.' },
      { day:4, title:'How Long, O Lord?', reference:'Habakkuk 1:2-4; 2:2-4',
        reflection:'Habakkuk argues with God — and God answers. The final word: "the righteous shall live by their faithfulness." Not by certainty. What does faithfulness look like for you today?',
        prayer:'God, I bring my complaints honestly. I will live by faithfulness even when certainty fails. Amen.' },
      { day:5, title:'Now We See in Part', reference:'1 Corinthians 13:12',
        reflection:'"For now we see in a mirror dimly — but then face to face." Partial knowledge isn\'t failed faith; it\'s honest faith. What can you trust God with even in the dimness?',
        prayer:'Father, I am finite and You are infinite. I see You dimly — but I see You. That is enough. Amen.' }
    ]
  },
  {
    id:'doubt-deconstruction', mood:'doubt', moodLabel:'Doubt', moodEmoji:'🌫',
    name:'Honest Before God', duration:7,
    description:'For those in a season of deconstruction or deep questioning. A non-defensive, honest walk through Scripture\'s wrestlers.',
    tags:['wrestling','honesty','faith','questions'],
    days:[
      { day:1, title:'Jacob Wrestles', reference:'Genesis 32:22-30',
        reflection:'Jacob wrestled with God and would not let go without a blessing. He was wounded in the wrestling — and blessed in it. What does it mean that God blesses those who wrestle with Him rather than punishing them?',
        prayer:'God, I am wrestling with You. I will not let go without Your blessing. Meet me in this struggle. Amen.' },
      { day:2, title:'Why, Lord?', reference:'Jeremiah 20:7-9',
        reflection:'Jeremiah accuses God of deceiving him. This is in the Bible. What does it tell you about God\'s capacity to handle your most raw, accusatory prayers?',
        prayer:'Lord, I bring my accusation. I don\'t understand. Like Jeremiah, Your word burns in me and I cannot stop. Be big enough for this. Amen.' },
      { day:3, title:'Where Were You?', reference:'Job 38:1-7',
        reflection:'God answers Job\'s questions not with explanations but with questions. His point: "I am beyond your categories." How does divine mystery sit alongside your need for answers?',
        prayer:'God, I don\'t have to understand You to trust You. You are beyond my categories. Help me live inside that mystery. Amen.' },
      { day:4, title:'The Lord Is Good', reference:'Psalm 34:8',
        reflection:'"Taste and see that the Lord is good." This is an invitation to experience, not just to believe propositions. What has your experience of God actually been — not just the theology?',
        prayer:'Lord, let me taste and see Your goodness — not as a doctrine I assent to but as a reality I have encountered. Amen.' },
      { day:5, title:'Words of Eternal Life', reference:'John 6:60-69',
        reflection:'Many disciples left Jesus here. Peter stays — not because he has certainty, but because he has nowhere else to go. Is that where you are? What keeps you here?',
        prayer:'Lord, to whom shall I go? You have the words of eternal life. Even in my uncertainty, I stay. Amen.' },
      { day:6, title:'Tested Like Gold', reference:'1 Peter 1:6-7',
        reflection:'Faith tested is faith proved genuine. Your doubt and testing — rather than disqualifying your faith — might be refining it. What is this season burning away?',
        prayer:'Father, let this testing prove my faith genuine. I trust that the fire is refining, not destroying. Amen.' },
      { day:7, title:'Blessed Are Those Who Have Not Seen', reference:'John 20:29',
        reflection:'Jesus blesses those who believe without seeing. You are among those. What does it mean to be blessed specifically for your unseen, fragile, uncertain faith?',
        prayer:'Lord, I believe without fully seeing. Bless this faith — imperfect, questioning, honest. It is what I have. Amen.' }
    ]
  },

  /* ════════════════════════════ FEAR ═════════════════════════════ */
  {
    id:'fear-love', mood:'fear', moodLabel:'Fear', moodEmoji:'🕯',
    name:'Perfect Love Casts Out Fear', duration:5, featured:true,
    description:'Fear has many faces. This plan explores how God\'s perfect love displaces fear at its roots.',
    tags:['love','courage','identity','security'],
    days:[
      { day:1, title:'Perfect Love Drives Out Fear', reference:'1 John 4:16-18',
        reflection:'"Perfect love drives out fear." John says fear has to do with punishment — it\'s rooted in a sense of being condemned. How might experiencing God\'s love begin to address your deepest fear?',
        prayer:'Father, perfect Your love in me. Not just in my head — in my gut, in my bones. Drive out the fear. I am loved. Amen.' },
      { day:2, title:'Be Strong and Courageous', reference:'Joshua 1:5-9',
        reflection:'God commands courage and gives the reason: "I will never leave you nor forsake you." Courage isn\'t the absence of fear — it\'s action rooted in God\'s presence.',
        prayer:'Lord, I will not wait until I feel fearless. You go with me. Give me strength for today\'s step. Amen.' },
      { day:3, title:'The Lord Is My Light', reference:'Psalm 27:1-3',
        reflection:'David asks "Whom shall I fear?" and answers: no one. What darkness is the light of God exposing or driving back in your situation?',
        prayer:'You are my light, Lord. In the darkness of what I fear, shine. You are the stronghold of my life. Amen.' },
      { day:4, title:'I Have Called You by Name', reference:'Isaiah 43:1-3',
        reflection:'"I have called you by name; you are Mine." You belong to God — that is your deepest identity. How does being owned and named by God reframe what threatens you?',
        prayer:'God, You have called me by name. I am Yours. When I pass through fire and water, You are with me. Amen.' },
      { day:5, title:'I Am Convinced', reference:'Romans 8:38-39',
        reflection:'Paul says he is "convinced" — settled conviction, not wishful thinking. What would it take for you to be truly convinced that nothing can separate you from God\'s love?',
        prayer:'Father, persuade me deeply that nothing can separate me from Your love in Christ. Let that conviction be my ground when fear rises. Amen.' }
    ]
  },
  {
    id:'fear-future', mood:'fear', moodLabel:'Fear', moodEmoji:'🕯',
    name:'Do Not Fear Tomorrow', duration:5,
    description:'For those afraid of what\'s ahead. Five anchors in Scripture\'s promises about God\'s presence in the unknown future.',
    tags:['future','trust','courage','sovereignty'],
    days:[
      { day:1, title:'For I Know the Plans', reference:'Jeremiah 29:11',
        reflection:'God tells exiles in Babylon — people who had lost everything — that He has plans for them. You may feel like an exile right now. What does it mean that God still has plans, even here?',
        prayer:'Lord, I trust that You have plans for me — for a future and a hope. I hold this promise even when I cannot see it. Amen.' },
      { day:2, title:'He Goes Before You', reference:'Deuteronomy 31:8',
        reflection:'"The LORD himself goes before you." God is already in the future you fear. What would change if you believed that the frightening thing ahead is already inhabited by God?',
        prayer:'God, You are already there. You go before me into every tomorrow I\'m afraid of. I follow You. Amen.' },
      { day:3, title:'Do Not Worry About Tomorrow', reference:'Matthew 6:34',
        reflection:'"Each day has enough trouble of its own." Jesus limits our worry to today. What would your day look like if you genuinely stopped borrowing tomorrow\'s trouble?',
        prayer:'Lord, today is enough. Tomorrow is Yours. Teach me to live in this day\'s portion of grace. Amen.' },
      { day:4, title:'Ebenezer — Thus Far', reference:'1 Samuel 7:12',
        reflection:'Samuel set up a stone and said "Thus far the Lord has helped us." Look back at your life. Where are the stones? What has God brought you through that proves His faithfulness for the future?',
        prayer:'God, thus far You have helped me. I set up my stone of remembrance. You have been faithful and will be again. Amen.' },
      { day:5, title:'Your Life Is Hidden', reference:'Colossians 3:3',
        reflection:'"Your life is now hidden with Christ in God." If your life is hidden in God — protected, held, secured — what can the unknown future actually take from you?',
        prayer:'Lord, my life is hidden with Christ in You. The future cannot reach what You are holding. I am secure. Amen.' }
    ]
  },

  /* ════════════════════════════ JOY ══════════════════════════════ */
  {
    id:'joy-overflow', mood:'joy', moodLabel:'Joy', moodEmoji:'☀️',
    name:'Overflow', duration:5, featured:true,
    description:'Joy isn\'t happiness — it runs deeper. Five days through Scripture\'s invitation to a joy that overflows from knowing God.',
    tags:['joy','celebration','worship','fullness'],
    days:[
      { day:1, title:'In Your Presence Is Fullness of Joy', reference:'Psalm 16:5-11',
        reflection:'David says fullness of joy is found in God\'s presence. Is your joy tied to your circumstances today, or to His nearness?',
        prayer:'Lord, let me live in the awareness of Your presence today. Fill me with the joy found only there. Amen.' },
      { day:2, title:'Rejoice in the Lord Always', reference:'Philippians 4:4-7',
        reflection:'Paul writes from prison: "Rejoice always." This is grounded, not naïve. What is Paul rejoicing about, and what does it tell you about the source of true joy?',
        prayer:'Father, teach me to rejoice always — not because life is easy, but because You are near. Amen.' },
      { day:3, title:'That Your Joy May Be Complete', reference:'John 15:9-11',
        reflection:'Jesus says He tells us these things "so that my joy may be in you." What is Jesus asking you to do that would deepen your joy?',
        prayer:'Jesus, I want the complete joy You promised. Teach me to remain in Your love. Let Your joy overflow in me. Amen.' },
      { day:4, title:'The Joy of the Lord Is Your Strength', reference:'Nehemiah 8:9-12',
        reflection:'The people wept at God\'s Word — and were told the joy of the Lord is their strength. When have you found joy and strength meeting together in God\'s presence?',
        prayer:'Lord, Your joy is my strength — not my circumstances or feelings. Give me that strength today. Amen.' },
      { day:5, title:'Make a Joyful Noise', reference:'Psalm 100',
        reflection:'"Know that the LORD is God. It is he who made us." How does belonging to God — before anything you\'ve done — become the foundation of joy?',
        prayer:'Lord, I enter Your gates with thanksgiving. You are good, Your love endures forever. I shout for joy — not because everything is perfect, but because You are. Amen.' }
    ]
  },
  {
    id:'joy-celebration', mood:'joy', moodLabel:'Joy', moodEmoji:'☀️',
    name:'Feast and Celebrate', duration:5,
    description:'Scripture commands celebration more than we realise. Five days learning to receive joy as an act of worship.',
    tags:['celebration','worship','gratitude','delight'],
    days:[
      { day:1, title:'This Is the Day', reference:'Psalm 118:24',
        reflection:'"This is the day the LORD has made; let us rejoice and be glad in it." Not yesterday, not tomorrow — this day. What is specifically good about this exact day?',
        prayer:'Lord, You made this day. I choose to rejoice in it — not because it is perfect, but because You made it. Amen.' },
      { day:2, title:'God Who Gives Us Everything', reference:'1 Timothy 6:17',
        reflection:'God "richly provides us with everything for our enjoyment." This is a command to enjoy what God has given. What has He given you that you\'ve been too busy or anxious to enjoy?',
        prayer:'Father, You are a generous Giver. I receive Your gifts with open hands and an unguarded heart. Thank You. Amen.' },
      { day:3, title:'Delight Yourself in the Lord', reference:'Psalm 37:4',
        reflection:'"Delight yourself in the LORD." This is not a passive state — it\'s an active choice. What does delighting in God look like practically for you today?',
        prayer:'Lord, I choose delight — in You, in Your creation, in Your gifts. Teach me what it means to truly delight in You. Amen.' },
      { day:4, title:'The Feast of the Kingdom', reference:'Luke 14:15-17',
        reflection:'The kingdom of God is a banquet and the host is calling: "Come, for everything is now ready." You are invited. What keeps you from coming to the feast fully?',
        prayer:'Lord, I come to the feast — not half-heartedly, not with excuses. Everything is ready. I come. Amen.' },
      { day:5, title:'Enter Into the Joy', reference:'Matthew 25:21',
        reflection:'"Enter into the joy of your master." Joy is something we enter — like a room, a dwelling place. What would it mean to live inside God\'s joy rather than visiting it occasionally?',
        prayer:'Father, let me enter and dwell in Your joy — not visit it on good days. Let it be my home. Amen.' }
    ]
  },

  /* ══════════════════════════ GRATITUDE ══════════════════════════ */
  {
    id:'gratitude-counting', mood:'gratitude', moodLabel:'Gratitude', moodEmoji:'🌸',
    name:'Counting Gifts', duration:5, featured:true,
    description:'Gratitude is a spiritual discipline, not just a feeling. Five days practising the sacred art of noticing God\'s gifts.',
    tags:['thanksgiving','praise','abundance','noticing'],
    days:[
      { day:1, title:'In Everything Give Thanks', reference:'1 Thessalonians 5:16-18',
        reflection:'"In everything" — not for everything, but in it. What difficult thing can you bring gratitude into today — not denying the pain but finding God in it?',
        prayer:'Father, this is Your will for me — rejoicing, praying, giving thanks. I choose gratitude today. Amen.' },
      { day:2, title:'His Love Endures Forever', reference:'Psalm 107:1-9',
        reflection:'This Psalm records people in distress crying out and God delivering them. What chapter of your own story could you retell as: "He delivered me... and I gave thanks"?',
        prayer:'Lord, I remember Your faithfulness. I gather those memories like stones of remembrance and thank You. Amen.' },
      { day:3, title:'Let Thankfulness Overflow', reference:'Colossians 3:15-17',
        reflection:'"Let the peace of Christ rule in your hearts." Gratitude and peace travel together here. Where do you notice that connection in your own experience?',
        prayer:'Lord, let the peace of Christ rule — not anxiety. Let every word and deed today overflow with gratitude. Amen.' },
      { day:4, title:'Bless the Lord, O My Soul', reference:'Psalm 103:1-5',
        reflection:'David lists specific benefits. Write your own list of five things God has done for you. What happens to your heart as you write them?',
        prayer:'Bless the Lord, O my soul! I will not forget Your benefits. You have forgiven, healed, redeemed. I praise You. Amen.' },
      { day:5, title:'Every Spiritual Blessing', reference:'Ephesians 1:3-8',
        reflection:'You have been blessed "with every spiritual blessing in the heavenly realms." Before anything happens today, you are already blessed in Christ.',
        prayer:'Father, I have everything in Christ. I am chosen, adopted, redeemed, forgiven. My gratitude begins there. Thank You. Amen.' }
    ]
  },
  {
    id:'gratitude-small', mood:'gratitude', moodLabel:'Gratitude', moodEmoji:'🌸',
    name:'The Ordinary Sacred', duration:5,
    description:'Learning to find God in the small, quiet, everyday moments that we habitually rush past.',
    tags:['noticing','wonder','ordinary','presence'],
    days:[
      { day:1, title:'This Is My Father\'s World', reference:'Psalm 24:1',
        reflection:'"The earth is the LORD\'s, and everything in it." Step outside today. Look at one thing — a tree, the sky, a bird. How does ownership by God change how you see it?',
        prayer:'Lord, open my eyes to Your world today. I want to notice what I habitually rush past. Everything belongs to You. Amen.' },
      { day:2, title:'Taste and See', reference:'Psalm 34:8',
        reflection:'Taste — a physical, sensory word. Today, pay attention to something you eat or drink as an act of receiving God\'s goodness. What does gratitude feel like in your body?',
        prayer:'God, You are good. Let me taste that goodness today — in food, in sunlight, in the small gifts You scatter everywhere. Amen.' },
      { day:3, title:'Fearfully and Wonderfully Made', reference:'Psalm 139:14',
        reflection:'You are fearfully and wonderfully made. Your breath, your heartbeat, your capacity to see and hear — all given. What aspect of your own existence can you be grateful for today?',
        prayer:'Father, I am wonderfully made. I take my breath for granted — thank You for it. Let me not be ungrateful for the miracle of being alive. Amen.' },
      { day:4, title:'The Gift of Today', reference:'James 4:13-15',
        reflection:'Life is "a mist that appears for a little while and then vanishes." What does today\'s brevity make precious? If you knew you had only today, what would you be grateful for?',
        prayer:'Lord, today is a gift — not a given. I receive it with open hands and a grateful heart. Amen.' },
      { day:5, title:'Table Fellowship', reference:'Acts 2:46-47',
        reflection:'The early church broke bread "with glad and sincere hearts." Who is the table fellowship in your life — the people God has given you to share ordinary life with? Name them with gratitude.',
        prayer:'Father, thank You for the people at my table — the ordinary companions of my ordinary life. They are gifts from You. Amen.' }
    ]
  },

  /* ══════════════════════════ LONELINESS ══════════════════════════ */
  {
    id:'loneliness-presence', mood:'loneliness', moodLabel:'Loneliness', moodEmoji:'🌙',
    name:'You Are Not Alone', duration:5, featured:true,
    description:'Loneliness is one of humanity\'s oldest aches. Five days sitting with Scripture\'s deep assurance that you are known, held, and never truly alone.',
    tags:['presence','belonging','known','companionship'],
    days:[
      { day:1, title:'You Have Searched Me and Known Me', reference:'Psalm 139:1-12,23-24',
        reflection:'God knows when you sit and rise, your thoughts, your words before you speak them. What does it mean to be that thoroughly known — not surveilled, but intimately understood?',
        prayer:'Lord, You know me completely. I want to be fully known and fully loved. Meet me in this loneliness. Amen.' },
      { day:2, title:'I Will Never Leave You', reference:'Hebrews 13:5-6',
        reflection:'"Never will I leave you; never will I forsake you." What does it mean to have a companion who literally cannot leave?',
        prayer:'Lord, You will never leave me. Loneliness lies and says I am alone. Your Word is truer. Be near to me. Amen.' },
      { day:3, title:'The Everlasting Arms', reference:'Isaiah 54:10',
        reflection:'"Though the mountains be shaken... my unfailing love for you will not be shaken." The most permanent things can be moved — but not God\'s love. Where do you need that love to hold today?',
        prayer:'God, Your love for me does not shake. Even when everything else does. I rest in Your compassion — everlasting, unshakeable. Amen.' },
      { day:4, title:'I Will Not Leave You as Orphans', reference:'John 14:15-18',
        reflection:'Jesus promises to send the Spirit and says "I will not leave you as orphans." How does the presence of the Spirit address the ache of being unclaimed or unbelonging?',
        prayer:'Jesus, You have not left me as an orphan. Let me be aware of the Spirit\'s presence today — not just as doctrine but as reality. Amen.' },
      { day:5, title:'I Am with You Always', reference:'Matthew 28:18-20',
        reflection:'The last words of Matthew\'s Gospel: "I am with you always, to the very end of the age." What does this promise mean to you as you face your next unknown?',
        prayer:'Jesus, You are with me always. As I go into the world today, remind me You go with me. I am never alone. Amen.' }
    ]
  },
  {
    id:'loneliness-community', mood:'loneliness', moodLabel:'Loneliness', moodEmoji:'🌙',
    name:'Finding Your People', duration:5,
    description:'For the lonely who long for real community. Five days through Scripture\'s vision of belonging together in Christ.',
    tags:['community','belonging','body','church'],
    days:[
      { day:1, title:'It Is Not Good to Be Alone', reference:'Genesis 2:18',
        reflection:'God says "it is not good for man to be alone" — before sin ever entered the picture. Loneliness is not a spiritual failure; it\'s a real human need God built into us. How does that reframe your loneliness?',
        prayer:'Father, You made me for community. My loneliness is not weakness — it is the ache of a real need You designed. Lead me to the people You have for me. Amen.' },
      { day:2, title:'The Body Has Many Parts', reference:'1 Corinthians 12:14-20,27',
        reflection:'"Now you are the body of Christ, and each one of you is a part of it." You are already a part — even if you don\'t feel it. What would it mean to believe you belong even before you feel like you do?',
        prayer:'Lord, I am a part of the body. Even in my isolation, I belong. Help me find my way to the people You\'ve placed me with. Amen.' },
      { day:3, title:'Ruth and Naomi', reference:'Ruth 1:16-17',
        reflection:'Ruth clings to Naomi: "Where you go I will go." This is one of the great loyalty declarations in Scripture — between two women, not a romantic couple. Where is your Ruth? Where are you someone\'s Ruth?',
        prayer:'God, give me courage to cling — and people worth clinging to. Lead me into the kind of loyal, real friendship that Scripture celebrates. Amen.' },
      { day:4, title:'Devoted to One Another', reference:'Romans 12:10,13,15',
        reflection:'Paul lists the practices of community: honour one another, be devoted, share, practise hospitality, mourn with mourners. Which of these could you initiate this week, even imperfectly?',
        prayer:'Lord, show me one person I can reach toward this week — one small act of community. Use my small offering to build something real. Amen.' },
      { day:5, title:'The Fellowship of Believers', reference:'Acts 2:42-47',
        reflection:'This community devoted themselves to teaching, fellowship, breaking bread, prayer. It was imperfect — Acts shows us that — but it was real. What does authentic community look like for you?',
        prayer:'Father, I long for the kind of community in Acts — real, devoted, messy, together. Lead me toward it, and make me someone who builds it. Amen.' }
    ]
  },

  /* ════════════════════════════ ANGER ════════════════════════════ */
  {
    id:'anger-holy', mood:'anger', moodLabel:'Anger', moodEmoji:'🔥',
    name:'Holy and Unholy Fire', duration:5, featured:true,
    description:'Anger is not always sin. Five days discerning the difference between righteous anger and destructive rage — and bringing both to God.',
    tags:['anger','emotion','justice','self-control'],
    days:[
      { day:1, title:'Be Angry and Do Not Sin', reference:'Ephesians 4:26-27',
        reflection:'"Be angry" — this is a command acknowledging that anger is sometimes appropriate. "Do not sin" — it\'s what you do with it. What are you angry about right now? Is it righteous anger or wounded pride?',
        prayer:'Lord, I bring my anger to You honestly. Help me know the difference between holy fire and selfish rage. Give me wisdom in it. Amen.' },
      { day:2, title:'Jesus and the Temple', reference:'John 2:13-17',
        reflection:'Jesus was angry — and it was righteous. His anger was directed at injustice done to the vulnerable and disrespect to His Father. What injustice might be behind your anger? What does it tell you about what you value?',
        prayer:'Lord, Your anger was clean and purposeful. Refine my anger until it too points toward what is right rather than what is merely inconvenient. Amen.' },
      { day:3, title:'Slow to Anger', reference:'James 1:19-20',
        reflection:'"Human anger does not produce the righteousness that God desires." Where has your anger failed to produce anything good? Where has slowness to anger served you well?',
        prayer:'Father, make me quick to listen and slow to anger. Where my anger has damaged rather than corrected — forgive me and restore what was broken. Amen.' },
      { day:4, title:'The Lord Is Slow to Anger', reference:'Psalm 103:8-10',
        reflection:'God is "slow to anger and abounding in love." He does not treat us as our sins deserve. If you are angry at someone — how does God\'s patience with you inform how you hold your anger toward them?',
        prayer:'Lord, You have been patient with me beyond what I deserve. Let that patience flow through me to those who have wounded me. Amen.' },
      { day:5, title:'Vengeance Is Mine', reference:'Romans 12:17-21',
        reflection:'"Do not take revenge, my dear friends, but leave room for God\'s wrath." Releasing the demand for vengeance is not the same as saying nothing matters. It\'s trusting God to be the judge. What would it feel like to genuinely leave it with Him?',
        prayer:'God, I release the demand for vengeance. I trust You to be the just Judge. I choose to overcome evil with good — even when it costs me. Amen.' }
    ]
  },
  {
    id:'anger-injustice', mood:'anger', moodLabel:'Anger', moodEmoji:'🔥',
    name:'Angry at the World', duration:5,
    description:'For those whose anger is about injustice — personal, social, or global. A biblical framework for channelling outrage into something righteous.',
    tags:['justice','lament','outrage','righteousness'],
    days:[
      { day:1, title:'How Long, O Lord?', reference:'Habakkuk 1:1-4',
        reflection:'Habakkuk is angry that God seems to tolerate injustice. He doesn\'t hide it. What injustice have you been witnessing that makes you cry "How long?"',
        prayer:'Lord, I am angry at what I see — injustice tolerated, evil unchecked. I cry out to You. How long? Hear my cry. Amen.' },
      { day:2, title:'Let Justice Roll On', reference:'Amos 5:21-24',
        reflection:'"Let justice roll on like a river." God is angrier about injustice than you are. How does aligning your anger with God\'s purposes transform what you do with it?',
        prayer:'God of justice, align my anger with Yours. Not destructive rage, but the river of justice You desire. Use my outrage for something good. Amen.' },
      { day:3, title:'Defend the Weak', reference:'Psalm 82:2-4',
        reflection:'"Defend the weak and the fatherless; uphold the cause of the poor and oppressed." This is a call to action. What specific action could your anger fuel this week?',
        prayer:'Lord, my anger at injustice — let it move me toward action rather than paralysis. Show me one concrete way to defend the vulnerable. Amen.' },
      { day:4, title:'Do Not Grow Weary', reference:'Galatians 6:9-10',
        reflection:'"Let us not grow weary in doing good, for at the proper time we will reap a harvest." Justice work is long. What keeps you going when the outrage fades into exhaustion?',
        prayer:'Father, I am tired of fighting for what is right. Renew my energy. I will not grow weary — but I need Your strength, not my own. Amen.' },
      { day:5, title:'He Is Coming to Judge', reference:'Revelation 19:11',
        reflection:'The rider on the white horse comes with justice. One day, every wrong will be righted — permanently, completely. How does the certainty of ultimate justice help you hold your present anger?',
        prayer:'Come, Lord Jesus. Come with justice. Every wrong will be made right. Until then, use my anger rightly. Amen.' }
    ]
  },

  /* ════════════════════════════ SHAME ════════════════════════════ */
  {
    id:'shame-grace', mood:'shame', moodLabel:'Shame', moodEmoji:'🍂',
    name:'Grace for the Hidden Self', duration:7, featured:true,
    description:'Shame tells you that you are the problem. Grace says the problem has been dealt with. Seven days on the most radical news in the world.',
    tags:['grace','identity','forgiveness','acceptance'],
    days:[
      { day:1, title:'Where Are You?', reference:'Genesis 3:8-13',
        reflection:'Adam and Eve hid from God — the first shame response. What is shame making you hide today? From God, from others, from yourself?',
        prayer:'Lord, I stop hiding. You already see everything, and You still come looking for me. Here I am. Amen.' },
      { day:2, title:'There Is No Condemnation', reference:'Romans 8:1-2',
        reflection:'"Therefore, there is now no condemnation for those who are in Christ Jesus." Therefore — because of everything Paul just said about grace. Let that word land: no condemnation. How does that sit against what shame tells you?',
        prayer:'Father, no condemnation. I speak it over myself because Your Word speaks it over me. Let it be louder than the shame. Amen.' },
      { day:3, title:'Neither Do I Condemn You', reference:'John 8:1-11',
        reflection:'Jesus sends the accused woman away with "neither do I condemn you — now go and sin no more." He doesn\'t minimise what she did, but He doesn\'t condemn her either. Which do you need more today — to hear the no condemnation, or the call to new life?',
        prayer:'Jesus, I hear You: neither do I condemn you. Let that change how I walk out of this moment. Amen.' },
      { day:4, title:'Washed and Made Clean', reference:'Psalm 51:1-12',
        reflection:'David\'s prayer after his deepest failure. He doesn\'t defend himself — he asks for cleansing. What would honest confession — without self-justification — sound like for you today?',
        prayer:'Create in me a clean heart, O God. I don\'t defend what I\'ve done. I ask for cleansing, renewal, restoration. Amen.' },
      { day:5, title:'Clothed in Righteousness', reference:'Isaiah 61:10',
        reflection:'God clothes His people in garments of salvation — a robe of righteousness. You are not wearing your shame; you are wearing His righteousness. What would it mean to walk in that today?',
        prayer:'Lord, I take off the garment of shame and put on the robe You\'ve given me. I am clothed in Your righteousness — not my own. Amen.' },
      { day:6, title:'Look to Him and Be Radiant', reference:'Psalm 34:5',
        reflection:'"Those who look to him are radiant; their faces are never covered with shame." The antidote to shame is looking at God rather than at yourself. What happens when you shift your gaze?',
        prayer:'I look to You, Lord. Not at my failures, not at my past, not at what others think — at You. Make my face radiant. Amen.' },
      { day:7, title:'Loved Before You Were Worthy', reference:'Romans 5:6-8',
        reflection:'"While we were still sinners, Christ died for us." The love came before the change. You don\'t have to earn it. You don\'t have to clean up first. You are loved now, in the condition you\'re in. Can you receive that?',
        prayer:'Father, You loved me before I was worthy — before I changed, before I improved. I receive that love today. It is enough. Amen.' }
    ]
  },

  /* ══════════════════════════ BURNOUT ════════════════════════════ */
  {
    id:'burnout-rest', mood:'burnout', moodLabel:'Burnout', moodEmoji:'🪨',
    name:'Rest for the Exhausted', duration:7, featured:true,
    description:'For those who have given until there is nothing left. Seven days of permission to stop, receive, and be restored by the God who rested.',
    tags:['rest','sabbath','renewal','restoration'],
    days:[
      { day:1, title:'And He Rested', reference:'Genesis 2:1-3',
        reflection:'God rested on the seventh day — not from exhaustion, but as a declaration that the work was complete. What would it mean for you to rest from a place of completeness rather than collapse?',
        prayer:'Lord, I give myself permission to rest. Not because everything is done, but because You are. The work is ultimately Yours. Amen.' },
      { day:2, title:'Come Away and Rest', reference:'Mark 6:30-32',
        reflection:'Jesus pulled His disciples away from the crowds to rest. The need to rest was not a spiritual failure — it was Jesus\'s own prescription. What do you need to step away from this week?',
        prayer:'Jesus, You pulled Your disciples away to rest. Pull me away. I give You permission to interrupt my striving. Amen.' },
      { day:3, title:'He Makes Me Lie Down', reference:'Psalm 23:1-3',
        reflection:'The Good Shepherd "makes me lie down." Sometimes rest is not our idea — God leads us there. Are you being forced to rest by circumstances? Could this be the Shepherd\'s hand?',
        prayer:'Good Shepherd, if You are making me lie down — I will lie down. Lead me beside still waters. Restore my soul. Amen.' },
      { day:4, title:'My Yoke Is Easy', reference:'Matthew 11:28-30',
        reflection:'Jesus promises His yoke is easy and His burden light. If you are exhausted, you may be wearing a yoke He didn\'t give you. What burden can you lay down today?',
        prayer:'Jesus, what yoke am I wearing that You didn\'t put on me? Show me what to lay down. I come to You for rest — real rest. Amen.' },
      { day:5, title:'He Gives to His Beloved Sleep', reference:'Psalm 127:1-2',
        reflection:'"He grants sleep to those he loves." Sleep is a gift — not a failure of productivity. What would it mean to receive sleep tonight as an act of trust in God?',
        prayer:'Lord, I trust You enough to sleep. The world does not need me to hold it together tonight. It is Yours. I rest. Amen.' },
      { day:6, title:'Elijah Under the Tree', reference:'1 Kings 19:3-8',
        reflection:'The burnt-out prophet lay under a tree and asked to die. God\'s response was not rebuke but food and rest. What does God\'s gentleness toward Elijah\'s exhaustion say about how He sees yours?',
        prayer:'God, You were gentle with Elijah in his exhaustion. Be gentle with me. Feed me. Let me sleep. The journey is too great for me. Amen.' },
      { day:7, title:'Renewed Like the Eagle', reference:'Isaiah 40:29-31',
        reflection:'"Those who hope in the LORD will renew their strength." This renewal is promised — but it comes through waiting, not striving. What would active, trusting waiting look like for you this season?',
        prayer:'Lord, I hope in You. I wait. Renew my strength. Let me soar again — in Your timing, not mine. Amen.' }
    ]
  },
  {
    id:'burnout-identity', mood:'burnout', moodLabel:'Burnout', moodEmoji:'🪨',
    name:'More Than What You Do', duration:5,
    description:'Burnout often reveals that we\'ve confused doing with being. Five days reclaiming identity in Christ apart from productivity.',
    tags:['identity','worth','rest','grace'],
    days:[
      { day:1, title:'You Are Beloved', reference:'Mark 1:9-11',
        reflection:'Before Jesus had done a single miracle, the Father said: "You are my Son, whom I love; with you I am well pleased." Pleasing the Father was not earned by performance. How does your own sense of approval from God compare to this?',
        prayer:'Father, let me hear the words You spoke over Jesus spoken over me — beloved, well-pleasing — before I do anything today. Amen.' },
      { day:2, title:'Martha, Martha', reference:'Luke 10:38-42',
        reflection:'Martha was busy with good things. Mary chose "the better thing" — sitting at Jesus\'s feet. What is the "better thing" you have been too busy to choose?',
        prayer:'Lord, I want to choose the better thing. Even today, even with my to-do list — let me sit at Your feet. Amen.' },
      { day:3, title:'Branches, Not Engines', reference:'John 15:1-5',
        reflection:'"Apart from me you can do nothing." A branch doesn\'t strain to bear fruit — it stays connected and fruit happens. Where have you been straining when you should have been abiding?',
        prayer:'Jesus, I want to abide — not perform. Keep me connected to You, the Vine. Let fruit come from union, not effort. Amen.' },
      { day:4, title:'Workers and Worshippers', reference:'Exodus 20:8-10',
        reflection:'The Sabbath commandment is given for rest — for humans and animals alike. Rest is not a reward for completed work; it is a rhythm God built into creation. What would it look like to take Sabbath seriously this week?',
        prayer:'Lord, I receive the gift of Sabbath. I am not more righteous when I am productive. Let me rest in that truth. Amen.' },
      { day:5, title:'Hidden with Christ', reference:'Colossians 3:1-4',
        reflection:'"Your life is now hidden with Christ in God." Your true identity is not your output, your performance, or your usefulness. It is hidden somewhere safe. What is hidden there?',
        prayer:'Father, my life is hidden with Christ in You. Nothing I produce or fail to produce changes that. I rest in who I am to You. Amen.' }
    ]
  },

  /* ════════════════════════════ HOPE ═════════════════════════════ */
  {
    id:'hope-waiting', mood:'hope', moodLabel:'Hope', moodEmoji:'🌅',
    name:'Anchors for the Waiting', duration:7, featured:true,
    description:'Hope is not optimism — it\'s an anchor. Seven days through Scripture\'s invitations to wait on God with expectation rather than despair.',
    tags:['hope','waiting','promise','patience'],
    days:[
      { day:1, title:'Hope That Does Not Disappoint', reference:'Romans 5:3-5',
        reflection:'"Hope does not put us to shame." This hope is built through suffering, then character, then hope — in that order. What suffering are you currently inside that might be building something?',
        prayer:'Lord, I trust this path — suffering producing endurance, endurance producing character, character producing hope. I am in the process. Amen.' },
      { day:2, title:'The Anchor of the Soul', reference:'Hebrews 6:19',
        reflection:'"We have this hope as an anchor for the soul." Anchors don\'t stop storms — they hold you during them. What is your soul anchored to today?',
        prayer:'Lord, be my anchor. Not an end to the storm, but a hold that keeps me from being swept away. I anchor myself in You. Amen.' },
      { day:3, title:'Wait for the Lord', reference:'Psalm 27:13-14',
        reflection:'"I remain confident of this: I will see the goodness of the LORD in the land of the living." David is confident — not certain of timing, but certain of outcome. Can you be confident without being certain?',
        prayer:'Lord, I believe I will see Your goodness — here, in this life. I wait. Be strong, O my soul. Wait. Amen.' },
      { day:4, title:'The God of Hope', reference:'Romans 15:13',
        reflection:'"May the God of hope fill you with all joy and peace as you trust in him, so that you may overflow with hope." Hope is received, not manufactured. What would it mean to ask God to fill you with hope rather than trying to generate it yourself?',
        prayer:'God of hope, fill me with hope. I cannot make it myself. Pour it in by the power of Your Holy Spirit. Amen.' },
      { day:5, title:'He Makes Everything New', reference:'Revelation 21:5',
        reflection:'"I am making everything new!" Present tense — He is making, not just will make. Where do you see even a hint of renewal happening right now?',
        prayer:'Lord, You are making things new — even now, even in what seems dead or broken. I look for the signs of Your renewal today. Amen.' },
      { day:6, title:'The Weeping Prophet\'s Hope', reference:'Lamentations 3:21-26',
        reflection:'Jeremiah wrote this in the rubble of Jerusalem. "Yet this I call to mind and therefore I have hope." Hope chosen in the rubble is the most real kind. What truth can you call to mind today?',
        prayer:'Lord, I call to mind Your great faithfulness. Even here, in the rubble. Your mercies are new this morning. I have hope. Amen.' },
      { day:7, title:'We Shall Be Like Him', reference:'1 John 3:2-3',
        reflection:'"We know that when he appears, we shall be like him." The final destination of your life is Christlikeness. How does knowing where you\'re headed change how you endure the journey?',
        prayer:'Father, I know what I am becoming — like Christ. The journey is hard, but the destination is sure. I hold on. Amen.' }
    ]
  },
  {
    id:'hope-deferred', mood:'hope', moodLabel:'Hope', moodEmoji:'🌅',
    name:'When Hope Is Deferred', duration:5,
    description:'For those who have hoped and waited and are still waiting. Honest Scripture for the long wait.',
    tags:['waiting','longing','lament','faithfulness'],
    days:[
      { day:1, title:'Hope Deferred Makes the Heart Sick', reference:'Proverbs 13:12',
        reflection:'This proverb is honest: deferred hope hurts. What have you been hoping for that has not yet come? How has the waiting affected your heart?',
        prayer:'Lord, my heart is sick with deferred hope. I name it honestly before You. I have been waiting and it hurts. Be near to me in the ache. Amen.' },
      { day:2, title:'Abraham Hoped Against Hope', reference:'Romans 4:18-21',
        reflection:'Abraham "hoped against hope" — hope that went against every rational reason to hope. What would it mean for you to hope against the evidence, not denying the evidence but trusting God beyond it?',
        prayer:'God, I choose to hope against hope — not ignoring reality, but trusting You beyond it. You are able to do what You have promised. Amen.' },
      { day:3, title:'I Wait for the Lord', reference:'Psalm 130:5-6',
        reflection:'"I wait for the LORD... more than watchmen wait for morning." The watchman knows morning will come — the question is only when. What certainty are you waiting for that you already know is coming?',
        prayer:'Lord, I wait. Like the watchman who knows morning will come — I know You will come through. I wait in that confidence. Amen.' },
      { day:4, title:'The Longings of the Heart', reference:'Psalm 37:4-5',
        reflection:'"Delight yourself in the LORD and he will give you the desires of your heart." This is not a vending machine verse — delighting in God reshapes our desires. How has your longing changed as you\'ve drawn near to God?',
        prayer:'Lord, deepen my delight in You. Reshape my desires to align with Yours. And in Your time, give me what I\'m asking. Amen.' },
      { day:5, title:'Not Yet', reference:'John 11:6',
        reflection:'When Lazarus was dying, Jesus stayed two days longer. He was not slow — He was purposeful. What might God\'s "not yet" to your prayer be about, in His purposes?',
        prayer:'Lord, if You are saying "not yet" to my prayer — I trust Your purposes. Your delays are not denials. I wait in faith. Amen.' }
    ]
  },

  /* ══════════════════════════ IDENTITY ══════════════════════════ */
  {
    id:'identity-beloved', mood:'identity', moodLabel:'Identity', moodEmoji:'🪞',
    name:'Who God Says You Are', duration:7, featured:true,
    description:'Seven days replacing the world\'s labels with God\'s. A deep dive into what it means to be named, known, and beloved.',
    tags:['identity','worth','beloved','truth'],
    days:[
      { day:1, title:'Fearfully and Wonderfully Made', reference:'Psalm 139:13-16',
        reflection:'God knit you together in the womb. You are not an accident, not a mistake, not an afterthought. What label do you carry about yourself that contradicts this?',
        prayer:'Lord, I am fearfully and wonderfully made. I choose to believe Your assessment over the world\'s — or my own inner critic\'s. Amen.' },
      { day:2, title:'Child of God', reference:'John 1:12; 1 John 3:1',
        reflection:'"See what great love the Father has lavished on us, that we should be called children of God — and that is what we are!" This is not a metaphor. You are actually a child of God. What does a child of God look like when they walk into a room?',
        prayer:'Father, I am Your child. Not by performance but by birth — born again into Your family. Let me live from that identity today. Amen.' },
      { day:3, title:'A New Name', reference:'Isaiah 62:2-4',
        reflection:'God promises to give His people a new name — no longer "Desolate" or "Deserted" but "My Delight Is in Her." What old name have you been answering to that God wants to replace?',
        prayer:'Lord, I am not Abandoned, Not Forgotten, Not Worthless. Give me my new name. I will answer to what You call me. Amen.' },
      { day:4, title:'More Than Conquerors', reference:'Romans 8:37',
        reflection:'"We are more than conquerors through him who loved us." More than — not just barely surviving. What would it look like to live as more than a conqueror rather than someone just getting by?',
        prayer:'God, I am more than a conqueror — not by my strength but through Your love. Let me live from victory, not toward it. Amen.' },
      { day:5, title:'Royal Priesthood', reference:'1 Peter 2:9',
        reflection:'"A chosen people, a royal priesthood, a holy nation, God\'s special possession." You are royalty, not by birth into a family, but by new birth into God\'s. How does that change how you see yourself today?',
        prayer:'Father, I am chosen, royal, holy — not by merit but by Your call. Let me walk with the dignity of someone who belongs to You. Amen.' },
      { day:6, title:'Created in His Image', reference:'Genesis 1:26-27',
        reflection:'You bear the image of God — imago Dei. That image was damaged by sin but not destroyed. It is being restored in Christ. What aspect of God\'s character do you see reflected in yourself?',
        prayer:'Lord, I bear Your image. Restore what sin has marred. Let Your image shine through me today — in how I love, create, and care. Amen.' },
      { day:7, title:'Known by Name', reference:'Exodus 33:17',
        reflection:'God told Moses: "I know you by name." Not by function, not by role, not by track record — by name. What does it mean that the God of the universe knows your name specifically?',
        prayer:'You know my name, Lord — specifically, personally, intimately. I am not a number or a case. I am known. Let that be enough today. Amen.' }
    ]
  },

  /* ══════════════════════════ FORGIVENESS ═══════════════════════ */
  {
    id:'forgiveness-receive', mood:'forgiveness', moodLabel:'Forgiveness', moodEmoji:'🕊',
    name:'Receiving What Was Given', duration:5, featured:true,
    description:'For those who know they are forgiven intellectually but struggle to receive it. Five days letting grace go deeper than the head.',
    tags:['forgiveness','grace','guilt','freedom'],
    days:[
      { day:1, title:'As Far as the East from the West', reference:'Psalm 103:12',
        reflection:'East and West never meet — an infinite distance. God has removed your sin that far. What would change in your daily life if you genuinely believed your forgiven sins were that removed?',
        prayer:'Lord, my sin has been removed as far as east from west. I choose to believe that today, even when guilt resurfaces. It is done. Amen.' },
      { day:2, title:'He Remembers Them No More', reference:'Jeremiah 31:34; Hebrews 8:12',
        reflection:'"I will remember their sins no more." God, who knows all things, chooses not to hold your forgiven sin against you. What sin are you still holding against yourself that He has chosen to forget?',
        prayer:'God, if You remember it no more — I will try to release it too. You have dealt with it. I don\'t have to keep revisiting the verdict. Amen.' },
      { day:3, title:'The Prodigal Comes Home', reference:'Luke 15:20-24',
        reflection:'The father ran. Before the son could finish his speech, the father was running. What does the running tell you about how God receives you when you return to Him?',
        prayer:'Father, You ran. I don\'t have to earn my way back — You ran before I finished apologising. Receive me now. I am home. Amen.' },
      { day:4, title:'No Longer Slaves', reference:'Romans 6:17-18',
        reflection:'"You have been set free from sin and have become slaves to righteousness." Freedom from guilt is not theoretical — it changes what you are bound to. What old guilt is keeping you in bondage that Christ has already broken?',
        prayer:'Lord, I am free. The old bondage has been legally broken. I claim that freedom today in the name of Jesus. Amen.' },
      { day:5, title:'There Is Now No Condemnation', reference:'Romans 8:1',
        reflection:'This is a legal declaration: no condemnation. Not "less condemnation" or "conditional condemnation" — none. For those in Christ. Are you in Christ? Then this is yours. Can you receive a legal verdict in your favour?',
        prayer:'Father, there is no condemnation for me in Christ. I receive this verdict. I walk in it today — head up, guilt down. Amen.' }
    ]
  },
  {
    id:'forgiveness-give', mood:'forgiveness', moodLabel:'Forgiveness', moodEmoji:'🕊',
    name:'Releasing What Was Done', duration:7,
    description:'For those who need to forgive someone. Seven honest days with the hardest command in Scripture.',
    tags:['forgiveness','release','hurt','freedom'],
    days:[
      { day:1, title:'Seventy Times Seven', reference:'Matthew 18:21-22',
        reflection:'"Not seven times, but seventy-seven times." This is not about a literal number — it\'s about a posture. What is the offence you keep counting that this passage addresses?',
        prayer:'Lord, You don\'t ask me to count how many times I\'ve forgiven. You ask me to stop counting. Help me begin. Amen.' },
      { day:2, title:'The Unforgiving Servant', reference:'Matthew 18:23-35',
        reflection:'The servant who was forgiven an unpayable debt then refused to forgive a small one. How much have you been forgiven by God? How does that proportion affect how you hold the debt owed to you?',
        prayer:'God, You have forgiven me so much more than anyone owes me. From that forgiven place — give me the grace to forgive. Amen.' },
      { day:3, title:'Father, Forgive Them', reference:'Luke 23:34',
        reflection:'Jesus forgave from the cross — while the wrong was still being done to Him. Forgiveness is not waiting until you feel like it. It is a choice made against your feelings. What choice do you need to make today?',
        prayer:'Lord Jesus, You forgave while being crucified. I have far less to forgive. Give me the courage and grace to forgive now — before I feel it. Amen.' },
      { day:4, title:'Do Not Let the Sun Go Down', reference:'Ephesians 4:26-27,32',
        reflection:'Unforgiveness gives the devil a foothold. What foothold has unforgiveness given in your life — bitterness, resentment, replaying the wrong? How much space has it taken?',
        prayer:'Lord, I evict this foothold today. I forgive [name them, even in your heart]. I release them. Close the door on the enemy. Amen.' },
      { day:5, title:'Forgiveness Is Not Reconciliation', reference:'Romans 12:18',
        reflection:'"As far as it depends on you, live at peace." Forgiveness is unilateral. Reconciliation takes two. You can forgive without restoring full relationship. Does that distinction help release the pressure you feel?',
        prayer:'Lord, I can forgive without pretending what happened didn\'t. I can release without being unsafe. Help me find that line. Amen.' },
      { day:6, title:'Bless Those Who Persecute', reference:'Romans 12:14,17-21',
        reflection:'"Bless those who persecute you." This is the hardest verse. Not tolerate — bless. Can you pray one genuine blessing for the person who hurt you? What would happen if you tried?',
        prayer:'Lord, I pray for [name]. Bless them. I say it with difficulty but I say it. Overcome evil with good through me. Amen.' },
      { day:7, title:'Free Indeed', reference:'John 8:36',
        reflection:'"If the Son sets you free, you will be free indeed." Forgiveness releases the other person — but it also releases you. What does freedom from this offence look like in your life going forward?',
        prayer:'Lord, I choose freedom. I release the debt. I lay down the score I\'ve been keeping. I am free — and I set them free. Amen.' }
    ]
  },

  /* ════════════════════════════ PURPOSE ══════════════════════════ */
  {
    id:'purpose-calling', mood:'purpose', moodLabel:'Purpose', moodEmoji:'🧭',
    name:'Why Am I Here?', duration:7, featured:true,
    description:'For those wrestling with calling, meaning, and the reason they were made. Seven days discovering purpose in the One who made you.',
    tags:['calling','meaning','vocation','gifts'],
    days:[
      { day:1, title:'Created for Good Works', reference:'Ephesians 2:10',
        reflection:'"We are God\'s handiwork, created in Christ Jesus to do good works, which God prepared in advance for us to do." Your life is not an accident — it is a prepared work. What good works do you sense God has specifically shaped you for?',
        prayer:'Lord, I am Your handiwork — not my own project. The good works are already prepared. Show me what I am walking into. Amen.' },
      { day:2, title:'Gifts Differing', reference:'Romans 12:6-8',
        reflection:'Different gifts — not better or worse, just different. What gift have you been given that you have been undervaluing or failing to use? What would it look like to use it wholeheartedly?',
        prayer:'Father, You gave me specific gifts. I have been comparing mine to others\'. Teach me to use what I have — wholeheartedly, without apology. Amen.' },
      { day:3, title:'Esther — For Such a Time', reference:'Esther 4:14',
        reflection:'"Who knows whether you have not come to the kingdom for such a time as this?" You are alive now, in this place, with these people — for a reason. What moment are you standing in that needs what you specifically have?',
        prayer:'God, I am here for such a time as this. Show me the moment. Give me courage not to waste it. Amen.' },
      { day:4, title:'The Body Needs You', reference:'1 Corinthians 12:21-22',
        reflection:'"The eye cannot say to the hand, \'I don\'t need you!\'" The body of Christ actually needs your part — not generically, but specifically. What would be missing in your community if you weren\'t there?',
        prayer:'Lord, the body needs me — my specific part. Let me stop pretending I don\'t matter and start serving as though I do. Amen.' },
      { day:5, title:'Whatever You Do', reference:'Colossians 3:23-24',
        reflection:'"Whatever you do, work at it with all your heart, as working for the Lord." This is not about a career — it\'s about an orientation. What is your "whatever" right now? How would it change if you worked it for God rather than for approval?',
        prayer:'Lord, I work for You today — in the ordinary, small, unnoticed tasks. Make my work an act of worship. Amen.' },
      { day:6, title:'The Parable of the Talents', reference:'Matthew 25:14-30',
        reflection:'The servant who hid his talent was afraid. Fear is often what keeps us from using what God has given us. What fear is keeping you from investing what you\'ve been given?',
        prayer:'Lord, I don\'t want to bury what You gave me out of fear. Give me courage to invest — even if I get it wrong. Amen.' },
      { day:7, title:'Well Done, Good and Faithful Servant', reference:'Matthew 25:21',
        reflection:'"Well done, good and faithful servant." Faithfulness, not success. How does shifting from "successful" to "faithful" change what you aim for?',
        prayer:'Lord, at the end of my life, I want to hear "well done." Let faithfulness — not success by the world\'s measure — be my north star. Amen.' }
    ]
  },

  /* ══════════════════════════ TRANSITION ═════════════════════════ */
  {
    id:'transition-doorway', mood:'transition', moodLabel:'Transition', moodEmoji:'🚪',
    name:'Standing in the Doorway', duration:7, featured:true,
    description:'For those between what was and what will be. Seven days with the God who stands in thresholds and calls us through.',
    tags:['change','transition','trust','new'],
    days:[
      { day:1, title:'Do Not Remember the Former Things', reference:'Isaiah 43:18-19',
        reflection:'"Forget the former things; do not dwell on the past. See, I am doing a new thing!" Is your focus on what you\'re leaving, or on the new thing God is doing? What does "a way in the wilderness" look like for your situation?',
        prayer:'Lord, open my eyes to the new thing You are doing. I don\'t want to miss it by staring backward. Lead me through the wilderness. Amen.' },
      { day:2, title:'Moses at the Burning Bush', reference:'Exodus 3:1-12',
        reflection:'God appeared to Moses in an ordinary moment — a bush, his flock, a regular day. Then he was sent into the most significant transition of his life. What ordinary moment might God be speaking into for you right now?',
        prayer:'Lord, I take off my sandals. This ground may be holy — this ordinary transition. I listen. I am here. Amen.' },
      { day:3, title:'The Courage to Cross', reference:'Joshua 3:14-17',
        reflection:'The Jordan stopped only when the priests\' feet touched the water — not before. God often waits for us to step in before He moves. What water are you standing at the edge of?',
        prayer:'God, I step in. I trust the water will stop when I do. Give me the courage to put my foot in before I see the way. Amen.' },
      { day:4, title:'God Who Provides', reference:'Genesis 22:14',
        reflection:'Jehovah-Jireh — the LORD will provide. Abraham used this name at the moment God provided at the last moment. In your transition, what do you need to trust that God will provide?',
        prayer:'Jehovah-Jireh, You will provide. I don\'t know how or when. But I trust that at the right moment, You will provide what I need. Amen.' },
      { day:5, title:'Behold, I Am Doing a New Thing', reference:'Isaiah 42:9',
        reflection:'"Before they spring into being, I announce them to you." God announces new things before they happen. Are you paying attention to what God might be announcing in this transition?',
        prayer:'Lord, I pay attention. I lean in. What are You saying about what is coming? I am listening. Amen.' },
      { day:6, title:'Ruth Leaves Everything', reference:'Ruth 1:16',
        reflection:'"Where you go I will go." Ruth committed to Naomi before she knew how the story ended. What commitment does your transition require before you know the outcome?',
        prayer:'God, like Ruth, I commit to going where You lead — before I see the ending. Where You go, I will go. Amen.' },
      { day:7, title:'I Am Making All Things New', reference:'Revelation 21:5',
        reflection:'"I am making all things new." Present tense — He is making, not just will make. Your transition is caught up in the larger renewal God is working in all things. How does that cosmic context help your small transition make sense?',
        prayer:'Lord, my transition is part of Your great renewal. I trust what You are making — new, good, purposeful. All things new. Amen.' }
    ]
  },
  {
    id:'transition-ending', mood:'transition', moodLabel:'Transition', moodEmoji:'🚪',
    name:'Endings and Beginnings', duration:5,
    description:'Every ending contains the seed of a beginning. Five days with God who is the Alpha and Omega — present in both.',
    tags:['endings','change','grief','new-beginning'],
    days:[
      { day:1, title:'To Everything a Season', reference:'Ecclesiastes 3:1-8',
        reflection:'"There is a time for everything." What season is ending for you? What season might be beginning? Can you hold both without clinging to the one or rushing the other?',
        prayer:'Lord of seasons, be with me in this in-between. Help me honour what is ending and receive what is beginning. Amen.' },
      { day:2, title:'The Grain of Wheat', reference:'John 12:24',
        reflection:'"Unless a grain of wheat falls into the ground and dies, it remains alone. But if it dies, it produces much fruit." What is dying in your current transition? Can you trust that death for the fruit it might produce?',
        prayer:'Lord, I trust this dying. The grain falls — but You make things grow. I trust the dying for the fruit. Amen.' },
      { day:3, title:'This Far the Lord Has Helped', reference:'1 Samuel 7:12',
        reflection:'Before moving forward, look back. Set up your own Ebenezer — a stone of remembrance. What has God done in the chapter that is ending that deserves to be named and remembered?',
        prayer:'God, thus far You have helped me. I name what You have done in this season before I leave it. I will not forget. Amen.' },
      { day:4, title:'Beginning Again', reference:'Isaiah 40:31',
        reflection:'"Those who hope in the LORD will renew their strength. They will soar on wings like eagles." A new beginning requires renewed strength. Where will yours come from?',
        prayer:'Lord, renew my strength for what is ahead. I hope in You — not in my own energy or plans. Renew me for the next chapter. Amen.' },
      { day:5, title:'The Alpha and Omega', reference:'Revelation 1:8',
        reflection:'"I am the Alpha and Omega, who is and who was and who is to come." God is present in the ending and the beginning — they are both His. How does His permanence stabilise your change?',
        prayer:'Lord, You are in the ending and the beginning. You are not caught off guard by my transition. You are already in what is coming. I trust You. Amen.' }
    ]
  },
];

/* ── Helper functions ── */
function getPlansByMood(mood) {
  if (!mood) return SELAH_PLANS;
  return SELAH_PLANS.filter(p => p.mood === mood);
}
function getPlanById(id) {
  return SELAH_PLANS.find(p => p.id === id) || null;
}
function getFeaturedPlans() {
  return SELAH_PLANS.filter(p => p.featured);
}
function getAllTags() {
  const tags = new Set();
  SELAH_PLANS.forEach(p => (p.tags||[]).forEach(t => tags.add(t)));
  return [...tags].sort();
}

/* ── Verse of the Day ── */
const DAILY_VERSES = [
  { text:'For I know the plans I have for you, declares the LORD, plans to prosper you and not to harm you, plans to give you hope and a future.', ref:'Jeremiah 29:11' },
  { text:'He gives strength to the weary and increases the power of the weak.', ref:'Isaiah 40:29' },
  { text:'Do not be anxious about anything, but in every situation, by prayer and petition, with thanksgiving, present your requests to God.', ref:'Philippians 4:6' },
  { text:'The LORD is my shepherd, I lack nothing.', ref:'Psalm 23:1' },
  { text:'Trust in the LORD with all your heart and lean not on your own understanding.', ref:'Proverbs 3:5' },
  { text:'Be strong and courageous. Do not be afraid; for the LORD your God will be with you wherever you go.', ref:'Joshua 1:9' },
  { text:'The LORD is close to the brokenhearted and saves those who are crushed in spirit.', ref:'Psalm 34:18' },
  { text:'Come to me, all you who are weary and burdened, and I will give you rest.', ref:'Matthew 11:28' },
  { text:'And we know that in all things God works for the good of those who love him.', ref:'Romans 8:28' },
  { text:'Your word is a lamp for my feet, a light on my path.', ref:'Psalm 119:105' },
  { text:'The steadfast love of the LORD never ceases; his mercies never come to an end; they are new every morning.', ref:'Lamentations 3:22-23' },
  { text:'I can do all this through him who gives me strength.', ref:'Philippians 4:13' },
  { text:'God is our refuge and strength, an ever-present help in trouble.', ref:'Psalm 46:1' },
  { text:'Cast all your anxiety on him because he cares for you.', ref:'1 Peter 5:7' },
  { text:'Even though I walk through the darkest valley, I will fear no evil, for you are with me.', ref:'Psalm 23:4' },
  { text:'There is now no condemnation for those who are in Christ Jesus.', ref:'Romans 8:1' },
  { text:'See what great love the Father has lavished on us, that we should be called children of God — and that is what we are!', ref:'1 John 3:1' },
  { text:'The name of the LORD is a fortified tower; the righteous run to it and are safe.', ref:'Proverbs 18:10' },
  { text:'I am the resurrection and the life. The one who believes in me will live, even though they die.', ref:'John 11:25' },
  { text:'He who began a good work in you will carry it on to completion until the day of Christ Jesus.', ref:'Philippians 1:6' },
  { text:'Neither height nor depth, nor anything else in all creation, will be able to separate us from the love of God that is in Christ Jesus our Lord.', ref:'Romans 8:39' },
  { text:'Create in me a pure heart, O God, and renew a steadfast spirit within me.', ref:'Psalm 51:10' },
  { text:'The peace of God, which transcends all understanding, will guard your hearts and your minds in Christ Jesus.', ref:'Philippians 4:7' },
  { text:'I am the vine; you are the branches. If you remain in me and I in you, you will bear much fruit.', ref:'John 15:5' },
  { text:'For we are God\'s handiwork, created in Christ Jesus to do good works, which God prepared in advance for us to do.', ref:'Ephesians 2:10' },
  { text:'The LORD your God is with you, the Mighty Warrior who saves. He will take great delight in you.', ref:'Zephaniah 3:17' },
  { text:'Taste and see that the LORD is good; blessed is the one who takes refuge in him.', ref:'Psalm 34:8' },
  { text:'My grace is sufficient for you, for my power is made perfect in weakness.', ref:'2 Corinthians 12:9' },
  { text:'If the Son sets you free, you will be free indeed.', ref:'John 8:36' },
  { text:'This is the day the LORD has made; let us rejoice and be glad in it.', ref:'Psalm 118:24' },
  { text:'The grass withers and the flowers fall, but the word of our God endures forever.', ref:'Isaiah 40:8' },
];

function getVerseOfTheDay() {
  const dayOfYear = Math.floor((Date.now() - new Date(new Date().getFullYear(),0,0).getTime()) / 86400000);
  return DAILY_VERSES[dayOfYear % DAILY_VERSES.length];
}

function getRandomVerse() {
  return DAILY_VERSES[Math.floor(Math.random() * DAILY_VERSES.length)];
}
