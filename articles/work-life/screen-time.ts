export const screenTimeContent = `
<div class="space-y-12 font-sans text-slate-800 dark:text-slate-200">

  <!-- Hero Section -->
  <div class="relative bg-gradient-to-br from-blue-900 via-indigo-900 to-purple-900 p-10 rounded-3xl shadow-2xl overflow-hidden text-white">
    <div class="relative z-10">
      <div class="flex items-center gap-3 mb-4">
        <span class="bg-blue-500 text-white px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">Psychologist's Take</span>
        <span class="text-blue-300 text-sm">📱 The Research Might Surprise You</span>
      </div>
      <h2 class="text-4xl md:text-5xl font-extrabold mb-4 font-serif leading-tight">Why I Let My Kids Have Screen Time</h2>
      <p class="text-xl opacity-90 max-w-2xl">What the science actually says about screens, and why a child development psychologist stopped feeling guilty about Bluey.</p>
    </div>
    <div class="absolute top-0 right-0 -mr-10 -mt-10 text-9xl opacity-10">📺</div>
  </div>

  <!-- Key Insight Box -->
  <div class="bg-gradient-to-r from-emerald-50 to-teal-50 dark:from-emerald-900/20 dark:to-teal-900/20 p-6 rounded-2xl border-l-4 border-emerald-500">
    <p class="text-lg font-medium text-emerald-800 dark:text-emerald-300">
      💡 <strong>The Core Insight:</strong> Screen time has a trivial effect on well-being — accounting for less than 1% of the variance. For context, that's a smaller effect than eating potatoes has on wellbeing.
    </p>
  </div>

  <!-- Table of Contents -->
  <nav class="bg-slate-100 dark:bg-slate-800/50 p-6 rounded-2xl border border-slate-200 dark:border-slate-700">
    <h3 class="text-lg font-bold mb-4 flex items-center gap-2">📋 What You'll Learn</h3>
    <div class="grid grid-cols-2 md:grid-cols-4 gap-3 text-sm">
      <a href="#panic" class="flex items-center gap-2 p-2 rounded-lg hover:bg-white dark:hover:bg-slate-700 transition-colors">😱 The Panic Cycle</a>
      <a href="#research" class="flex items-center gap-2 p-2 rounded-lg hover:bg-white dark:hover:bg-slate-700 transition-colors">📊 The Research</a>
      <a href="#framework" class="flex items-center gap-2 p-2 rounded-lg hover:bg-white dark:hover:bg-slate-700 transition-colors">🎯 The Framework</a>
      <a href="#concern" class="flex items-center gap-2 p-2 rounded-lg hover:bg-white dark:hover:bg-slate-700 transition-colors">⚠️ Real Concerns</a>
    </div>
  </nav>

  <!-- The Panic Cycle -->
  <section id="panic">
    <h3 class="flex items-center gap-3 text-2xl font-bold text-slate-900 dark:text-white mb-6">
      <span class="text-3xl">😱</span> The Panic Cycle (And Why We Keep Falling For It)
    </h3>

    <p class="text-lg mb-6 text-slate-600 dark:text-slate-400">
      Every generation has its parenting panic. None of them turned out to be the apocalypse.
    </p>

    <div class="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
      <div class="bg-amber-50 dark:bg-amber-900/20 p-4 rounded-xl text-center">
        <div class="text-2xl mb-2">📚</div>
        <div class="font-bold">1950s</div>
        <div class="text-sm text-slate-500">Comic books → Delinquents!</div>
        <div class="text-xs text-green-600 mt-1">❌ Didn't happen</div>
      </div>
      <div class="bg-amber-50 dark:bg-amber-900/20 p-4 rounded-xl text-center">
        <div class="text-2xl mb-2">🎲</div>
        <div class="font-bold">1980s</div>
        <div class="text-sm text-slate-500">D&D + Metal → Satanism!</div>
        <div class="text-xs text-green-600 mt-1">❌ Didn't happen</div>
      </div>
      <div class="bg-amber-50 dark:bg-amber-900/20 p-4 rounded-xl text-center">
        <div class="text-2xl mb-2">🎮</div>
        <div class="font-bold">2000s</div>
        <div class="text-sm text-slate-500">Video games → Violence!</div>
        <div class="text-xs text-green-600 mt-1">❌ Didn't happen</div>
      </div>
      <div class="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-xl text-center border-2 border-blue-400">
        <div class="text-2xl mb-2">📱</div>
        <div class="font-bold">2020s</div>
        <div class="text-sm text-slate-500">Screens → Brain damage?</div>
        <div class="text-xs text-blue-600 mt-1">🤔 Let's look at research...</div>
      </div>
    </div>

    <div class="bg-purple-100 dark:bg-purple-900/30 p-5 rounded-xl">
      <h4 class="font-bold mb-2 text-purple-800 dark:text-purple-300">🧠 Psychologist's Observation</h4>
      <p class="text-slate-700 dark:text-slate-300">
        "The parents who are most anxious about screen time often aren't dealing with actual screen problems. They're dealing with <strong>anxiety about being judged</strong> as 'bad parents' if they're not perfectly managing every aspect of their child's media consumption."
      </p>
    </div>
  </section>

  <!-- The Research -->
  <section id="research" class="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/10 dark:to-indigo-900/10 p-8 rounded-3xl border border-blue-200 dark:border-blue-900/30">
    <h3 class="flex items-center gap-3 text-2xl font-bold text-blue-700 dark:text-blue-400 mb-6">
      <span class="text-3xl">📊</span> What the Research Actually Says
    </h3>

    <div class="bg-white dark:bg-slate-900 p-6 rounded-2xl mb-6 shadow-sm">
      <h4 class="font-bold text-lg mb-4">📉 The "Screens Are Poison" Narrative Is Oversimplified</h4>
      <div class="space-y-4">
        <div class="flex items-start gap-3 p-3 bg-green-50 dark:bg-green-900/20 rounded-lg">
          <span class="text-xl">✅</span>
          <div>
            <strong>AAP Updated Guidelines (2016)</strong>
            <p class="text-sm text-slate-500">Acknowledged previous "no screens before 2, max 2 hours" was overly rigid and NOT entirely evidence-based.</p>
          </div>
        </div>
        <div class="flex items-start gap-3 p-3 bg-green-50 dark:bg-green-900/20 rounded-lg">
          <span class="text-xl">✅</span>
          <div>
            <strong>2019 Study: 17,000+ Adolescents</strong>
            <p class="text-sm text-slate-500">Screen time accounted for <strong>less than 1%</strong> of the variance in well-being. That's smaller than the effect of eating potatoes!</p>
          </div>
        </div>
      </div>
    </div>

    <div class="bg-white dark:bg-slate-900 p-6 rounded-2xl mb-6 shadow-sm">
      <h4 class="font-bold text-lg mb-4 text-amber-700 dark:text-amber-400">⚠️ But Context Matters ENORMOUSLY</h4>
      <p class="text-slate-700 dark:text-slate-300 mb-4">
        <strong>What kids are doing on screens matters far more than how long they're on them.</strong>
      </p>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div class="bg-red-50 dark:bg-red-900/20 p-4 rounded-xl">
          <h5 class="font-bold text-red-700 dark:text-red-400 mb-2">❌ Associated with Negative Outcomes</h5>
          <ul class="text-sm space-y-1 text-slate-600 dark:text-slate-400">
            <li>• Passive consumption</li>
            <li>• Mindless scrolling</li>
            <li>• Low-quality content</li>
          </ul>
        </div>
        <div class="bg-green-50 dark:bg-green-900/20 p-4 rounded-xl">
          <h5 class="font-bold text-green-700 dark:text-green-400 mb-2">✅ Often Positive or Neutral</h5>
          <ul class="text-sm space-y-1 text-slate-600 dark:text-slate-400">
            <li>• Interactive, educational use</li>
            <li>• Creative activities (coding, art)</li>
            <li>• Quality social connection</li>
          </ul>
        </div>
      </div>
    </div>

    <div class="bg-amber-100 dark:bg-amber-900/30 p-5 rounded-xl border-l-4 border-amber-500">
      <h4 class="font-bold mb-2 text-amber-800 dark:text-amber-300">💡 The Real Issue: Displacement</h4>
      <p class="text-slate-700 dark:text-slate-300">
        When screen time <strong>displaces essential activities</strong> — sleep, physical activity, face-to-face interaction, outdoor play — that's when we see negative outcomes.
      </p>
      <p class="text-sm text-slate-500 mt-2 italic">
        "The screens aren't the primary problem — they're a symptom of something else: Anxiety, social struggles, family disconnection, lack of other engaging activities."
      </p>
    </div>
  </section>

  <!-- The Framework -->
  <section id="framework">
    <h3 class="flex items-center gap-3 text-2xl font-bold text-slate-900 dark:text-white mb-6">
      <span class="text-3xl">🎯</span> The 4-Part Framework
    </h3>

    <p class="text-lg mb-6 text-slate-600 dark:text-slate-400">
      Instead of tracking screen time minutes like a prison warden, here's what actually matters:
    </p>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
      <div class="bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20 p-6 rounded-2xl border border-blue-200 dark:border-blue-700">
        <div class="text-3xl mb-3">1️⃣</div>
        <h4 class="font-bold text-lg mb-2 text-blue-800 dark:text-blue-300">The Displacement Test</h4>
        <p class="text-sm text-slate-600 dark:text-slate-400 mb-3">
          Are screens preventing essential activities?
        </p>
        <div class="bg-white dark:bg-slate-900 p-3 rounded-lg text-sm">
          <div class="text-green-600 mb-1">✅ Sleeping well? Playing actively? Connecting with family?</div>
          <div class="text-slate-500">→ Not concerned about YouTube habit</div>
        </div>
      </div>

      <div class="bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-900/20 dark:to-purple-800/20 p-6 rounded-2xl border border-purple-200 dark:border-purple-700">
        <div class="text-3xl mb-3">2️⃣</div>
        <h4 class="font-bold text-lg mb-2 text-purple-800 dark:text-purple-300">The Quality Check</h4>
        <p class="text-sm text-slate-600 dark:text-slate-400 mb-3">
          Not all content is equal.
        </p>
        <div class="bg-white dark:bg-slate-900 p-3 rounded-lg text-sm">
          <div class="flex justify-between">
            <span class="text-green-600">Bluey, Minecraft building</span>
            <span>✅</span>
          </div>
          <div class="flex justify-between">
            <span class="text-red-600">Dopamine-hit games</span>
            <span>❌</span>
          </div>
        </div>
      </div>

      <div class="bg-gradient-to-br from-emerald-50 to-emerald-100 dark:from-emerald-900/20 dark:to-emerald-800/20 p-6 rounded-2xl border border-emerald-200 dark:border-emerald-700">
        <div class="text-3xl mb-3">3️⃣</div>
        <h4 class="font-bold text-lg mb-2 text-emerald-800 dark:text-emerald-300">The Relationship Test</h4>
        <p class="text-sm text-slate-600 dark:text-slate-400 mb-3">
          Is tech enhancing or replacing human connection?
        </p>
        <div class="bg-white dark:bg-slate-900 p-3 rounded-lg text-sm">
          <div class="text-green-600 mb-1">✅ FaceTime with grandma, learning to code</div>
          <div class="text-red-600">❌ Avoiding family, constant babysitter</div>
        </div>
      </div>

      <div class="bg-gradient-to-br from-amber-50 to-amber-100 dark:from-amber-900/20 dark:to-amber-800/20 p-6 rounded-2xl border border-amber-200 dark:border-amber-700">
        <div class="text-3xl mb-3">4️⃣</div>
        <h4 class="font-bold text-lg mb-2 text-amber-800 dark:text-amber-300">The Flexibility Check</h4>
        <p class="text-sm text-slate-600 dark:text-slate-400 mb-3">
          Can they self-regulate?
        </p>
        <div class="bg-white dark:bg-slate-900 p-3 rounded-lg text-sm">
          <ul class="space-y-1 text-slate-600 dark:text-slate-400">
            <li>• Can stop when asked?</li>
            <li>• Can handle boredom?</li>
            <li>• Can engage in non-screen activities?</li>
          </ul>
        </div>
      </div>
    </div>

    <div class="bg-indigo-100 dark:bg-indigo-900/30 p-5 rounded-xl border-l-4 border-indigo-500">
      <p class="font-medium text-indigo-800 dark:text-indigo-300">
        🎯 <strong>Controversial truth:</strong> Kids develop self-regulation skills partially through <em>having access</em> to screens and learning to manage them, not by being completely restricted.
      </p>
    </div>
  </section>

  <!-- The Confession -->
  <section class="bg-gradient-to-br from-pink-50 to-rose-50 dark:from-pink-900/10 dark:to-rose-900/10 p-8 rounded-3xl border border-pink-200 dark:border-pink-900/30">
    <h3 class="flex items-center gap-3 text-2xl font-bold text-pink-700 dark:text-pink-400 mb-6">
      <span class="text-3xl">🏠</span> The Confession: How My Family Uses Screens
    </h3>

    <div class="bg-white dark:bg-slate-900 p-6 rounded-2xl shadow-sm mb-6">
      <ul class="space-y-3 text-slate-700 dark:text-slate-300">
        <li class="flex items-start gap-3">
          <span class="text-xl">📺</span>
          <span>Kids watch TV most mornings while I get ready for work</span>
        </li>
        <li class="flex items-start gap-3">
          <span class="text-xl">🎮</span>
          <span>They play Minecraft regularly</span>
        </li>
        <li class="flex items-start gap-3">
          <span class="text-xl">🔬</span>
          <span>7-year-old is obsessed with YouTube science experiment videos</span>
        </li>
        <li class="flex items-start gap-3">
          <span class="text-xl">📱</span>
          <span>10-year-old FaceTimes friends and watches streamers</span>
        </li>
        <li class="flex items-start gap-3">
          <span class="text-xl">❄️</span>
          <span>Sometimes 4-5 hour screen days on weekends. Especially winter.</span>
        </li>
      </ul>
    </div>

    <div class="bg-green-100 dark:bg-green-900/30 p-5 rounded-xl">
      <h4 class="font-bold text-lg mb-2 text-green-800 dark:text-green-300">✅ And the kids are thriving:</h4>
      <div class="flex flex-wrap gap-2">
        <span class="px-3 py-1 bg-green-200 dark:bg-green-800 rounded-full text-sm">Read voraciously</span>
        <span class="px-3 py-1 bg-green-200 dark:bg-green-800 rounded-full text-sm">Play outside</span>
        <span class="px-3 py-1 bg-green-200 dark:bg-green-800 rounded-full text-sm">Have friends</span>
        <span class="px-3 py-1 bg-green-200 dark:bg-green-800 rounded-full text-sm">Emotionally regulated</span>
        <span class="px-3 py-1 bg-green-200 dark:bg-green-800 rounded-full text-sm">No meltdowns when iPad dies</span>
      </div>
    </div>
  </section>

  <!-- The Dirty Secret -->
  <section>
    <h3 class="flex items-center gap-3 text-2xl font-bold text-slate-900 dark:text-white mb-6">
      <span class="text-3xl">🤫</span> The Dirty Secret About Screen-Free Parenting
    </h3>

    <div class="bg-red-100 dark:bg-red-900/30 p-6 rounded-2xl mb-6">
      <p class="text-slate-700 dark:text-slate-300 mb-4">
        <strong>Many parents who brag about screen-free households are either:</strong>
      </p>
      <div class="flex flex-wrap gap-2">
        <span class="px-3 py-1 bg-red-200 dark:bg-red-800 rounded-full text-sm">Independently wealthy</span>
        <span class="px-3 py-1 bg-red-200 dark:bg-red-800 rounded-full text-sm">Full-time childcare</span>
        <span class="px-3 py-1 bg-red-200 dark:bg-red-800 rounded-full text-sm">Work part-time</span>
        <span class="px-3 py-1 bg-red-200 dark:bg-red-800 rounded-full text-sm">Non-working partner</span>
      </div>
    </div>

    <div class="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-2xl">
      <p class="text-slate-700 dark:text-slate-300 mb-4">
        For <strong>single parents, dual-income families, parents without support, or parents with health challenges</strong>, screens are often a necessary tool for survival.
      </p>
      <p class="text-lg font-bold text-blue-800 dark:text-blue-300">
        And that's okay. That's more than okay. That's reality.
      </p>
      <p class="text-sm text-slate-500 mt-4 italic">
        "I've had parents cry in my office because they let their kid watch TV so they could take a shower. This is absurd."
      </p>
    </div>
  </section>

  <!-- The Actually Concerning Stuff -->
  <section id="concern" class="bg-gradient-to-br from-amber-50 to-orange-50 dark:from-amber-900/10 dark:to-orange-900/10 p-8 rounded-3xl border border-amber-200 dark:border-amber-900/30">
    <h3 class="flex items-center gap-3 text-2xl font-bold text-amber-700 dark:text-amber-400 mb-6">
      <span class="text-3xl">⚠️</span> What's ACTUALLY Concerning (That Gets Ignored)
    </h3>

    <div class="space-y-4">
      <div class="bg-white dark:bg-slate-900 p-5 rounded-xl shadow-sm">
        <div class="flex items-center gap-3 mb-2">
          <span class="text-2xl">📱</span>
          <h4 class="font-bold text-lg">Social Media + Adolescents</h4>
        </div>
        <p class="text-sm text-slate-600 dark:text-slate-400">
          This is where research shows genuine concern. Comparison mechanics, validation-seeking, and cyberbullying may be harmful for vulnerable youth, especially girls. But this is about <strong>social media specifically</strong>, not "screens broadly" — and about <strong>adolescents</strong>, not toddlers watching Daniel Tiger.
        </p>
      </div>

      <div class="bg-white dark:bg-slate-900 p-5 rounded-xl shadow-sm">
        <div class="flex items-center gap-3 mb-2">
          <span class="text-2xl">🚨</span>
          <h4 class="font-bold text-lg">Harmful Content</h4>
        </div>
        <p class="text-sm text-slate-600 dark:text-slate-400">
          Content promoting eating disorders, self-harm, conspiracy theories, or extremist views. This requires nuance, media literacy, and ongoing dialogue — not blanket screen restrictions.
        </p>
      </div>

      <div class="bg-red-100 dark:bg-red-900/30 p-5 rounded-xl">
        <div class="flex items-center gap-3 mb-2">
          <span class="text-2xl">👀</span>
          <h4 class="font-bold text-lg text-red-800 dark:text-red-300">PARENTAL Phone Use (The Irony!)</h4>
        </div>
        <p class="text-sm text-slate-700 dark:text-slate-300">
          Research shows that <strong>parental phone use during parent-child interactions</strong> may be more problematic for attachment and development than child screen use.
        </p>
        <p class="text-sm text-slate-500 mt-2 italic">
          "When I'm scrolling Instagram while my kid tries to tell me about school, that's a relationship problem. The fact that it involves a screen is almost incidental."
        </p>
      </div>
    </div>
  </section>

  <!-- The Bottom Line -->
  <section>
    <h3 class="flex items-center gap-3 text-2xl font-bold text-slate-900 dark:text-white mb-6">
      <span class="text-3xl">✅</span> The Bottom Line
    </h3>

    <div class="bg-emerald-100 dark:bg-emerald-900/30 p-6 rounded-2xl mb-6">
      <p class="text-lg text-emerald-800 dark:text-emerald-300 font-medium mb-4">
        What matters is NOT screen time minutes. What matters is:
      </p>
      <div class="grid grid-cols-2 md:grid-cols-5 gap-3 text-center">
        <div class="bg-white dark:bg-slate-900 p-3 rounded-lg">
          <div class="text-2xl mb-1">😴</div>
          <div class="text-sm font-medium">Sleeping?</div>
        </div>
        <div class="bg-white dark:bg-slate-900 p-3 rounded-lg">
          <div class="text-2xl mb-1">🏃</div>
          <div class="text-sm font-medium">Moving?</div>
        </div>
        <div class="bg-white dark:bg-slate-900 p-3 rounded-lg">
          <div class="text-2xl mb-1">👨‍👩‍👧</div>
          <div class="text-sm font-medium">Connecting?</div>
        </div>
        <div class="bg-white dark:bg-slate-900 p-3 rounded-lg">
          <div class="text-2xl mb-1">😐</div>
          <div class="text-sm font-medium">Can be bored?</div>
        </div>
        <div class="bg-white dark:bg-slate-900 p-3 rounded-lg">
          <div class="text-2xl mb-1">🌍</div>
          <div class="text-sm font-medium">Engaging world?</div>
        </div>
      </div>
    </div>

    <div class="bg-slate-100 dark:bg-slate-800 p-6 rounded-2xl">
      <p class="text-slate-700 dark:text-slate-300 mb-4">
        <strong>If yes</strong> → Stop counting minutes. Let go of the guilt.
      </p>
      <p class="text-slate-700 dark:text-slate-300">
        <strong>If no</strong> → The problem probably isn't the screen time itself — it's whatever the screens are displacing or whatever the child is trying to escape by using screens.
      </p>
    </div>
  </section>

  <!-- Final Quote -->
  <div class="my-8 text-center p-10 bg-gradient-to-br from-blue-900 to-purple-900 rounded-3xl text-white">
    <p class="text-2xl font-serif italic mb-4">"My kids watched Bluey this morning. They'll probably play video games this afternoon. And they're going to be fine."</p>
    <p class="text-blue-300 text-sm uppercase tracking-widest mb-6">— Because context matters, not minutes</p>
    <div class="p-4 bg-white/10 rounded-xl max-w-2xl mx-auto">
      <p class="text-lg">I'm also going to talk to them at dinner, read with them before bed, and make sure they know they're loved unconditionally — whether they're on screens or off them.</p>
      <p class="text-sm text-white/70 mt-2 font-medium">That's what the research actually shows matters.</p>
    </div>
  </div>

</div>
`;
