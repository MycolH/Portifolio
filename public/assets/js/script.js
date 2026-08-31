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

// ---------- traduções do site ----------
const translations = {
  pt: {
    nav_sobre: 'Sobre',
    nav_projetos: 'Projetos',
    nav_experiencias: 'Experiências',
    nav_curriculo: 'Currículo',
    nav_contato: 'Contato',
    eyebrow: 'Portfólio',
    hero_role: 'Engenheiro(a) de Software — Belo Horizonte, MG',
    head_sobre: 'Sobre Mim',
    head_projetos: 'Projetos',
    head_experiencias: 'Experiências',
    head_curriculo: 'Currículo',
    head_contato: 'Contato',
    proj1_title: 'Nome do Projeto 1',
    proj1_desc: 'Breve descrição do que o projeto faz e qual problema resolve.',
    proj_link_details: 'Ver detalhes →',
    proj_link_github: 'GitHub',
    exp_cargo: 'Cargo ou Atividade',
    exp_empresa: 'Nome da Empresa / Instituição',
    exp_desc: 'Breve descrição das responsabilidades e conquistas nessa posição.',
    exp_period: 'jan 2026 — atual',
    resume_text: 'Baixe meu currículo completo em PDF, com formação, projetos e experiências detalhadas.',
    resume_btn: 'Baixar currículo',
    form_name: 'Nome',
    form_email: 'E-mail',
    form_message: 'Mensagem',
    form_send: 'Enviar mensagem',
    form_error: 'Preencha todos os campos antes de enviar.',
    form_sending: 'Enviando mensagem...',
    footer_back: 'Voltar ao topo ↑',
  },
  en: {
    nav_sobre: 'About',
    nav_projetos: 'Projects',
    nav_experiencias: 'Experience',
    nav_curriculo: 'Resume',
    nav_contato: 'Contact',
    eyebrow: 'Portfolio',
    hero_role: 'Software Engineer — Belo Horizonte, MG',
    head_sobre: 'About Me',
    head_projetos: 'Projects',
    head_experiencias: 'Experience',
    head_curriculo: 'Resume',
    head_contato: 'Contact',
    proj1_title: 'Project Name 1',
    proj1_desc: 'Brief description of what the project does and what problem it solves.',
    proj_link_details: 'View details →',
    proj_link_github: 'GitHub',
    exp_cargo: 'Role or Activity',
    exp_empresa: 'Company / Institution Name',
    exp_desc: 'Brief description of responsibilities and achievements in this role.',
    exp_period: 'Jan 2026 — present',
    resume_text: 'Download my full resume as a PDF, with education, projects and detailed experience.',
    resume_btn: 'Download resume',
    form_name: 'Name',
    form_email: 'Email',
    form_message: 'Message',
    form_send: 'Send message',
    form_error: 'Please fill in all fields before submitting.',
    form_sending: 'Sending message...',
    footer_back: 'Back to top ↑',
  },
};

let currentLang = 'pt';
const langButtons = document.querySelectorAll('.lang-toggle button');

function setLanguage(lang) {
  if (!translations[lang]) return;
  currentLang = lang;

  document.documentElement.lang = lang === 'en' ? 'en' : 'pt-BR';

  // realça o botão do idioma ativo
  langButtons.forEach((b) => b.classList.toggle('active', b.dataset.lang === lang));

  // mostra/esconde os blocos de texto de "Sobre Mim" escritos nos dois idiomas
  document.querySelectorAll('[data-lang-content]').forEach((block) => {
    block.hidden = block.dataset.langContent !== lang;
  });

  // traduz todo o resto do site via dicionário
  document.querySelectorAll('[data-i18n]').forEach((el) => {
    const key = el.dataset.i18n;
    const value = translations[lang][key];
    if (value !== undefined) {
      el.textContent = value;
    }
  });
}

langButtons.forEach((btn) => {
  btn.addEventListener('click', () => setLanguage(btn.dataset.lang));
});

// ---------- formulário de contato ----------
const contactForm = document.getElementById('contact-form');
const formNote = document.getElementById('form-note');

if (contactForm) {
  contactForm.addEventListener('submit', (event) => {
    const name = contactForm.name.value.trim();
    const email = contactForm.email.value.trim();
    const message = contactForm.message.value.trim();
    const t = translations[currentLang];

    if (!name || !email || !message) {
      event.preventDefault();

      formNote.textContent = t.form_error;
      formNote.dataset.state = 'error';

      return;
    }

    formNote.textContent = t.form_sending;
    formNote.dataset.state = 'ok';
  });
}
