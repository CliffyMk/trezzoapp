import { Article } from '../../types';

export const fiveEmaStrategyArticle: Article = {
  id: 'complete-5-ema-trading-system',
  title: "The Complete 5 EMA Trading System: From Core Mechanics to Advanced Intraday Execution",
  excerpt: "Master the probability-based Mean Reversion strategy. Learn the exact setup, the morning gap-fade routine, and the basket approach for consistent profits.",
  readTime: '18 min read',
  imageUrl: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&auto=format&fit=crop&q=80',
  date: '2025-12-14',
  tags: ['trading', 'strategy', '5-ema', 'intraday', 'mean-reversion'],
  content: `
    <div class="mb-8 p-6 bg-gradient-to-br from-indigo-50 via-purple-50 to-indigo-50 dark:from-slate-800/80 dark:via-indigo-900/30 dark:to-slate-800/80 rounded-xl border border-indigo-200/50 dark:border-indigo-500/30 shadow-lg dark:shadow-xl">
      <p class="text-sm uppercase tracking-widest text-indigo-600 dark:text-indigo-400 font-semibold mb-2">Abstract</p>
      <p class="text-lg text-slate-700 dark:text-slate-200 leading-relaxed">
        In the realm of algorithmic and discretionary trading, the search for a "perfect" system often leads to complexity. However, <strong>Subhashish (Power of Stocks)</strong> advocates for a probability-based approach rooted in <em>Mean Reversion</em>. This article consolidates his entire 5 EMA framework, combining the standard "Modified" setup with his advanced "Morning Routine" for trading FNO (Futures & Options) stocks.
      </p>
    </div>

    <h2 class="text-2xl font-serif font-bold mb-6 mt-10 text-slate-900 dark:text-white flex items-center gap-3">
      <span class="flex items-center justify-center w-10 h-10 bg-indigo-100 dark:bg-indigo-900/40 rounded-full text-indigo-600 dark:text-indigo-400 text-lg font-bold">1</span>
      The Core Philosophy & Configuration
    </h2>

    <h3 class="text-xl font-serif font-bold mb-4 mt-8 text-slate-900 dark:text-white">The Theory: Mean Reversion</h3>
    <p class="mb-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      The 5 EMA strategy operates on the <strong>law of averages</strong>. Price cannot indefinitely stay away from its average. When the price stretches too far from the 5 Exponential Moving Average (EMA), it is considered <em>"overextended"</em>, making a snap-back (reversion) to the mean highly probable.
    </p>

    <div class="p-5 bg-gradient-to-br from-amber-50 via-yellow-50 to-amber-50 dark:from-amber-900/20 dark:via-yellow-900/15 dark:to-amber-900/20 rounded-lg border-l-4 border-amber-500 dark:border-amber-400/50 mb-8">
      <p class="font-semibold text-slate-900 dark:text-white mb-2">💡 Key Insight</p>
      <p class="text-slate-700 dark:text-slate-300">
        Unlike crossover strategies (e.g., Golden Cross), this system <strong>hunts for separation</strong>. We're looking for candles that have completely detached from the EMA—this signals exhaustion.
      </p>
    </div>

    <h3 class="text-xl font-serif font-bold mb-4 mt-8 text-slate-900 dark:text-white">TradingView Setup</h3>
    <div class="overflow-x-auto mb-8">
      <table class="w-full text-sm border-collapse">
        <thead>
          <tr class="bg-slate-100 dark:bg-slate-800">
            <th class="text-left py-3 px-4 font-semibold">Parameter</th>
            <th class="text-left py-3 px-4 font-semibold">Setting</th>
          </tr>
        </thead>
        <tbody>
          <tr><td class="py-3 px-4 font-medium">Indicator</td><td class="py-3 px-4">Moving Average Exponential (EMA)</td></tr>
          <tr><td class="py-3 px-4 font-medium">Length</td><td class="py-3 px-4 text-lg font-bold text-indigo-600 dark:text-indigo-400">5</td></tr>
          <tr><td class="py-3 px-4 font-medium">Source</td><td class="py-3 px-4">Close</td></tr>
        </tbody>
      </table>
    </div>

    <div class="grid md:grid-cols-2 gap-4 mb-8">
      <div class="p-5 bg-gradient-to-br from-red-50 to-red-100 dark:from-red-900/20 dark:to-red-800/20 rounded-lg border border-red-200 dark:border-red-700 text-center">
        <p class="text-3xl mb-2">📉</p>
        <p class="font-bold text-red-800 dark:text-red-300 text-lg mb-1">5-Minute Chart</p>
        <p class="text-sm text-slate-600 dark:text-slate-400">Strictly for <strong>SELLING</strong> (Short)</p>
      </div>
      <div class="p-5 bg-gradient-to-br from-green-50 to-green-100 dark:from-green-900/20 dark:to-green-800/20 rounded-lg border border-green-200 dark:border-green-700 text-center">
        <p class="text-3xl mb-2">📈</p>
        <p class="font-bold text-green-800 dark:text-green-300 text-lg mb-1">15-Minute Chart</p>
        <p class="text-sm text-slate-600 dark:text-slate-400">Strictly for <strong>BUYING</strong> (Long)</p>
      </div>
    </div>

    <h2 class="text-2xl font-serif font-bold mb-6 mt-12 text-slate-900 dark:text-white flex items-center gap-3">
      <span class="flex items-center justify-center w-10 h-10 bg-indigo-100 dark:bg-indigo-900/40 rounded-full text-indigo-600 dark:text-indigo-400 text-lg font-bold">2</span>
      The Execution Protocols
    </h2>

    <h3 class="text-xl font-serif font-bold mb-4 mt-8 text-slate-900 dark:text-white">🔴 A. The Short Setup (Standard)</h3>
    
    <div class="p-6 bg-gradient-to-br from-red-50 via-rose-50 to-red-50 dark:from-red-900/20 dark:via-rose-900/15 dark:to-red-900/20 rounded-xl border border-red-200 dark:border-red-700 mb-6">
      <p class="text-sm text-red-600 dark:text-red-400 font-semibold mb-3">CONTEXT: Catching a top in an uptrend or a gap-up</p>
      <p class="text-sm text-slate-600 dark:text-slate-400 mb-4">⏱️ Timeframe: <strong>5-Minute Chart</strong></p>
      
      <div class="space-y-4">
        <div class="p-4 bg-white dark:bg-slate-800 rounded-lg">
          <p class="font-bold text-slate-900 dark:text-white mb-2">1️⃣ The "Alert Candle"</p>
          <p class="text-sm text-slate-700 dark:text-slate-300">
            A candle whose <strong>High, Low, and Body do NOT touch</strong> the 5 EMA line. It must be floating <em>entirely above</em> the line.
          </p>
        </div>
        
        <div class="p-4 bg-white dark:bg-slate-800 rounded-lg">
          <p class="font-bold text-slate-900 dark:text-white mb-2">2️⃣ Trigger</p>
          <p class="text-sm text-slate-700 dark:text-slate-300">
            Mark the <strong>Low of the Alert Candle</strong>. Enter Short when the next candle <strong>breaks this Low</strong>.
          </p>
        </div>
        
        <div class="p-4 bg-white dark:bg-slate-800 rounded-lg">
          <p class="font-bold text-slate-900 dark:text-white mb-2">3️⃣ Stop Loss (SL)</p>
          <p class="text-sm text-slate-700 dark:text-slate-300">
            The <strong>High of the Alert Candle</strong>.
          </p>
        </div>
        
        <div class="p-4 bg-white dark:bg-slate-800 rounded-lg">
          <p class="font-bold text-slate-900 dark:text-white mb-2">4️⃣ Target</p>
          <p class="text-sm text-slate-700 dark:text-slate-300">
            Minimum <strong>1:3 Risk-to-Reward (RR)</strong>.
          </p>
        </div>
      </div>
    </div>

    <!-- Visual Chart: Short Setup (5-minute) -->
    <div class="my-8 rounded-xl overflow-hidden border border-red-200 dark:border-red-700 shadow-lg">
      <div class="bg-red-100 dark:bg-red-900/30 px-4 py-2">
        <p class="text-center text-sm font-bold text-red-700 dark:text-red-300">📉 5-MINUTE SHORT SETUP — Live Chart Example</p>
      </div>
      <img src="/images/investing-basics/5min-5ema.png" alt="5 EMA Short Setup on 5-minute chart showing Alert Candle floating above the EMA line" class="w-full" />
      <div class="bg-slate-100 dark:bg-slate-800 px-4 py-3">
        <p class="text-xs text-slate-600 dark:text-slate-400 text-center">
          Notice how the Alert Candle is <strong>completely detached</strong> from the 5 EMA (blue line). Entry triggered on break of Alert Candle's Low.
        </p>
      </div>
    </div>

    <h3 class="text-xl font-serif font-bold mb-4 mt-8 text-slate-900 dark:text-white">🟢 B. The Long Setup (Standard)</h3>
    
    <div class="p-6 bg-gradient-to-br from-green-50 via-emerald-50 to-green-50 dark:from-green-900/20 dark:via-emerald-900/15 dark:to-green-900/20 rounded-xl border border-green-200 dark:border-green-700 mb-6">
      <p class="text-sm text-green-600 dark:text-green-400 font-semibold mb-3">CONTEXT: Catching a bottom in a downtrend</p>
      <p class="text-sm text-slate-600 dark:text-slate-400 mb-4">⏱️ Timeframe: <strong>15-Minute Chart</strong></p>
      
      <div class="space-y-4">
        <div class="p-4 bg-white dark:bg-slate-800 rounded-lg">
          <p class="font-bold text-slate-900 dark:text-white mb-2">1️⃣ The "Alert Candle"</p>
          <p class="text-sm text-slate-700 dark:text-slate-300">
            A candle floating <strong>completely below</strong> the 5 EMA line.
          </p>
        </div>
        
        <div class="p-4 bg-white dark:bg-slate-800 rounded-lg">
          <p class="font-bold text-slate-900 dark:text-white mb-2">2️⃣ Trigger</p>
          <p class="text-sm text-slate-700 dark:text-slate-300">
            Mark the <strong>High of the Alert Candle</strong>. Buy when the next candle <strong>breaks this High</strong>.
          </p>
        </div>
        
        <div class="p-4 bg-white dark:bg-slate-800 rounded-lg">
          <p class="font-bold text-slate-900 dark:text-white mb-2">3️⃣ Stop Loss (SL)</p>
          <p class="text-sm text-slate-700 dark:text-slate-300">
            The <strong>Low of the Alert Candle</strong>.
          </p>
        </div>
      </div>
    </div>

    <!-- Visual Chart: Long Setup (15-minute) -->
    <div class="my-8 rounded-xl overflow-hidden border border-green-200 dark:border-green-700 shadow-lg">
      <div class="bg-green-100 dark:bg-green-900/30 px-4 py-2">
        <p class="text-center text-sm font-bold text-green-700 dark:text-green-300">📈 15-MINUTE LONG SETUP — Live Chart Example</p>
      </div>
      <img src="/images/investing-basics/15min-5ema.jpg" alt="5 EMA Long Setup on 15-minute chart showing Alert Candle floating below the EMA line" class="w-full" />
      <div class="bg-slate-100 dark:bg-slate-800 px-4 py-3">
        <p class="text-xs text-slate-600 dark:text-slate-400 text-center">
          The Alert Candle floats <strong>completely below</strong> the 5 EMA. Buy triggered when the next candle breaks the Alert Candle's High.
        </p>
      </div>
    </div>

    <h2 class="text-2xl font-serif font-bold mb-6 mt-12 text-slate-900 dark:text-white flex items-center gap-3">
      <span class="flex items-center justify-center w-10 h-10 bg-indigo-100 dark:bg-indigo-900/40 rounded-full text-indigo-600 dark:text-indigo-400 text-lg font-bold">3</span>
      The Advanced Intraday Routine (The "Gap" Workflow)
    </h2>

    <p class="mb-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      While the standard setup applies to any market condition, the <strong>"Best Use"</strong> case for this strategy is <em>fading morning gaps</em> in FNO stocks. This specific workflow is designed to capitalize on market overreactions.
    </p>

    <h3 class="text-xl font-serif font-bold mb-4 mt-8 text-slate-900 dark:text-white">The Logic: Fading the News</h3>
    <div class="p-5 bg-gradient-to-br from-purple-50 via-indigo-50 to-purple-50 dark:from-purple-900/20 dark:via-indigo-900/15 dark:to-purple-900/20 rounded-lg border-l-4 border-purple-500 dark:border-purple-400/50 mb-8">
      <p class="text-slate-700 dark:text-slate-300 leading-relaxed">
        In the Indian market, massive <strong>Gap Ups</strong> (often driven by overnight news) <em>frequently fail</em>. Retail traders panic-buy at the open, while institutions often book profits, causing the stock to <strong>"fade"</strong> (reverse) and fill the gap.
      </p>
    </div>

    <h3 class="text-xl font-serif font-bold mb-4 mt-8 text-slate-900 dark:text-white">⏰ The Morning Routine (9:07 AM – 9:15 AM)</h3>
    
    <div class="relative pl-8 border-l-2 border-indigo-300 dark:border-indigo-600 space-y-6 mb-8">
      <div class="relative">
        <div class="absolute -left-10 w-6 h-6 bg-indigo-500 rounded-full flex items-center justify-center text-white text-xs font-bold">1</div>
        <div class="p-4 bg-white dark:bg-slate-800 rounded-lg shadow-sm">
          <p class="font-bold text-slate-900 dark:text-white mb-1">Scanner Setup (9:07 - 9:15 AM)</p>
          <p class="text-sm text-slate-700 dark:text-slate-300">
            Scan for <strong>FNO Stocks</strong> opening with a significant Gap Up <strong>(>1%)</strong>.
          </p>
          <p class="text-xs text-slate-500 dark:text-slate-400 mt-2">
            💡 <strong>Why FNO?</strong> They provide liquidity and allow for short-selling.
          </p>
        </div>
      </div>
      
      <div class="relative">
        <div class="absolute -left-10 w-6 h-6 bg-indigo-500 rounded-full flex items-center justify-center text-white text-xs font-bold">2</div>
        <div class="p-4 bg-white dark:bg-slate-800 rounded-lg shadow-sm">
          <p class="font-bold text-slate-900 dark:text-white mb-1">Focus Sectors</p>
          <p class="text-sm text-slate-700 dark:text-slate-300">
            Watch <strong>IT and Pharma</strong> closely—they are heavily news-driven and prone to sharp reversals.
          </p>
        </div>
      </div>
      
      <div class="relative">
        <div class="absolute -left-10 w-6 h-6 bg-indigo-500 rounded-full flex items-center justify-center text-white text-xs font-bold">3</div>
        <div class="p-4 bg-white dark:bg-slate-800 rounded-lg shadow-sm">
          <p class="font-bold text-slate-900 dark:text-white mb-1">Build the Watchlist</p>
          <p class="text-sm text-slate-700 dark:text-slate-300">
            Select the <strong>top 5 stocks</strong> showing the biggest gaps.
          </p>
        </div>
      </div>
      
      <div class="relative">
        <div class="absolute -left-10 w-6 h-6 bg-indigo-500 rounded-full flex items-center justify-center text-white text-xs font-bold">4</div>
        <div class="p-4 bg-white dark:bg-slate-800 rounded-lg shadow-sm">
          <p class="font-bold text-slate-900 dark:text-white mb-1">Execution (9:15 AM onwards)</p>
          <p class="text-sm text-slate-700 dark:text-slate-300">
            Apply the <strong>5 EMA Short Setup</strong> (5-min timeframe) to these stocks immediately at the open.
          </p>
        </div>
      </div>
    </div>

    <h3 class="text-xl font-serif font-bold mb-4 mt-8 text-slate-900 dark:text-white">🧺 The "Basket" Probability Approach</h3>
    <p class="mb-4 text-slate-700 dark:text-slate-300 leading-relaxed">
      Instead of betting everything on one index (like Bank Nifty), this method uses a <strong>"Basket"</strong> of stocks to distribute risk.
    </p>

    <div class="p-6 bg-gradient-to-br from-slate-100 via-gray-100 to-slate-100 dark:from-slate-800 dark:via-gray-800 dark:to-slate-800 rounded-xl border border-slate-200 dark:border-slate-600 mb-8">
      <p class="font-bold text-center text-slate-900 dark:text-white mb-4">Example Scenario: 5 Gap-Up Stocks</p>
      
      <div class="grid md:grid-cols-2 gap-4 mb-4">
        <div class="p-4 bg-red-50 dark:bg-red-900/20 rounded-lg text-center">
          <p class="text-3xl font-bold text-red-600 dark:text-red-400">3</p>
          <p class="text-sm text-slate-600 dark:text-slate-400">Stocks hit Stop Loss ❌</p>
          <p class="text-xs text-slate-500">(Small, defined losses)</p>
        </div>
        <div class="p-4 bg-green-50 dark:bg-green-900/20 rounded-lg text-center">
          <p class="text-3xl font-bold text-green-600 dark:text-green-400">2</p>
          <p class="text-sm text-slate-600 dark:text-slate-400">Stocks crash/fade ✅</p>
          <p class="text-xs text-slate-500">(1:3 or 1:4 RR profits)</p>
        </div>
      </div>
      
      <div class="p-4 bg-gold-100 dark:bg-gold-900/20 rounded-lg text-center">
        <p class="font-bold text-gold-700 dark:text-gold-400">📊 RESULT</p>
        <p class="text-slate-700 dark:text-slate-300">
          The <strong>1:3 or 1:4 RR</strong> on winning trades mathematically covers the small losses → <strong>Net Profit</strong>
        </p>
      </div>
    </div>

    <h2 class="text-2xl font-serif font-bold mb-6 mt-12 text-slate-900 dark:text-white flex items-center gap-3">
      <span class="flex items-center justify-center w-10 h-10 bg-indigo-100 dark:bg-indigo-900/40 rounded-full text-indigo-600 dark:text-indigo-400 text-lg font-bold">4</span>
      Position Sizing & Risk Management
    </h2>

    <h3 class="text-xl font-serif font-bold mb-4 mt-8 text-slate-900 dark:text-white">📐 The "Fixed Risk" Formula</h3>
    <p class="mb-4 text-slate-700 dark:text-slate-300 leading-relaxed">
      To trade the Basket Approach effectively, you must <strong>standardize your risk</strong>.
    </p>

    <div class="p-6 bg-gradient-to-br from-blue-50 via-cyan-50 to-blue-50 dark:from-blue-900/20 dark:via-cyan-900/15 dark:to-blue-900/20 rounded-xl border border-blue-200 dark:border-blue-700 mb-6">
      <div class="space-y-4">
        <div class="flex items-center gap-4">
          <span class="flex items-center justify-center w-8 h-8 bg-blue-500 text-white rounded-full font-bold">1</span>
          <div>
            <p class="font-semibold text-slate-900 dark:text-white">Define Daily Risk</p>
            <p class="text-sm text-slate-600 dark:text-slate-400">e.g., ₹5,000 Total Risk for the day</p>
          </div>
        </div>
        
        <div class="flex items-center gap-4">
          <span class="flex items-center justify-center w-8 h-8 bg-blue-500 text-white rounded-full font-bold">2</span>
          <div>
            <p class="font-semibold text-slate-900 dark:text-white">Split the Risk</p>
            <p class="text-sm text-slate-600 dark:text-slate-400">₹5,000 ÷ 5 trades = <strong>₹1,000 Risk per trade</strong></p>
          </div>
        </div>
        
        <div class="flex items-center gap-4">
          <span class="flex items-center justify-center w-8 h-8 bg-blue-500 text-white rounded-full font-bold">3</span>
          <div>
            <p class="font-semibold text-slate-900 dark:text-white">Calculate Quantity</p>
            <p class="text-sm text-slate-600 dark:text-slate-400">Quantity = Risk per Trade ÷ Stop Loss Size</p>
          </div>
        </div>
      </div>
    </div>

    <div class="p-5 bg-gradient-to-br from-slate-900 via-gray-900 to-slate-900 rounded-xl border border-slate-700 mb-8">
      <p class="text-center text-sm text-slate-400 mb-2">FORMULA</p>
      <p class="text-center text-2xl font-mono text-white mb-3">
        Quantity = ₹1,000 ÷ ₹10 (SL) = <span class="text-gold-400 font-bold">100 shares</span>
      </p>
      <p class="text-center text-xs text-slate-500">
        (If Alert Candle High - Low = ₹10)
      </p>
    </div>

    <h3 class="text-xl font-serif font-bold mb-4 mt-8 text-slate-900 dark:text-white">⚖️ Aggressive vs. Defensive Sizing</h3>
    
    <div class="grid md:grid-cols-2 gap-4 mb-8">
      <div class="p-5 bg-gradient-to-br from-orange-50 to-orange-100 dark:from-orange-900/20 dark:to-orange-800/20 rounded-lg border border-orange-200 dark:border-orange-700">
        <p class="font-bold text-orange-800 dark:text-orange-300 mb-3">🔥 Aggressive (2X Quantity)</p>
        <p class="text-sm text-slate-700 dark:text-slate-300 mb-2">When to use:</p>
        <ul class="text-sm text-slate-600 dark:text-slate-400 space-y-1 list-disc ml-4">
          <li>5 EMA signal at Daily Chart Gap Resistance</li>
          <li>During a Range Shift (Trend change)</li>
          <li>Multiple confluences align</li>
        </ul>
      </div>
      <div class="p-5 bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20 rounded-lg border border-blue-200 dark:border-blue-700">
        <p class="font-bold text-blue-800 dark:text-blue-300 mb-3">🛡️ Defensive (0.5X Quantity)</p>
        <p class="text-sm text-slate-700 dark:text-slate-300 mb-2">When to use:</p>
        <ul class="text-sm text-slate-600 dark:text-slate-400 space-y-1 list-disc ml-4">
          <li>Trading against the trend</li>
          <li>Buying in a strong bear market</li>
          <li>Setup looks weak/unclear</li>
        </ul>
      </div>
    </div>

    <h2 class="text-2xl font-serif font-bold mb-6 mt-12 text-slate-900 dark:text-white flex items-center gap-3">
      <span class="flex items-center justify-center w-10 h-10 bg-indigo-100 dark:bg-indigo-900/40 rounded-full text-indigo-600 dark:text-indigo-400 text-lg font-bold">5</span>
      Conclusion & Psychological Edge
    </h2>

    <div class="p-6 bg-gradient-to-br from-amber-50 via-yellow-50 to-orange-50 dark:from-amber-900/30 dark:via-yellow-900/20 dark:to-orange-900/30 rounded-xl border-2 border-amber-300 dark:border-amber-600/50 shadow-lg dark:shadow-xl mb-8">
      <p class="text-center text-xl font-serif font-bold text-slate-900 dark:text-white mb-4">
        The 5 EMA system is NOT designed to be right every time.
        <br/>It is designed to be <span class="text-gold-600 dark:text-gold-400">profitable over time</span>.
      </p>
    </div>

    <h3 class="text-xl font-serif font-bold mb-4 mt-8 text-slate-900 dark:text-white">M2M Focus</h3>
    <p class="mb-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      Don't obsess over individual stocks (e.g., "Why is Reliance hitting SL?"). Focus on the <strong>Mark-to-Market (M2M)</strong> of the entire basket.
    </p>

    <h3 class="text-xl font-serif font-bold mb-4 mt-8 text-slate-900 dark:text-white">The Business of Losses</h3>
    <div class="p-5 bg-gradient-to-br from-purple-50 via-indigo-50 to-purple-50 dark:from-purple-900/20 dark:via-indigo-900/15 dark:to-purple-900/20 rounded-lg border-l-4 border-purple-500 dark:border-purple-400/50 mb-8">
      <p class="text-slate-700 dark:text-slate-300 leading-relaxed">
        You are in the <strong>business of managing losses</strong>. Small, frequent losses are the <em>"cost of goods sold" (COGS)</em> for the massive winning trades that occur when a Gap Up fails or a trend reverses.
      </p>
    </div>

    <h3 class="text-xl font-serif font-bold mb-4 mt-10 text-slate-900 dark:text-white">🎯 Key Takeaways</h3>
    <ul class="mb-8 space-y-3">
      <li class="flex items-start gap-3 text-slate-700 dark:text-slate-300">
        <span class="text-lg">1️⃣</span>
        <span><strong>5 EMA = Mean Reversion</strong> — Hunt for separation, not crossovers</span>
      </li>
      <li class="flex items-start gap-3 text-slate-700 dark:text-slate-300">
        <span class="text-lg">2️⃣</span>
        <span><strong>5-Min = Short</strong>, <strong>15-Min = Long</strong> — Never mix timeframes</span>
      </li>
      <li class="flex items-start gap-3 text-slate-700 dark:text-slate-300">
        <span class="text-lg">3️⃣</span>
        <span><strong>Alert Candle floats</strong> — No touch to EMA means exhaustion</span>
      </li>
      <li class="flex items-start gap-3 text-slate-700 dark:text-slate-300">
        <span class="text-lg">4️⃣</span>
        <span><strong>Gap Fading is the sweet spot</strong> — IT & Pharma FNO stocks at 9:15 AM</span>
      </li>
      <li class="flex items-start gap-3 text-slate-700 dark:text-slate-300">
        <span class="text-lg">5️⃣</span>
        <span><strong>Basket of 5 stocks</strong> — Distribute risk, not all-in on one</span>
      </li>
      <li class="flex items-start gap-3 text-slate-700 dark:text-slate-300">
        <span class="text-lg">6️⃣</span>
        <span><strong>Fixed risk per trade</strong> — Quantity = Risk ÷ SL Size</span>
      </li>
      <li class="flex items-start gap-3 text-slate-700 dark:text-slate-300">
        <span class="text-lg">7️⃣</span>
        <span><strong>M2M mindset</strong> — Focus on basket P&L, not individual trades</span>
      </li>
    </ul>

    <div class="p-6 bg-gradient-to-br from-slate-900 via-gray-900 to-slate-900 rounded-xl border border-gold-500/30 mb-8">
      <p class="text-center text-lg text-slate-200 leading-relaxed">
        🏆 <strong>The "Holy Grail" is not the indicator</strong> —
        <br/>it is the <span class="text-gold-400 font-bold">discipline</span> to execute the setup on high-probability candidates with <span class="text-gold-400 font-bold">strict position sizing</span>.
      </p>
    </div>

    <p class="text-xs text-slate-500 dark:text-slate-400 mt-8 pt-4 border-t border-slate-200 dark:border-slate-700">
      <strong>Source:</strong> Based on Subhashish's (Power of Stocks) 5 EMA methodology | This article is for educational purposes only. Trading involves significant risk of loss. Past performance is not indicative of future results.
    </p>
  `,
};
