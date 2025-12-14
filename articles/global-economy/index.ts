import { Article } from '../../types';

export const aiCommoditiesArticle: Article = {
  id: 'ai-models-are-commodities-benedict-evans',
  title: "Beyond the Hype: Benedict Evans on Why AI Models Are Commodities",
  excerpt: "The real value won't be in the model itself. It will be in the software and networks built on top of it. Here's why the current AI boom follows a familiar pattern.",
  readTime: '14 min read',
  imageUrl: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&auto=format&fit=crop&q=80',
  date: '2025-12-14',
  tags: ['AI', 'technology', 'economics', 'investing', 'future'],
  content: `
    <div class="mb-8 p-6 bg-gradient-to-br from-slate-100 via-blue-50 to-slate-100 dark:from-slate-800/80 dark:via-blue-900/30 dark:to-slate-800/80 rounded-xl border border-slate-200/50 dark:border-blue-500/30 shadow-lg dark:shadow-xl">
      <p class="text-xl text-slate-700 dark:text-slate-200 leading-relaxed italic font-serif">
        "AI is whatever machines can't do yet... once you've automated it, you forget that anything was ever any different."
      </p>
      <p class="text-sm text-slate-500 dark:text-slate-400 mt-3">— Benedict Evans</p>
    </div>

    <h2 class="text-2xl font-serif font-bold mb-6 mt-10 text-slate-900 dark:text-white">1. The Hook: The Rhythm of History</h2>
    
    <h3 class="text-xl font-serif font-bold mb-4 mt-8 text-slate-900 dark:text-white">The Context</h3>
    <p class="mb-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      The current AI boom isn't a unique anomaly. It's the <strong>latest chapter in a predictable cycle</strong> of platform shifts that have reshaped technology every decade:
    </p>
    
    <div class="flex flex-wrap items-center justify-center gap-3 mb-8 p-4 bg-slate-50 dark:bg-slate-800/50 rounded-lg">
      <span class="px-4 py-2 bg-slate-200 dark:bg-slate-700 rounded-full text-sm font-medium">Mainframe</span>
      <span class="text-gold-500 text-xl">→</span>
      <span class="px-4 py-2 bg-slate-200 dark:bg-slate-700 rounded-full text-sm font-medium">PC</span>
      <span class="text-gold-500 text-xl">→</span>
      <span class="px-4 py-2 bg-slate-200 dark:bg-slate-700 rounded-full text-sm font-medium">Web</span>
      <span class="text-gold-500 text-xl">→</span>
      <span class="px-4 py-2 bg-slate-200 dark:bg-slate-700 rounded-full text-sm font-medium">Mobile</span>
      <span class="text-gold-500 text-xl">→</span>
      <span class="px-4 py-2 bg-gold-500 text-white rounded-full text-sm font-bold">AI</span>
    </div>

    <h3 class="text-xl font-serif font-bold mb-4 mt-8 text-slate-900 dark:text-white">The Pattern</h3>
    <p class="mb-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      Every shift creates new gatekeepers and <strong>destroys old ones</strong>. Microsoft missed mobile. Nokia missed the smartphone. We are in the chaos phase where old gatekeepers fall away and new empires emerge.
    </p>

    <h3 class="text-xl font-serif font-bold mb-4 mt-8 text-slate-900 dark:text-white">The Uncertainty</h3>
    <div class="p-5 bg-gradient-to-br from-amber-50 via-yellow-50 to-amber-50 dark:from-amber-900/20 dark:via-yellow-900/15 dark:to-amber-900/20 rounded-lg border-l-4 border-amber-500 dark:border-amber-400/50 mb-8">
      <p class="text-slate-700 dark:text-slate-300 leading-relaxed">
        Unlike 5G or mobile (where we knew the physical limits), <strong>we don't know the ceiling of AI</strong>. We are currently operating on "vibes-based forecasting."
      </p>
      <p class="text-sm text-slate-600 dark:text-slate-400 mt-3 italic">
        "People draw straight lines on log scale charts and say... you just don't understand how exponential growth works. The problem is they're always right. It always is different."
      </p>
    </div>

    <h2 class="text-2xl font-serif font-bold mb-6 mt-12 text-slate-900 dark:text-white">2. Follow the Money: The "Circular Revenue" Problem</h2>

    <h3 class="text-xl font-serif font-bold mb-4 mt-8 text-slate-900 dark:text-white">The Spending Spree</h3>
    <p class="mb-4 text-slate-700 dark:text-slate-300 leading-relaxed">
      The industry is driven by one fear:
    </p>
    <div class="p-5 bg-gradient-to-br from-red-50 via-rose-50 to-red-50 dark:from-red-900/20 dark:via-rose-900/15 dark:to-red-900/20 rounded-lg border-l-4 border-red-500 dark:border-red-400/50 mb-6">
      <p class="text-lg font-semibold text-slate-900 dark:text-white">
        "The risk of underinvesting is bigger than the risk of overinvesting."
      </p>
    </div>
    
    <div class="grid md:grid-cols-2 gap-4 mb-8">
      <div class="p-5 bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20 rounded-lg border border-blue-200 dark:border-blue-700 text-center">
        <p class="text-4xl font-bold text-blue-600 dark:text-blue-400 mb-2">~$400B</p>
        <p class="text-sm text-slate-600 dark:text-slate-400">Infrastructure spend by Big Four this year</p>
      </div>
      <div class="p-5 bg-gradient-to-br from-green-50 to-green-100 dark:from-green-900/20 dark:to-green-800/20 rounded-lg border border-green-200 dark:border-green-700 text-center">
        <p class="text-4xl font-bold text-green-600 dark:text-green-400 mb-2">$40-50B</p>
        <p class="text-sm text-slate-600 dark:text-slate-400">Nvidia revenue per quarter</p>
      </div>
    </div>

    <h3 class="text-xl font-serif font-bold mb-4 mt-8 text-slate-900 dark:text-white">The New Bottleneck</h3>
    <p class="mb-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      It used to be chips. Now it's <strong>electricity</strong>. Power availability is the new constraint.
    </p>
    <div class="p-5 bg-gradient-to-br from-orange-50 via-amber-50 to-orange-50 dark:from-orange-900/20 dark:via-amber-900/15 dark:to-orange-900/20 rounded-lg border-l-4 border-orange-500 dark:border-orange-400/50 mb-8">
      <p class="text-slate-700 dark:text-slate-300 italic">
        "Getting access to electricity is actually a bigger problem than getting chips from Nvidia."
      </p>
    </div>

    <h3 class="text-xl font-serif font-bold mb-4 mt-8 text-slate-900 dark:text-white">The "Circular" Economy</h3>
    <p class="mb-4 text-slate-700 dark:text-slate-300 leading-relaxed">
      This is the crucial insight. Much of the AI revenue is <strong>artificial—a closed loop</strong> fueled by cash reserves, not end-user profit:
    </p>
    
    <div class="p-6 bg-gradient-to-br from-purple-50 via-indigo-50 to-purple-50 dark:from-purple-900/20 dark:via-indigo-900/15 dark:to-purple-900/20 rounded-xl border border-purple-200 dark:border-purple-700 mb-8">
      <div class="flex flex-col md:flex-row items-center justify-center gap-4 text-center">
        <div class="p-3 bg-white dark:bg-slate-800 rounded-lg shadow">
          <p class="font-bold text-purple-700 dark:text-purple-300">Hyperscalers</p>
          <p class="text-xs text-slate-500">(Google/Microsoft)</p>
        </div>
        <span class="text-2xl text-purple-500">💰→</span>
        <div class="p-3 bg-white dark:bg-slate-800 rounded-lg shadow">
          <p class="font-bold text-green-700 dark:text-green-300">Nvidia</p>
          <p class="text-xs text-slate-500">(Chips)</p>
        </div>
        <span class="text-2xl text-green-500">💰→</span>
        <div class="p-3 bg-white dark:bg-slate-800 rounded-lg shadow">
          <p class="font-bold text-blue-700 dark:text-blue-300">AI Startups</p>
          <p class="text-xs text-slate-500">(OpenAI, etc.)</p>
        </div>
        <span class="text-2xl text-blue-500">💰→</span>
        <div class="p-3 bg-white dark:bg-slate-800 rounded-lg shadow">
          <p class="font-bold text-purple-700 dark:text-purple-300">Back to Hyperscalers</p>
          <p class="text-xs text-slate-500">(Cloud Credits)</p>
        </div>
      </div>
      <p class="text-center text-sm text-slate-600 dark:text-slate-400 mt-4 italic">
        "This is what I mean by 'circular revenue'... hyperscalers give lots of money to Nvidia, Nvidia gives it to OpenAI, and OpenAI uses it to buy chips."
      </p>
    </div>

    <h2 class="text-2xl font-serif font-bold mb-6 mt-12 text-slate-900 dark:text-white">3. The Product Gap: Models Are Commodities</h2>

    <h3 class="text-xl font-serif font-bold mb-4 mt-8 text-slate-900 dark:text-white">No Moats</h3>
    <p class="mb-4 text-slate-700 dark:text-slate-300 leading-relaxed">
      There is no "best" model anymore. The top models are all within <strong>5-10% performance of each other</strong>. They are converging, not diverging.
    </p>
    <div class="p-5 bg-gradient-to-br from-slate-100 via-gray-100 to-slate-100 dark:from-slate-800 dark:via-gray-800 dark:to-slate-800 rounded-lg border border-slate-200 dark:border-slate-600 mb-8">
      <p class="text-center text-lg font-semibold text-slate-900 dark:text-white mb-2">
        🎯 Intelligence is becoming a commodity.
      </p>
      <p class="text-center text-sm text-slate-600 dark:text-slate-400">
        Model benchmarks show convergence, not differentiation.
      </p>
    </div>

    <h3 class="text-xl font-serif font-bold mb-4 mt-8 text-slate-900 dark:text-white">The Usage Reality Check</h3>
    <p class="mb-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      Despite huge user numbers (e.g., 800M users), <strong>engagement is shallow</strong>. Most people use AI "once a week or once a month." We haven't figured out the "product-market fit" for daily life yet.
    </p>

    <h3 class="text-xl font-serif font-bold mb-4 mt-8 text-slate-900 dark:text-white">The Real Value Proposition</h3>
    <div class="p-5 bg-gradient-to-br from-green-50 via-emerald-50 to-green-50 dark:from-green-900/20 dark:via-emerald-900/15 dark:to-green-900/20 rounded-lg border-l-4 border-green-600 dark:border-green-400/50 mb-8">
      <p class="font-semibold text-slate-900 dark:text-white mb-2">💡 The Investment Thesis</p>
      <p class="text-slate-700 dark:text-slate-300">
        The value won't be in the model itself (which is expensive and undifferentiated), but in the <strong>software and networks built on top of it</strong>.
      </p>
    </div>

    <h2 class="text-2xl font-serif font-bold mb-6 mt-12 text-slate-900 dark:text-white">4. The Future: Absorption vs. Disruption</h2>

    <div class="grid md:grid-cols-2 gap-6 mb-8">
      <div class="p-5 bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20 rounded-lg border border-blue-200 dark:border-blue-700">
        <p class="font-bold text-blue-800 dark:text-blue-300 mb-3 text-lg">Phase 1: Absorption (Now)</p>
        <p class="text-slate-700 dark:text-slate-300 mb-4">
          We are currently just <strong>making existing things faster</strong>. This is efficiency, not revolution.
        </p>
        <ul class="text-sm text-slate-600 dark:text-slate-400 space-y-2">
          <li>✓ Coding assistance</li>
          <li>✓ Email drafting</li>
          <li>✓ Customer support automation</li>
          <li>✓ Document summarization</li>
        </ul>
      </div>
      <div class="p-5 bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-900/20 dark:to-purple-800/20 rounded-lg border border-purple-200 dark:border-purple-700">
        <p class="font-bold text-purple-800 dark:text-purple-300 mb-3 text-lg">Phase 2: Disruption (Next)</p>
        <p class="text-slate-700 dark:text-slate-300 mb-4">
          The real change comes when we do things that were <strong>previously impossible</strong>.
        </p>
        <ul class="text-sm text-slate-600 dark:text-slate-400 space-y-2">
          <li>🚀 New business models</li>
          <li>🚀 Agentic commerce</li>
          <li>🚀 Autonomous decision-making</li>
          <li>🚀 Creative breakthroughs</li>
        </ul>
      </div>
    </div>

    <h3 class="text-xl font-serif font-bold mb-4 mt-8 text-slate-900 dark:text-white">The "Infinite Interns" Question</h3>
    <div class="p-5 bg-gradient-to-br from-amber-50 via-yellow-50 to-amber-50 dark:from-amber-900/20 dark:via-yellow-900/15 dark:to-amber-900/20 rounded-lg border-l-4 border-amber-500 dark:border-amber-400/50 mb-8">
      <p class="text-lg font-semibold text-slate-900 dark:text-white mb-3">
        🤔 If AI gives you 1,000 free interns...
      </p>
      <p class="text-slate-700 dark:text-slate-300">
        Do you just do the <strong>same work cheaper</strong>? Or do you <strong>fundamentally change</strong> what your company does?
      </p>
    </div>

    <h3 class="text-xl font-serif font-bold mb-4 mt-8 text-slate-900 dark:text-white">Agentic Commerce: The Death of "Search and Scroll"</h3>
    <p class="mb-4 text-slate-700 dark:text-slate-300 leading-relaxed">
      This is where it gets interesting. Instead of <em>browsing Amazon for a shirt</em>, you ask an AI:
    </p>
    <div class="p-5 bg-gradient-to-br from-indigo-50 via-purple-50 to-indigo-50 dark:from-indigo-900/20 dark:via-purple-900/15 dark:to-indigo-900/20 rounded-lg border border-indigo-200 dark:border-indigo-700 mb-6">
      <p class="text-center text-lg font-medium text-indigo-800 dark:text-indigo-300">
        "What should I buy?"
      </p>
    </div>
    <p class="mb-8 text-slate-700 dark:text-slate-300 leading-relaxed">
      This threatens the entire <strong>$1 trillion ad industry</strong> and the concept of a "storefront." The implications are staggering.
    </p>

    <h2 class="text-2xl font-serif font-bold mb-6 mt-12 text-slate-900 dark:text-white">5. Conclusion: The Invisible Elevator</h2>

    <h3 class="text-xl font-serif font-bold mb-4 mt-8 text-slate-900 dark:text-white">The Analogy</h3>
    <p class="mb-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      Elevators used to have <strong>human operators</strong>. Then we automated them. Now, we don't look at an elevator and say, "Wow, a robot!" We just get in.
    </p>

    <h3 class="text-xl font-serif font-bold mb-4 mt-8 text-slate-900 dark:text-white">The Prediction</h3>
    <div class="p-6 bg-gradient-to-br from-slate-900 via-gray-900 to-slate-900 rounded-xl border border-slate-700 mb-8">
      <p class="text-lg text-slate-200 leading-relaxed text-center">
        AI is currently defined as <em>"whatever machines can't do yet."</em>
        <br/><br/>
        As soon as it works perfectly, we will <strong>stop calling it AI</strong> and just call it <span class="text-gold-400">software</span>.
      </p>
    </div>

    <div class="p-6 bg-gradient-to-br from-amber-50 via-yellow-50 to-orange-50 dark:from-amber-900/30 dark:via-yellow-900/20 dark:to-orange-900/30 rounded-xl border-2 border-amber-300 dark:border-amber-600/50 shadow-lg dark:shadow-xl mb-8">
      <p class="text-center text-lg font-serif text-slate-800 dark:text-slate-200 leading-relaxed">
        <strong>The goal is for AI to become as boring and invisible as an elevator button.</strong>
      </p>
    </div>

    <h3 class="text-xl font-serif font-bold mb-4 mt-10 text-slate-900 dark:text-white">📊 Key Data Points to Remember</h3>
    <div class="overflow-x-auto mb-8">
      <table class="w-full text-sm border-collapse">
        <tbody>
          <tr><td class="font-semibold py-3">Infrastructure Spend</td><td>~$400 Billion by the big four platform companies this year</td></tr>
          <tr><td class="font-semibold py-3">Nvidia Revenue</td><td>Running at ~$40–50 Billion per quarter</td></tr>
          <tr><td class="font-semibold py-3">Model Convergence</td><td>Top models are within 5–10% of each other on benchmarks</td></tr>
          <tr><td class="font-semibold py-3">Historical Context</td><td>Online dating is now 60% of new relationships (showing how "weird" tech becomes normal)</td></tr>
        </tbody>
      </table>
    </div>

    <h3 class="text-xl font-serif font-bold mb-4 mt-10 text-slate-900 dark:text-white">🎯 Key Takeaways for Investors</h3>
    <ul class="mb-8 space-y-3">
      <li class="flex items-start gap-3 text-slate-700 dark:text-slate-300">
        <span class="text-lg">1️⃣</span>
        <span><strong>Models are commoditizing</strong> — The moat isn't in the model, it's in the application layer</span>
      </li>
      <li class="flex items-start gap-3 text-slate-700 dark:text-slate-300">
        <span class="text-lg">2️⃣</span>
        <span><strong>Watch the circular economy</strong> — Much of current AI revenue is hyperscalers paying each other</span>
      </li>
      <li class="flex items-start gap-3 text-slate-700 dark:text-slate-300">
        <span class="text-lg">3️⃣</span>
        <span><strong>Power is the new chip</strong> — Electricity availability is the emerging bottleneck</span>
      </li>
      <li class="flex items-start gap-3 text-slate-700 dark:text-slate-300">
        <span class="text-lg">4️⃣</span>
        <span><strong>Phase 2 hasn't started</strong> — We're still in absorption mode, not true disruption</span>
      </li>
      <li class="flex items-start gap-3 text-slate-700 dark:text-slate-300">
        <span class="text-lg">5️⃣</span>
        <span><strong>The ad industry is vulnerable</strong> — Agentic commerce could rewrite the rules</span>
      </li>
    </ul>

    <p class="text-xs text-slate-500 dark:text-slate-400 mt-8 pt-4 border-t border-slate-200 dark:border-slate-700">
      <strong>Source:</strong> Analysis based on Benedict Evans' insights | For educational and analytical purposes only | Views expressed are for discussion and do not constitute investment advice.
    </p>
  `,
};

export const globalEconomyArticles: Article[] = [
  aiCommoditiesArticle,
];
