
(function () {
  const KEY = 'cookie_consent';

  function setConsent(value) {
    localStorage.setItem(KEY, value);
    hide();
  }

  function hide() {
    const bar = document.getElementById('cookie-consent');
    if (bar) bar.style.display = 'none';
  }

  function init() {
    if (localStorage.getItem(KEY)) return;
    const bar = document.getElementById('cookie-consent');
    if (bar) bar.style.display = 'block';
  }

  window.acceptCookies = function () { setConsent('accepted'); };
  window.rejectCookies = function () { setConsent('rejected'); };

  document.addEventListener('DOMContentLoaded', init);
})();
