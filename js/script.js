const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.nav-links');

menu.addEventListener('click', function() {
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
});
function toggleApplyOptions() {
  const options = document.getElementById('apply-options');
  options.style.display = options.style.display === 'none' ? 'block' : 'none';
}

function openForm(formId) {
  // Hide all forms first
  document.querySelectorAll('.form-section').forEach(form => form.style.display = 'none');
  // Show selected form
  document.getElementById(formId).style.display = 'block';
  // Scroll to form
  document.getElementById(formId).scrollIntoView({ behavior: 'smooth' });
}
function toggleMenu() {
  document.querySelector('.nav-links').classList.toggle('active');
}

