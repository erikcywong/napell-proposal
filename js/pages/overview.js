/* ============================================================
   NAPELL — Overview pages: home, executive-summary, why-invest
   ============================================================ */
(function () {
  var P = window.I18N.pages;

  P.home = {
    kpis: [
      { value: '4 mo', label: { en: 'Seedling cycle', zh: '育苗周期', ar: 'دورة الإنتاج' } },
      { value: '95%', label: { en: 'Water saved', zh: '节水效率', ar: 'توفير المياه' } },
      { value: '615K', label: { en: 'Seedlings / year', zh: '年产咖啡苗', ar: 'شتلة / سنوياً' } },
      { value: '73.5%', label: { en: 'Gross margin', zh: '毛利率', ar: 'هامش الربح الإجمالي' } }
    ],
    en: {
      title: "Rebuilding the Global Coffee Nursery with <em>Industrial Certainty</em>",
      subtitle: "Aeroponic (mist hydroponic) coffee seedling business plan — fundraising use. 4-month cycles, 95% water savings, DQI “super seedlings”.",
      html: `<p>The global coffee seedling industry has long been trapped by one fundamental constraint — the <strong>“weather-dependent” agricultural cycle</strong>: traditional soil nurseries take 8–12 months, output depends on the rainy season, capital is tied up for long periods, supply is unpredictable, and capacity is hard to replicate.</p>
<div class="callout blue"><span class="callout-title">About this document</span>Type: Business Plan (fundraising use) · Suggested use: investor communication, roadshow, due-diligence base material · Data source: napell.space — “Longgang aeroponic seedling base operating cost analysis”.</div>
<p>Backed by real operating data, the Longgang base runs <strong>81 systems on 10.8 mu</strong> to produce <strong>615,000 coffee seedlings per year</strong>, with projected annual revenue of <strong>¥15.375 million</strong> and a <strong>73.5% gross margin</strong> — unit cost ¥6.61, price ¥25, unit gross profit ¥18.39. Initial investment is only <strong>¥2.818 million</strong>, with a gross-margin payback of about 3 months.</p>
<p><strong>Core investment logic:</strong> we use industrial efficiency to challenge the agricultural cycle.</p>`
    },
    zh: {
      title: "以工业化确定性节奏，<em>重构全球咖啡育苗产业</em>",
      subtitle: "雾化水培咖啡幼苗项目商业计划书 · 融资用途。4 个月周期、节水 95%、DQI“超级壮苗”。",
      html: `<p>全球咖啡育苗产业长期受制于一个根本性约束——<strong>“靠天吃饭”的农业周期</strong>：传统土培育苗需 8–12 个月，且出苗严格依赖雨季，资金占用长、供给不可预测、产能难以复制。</p>
<div class="callout blue"><span class="callout-title">关于本文档</span>文档类型：融资用途 · 商业计划书（BP）· 建议用途：投资人沟通、路演、尽调材料基础 · 数据来源：napell.space —《龙岗气雾栽培育苗基地运营成本分析》。</div>
<p><strong>本项目已有真实运营数据背书</strong>：龙岗基地以 81 套系统、10.8 亩场地，实现年产 615,000 棵咖啡苗、预计年收入 ¥1,537.5 万、毛利率 73.5%，单棵成本 ¥6.61、售价 ¥25、单棵毛利 ¥18.39。初始投资仅 ¥281.8 万，按毛利口径静态回收期约 3 个月。</p>
<p><strong>核心投资逻辑</strong>：我们用工业化的效率，去挑战农业化的周期。</p>`
    },
    ar: {
      title: "إعادة بناء صناعة شتلات البن العالمية <em>بإيقاع صناعي محكم</em>",
      subtitle: "خطة عمل مشروع شتلات البن بالزراعة الهوائية — لأغراض التمويل. دورة 4 أشهر، توفير 95% من المياه، وشتلات فائقة بمؤشر DQI.",
      html: `<p>ظلت صناعة شتلات البن العالمية خاضعة لقيود أساسية تمثّلت في <strong>الدورة الزراعية “المعتمدة على الطقس”</strong>: فالمشاتل التقليدية في التربة تحتاج إلى 8–12 شهراً، ويعتمد إنتاج الشتلات على موسم الأمطار، مع احتجاز رأس المال لفترات طويلة، وعرضٍ غير قابل للتنبؤ، وطاقة يصعب تكرارها.</p>
<div class="callout blue"><span class="callout-title">حول هذه الوثيقة</span>النوع: خطة عمل (لأغراض التمويل) · الاستخدام المقترح: التواصل مع المستثمرين والعروض التقديمية وأساس العناية الواجبة · مصدر البيانات: napell.space — “تحليل تكلفة تشغيل قاعدة شتلات لونغغانغ الهوائية”.</div>
<p>يستند المشروع إلى بيانات تشغيلية حقيقية: فقاعدة لونغغانغ، عبر <strong>81 نظاماً على مساحة 10.8 مو</strong>، تنتج <strong>615,000 شتلة بن سنوياً</strong>، بإيرادات سنوية متوقعة <strong>15.375 مليون يوان</strong> و<strong>هامش ربح إجمالي 73.5%</strong> — بتكلفة 6.61 يوان للشتلة وسعر 25 يواناً وربح إجمالي 18.39 يواناً للشتلة. ويبلغ الاستثمار الأولي <strong>2.818 مليون يوان</strong> فقط، مع استرداد خلال نحو 3 أشهر وفقاً لهامش الربح الإجمالي.</p>
<p><strong>منطق الاستثمار الجوهري:</strong> نوظّف كفاءة الصناعة لتحدّي دورة الزراعة.</p>`
    }
  };

  P['executive-summary'] = {
    en: {
      title: "Executive Summary",
      html: `<p>The global coffee seedling industry has long been trapped by one fundamental constraint — the <strong>“weather-dependent” agricultural cycle</strong>: traditional soil nurseries take <strong>8–12 months</strong>, and seedling output depends strictly on the rainy season, tying up capital for long periods, making supply unpredictable, and making capacity difficult to replicate.</p>
<p>Our solution is <strong>aeroponic (mist hydroponic) coffee seedling technology</strong>: an indoor controlled environment with a high-oxygen misted root zone compresses the cycle to <strong>4 months</strong>, saves <strong>95% water</strong>, and produces “super seedlings” whose DQI can exceed 0.5 and even reach 0.8–1.0.</p>
<p><strong>The project is backed by real operating data:</strong> the Longgang base, with <strong>81 systems on 10.8 mu</strong>, achieves <strong>615,000 seedlings per year, projected annual revenue of ¥15.375 million, and a 73.5% gross margin</strong> — unit cost ¥6.61, price ¥25, unit gross profit ¥18.39. Initial investment is only <strong>¥2.818 million</strong>, with a static gross-margin payback of about <strong>3 months</strong>.</p>
<p><strong>Core investment logic:</strong> we use industrial efficiency to challenge the agricultural cycle. With a validated unit-economic model, replicable modular capacity, and three cash-flow curves — “premium tech seedlings + order-based seedling production + technology solution output” — we aim to occupy the dominant seat of “standardization, scale, and high premium” in the new dual-track landscape of the coffee seedling industry.</p>`
    },
    zh: {
      title: "执行摘要（Elevator Pitch）",
      html: `<p>全球咖啡育苗产业长期受制于一个根本性约束——<strong>“靠天吃饭”的农业周期</strong>：传统土培育苗需 <strong>8–12 个月</strong>，且出苗严格依赖雨季，资金占用长、供给不可预测、产能难以复制。</p>
<p>我们的解决方案是<strong>雾化水培（气雾培）咖啡育苗技术</strong>，用室内可控环境与高氧气雾化根区，将周期压缩至 <strong>4 个月</strong>，节水 <strong>95%</strong>，同时产出 DQI 值可突破 0.5、甚至达 0.8–1.0 的“超级壮苗”。</p>
<p><strong>本项目已有真实运营数据背书</strong>：龙岗基地以 <strong>81 套系统、10.8 亩场地</strong>，实现 <strong>年产 615,000 棵咖啡苗、预计年收入 ¥1,537.5 万、毛利率 73.5%</strong>，单棵成本 <strong>¥6.61</strong>、售价 <strong>¥25</strong>、单棵毛利 <strong>¥18.39</strong>。初始投资仅 <strong>¥281.8 万</strong>，按毛利口径静态回收期约 <strong>3 个月</strong>。</p>
<p><strong>核心投资逻辑</strong>：我们用工业化的效率，去挑战农业化的周期。凭借已验证的单位经济模型、可复制的模块化产能，以及“高端科技苗 + 订单式育苗 + 技术解决方案输出”三条现金流曲线，在咖啡育苗产业的效率与特色双轨新格局中，占据“标准化、规模化、高溢价”的主导席位。</p>`
    },
    ar: {
      title: "الملخص التنفيذي",
      html: `<p>ظلت صناعة شتلات البن العالمية خاضعة لقيود أساسية تمثّلت في <strong>الدورة الزراعية “المعتمدة على الطقس”</strong>: فالمشاتل التقليدية في التربة تحتاج إلى <strong>8–12 شهراً</strong>، ويعتمد إنتاج الشتلات على موسم الأمطار، مع احتجاز رأس المال لفترات طويلة، وعرضٍ غير قابل للتنبؤ، وطاقة يصعب تكرارها.</p>
<p>حلّنا هو <strong>تقنية شتلات البن بالزراعة الهوائية (الرذاذ الضبابي)</strong>: بيئة داخلية محكومة ومنطقة جذرية ضبابية غنية بالأكسجين تضغط الدورة إلى <strong>4 أشهر</strong>، وتوفّر <strong>95% من المياه</strong>، وتنتج “شتلات فائقة القوة” قد يتجاوز مؤشر DQI فيها 0.5 بل يصل إلى 0.8–1.0.</p>
<p><strong>يستند المشروع إلى بيانات تشغيلية حقيقية:</strong> فقاعدة لونغغانغ، عبر <strong>81 نظاماً على مساحة 10.8 مو</strong>، تحقق <strong>615,000 شتلة سنوياً، وإيرادات سنوية متوقعة تبلغ 15.375 مليون يوان، وهامش ربح إجمالي 73.5%</strong> — بتكلفة <strong>6.61 يوان</strong> للشتلة وسعر بيع <strong>25 يواناً</strong> وربح إجمالي <strong>18.39 يواناً</strong> للشتلة. ويبلغ الاستثمار الأولي <strong>2.818 مليون يوان</strong> فقط، مع فترة استرداد ثابتة تبلغ نحو <strong>3 أشهر</strong> وفقاً لهامش الربح الإجمالي.</p>
<p><strong>منطق الاستثمار الجوهري:</strong> نوظّف كفاءة الصناعة لتحدّي دورة الزراعة. فبفضل نموذج اقتصادي موثّق للوحدة، وطاقة إنتاجية معيارية قابلة للتكرار، وثلاثة منحنيات للتدفق النقدي — “شتلات تقنية فاخرة + إنتاج شتلات حسب الطلب + تصدير حلول تقنية” — نستهدف تبوّؤ الموقع الريادي القائم على “التوحيد القياسي والحجم والعلاوة السعرية المرتفعة” في المشهد الجديد مزدوج المسار لصناعة شتلات البن.</p>`
    }
  };

  P['why-invest'] = {
    en: {
      title: "Why Invest",
      html: `<ol>
<li><strong>We hit a structural + era-level pain point:</strong> we crack the “long cycle, weather-dependence, high water use” problem and capture the certain, climate-driven replacement demand.</li>
<li><strong>Validated hard data:</strong> 615K seedlings/year, ¥15.375M annual revenue, 73.5% gross margin, ~3-month gross-margin payback.</li>
<li><strong>Quantifiable tech advantage:</strong> 4-month cycle, 95% water saving, 114× density, DQI “super seedlings”.</li>
<li><strong>A clear business model:</strong> premium brand + order-based seedling production + SaaS technology output — three cash-flow curves.</li>
<li><strong>Huge value-migration space:</strong> the industry value center shifts upward from “planting source” to “seedling technology &amp; variety R&amp;D”.</li>
<li><strong>Aligned with capital trends:</strong> precision agriculture + climate resilience + ESG.</li>
<li><strong>Defensible and replicable:</strong> patents + know-how + modular standardization, with full scale-up capability.</li>
</ol>
<div class="closing">We use industrial efficiency to challenge the agricultural cycle. With a validated unit-economic model and replicable modular capacity, we stand on the side of “standardization, scale, and high premium” — leading the value migration of the coffee industry chain.</div>`
    },
    zh: {
      title: "投资亮点总结（Why Invest）",
      html: `<ol>
<li><strong>踩中结构性 + 时代性痛点</strong>：破解“周期长、看天吃饭、高耗水”，并承接气候危机驱动的确定性更新需求；</li>
<li><strong>已验证的硬数据</strong>：615K 棵/年、¥1,537.5 万年收入、73.5% 毛利、约 3 个月毛利回收；</li>
<li><strong>可量化的技术优势</strong>：4 个月周期、95% 节水、密度高 114 倍、DQI 超级壮苗；</li>
<li><strong>清晰的商业模式</strong>：高端品牌 + 订单式育苗 + SaaS 技术输出三条现金流曲线；</li>
<li><strong>巨大的价值迁移空间</strong>：产业链价值中心从“种植源头”上移至“育苗科技与品种研发”；</li>
<li><strong>契合资本风向</strong>：精密农业 + 气候韧性 + ESG，符合农业科技投资逻辑；</li>
<li><strong>有壁垒、可复制</strong>：专利 + Know-how + 模块化标准化，具备规模化扩张能力。</li>
</ol>
<div class="closing">我们用工业化的效率，挑战农业化的周期。凭借已验证的单位经济模型与模块化可复制产能，我们站在“标准化、规模化、高溢价”的那一侧，成为咖啡产业链价值上移的引领者。</div>`
    },
    ar: {
      title: "لماذا الاستثمار",
      html: `<ol>
<li><strong>نعالج مشكلة هيكلية ومرحلة زمنية:</strong> نكسر قيود “الدورة الطويلة والاعتماد على الطقس والاستهلاك المرتفع للمياه” ونستوعب الطلب المؤكد المدفوع بأزمة المناخ.</li>
<li><strong>بيانات صلبة موثّقة:</strong> 615 ألف شتلة سنوياً، وإيرادات سنوية 15.375 مليون يوان، وهامش ربح إجمالي 73.5%، واسترداد خلال نحو 3 أشهر وفقاً لهامش الربح.</li>
<li><strong>ميزة تقنية قابلة للقياس:</strong> دورة 4 أشهر، وتوفير 95% من المياه، وكثافة أعلى 114 مرة، وشتلات فائقة بمؤشر DQI.</li>
<li><strong>نموذج عمل واضح:</strong> علامة تجارية فاخرة + إنتاج شتلات حسب الطلب + تصدير تقنية SaaS — ثلاثة منحنيات للتدفق النقدي.</li>
<li><strong>مساحة هائلة لانتقال القيمة:</strong> ينتقل مركز القيمة في سلسلة الصناعة من “مصدر الزراعة” إلى “تقنية الشتلات وبحوث الأصناف”.</li>
<li><strong>متوافق مع اتجاهات رأس المال:</strong> الزراعة الدقيقة + المرونة المناخية + ESG.</li>
<li><strong>محمي وقابل للتكرار:</strong> براءات اختراع + خبرة فنية + توحيد قياسي معياري، مع قدرة كاملة على التوسع.</li>
</ol>
<div class="closing">نوظّف كفاءة الصناعة لتحدّي دورة الزراعة. فبفضل نموذج اقتصادي موثّق للوحدة وطاقة إنتاجية معيارية قابلة للتكرار، نقف إلى جانب “التوحيد القياسي والحجم والعلاوة السعرية” — لنقود انتقال القيمة في سلسلة صناعة البن.</div>`
    }
  };
})();
