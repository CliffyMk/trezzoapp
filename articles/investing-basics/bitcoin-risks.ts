export const bitcoinRisksContent = `
<div class="space-y-12 font-sans text-slate-800 dark:text-slate-200">

  <!-- Hero Section -->
  <div class="relative bg-gradient-to-br from-orange-900 via-amber-900 to-slate-900 p-10 rounded-3xl shadow-2xl overflow-hidden text-white">
    <div class="relative z-10">
      <div class="flex items-center gap-3 mb-4">
        <span class="bg-orange-500 text-white px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">Real Talk</span>
        <span class="text-orange-300 text-sm">₿ The Other Side of the Coin</span>
      </div>
      <h2 class="text-4xl md:text-5xl font-extrabold mb-4 font-serif leading-tight">Why You Shouldn't Buy Bitcoin</h2>
      <p class="text-xl opacity-90 max-w-2xl">A raw, honest look at the risks everyone skips. Written by someone who holds it — but still thinks most people shouldn't.</p>
    </div>
    <div class="absolute top-0 right-0 -mr-20 -mt-20 w-80 h-80 bg-orange-500 opacity-10 rounded-full blur-3xl"></div>
  </div>

  <!-- Key Insight Box -->
  <div class="bg-gradient-to-r from-red-50 to-orange-50 dark:from-red-900/20 dark:to-orange-900/20 p-6 rounded-2xl border-l-4 border-red-500">
    <p class="text-lg font-medium text-red-800 dark:text-red-300">
      ⚠️ <strong>The Hard Truth:</strong> Buying Bitcoin because you "feel late" and "scared of missing out" is not courage. That's panic dressed as confidence. And it's usually a terrible idea.
    </p>
  </div>

  <!-- Table of Contents -->
  <nav class="bg-slate-100 dark:bg-slate-800/50 p-6 rounded-2xl border border-slate-200 dark:border-slate-700">
    <h3 class="text-lg font-bold mb-4 flex items-center gap-2">📋 The 8+ Reasons</h3>
    <div class="grid grid-cols-2 md:grid-cols-4 gap-3 text-sm">
      <a href="#valuation" class="flex items-center gap-2 p-2 rounded-lg hover:bg-white dark:hover:bg-slate-700 transition-colors">📊 Valuation</a>
      <a href="#volatility" class="flex items-center gap-2 p-2 rounded-lg hover:bg-white dark:hover:bg-slate-700 transition-colors">📉 Volatility</a>
      <a href="#security" class="flex items-center gap-2 p-2 rounded-lg hover:bg-white dark:hover:bg-slate-700 transition-colors">🔐 Security</a>
      <a href="#regulation" class="flex items-center gap-2 p-2 rounded-lg hover:bg-white dark:hover:bg-slate-700 transition-colors">⚖️ Regulation</a>
    </div>
  </nav>

  <!-- Reason 1: Impossible to Value -->
  <section id="valuation">
    <h3 class="flex items-center gap-3 text-2xl font-bold text-slate-900 dark:text-white mb-6">
      <span class="text-3xl">1️⃣</span> It's Impossible to Value
    </h3>
    
    <div class="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
      <div class="bg-red-50 dark:bg-red-900/20 p-4 rounded-xl text-center">
        <div class="text-2xl mb-2">❌</div>
        <div class="text-sm font-medium">No Cash Flow</div>
      </div>
      <div class="bg-red-50 dark:bg-red-900/20 p-4 rounded-xl text-center">
        <div class="text-2xl mb-2">❌</div>
        <div class="text-sm font-medium">No Earnings</div>
      </div>
      <div class="bg-red-50 dark:bg-red-900/20 p-4 rounded-xl text-center">
        <div class="text-2xl mb-2">❌</div>
        <div class="text-sm font-medium">No Balance Sheet</div>
      </div>
      <div class="bg-red-50 dark:bg-red-900/20 p-4 rounded-xl text-center">
        <div class="text-2xl mb-2">❌</div>
        <div class="text-sm font-medium">No Dividend</div>
      </div>
    </div>

    <div class="bg-slate-100 dark:bg-slate-800 p-6 rounded-2xl">
      <p class="text-slate-700 dark:text-slate-300">
        When something moves <strong>20-30% in a single day</strong>, that's not price discovery. That's instability. You're not investing — you're placing a bet on <em>crowd psychology</em>.
      </p>
    </div>
  </section>

  <!-- Reason 2: No Safety Net -->
  <section>
    <h3 class="flex items-center gap-3 text-2xl font-bold text-slate-900 dark:text-white mb-6">
      <span class="text-3xl">2️⃣</span> No Safety Net
    </h3>
    
    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div class="bg-green-50 dark:bg-green-900/20 p-5 rounded-2xl">
        <h4 class="font-bold mb-2 text-green-700 dark:text-green-400">🏦 Traditional Finance</h4>
        <ul class="text-sm space-y-1 text-slate-600 dark:text-slate-400">
          <li>✓ Bank makes a mistake → You can appeal</li>
          <li>✓ Broker errs → Legal recourse</li>
          <li>✓ Fraud → Insurance protection</li>
        </ul>
      </div>
      <div class="bg-red-50 dark:bg-red-900/20 p-5 rounded-2xl">
        <h4 class="font-bold mb-2 text-red-700 dark:text-red-400">₿ Bitcoin</h4>
        <ul class="text-sm space-y-1 text-slate-600 dark:text-slate-400">
          <li>✗ Wrong address → Money GONE forever</li>
          <li>✗ Got hacked → No helpline</li>
          <li>✗ Lost keys → No reversal possible</li>
        </ul>
      </div>
    </div>
    
    <div class="mt-4 p-4 bg-amber-100 dark:bg-amber-900/30 rounded-xl text-amber-800 dark:text-amber-300 text-center">
      That's not "financial freedom." That's <strong>extreme personal liability</strong>.
    </div>
  </section>

  <!-- Reason 3: The Volatility -->
  <section id="volatility" class="bg-gradient-to-br from-red-50 to-orange-50 dark:from-red-900/10 dark:to-orange-900/10 p-8 rounded-3xl border border-red-200 dark:border-red-900/30">
    <h3 class="flex items-center gap-3 text-2xl font-bold text-red-700 dark:text-red-400 mb-6">
      <span class="text-3xl">3️⃣</span> The Volatility Nobody Talks About
    </h3>
    
    <p class="text-lg mb-6 text-slate-700 dark:text-slate-300">
      People love showing <em>long-term charts</em>. But they forget to tell you what it <strong>feels</strong> like to live inside those charts.
    </p>

    <div class="grid grid-cols-3 gap-4 mb-6">
      <div class="bg-white dark:bg-slate-900 p-4 rounded-xl text-center">
        <div class="text-3xl font-bold text-red-600">-50%</div>
        <div class="text-xs text-slate-500">Multiple times</div>
      </div>
      <div class="bg-white dark:bg-slate-900 p-4 rounded-xl text-center">
        <div class="text-3xl font-bold text-red-600">-60%</div>
        <div class="text-xs text-slate-500">Multiple times</div>
      </div>
      <div class="bg-white dark:bg-slate-900 p-4 rounded-xl text-center">
        <div class="text-3xl font-bold text-red-600">-80%</div>
        <div class="text-xs text-slate-500">Multiple times</div>
      </div>
    </div>

    <div class="bg-white dark:bg-slate-900 p-5 rounded-xl border-l-4 border-red-500">
      <p class="font-medium text-slate-800 dark:text-slate-200">
        Most people do NOT have the psychological strength to sit through this without panicking. They sell at the bottom. Buy back higher. Repeat until they convince themselves Bitcoin is a "scam" — when in reality, they were simply <strong>unprepared</strong>.
      </p>
    </div>
  </section>

  <!-- Reason 4: Regulation & Legality -->
  <section id="regulation">
    <h3 class="flex items-center gap-3 text-2xl font-bold text-slate-900 dark:text-white mb-6">
      <span class="text-3xl">4️⃣</span> The Gray Zone of Legality
    </h3>
    
    <div class="bg-slate-100 dark:bg-slate-800 p-6 rounded-2xl mb-4">
      <ul class="space-y-3 text-slate-700 dark:text-slate-300">
        <li class="flex items-start gap-3">
          <span class="text-xl">⚖️</span>
          <span>In many countries (including India historically), Bitcoin exists in a <strong>gray zone</strong></span>
        </li>
        <li class="flex items-start gap-3">
          <span class="text-xl">📜</span>
          <span>Taxation rules <strong>change constantly</strong></span>
        </li>
        <li class="flex items-start gap-3">
          <span class="text-xl">🏛️</span>
          <span>Governments don't like losing control over monetary systems</span>
        </li>
      </ul>
    </div>
    
    <div class="p-4 bg-amber-100 dark:bg-amber-900/30 rounded-xl text-amber-800 dark:text-amber-300">
      <strong>Policy risk is REAL.</strong> Even if Bitcoin survives long-term, the path there is NOT smooth. Ignoring this is reckless.
    </div>
  </section>

  <!-- Reason 5: Security -->
  <section id="security">
    <h3 class="flex items-center gap-3 text-2xl font-bold text-slate-900 dark:text-white mb-6">
      <span class="text-3xl">5️⃣</span> The Security Problem Nobody Admits
    </h3>
    
    <p class="mb-4 text-slate-600 dark:text-slate-400">Yes, the Bitcoin network itself has proven resilient. But <strong>humans are the weakest link</strong>.</p>

    <div class="grid grid-cols-2 md:grid-cols-4 gap-3 mb-4">
      <div class="bg-red-50 dark:bg-red-900/20 p-3 rounded-lg text-center text-sm">
        <div class="text-xl mb-1">🏦</div>
        Exchanges get hacked
      </div>
      <div class="bg-red-50 dark:bg-red-900/20 p-3 rounded-lg text-center text-sm">
        <div class="text-xl mb-1">📱</div>
        Wallets get compromised
      </div>
      <div class="bg-red-50 dark:bg-red-900/20 p-3 rounded-lg text-center text-sm">
        <div class="text-xl mb-1">🎣</div>
        Phishing scams everywhere
      </div>
      <div class="bg-red-50 dark:bg-red-900/20 p-3 rounded-lg text-center text-sm">
        <div class="text-xl mb-1">💻</div>
        One compromised device
      </div>
    </div>

    <div class="bg-slate-900 text-white p-4 rounded-xl text-center">
      <p>Traditional finance has <strong>fraud departments</strong>.</p>
      <p>Bitcoin has <strong>personal responsibility</strong>.</p>
    </div>
  </section>

  <!-- Reason 6: Illegal Activity Association -->
  <section>
    <h3 class="flex items-center gap-3 text-2xl font-bold text-slate-900 dark:text-white mb-6">
      <span class="text-3xl">6️⃣</span> The Dark Side Association
    </h3>
    
    <p class="mb-4 text-slate-600 dark:text-slate-400">
      Bitcoin is frequently used in illegal activity — not because it's evil, but because <strong>pseudonymity attracts misuse</strong>.
    </p>

    <div class="flex flex-wrap gap-2 mb-4">
      <span class="px-3 py-1 bg-slate-200 dark:bg-slate-700 rounded-full text-sm">Ransomware demands</span>
      <span class="px-3 py-1 bg-slate-200 dark:bg-slate-700 rounded-full text-sm">Black market transactions</span>
      <span class="px-3 py-1 bg-slate-200 dark:bg-slate-700 rounded-full text-sm">Fraud rings</span>
    </div>

    <p class="text-slate-600 dark:text-slate-400 text-sm">
      Even if you're a legitimate user, this association creates <strong>regulatory pressure</strong> and <strong>reputational risk</strong> that never fully goes away.
    </p>
  </section>

  <!-- Reason 7: Competition -->
  <section>
    <h3 class="flex items-center gap-3 text-2xl font-bold text-slate-900 dark:text-white mb-6">
      <span class="text-3xl">7️⃣</span> First Doesn't Mean Forever
    </h3>
    
    <div class="bg-slate-100 dark:bg-slate-800 p-6 rounded-2xl">
      <p class="mb-4 text-slate-700 dark:text-slate-300">
        Bitcoin was first. That matters. But technology evolves. Other chains are:
      </p>
      <div class="flex flex-wrap gap-3">
        <span class="px-4 py-2 bg-blue-100 dark:bg-blue-900/30 rounded-lg text-blue-800 dark:text-blue-300 font-medium">⚡ Faster</span>
        <span class="px-4 py-2 bg-green-100 dark:bg-green-900/30 rounded-lg text-green-800 dark:text-green-300 font-medium">💰 Cheaper</span>
        <span class="px-4 py-2 bg-purple-100 dark:bg-purple-900/30 rounded-lg text-purple-800 dark:text-purple-300 font-medium">🔧 More Flexible</span>
      </div>
      <p class="mt-4 text-sm text-slate-500">
        Betting everything on one protocol assumes the future freezes in place. <strong>It never does.</strong>
      </p>
    </div>
  </section>

  <!-- Reason 8: No Backing -->
  <section>
    <h3 class="flex items-center gap-3 text-2xl font-bold text-slate-900 dark:text-white mb-6">
      <span class="text-3xl">8️⃣</span> Backed by... Belief
    </h3>
    
    <div class="bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 p-6 rounded-2xl">
      <p class="text-slate-700 dark:text-slate-300 mb-4">
        Bitcoin is not backed by a physical asset. It exists purely as <strong>code and consensus</strong>. Its value depends entirely on <em>collective belief</em>.
      </p>
      <div class="p-4 bg-white dark:bg-slate-900 rounded-xl text-center font-medium">
        If belief cracks, price follows.
      </div>
      <p class="mt-4 text-sm text-slate-500 text-center">
        Some critics compare it to a Ponzi scheme — not because it technically is one, but because price appreciation depends on <strong>new buyers entering</strong>.
      </p>
    </div>
  </section>

  <!-- The Brutal Joke Reason -->
  <section class="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/10 dark:to-indigo-900/10 p-8 rounded-3xl border border-blue-200 dark:border-blue-900/30">
    <h3 class="flex items-center gap-3 text-2xl font-bold text-blue-700 dark:text-blue-400 mb-6">
      <span class="text-3xl">😏</span> The Brutal Joke Reason
    </h3>
    
    <div class="bg-white dark:bg-slate-900 p-6 rounded-2xl text-center">
      <p class="text-lg font-medium text-slate-800 dark:text-slate-200 mb-4">
        "If you buy Bitcoin, there's less for the rest of us."
      </p>
      <p class="text-slate-600 dark:text-slate-400">
        Please don't buy it. The price always drops when you do. That's how it feels, at least. 😅
      </p>
    </div>
  </section>

  <!-- The Surprising Conclusion -->
  <section>
    <h3 class="flex items-center gap-3 text-2xl font-bold text-slate-900 dark:text-white mb-6">
      <span class="text-3xl">💡</span> The Surprising Conclusion
    </h3>
    
    <div class="bg-gradient-to-r from-emerald-50 to-teal-50 dark:from-emerald-900/20 dark:to-teal-900/20 p-6 rounded-2xl border-2 border-emerald-400 mb-6">
      <p class="text-lg font-medium text-emerald-800 dark:text-emerald-300">
        As someone with a <strong>significant portion of net worth tied to Bitcoin</strong>, I still believe most people should NOT buy it.
      </p>
    </div>

    <div class="space-y-4">
      <div class="bg-slate-100 dark:bg-slate-800 p-4 rounded-xl">
        <p class="text-slate-700 dark:text-slate-300">
          <strong>Bitcoin is not static.</strong> It relies on developers, miners, node operators, governance debates, upgrades, forks, and constant internal conflict.
        </p>
      </div>
      <div class="bg-slate-100 dark:bg-slate-800 p-4 rounded-xl">
        <p class="text-slate-700 dark:text-slate-300">
          <strong>Bitcoin doesn't reward belief.</strong> It rewards understanding.
        </p>
      </div>
      <div class="bg-red-100 dark:bg-red-900/30 p-4 rounded-xl text-red-800 dark:text-red-300">
        <p class="font-medium">
          If you don't understand why you're buying it, if you can't explain the risks better than the upside, if you're buying because of price predictions and social pressure — <strong>Bitcoin will punish you</strong>.
        </p>
      </div>
    </div>
  </section>

  <!-- Final Quote -->
  <div class="my-8 text-center p-10 bg-gradient-to-br from-orange-900 to-slate-900 rounded-3xl text-white">
    <p class="text-2xl font-serif italic mb-4">"Sometimes the smartest financial decision is not buying the thing everyone is screaming about, but understanding why they're screaming in the first place."</p>
    <p class="text-orange-300 text-sm uppercase tracking-widest mb-6">— The Part Most People Skip</p>
    <div class="p-4 bg-white/10 rounded-xl max-w-2xl mx-auto">
      <p class="text-lg">And that's usually where the money is <strong>actually lost</strong>.</p>
    </div>
  </div>

</div>
`;
