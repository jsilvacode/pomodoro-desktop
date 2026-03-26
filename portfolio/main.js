/* ═══════════════════════════════════════════════════════════════════════════════
   jsilvacode — Portfolio Landing Page · main.js
   ═══════════════════════════════════════════════════════════════════════════════ */

// ── Theme toggle ───────────────────────────────────────────────────────────────
const themeToggle = document.getElementById('themeToggle');
const html = document.documentElement;

function applyTheme(theme) {
  html.setAttribute('data-theme', theme);
  localStorage.setItem('theme', theme);
}

(function initTheme() {
  const stored = localStorage.getItem('theme');
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  applyTheme(stored || (prefersDark ? 'dark' : 'light'));
})();

themeToggle.addEventListener('click', () => {
  const current = html.getAttribute('data-theme');
  applyTheme(current === 'dark' ? 'light' : 'dark');
});

// ── Footer year ────────────────────────────────────────────────────────────────
document.getElementById('year').textContent = new Date().getFullYear();

// ── Nav scroll shadow ──────────────────────────────────────────────────────────
const nav = document.getElementById('nav');
window.addEventListener('scroll', () => {
  nav.style.boxShadow = window.scrollY > 10 ? '0 2px 16px rgba(0,0,0,.08)' : 'none';
}, { passive: true });

// ── Scroll reveal ──────────────────────────────────────────────────────────────
const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        revealObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.12 }
);

document.querySelectorAll(
  '.project-card, .message-bubble, .support__text, .support__visual, .message-form, .community'
).forEach((el) => {
  el.classList.add('reveal');
  revealObserver.observe(el);
});

// ── Message / Contact form ─────────────────────────────────────────────────────
const messageForm = document.getElementById('messageForm');
const formNote    = document.getElementById('formNote');
const feed        = document.getElementById('communityFeed');

messageForm.addEventListener('submit', (e) => {
  e.preventDefault();

  const name  = document.getElementById('msgName').value.trim();
  const email = document.getElementById('msgEmail').value.trim();
  const text  = document.getElementById('msgText').value.trim();

  // Basic validation
  if (!name || !email || !text) {
    showNote('Please fill in all fields.', 'error');
    return;
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    showNote('Please enter a valid email address.', 'error');
    return;
  }

  // Simulate a successful submission and add to community wall
  appendMessage(name, text);
  messageForm.reset();
  showNote('✓ Message sent! Thanks for reaching out 🙌', 'success');
});

function showNote(msg, type) {
  formNote.textContent = msg;
  formNote.className = `form-note ${type}`;
  setTimeout(() => {
    formNote.textContent = '';
    formNote.className = 'form-note';
  }, 5000);
}

function appendMessage(author, text) {
  const now   = new Date();
  const month = now.toLocaleString('en', { month: 'short' });
  const year  = now.getFullYear();

  const bubble = document.createElement('div');
  bubble.className = 'message-bubble';
  bubble.innerHTML = `
    <div class="message-bubble__header">
      <span class="message-bubble__author">${escapeHtml(author)}</span>
      <span class="message-bubble__date">${month} ${year}</span>
    </div>
    <p>${escapeHtml(text)}</p>
  `;

  feed.prepend(bubble);
  feed.scrollTop = 0;
}

function escapeHtml(str) {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}
