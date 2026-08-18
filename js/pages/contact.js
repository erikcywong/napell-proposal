/* ============================================================
   NAPELL — Contact page
   ============================================================ */
(function () {
  var P = window.I18N.pages;

  var wa = '<svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>';
  var wc = '<svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/></svg>';
  var ml = '<svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-10 6L2 7"/></svg>';

  P.contact = {
    en: {
      title: "Contact",
      html: `<p class="contact-intro">Reach the NAPELL team directly. We reply on WhatsApp and WeChat during business hours, and by email within 24 hours.</p>
<div class="contact-grid">
  <a class="contact-card" href="https://wa.me/85293188252" target="_blank" rel="noopener">
    <span class="contact-icon">${wa}</span>
    <span class="contact-name">WhatsApp</span>
    <span class="contact-value">+852-93188252</span>
    <span class="contact-action">Open chat <span class="arr">→</span></span>
  </a>
  <div class="contact-card">
    <span class="contact-icon">${wc}</span>
    <span class="contact-name">WeChat</span>
    <span class="contact-value">+86-15800222338</span>
    <button class="copy-btn" data-copy="+86-15800222338" data-label="Copy">Copy</button>
  </div>
  <a class="contact-card" href="mailto:erik.wong@napell.bio">
    <span class="contact-icon">${ml}</span>
    <span class="contact-name">Email</span>
    <span class="contact-value">erik.wong@napell.bio</span>
    <span class="contact-action">Send email <span class="arr">→</span></span>
  </a>
</div>`
    },
    zh: {
      title: "联系我们",
      html: `<p class="contact-intro">直接联系 NAPELL 团队。WhatsApp 与微信在工作时间内回复，邮件将在 24 小时内回复。</p>
<div class="contact-grid">
  <a class="contact-card" href="https://wa.me/85293188252" target="_blank" rel="noopener">
    <span class="contact-icon">${wa}</span>
    <span class="contact-name">WhatsApp</span>
    <span class="contact-value">+852-93188252</span>
    <span class="contact-action">打开对话 <span class="arr">→</span></span>
  </a>
  <div class="contact-card">
    <span class="contact-icon">${wc}</span>
    <span class="contact-name">微信</span>
    <span class="contact-value">+86-15800222338</span>
    <button class="copy-btn" data-copy="+86-15800222338" data-label="复制">复制</button>
  </div>
  <a class="contact-card" href="mailto:erik.wong@napell.bio">
    <span class="contact-icon">${ml}</span>
    <span class="contact-name">邮箱</span>
    <span class="contact-value">erik.wong@napell.bio</span>
    <span class="contact-action">发送邮件 <span class="arr">→</span></span>
  </a>
</div>`
    },
    ar: {
      title: "تواصل معنا",
      html: `<p class="contact-intro">تواصل مع فريق NAPELL مباشرةً. نردّ عبر واتساب ووي تشات خلال ساعات العمل، وعبر البريد الإلكتروني خلال 24 ساعة.</p>
<div class="contact-grid">
  <a class="contact-card" href="https://wa.me/85293188252" target="_blank" rel="noopener">
    <span class="contact-icon">${wa}</span>
    <span class="contact-name">واتساب</span>
    <span class="contact-value">+852-93188252</span>
    <span class="contact-action">فتح المحادثة <span class="arr">←</span></span>
  </a>
  <div class="contact-card">
    <span class="contact-icon">${wc}</span>
    <span class="contact-name">وي تشات</span>
    <span class="contact-value">+86-15800222338</span>
    <button class="copy-btn" data-copy="+86-15800222338" data-label="نسخ">نسخ</button>
  </div>
  <a class="contact-card" href="mailto:erik.wong@napell.bio">
    <span class="contact-icon">${ml}</span>
    <span class="contact-name">البريد الإلكتروني</span>
    <span class="contact-value">erik.wong@napell.bio</span>
    <span class="contact-action">إرسال بريد <span class="arr">←</span></span>
  </a>
</div>`
    }
  };
})();
