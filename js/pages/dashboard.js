/* ============================================================
   NAPELL — Dashboard + 2050 Coffee Industry Crisis pages
   ============================================================ */
(function () {
  var P = window.I18N.pages;

  P.dashboard = {
    en: {
      title: "Data Dashboard",
      html: `<div class="dash-grid">
  <div class="dash-stat"><div class="dash-stat-value">4<span class="u">mo</span></div><div class="dash-stat-label">Seedling cycle (vs 8–12 months)</div></div>
  <div class="dash-stat"><div class="dash-stat-value">95<span class="u">%</span></div><div class="dash-stat-label">Water saved</div></div>
  <div class="dash-stat"><div class="dash-stat-value">114<span class="u">×</span></div><div class="dash-stat-label">Higher planting density</div></div>
  <div class="dash-stat"><div class="dash-stat-value">0.8–1.0</div><div class="dash-stat-label">DQI — “super seedlings”</div></div>
</div>

<div class="fig-hero">
  <div class="fig"><div class="fig-value">615K</div><div class="fig-label">Seedlings / year (Plan B)</div></div>
  <div class="fig"><div class="fig-value">¥15.38M</div><div class="fig-label">Annual revenue</div></div>
  <div class="fig"><div class="fig-value">73.5%</div><div class="fig-label">Gross margin</div></div>
  <div class="fig"><div class="fig-value">¥2.82M</div><div class="fig-label">Startup capital</div></div>
  <div class="fig"><div class="fig-value">≈3 mo</div><div class="fig-label">Gross-margin payback</div></div>
</div>

<div class="dash-panel">
  <div class="dash-panel-title">Unit economics — price vs cost (per seedling)</div>
  <div class="bars">
    <div class="bar-row"><div class="bar-meta"><span>Price</span><strong>¥25.00</strong></div><div class="bar-track"><div class="bar-fill gold" style="width:100%"></div></div></div>
    <div class="bar-row"><div class="bar-meta"><span>Gross profit</span><strong>¥18.39 (73.5%)</strong></div><div class="bar-track"><div class="bar-fill green" style="width:73.5%"></div></div></div>
    <div class="bar-row"><div class="bar-meta"><span>Total cost</span><strong>¥6.61</strong></div><div class="bar-track"><div class="bar-fill dim" style="width:26.4%"></div></div></div>
  </div>
</div>

<div class="dash-panel">
  <div class="dash-panel-title">Cost breakdown — share of ¥6.61</div>
  <div class="bars">
    <div class="bar-row"><div class="bar-meta"><span>Shipping</span><strong>¥2.00 · 30.2%</strong></div><div class="bar-track"><div class="bar-fill" style="width:30.2%"></div></div></div>
    <div class="bar-row"><div class="bar-meta"><span>Seeds</span><strong>¥1.70 · 25.7%</strong></div><div class="bar-track"><div class="bar-fill" style="width:25.7%"></div></div></div>
    <div class="bar-row"><div class="bar-meta"><span>Equipment depreciation</span><strong>¥1.06 · 16.1%</strong></div><div class="bar-track"><div class="bar-fill" style="width:16.1%"></div></div></div>
    <div class="bar-row"><div class="bar-meta"><span>Water, power &amp; nutrients</span><strong>¥1.00 · 15.1%</strong></div><div class="bar-track"><div class="bar-fill" style="width:15.1%"></div></div></div>
    <div class="bar-row"><div class="bar-meta"><span>Coco coir &amp; packaging</span><strong>¥0.50 · 7.6%</strong></div><div class="bar-track"><div class="bar-fill" style="width:7.6%"></div></div></div>
    <div class="bar-row"><div class="bar-meta"><span>Misc &amp; labor</span><strong>¥0.35 · 5.3%</strong></div><div class="bar-track"><div class="bar-fill" style="width:5.3%"></div></div></div>
  </div>
</div>

<div class="dash-panel">
  <div class="dash-panel-title">Aeroponic vs traditional</div>
  <div class="compare">
    <div class="compare-row"><div class="compare-label">Cycle time</div><div class="compare-cols">
      <div class="cb"><span class="cb-tag">Aeroponic — 4 mo</span><div class="cb-track"><div class="cb-fill green" style="width:33%"></div></div></div>
      <div class="cb"><span class="cb-tag">Traditional — 8–12 mo</span><div class="cb-track"><div class="cb-fill dim" style="width:100%"></div></div></div>
    </div></div>
    <div class="compare-row"><div class="compare-label">Land per 100K seedlings</div><div class="compare-cols">
      <div class="cb"><span class="cb-tag">Aeroponic — ~1.5 mu</span><div class="cb-track"><div class="cb-fill green" style="width:3%"></div></div></div>
      <div class="cb"><span class="cb-tag">Traditional — ~50 mu</span><div class="cb-track"><div class="cb-fill dim" style="width:100%"></div></div></div>
    </div></div>
    <div class="compare-row"><div class="compare-label">Water use</div><div class="compare-cols">
      <div class="cb"><span class="cb-tag">Aeroponic — 5%</span><div class="cb-track"><div class="cb-fill green" style="width:5%"></div></div></div>
      <div class="cb"><span class="cb-tag">Traditional — 100%</span><div class="cb-track"><div class="cb-fill dim" style="width:100%"></div></div></div>
    </div></div>
  </div>
</div>

<div class="dash-panel">
  <div class="dash-panel-title">Three-year revenue roadmap (¥)</div>
  <div class="bars">
    <div class="bar-row"><div class="bar-meta"><span>Y1 — 1 base</span><strong>¥15.38M</strong></div><div class="bar-track"><div class="bar-fill green" style="width:20%"></div></div></div>
    <div class="bar-row"><div class="bar-meta"><span>Y2 — 3 bases</span><strong>¥46.13M</strong></div><div class="bar-track"><div class="bar-fill green" style="width:60%"></div></div></div>
    <div class="bar-row"><div class="bar-meta"><span>Y3 — 5 bases</span><strong>¥76.88M</strong></div><div class="bar-track"><div class="bar-fill gold" style="width:100%"></div></div></div>
  </div>
</div>

<div class="dash-panel">
  <div class="dash-panel-title">Climate urgency — why now</div>
  <div class="dash-grid">
    <div class="dash-stat"><div class="dash-stat-value">−50<span class="u">%</span></div><div class="dash-stat-label">Suitable land by 2050</div></div>
    <div class="dash-stat"><div class="dash-stat-value">−72<span class="u">%</span></div><div class="dash-stat-label">Arabica suitability (worst case)</div></div>
    <div class="dash-stat"><div class="dash-stat-value">+2.4<span class="u">°C</span></div><div class="dash-stat-label">Coffee-belt warming</div></div>
    <div class="dash-stat"><div class="dash-stat-value">$200B<span class="u">+</span></div><div class="dash-stat-label">Global coffee economy</div></div>
  </div>
</div>`
    },
    zh: {
      title: "数据仪表盘",
      html: `<div class="dash-grid">
  <div class="dash-stat"><div class="dash-stat-value">4<span class="u">月</span></div><div class="dash-stat-label">育苗周期（对比 8–12 个月）</div></div>
  <div class="dash-stat"><div class="dash-stat-value">95<span class="u">%</span></div><div class="dash-stat-label">节水效率</div></div>
  <div class="dash-stat"><div class="dash-stat-value">114<span class="u">倍</span></div><div class="dash-stat-label">种植密度更高</div></div>
  <div class="dash-stat"><div class="dash-stat-value">0.8–1.0</div><div class="dash-stat-label">DQI——超级壮苗</div></div>
</div>

<div class="fig-hero">
  <div class="fig"><div class="fig-value">615K</div><div class="fig-label">年产苗（方案 B）</div></div>
  <div class="fig"><div class="fig-value">¥15.38M</div><div class="fig-label">年收入</div></div>
  <div class="fig"><div class="fig-value">73.5%</div><div class="fig-label">毛利率</div></div>
  <div class="fig"><div class="fig-value">¥2.82M</div><div class="fig-label">启动资金</div></div>
  <div class="fig"><div class="fig-value">≈3 月</div><div class="fig-label">毛利回收期</div></div>
</div>

<div class="dash-panel">
  <div class="dash-panel-title">单位经济模型——售价 vs 成本（每棵）</div>
  <div class="bars">
    <div class="bar-row"><div class="bar-meta"><span>售价</span><strong>¥25.00</strong></div><div class="bar-track"><div class="bar-fill gold" style="width:100%"></div></div></div>
    <div class="bar-row"><div class="bar-meta"><span>毛利</span><strong>¥18.39（73.5%）</strong></div><div class="bar-track"><div class="bar-fill green" style="width:73.5%"></div></div></div>
    <div class="bar-row"><div class="bar-meta"><span>总成本</span><strong>¥6.61</strong></div><div class="bar-track"><div class="bar-fill dim" style="width:26.4%"></div></div></div>
  </div>
</div>

<div class="dash-panel">
  <div class="dash-panel-title">成本结构——占 ¥6.61 的比例</div>
  <div class="bars">
    <div class="bar-row"><div class="bar-meta"><span>运费</span><strong>¥2.00 · 30.2%</strong></div><div class="bar-track"><div class="bar-fill" style="width:30.2%"></div></div></div>
    <div class="bar-row"><div class="bar-meta"><span>种子</span><strong>¥1.70 · 25.7%</strong></div><div class="bar-track"><div class="bar-fill" style="width:25.7%"></div></div></div>
    <div class="bar-row"><div class="bar-meta"><span>设备折旧</span><strong>¥1.06 · 16.1%</strong></div><div class="bar-track"><div class="bar-fill" style="width:16.1%"></div></div></div>
    <div class="bar-row"><div class="bar-meta"><span>水电与营养液</span><strong>¥1.00 · 15.1%</strong></div><div class="bar-track"><div class="bar-fill" style="width:15.1%"></div></div></div>
    <div class="bar-row"><div class="bar-meta"><span>椰糠与包装袋</span><strong>¥0.50 · 7.6%</strong></div><div class="bar-track"><div class="bar-fill" style="width:7.6%"></div></div></div>
    <div class="bar-row"><div class="bar-meta"><span>杂费与人工</span><strong>¥0.35 · 5.3%</strong></div><div class="bar-track"><div class="bar-fill" style="width:5.3%"></div></div></div>
  </div>
</div>

<div class="dash-panel">
  <div class="dash-panel-title">雾化水培 vs 传统土培</div>
  <div class="compare">
    <div class="compare-row"><div class="compare-label">生长周期</div><div class="compare-cols">
      <div class="cb"><span class="cb-tag">雾化水培——4 个月</span><div class="cb-track"><div class="cb-fill green" style="width:33%"></div></div></div>
      <div class="cb"><span class="cb-tag">传统——8–12 个月</span><div class="cb-track"><div class="cb-fill dim" style="width:100%"></div></div></div>
    </div></div>
    <div class="compare-row"><div class="compare-label">每 10 万棵所需土地</div><div class="compare-cols">
      <div class="cb"><span class="cb-tag">雾化水培——约 1.5 亩</span><div class="cb-track"><div class="cb-fill green" style="width:3%"></div></div></div>
      <div class="cb"><span class="cb-tag">传统——约 50 亩</span><div class="cb-track"><div class="cb-fill dim" style="width:100%"></div></div></div>
    </div></div>
    <div class="compare-row"><div class="compare-label">用水量</div><div class="compare-cols">
      <div class="cb"><span class="cb-tag">雾化水培——5%</span><div class="cb-track"><div class="cb-fill green" style="width:5%"></div></div></div>
      <div class="cb"><span class="cb-tag">传统——100%</span><div class="cb-track"><div class="cb-fill dim" style="width:100%"></div></div></div>
    </div></div>
  </div>
</div>

<div class="dash-panel">
  <div class="dash-panel-title">三年收入路线图（¥）</div>
  <div class="bars">
    <div class="bar-row"><div class="bar-meta"><span>Y1——1 个基地</span><strong>¥15.38M</strong></div><div class="bar-track"><div class="bar-fill green" style="width:20%"></div></div></div>
    <div class="bar-row"><div class="bar-meta"><span>Y2——3 个基地</span><strong>¥46.13M</strong></div><div class="bar-track"><div class="bar-fill green" style="width:60%"></div></div></div>
    <div class="bar-row"><div class="bar-meta"><span>Y3——5 个基地</span><strong>¥76.88M</strong></div><div class="bar-track"><div class="bar-fill gold" style="width:100%"></div></div></div>
  </div>
</div>

<div class="dash-panel">
  <div class="dash-panel-title">气候紧迫性——为何现在</div>
  <div class="dash-grid">
    <div class="dash-stat"><div class="dash-stat-value">−50<span class="u">%</span></div><div class="dash-stat-label">2050 年适种土地</div></div>
    <div class="dash-stat"><div class="dash-stat-value">−72<span class="u">%</span></div><div class="dash-stat-label">阿拉比卡适种性（最坏）</div></div>
    <div class="dash-stat"><div class="dash-stat-value">+2.4<span class="u">°C</span></div><div class="dash-stat-label">咖啡带升温</div></div>
    <div class="dash-stat"><div class="dash-stat-value">$200B<span class="u">+</span></div><div class="dash-stat-label">全球咖啡经济</div></div>
  </div>
</div>`
    },
    ar: {
      title: "لوحة البيانات",
      html: `<div class="dash-grid">
  <div class="dash-stat"><div class="dash-stat-value">4<span class="u">أشهر</span></div><div class="dash-stat-label">دورة إنتاج الشتلات (مقابل 8–12 شهراً)</div></div>
  <div class="dash-stat"><div class="dash-stat-value">95<span class="u">%</span></div><div class="dash-stat-label">توفير المياه</div></div>
  <div class="dash-stat"><div class="dash-stat-value">114<span class="u">×</span></div><div class="dash-stat-label">كثافة زراعة أعلى</div></div>
  <div class="dash-stat"><div class="dash-stat-value">0.8–1.0</div><div class="dash-stat-label">مؤشر DQI — شتلات فائقة</div></div>
</div>

<div class="fig-hero">
  <div class="fig"><div class="fig-value">615K</div><div class="fig-label">شتلة/سنة (الخطة ب)</div></div>
  <div class="fig"><div class="fig-value">15.38M ¥</div><div class="fig-label">الإيراد السنوي</div></div>
  <div class="fig"><div class="fig-value">73.5%</div><div class="fig-label">هامش الربح الإجمالي</div></div>
  <div class="fig"><div class="fig-value">2.82M ¥</div><div class="fig-label">رأس المال التأسيسي</div></div>
  <div class="fig"><div class="fig-value">≈3 أشهر</div><div class="fig-label">استرداد هامش الربح</div></div>
</div>

<div class="dash-panel">
  <div class="dash-panel-title">اقتصاديات الوحدة — السعر مقابل التكلفة (للشتلة)</div>
  <div class="bars">
    <div class="bar-row"><div class="bar-meta"><span>السعر</span><strong>25.00 ¥</strong></div><div class="bar-track"><div class="bar-fill gold" style="width:100%"></div></div></div>
    <div class="bar-row"><div class="bar-meta"><span>الربح الإجمالي</span><strong>18.39 ¥ (73.5%)</strong></div><div class="bar-track"><div class="bar-fill green" style="width:73.5%"></div></div></div>
    <div class="bar-row"><div class="bar-meta"><span>التكلفة الإجمالية</span><strong>6.61 ¥</strong></div><div class="bar-track"><div class="bar-fill dim" style="width:26.4%"></div></div></div>
  </div>
</div>

<div class="dash-panel">
  <div class="dash-panel-title">تفصيل التكلفة — حصة 6.61 يوان</div>
  <div class="bars">
    <div class="bar-row"><div class="bar-meta"><span>الشحن</span><strong>2.00 ¥ · 30.2%</strong></div><div class="bar-track"><div class="bar-fill" style="width:30.2%"></div></div></div>
    <div class="bar-row"><div class="bar-meta"><span>البذور</span><strong>1.70 ¥ · 25.7%</strong></div><div class="bar-track"><div class="bar-fill" style="width:25.7%"></div></div></div>
    <div class="bar-row"><div class="bar-meta"><span>إهلاك المعدات</span><strong>1.06 ¥ · 16.1%</strong></div><div class="bar-track"><div class="bar-fill" style="width:16.1%"></div></div></div>
    <div class="bar-row"><div class="bar-meta"><span>المياه والكهرباء والمغذيات</span><strong>1.00 ¥ · 15.1%</strong></div><div class="bar-track"><div class="bar-fill" style="width:15.1%"></div></div></div>
    <div class="bar-row"><div class="bar-meta"><span>قشور جوز الهند والتغليف</span><strong>0.50 ¥ · 7.6%</strong></div><div class="bar-track"><div class="bar-fill" style="width:7.6%"></div></div></div>
    <div class="bar-row"><div class="bar-meta"><span>نفقات متنوعة وعمالة</span><strong>0.35 ¥ · 5.3%</strong></div><div class="bar-track"><div class="bar-fill" style="width:5.3%"></div></div></div>
  </div>
</div>

<div class="dash-panel">
  <div class="dash-panel-title">الزراعة الهوائية مقابل التقليدية</div>
  <div class="compare">
    <div class="compare-row"><div class="compare-label">دورة النمو</div><div class="compare-cols">
      <div class="cb"><span class="cb-tag">هوائي — 4 أشهر</span><div class="cb-track"><div class="cb-fill green" style="width:33%"></div></div></div>
      <div class="cb"><span class="cb-tag">تقليدي — 8–12 شهراً</span><div class="cb-track"><div class="cb-fill dim" style="width:100%"></div></div></div>
    </div></div>
    <div class="compare-row"><div class="compare-label">الأرض لكل 100 ألف شتلة</div><div class="compare-cols">
      <div class="cb"><span class="cb-tag">هوائي — نحو 1.5 مو</span><div class="cb-track"><div class="cb-fill green" style="width:3%"></div></div></div>
      <div class="cb"><span class="cb-tag">تقليدي — نحو 50 مو</span><div class="cb-track"><div class="cb-fill dim" style="width:100%"></div></div></div>
    </div></div>
    <div class="compare-row"><div class="compare-label">استهلاك المياه</div><div class="compare-cols">
      <div class="cb"><span class="cb-tag">هوائي — 5%</span><div class="cb-track"><div class="cb-fill green" style="width:5%"></div></div></div>
      <div class="cb"><span class="cb-tag">تقليدي — 100%</span><div class="cb-track"><div class="cb-fill dim" style="width:100%"></div></div></div>
    </div></div>
  </div>
</div>

<div class="dash-panel">
  <div class="dash-panel-title">خارطة الإيرادات لثلاث سنوات (يوان)</div>
  <div class="bars">
    <div class="bar-row"><div class="bar-meta"><span>Y1 — قاعدة واحدة</span><strong>15.38M ¥</strong></div><div class="bar-track"><div class="bar-fill green" style="width:20%"></div></div></div>
    <div class="bar-row"><div class="bar-meta"><span>Y2 — 3 قواعد</span><strong>46.13M ¥</strong></div><div class="bar-track"><div class="bar-fill green" style="width:60%"></div></div></div>
    <div class="bar-row"><div class="bar-meta"><span>Y3 — 5 قواعد</span><strong>76.88M ¥</strong></div><div class="bar-track"><div class="bar-fill gold" style="width:100%"></div></div></div>
  </div>
</div>

<div class="dash-panel">
  <div class="dash-panel-title">إلحاح المناخ — لماذا الآن</div>
  <div class="dash-grid">
    <div class="dash-stat"><div class="dash-stat-value">−50<span class="u">%</span></div><div class="dash-stat-label">الأراضي الصالحة بحلول 2050</div></div>
    <div class="dash-stat"><div class="dash-stat-value">−72<span class="u">%</span></div><div class="dash-stat-label">ملاءمة الأرابيكا (أسوأ سيناريو)</div></div>
    <div class="dash-stat"><div class="dash-stat-value">+2.4<span class="u">°م</span></div><div class="dash-stat-label">ارتفاع حرارة حزام البن</div></div>
    <div class="dash-stat"><div class="dash-stat-value">$200B<span class="u">+</span></div><div class="dash-stat-label">اقتصاد البن العالمي</div></div>
  </div>
</div>`
    }
  };

  P['crisis-2050'] = {
    en: {
      title: "2050 Coffee Industry Crisis",
      html: `<div class="video-wrap">
  <video class="video-player" controls playsinline preload="metadata">
    <source src="media/coffee-aeroponic-napellbio.mp4" type="video/mp4" />
    Your browser does not support the video tag.
  </video>
  <div class="video-caption">How aeroponic coffee seedlings answer the 2050 climate crisis.</div>
</div>
<p>By 2050, climate change could cut suitable coffee-growing land <strong>in half</strong> (−50%, from 12.4 to 6.2 million hectares) and slash Arabica suitability by up to <strong>−72%</strong> — threatening the <strong>$200B+</strong> global coffee economy and the livelihoods of <strong>125 million people</strong>.</p>
<div class="dash-grid">
  <div class="dash-stat"><div class="dash-stat-value">−50<span class="u">%</span></div><div class="dash-stat-label">Suitable land by 2050</div></div>
  <div class="dash-stat"><div class="dash-stat-value">−72<span class="u">%</span></div><div class="dash-stat-label">Arabica suitability (worst case)</div></div>
  <div class="dash-stat"><div class="dash-stat-value">+2.4<span class="u">°C</span></div><div class="dash-stat-label">Coffee-belt warming</div></div>
  <div class="dash-stat"><div class="dash-stat-value">1.25B</div><div class="dash-stat-label">Livelihoods dependent on coffee</div></div>
</div>
<p>This is not a distant scenario — it is the replacement demand that NAPELL is built to serve. Aeroponic coffee seedlings — <strong>4-month cycles, 95% water savings, DQI “super seedlings”</strong> — let producers replant climate-adapted varieties <strong>fast, at scale, and at a predictable industrial rhythm</strong>.</p>`
    },
    zh: {
      title: "2050 咖啡产业危机",
      html: `<div class="video-wrap">
  <video class="video-player" controls playsinline preload="metadata">
    <source src="media/coffee-aeroponic-napellbio.mp4" type="video/mp4" />
    您的浏览器不支持 video 标签。
  </video>
  <div class="video-caption">雾化水培咖啡幼苗如何应对 2050 气候危机。</div>
</div>
<p>到 2050 年，气候变化可能使全球适种咖啡的土地<strong>减少一半</strong>（−50%，从 1240 万公顷降至 620 万公顷），阿拉比卡适种性最多下降 <strong>−72%</strong>——威胁着 <strong>2000 亿美元以上</strong>的全球咖啡经济与 <strong>1.25 亿人</strong>的生计。</p>
<div class="dash-grid">
  <div class="dash-stat"><div class="dash-stat-value">−50<span class="u">%</span></div><div class="dash-stat-label">2050 年适种土地</div></div>
  <div class="dash-stat"><div class="dash-stat-value">−72<span class="u">%</span></div><div class="dash-stat-label">阿拉比卡适种性（最坏）</div></div>
  <div class="dash-stat"><div class="dash-stat-value">+2.4<span class="u">°C</span></div><div class="dash-stat-label">咖啡带升温</div></div>
  <div class="dash-stat"><div class="dash-stat-value">1.25B</div><div class="dash-stat-label">依赖咖啡的生计</div></div>
</div>
<p>这不是遥远的设想，而是 NAPELL 生来就要承接的更新需求。雾化水培咖啡幼苗——<strong>4 个月周期、节水 95%、DQI 超级壮苗</strong>——让生产者能够<strong>快速、规模化、以可预测的工业化节奏</strong>补种气候适应型品种。</p>`
    },
    ar: {
      title: "أزمة صناعة البن 2050",
      html: `<div class="video-wrap">
  <video class="video-player" controls playsinline preload="metadata">
    <source src="media/coffee-aeroponic-napellbio.mp4" type="video/mp4" />
    متصفحك لا يدعم تشغيل الفيديو.
  </video>
  <div class="video-caption">كيف تجيب شتلات البن الهوائية على أزمة المناخ 2050.</div>
</div>
<p>بحلول عام 2050، قد يخفض تغيّر المناخ الأراضي الصالحة لزراعة البن <strong>إلى النصف</strong> (−50%، من 12.4 إلى 6.2 مليون هكتار) ويقلّص ملاءمة الأرابيكا بنسبة تصل إلى <strong>−72%</strong> — مهدداً اقتصاد البن العالمي الذي يتجاوز <strong>200 مليار دولار</strong> وسبل عيش <strong>125 مليون شخص</strong>.</p>
<div class="dash-grid">
  <div class="dash-stat"><div class="dash-stat-value">−50<span class="u">%</span></div><div class="dash-stat-label">الأراضي الصالحة بحلول 2050</div></div>
  <div class="dash-stat"><div class="dash-stat-value">−72<span class="u">%</span></div><div class="dash-stat-label">ملاءمة الأرابيكا (أسوأ سيناريو)</div></div>
  <div class="dash-stat"><div class="dash-stat-value">+2.4<span class="u">°م</span></div><div class="dash-stat-label">ارتفاع حرارة حزام البن</div></div>
  <div class="dash-stat"><div class="dash-stat-value">1.25B</div><div class="dash-stat-label">سبل عيش تعتمد على البن</div></div>
</div>
<p>هذا ليس سيناريو بعيداً، بل هو الطلب الاستبدالي الذي وُجدت NAPELL لتلبيته. فشتلات البن الهوائية — <strong>دورة 4 أشهر، وتوفير 95% من المياه، وشتلات فائقة بمؤشر DQI</strong> — تمكّن المنتجين من إعادة زراعة أصناف متكيّفة مع المناخ <strong>بسرعة وعلى نطاق واسع وبإيقاع صناعي متوقّع</strong>.</p>`
    }
  };
})();
