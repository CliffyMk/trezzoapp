export const marriottGuideContent = `
<div class="space-y-12 font-sans text-slate-800 dark:text-slate-200">

  <!-- Hero Section -->
  <div class="relative bg-gradient-to-br from-slate-900 via-red-900 to-slate-900 p-10 rounded-3xl shadow-2xl overflow-hidden text-white">
    <div class="relative z-10">
      <div class="flex items-center gap-3 mb-4">
        <span class="bg-red-500 text-white px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">Complete Guide</span>
        <span class="text-red-300 text-sm">🇮🇳 India Edition</span>
      </div>
      <h2 class="text-4xl md:text-5xl font-extrabold mb-4 font-serif leading-tight">Marriott Bonvoy</h2>
      <p class="text-xl opacity-90 max-w-2xl">The world's largest hotel loyalty program. 30+ brands, 8,000+ properties, and endless ways to earn free nights. Your gateway to luxury travel.</p>
    </div>
    <div class="absolute top-0 right-0 -mr-20 -mt-20 w-80 h-80 bg-red-500 opacity-10 rounded-full blur-3xl"></div>
    <div class="absolute bottom-0 left-0 -ml-20 -mb-20 w-60 h-60 bg-white opacity-5 rounded-full blur-2xl"></div>
  </div>

  <!-- Table of Contents -->
  <nav class="bg-slate-100 dark:bg-slate-800/50 p-6 rounded-2xl border border-slate-200 dark:border-slate-700">
    <h3 class="text-lg font-bold mb-4 flex items-center gap-2">📋 What's Inside</h3>
    <div class="grid grid-cols-2 md:grid-cols-4 gap-3 text-sm">
      <a href="#elite" class="flex items-center gap-2 p-2 rounded-lg hover:bg-white dark:hover:bg-slate-700 transition-colors">👑 Elite Tiers</a>
      <a href="#lifetime" class="flex items-center gap-2 p-2 rounded-lg hover:bg-white dark:hover:bg-slate-700 transition-colors">♾️ Lifetime Status</a>
      <a href="#fasttrack" class="flex items-center gap-2 p-2 rounded-lg hover:bg-white dark:hover:bg-slate-700 transition-colors">🚀 Fast Track</a>
      <a href="#breakfast" class="flex items-center gap-2 p-2 rounded-lg hover:bg-white dark:hover:bg-slate-700 transition-colors">🥐 Breakfast</a>
      <a href="#programs" class="flex items-center gap-2 p-2 rounded-lg hover:bg-white dark:hover:bg-slate-700 transition-colors">⭐ STARS & Luminous</a>
      <a href="#club" class="flex items-center gap-2 p-2 rounded-lg hover:bg-white dark:hover:bg-slate-700 transition-colors">🎫 Club Marriott</a>
      <a href="#earn" class="flex items-center gap-2 p-2 rounded-lg hover:bg-white dark:hover:bg-slate-700 transition-colors">💰 Earn Points</a>
      <a href="#redeem" class="flex items-center gap-2 p-2 rounded-lg hover:bg-white dark:hover:bg-slate-700 transition-colors">🎁 Redeem Points</a>
    </div>
  </nav>

  <!-- Elite Status Tiers -->
  <section id="elite">
    <h3 class="flex items-center gap-3 text-2xl font-bold text-slate-900 dark:text-white mb-6">
      <span class="text-3xl">👑</span> Elite Status Tiers
    </h3>
    
    <div class="space-y-4">
      <!-- Member -->
      <div class="bg-slate-100 dark:bg-slate-800 p-6 rounded-2xl border-l-4 border-slate-400">
        <div class="flex items-center gap-3 mb-3">
          <span class="text-2xl">⚪</span>
          <h4 class="text-xl font-bold">Member</h4>
          <span class="text-xs bg-slate-200 dark:bg-slate-700 px-2 py-1 rounded">Entry Level</span>
        </div>
        <ul class="grid grid-cols-1 md:grid-cols-3 gap-2 text-sm text-slate-600 dark:text-slate-400">
          <li class="flex items-center gap-2 p-2 bg-white/50 dark:bg-black/20 rounded-lg">💰 Earn points per $ spent</li>
          <li class="flex items-center gap-2 p-2 bg-white/50 dark:bg-black/20 rounded-lg">🏷️ Member rates access</li>
          <li class="flex items-center gap-2 p-2 bg-white/50 dark:bg-black/20 rounded-lg">📶 Free Wi-Fi</li>
          <li class="flex items-center gap-2 p-2 bg-white/50 dark:bg-black/20 rounded-lg">📱 Mobile check-in</li>
        </ul>
      </div>
      
      <!-- Silver -->
      <div class="bg-gradient-to-r from-slate-100 to-slate-200 dark:from-slate-800 dark:to-slate-700 p-6 rounded-2xl border-l-4 border-slate-500">
        <div class="flex items-center justify-between mb-3">
          <div class="flex items-center gap-3">
            <span class="text-2xl">🥈</span>
            <h4 class="text-xl font-bold">Silver Elite</h4>
          </div>
          <span class="text-xs bg-slate-300 dark:bg-slate-600 px-3 py-1 rounded-full font-bold">10 Nights</span>
        </div>
        <ul class="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm">
          <li class="flex items-center gap-2 p-2 bg-white/50 dark:bg-black/20 rounded-lg">📈 <strong>+10%</strong> Bonus Points</li>
          <li class="flex items-center gap-2 p-2 bg-white/50 dark:bg-black/20 rounded-lg">⏰ Late Checkout (availability)</li>
          <li class="flex items-center gap-2 p-2 bg-white/50 dark:bg-black/20 rounded-lg">✅ Reservation Guarantee</li>
          <li class="flex items-center gap-2 p-2 bg-white/50 dark:bg-black/20 rounded-lg">📞 Elite Reservation Line</li>
        </ul>
      </div>
      
      <!-- Gold -->
      <div class="bg-gradient-to-r from-yellow-100 to-amber-100 dark:from-yellow-900/30 dark:to-amber-900/30 p-6 rounded-2xl border-l-4 border-yellow-500">
        <div class="flex items-center justify-between mb-3">
          <div class="flex items-center gap-3">
            <span class="text-2xl">🥇</span>
            <h4 class="text-xl font-bold text-yellow-700 dark:text-yellow-400">Gold Elite</h4>
          </div>
          <span class="text-xs bg-yellow-200 dark:bg-yellow-800 px-3 py-1 rounded-full font-bold">25 Nights</span>
        </div>
        <ul class="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm">
          <li class="flex items-center gap-2 p-3 bg-white/50 dark:bg-black/20 rounded-lg font-semibold">📈 <strong>+25%</strong> Bonus Points</li>
          <li class="flex items-center gap-2 p-3 bg-white/50 dark:bg-black/20 rounded-lg">⏰ 2 PM Late Checkout</li>
          <li class="flex items-center gap-2 p-3 bg-white/50 dark:bg-black/20 rounded-lg">🎁 Welcome Gift (Points)</li>
          <li class="flex items-center gap-2 p-3 bg-white/50 dark:bg-black/20 rounded-lg font-semibold">⬆️ Room Upgrade (incl. Suites!)</li>
        </ul>
      </div>
      
      <!-- Platinum -->
      <div class="bg-gradient-to-r from-slate-200 to-slate-300 dark:from-slate-700 dark:to-slate-600 p-6 rounded-2xl border-l-4 border-slate-600">
        <div class="flex items-center justify-between mb-3">
          <div class="flex items-center gap-3">
            <span class="text-2xl">💎</span>
            <h4 class="text-xl font-bold">Platinum Elite</h4>
          </div>
          <span class="text-xs bg-slate-400 dark:bg-slate-500 text-white px-3 py-1 rounded-full font-bold">50 Nights</span>
        </div>
        <ul class="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm">
          <li class="flex items-center gap-2 p-3 bg-white/50 dark:bg-black/20 rounded-lg font-semibold">📈 <strong>+50%</strong> Bonus Points</li>
          <li class="flex items-center gap-2 p-3 bg-white/50 dark:bg-black/20 rounded-lg">⏰ 4 PM Late Checkout</li>
          <li class="flex items-center gap-2 p-3 bg-white/50 dark:bg-black/20 rounded-lg font-semibold">🎁 Welcome Gift (Points, Breakfast, OR Amenity)</li>
          <li class="flex items-center gap-2 p-3 bg-white/50 dark:bg-black/20 rounded-lg font-semibold">⬆️ Suite Upgrades</li>
          <li class="flex items-center gap-2 p-3 bg-white/50 dark:bg-black/20 rounded-lg font-semibold">🛋️ Lounge Access</li>
          <li class="flex items-center gap-2 p-3 bg-white/50 dark:bg-black/20 rounded-lg">🎄 Annual Gift Choice (Gift Silver to Friend)</li>
        </ul>
      </div>
      
      <!-- Titanium -->
      <div class="bg-gradient-to-r from-cyan-100 to-teal-100 dark:from-cyan-900/30 dark:to-teal-900/30 p-6 rounded-2xl border-l-4 border-cyan-600">
        <div class="flex items-center justify-between mb-3">
          <div class="flex items-center gap-3">
            <span class="text-2xl">🔷</span>
            <h4 class="text-xl font-bold text-cyan-700 dark:text-cyan-400">Titanium Elite</h4>
          </div>
          <span class="text-xs bg-cyan-200 dark:bg-cyan-800 px-3 py-1 rounded-full font-bold">75 Nights</span>
        </div>
        <ul class="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm">
          <li class="flex items-center gap-2 p-3 bg-white/50 dark:bg-black/20 rounded-lg font-semibold">📈 <strong>+75%</strong> Bonus Points</li>
          <li class="flex items-center gap-2 p-3 bg-white/50 dark:bg-black/20 rounded-lg font-semibold">🎁 Additional Choice Benefit @ 75 Nights</li>
          <li class="flex items-center gap-2 p-3 bg-white/50 dark:bg-black/20 rounded-lg">📅 48-Hour Room Guarantee</li>
          <li class="flex items-center gap-2 p-3 bg-white/50 dark:bg-black/20 rounded-lg font-semibold">✈️ United MileagePlus Premier Silver (RewardsPlus)</li>
        </ul>
      </div>
      
      <!-- Ambassador -->
      <div class="bg-gradient-to-r from-purple-200 to-pink-200 dark:from-purple-900/40 dark:to-pink-900/40 p-6 rounded-2xl border-l-4 border-purple-600">
        <div class="flex items-center justify-between mb-3">
          <div class="flex items-center gap-3">
            <span class="text-2xl">👔</span>
            <h4 class="text-xl font-bold text-purple-700 dark:text-purple-300">Ambassador Elite</h4>
          </div>
          <span class="text-xs bg-purple-400 text-white px-3 py-1 rounded-full font-bold">100 Nights + $20k Spend</span>
        </div>
        <ul class="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm">
          <li class="flex items-center gap-2 p-3 bg-white/50 dark:bg-black/20 rounded-lg font-semibold">🧑‍💼 Personal Marriott Ambassador</li>
          <li class="flex items-center gap-2 p-3 bg-white/50 dark:bg-black/20 rounded-lg">📞 24/7 Ambassador Service</li>
          <li class="flex items-center gap-2 p-3 bg-white/50 dark:bg-black/20 rounded-lg font-semibold">🕐 Your24™ (Choose Check-in/out Times)</li>
        </ul>
      </div>
    </div>
  </section>

  <!-- Lifetime Status -->
  <section id="lifetime" class="bg-gradient-to-br from-amber-50 to-yellow-50 dark:from-amber-900/10 dark:to-yellow-900/10 p-8 rounded-3xl border border-amber-200 dark:border-amber-900/30">
    <h3 class="flex items-center gap-3 text-2xl font-bold text-amber-700 dark:text-amber-400 mb-6">
      <span class="text-3xl">♾️</span> Lifetime Elite Status
    </h3>
    <p class="mb-6 text-slate-700 dark:text-slate-300">Lock in your status forever. Here's what it takes:</p>
    
    <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
      <div class="bg-white dark:bg-slate-900 p-5 rounded-2xl shadow-lg text-center">
        <div class="text-3xl mb-2">🥈</div>
        <h4 class="font-bold text-lg mb-2">Lifetime Silver</h4>
        <div class="text-2xl font-bold text-slate-600 dark:text-slate-300">250 Nights</div>
        <div class="text-sm text-slate-500">+ 5 Years at Silver or higher</div>
      </div>
      <div class="bg-white dark:bg-slate-900 p-5 rounded-2xl shadow-lg text-center">
        <div class="text-3xl mb-2">🥇</div>
        <h4 class="font-bold text-lg mb-2">Lifetime Gold</h4>
        <div class="text-2xl font-bold text-yellow-600 dark:text-yellow-400">400 Nights</div>
        <div class="text-sm text-slate-500">+ 7 Years at Gold or higher</div>
      </div>
      <div class="bg-white dark:bg-slate-900 p-5 rounded-2xl shadow-lg text-center">
        <div class="text-3xl mb-2">💎</div>
        <h4 class="font-bold text-lg mb-2">Lifetime Platinum</h4>
        <div class="text-2xl font-bold text-purple-600 dark:text-purple-400">600 Nights</div>
        <div class="text-sm text-slate-500">+ 10 Years at Platinum or higher</div>
      </div>
    </div>
  </section>

  <!-- Fast Track Tips -->
  <section id="fasttrack">
    <h3 class="flex items-center gap-3 text-2xl font-bold text-slate-900 dark:text-white mb-6">
      <span class="text-3xl">🚀</span> Fast Track to Elite Status
    </h3>

    <div class="space-y-4">
      <!-- Status Match -->
      <div class="bg-white dark:bg-slate-900 p-6 rounded-2xl shadow-lg border border-slate-200 dark:border-slate-700">
        <h4 class="font-bold text-lg mb-3 flex items-center gap-2">🔄 Status Match</h4>
        <p class="text-slate-600 dark:text-slate-400 mb-3">Already have elite status with another program? Marriott may offer a <strong>Status Match</strong> or <strong>Fast Track</strong> (90-day trial to complete stays). Call the Marriott Bonvoy helpline to inquire!</p>
      </div>

      <!-- Challenges -->
      <div class="bg-white dark:bg-slate-900 p-6 rounded-2xl shadow-lg border border-slate-200 dark:border-slate-700">
        <h4 class="font-bold text-lg mb-3 flex items-center gap-2">🏆 Gold / Platinum Challenge</h4>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div class="p-4 bg-yellow-50 dark:bg-yellow-900/20 rounded-xl text-center">
            <div class="text-2xl mb-2">🥇</div>
            <div class="font-bold">Gold Challenge</div>
            <div class="text-2xl font-bold text-yellow-600">8 Nights</div>
            <div class="text-xs text-slate-500">in 90 days</div>
          </div>
          <div class="p-4 bg-slate-100 dark:bg-slate-800 rounded-xl text-center">
            <div class="text-2xl mb-2">💎</div>
            <div class="font-bold">Platinum Challenge</div>
            <div class="text-2xl font-bold text-slate-600 dark:text-slate-300">18 Nights</div>
            <div class="text-xs text-slate-500">in 90 days</div>
          </div>
        </div>
        <p class="text-sm text-amber-600 dark:text-amber-400 mt-4">⚠️ Only direct bookings count. Third-party bookings excluded.</p>
      </div>

      <!-- Double Elite Nights -->
      <div class="bg-white dark:bg-slate-900 p-6 rounded-2xl shadow-lg border border-slate-200 dark:border-slate-700">
        <h4 class="font-bold text-lg mb-3 flex items-center gap-2">2️⃣ Double Elite Nights Promo</h4>
        <p class="text-slate-600 dark:text-slate-400">Marriott periodically offers <strong>2x Elite Nights</strong> promotions. Enrollment required - watch for announcements!</p>
      </div>

      <!-- Credit Cards -->
      <div class="bg-gradient-to-r from-red-50 to-pink-50 dark:from-red-900/20 dark:to-pink-900/20 p-6 rounded-2xl border border-red-200 dark:border-red-800">
        <h4 class="font-bold text-lg mb-4 flex items-center gap-2">💳 Credit Card Status (India)</h4>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div class="bg-white dark:bg-slate-900 p-4 rounded-xl text-center">
            <div class="text-xl font-bold mb-1">AMEX Centurion</div>
            <div class="text-yellow-600 font-bold">Gold Elite</div>
            <div class="text-xs text-slate-500">While card is active</div>
          </div>
          <div class="bg-white dark:bg-slate-900 p-4 rounded-xl text-center">
            <div class="text-xl font-bold mb-1">AMEX Platinum Charge</div>
            <div class="text-yellow-600 font-bold">Gold Elite</div>
            <div class="text-xs text-slate-500">While card is active</div>
          </div>
          <div class="bg-white dark:bg-slate-900 p-4 rounded-xl text-center">
            <div class="text-xl font-bold mb-1">HDFC Marriott Bonvoy</div>
            <div class="text-slate-500 font-bold">Silver Elite</div>
            <div class="text-xs text-slate-500">+ 10 Elite Nights</div>
          </div>
        </div>
        
        <div class="mt-4 p-4 bg-emerald-100 dark:bg-emerald-900/30 rounded-xl text-emerald-800 dark:text-emerald-300 text-sm">
          <strong>💡 Pro Combo:</strong> AMEX Platinum (Gold Status) + HDFC Marriott (10 Nights) + Double Night Promo = <strong>Platinum in ~20 paid nights!</strong>
        </div>
      </div>

      <!-- ITC Hack -->
      <div class="bg-white dark:bg-slate-900 p-6 rounded-2xl shadow-lg border border-slate-200 dark:border-slate-700">
        <h4 class="font-bold text-lg mb-3 flex items-center gap-2">🏨 ITC Luxury Collection Hack</h4>
        <p class="text-slate-600 dark:text-slate-400">ITC Hotels (The Luxury Collection) bookings can count as paid nights! You can even use <strong>Club ITC Green Points</strong> to pay and still earn Marriott elite nights. Check with the specific hotel during check-in.</p>
      </div>
    </div>
  </section>

  <!-- Breakfast Benefits -->
  <section id="breakfast">
    <h3 class="flex items-center gap-3 text-2xl font-bold text-slate-900 dark:text-white mb-6">
      <span class="text-3xl">🥐</span> Elite Breakfast Benefits
    </h3>
    <p class="mb-6 text-slate-600 dark:text-slate-400">Not all brands offer free breakfast to elites. Here's the breakdown:</p>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
      <!-- Breakfast Included -->
      <div class="bg-green-50 dark:bg-green-900/20 p-6 rounded-2xl border border-green-200 dark:border-green-800">
        <h4 class="font-bold text-lg mb-4 text-green-700 dark:text-green-400 flex items-center gap-2">✅ Breakfast Included</h4>
        <div class="text-sm space-y-1 text-slate-600 dark:text-slate-400">
          <div>• Element • Residence Inn • SpringHill Suites</div>
          <div>• TownePlace Suites • Fairfield Inn* (*except APAC)</div>
        </div>
      </div>

      <!-- Breakfast for Platinum+ -->
      <div class="bg-amber-50 dark:bg-amber-900/20 p-6 rounded-2xl border border-amber-200 dark:border-amber-800">
        <h4 class="font-bold text-lg mb-4 text-amber-700 dark:text-amber-400 flex items-center gap-2">🎁 Breakfast as Welcome Gift (Platinum+)</h4>
        <div class="text-sm space-y-1 text-slate-600 dark:text-slate-400">
          <div>• AC Hotels • Autograph Collection • Courtyard</div>
          <div>• Delta Hotels • Gaylord Hotels • JW Marriott</div>
          <div>• Marriott Hotels • Moxy • Renaissance</div>
        </div>
      </div>

      <!-- No Breakfast -->
      <div class="bg-red-50 dark:bg-red-900/20 p-6 rounded-2xl border border-red-200 dark:border-red-800">
        <h4 class="font-bold text-lg mb-4 text-red-700 dark:text-red-400 flex items-center gap-2">❌ No Elite Breakfast</h4>
        <div class="text-sm space-y-1 text-slate-600 dark:text-slate-400">
          <div>• Ritz-Carlton • St. Regis • W Hotels • EDITION</div>
          <div>• Design Hotels • Vacation Clubs</div>
        </div>
      </div>

      <!-- Lounge Access -->
      <div class="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-2xl border border-blue-200 dark:border-blue-800">
        <h4 class="font-bold text-lg mb-4 text-blue-700 dark:text-blue-400 flex items-center gap-2">🛋️ Executive Lounge Access (Platinum+)</h4>
        <div class="text-sm space-y-1 text-slate-600 dark:text-slate-400">
          <div>• JW Marriott • Marriott Hotels • Sheraton</div>
          <div>• Delta • Le Méridien • Westin • Autograph</div>
          <div>• Renaissance • Courtyard (outside US/Canada)</div>
        </div>
      </div>
    </div>
  </section>

  <!-- STARS & Luminous -->
  <section id="programs" class="bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-indigo-900/10 dark:to-purple-900/10 p-8 rounded-3xl border border-indigo-200 dark:border-indigo-900/30">
    <h3 class="flex items-center gap-3 text-2xl font-bold text-indigo-700 dark:text-indigo-400 mb-6">
      <span class="text-3xl">⭐</span> STARS & Luminous Programs
    </h3>
    <p class="mb-6 text-slate-700 dark:text-slate-300">Book through travel agents with access to these programs for extra perks!</p>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
      <!-- STARS -->
      <div class="bg-white dark:bg-slate-900 p-6 rounded-2xl shadow-lg">
        <h4 class="font-bold text-lg mb-4 flex items-center gap-2">🌟 Marriott STARS</h4>
        <ul class="space-y-2 text-sm text-slate-600 dark:text-slate-400">
          <li class="flex items-center gap-2">✅ Daily Breakfast for Two</li>
          <li class="flex items-center gap-2">✅ Complimentary Room Upgrades</li>
          <li class="flex items-center gap-2">✅ Early Check-in / Late Check-out</li>
          <li class="flex items-center gap-2">✅ Customized VIP Experiences</li>
          <li class="flex items-center gap-2 font-bold text-indigo-600">💰 Up to $100/day Hotel Credit!</li>
        </ul>
      </div>

      <!-- Luminous -->
      <div class="bg-white dark:bg-slate-900 p-6 rounded-2xl shadow-lg">
        <h4 class="font-bold text-lg mb-4 flex items-center gap-2">✨ Marriott Luminous</h4>
        <ul class="space-y-2 text-sm text-slate-600 dark:text-slate-400">
          <li class="flex items-center gap-2">✅ Daily Breakfast for Two</li>
          <li class="flex items-center gap-2">✅ Priority Room Upgrades</li>
          <li class="flex items-center gap-2">✅ Early/Late Check (availability)</li>
          <li class="flex items-center gap-2">✅ Locally-Inspired Amenity</li>
          <li class="flex items-center gap-2">✅ Exclusive Experiences</li>
        </ul>
      </div>
    </div>
  </section>

  <!-- Club Marriott South Asia -->
  <section id="club">
    <h3 class="flex items-center gap-3 text-2xl font-bold text-slate-900 dark:text-white mb-6">
      <span class="text-3xl">🎫</span> Club Marriott South Asia
    </h3>
    <p class="mb-4 text-slate-600 dark:text-slate-400">A paid membership for dining and stay discounts. Available via Axis Reserve or HDFC Infinia cards!</p>

    <div class="bg-white dark:bg-slate-900 p-6 rounded-2xl shadow-lg border border-slate-200 dark:border-slate-700">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div class="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-xl text-center">
          <div class="text-2xl mb-2">🏨</div>
          <div class="font-bold">Up to 20% Off</div>
          <div class="text-sm text-slate-500">Best Available Room Rate</div>
        </div>
        <div class="p-4 bg-green-50 dark:bg-green-900/20 rounded-xl text-center">
          <div class="text-2xl mb-2">🍽️</div>
          <div class="font-bold">Up to 20% Off</div>
          <div class="text-sm text-slate-500">F&B (up to 10 guests)</div>
        </div>
        <div class="p-4 bg-pink-50 dark:bg-pink-900/20 rounded-xl text-center">
          <div class="text-2xl mb-2">💆</div>
          <div class="font-bold">Up to 20% Off</div>
          <div class="text-sm text-slate-500">Marriott Spas in India</div>
        </div>
        <div class="p-4 bg-purple-50 dark:bg-purple-900/20 rounded-xl text-center">
          <div class="text-2xl mb-2">🌏</div>
          <div class="font-bold">Up to 20% Off</div>
          <div class="text-sm text-slate-500">Asia-Pacific Weekend Stays</div>
        </div>
        <div class="p-4 bg-amber-50 dark:bg-amber-900/20 rounded-xl text-center">
          <div class="text-2xl mb-2">🎟️</div>
          <div class="font-bold">5 Gift Certificates</div>
          <div class="text-sm text-slate-500">Dining & Accommodation</div>
        </div>
      </div>
    </div>
  </section>

  <!-- Earning Points -->
  <section id="earn">
    <h3 class="flex items-center gap-3 text-2xl font-bold text-slate-900 dark:text-white mb-6">
      <span class="text-3xl">💰</span> Ways to Earn Bonvoy Points
    </h3>

    <!-- HDFC Card -->
    <div class="bg-white dark:bg-slate-900 p-6 rounded-2xl shadow-lg border border-slate-200 dark:border-slate-700 mb-6">
      <h4 class="font-bold text-lg mb-4 flex items-center gap-2">💳 HDFC Marriott Bonvoy Card (₹3,000 + GST/year)</h4>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div class="p-3 bg-slate-50 dark:bg-slate-800 rounded-lg text-center">
          <div class="text-xs text-slate-500 uppercase mb-1">Marriott Hotels</div>
          <div class="font-bold text-lg">8 pts / ₹150</div>
        </div>
        <div class="p-3 bg-slate-50 dark:bg-slate-800 rounded-lg text-center">
          <div class="text-xs text-slate-500 uppercase mb-1">Travel/Dining/Entertainment</div>
          <div class="font-bold text-lg">4 pts / ₹150</div>
        </div>
        <div class="p-3 bg-slate-50 dark:bg-slate-800 rounded-lg text-center">
          <div class="text-xs text-slate-500 uppercase mb-1">Other Spends</div>
          <div class="font-bold text-lg">4 pts / ₹150</div>
        </div>
        <div class="p-3 bg-green-100 dark:bg-green-900/30 rounded-lg text-center">
          <div class="text-xs text-slate-500 uppercase mb-1">Annual Perks</div>
          <div class="font-bold text-sm">Silver + 10 Nights + 15k Free Night</div>
        </div>
      </div>
    </div>

    <!-- Transfer Partners -->
    <div class="bg-white dark:bg-slate-900 p-6 rounded-2xl shadow-lg border border-slate-200 dark:border-slate-700">
      <h4 class="font-bold text-lg mb-4 flex items-center gap-2">🔄 Credit Card Transfer Partners</h4>
      
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <!-- Axis -->
        <div class="p-4 bg-red-50 dark:bg-red-900/20 rounded-xl">
          <h5 class="font-bold mb-3">🏦 Axis Bank</h5>
          <div class="space-y-2 text-sm">
            <div class="flex justify-between p-2 bg-white/80 dark:bg-black/30 rounded-lg">
              <span>Reserve, Magnus</span>
              <span class="font-bold">5 : 2</span>
            </div>
            <div class="flex justify-between p-2 bg-white/80 dark:bg-black/30 rounded-lg">
              <span>Burgundy Magnus/Private</span>
              <span class="font-bold">5 : 4</span>
            </div>
            <div class="flex justify-between p-2 bg-white/80 dark:bg-black/30 rounded-lg">
              <span>Atlas (Edge Miles)</span>
              <span class="font-bold">2 : 1</span>
            </div>
          </div>
        </div>

        <!-- AMEX -->
        <div class="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-xl">
          <h5 class="font-bold mb-3">💳 American Express</h5>
          <div class="space-y-2 text-sm">
            <div class="flex justify-between p-2 bg-white/80 dark:bg-black/30 rounded-lg">
              <span>Platinum Travel, MRCC, Gold Charge</span>
              <span class="font-bold text-green-600">1 : 1</span>
            </div>
          </div>
        </div>
      </div>

      <!-- Other Partners -->
      <h4 class="font-bold text-lg mt-6 mb-4">✈️ Airline & Hotel Transfer Partners</h4>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div class="p-4 bg-amber-50 dark:bg-amber-900/20 rounded-lg text-center">
          <div class="font-bold">Club ITC</div>
          <div class="text-xl font-bold text-amber-600">2 : 3</div>
          <div class="text-xs text-slate-500">15k pts/quarter (60k/year max)</div>
        </div>
        <div class="p-4 bg-slate-100 dark:bg-slate-800 rounded-lg text-center">
          <div class="font-bold">United MileagePlus</div>
          <div class="text-xl font-bold">1 : 1</div>
          <div class="text-xs text-slate-500">Premier members only, 100k/year</div>
        </div>
        <div class="p-4 bg-slate-100 dark:bg-slate-800 rounded-lg text-center">
          <div class="font-bold">Japan Airlines</div>
          <div class="text-xl font-bold">4 : 3</div>
          <div class="text-xs text-slate-500">50k miles/year max</div>
        </div>
      </div>
    </div>
  </section>

  <!-- Redeeming Points -->
  <section id="redeem">
    <h3 class="flex items-center gap-3 text-2xl font-bold text-slate-900 dark:text-white mb-6">
      <span class="text-3xl">🎁</span> How to Redeem Bonvoy Points
    </h3>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
      <!-- Free Nights -->
      <div class="bg-white dark:bg-slate-900 p-6 rounded-2xl shadow-lg border border-slate-200 dark:border-slate-700">
        <h4 class="font-bold text-lg mb-4 flex items-center gap-2">🌙 Free Night Awards</h4>
        <ul class="space-y-2 text-sm text-slate-600 dark:text-slate-400">
          <li class="flex items-start gap-2">
            <span class="text-green-500 mt-1">✓</span>
            <span>Book 5 consecutive nights → <strong>5th night FREE!</strong></span>
          </li>
          <li class="flex items-start gap-2">
            <span class="text-green-500 mt-1">✓</span>
            <span>Works on every 5 nights at same property</span>
          </li>
          <li class="flex items-start gap-2">
            <span class="text-green-500 mt-1">💡</span>
            <span>Book in <strong>off-peak season</strong> for best value</span>
          </li>
        </ul>
      </div>

      <!-- PointSavers -->
      <div class="bg-white dark:bg-slate-900 p-6 rounded-2xl shadow-lg border border-slate-200 dark:border-slate-700">
        <h4 class="font-bold text-lg mb-4 flex items-center gap-2">💎 PointSavers</h4>
        <p class="text-slate-600 dark:text-slate-400 text-sm">Discounted award nights at select properties. Check the Marriott website for current deals!</p>
      </div>

      <!-- Airline Transfers -->
      <div class="bg-white dark:bg-slate-900 p-6 rounded-2xl shadow-lg border border-slate-200 dark:border-slate-700">
        <h4 class="font-bold text-lg mb-4 flex items-center gap-2">✈️ Transfer to Airlines</h4>
        <p class="text-slate-600 dark:text-slate-400 text-sm mb-3">Convert points to 40+ airline partners. Standard ratio: <strong>3 Bonvoy : 1 Mile</strong></p>
        <div class="p-3 bg-emerald-100 dark:bg-emerald-900/30 rounded-lg text-emerald-800 dark:text-emerald-300 text-sm">
          <strong>Bonus:</strong> Transfer 60,000 Bonvoy → Get 25,000 miles (5k bonus!)
        </div>
      </div>

      <!-- Moments & Charity -->
      <div class="bg-white dark:bg-slate-900 p-6 rounded-2xl shadow-lg border border-slate-200 dark:border-slate-700">
        <h4 class="font-bold text-lg mb-4 flex items-center gap-2">🎭 Bonvoy Moments & Charity</h4>
        <ul class="space-y-2 text-sm text-slate-600 dark:text-slate-400">
          <li>• Bid on exclusive experiences (concerts, sports, culinary)</li>
          <li>• Donate points to charity partners</li>
        </ul>
      </div>
    </div>
  </section>

  <!-- Best Rate Guarantee -->
  <section class="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 p-6 rounded-2xl border border-green-200 dark:border-green-800">
    <h3 class="flex items-center gap-3 text-xl font-bold text-green-700 dark:text-green-400 mb-4">
      <span class="text-2xl">💰</span> Best Rate Guarantee
    </h3>
    <p class="text-slate-700 dark:text-slate-300">Found a lower rate elsewhere? Marriott will match it AND give you extra points or a discount. Submit a claim within 24 hours of booking on the official Marriott website.</p>
  </section>

  <!-- Quote -->
  <div class="my-8 text-center p-10 bg-gradient-to-br from-slate-900 to-red-900 rounded-3xl text-white">
    <p class="text-3xl font-serif italic mb-4">"Where can we take you?"</p>
    <p class="text-red-300 text-sm uppercase tracking-widest">— Marriott Bonvoy</p>
  </div>

</div>
`;
