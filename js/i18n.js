/* ============================================================
   NAPELL — i18n core: languages, UI strings, navigation
   ============================================================ */
window.I18N = window.I18N || {};

window.I18N.meta = {
  defaultLang: 'en',
  supported: [
    { code: 'en', name: 'English', native: 'English', short: 'EN', flag: '🌐', dir: 'ltr' },
    { code: 'zh', name: 'Mandarin Chinese', native: '简体中文', short: '中', flag: '🇨🇳', dir: 'ltr' },
    { code: 'ar', name: 'Saudi Arabic', native: 'العربية السعودية', short: 'ع', flag: '🇸🇦', dir: 'rtl' }
  ]
};

window.I18N.ui = {
  en: {
    modal: {
      title: 'Choose your language',
      subtitle: 'Select your preferred language to continue'
    },
    ui: {
      backTop: 'Back to top'
    },
    home: {
      eyebrow: 'Business Plan · Fundraising',
      ctaPrimary: 'Executive Summary',
      ctaSecondary: 'Financial Model'
    },
    footer: {
      tagline: 'Industrializing coffee seedling production with aeroponic precision.',
      source: 'Data source: napell.space — Longgang aeroponic seedling base operating cost analysis.',
      disclaimer: 'Financial figures are estimates based on current market conditions and do not constitute a return guarantee.',
      rights: 'All rights reserved.'
    }
  },
  zh: {
    modal: {
      title: '选择您的语言',
      subtitle: '请选择您偏好的语言以继续'
    },
    ui: {
      backTop: '返回顶部'
    },
    home: {
      eyebrow: '商业计划书 · 融资用途',
      ctaPrimary: '执行摘要',
      ctaSecondary: '财务模型'
    },
    footer: {
      tagline: '以工业化的确定性节奏，重构全球咖啡育苗产业。',
      source: '数据来源：napell.space — 龙岗气雾栽培育苗基地运营成本分析。',
      disclaimer: '财务数据为基于当前市场条件的估算，不构成收益承诺。',
      rights: '保留所有权利。'
    }
  },
  ar: {
    modal: {
      title: 'اختر لغتك',
      subtitle: 'حدّد لغتك المفضلة للمتابعة'
    },
    ui: {
      backTop: 'العودة إلى الأعلى'
    },
    home: {
      eyebrow: 'خطة عمل · تمويل',
      ctaPrimary: 'الملخص التنفيذي',
      ctaSecondary: 'النموذج المالي'
    },
    footer: {
      tagline: 'تصنيع إنتاج شتلات البن بدقة الزراعة الهوائية.',
      source: 'مصدر البيانات: napell.space — تحليل تكلفة تشغيل قاعدة شتلات لونغغانغ الهوائية.',
      disclaimer: 'الأرقام المالية تقديرات تستند إلى ظروف السوق الحالية ولا تشكل ضماناً للعائد.',
      rights: 'جميع الحقوق محفوظة.'
    }
  }
};

window.I18N.nav = {
  groups: [
    {
      id: 'overview',
      label: { en: 'Overview', zh: '概览', ar: 'نظرة عامة' },
      items: [
        { id: 'home', label: { en: 'Home', zh: '首页', ar: 'الرئيسية' } },
        { id: 'executive-summary', label: { en: 'Executive Summary', zh: '执行摘要', ar: 'الملخص التنفيذي' } },
        { id: 'why-invest', label: { en: 'Why Invest', zh: '投资亮点', ar: 'لماذا الاستثمار' } }
      ]
    },
    {
      id: 'market',
      label: { en: 'Market', zh: '市场', ar: 'السوق' },
      items: [
        { id: 'market-problem', label: { en: 'Market Problem', zh: '市场痛点', ar: 'مشكلة السوق' } },
        { id: 'market-opportunity', label: { en: 'Market Opportunity', zh: '市场机会', ar: 'فرص السوق' } }
      ]
    },
    {
      id: 'solution',
      label: { en: 'Solution', zh: '解决方案', ar: 'الحل' },
      items: [
        { id: 'solution', label: { en: 'Product & Technology', zh: '产品与技术', ar: 'المنتج والتقنية' } },
        { id: 'patents', label: { en: 'Patents & Know-how', zh: '专利与技术诀窍', ar: 'براءات الاختراع والخبرة' } }
      ]
    },
    {
      id: 'business',
      label: { en: 'Business', zh: '商业', ar: 'الأعمال' },
      items: [
        { id: 'business-model', label: { en: 'Business Model', zh: '商业模式', ar: 'نموذج العمل' } },
        { id: 'competitive-advantage', label: { en: 'Competitive Moat', zh: '竞争优势', ar: 'الميزة التنافسية' } }
      ]
    },
    {
      id: 'financials',
      label: { en: 'Financials', zh: '财务', ar: 'الشؤون المالية' },
      items: [
        { id: 'financial-model', label: { en: 'Financial Model', zh: '财务模型', ar: 'النموذج المالي' } },
        { id: 'milestones', label: { en: 'Milestones', zh: '里程碑', ar: 'المعالم' } },
        { id: 'use-of-funds', label: { en: 'Use of Funds', zh: '融资用途', ar: 'استخدام الأموال' } }
      ]
    },
    {
      id: 'risks',
      label: { en: 'Risks & Appendix', zh: '风险与附录', ar: 'المخاطر والملاحق' },
      items: [
        { id: 'risks', label: { en: 'Risks & Mitigation', zh: '风险与应对', ar: 'المخاطر والمعالجة' } },
        { id: 'appendix', label: { en: 'Appendix', zh: '附录', ar: 'الملحق' } }
      ]
    }
  ]
};

window.I18N.pages = window.I18N.pages || {};
