export const accorGuideContent = `
<div class="space-y-12 font-sans text-slate-800 dark:text-slate-200">

  <!-- Hero Section -->
  <div class="relative bg-gradient-to-br from-purple-900 via-indigo-900 to-slate-900 p-10 rounded-3xl shadow-2xl overflow-hidden text-white">
    <div class="relative z-10">
      <div class="flex items-center gap-3 mb-4">
        <span class="bg-gold-500 text-black px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">Complete Guide</span>
        <span class="text-gold-400 text-sm">🇮🇳 India Edition</span>
      </div>
      <h2 class="text-4xl md:text-5xl font-extrabold mb-4 font-serif leading-tight">ALL Accor Live Limitless</h2>
      <p class="text-xl opacity-90 max-w-2xl">The second-largest hotel chain in the world. 5,100+ properties across 100+ countries. Your gateway to luxury stays, dining perks, and elite experiences.</p>
    </div>
    <div class="absolute top-0 right-0 -mr-20 -mt-20 w-80 h-80 bg-gold-500 opacity-10 rounded-full blur-3xl"></div>
    <div class="absolute bottom-0 left-0 -ml-20 -mb-20 w-60 h-60 bg-purple-400 opacity-20 rounded-full blur-2xl"></div>
  </div>

  <!-- Table of Contents -->
  <nav class="bg-slate-100 dark:bg-slate-800/50 p-6 rounded-2xl border border-slate-200 dark:border-slate-700">
    <h3 class="text-lg font-bold mb-4 flex items-center gap-2">📋 What's Inside</h3>
    <div class="grid grid-cols-2 md:grid-cols-4 gap-3 text-sm">
      <a href="#brands" class="flex items-center gap-2 p-2 rounded-lg hover:bg-white dark:hover:bg-slate-700 transition-colors">🏨 Brand Tiers</a>
      <a href="#elite" class="flex items-center gap-2 p-2 rounded-lg hover:bg-white dark:hover:bg-slate-700 transition-colors">👑 Elite Status</a>
      <a href="#accorplus" class="flex items-center gap-2 p-2 rounded-lg hover:bg-white dark:hover:bg-slate-700 transition-colors">🚀 Accor Plus</a>
      <a href="#earn" class="flex items-center gap-2 p-2 rounded-lg hover:bg-white dark:hover:bg-slate-700 transition-colors">💰 Earn Points</a>
      <a href="#burn" class="flex items-center gap-2 p-2 rounded-lg hover:bg-white dark:hover:bg-slate-700 transition-colors">🔥 Burn Points</a>
      <a href="#airlines" class="flex items-center gap-2 p-2 rounded-lg hover:bg-white dark:hover:bg-slate-700 transition-colors">✈️ Airline Partners</a>
      <a href="#sweetspots" class="flex items-center gap-2 p-2 rounded-lg hover:bg-white dark:hover:bg-slate-700 transition-colors">🍬 Sweet Spots</a>
      <a href="#validity" class="flex items-center gap-2 p-2 rounded-lg hover:bg-white dark:hover:bg-slate-700 transition-colors">⏰ Validity</a>
    </div>
  </nav>

  <!-- Brand Tiers Section -->
  <section id="brands">
    <h3 class="flex items-center gap-3 text-2xl font-bold text-slate-900 dark:text-white mb-6">
      <span class="text-3xl">🏨</span> Accor Brand Hierarchy
    </h3>
    <p class="mb-6 text-slate-600 dark:text-slate-400">From ultra-luxury palaces to budget-friendly stays, Accor has a brand for every traveler.</p>
    
    <div class="grid grid-cols-1 md:grid-cols-4 gap-4">
      <!-- Luxury -->
      <div class="relative bg-gradient-to-br from-yellow-50 to-amber-50 dark:from-yellow-900/20 dark:to-amber-900/20 p-5 rounded-2xl border-2 border-yellow-400 shadow-lg">
        <div class="absolute -top-3 left-4 bg-yellow-400 text-black px-3 py-1 rounded-full text-xs font-bold uppercase">Luxury</div>
        <div class="mt-4 space-y-2">
          <div class="font-serif font-bold text-xl text-slate-800 dark:text-white">🏰 Raffles</div>
          <div class="font-serif font-bold text-xl text-slate-800 dark:text-white">🚂 Orient Express</div>
          <div class="font-serif font-bold text-xl text-slate-800 dark:text-white">🌴 Banyan Tree</div>
          <div class="font-serif font-bold text-xl text-slate-800 dark:text-white">✨ Sofitel</div>
          <div class="font-serif font-bold text-xl text-slate-800 dark:text-white">🏖️ Rixos</div>
          <div class="font-serif font-bold text-xl text-slate-800 dark:text-white">👑 Fairmont</div>
        </div>
      </div>
      
      <!-- Premium -->
      <div class="relative bg-gradient-to-br from-purple-50 to-indigo-50 dark:from-purple-900/20 dark:to-indigo-900/20 p-5 rounded-2xl border-2 border-purple-400 shadow-lg">
        <div class="absolute -top-3 left-4 bg-purple-400 text-white px-3 py-1 rounded-full text-xs font-bold uppercase">Premium</div>
        <div class="mt-4 space-y-2">
          <div class="font-serif font-bold text-lg text-slate-800 dark:text-white">🎨 MGallery</div>
          <div class="font-serif font-bold text-lg text-slate-800 dark:text-white">🇨🇭 Swissôtel</div>
          <div class="font-serif font-bold text-lg text-slate-800 dark:text-white">🏢 Pullman</div>
          <div class="font-serif font-bold text-lg text-slate-800 dark:text-white">🌶️ Peppers</div>
          <div class="font-serif font-bold text-lg text-slate-800 dark:text-white">🏨 Grand Mercure</div>
        </div>
      </div>
      
      <!-- Midscale -->
      <div class="relative bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 p-5 rounded-2xl border-2 border-blue-400 shadow-lg">
        <div class="absolute -top-3 left-4 bg-blue-400 text-white px-3 py-1 rounded-full text-xs font-bold uppercase">Midscale</div>
        <div class="mt-4 space-y-2">
          <div class="font-serif font-bold text-lg text-slate-800 dark:text-white">🌟 Novotel</div>
          <div class="font-serif font-bold text-lg text-slate-800 dark:text-white">🏪 Mercure</div>
          <div class="font-serif font-bold text-lg text-slate-800 dark:text-white">🏠 Mantra</div>
          <div class="font-serif font-bold text-lg text-slate-800 dark:text-white">🍫 Mövenpick</div>
        </div>
      </div>
      
      <!-- Economy -->
      <div class="relative bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 p-5 rounded-2xl border-2 border-green-400 shadow-lg">
        <div class="absolute -top-3 left-4 bg-green-400 text-white px-3 py-1 rounded-full text-xs font-bold uppercase">Economy</div>
        <div class="mt-4 space-y-2">
          <div class="font-serif font-bold text-lg text-slate-800 dark:text-white">🛏️ Ibis</div>
          <div class="font-serif font-bold text-lg text-slate-800 dark:text-white">🎨 Ibis Styles</div>
          <div class="font-serif font-bold text-lg text-slate-800 dark:text-white">🏃 Tribe</div>
        </div>
      </div>
    </div>
  </section>

  <!-- Elite Status Section -->
  <section id="elite">
    <h3 class="flex items-center gap-3 text-2xl font-bold text-slate-900 dark:text-white mb-6">
      <span class="text-3xl">👑</span> Elite Status Tiers
    </h3>
    
    <div class="space-y-4">
      <!-- Classic -->
      <div class="bg-slate-100 dark:bg-slate-800 p-6 rounded-2xl border-l-4 border-slate-400">
        <div class="flex items-center gap-3 mb-3">
          <span class="text-2xl">⚪</span>
          <h4 class="text-xl font-bold">Classic</h4>
          <span class="text-xs bg-slate-200 dark:bg-slate-700 px-2 py-1 rounded">Entry Level</span>
        </div>
        <p class="text-slate-600 dark:text-slate-400">Basic membership - start earning points on stays!</p>
      </div>
      
      <!-- Silver -->
      <div class="bg-gradient-to-r from-slate-100 to-slate-200 dark:from-slate-800 dark:to-slate-700 p-6 rounded-2xl border-l-4 border-slate-500">
        <div class="flex items-center gap-3 mb-3">
          <span class="text-2xl">🥈</span>
          <h4 class="text-xl font-bold">Silver</h4>
          <span class="text-xs bg-slate-300 dark:bg-slate-600 px-2 py-1 rounded">10 Nights or 2,000 Status Points</span>
        </div>
        <ul class="grid grid-cols-1 md:grid-cols-3 gap-2 text-sm">
          <li class="flex items-center gap-2 p-2 bg-white/50 dark:bg-black/20 rounded-lg">⏰ Late Checkout</li>
          <li class="flex items-center gap-2 p-2 bg-white/50 dark:bg-black/20 rounded-lg">🎉 Priority Welcome</li>
          <li class="flex items-center gap-2 p-2 bg-white/50 dark:bg-black/20 rounded-lg">🍹 Welcome Drink</li>
        </ul>
      </div>
      
      <!-- Gold -->
      <div class="bg-gradient-to-r from-yellow-100 to-amber-100 dark:from-yellow-900/30 dark:to-amber-900/30 p-6 rounded-2xl border-l-4 border-yellow-500">
        <div class="flex items-center gap-3 mb-3">
          <span class="text-2xl">🥇</span>
          <h4 class="text-xl font-bold text-yellow-700 dark:text-yellow-400">Gold</h4>
          <span class="text-xs bg-yellow-200 dark:bg-yellow-800 px-2 py-1 rounded">30 Nights or 7,000 Status Points</span>
        </div>
        <ul class="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm">
          <li class="flex items-center gap-2 p-2 bg-white/50 dark:bg-black/20 rounded-lg">🌅 Early Check-in OR Late Checkout</li>
          <li class="flex items-center gap-2 p-2 bg-white/50 dark:bg-black/20 rounded-lg">📅 Guaranteed Room (3 days before)</li>
          <li class="flex items-center gap-2 p-2 bg-white/50 dark:bg-black/20 rounded-lg">⬆️ Room Upgrade (Subject to Availability)</li>
          <li class="flex items-center gap-2 p-2 bg-white/50 dark:bg-black/20 rounded-lg">🎁 Welcome Amenity (Not at Ibis)</li>
        </ul>
      </div>
      
      <!-- Platinum -->
      <div class="bg-gradient-to-r from-slate-200 to-slate-300 dark:from-slate-700 dark:to-slate-600 p-6 rounded-2xl border-l-4 border-slate-600">
        <div class="flex items-center gap-3 mb-3">
          <span class="text-2xl">💎</span>
          <h4 class="text-xl font-bold">Platinum</h4>
          <span class="text-xs bg-slate-400 dark:bg-slate-500 text-white px-2 py-1 rounded">60 Nights or 14,000 Status Points</span>
        </div>
        <ul class="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm">
          <li class="flex items-center gap-2 p-3 bg-white/50 dark:bg-black/20 rounded-lg font-semibold">🎫 Suite Night Upgrade Vouchers (2 + 1 per 4,000 pts)</li>
          <li class="flex items-center gap-2 p-3 bg-white/50 dark:bg-black/20 rounded-lg">📅 Guaranteed Room (2 days before)</li>
          <li class="flex items-center gap-2 p-3 bg-white/50 dark:bg-black/20 rounded-lg">🌅 Early Check-in AND Late Checkout</li>
          <li class="flex items-center gap-2 p-3 bg-white/50 dark:bg-black/20 rounded-lg font-semibold">🛋️ Executive Lounge Access</li>
          <li class="flex items-center gap-2 p-3 bg-white/50 dark:bg-black/20 rounded-lg">📶 Premium Wi-Fi</li>
          <li class="flex items-center gap-2 p-3 bg-white/50 dark:bg-black/20 rounded-lg font-semibold">🥐 Free Breakfast (Asia-Pacific Only)</li>
          <li class="flex items-center gap-2 p-3 bg-white/50 dark:bg-black/20 rounded-lg">📞 Dedicated Customer Care Line</li>
        </ul>
        <div class="mt-3 p-3 bg-amber-100 dark:bg-amber-900/30 rounded-lg text-amber-800 dark:text-amber-300 text-sm">
          ⚠️ <strong>Note:</strong> Fairmont's Gold Lounge is an exception - not included in Platinum lounge access.
        </div>
      </div>
      
      <!-- Diamond -->
      <div class="bg-gradient-to-r from-purple-200 to-pink-200 dark:from-purple-900/40 dark:to-pink-900/40 p-6 rounded-2xl border-l-4 border-purple-600">
        <div class="flex items-center gap-3 mb-3">
          <span class="text-2xl">💠</span>
          <h4 class="text-xl font-bold text-purple-700 dark:text-purple-300">Diamond</h4>
          <span class="text-xs bg-purple-400 text-white px-2 py-1 rounded">Invite Only / Top Tier</span>
        </div>
        <ul class="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm">
          <li class="flex items-center gap-2 p-3 bg-white/50 dark:bg-black/20 rounded-lg font-semibold">🥐 Free Breakfast Worldwide (Weekends) + Daily in Asia-Pacific</li>
          <li class="flex items-center gap-2 p-3 bg-white/50 dark:bg-black/20 rounded-lg font-semibold">💶 €100 Dining & Spa Credit (as 100 Reward Points)</li>
          <li class="flex items-center gap-2 p-3 bg-white/50 dark:bg-black/20 rounded-lg">🎁 Gift Gold Status to a Friend</li>
        </ul>
      </div>
    </div>

    <!-- Status Validity -->
    <div class="mt-6 p-4 bg-slate-100 dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700">
      <h4 class="font-bold mb-2 flex items-center gap-2">⏰ Status Validity</h4>
      <ul class="text-sm text-slate-600 dark:text-slate-400 space-y-1">
        <li>• Status resets on <strong>31st December</strong> each year</li>
        <li>• Accor Plus members retain <strong>Silver status</strong> even if not progressed</li>
      </ul>
    </div>
  </section>

  <!-- Accor Plus Section -->
  <section id="accorplus" class="bg-gradient-to-br from-red-50 via-pink-50 to-rose-50 dark:from-red-900/10 dark:via-pink-900/10 dark:to-rose-900/10 p-8 rounded-3xl border border-red-200 dark:border-red-900/30">
    <h3 class="flex items-center gap-3 text-2xl font-bold text-red-600 dark:text-red-400 mb-6">
      <span class="text-3xl">🚀</span> Accor Plus: The Cheat Code
    </h3>
    <p class="mb-6 text-slate-700 dark:text-slate-300">Skip the grind! Pay for instant status and unlock exclusive dining/stay benefits.</p>

    <!-- Two Tiers -->
    <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
      <!-- Traveller -->
      <div class="bg-white dark:bg-slate-900 p-6 rounded-2xl shadow-lg border-t-4 border-blue-500">
        <div class="flex justify-between items-start mb-4">
          <div>
            <h4 class="text-xl font-bold">Traveller</h4>
            <p class="text-sm text-slate-500">Entry Tier</p>
          </div>
          <div class="text-right">
            <div class="text-2xl font-bold text-blue-600">₹7,080</div>
            <div class="text-xs text-slate-400 line-through">₹11,800</div>
          </div>
        </div>
        <ul class="space-y-2 text-sm">
          <li class="flex items-center gap-2">✅ Automatic Silver Status</li>
          <li class="flex items-center gap-2">✅ 10% off Best Available Rates</li>
          <li class="flex items-center gap-2">✅ Up to 50% off Food (15% Drinks) in Asia</li>
          <li class="flex items-center gap-2">✅ Red Hot Room Offers (up to 50% off)</li>
        </ul>
      </div>
      
      <!-- Explorer -->
      <div class="bg-white dark:bg-slate-900 p-6 rounded-2xl shadow-lg border-t-4 border-gold-500 relative overflow-hidden">
        <div class="absolute top-0 right-0 bg-gold-500 text-black text-xs font-bold px-3 py-1 rounded-bl-lg">BEST VALUE</div>
        <div class="flex justify-between items-start mb-4">
          <div>
            <h4 class="text-xl font-bold">Explorer</h4>
            <p class="text-sm text-slate-500">Premium Tier</p>
          </div>
          <div class="text-right">
            <div class="text-2xl font-bold text-gold-600">₹13,541</div>
            <div class="text-xs text-slate-400 line-through">₹15,930 or 12,000 pts</div>
          </div>
        </div>
        <ul class="space-y-2 text-sm">
          <li class="flex items-center gap-2">✅ All Traveller Benefits</li>
          <li class="flex items-center gap-2 font-bold text-gold-600">🌟 1 Complimentary Stay Night (₹6k-₹20k Value!)</li>
          <li class="flex items-center gap-2">✅ More Dining & Stay Vouchers</li>
        </ul>
      </div>
    </div>

    <!-- Voucher Benefits -->
    <div class="bg-white dark:bg-slate-900 p-6 rounded-2xl shadow-lg">
      <h4 class="text-lg font-bold mb-4 flex items-center gap-2">🎟️ Accor Plus Voucher Benefits (India & Sri Lanka)</h4>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 text-sm">
        <div class="p-3 bg-green-50 dark:bg-green-900/20 rounded-lg border border-green-200 dark:border-green-800">
          <div class="font-bold text-green-700 dark:text-green-400">🍽️ Lunch Buffet for Two</div>
          <div class="text-slate-600 dark:text-slate-400">All India & Sri Lanka (2 Certificates)</div>
        </div>
        <div class="p-3 bg-pink-50 dark:bg-pink-900/20 rounded-lg border border-pink-200 dark:border-pink-800">
          <div class="font-bold text-pink-700 dark:text-pink-400">🎂 Birthday Cake (1kg)</div>
          <div class="text-slate-600 dark:text-slate-400">Celebrate with Accor!</div>
        </div>
        <div class="p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-200 dark:border-blue-800">
          <div class="font-bold text-blue-700 dark:text-blue-400">🍷 Bottle of Wine</div>
          <div class="text-slate-600 dark:text-slate-400">Table of 4 at Regional Hotel</div>
        </div>
        <div class="p-3 bg-amber-50 dark:bg-amber-900/20 rounded-lg border border-amber-200 dark:border-amber-800">
          <div class="font-bold text-amber-700 dark:text-amber-400">🥐 Breakfast for Two</div>
          <div class="text-slate-600 dark:text-slate-400">At Member's Rate (2 Certificates)</div>
        </div>
        <div class="p-3 bg-purple-50 dark:bg-purple-900/20 rounded-lg border border-purple-200 dark:border-purple-800">
          <div class="font-bold text-purple-700 dark:text-purple-400">⬆️ Room Upgrade</div>
          <div class="text-slate-600 dark:text-slate-400">No cap on nights!</div>
        </div>
        <div class="p-3 bg-red-50 dark:bg-red-900/20 rounded-lg border border-red-200 dark:border-red-800">
          <div class="font-bold text-red-700 dark:text-red-400">👨‍👩‍👧 Family Package ₹3,999+Tax</div>
          <div class="text-slate-600 dark:text-slate-400">Standard Room + Breakfast + Meal (2 Certs)</div>
        </div>
        <div class="p-3 bg-teal-50 dark:bg-teal-900/20 rounded-lg border border-teal-200 dark:border-teal-800">
          <div class="font-bold text-teal-700 dark:text-teal-400">👥 40% Off Group Dining</div>
          <div class="text-slate-600 dark:text-slate-400">4-10 people across India & Sri Lanka</div>
        </div>
        <div class="p-3 bg-indigo-50 dark:bg-indigo-900/20 rounded-lg border border-indigo-200 dark:border-indigo-800">
          <div class="font-bold text-indigo-700 dark:text-indigo-400">🎉 50% Off Large Groups</div>
          <div class="text-slate-600 dark:text-slate-400">10-15 people (2 Certificates)</div>
        </div>
        <div class="p-3 bg-orange-50 dark:bg-orange-900/20 rounded-lg border border-orange-200 dark:border-orange-800">
          <div class="font-bold text-orange-700 dark:text-orange-400">🥡 ₹500 Off Bakery</div>
          <div class="text-slate-600 dark:text-slate-400">Min ₹1,000 purchase</div>
        </div>
      </div>
      
      <div class="mt-4 p-4 bg-emerald-100 dark:bg-emerald-900/30 rounded-xl text-emerald-800 dark:text-emerald-300">
        <strong>💡 Pro Tip:</strong> Get Accor Plus Explorer <strong>FREE</strong> with Axis Bank Reserve credit card!
      </div>
    </div>
  </section>

  <!-- How to Earn Points -->
  <section id="earn">
    <h3 class="flex items-center gap-3 text-2xl font-bold text-slate-900 dark:text-white mb-6">
      <span class="text-3xl">💰</span> How to Earn Accor Points
    </h3>

    <!-- Hotel Stays -->
    <div class="mb-8 p-6 bg-slate-100 dark:bg-slate-800 rounded-2xl">
      <h4 class="font-bold text-lg mb-4 flex items-center gap-2">🏨 Hotel Stays</h4>
      <p class="text-slate-600 dark:text-slate-400 mb-4">Earn points on every eligible stay. Points vary by tier and property type.</p>
      <a href="https://all.accor.com/loyalty-program/earn/stay/index.en.shtml" target="_blank" class="inline-flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors text-sm font-medium">
        🔗 Use Accor's Points Calculator
      </a>
    </div>

    <!-- Credit Card Transfers -->
    <div class="bg-white dark:bg-slate-900 p-6 rounded-2xl shadow-lg border border-slate-200 dark:border-slate-700 mb-8">
      <h4 class="font-bold text-lg mb-6 flex items-center gap-2">💳 Credit Card Transfer Partners (India)</h4>
      
      <div class="space-y-6">
        <!-- Axis Bank -->
        <div class="p-4 bg-gradient-to-r from-maroon-50 to-red-50 dark:from-red-900/20 dark:to-maroon-900/20 rounded-xl border border-red-200 dark:border-red-800">
          <div class="flex items-center gap-3 mb-4">
            <span class="text-2xl">🏦</span>
            <h5 class="font-bold text-lg">Axis Bank</h5>
          </div>
          <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div class="p-3 bg-white/80 dark:bg-black/30 rounded-lg text-center">
              <div class="text-xs text-slate-500 uppercase mb-1">Super Premium</div>
              <div class="font-bold text-lg">5 : 4</div>
              <div class="text-xs text-slate-500">Reserve, Magnus, Burgundy Private</div>
            </div>
            <div class="p-3 bg-white/80 dark:bg-black/30 rounded-lg text-center">
              <div class="text-xs text-slate-500 uppercase mb-1">Other Edge Cards</div>
              <div class="font-bold text-lg">10 : 1</div>
              <div class="text-xs text-slate-500">Standard transfer ratio</div>
            </div>
            <div class="p-3 bg-white/80 dark:bg-black/30 rounded-lg text-center">
              <div class="text-xs text-slate-500 uppercase mb-1">Atlas (Edge Miles)</div>
              <div class="font-bold text-lg">1 : 2</div>
              <div class="text-xs text-slate-500">Miles to Accor Points</div>
            </div>
          </div>
        </div>
        
        <!-- HDFC -->
        <div class="p-4 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-xl border border-blue-200 dark:border-blue-800">
          <div class="flex items-center gap-3 mb-3">
            <span class="text-2xl">🏦</span>
            <h5 class="font-bold text-lg">HDFC Bank</h5>
          </div>
          <p class="text-slate-600 dark:text-slate-400">Transfer via HDFC Infinia and Diners Black to airline partners, then to Accor.</p>
        </div>
      </div>
    </div>

    <!-- Airline Transfers -->
    <div class="bg-white dark:bg-slate-900 p-6 rounded-2xl shadow-lg border border-slate-200 dark:border-slate-700 mb-8">
      <h4 class="font-bold text-lg mb-4 flex items-center gap-2">✈️ Airline Transfer Partners → Accor</h4>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div class="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg text-center">
          <div class="text-2xl mb-2">🇫🇷</div>
          <div class="font-bold">Flying Blue</div>
          <div class="text-xl font-bold text-blue-600">4 : 1</div>
          <div class="text-xs text-slate-500">4,000 FB → 1,000 Accor</div>
        </div>
        <div class="p-4 bg-purple-50 dark:bg-purple-900/20 rounded-lg text-center">
          <div class="text-2xl mb-2">🇶🇦</div>
          <div class="font-bold">Qatar Airways</div>
          <div class="text-xl font-bold text-purple-600">4.5 : 1</div>
          <div class="text-xs text-slate-500">4,500 Qmiles → 1,000 Accor</div>
        </div>
        <div class="p-4 bg-cyan-50 dark:bg-cyan-900/20 rounded-lg text-center">
          <div class="text-2xl mb-2">🇫🇮</div>
          <div class="font-bold">Finnair Plus</div>
          <div class="text-xl font-bold text-cyan-600">7 : 1</div>
          <div class="text-xs text-slate-500">3,500 Finnair → 500 Accor</div>
        </div>
      </div>
    </div>

    <!-- ALL Meeting Planner -->
    <div class="p-6 bg-slate-100 dark:bg-slate-800 rounded-2xl">
      <h4 class="font-bold text-lg mb-4 flex items-center gap-2">📋 ALL Meeting Planner</h4>
      <p class="text-slate-600 dark:text-slate-400 mb-4">Book corporate events and meetings to earn points! Works at most Accor brands.</p>
      <a href="https://all.accor.com/loyalty-program/earn/meetingplanner/index.en.shtml" target="_blank" class="inline-flex items-center gap-2 bg-slate-700 text-white px-4 py-2 rounded-lg hover:bg-slate-600 transition-colors text-sm font-medium">
        🔗 Learn More
      </a>
    </div>
  </section>

  <!-- How to Burn Points -->
  <section id="burn">
    <h3 class="flex items-center gap-3 text-2xl font-bold text-slate-900 dark:text-white mb-6">
      <span class="text-3xl">🔥</span> How to Burn Accor Points
    </h3>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
      <!-- Hotel Stays -->
      <div class="bg-white dark:bg-slate-900 p-6 rounded-2xl shadow-lg border border-slate-200 dark:border-slate-700">
        <h4 class="font-bold text-lg mb-4 flex items-center gap-2">🏨 Hotel Stays</h4>
        <ul class="space-y-3 text-sm text-slate-600 dark:text-slate-400">
          <li class="flex items-start gap-2">
            <span class="text-green-500 mt-1">✓</span>
            <span>Use "Pay at Hotel" or "Pay with Points" option</span>
          </li>
          <li class="flex items-start gap-2">
            <span class="text-green-500 mt-1">✓</span>
            <span>Pay part with points, rest with card</span>
          </li>
          <li class="flex items-start gap-2">
            <span class="text-amber-500 mt-1">⚠️</span>
            <span><strong>Heads up:</strong> Some hotels (e.g., Pullman Delhi) don't allow tax payment with points</span>
          </li>
        </ul>
        <div class="mt-4 p-3 bg-emerald-100 dark:bg-emerald-900/30 rounded-lg text-emerald-800 dark:text-emerald-300 text-sm">
          <strong>💡 Pro Tip:</strong> Pay at hotel with points to <strong>still earn status points</strong> - helps you climb tiers!
        </div>
      </div>

      <!-- Meals -->
      <div class="bg-white dark:bg-slate-900 p-6 rounded-2xl shadow-lg border border-slate-200 dark:border-slate-700">
        <h4 class="font-bold text-lg mb-4 flex items-center gap-2">🍽️ Meals & Dining</h4>
        <p class="text-slate-600 dark:text-slate-400">Use points to pay for dining at Accor hotel restaurants.</p>
      </div>
    </div>
  </section>

  <!-- Airline Transfer Partners (Burn) -->
  <section id="airlines" class="mt-8">
    <h3 class="flex items-center gap-3 text-2xl font-bold text-slate-900 dark:text-white mb-6">
      <span class="text-3xl">✈️</span> Accor → Airline Transfer Partners
    </h3>
    
    <p class="mb-6 text-slate-600 dark:text-slate-400">Convert your Accor points to airline miles. Here are ALL the partners:</p>
    
    <div class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-3 mb-8">
      <div class="p-3 bg-slate-100 dark:bg-slate-800 rounded-lg text-center text-sm">Aegean Miles+Bonus</div>
      <div class="p-3 bg-slate-100 dark:bg-slate-800 rounded-lg text-center text-sm">Aeroméxico</div>
      <div class="p-3 bg-slate-100 dark:bg-slate-800 rounded-lg text-center text-sm">Air Canada Aeroplan</div>
      <div class="p-3 bg-slate-100 dark:bg-slate-800 rounded-lg text-center text-sm">Air China Phoenix</div>
      <div class="p-3 bg-slate-100 dark:bg-slate-800 rounded-lg text-center text-sm">Flying Blue</div>
      <div class="p-3 bg-slate-100 dark:bg-slate-800 rounded-lg text-center text-sm">Avianca LifeMiles</div>
      <div class="p-3 bg-slate-100 dark:bg-slate-800 rounded-lg text-center text-sm">Azul TudoAzul</div>
      <div class="p-3 bg-slate-100 dark:bg-slate-800 rounded-lg text-center text-sm">British Airways</div>
      <div class="p-3 bg-slate-100 dark:bg-slate-800 rounded-lg text-center text-sm">Cathay Asia Miles</div>
      <div class="p-3 bg-slate-100 dark:bg-slate-800 rounded-lg text-center text-sm">Delta SkyMiles</div>
      <div class="p-3 bg-slate-100 dark:bg-slate-800 rounded-lg text-center text-sm">Emirates Skywards</div>
      <div class="p-3 bg-slate-100 dark:bg-slate-800 rounded-lg text-center text-sm">Etihad Guest</div>
      <div class="p-3 bg-slate-100 dark:bg-slate-800 rounded-lg text-center text-sm">Finnair Plus</div>
      <div class="p-3 bg-slate-100 dark:bg-slate-800 rounded-lg text-center text-sm">Hainan Fortune Wings</div>
      <div class="p-3 bg-slate-100 dark:bg-slate-800 rounded-lg text-center text-sm">Iberia Plus</div>
      <div class="p-3 bg-slate-100 dark:bg-slate-800 rounded-lg text-center text-sm">JAL Mileage Bank</div>
      <div class="p-3 bg-slate-100 dark:bg-slate-800 rounded-lg text-center text-sm">ITA Airways Volare</div>
      <div class="p-3 bg-slate-100 dark:bg-slate-800 rounded-lg text-center text-sm">Korean Air SKYPASS</div>
      <div class="p-3 bg-slate-100 dark:bg-slate-800 rounded-lg text-center text-sm">LATAM Pass</div>
      <div class="p-3 bg-slate-100 dark:bg-slate-800 rounded-lg text-center text-sm">Oman Air Sindbad</div>
      <div class="p-3 bg-slate-100 dark:bg-slate-800 rounded-lg text-center text-sm">Qantas Frequent Flyer</div>
      <div class="p-3 bg-slate-100 dark:bg-slate-800 rounded-lg text-center text-sm">Qatar Privilege Club</div>
      <div class="p-3 bg-slate-100 dark:bg-slate-800 rounded-lg text-center text-sm">Singapore KrisFlyer</div>
      <div class="p-3 bg-slate-100 dark:bg-slate-800 rounded-lg text-center text-sm">TAP Miles&Go</div>
      <div class="p-3 bg-slate-100 dark:bg-slate-800 rounded-lg text-center text-sm">Thai Royal Orchid</div>
      <div class="p-3 bg-slate-100 dark:bg-slate-800 rounded-lg text-center text-sm">Turkish Miles&Smiles</div>
      <div class="p-3 bg-slate-100 dark:bg-slate-800 rounded-lg text-center text-sm">United MileagePlus</div>
      <div class="p-3 bg-slate-100 dark:bg-slate-800 rounded-lg text-center text-sm">Virgin Velocity</div>
    </div>

    <!-- Best Ratios -->
    <div class="bg-gradient-to-r from-emerald-50 to-teal-50 dark:from-emerald-900/20 dark:to-teal-900/20 p-6 rounded-2xl border border-emerald-200 dark:border-emerald-800">
      <h4 class="font-bold text-lg mb-4 flex items-center gap-2">⭐ Best Transfer Ratios</h4>
      <div class="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div class="p-4 bg-white/80 dark:bg-black/30 rounded-lg text-center">
          <div class="font-bold text-lg">Qantas</div>
          <div class="text-2xl font-bold text-emerald-600">1 : 1</div>
          <div class="text-xs text-slate-500">2,000 Accor = 2,000 Qantas</div>
        </div>
        <div class="p-4 bg-white/80 dark:bg-black/30 rounded-lg text-center">
          <div class="font-bold text-lg">Iberia Avios</div>
          <div class="text-2xl font-bold text-emerald-600">1 : 1</div>
          <div class="text-xs text-slate-500">3,000 Accor = 3,000 Avios</div>
        </div>
        <div class="p-4 bg-white/80 dark:bg-black/30 rounded-lg text-center">
          <div class="font-bold text-lg">ITA Volare</div>
          <div class="text-2xl font-bold text-emerald-600">1 : 1.25</div>
          <div class="text-xs text-slate-500">4,000 Accor = 5,000 Volare</div>
        </div>
        <div class="p-4 bg-white/80 dark:bg-black/30 rounded-lg text-center">
          <div class="font-bold text-lg">Delta</div>
          <div class="text-2xl font-bold text-amber-600">2 : 1</div>
          <div class="text-xs text-slate-500">4,000 Accor = 2,000 Delta</div>
        </div>
      </div>
    </div>
  </section>

  <!-- Points Validity -->
  <section id="validity" class="mt-8">
    <h3 class="flex items-center gap-3 text-2xl font-bold text-slate-900 dark:text-white mb-6">
      <span class="text-3xl">⏰</span> Points Validity
    </h3>
    <div class="bg-amber-50 dark:bg-amber-900/20 p-6 rounded-2xl border border-amber-200 dark:border-amber-800">
      <p class="text-lg text-amber-800 dark:text-amber-300 mb-4">Your Accor points expire after <strong>365 days</strong> from:</p>
      <ul class="space-y-2 text-amber-700 dark:text-amber-400">
        <li class="flex items-center gap-2">📅 Last check-out date</li>
        <li class="flex items-center gap-2">💰 Last point earn/burn activity</li>
        <li class="flex items-center gap-2">🔄 Last point conversion</li>
      </ul>
      <div class="mt-4 p-3 bg-white dark:bg-black/20 rounded-lg text-sm">
        <strong>💡 Keep them alive:</strong> Any earning or burning activity resets the 365-day clock!
      </div>
    </div>
  </section>

  <!-- Sweet Spots -->
  <section id="sweetspots" class="mt-8">
    <h3 class="flex items-center gap-3 text-2xl font-bold text-slate-900 dark:text-white mb-6">
      <span class="text-3xl">🍬</span> Sweet Spots & Pro Tips
    </h3>

    <div class="space-y-4">
      <div class="bg-gradient-to-r from-yellow-50 to-amber-50 dark:from-yellow-900/20 dark:to-amber-900/20 p-6 rounded-2xl border border-yellow-200 dark:border-yellow-800">
        <h4 class="font-bold text-lg mb-2 flex items-center gap-2">🏨 Free Stay Night Value</h4>
        <p class="text-slate-700 dark:text-slate-300">Your Explorer free night can be worth <strong>₹15,000-₹20,000</strong> at properties like Sofitel BKC or Sofitel Mumbai. Worldwide, Sofitel and Fairmont properties accept "Stay Plus" redemptions.</p>
      </div>

      <div class="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 p-6 rounded-2xl border border-blue-200 dark:border-blue-800">
        <h4 class="font-bold text-lg mb-2 flex items-center gap-2">💳 Axis Reserve Hack</h4>
        <p class="text-slate-700 dark:text-slate-300">Get <strong>2 complimentary nights</strong> with Axis Reserve's bundled Accor Plus. <span class="text-amber-600 font-medium">Caveat:</span> You cannot use both nights consecutively at the same property.</p>
      </div>

      <div class="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 p-6 rounded-2xl border border-green-200 dark:border-green-800">
        <h4 class="font-bold text-lg mb-2 flex items-center gap-2">⬆️ Maximize Points Value</h4>
        <p class="text-slate-700 dark:text-slate-300">Choose <strong>"Pay at Hotel"</strong> and settle with points. Why? You still earn <strong>status points</strong> that help you climb elite tiers!</p>
      </div>

      <div class="bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 p-6 rounded-2xl border border-purple-200 dark:border-purple-800">
        <h4 class="font-bold text-lg mb-2 flex items-center gap-2">🎫 Upgrade Your Redemption</h4>
        <p class="text-slate-700 dark:text-slate-300">Stay Plus nights default to base rooms. You can always upgrade to higher categories by paying the difference with points, cash, or card!</p>
      </div>

      <div class="bg-gradient-to-r from-slate-100 to-slate-200 dark:from-slate-800 dark:to-slate-700 p-6 rounded-2xl border border-slate-300 dark:border-slate-600">
        <h4 class="font-bold text-lg mb-2 flex items-center gap-2">🥇 Fast Track to Gold</h4>
        <p class="text-slate-700 dark:text-slate-300">Two ways to get instant Gold status:</p>
        <ol class="list-decimal list-inside mt-2 space-y-1 text-slate-600 dark:text-slate-400">
          <li>Buy ALL Plus Voyageur card for <strong>€199</strong></li>
          <li>Buy at least one share of Accor Hotels on European stock exchange 📈</li>
        </ol>
      </div>
    </div>
  </section>

  <!-- Quote -->
  <div class="my-8 text-center p-10 bg-gradient-to-br from-slate-900 to-slate-800 rounded-3xl text-white">
    <p class="text-3xl font-serif italic mb-4">"Don't just stay. Live Limitless."</p>
    <p class="text-gold-400 text-sm uppercase tracking-widest">— ALL Accor Live Limitless</p>
  </div>

</div>
`;
