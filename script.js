document.getElementById('year').textContent = new Date().getFullYear();

document.querySelectorAll('.pub-toggle').forEach(function (btn) {
  btn.addEventListener('click', function () {
    var expanded = btn.getAttribute('aria-expanded') === 'true';
    btn.setAttribute('aria-expanded', String(!expanded));
    var panel = document.getElementById(btn.getAttribute('aria-controls'));
    if (panel) panel.hidden = expanded;
  });
});
