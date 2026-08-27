(function () {
  var header = document.querySelector('[data-site-header]');
  if (!header) return;

  var toggle = header.querySelector('[data-nav-toggle]');
  if (!toggle) return;

  toggle.addEventListener('click', function () {
    var isOpen = header.classList.toggle('is-open');
    toggle.setAttribute('aria-expanded', String(isOpen));
    toggle.setAttribute('aria-label', isOpen ? 'Close menu' : 'Open menu');
  });

  window.addEventListener('resize', function () {
    if (window.innerWidth > 900 && header.classList.contains('is-open')) {
      header.classList.remove('is-open');
      toggle.setAttribute('aria-expanded', 'false');
      toggle.setAttribute('aria-label', 'Open menu');
    }
  });
})();

(function () {
  var CONTACT_EMAIL = 'studiosienna.au@gmail.com';

  document.addEventListener('submit', function (event) {
    var form = event.target.closest('[data-mailto-form]');
    if (!form) return;
    event.preventDefault();

    var data = new FormData(form);
    var subject = data.get('subject') || 'Enquiry';
    var body =
      'Name: ' + (data.get('name') || '') + '\n' +
      'Email: ' + (data.get('email') || '') + '\n\n' +
      (data.get('message') || '');

    window.location.href =
      'mailto:' + CONTACT_EMAIL +
      '?subject=' + encodeURIComponent(subject) +
      '&body=' + encodeURIComponent(body);
  });
})();
