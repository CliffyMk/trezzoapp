export const systemDesignMasteryContent = `
<div class="space-y-12 font-sans text-slate-800 dark:text-slate-200">

  <!-- Hero Section -->
  <div class="relative bg-gradient-to-br from-slate-900 via-indigo-900 to-purple-900 p-10 rounded-3xl shadow-2xl overflow-hidden text-white">
    <div class="relative z-10">
      <div class="flex items-center gap-3 mb-4">
        <span class="bg-indigo-500 text-white px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">Deep Dive</span>
        <span class="text-indigo-300 text-sm">🏗️ Beyond Pattern Matching</span>
      </div>
      <h2 class="text-4xl md:text-5xl font-extrabold mb-4 font-serif leading-tight">The System Design Awakening</h2>
      <p class="text-xl opacity-90 max-w-2xl">What separates engineers who memorize architectures from those who truly understand how to build systems that scale.</p>
    </div>
    <div class="absolute top-0 right-0 -mr-10 -mt-10 text-9xl opacity-10">🧠</div>
  </div>

  <!-- Key Insight Box -->
  <div class="bg-gradient-to-r from-amber-50 to-yellow-50 dark:from-amber-900/20 dark:to-yellow-900/20 p-6 rounded-2xl border-l-4 border-amber-500">
    <p class="text-lg font-medium text-amber-800 dark:text-amber-300">
      💡 <strong>The Core Revelation:</strong> The chasm isn't about knowledge. It's about the reflex to reach for patterns before truly understanding the problem you're solving.
    </p>
  </div>

  <!-- Table of Contents -->
  <nav class="bg-slate-100 dark:bg-slate-800/50 p-6 rounded-2xl border border-slate-200 dark:border-slate-700">
    <h3 class="text-lg font-bold mb-4 flex items-center gap-2">📋 The Journey</h3>
    <div class="grid grid-cols-2 md:grid-cols-4 gap-3 text-sm">
      <a href="#trap" class="flex items-center gap-2 p-2 rounded-lg hover:bg-white dark:hover:bg-slate-700 transition-colors">🪤 The Pattern Trap</a>
      <a href="#failure" class="flex items-center gap-2 p-2 rounded-lg hover:bg-white dark:hover:bg-slate-700 transition-colors">💥 Failure Thinking</a>
      <a href="#tradeoffs" class="flex items-center gap-2 p-2 rounded-lg hover:bg-white dark:hover:bg-slate-700 transition-colors">⚖️ Trade-Offs</a>
      <a href="#simple" class="flex items-center gap-2 p-2 rounded-lg hover:bg-white dark:hover:bg-slate-700 transition-colors">🎯 Start Simple</a>
    </div>
  </nav>

  <!-- The Uncomfortable Truth -->
  <section>
    <h3 class="flex items-center gap-3 text-2xl font-bold text-slate-900 dark:text-white mb-6">
      <span class="text-3xl">😰</span> The Uncomfortable Moment
    </h3>

    <div class="bg-slate-100 dark:bg-slate-800 p-6 rounded-2xl mb-6">
      <p class="text-slate-700 dark:text-slate-300 mb-4 italic">
        "Design a URL shortener." Seems simple enough. Hash the URL, store it, return the short code. Classic stuff.
      </p>
      <p class="text-slate-700 dark:text-slate-300 mb-4">
        Then comes the question: <strong>"What happens when you hit 10 million writes per second?"</strong>
      </p>
      <p class="text-red-600 dark:text-red-400 font-medium">
        Complete freeze. Not from lack of knowledge — but from suddenly realizing you've been memorizing architectures without understanding <em>why</em> they exist.
      </p>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div class="bg-red-50 dark:bg-red-900/20 p-5 rounded-xl text-center">
        <div class="text-4xl font-bold text-red-600 mb-2">67%</div>
        <p class="text-sm text-slate-600 dark:text-slate-400">of engineers can draw a load balancer perfectly</p>
      </div>
      <div class="bg-amber-50 dark:bg-amber-900/20 p-5 rounded-xl text-center">
        <div class="text-4xl font-bold text-amber-600 mb-2">19%</div>
        <p class="text-sm text-slate-600 dark:text-slate-400">can explain when horizontal scaling stops being the answer</p>
      </div>
    </div>
  </section>

  <!-- The Pattern Trap -->
  <section id="trap" class="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/10 dark:to-pink-900/10 p-8 rounded-3xl border border-purple-200 dark:border-purple-900/30">
    <h3 class="flex items-center gap-3 text-2xl font-bold text-purple-700 dark:text-purple-400 mb-6">
      <span class="text-3xl">🪤</span> The Pattern Trap
    </h3>

    <div class="bg-white dark:bg-slate-900 p-6 rounded-2xl shadow-sm mb-6">
      <h4 class="font-bold text-lg mb-4">📚 The Mental Library Approach</h4>
      <p class="text-slate-700 dark:text-slate-300 mb-4">
        Many engineers walk into interviews carrying a mental library of reference architectures. Instagram's feed system. Netflix's CDN strategy. Twitter's fanout model.
      </p>
      <p class="text-slate-600 dark:text-slate-400 italic">
        The belief: mastery = collecting more patterns, like trading cards.
      </p>
    </div>

    <div class="bg-amber-100 dark:bg-amber-900/30 p-5 rounded-xl border-l-4 border-amber-500 mb-6">
      <p class="text-slate-700 dark:text-slate-300 font-medium mb-2">
        🤔 The Wake-Up Question:
      </p>
      <p class="text-slate-600 dark:text-slate-400 italic">
        "Why consistent hashing here? What problem does it solve that a simple modulo wouldn't?"
      </p>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div class="bg-red-50 dark:bg-red-900/20 p-5 rounded-xl">
        <h5 class="font-bold text-red-700 dark:text-red-400 mb-2">❌ Pattern Matching</h5>
        <ul class="text-sm space-y-2 text-slate-600 dark:text-slate-400">
          <li>• "I saw it in every tutorial"</li>
          <li>• "Everyone uses this"</li>
          <li>• Start with architecture diagrams</li>
        </ul>
      </div>
      <div class="bg-green-50 dark:bg-green-900/20 p-5 rounded-xl">
        <h5 class="font-bold text-green-700 dark:text-green-400 mb-2">✅ Experienced Engineers</h5>
        <ul class="text-sm space-y-2 text-slate-600 dark:text-slate-400">
          <li>• Start with boring numbers</li>
          <li>• How many users? R/W ratio?</li>
          <li>• What breaks first under load?</li>
        </ul>
      </div>
    </div>

    <div class="mt-6 p-4 bg-indigo-100 dark:bg-indigo-900/30 rounded-xl text-center">
      <p class="font-medium text-indigo-800 dark:text-indigo-300">
        📐 The boxes and arrows come later — after the math forces your hand.
      </p>
    </div>
  </section>

  <!-- Failure Mode Thinking -->
  <section id="failure">
    <h3 class="flex items-center gap-3 text-2xl font-bold text-slate-900 dark:text-white mb-6">
      <span class="text-3xl">💥</span> Thinking in Failure Modes
    </h3>

    <p class="text-lg mb-6 text-slate-600 dark:text-slate-400">
      The questioning shifts from <em>"how would you design this"</em> to <strong>"what happens when..."</strong>
    </p>

    <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
      <div class="bg-red-50 dark:bg-red-900/20 p-4 rounded-xl">
        <div class="text-2xl mb-2">🗄️</div>
        <h4 class="font-bold text-sm mb-2">Database Fails Mid-Transaction?</h4>
        <p class="text-xs text-slate-500">Primary goes down during writes</p>
      </div>
      <div class="bg-red-50 dark:bg-red-900/20 p-4 rounded-xl">
        <div class="text-2xl mb-2">⏰</div>
        <h4 class="font-bold text-sm mb-2">Cache Lags 30 Seconds?</h4>
        <p class="text-xs text-slate-500">During a viral traffic spike</p>
      </div>
      <div class="bg-red-50 dark:bg-red-900/20 p-4 rounded-xl">
        <div class="text-2xl mb-2">🌍</div>
        <h4 class="font-bold text-sm mb-2">Datacenters Split?</h4>
        <p class="text-xs text-slate-500">Both think they're primary</p>
      </div>
    </div>

    <div class="bg-slate-900 text-white p-6 rounded-2xl mb-6">
      <div class="flex items-center gap-3 mb-4">
        <span class="text-2xl">📊</span>
        <h4 class="font-bold text-lg">The Outage Reality</h4>
      </div>
      <div class="text-center">
        <div class="text-5xl font-bold text-red-400 mb-2">73%</div>
        <p class="text-slate-300">of major tech company outages involve <strong>state inconsistency during partial failures</strong></p>
        <p class="text-sm text-slate-400 mt-2 italic">The exact scenarios most never rehearse</p>
      </div>
    </div>

    <div class="bg-emerald-100 dark:bg-emerald-900/30 p-5 rounded-xl border-l-4 border-emerald-500">
      <h4 class="font-bold mb-3 text-emerald-800 dark:text-emerald-300">✅ The Practice Move</h4>
      <p class="text-slate-700 dark:text-slate-300 mb-3">
        Pick any component in your design. Force yourself through <strong>three failure scenarios</strong>:
      </p>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-3 text-sm">
        <div class="bg-white dark:bg-slate-900 p-3 rounded-lg">
          <strong>Database:</strong> Writes succeed, reads lag behind?
        </div>
        <div class="bg-white dark:bg-slate-900 p-3 rounded-lg">
          <strong>Cache:</strong> Evicted faster than repopulated?
        </div>
        <div class="bg-white dark:bg-slate-900 p-3 rounded-lg">
          <strong>Load Balancer:</strong> Health check passes but service deadlocked?
        </div>
      </div>
      <p class="text-sm text-slate-500 mt-3 italic">
        If you can't articulate what breaks and how you'd detect it, you're not ready.
      </p>
    </div>
  </section>

  <!-- Trade-Offs -->
  <section id="tradeoffs" class="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/10 dark:to-indigo-900/10 p-8 rounded-3xl border border-blue-200 dark:border-blue-900/30">
    <h3 class="flex items-center gap-3 text-2xl font-bold text-blue-700 dark:text-blue-400 mb-6">
      <span class="text-3xl">⚖️</span> The Truth About Trade-Offs
    </h3>

    <div class="bg-white dark:bg-slate-900 p-6 rounded-2xl mb-6 shadow-sm">
      <p class="text-slate-700 dark:text-slate-300 mb-4">
        The old mindset: propose the "correct" architecture. Redis for caching, PostgreSQL for consistency, Kafka for events. Safe. Defensible. By the book.
      </p>
      <div class="p-4 bg-amber-50 dark:bg-amber-900/30 rounded-xl">
        <p class="font-medium text-amber-800 dark:text-amber-300">
          🎯 The Challenge: "Now design the same system, but <strong>you can't use a distributed cache</strong>."
        </p>
      </div>
    </div>

    <div class="bg-white dark:bg-slate-900 p-6 rounded-2xl shadow-sm mb-6">
      <h4 class="font-bold text-lg mb-4">🤯 The Revelation</h4>
      <p class="text-slate-700 dark:text-slate-300 mb-4 italic">
        "What if your cache hit rate is only 40% because URLs follow a long-tail distribution and barely ever repeat? Does caching still help, or does it just add latency and operational headaches?"
      </p>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
      <div class="bg-white dark:bg-slate-900 p-5 rounded-xl shadow-sm">
        <div class="text-2xl mb-2">💾</div>
        <h5 class="font-bold mb-2">Caching</h5>
        <p class="text-sm text-slate-600 dark:text-slate-400">Works when: reads dominate, access patterns cluster</p>
      </div>
      <div class="bg-white dark:bg-slate-900 p-5 rounded-xl shadow-sm">
        <div class="text-2xl mb-2">🔀</div>
        <h5 class="font-bold mb-2">Sharding</h5>
        <p class="text-sm text-slate-600 dark:text-slate-400">Makes sense when: write throughput > transactional guarantees</p>
      </div>
      <div class="bg-white dark:bg-slate-900 p-5 rounded-xl shadow-sm">
        <div class="text-2xl mb-2">📑</div>
        <h5 class="font-bold mb-2">Replication</h5>
        <p class="text-sm text-slate-600 dark:text-slate-400">Helps when: read availability > consistency</p>
      </div>
    </div>

    <div class="bg-indigo-100 dark:bg-indigo-900/30 p-5 rounded-xl border-l-4 border-indigo-500">
      <p class="font-medium text-indigo-800 dark:text-indigo-300">
        💡 <strong>Pro Tip:</strong> State assumptions out loud. "I'm assuming a 95% cache hit rate because URLs follow a power-law distribution. If that assumption is wrong, this whole design breaks."
      </p>
      <p class="text-sm text-slate-500 mt-2 italic">
        Interviewers reward honesty over fake confidence.
      </p>
    </div>
  </section>

  <!-- Start Simple -->
  <section id="simple">
    <h3 class="flex items-center gap-3 text-2xl font-bold text-slate-900 dark:text-white mb-6">
      <span class="text-3xl">🎯</span> The Simplicity Principle
    </h3>

    <div class="bg-emerald-100 dark:bg-emerald-900/30 p-6 rounded-2xl mb-6 border-2 border-emerald-400">
      <p class="text-lg text-emerald-800 dark:text-emerald-300 font-medium mb-4">
        The breakthrough: Erase the distributed cache. Redraw the whole flow.
      </p>
      <ul class="space-y-2 text-slate-700 dark:text-slate-300">
        <li class="flex items-start gap-2">
          <span>1️⃣</span>
          <span>Direct database reads for the first million requests</span>
        </li>
        <li class="flex items-start gap-2">
          <span>2️⃣</span>
          <span>Add caching only after proving hit rate justifies complexity</span>
        </li>
        <li class="flex items-start gap-2">
          <span>3️⃣</span>
          <span>Start vertical until math forces horizontal</span>
        </li>
      </ul>
      <p class="mt-4 font-bold text-emerald-700 dark:text-emerald-400">
        "Now you're designing."
      </p>
    </div>

    <div class="bg-slate-100 dark:bg-slate-800 p-6 rounded-2xl mb-6">
      <h4 class="font-bold text-lg mb-4">🏗️ Three Rules That Hold</h4>
      <div class="space-y-4">
        <div class="flex items-start gap-3 p-3 bg-white dark:bg-slate-900 rounded-lg">
          <span class="text-xl">📦</span>
          <div>
            <strong>Rule 1: Start minimal</strong>
            <p class="text-sm text-slate-500">One database, one server, no cache</p>
          </div>
        </div>
        <div class="flex items-start gap-3 p-3 bg-white dark:bg-slate-900 rounded-lg">
          <span class="text-xl">📏</span>
          <div>
            <strong>Rule 2: Scale on specific metrics</strong>
            <p class="text-sm text-slate-500">Only when latency/throughput/cost crosses a threshold you can name</p>
          </div>
        </div>
        <div class="flex items-start gap-3 p-3 bg-white dark:bg-slate-900 rounded-lg">
          <span class="text-xl">⚠️</span>
          <div>
            <strong>Rule 3: Name the new failure mode</strong>
            <p class="text-sm text-slate-500">Every box you add introduces one — explain it and how you'd detect it</p>
          </div>
        </div>
      </div>
    </div>

    <div class="bg-amber-50 dark:bg-amber-900/20 p-5 rounded-xl">
      <h4 class="font-bold mb-3">🔍 The Acid Test</h4>
      <p class="text-slate-700 dark:text-slate-300">
        Take any design you've practiced. Pick one component. <strong>Remove it.</strong>
      </p>
      <div class="mt-3 p-3 bg-white dark:bg-slate-900 rounded-lg">
        <p class="text-sm text-slate-600 dark:text-slate-400">
          Can the system still work? <strong>Yes</strong> → You didn't need it.<br/>
          <strong>No</strong> → What metric proves it's necessary?
        </p>
      </div>
      <p class="text-sm text-slate-500 mt-3 italic">
        That's how you build judgment instead of just pattern fluency.
      </p>
    </div>
  </section>

  <!-- Final Quote -->
  <div class="my-8 text-center p-10 bg-gradient-to-br from-slate-900 to-indigo-900 rounded-3xl text-white">
    <p class="text-2xl font-serif italic mb-4">"System design mastery isn't about drawing the 'right' architecture."</p>
    <p class="text-indigo-300 text-sm uppercase tracking-widest mb-6">— The Real Test</p>
    <div class="p-4 bg-white/10 rounded-xl max-w-2xl mx-auto">
      <p class="text-lg mb-4">It's about showing you can:</p>
      <div class="flex flex-wrap justify-center gap-3">
        <span class="px-3 py-1 bg-white/20 rounded-full text-sm">Reason under uncertainty</span>
        <span class="px-3 py-1 bg-white/20 rounded-full text-sm">Defend trade-offs with numbers</span>
        <span class="px-3 py-1 bg-white/20 rounded-full text-sm">Adapt when constraints shift</span>
      </div>
    </div>
  </div>

</div>
`;
