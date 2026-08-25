// ---------- menu mobile ----------
const header = document.getElementById('site-header');
const navToggle = document.getElementById('nav-toggle');

if (navToggle && header) {
  navToggle.addEventListener('click', () => {
    const isOpen = header.classList.toggle('nav-open');
    navToggle.setAttribute('aria-expanded', String(isOpen));
  });

  // fecha o menu ao clicar em um link
  header.querySelectorAll('.nav-links a').forEach((link) => {
    link.addEventListener('click', () => {
      header.classList.remove('nav-open');
      navToggle.setAttribute('aria-expanded', 'false');
    });
  });
}

// ---------- toggle PT / EN (Sobre Mim) ----------
const langButtons = document.querySelectorAll('.lang-toggle button');

langButtons.forEach((btn) => {
  btn.addEventListener('click', () => {
    const lang = btn.dataset.lang;

    langButtons.forEach((b) => b.classList.toggle('active', b === btn));

    document.querySelectorAll('[data-lang-content]').forEach((block) => {
      block.hidden = block.dataset.langContent !== lang;
    });
  });
});

// ---------- formulário de contato ----------
const contactForm = document.getElementById('contact-form');
const formNote = document.getElementById('form-note');

if (contactForm) {
  contactForm.addEventListener('submit', (event) => {
    const name = contactForm.name.value.trim();
    const email = contactForm.email.value.trim();
    const message = contactForm.message.value.trim();

    if (!name || !email || !message) {
      event.preventDefault();

      formNote.textContent = 'Preencha todos os campos antes de enviar.';
      formNote.dataset.state = 'error';

      return;
    }

    formNote.textContent = 'Enviando mensagem...';
    formNote.dataset.state = 'ok';
  });
}