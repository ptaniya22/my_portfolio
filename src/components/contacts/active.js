const contactInput = document.querySelectorAll('.contact_input');

function focusInput() {
  this.parentElement.classList.add('is-active', 'is-completed');
}
function blurInput() {
  this.parentElement.classList.remove('is-active', 'is-completed');
}

contactInput.forEach(input => input.addEventListener('focus', focusInput));
contactInput.forEach(input => input.addEventListener('blur', blurInput));
