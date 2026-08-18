/* ============================================================
   NAPELL — Financials: financial-model, milestones, use-of-funds
   ============================================================ */
(function () {
  var P = window.I18N.pages;

  P['financial-model'] = {
    en: {
      title: "Financial Model",
      html: `<div class="callout blue"><span class="callout-title">Source</span>Longgang base operating cost analysis (napell.space) — all figures are measured/accounted, not fictional.</div>

<h3>5.1 Capacity plan</h3>
<div class="table-wrap"><table>
<thead><tr><th>Parameter</th><th>Value</th></tr></thead>
<tbody>
<tr><td>Per-system dimensions</td><td>22.8m × 1.8m, layer height 1.4m</td></tr>
<tr><td>Panel spec</td><td>2280 × 60 cm</td></tr>
<tr><td>Early grid (months 0–2)</td><td>6×6 cm → <strong>11,400 seedlings/system/batch</strong></td></tr>
<tr><td>Late grid (months 2–4)</td><td>12×12 cm → <strong>2,850 seedlings/system/batch</strong></td></tr>
<tr><td>Cycle structure</td><td>2-month seedling + 4-month large seedling</td></tr>
<tr><td>Batches</td><td><strong>3 batches/year</strong> (staggered rotation; a new batch starts every 2 months, continuous output)</td></tr>
<tr><td>Target spec</td><td>50cm large seedlings</td></tr>
<tr><td>Site</td><td>10.8 mu (8.8 mu greenhouse + 2.4 mu open space)</td></tr>
</tbody></table></div>

<h3>5.2 Two scale plans</h3>
<div class="table-wrap"><table>
<thead><tr><th>Indicator</th><th>Plan A (45 systems)</th><th>Plan B (81 systems, recommended)</th></tr></thead>
<tbody>
<tr><td>Greenhouse area</td><td>8.8 mu</td><td>10.8 mu</td></tr>
<tr><td>Annual seed usage</td><td>350,000 seeds</td><td>620,000 seeds</td></tr>
<tr><td><strong>Annual output</strong></td><td>342,000 seedlings</td><td><strong>615,000 seedlings</strong></td></tr>
<tr><td>Equipment cost</td><td>¥665,339</td><td>¥665,339</td></tr>
<tr><td>Material cost</td><td>¥578,930</td><td>¥737,073</td></tr>
<tr><td>Dynamic consumables</td><td>¥942,800</td><td>¥1,415,400</td></tr>
<tr><td><strong>Total startup capital</strong></td><td>¥2,187,069</td><td><strong>¥2,817,812</strong></td></tr>
<tr><td><strong>Projected annual revenue</strong></td><td>¥8.55M</td><td><strong>¥15.375M</strong></td></tr>
</tbody></table></div>

<h3>5.3 Unit economics</h3>
<div class="table-wrap"><table>
<thead><tr><th>Cost item</th><th>Amount / seedling</th><th>Share</th></tr></thead>
<tbody>
<tr><td>Seeds</td><td>¥1.70</td><td>25.7%</td></tr>
<tr><td>Shipping</td><td>¥2.00</td><td>30.2%</td></tr>
<tr><td>Equipment depreciation</td><td>¥1.064</td><td>16.1%</td></tr>
<tr><td>Water, electricity &amp; nutrients</td><td>¥1.00</td><td>15.1%</td></tr>
<tr><td>Coco coir &amp; packaging bags</td><td>¥0.50</td><td>7.6%</td></tr>
<tr><td>Misc &amp; labor</td><td>¥0.35</td><td>5.3%</td></tr>
<tr class="total"><td>Total cost</td><td>¥6.614</td><td>100%</td></tr>
<tr><td><strong>Price</strong></td><td><strong>¥25.00</strong></td><td>—</td></tr>
<tr><td><strong>Unit gross profit</strong></td><td><strong>¥18.39</strong></td><td>—</td></tr>
<tr><td><strong>Gross margin</strong></td><td><strong>73.54%</strong></td><td>—</td></tr>
</tbody></table></div>

<h3>5.4 Payback calculation</h3>
<ul>
<li>Plan B annual gross profit = ¥18.39 × 615,000 = <strong>¥11.307M</strong></li>
<li>Total startup capital ¥2.818M ÷ annual gross profit ¥11.307M ≈ <strong>0.25 years (~3 months)</strong></li>
</ul>
<div class="callout warn"><span class="callout-title">Note</span>This is a gross-margin payback, excluding period expenses and finance costs; due diligence should re-verify on a net-profit basis.</div>

<h3>5.5 Three-year financial outlook (directional)</h3>
<div class="table-wrap"><table>
<thead><tr><th>Year</th><th>Production bases</th><th>Annual capacity</th><th>Annual revenue (¥)</th><th>Annual gross profit (¥, 73.5%)</th></tr></thead>
<tbody>
<tr><td>Y1</td><td>1 (Longgang)</td><td>615K</td><td>15.375M</td><td>11.307M</td></tr>
<tr><td>Y2</td><td>3</td><td>1.845M</td><td>46.125M</td><td>33.921M</td></tr>
<tr><td>Y3</td><td>5</td><td>3.075M</td><td>76.875M</td><td>56.535M</td></tr>
</tbody></table></div>
<p><em>Linear-scaling assumption: each base replicates the 81-system, 615K/year standard capacity. SaaS and technology-licensing revenue are not included and can form a second growth curve.</em></p>

<h3>5.6 Pricing strategy</h3>
<ol>
<li><strong>Value anchoring:</strong> the field return of “78 days shorter + 60–80% lower transplant mortality + 12–18 months earlier first harvest” supports the ¥25 tech premium;</li>
<li><strong>Order-based price lock:</strong> long-term supply contracts lock price and capacity, smoothing cash flow;</li>
<li><strong>Tiered pricing:</strong> standard seedlings + premium specialty varieties + climate-adapted specialty seedlings;</li>
<li><strong>Service premium:</strong> SaaS system output and technical services charged by subscription/licensing, with higher margin than seedling sales.</li>
</ol>`
    },
    zh: {
      title: "财务模型（Financial Model）",
      html: `<div class="callout blue"><span class="callout-title">数据来源</span>龙岗基地运营成本分析（napell.space），全部为实测/核算值，非虚构。</div>

<h3>5.1 产能规划（Capacity Plan）</h3>
<div class="table-wrap"><table>
<thead><tr><th>参数</th><th>数值</th></tr></thead>
<tbody>
<tr><td>单套系统尺寸</td><td>22.8m × 1.8m，层高 1.4m</td></tr>
<tr><td>面板规格</td><td>2280 × 60 cm</td></tr>
<tr><td>前期网格（0–2 月）</td><td>6×6 cm → <strong>11,400 棵/系统/批</strong></td></tr>
<tr><td>后期网格（2–4 月）</td><td>12×12 cm → <strong>2,850 棵/系统/批</strong></td></tr>
<tr><td>周期结构</td><td>幼苗 2 个月 + 大苗 4 个月</td></tr>
<tr><td>批次</td><td><strong>3 批/年</strong>（交错轮换，每 2 个月启动新批、持续出货）</td></tr>
<tr><td>目标规格</td><td>50cm 大苗</td></tr>
<tr><td>场地</td><td>10.8 亩（8.8 亩温室 + 2.4 亩空地）</td></tr>
</tbody></table></div>

<h3>5.2 两套规模方案</h3>
<div class="table-wrap"><table>
<thead><tr><th>指标</th><th>方案 A（45 系统）</th><th>方案 B（81 系统，推荐）</th></tr></thead>
<tbody>
<tr><td>温室面积</td><td>8.8 亩</td><td>10.8 亩</td></tr>
<tr><td>年用种量</td><td>350,000 粒</td><td>620,000 粒</td></tr>
<tr><td><strong>年产量</strong></td><td>342,000 棵</td><td><strong>615,000 棵</strong></td></tr>
<tr><td>设备费用</td><td>¥665,339</td><td>¥665,339</td></tr>
<tr><td>物料费用</td><td>¥578,930</td><td>¥737,073</td></tr>
<tr><td>动态耗材</td><td>¥942,800</td><td>¥1,415,400</td></tr>
<tr><td><strong>总启动资金</strong></td><td>¥2,187,069</td><td><strong>¥2,817,812</strong></td></tr>
<tr><td><strong>预计年收入</strong></td><td>¥855.0 万</td><td><strong>¥1,537.5 万</strong></td></tr>
</tbody></table></div>

<h3>5.3 单位经济模型（Unit Economics）</h3>
<div class="table-wrap"><table>
<thead><tr><th>成本项</th><th>金额/棵</th><th>占比</th></tr></thead>
<tbody>
<tr><td>种子</td><td>¥1.70</td><td>25.7%</td></tr>
<tr><td>运费</td><td>¥2.00</td><td>30.2%</td></tr>
<tr><td>设备折旧</td><td>¥1.064</td><td>16.1%</td></tr>
<tr><td>水电与营养液</td><td>¥1.00</td><td>15.1%</td></tr>
<tr><td>椰糠与包装袋</td><td>¥0.50</td><td>7.6%</td></tr>
<tr><td>杂费与人工</td><td>¥0.35</td><td>5.3%</td></tr>
<tr class="total"><td>总成本</td><td>¥6.614</td><td>100%</td></tr>
<tr><td><strong>售价</strong></td><td><strong>¥25.00</strong></td><td>—</td></tr>
<tr><td><strong>单棵毛利</strong></td><td><strong>¥18.39</strong></td><td>—</td></tr>
<tr><td><strong>毛利率</strong></td><td><strong>73.54%</strong></td><td>—</td></tr>
</tbody></table></div>

<h3>5.4 投资回收测算</h3>
<ul>
<li>方案 B 年毛利 = ¥18.39 × 615,000 = <strong>¥1,130.7 万</strong></li>
<li>总启动资金 ¥281.8 万 ÷ 年毛利 ¥1,130.7 万 ≈ <strong>0.25 年（约 3 个月）</strong></li>
</ul>
<div class="callout warn"><span class="callout-title">注意</span>此口径为毛利回收，未含期间费用与财务费用，尽调时需以净利润口径复核。</div>

<h3>5.5 三年财务展望（方向性）</h3>
<div class="table-wrap"><table>
<thead><tr><th>年度</th><th>生产基地</th><th>年产能</th><th>年收入（¥）</th><th>年毛利（¥，73.5%）</th></tr></thead>
<tbody>
<tr><td>Y1</td><td>1（龙岗）</td><td>61.5 万</td><td>1,537.5 万</td><td>1,130.7 万</td></tr>
<tr><td>Y2</td><td>3</td><td>184.5 万</td><td>4,612.5 万</td><td>3,392.1 万</td></tr>
<tr><td>Y3</td><td>5</td><td>307.5 万</td><td>7,687.5 万</td><td>5,653.5 万</td></tr>
</tbody></table></div>
<p><em>线性扩展假设：每个基地复制 81 系统、615K 棵/年的标准产能。SaaS 与技术许可收入未计入，可形成第二增长曲线。</em></p>

<h3>5.6 定价策略</h3>
<ol>
<li><strong>价值锚定</strong>：以“缩短 78 天 + 移栽死亡率降 60–80% + 首采提前 12–18 个月”的田间回报，支撑 ¥25 的科技溢价；</li>
<li><strong>订单式锁价</strong>：长期供应合同锁定价格与产能，平滑现金流；</li>
<li><strong>分层定价</strong>：标准苗 + 高端精品品种苗 + 气候适应型特种苗分层定价；</li>
<li><strong>服务溢价</strong>：SaaS 系统输出与技术服务按订阅/许可收费，毛利高于卖苗。</li>
</ol>`
    },
    ar: {
      title: "النموذج المالي",
      html: `<div class="callout blue"><span class="callout-title">المصدر</span>تحليل تكلفة تشغيل قاعدة لونغغانغ (napell.space) — جميع الأرقام مقيسة/محسوبة، وليست خيالية.</div>

<h3>5.1 خطة الطاقة الإنتاجية</h3>
<div class="table-wrap"><table>
<thead><tr><th>المعامل</th><th>القيمة</th></tr></thead>
<tbody>
<tr><td>أبعاد النظام الواحد</td><td>22.8م × 1.8م، ارتفاع الطبقة 1.4م</td></tr>
<tr><td>مواصفات اللوح</td><td>2280 × 60 سم</td></tr>
<tr><td>الشبكة المبكرة (الأشهر 0–2)</td><td>6×6 سم → <strong>11,400 شتلة/نظام/دفعة</strong></td></tr>
<tr><td>الشبكة المتأخرة (الأشهر 2–4)</td><td>12×12 سم → <strong>2,850 شتلة/نظام/دفعة</strong></td></tr>
<tr><td>بنية الدورة</td><td>شتلات صغيرة شهران + شتلات كبيرة 4 أشهر</td></tr>
<tr><td>الدفعات</td><td><strong>3 دفعات/سنة</strong> (تناوب متداخل؛ دفعة جديدة كل شهرين مع إنتاج مستمر)</td></tr>
<tr><td>المواصفة المستهدفة</td><td>شتلات كبيرة بارتفاع 50 سم</td></tr>
<tr><td>الموقع</td><td>10.8 مو (8.8 مو صوبة + 2.4 مو مساحة مفتوحة)</td></tr>
</tbody></table></div>

<h3>5.2 خطتا توسع</h3>
<div class="table-wrap"><table>
<thead><tr><th>المؤشر</th><th>الخطة أ (45 نظاماً)</th><th>الخطة ب (81 نظاماً، موصى بها)</th></tr></thead>
<tbody>
<tr><td>مساحة الصوبة</td><td>8.8 مو</td><td>10.8 مو</td></tr>
<tr><td>استهلاك البذور السنوي</td><td>350,000 بذرة</td><td>620,000 بذرة</td></tr>
<tr><td><strong>الإنتاج السنوي</strong></td><td>342,000 شتلة</td><td><strong>615,000 شتلة</strong></td></tr>
<tr><td>تكلفة المعدات</td><td>665,339 يواناً</td><td>665,339 يواناً</td></tr>
<tr><td>تكلفة المواد</td><td>578,930 يواناً</td><td>737,073 يواناً</td></tr>
<tr><td>المستهلكات الديناميكية</td><td>942,800 يواناً</td><td>1,415,400 يواناً</td></tr>
<tr><td><strong>إجمالي رأس المال التأسيسي</strong></td><td>2,187,069 يواناً</td><td><strong>2,817,812 يواناً</strong></td></tr>
<tr><td><strong>الإيراد السنوي المتوقع</strong></td><td>8.55 ملايين يوان</td><td><strong>15.375 مليون يوان</strong></td></tr>
</tbody></table></div>

<h3>5.3 اقتصاديات الوحدة</h3>
<div class="table-wrap"><table>
<thead><tr><th>بند التكلفة</th><th>المبلغ/شتلة</th><th>الحصة</th></tr></thead>
<tbody>
<tr><td>البذور</td><td>1.70 يوان</td><td>25.7%</td></tr>
<tr><td>الشحن</td><td>2.00 يوان</td><td>30.2%</td></tr>
<tr><td>إهلاك المعدات</td><td>1.064 يوان</td><td>16.1%</td></tr>
<tr><td>المياه والكهرباء والمغذيات</td><td>1.00 يوان</td><td>15.1%</td></tr>
<tr><td>قشور جوز الهند وأكياس التغليف</td><td>0.50 يوان</td><td>7.6%</td></tr>
<tr><td>نفقات متنوعة وعمالة</td><td>0.35 يوان</td><td>5.3%</td></tr>
<tr class="total"><td>التكلفة الإجمالية</td><td>6.614 يوان</td><td>100%</td></tr>
<tr><td><strong>سعر البيع</strong></td><td><strong>25.00 يواناً</strong></td><td>—</td></tr>
<tr><td><strong>الربح الإجمالي للشتلة</strong></td><td><strong>18.39 يواناً</strong></td><td>—</td></tr>
<tr><td><strong>هامش الربح الإجمالي</strong></td><td><strong>73.54%</strong></td><td>—</td></tr>
</tbody></table></div>

<h3>5.4 حساب الاسترداد</h3>
<ul>
<li>الربح الإجمالي السنوي للخطة ب = 18.39 × 615,000 = <strong>11.307 مليون يوان</strong></li>
<li>رأس المال التأسيسي 2.818 مليون يوان ÷ الربح الإجمالي السنوي 11.307 مليون ≈ <strong>0.25 سنة (نحو 3 أشهر)</strong></li>
</ul>
<div class="callout warn"><span class="callout-title">ملاحظة</span>هذا الاسترداد محسوب على أساس هامش الربح الإجمالي، دون مصاريف الفترة والتكاليف التمويلية؛ وتتطلب العناية الواجبة إعادة التحقق على أساس صافي الربح.</div>

<h3>5.5 التوقعات المالية لثلاث سنوات (اتجاهية)</h3>
<div class="table-wrap"><table>
<thead><tr><th>السنة</th><th>قواعد الإنتاج</th><th>الطاقة السنوية</th><th>الإيراد السنوي (يوان)</th><th>الربح الإجمالي السنوي (يوان، 73.5%)</th></tr></thead>
<tbody>
<tr><td>Y1</td><td>1 (لونغغانغ)</td><td>615 ألف</td><td>15.375 مليون</td><td>11.307 مليون</td></tr>
<tr><td>Y2</td><td>3</td><td>1.845 مليون</td><td>46.125 مليون</td><td>33.921 مليون</td></tr>
<tr><td>Y3</td><td>5</td><td>3.075 مليون</td><td>76.875 مليون</td><td>56.535 مليون</td></tr>
</tbody></table></div>
<p><em>افتراض التوسع الخطي: كل قاعدة تكرر الطاقة المعيارية 81 نظاماً و615 ألف شتلة/سنة. ولم تُدرج إيرادات SaaS وتراخيص التقنية، ويمكن أن تشكّل منحنى نمو ثانياً.</em></p>

<h3>5.6 استراتيجية التسعير</h3>
<ol>
<li><strong>ترسيخ القيمة:</strong> العائد الحقلي المتمثل في “تقصير 78 يوماً + خفض وفيات النقل 60–80% + تبكير أول حصاد 12–18 شهراً” يدعم العلاوة التقنية البالغة 25 يواناً؛</li>
<li><strong>تثبيت السعر حسب الطلب:</strong> عقود التوريد طويلة الأجل تثبّت السعر والطاقة وتنعّم التدفق النقدي؛</li>
<li><strong>تسعير متدرج:</strong> شتلات قياسية + أصناف مختصة فاخرة + شتلات خاصة متكيّفة مع المناخ؛</li>
<li><strong>علاوة الخدمة:</strong> تصدير أنظمة SaaS والخدمات التقنية مقابل اشتراك/ترخيص، بهامش أعلى من بيع الشتلات.</li>
</ol>`
    }
  };

  P.milestones = {
    en: {
      title: "Milestones",
      html: `<p>Execution milestones (per the napell roadmap):</p>
<div class="table-wrap"><table>
<thead><tr><th>Phase</th><th>Status</th><th>Detail</th></tr></thead>
<tbody>
<tr><td><strong>Phase 1 — Validation</strong></td><td>In progress</td><td>Longgang base: 81 systems, 615K seedlings/year</td></tr>
<tr><td><strong>Phase 2 — Strategic partnership</strong></td><td>Planning</td><td>Technology-transfer agreements + data integration</td></tr>
<tr><td><strong>Phase 3 — Pilot deployment (2026 Q3)</strong></td><td>Planned</td><td>3 pilot systems in Brazil / Vietnam / Ethiopia / Yemen; 12-month field evaluation</td></tr>
<tr><td><strong>Phase 4 — Scale (2027–2028)</strong></td><td>Planned</td><td>Open licensing; target 10 production bases by 2028</td></tr>
</tbody></table></div>`
    },
    zh: {
      title: "执行里程碑",
      html: `<p>依据 napell 路线图的执行里程碑：</p>
<div class="table-wrap"><table>
<thead><tr><th>阶段</th><th>状态</th><th>详情</th></tr></thead>
<tbody>
<tr><td><strong>Phase 1 验证</strong></td><td>进行中</td><td>龙岗基地 81 系统、615K 棵/年</td></tr>
<tr><td><strong>Phase 2 战略合作</strong></td><td>规划中</td><td>技术转移协议 + 数据整合</td></tr>
<tr><td><strong>Phase 3 试点部署（2026 Q3）</strong></td><td>规划中</td><td>巴西/越南/埃塞/也门 3 个试点系统，12 个月田间评估</td></tr>
<tr><td><strong>Phase 4 规模（2027–2028）</strong></td><td>规划中</td><td>开放许可，目标 2028 年 10 个生产基地</td></tr>
</tbody></table></div>`
    },
    ar: {
      title: "المعالم التنفيذية",
      html: `<p>المعالم التنفيذية (وفقاً لخارطة طريق napell):</p>
<div class="table-wrap"><table>
<thead><tr><th>المرحلة</th><th>الحالة</th><th>التفاصيل</th></tr></thead>
<tbody>
<tr><td><strong>المرحلة 1 — التحقق</strong></td><td>جارٍ التنفيذ</td><td>قاعدة لونغغانغ: 81 نظاماً، 615 ألف شتلة/سنة</td></tr>
<tr><td><strong>المرحلة 2 — الشراكة الاستراتيجية</strong></td><td>قيد التخطيط</td><td>اتفاقيات نقل التقنية + تكامل البيانات</td></tr>
<tr><td><strong>المرحلة 3 — النشر التجريبي (الربع الثالث 2026)</strong></td><td>مخطط لها</td><td>3 أنظمة تجريبية في البرازيل/فيتنام/إثيوبيا/اليمن؛ تقييم حقلي لمدة 12 شهراً</td></tr>
<tr><td><strong>المرحلة 4 — التوسع (2027–2028)</strong></td><td>مخطط لها</td><td>الترخيص المفتوح؛ استهداف 10 قواعد إنتاج بحلول 2028</td></tr>
</tbody></table></div>`
    }
  };

  P['use-of-funds'] = {
    en: {
      title: "Use of Funds",
      html: `<div class="table-wrap"><table>
<thead><tr><th>Use</th><th>Suggested share</th><th>Description</th></tr></thead>
<tbody>
<tr><td>Production facilities &amp; misting equipment</td><td><strong>40%</strong></td><td>Replicate the 81-system standard capacity to new bases</td></tr>
<tr><td>R&amp;D &amp; technology moat</td><td><strong>25%</strong></td><td>Nutrient formulas, transplant processes, variety selection, patent layout</td></tr>
<tr><td>Market development &amp; benchmark customers</td><td><strong>20%</strong></td><td>Large-plantation contracts, brand building</td></tr>
<tr><td>Team &amp; operations</td><td><strong>15%</strong></td><td>Core technical team and operating system</td></tr>
</tbody></table></div>`
    },
    zh: {
      title: "融资用途（Use of Funds）",
      html: `<div class="table-wrap"><table>
<thead><tr><th>用途</th><th>占比（建议）</th><th>说明</th></tr></thead>
<tbody>
<tr><td>生产设施与雾化设备</td><td><strong>40%</strong></td><td>复制 81 系统标准产能至新基地</td></tr>
<tr><td>研发与技术壁垒</td><td><strong>25%</strong></td><td>营养液配方、移栽工艺、品种选育、专利布局</td></tr>
<tr><td>市场开拓与标杆客户</td><td><strong>20%</strong></td><td>大型种植园签约、品牌建设</td></tr>
<tr><td>团队与运营</td><td><strong>15%</strong></td><td>核心技术团队与运营体系</td></tr>
</tbody></table></div>`
    },
    ar: {
      title: "استخدام الأموال",
      html: `<div class="table-wrap"><table>
<thead><tr><th>الاستخدام</th><th>الحصة المقترحة</th><th>الوصف</th></tr></thead>
<tbody>
<tr><td>مرافق الإنتاج ومعدات الرذاذ</td><td><strong>40%</strong></td><td>تكرار الطاقة المعيارية لـ 81 نظاماً في قواعد جديدة</td></tr>
<tr><td>البحث والتطوير والخندق التقني</td><td><strong>25%</strong></td><td>تركيبات المحلول المغذي، وعمليات النقل، وانتقاء الأصناف، وتخطيط البراءات</td></tr>
<tr><td>تطوير السوق والعملاء المرجعيون</td><td><strong>20%</strong></td><td>عقود المزارع الكبيرة وبناء العلامة التجارية</td></tr>
<tr><td>الفريق والعمليات</td><td><strong>15%</strong></td><td>الفريق التقني الأساسي ونظام التشغيل</td></tr>
</tbody></table></div>`
    }
  };
})();
