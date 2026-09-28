(function () {
  'use strict';
  var button = document.getElementById('reveal-class-code');
  var output = document.getElementById('shared-class-code');
  if (!button || !output) return;
  button.addEventListener('click', function () {
    var showing = button.getAttribute('aria-expanded') === 'true';
    output.textContent = showing ? '' : atob('Q29kZUhAdmVuMTIz');
    output.hidden = showing;
    button.setAttribute('aria-expanded', String(!showing));
    button.textContent = showing ? 'Show class code' : 'Hide class code';
  });
}());
