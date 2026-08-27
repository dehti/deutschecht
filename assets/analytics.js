/*
 * Privacy-first GA4 integration for DeutschEcht.
 *
 * Before publishing, replace the empty value below with the Measurement ID
 * from Google Analytics (format: G-XXXXXXXXXX). This ID is public and is
 * safe to store in this file. No analytics request is made until the visitor
 * explicitly accepts analytics in the banner.
 */
window.DEUTSCHECHT_ANALYTICS_ID = 'G-166ZLXWQZK';

(() => {
  const measurementId = window.DEUTSCHECHT_ANALYTICS_ID;
  const consentKey = 'deutschecht_analytics_consent';
  const privacyUrl = 'datenschutz.html';
  let analyticsReady = false;

  const styles = `
    .privacy-settings{position:fixed;right:16px;bottom:16px;z-index:60;border:1px solid #e8dfd2;border-radius:999px;background:#fff;color:#101010;padding:9px 13px;font:700 12px Manrope,Arial;box-shadow:0 8px 24px #3b2b1830;cursor:pointer}
    .cookie-backdrop{position:fixed;inset:0;z-index:70;background:#10101075;display:grid;place-items:end center;padding:20px}
    .cookie-banner{width:min(680px,100%);background:#fffdf8;color:#101010;border:1px solid #e8dfd2;border-radius:22px;padding:24px;box-shadow:0 18px 45px #0004;font:14px/1.55 Manrope,Arial}
    .cookie-banner h2{font-size:23px;letter-spacing:-1px;margin:0 0 8px}.cookie-banner p{margin:0 0 14px;color:#4e4a45}.cookie-banner a{text-decoration:underline}.cookie-actions{display:flex;gap:10px;flex-wrap:wrap}.cookie-actions button{font:800 13px Manrope,Arial;border:0;border-radius:11px;padding:11px 15px;cursor:pointer}.cookie-accept{background:#101010;color:#fff}.cookie-decline{background:#fff;border:1px solid #e8dfd2!important;color:#101010}
  `;

  function send(name, params = {}) {
    if (analyticsReady && typeof window.gtag === 'function') window.gtag('event', name, params);
  }

  function loadAnalytics() {
    if (!measurementId || analyticsReady) return;
    window.dataLayer = window.dataLayer || [];
    window.gtag = function gtag(){ window.dataLayer.push(arguments); };
    window.gtag('js', new Date());
    window.gtag('config', measurementId, { anonymize_ip: true, send_page_view: true });
    const script = document.createElement('script');
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(measurementId)}`;
    document.head.appendChild(script);
    analyticsReady = true;
    trackInteractions();
  }

  function labelFor(element) {
    return (element.dataset.analyticsLabel || element.textContent || element.id || 'unknown').trim().replace(/\s+/g, ' ').slice(0, 100);
  }

  function trackInteractions() {
    document.addEventListener('click', (event) => {
      const link = event.target.closest('a');
      if (link) {
        const destination = link.getAttribute('href') || '';
        if (destination.startsWith('http')) send('outbound_click', { link_text: labelFor(link), link_url: destination });
        else if (destination.startsWith('#')) send('section_opened', { section: destination.slice(1) || 'home' });
      }

      const topic = event.target.closest('.topic');
      if (topic) send('topic_selected', { topic: labelFor(topic) });

      const answer = event.target.closest('.answer');
      if (answer) send('quiz_answered', { result: answer.dataset.ok === 'true' ? 'correct' : 'wrong' });

      if (event.target.closest('#retry')) send('quiz_restarted');
      if (event.target.closest('#fill')) send('exercise_completed', { exercise: 'fill_word_demo' });
      if (event.target.closest('#lang')) send('language_changed', { language: document.documentElement.lang === 'de' ? 'uk' : 'de' });
    });

    const seen = new Set();
    const observer = new IntersectionObserver((entries) => entries.forEach((entry) => {
      if (entry.isIntersecting && !seen.has(entry.target.id)) {
        seen.add(entry.target.id);
        send('section_viewed', { section: entry.target.id });
      }
    }), { threshold: 0.55 });
    document.querySelectorAll('main section[id]').forEach((section) => observer.observe(section));
  }

  function setConsent(value) {
    localStorage.setItem(consentKey, value);
    document.querySelector('.cookie-backdrop')?.remove();
    if (value === 'accepted') loadAnalytics();
  }

  function renderConsentUi() {
    const style = document.createElement('style');
    style.textContent = styles;
    document.head.appendChild(style);

    const footerLinks = document.querySelector('.links');
    if (footerLinks && !footerLinks.querySelector('[data-privacy-link]')) {
      const privacyLink = document.createElement('a');
      privacyLink.href = privacyUrl;
      privacyLink.dataset.privacyLink = 'true';
      privacyLink.textContent = 'Datenschutz';
      footerLinks.appendChild(privacyLink);
    }

    // Until a real GA4 Measurement ID is entered, the site stays entirely
    // analytics-free and does not show a consent prompt.
    if (!measurementId) return;

    const settings = document.createElement('button');
    settings.className = 'privacy-settings';
    settings.type = 'button';
    settings.textContent = 'Privatsphäre';
    settings.addEventListener('click', () => { localStorage.removeItem(consentKey); showBanner(); });
    document.body.appendChild(settings);

    if (localStorage.getItem(consentKey) === 'accepted') loadAnalytics();
    else if (!localStorage.getItem(consentKey)) showBanner();
  }

  function showBanner() {
    if (document.querySelector('.cookie-backdrop')) return;
    const banner = document.createElement('div');
    banner.className = 'cookie-backdrop';
    banner.innerHTML = `<section class="cookie-banner" role="dialog" aria-modal="true" aria-labelledby="cookie-title">
      <h2 id="cookie-title">Налаштування приватності</h2>
      <p>З вашої згоди ми використовуємо Google Analytics, щоб бачити анонімну статистику відвідувань і покращувати сайт. Ви можете змінити вибір будь-коли.</p>
      <p><a href="${privacyUrl}">Детальніше про конфіденційність</a></p>
      <div class="cookie-actions"><button class="cookie-accept" type="button">Прийняти аналітику</button><button class="cookie-decline" type="button">Лише необхідне</button></div>
    </section>`;
    banner.querySelector('.cookie-accept').addEventListener('click', () => setConsent('accepted'));
    banner.querySelector('.cookie-decline').addEventListener('click', () => setConsent('declined'));
    document.body.appendChild(banner);
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', renderConsentUi);
  else renderConsentUi();
})();
