export const clubItcGuideContent = `
<div class="space-y-12 font-sans text-slate-800 dark:text-slate-200">

  <!-- Hero Section -->
  <div class="relative bg-gradient-to-br from-emerald-900 via-green-900 to-slate-900 p-10 rounded-3xl shadow-2xl overflow-hidden text-white">
    <div class="relative z-10">
      <div class="flex items-center gap-3 mb-4">
        <span class="bg-emerald-500 text-white px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">Complete Guide</span>
        <span class="text-emerald-300 text-sm">🇮🇳 India's Finest</span>
      </div>
      <h2 class="text-4xl md:text-5xl font-extrabold mb-4 font-serif leading-tight">Club ITC</h2>
      <p class="text-xl opacity-90 max-w-2xl">India's premier luxury hotel loyalty program. Earn Green Points, unlock suite upgrades, and experience world-class hospitality across 6 iconic brands.</p>
    </div>
    <div class="absolute top-0 right-0 -mr-20 -mt-20 w-80 h-80 bg-emerald-500 opacity-10 rounded-full blur-3xl"></div>
  </div>

  <!-- Table of Contents -->
  <nav class="bg-slate-100 dark:bg-slate-800/50 p-6 rounded-2xl border border-slate-200 dark:border-slate-700">
    <h3 class="text-lg font-bold mb-4 flex items-center gap-2">📋 What's Inside</h3>
    <div class="grid grid-cols-2 md:grid-cols-4 gap-3 text-sm">
      <a href="#brands" class="flex items-center gap-2 p-2 rounded-lg hover:bg-white dark:hover:bg-slate-700 transition-colors">🏨 Brands</a>
      <a href="#tiers" class="flex items-center gap-2 p-2 rounded-lg hover:bg-white dark:hover:bg-slate-700 transition-colors">👑 Elite Tiers</a>
      <a href="#culinaire" class="flex items-center gap-2 p-2 rounded-lg hover:bg-white dark:hover:bg-slate-700 transition-colors">🍽️ Culinaire</a>
      <a href="#earn" class="flex items-center gap-2 p-2 rounded-lg hover:bg-white dark:hover:bg-slate-700 transition-colors">💰 Earn Points</a>
      <a href="#redeem" class="flex items-center gap-2 p-2 rounded-lg hover:bg-white dark:hover:bg-slate-700 transition-colors">🎁 Redeem</a>
      <a href="#transfer" class="flex items-center gap-2 p-2 rounded-lg hover:bg-white dark:hover:bg-slate-700 transition-colors">🔄 Transfers</a>
    </div>
  </nav>

  <!-- ITC Brands -->
  <section id="brands">
    <h3 class="flex items-center gap-3 text-2xl font-bold text-slate-900 dark:text-white mb-6">
      <span class="text-3xl">🏨</span> ITC Group of Hotels
    </h3>
    
    <div class="grid grid-cols-2 md:grid-cols-3 gap-4">
      <div class="bg-gradient-to-br from-amber-50 to-yellow-50 dark:from-amber-900/20 dark:to-yellow-900/20 p-5 rounded-2xl border-2 border-amber-400 text-center">
        <div class="text-3xl mb-2">👑</div>
        <div class="font-bold text-lg">ITC Hotels</div>
        <div class="text-sm text-slate-500">Ultra Luxury</div>
      </div>
      <div class="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 p-5 rounded-2xl border-2 border-purple-400 text-center">
        <div class="text-3xl mb-2">✨</div>
        <div class="font-bold text-lg">Mementos</div>
        <div class="text-sm text-slate-500">Luxury Collection</div>
      </div>
      <div class="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 p-5 rounded-2xl border-2 border-blue-400 text-center">
        <div class="text-3xl mb-2">🌟</div>
        <div class="font-bold text-lg">WelcomHotel</div>
        <div class="text-sm text-slate-500">Premium</div>
      </div>
      <div class="bg-gradient-to-br from-teal-50 to-cyan-50 dark:from-teal-900/20 dark:to-cyan-900/20 p-5 rounded-2xl border-2 border-teal-400 text-center">
        <div class="text-3xl mb-2">📖</div>
        <div class="font-bold text-lg">Storii</div>
        <div class="text-sm text-slate-500">Boutique Heritage</div>
      </div>
      <div class="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 p-5 rounded-2xl border-2 border-green-400 text-center">
        <div class="text-3xl mb-2">🍀</div>
        <div class="font-bold text-lg">Fortune</div>
        <div class="text-sm text-slate-500">Business Hotels</div>
      </div>
      <div class="bg-gradient-to-br from-orange-50 to-red-50 dark:from-orange-900/20 dark:to-red-900/20 p-5 rounded-2xl border-2 border-orange-400 text-center">
        <div class="text-3xl mb-2">🏛️</div>
        <div class="font-bold text-lg">WelcomHeritage</div>
        <div class="text-sm text-slate-500">Heritage Palaces</div>
      </div>
    </div>
  </section>

  <!-- Elite Tiers -->
  <section id="tiers">
    <h3 class="flex items-center gap-3 text-2xl font-bold text-slate-900 dark:text-white mb-6">
      <span class="text-3xl">👑</span> Club ITC Tiers
    </h3>
    <p class="mb-6 text-slate-600 dark:text-slate-400">Qualify via <strong>Spending</strong> or <strong>Stay Nights</strong>. All activity counts - even award bookings!</p>
    
    <div class="space-y-4">
      <!-- Member -->
      <div class="bg-slate-100 dark:bg-slate-800 p-6 rounded-2xl border-l-4 border-slate-400">
        <div class="flex items-center gap-3 mb-3">
          <span class="text-2xl">⚪</span>
          <h4 class="text-xl font-bold">Member</h4>
          <span class="text-xs bg-slate-200 dark:bg-slate-700 px-2 py-1 rounded">Base Tier</span>
        </div>
        <p class="text-slate-600 dark:text-slate-400">Join free and start earning 2% Green Points on eligible spending.</p>
      </div>
      
      <!-- Silver -->
      <div class="bg-gradient-to-r from-slate-100 to-slate-200 dark:from-slate-800 dark:to-slate-700 p-6 rounded-2xl border-l-4 border-slate-500">
        <div class="flex items-center justify-between mb-3">
          <div class="flex items-center gap-3">
            <span class="text-2xl">🥈</span>
            <h4 class="text-xl font-bold">Silver</h4>
          </div>
          <span class="text-xs bg-slate-300 dark:bg-slate-600 px-3 py-1 rounded-full font-bold">10 Nights OR ₹1L Spend</span>
        </div>
        <ul class="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm">
          <li class="flex items-center gap-2 p-2 bg-white/50 dark:bg-black/20 rounded-lg">📈 Earn <strong>3%</strong> Green Points</li>
          <li class="flex items-center gap-2 p-2 bg-white/50 dark:bg-black/20 rounded-lg font-semibold">⬆️ Room Upgrade Voucher</li>
          <li class="flex items-center gap-2 p-2 bg-white/50 dark:bg-black/20 rounded-lg">☕ 25% off F&B (Coffee Shop, 4 guests)</li>
          <li class="flex items-center gap-2 p-2 bg-white/50 dark:bg-black/20 rounded-lg">💆 25% off Spa</li>
          <li class="flex items-center gap-2 p-2 bg-white/50 dark:bg-black/20 rounded-lg">👔 30% off Laundry</li>
        </ul>
      </div>
      
      <!-- Gold -->
      <div class="bg-gradient-to-r from-yellow-100 to-amber-100 dark:from-yellow-900/30 dark:to-amber-900/30 p-6 rounded-2xl border-l-4 border-yellow-500">
        <div class="flex items-center justify-between mb-3">
          <div class="flex items-center gap-3">
            <span class="text-2xl">🥇</span>
            <h4 class="text-xl font-bold text-yellow-700 dark:text-yellow-400">Gold</h4>
          </div>
          <span class="text-xs bg-yellow-200 dark:bg-yellow-800 px-3 py-1 rounded-full font-bold">20 Nights OR ₹2L Spend</span>
        </div>
        <ul class="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm">
          <li class="flex items-center gap-2 p-3 bg-white/50 dark:bg-black/20 rounded-lg">📈 Earn <strong>4%</strong> Green Points</li>
          <li class="flex items-center gap-2 p-3 bg-white/50 dark:bg-black/20 rounded-lg font-semibold">🏰 Suite Upgrade Voucher!</li>
          <li class="flex items-center gap-2 p-3 bg-white/50 dark:bg-black/20 rounded-lg">☕ 25% off F&B (Coffee Shop, 4 guests)</li>
          <li class="flex items-center gap-2 p-3 bg-white/50 dark:bg-black/20 rounded-lg">💆 25% off Spa</li>
          <li class="flex items-center gap-2 p-3 bg-white/50 dark:bg-black/20 rounded-lg">👔 30% off Laundry</li>
          <li class="flex items-center gap-2 p-3 bg-white/50 dark:bg-black/20 rounded-lg">📶 Enhanced Internet</li>
        </ul>
      </div>
      
      <!-- Platinum -->
      <div class="bg-gradient-to-r from-emerald-100 to-teal-100 dark:from-emerald-900/30 dark:to-teal-900/30 p-6 rounded-2xl border-l-4 border-emerald-600">
        <div class="flex items-center justify-between mb-3">
          <div class="flex items-center gap-3">
            <span class="text-2xl">💎</span>
            <h4 class="text-xl font-bold text-emerald-700 dark:text-emerald-400">Platinum</h4>
          </div>
          <span class="text-xs bg-emerald-200 dark:bg-emerald-800 px-3 py-1 rounded-full font-bold">30 Nights OR ₹3L Spend</span>
        </div>
        <ul class="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm">
          <li class="flex items-center gap-2 p-3 bg-white/50 dark:bg-black/20 rounded-lg font-semibold">📈 Earn <strong>5%</strong> Green Points (Max!)</li>
          <li class="flex items-center gap-2 p-3 bg-white/50 dark:bg-black/20 rounded-lg font-semibold">🍽️ 25% off F&B at ALL Outlets (4 guests)</li>
          <li class="flex items-center gap-2 p-3 bg-white/50 dark:bg-black/20 rounded-lg">💆 25% off Spa</li>
          <li class="flex items-center gap-2 p-3 bg-white/50 dark:bg-black/20 rounded-lg">👔 30% off Laundry</li>
          <li class="flex items-center gap-2 p-3 bg-white/50 dark:bg-black/20 rounded-lg font-semibold">🍸 Buy 1 Get 1 at Select Bars (4 guests)</li>
          <li class="flex items-center gap-2 p-3 bg-white/50 dark:bg-black/20 rounded-lg">📶 Enhanced Internet</li>
        </ul>
      </div>
    </div>

    <div class="mt-6 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-xl border border-blue-200 dark:border-blue-800">
      <h4 class="font-bold mb-2 flex items-center gap-2">💡 Pro Tips</h4>
      <ul class="text-sm text-slate-600 dark:text-slate-400 space-y-1">
        <li>• Excess nights <strong>roll over</strong> to next year (e.g., 35 nights = 5 carried forward)</li>
        <li>• Room upgrades are subject to availability - call ahead!</li>
        <li>• 24-hour check-in/out NOT available at WelcomHotel properties</li>
      </ul>
    </div>
  </section>

  <!-- ITC Culinaire -->
  <section id="culinaire" class="bg-gradient-to-br from-red-50 via-orange-50 to-amber-50 dark:from-red-900/10 dark:via-orange-900/10 dark:to-amber-900/10 p-8 rounded-3xl border border-red-200 dark:border-red-900/30">
    <h3 class="flex items-center gap-3 text-2xl font-bold text-red-600 dark:text-red-400 mb-6">
      <span class="text-3xl">🍽️</span> ITC Culinaire Select & Elite
    </h3>
    <p class="mb-6 text-slate-700 dark:text-slate-300">A premium dining membership with incredible earn rates. Available via credit cards or direct purchase.</p>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
      <!-- Culinaire Select -->
      <div class="bg-white dark:bg-slate-900 p-6 rounded-2xl shadow-lg">
        <h4 class="font-bold text-lg mb-4">Culinaire Select</h4>
        <ul class="space-y-2 text-sm text-slate-600 dark:text-slate-400">
          <li class="flex items-center gap-2">✅ <strong>25%</strong> Green Points on F&B at ITC/WelcomHotel</li>
          <li class="flex items-center gap-2">✅ <strong>5%</strong> on non-F&B at ITC/WelcomHotel/Fortune</li>
          <li class="flex items-center gap-2">✅ 20% savings on F&B at Fortune/WelcomHeritage</li>
          <li class="flex items-center gap-2">✅ 1,000 bonus pts per ₹25k F&B spend</li>
        </ul>
      </div>
      
      <!-- Culinaire Elite -->
      <div class="bg-white dark:bg-slate-900 p-6 rounded-2xl shadow-lg border-t-4 border-amber-500">
        <h4 class="font-bold text-lg mb-4">Culinaire Elite</h4>
        <ul class="space-y-2 text-sm text-slate-600 dark:text-slate-400">
          <li class="flex items-center gap-2">✅ All Select benefits, PLUS:</li>
          <li class="flex items-center gap-2">🍸 <strong>Hi-spirited Wednesdays:</strong> 2-for-1 drinks (6-8 PM)</li>
          <li class="flex items-center gap-2">🍽️ <strong>Gourmet Fridays:</strong> 50% extra points (37.5% total!)</li>
          <li class="flex items-center gap-2">🎂 <strong>Birthday Week:</strong> 50% bonus points (yours & spouse)</li>
        </ul>
      </div>
    </div>

    <!-- Participating Hotels -->
    <div class="p-4 bg-white/80 dark:bg-slate-900/50 rounded-xl">
      <h4 class="font-bold mb-3">🏨 Participating Luxury Stay Hotels</h4>
      <div class="flex flex-wrap gap-2 text-xs">
        <span class="px-2 py-1 bg-slate-100 dark:bg-slate-800 rounded">ITC Gardenia</span>
        <span class="px-2 py-1 bg-slate-100 dark:bg-slate-800 rounded">ITC Grand Maurya</span>
        <span class="px-2 py-1 bg-slate-100 dark:bg-slate-800 rounded">ITC Grand Chola</span>
        <span class="px-2 py-1 bg-slate-100 dark:bg-slate-800 rounded">ITC Royal Bengal</span>
        <span class="px-2 py-1 bg-slate-100 dark:bg-slate-800 rounded">Sheraton New Delhi</span>
        <span class="px-2 py-1 bg-slate-100 dark:bg-slate-800 rounded">ITC Rajputana</span>
        <span class="px-2 py-1 bg-slate-100 dark:bg-slate-800 rounded">ITC Grand Central</span>
      </div>
    </div>

    <!-- Credit Cards with Culinaire -->
    <div class="mt-4 p-4 bg-emerald-100 dark:bg-emerald-900/30 rounded-xl text-emerald-800 dark:text-emerald-300">
      <strong>💳 Get Culinaire FREE with:</strong> Axis Reserve, IndusInd Pioneer Heritage Metal, IndusInd Pioneer Heritage Private
    </div>
  </section>

  <!-- Earning Points -->
  <section id="earn">
    <h3 class="flex items-center gap-3 text-2xl font-bold text-slate-900 dark:text-white mb-6">
      <span class="text-3xl">💰</span> Earn Green Points
    </h3>

    <!-- Credit Card Partners -->
    <div class="bg-white dark:bg-slate-900 p-6 rounded-2xl shadow-lg border border-slate-200 dark:border-slate-700 mb-6">
      <h4 class="font-bold text-lg mb-4">💳 Credit Card Transfer Partners</h4>
      
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <!-- Axis -->
        <div class="p-4 bg-red-50 dark:bg-red-900/20 rounded-xl">
          <h5 class="font-bold mb-3">🏦 Axis Bank</h5>
          <div class="space-y-2 text-sm">
            <div class="flex justify-between p-2 bg-white/80 dark:bg-black/30 rounded-lg">
              <span>Burgundy Private, Magnus Burgundy</span>
              <span class="font-bold text-green-600">5 : 4</span>
            </div>
            <div class="flex justify-between p-2 bg-white/80 dark:bg-black/30 rounded-lg">
              <span>Reserve, Magnus</span>
              <span class="font-bold">5 : 2</span>
            </div>
            <div class="flex justify-between p-2 bg-white/80 dark:bg-black/30 rounded-lg">
              <span>Atlas (Edge Miles)</span>
              <span class="font-bold">1 : 2</span>
            </div>
            <div class="flex justify-between p-2 bg-white/80 dark:bg-black/30 rounded-lg">
              <span>Olympus (Edge Miles)</span>
              <span class="font-bold">1 : 4</span>
            </div>
            <div class="flex justify-between p-2 bg-white/80 dark:bg-black/30 rounded-lg">
              <span>Select, Privilege, REWARDS</span>
              <span class="font-bold">10 : 1</span>
            </div>
            <div class="flex justify-between p-2 bg-white/80 dark:bg-black/30 rounded-lg">
              <span>Other Edge Reward Cards</span>
              <span class="font-bold">20 : 1</span>
            </div>
          </div>
        </div>

        <!-- HDFC -->
        <div class="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-xl">
          <h5 class="font-bold mb-3">🏦 HDFC Bank</h5>
          <div class="space-y-2 text-sm">
            <div class="flex justify-between p-2 bg-white/80 dark:bg-black/30 rounded-lg">
              <span>Infinia, Diners Black (Metal)</span>
              <span class="font-bold text-green-600">2 : 1</span>
            </div>
            <div class="flex justify-between p-2 bg-white/80 dark:bg-black/30 rounded-lg">
              <span>Regalia Gold</span>
              <span class="font-bold">3 : 1</span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Earning at Hotels -->
    <div class="bg-slate-100 dark:bg-slate-800 p-6 rounded-2xl">
      <h4 class="font-bold text-lg mb-4">🏨 Earning at Hotels</h4>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div class="p-4 bg-white dark:bg-slate-900 rounded-xl">
          <h5 class="font-bold mb-2">Club ITC Tiers</h5>
          <ul class="text-sm space-y-1 text-slate-600 dark:text-slate-400">
            <li>• Member: 2% on eligible spend</li>
            <li>• Silver: 3%</li>
            <li>• Gold: 4%</li>
            <li>• Platinum: 5%</li>
          </ul>
        </div>
        <div class="p-4 bg-white dark:bg-slate-900 rounded-xl">
          <h5 class="font-bold mb-2">ITC Culinaire</h5>
          <ul class="text-sm space-y-1 text-slate-600 dark:text-slate-400">
            <li>• <strong>25%</strong> on F&B at ITC/WelcomHotel</li>
            <li>• 5% on non-F&B</li>
            <li>• +1,000 pts per ₹25k F&B (max ₹1L)</li>
          </ul>
        </div>
      </div>
      <div class="mt-4 p-3 bg-amber-100 dark:bg-amber-900/30 rounded-lg text-amber-800 dark:text-amber-300 text-sm">
        💡 <strong>Stack them!</strong> With Culinaire, you earn the 5% Platinum rate on stays PLUS 25% on F&B when paying separately.
      </div>
    </div>
  </section>

  <!-- Redeem Points -->
  <section id="redeem">
    <h3 class="flex items-center gap-3 text-2xl font-bold text-slate-900 dark:text-white mb-6">
      <span class="text-3xl">🎁</span> Redeem Green Points
    </h3>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
      <!-- Room Redemption -->
      <div class="bg-white dark:bg-slate-900 p-6 rounded-2xl shadow-lg border border-slate-200 dark:border-slate-700">
        <h4 class="font-bold text-lg mb-4">🏨 Room Redemption</h4>
        <ul class="space-y-2 text-sm text-slate-600 dark:text-slate-400">
          <li class="flex items-start gap-2">
            <span class="text-green-500 mt-1">✓</span>
            <span>Book via website/call (tax paid separately)</span>
          </li>
          <li class="flex items-start gap-2">
            <span class="text-green-500 mt-1">✓</span>
            <span>OR book revenue rate, settle at hotel with points</span>
          </li>
          <li class="flex items-start gap-2">
            <span class="text-green-500 mt-1">✓</span>
            <span>Book for family members too!</span>
          </li>
        </ul>
        <div class="mt-3 p-3 bg-red-100 dark:bg-red-900/30 rounded-lg text-red-800 dark:text-red-300 text-sm">
          ⚠️ WelcomHeritage does NOT accept Green Points
        </div>
      </div>

      <!-- Dining Redemption -->
      <div class="bg-white dark:bg-slate-900 p-6 rounded-2xl shadow-lg border border-slate-200 dark:border-slate-700">
        <h4 class="font-bold text-lg mb-4">🍽️ Dining & More</h4>
        <ul class="space-y-2 text-sm text-slate-600 dark:text-slate-400">
          <li>• Settle F&B bills with Green Points</li>
          <li>• Some services (salon, car rental, spa) may be excluded</li>
          <li>• Inform front desk during check-in for seamless checkout</li>
        </ul>
      </div>
    </div>
  </section>

  <!-- Transfer Partners -->
  <section id="transfer" class="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/10 dark:to-indigo-900/10 p-8 rounded-3xl border border-blue-200 dark:border-blue-900/30">
    <h3 class="flex items-center gap-3 text-2xl font-bold text-blue-700 dark:text-blue-400 mb-6">
      <span class="text-3xl">🔄</span> Transfer to Partners
    </h3>
    <p class="mb-6 text-slate-700 dark:text-slate-300">Convert Green Points to hotel and airline partners. Manual process, takes up to 3 weeks.</p>

    <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
      <!-- Marriott -->
      <div class="bg-white dark:bg-slate-900 p-5 rounded-2xl shadow-lg text-center">
        <div class="text-3xl mb-2">🏨</div>
        <h4 class="font-bold text-lg mb-1">Marriott Bonvoy</h4>
        <div class="text-2xl font-bold text-blue-600">2 : 3</div>
        <div class="text-xs text-slate-500 mt-2">2 GP = 3 Bonvoy</div>
        <div class="text-xs text-slate-400">Max 40k GP/year (= 60k Bonvoy)</div>
        <div class="text-xs text-slate-400">10k GP/quarter</div>
      </div>

      <!-- Vistara -->
      <div class="bg-white dark:bg-slate-900 p-5 rounded-2xl shadow-lg text-center">
        <div class="text-3xl mb-2">✈️</div>
        <h4 class="font-bold text-lg mb-1">Club Vistara</h4>
        <div class="text-2xl font-bold text-purple-600">3 : 2</div>
        <div class="text-xs text-slate-500 mt-2">3 GP = 2 CV</div>
        <div class="text-xs text-slate-400">Max 60k GP/year (= 40k CV)</div>
      </div>

      <!-- Intermiles -->
      <div class="bg-white dark:bg-slate-900 p-5 rounded-2xl shadow-lg text-center">
        <div class="text-3xl mb-2">🎯</div>
        <h4 class="font-bold text-lg mb-1">Intermiles</h4>
        <div class="text-2xl font-bold text-teal-600">1 : 1.25</div>
        <div class="text-xs text-slate-500 mt-2">1 GP = 1.25 Intermiles</div>
        <div class="text-xs text-slate-400">Max 60k GP/year (= 75k Intermiles)</div>
      </div>
    </div>

    <!-- ITH Vouchers -->
    <div class="mt-6 p-4 bg-white dark:bg-slate-900 rounded-xl">
      <h4 class="font-bold mb-2">🚗 ITH Travel Certificates</h4>
      <p class="text-sm text-slate-600 dark:text-slate-400">Convert to travel vouchers: 625 GP = ₹500, 1250 GP = ₹1,000. Usable for flights, hotels, chauffeur services via ITH.</p>
    </div>
  </section>

  <!-- Quote -->
  <div class="my-8 text-center p-10 bg-gradient-to-br from-emerald-900 to-slate-900 rounded-3xl text-white">
    <p class="text-3xl font-serif italic mb-4">"Responsible Luxury"</p>
    <p class="text-emerald-300 text-sm uppercase tracking-widest">— ITC Hotels</p>
  </div>

</div>
`;
