// ===== Feature 1: Toggle dark mode =====
const modeToggle = document.getElementById('modeToggle');
modeToggle.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
  modeToggle.textContent = document.body.classList.contains('dark-mode')
    ? 'Switch to Light Mode'
    : 'Switch to Dark Mode';
});

// ===== Feature 2: Counter =====
const counterValue = document.getElementById('counterValue');
const incrementBtn = document.getElementById('incrementBtn');
const decrementBtn = document.getElementById('decrementBtn');
let count = 0;

incrementBtn.addEventListener('click', () => {
  count++;
  counterValue.textContent = count;
});
decrementBtn.addEventListener('click', () => {
  count--;
  counterValue.textContent = count;
});

// ===== Feature 3: FAQ Toggle =====
document.querySelectorAll('.faq-question').forEach(q => {
  q.addEventListener('click', () => {
    q.parentElement.classList.toggle('active');
  });
});

// ===== Feature 4: Character Count + Form Validation =====
const form = document.getElementById('signupForm');
const nameInput = document.getElementById('nameInput');
const emailInput = document.getElementById('emailInput');
const messageInput = document.getElementById('messageInput');
const charCount = document.getElementById('charCount');
const errorMsg = document.getElementById('errorMsg');
const successMessage = document.getElementById('successMessage');

// Live character count
messageInput.addEventListener('input', () => {
  charCount.textContent = `Characters: ${messageInput.value.length}`;
});

// Form validation
form.addEventListener('submit', (e) => {
  e.preventDefault();
  let valid = true;
  errorMsg.textContent = '';
  successMessage.textContent = '';

  // Name validation
  if (nameInput.value.trim() === '') {
    errorMsg.textContent += 'Name is required. ';
    valid = false;
  }

  // Email validation
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(emailInput.value)) {
    errorMsg.textContent += 'Enter a valid email. ';
    valid = false;
  }

  // Message validation
  if (messageInput.value.trim().length < 10) {
    errorMsg.textContent += 'Message must be at least 10 characters. ';
    valid = false;
  }

  if (valid) {
    successMessage.textContent = 'Form submitted successfully!';
    form.reset();
    charCount.textContent = 'Characters: 0';
  }
});
