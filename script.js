/* ===================================================
   Portfolio — script.js
   =================================================== */

// ---------- Projects ----------
// image: caminho do mockup/screenshot em assets/ ("" = placeholder com moldura de navegador/celular).
// demo: link para testar a aplicação ("" = "Demo em breve").
// private: true esconde o link do GitHub (repo privado dá 404 para visitantes).
// featured: true faz o card ocupar 2 colunas no desktop.
const projects = [
  {
    slug: "agente-orcamento-sato",
    name: "Agente de Orçamento — Sato",
    kind: "web",
    categories: ["web", "ia"],
    accent: "#a371f7",
    summary: "Bot de WhatsApp com IA que transforma fotos, áudios e mensagens do cliente em um pré-orçamento de funilaria.",
    description: "O cliente manda a foto do amassado pelo WhatsApp. O Claude lê a imagem, o áudio transcrito pelo Whisper e o texto, pergunta o que falta e monta um pré-orçamento estruturado com peças afetadas, serviços e valor estimado. O consultor trabalha os leads num dashboard React, corrige a estimativa e liga para o cliente.",
    highlights: [
      "Claude com visão para ler as fotos da avaria",
      "Fila com FOR UPDATE SKIP LOCKED: vários clientes atendidos em paralelo, sem respostas duplicadas",
      "O bot nunca informa preço ao cliente — regra no prompt e checagem no código",
      "Geração de PDF do orçamento com WeasyPrint",
    ],
    stack: ["Python", "FastAPI", "Claude API", "Whisper", "PostgreSQL", "React", "Docker"],
    image: "assets/agente-orcamento-sato.png",
    github: "https://github.com/aluizio-n/agente-orcamento-sato",
    demo: "",
    private: true,
    featured: true,
  },
  {
    slug: "la-em-casa-app",
    name: "Lá em Casa — App do Cliente",
    kind: "mobile",
    categories: ["mobile", "ia"],
    accent: "#c9a86a",
    summary: "App para montar eventos com fingerfoods e mesa posta, com concierge de IA e pedido de orçamento.",
    description: "Aplicativo mobile em que o cliente monta o seu evento: conversa com um Concierge IA, escolhe itens do cardápio e da mesa posta, revisa e envia o pedido de orçamento. API em FastAPI com regras de preço isoladas e banco no Supabase.",
    highlights: [
      "Concierge IA para sugerir o evento ideal",
      "Regras de preço puras e testáveis (pricing.py)",
      "Row Level Security ligado em todas as tabelas",
      "Expo Router + NativeWind + TanStack Query + Zustand",
    ],
    stack: ["React Native", "Expo", "TypeScript", "FastAPI", "PostgreSQL", "Docker"],
    image: "assets/la-em-casa-app.png",
    github: "https://github.com/aluizio-n/la-em-casa-app",
    demo: "",
    private: true,
  },
  {
    slug: "alexandre-sato-app",
    name: "Alexandre Sato — App do Cliente",
    kind: "mobile",
    categories: ["mobile"],
    accent: "#e5533d",
    summary: "App da oficina: acompanhe o carro em tempo real, veja ofertas, acumule pontos no Clube Sato e peça orçamento.",
    description: "Aplicativo para clientes da funilaria, pintura e estética automotiva. Mostra cada etapa da ordem de serviço em tempo real, cupons por categoria, programa de fidelidade com níveis e prêmios e agendamento de orçamento. Backend em monólito modular com FastAPI.",
    highlights: [
      "Acompanhamento da OS etapa por etapa",
      "Clube Sato: livro-razão de pontos com trava contra gasto duplo",
      "Login por telefone com JWT",
      "Testes com pytest rodando em SQLite, sem precisar de banco",
    ],
    stack: ["React Native", "Expo", "TypeScript", "FastAPI", "PostgreSQL", "Docker"],
    image: "assets/alexandre-sato-app.png",
    github: "https://github.com/aluizio-n/alexandre-sato-app",
    demo: "",
    private: true,
  },
  {
    slug: "muaythai-app",
    name: "Spartan Muay Thai",
    kind: "mobile",
    categories: ["mobile"],
    accent: "#f0883e",
    summary: "App da academia Spartan Muay Thai: agenda de aulas, check-in por QR, loja, ranking e graduação.",
    description: "Aplicativo iOS e Android para alunos da academia: grade de aulas com reserva, check-in por QR code, loja com carrinho, trilha de graduação Prajied, ranking, blog, planos e agendamento de personal (Kru). Tema claro e escuro.",
    highlights: [
      "Check-in por QR code",
      "Trilha de graduação Prajied com anéis de progresso",
      "Navegação própria com pilhas por aba, sem biblioteca extra",
      "Builds via EAS para Android e iOS",
    ],
    stack: ["React Native", "Expo", "JavaScript", "SVG"],
    image: "",
    github: "https://github.com/aluizio-n/muaythai-app",
    demo: "",
    private: true,
  },
  {
    slug: "race-war",
    name: "Race War",
    kind: "mobile",
    categories: ["mobile"],
    accent: "#d29922",
    summary: "Jogo de fitness por geolocalização: corra, pedale ou ande de skate e conquiste territórios no mapa.",
    description: "Transforma atividades físicas em batalhas por território. O app rastreia a rota por GPS em tempo real; ao fechar o percurso no ponto de partida, a área é conquistada e pontua pelo tamanho em m². Tem rankings globais, desafios por tempo limitado e disputa entre amigos.",
    highlights: [
      "Rastreamento de GPS em tempo real e polígonos no Google Maps",
      "Pontuação pela área conquistada",
      "JWT com rotação de refresh token e rate limit",
      "Animações com Reanimated e gráficos com Victory Native",
    ],
    stack: ["React Native", "Expo", "TypeScript", "Node.js", "Express", "Prisma", "PostgreSQL"],
    image: "",
    github: "https://github.com/aluizio-n/race-war",
    demo: "",
    private: true,
  },
  {
    slug: "sistema-nao-conformidades",
    name: "NC Status — Não Conformidades",
    kind: "web",
    categories: ["web"],
    accent: "#39c5cf",
    summary: "Sistema para registrar, acompanhar e encerrar não conformidades de qualidade industrial.",
    description: "Sistema web para o controle de qualidade industrial: abertura de NCs com tipo, gravidade, linha e setor, atribuição de responsável, prazo e causa raiz, e dashboard com indicadores. Projeto final do módulo Full Stack do INDT.",
    highlights: [
      "Dashboard com NCs abertas, críticas, vencidas e encerradas no mês",
      "Ranking dos tipos de desvio mais recorrentes",
      "Perfis de acesso: inspetor, gestor e responsável",
      "Filtros por status, gravidade, tipo e busca",
    ],
    stack: ["Angular", "TypeScript", "Node.js", "Express", "TypeORM", "PostgreSQL"],
    image: "",
    github: "https://github.com/aluizio-n/sistema-nao-conformidades",
    demo: "",
    private: false,
  },
  {
    slug: "hackway",
    name: "HackWay",
    kind: "web",
    categories: ["web"],
    accent: "#3fb950",
    summary: "Guia e tracker de pentests: alvos, escopo por fases PTES, biblioteca de ferramentas e relatórios.",
    description: "Plataforma para organizar testes de intrusão: cadastro de alvos, escopo dividido nas fases do PTES, biblioteca de ferramentas e comandos por tipo de alvo, notas por fase e geração de relatórios técnico e executivo.",
    highlights: [
      "Dados sensíveis dos alvos criptografados em repouso com Fernet",
      "JWT em cookie httpOnly, SameSite=Lax",
      "Nginx unificando front e API na mesma origem",
      "Relatórios técnico e executivo gerados a partir das notas",
    ],
    stack: ["Next.js", "TypeScript", "FastAPI", "PostgreSQL", "Nginx", "Docker"],
    image: "",
    github: "https://github.com/aluizio-n/hackway",
    demo: "",
    private: false,
    featured: true,
  },
];

const projectFilters = [
  { id: "all", label: "Todos" },
  { id: "web", label: "Web" },
  { id: "mobile", label: "Mobile" },
  { id: "ia", label: "IA" },
];

const icons = {
  github: `<svg viewBox="0 0 16 16" fill="currentColor" width="14" height="14"><path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z"/></svg>`,
  external: `<svg viewBox="0 0 16 16" fill="currentColor" width="14" height="14"><path d="M3.75 2h3.5a.75.75 0 0 1 0 1.5h-3.5a.25.25 0 0 0-.25.25v8.5c0 .138.112.25.25.25h8.5a.25.25 0 0 0 .25-.25v-3.5a.75.75 0 0 1 1.5 0v3.5A1.75 1.75 0 0 1 12.25 14h-8.5A1.75 1.75 0 0 1 2 12.25v-8.5C2 2.784 2.784 2 3.75 2Zm6.854-1h4.146a.25.25 0 0 1 .25.25v4.146a.25.25 0 0 1-.427.177L13.03 4.03 9.28 7.78a.751.751 0 0 1-1.042-.018.751.751 0 0 1-.018-1.042l3.75-3.75-1.543-1.543A.25.25 0 0 1 10.604 1Z"/></svg>`,
  lock: `<svg viewBox="0 0 16 16" fill="currentColor" width="12" height="12"><path d="M4 4a4 4 0 0 1 8 0v2h.25c.966 0 1.75.784 1.75 1.75v5.5A1.75 1.75 0 0 1 12.25 15h-8.5A1.75 1.75 0 0 1 2 13.25v-5.5C2 6.784 2.784 6 3.75 6H4Zm8.25 3.5h-8.5a.25.25 0 0 0-.25.25v5.5c0 .138.112.25.25.25h8.5a.25.25 0 0 0 .25-.25v-5.5a.25.25 0 0 0-.25-.25ZM10.5 6V4a2.5 2.5 0 1 0-5 0v2Z"/></svg>`,
  web: `<svg viewBox="0 0 16 16" fill="currentColor" width="12" height="12"><path d="M0 2.75C0 1.784.784 1 1.75 1h12.5c.966 0 1.75.784 1.75 1.75v10.5A1.75 1.75 0 0 1 14.25 15H1.75A1.75 1.75 0 0 1 0 13.25Zm1.5 2.75v7.75c0 .138.112.25.25.25h12.5a.25.25 0 0 0 .25-.25V5.5Zm12.75-3H1.75a.25.25 0 0 0-.25.25V4h13V2.75a.25.25 0 0 0-.25-.25Z"/></svg>`,
  mobile: `<svg viewBox="0 0 16 16" fill="currentColor" width="12" height="12"><path d="M3.75 0h8.5C13.216 0 14 .784 14 1.75v12.5A1.75 1.75 0 0 1 12.25 16h-8.5A1.75 1.75 0 0 1 2 14.25V1.75C2 .784 2.784 0 3.75 0ZM3.5 1.75v12.5c0 .138.112.25.25.25h8.5a.25.25 0 0 0 .25-.25V1.75a.25.25 0 0 0-.25-.25h-8.5a.25.25 0 0 0-.25.25ZM8 13a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z"/></svg>`,
};

const kindLabel = { web: "Web App", mobile: "Mobile App" };

function initials(name) {
  return name.split(/[\s—-]+/).filter(Boolean).slice(0, 2).map((w) => w[0]).join("").toUpperCase();
}

// Full-bleed mockup when the project has an image; otherwise a browser/phone frame with a placeholder.
function projectMedia(p, size = "card") {
  const placeholder = `
    <div class="media-placeholder">
      <span class="placeholder-mark">${initials(p.name)}</span>
      <span class="placeholder-text">screenshot em breve</span>
    </div>`;

  if (p.image) {
    return `
      <div class="project-media media-${size} has-shot" style="--accent:${p.accent}">
        <img class="media-shot" src="${p.image}" alt="Telas de ${p.name}" loading="lazy"
             onerror="this.closest('.project-media').classList.add('no-image'); this.remove();" />
        ${placeholder}
      </div>`;
  }

  const frame = p.kind === "mobile"
    ? `<div class="device device-phone"><span class="phone-notch"></span>`
    : `<div class="device device-browser"><div class="browser-bar"><span></span><span></span><span></span><em>${p.slug}</em></div>`;

  return `
    <div class="project-media media-${size} no-image" style="--accent:${p.accent}">
      ${frame}
        <div class="device-screen">${placeholder}</div>
      </div>
    </div>`;
}

function renderFilters() {
  const bar = document.getElementById("project-filters");
  if (!bar) return;

  bar.innerHTML = projectFilters.map((f) => {
    const count = f.id === "all"
      ? projects.length
      : projects.filter((p) => p.categories.includes(f.id)).length;
    return `<button class="filter-chip${f.id === "all" ? " active" : ""}" data-filter="${f.id}" role="tab" aria-selected="${f.id === "all"}">
      ${f.label}<span class="filter-count">${count}</span>
    </button>`;
  }).join("");

  bar.addEventListener("click", (e) => {
    const chip = e.target.closest(".filter-chip");
    if (!chip) return;
    const filter = chip.dataset.filter;

    bar.querySelectorAll(".filter-chip").forEach((c) => {
      c.classList.toggle("active", c === chip);
      c.setAttribute("aria-selected", c === chip);
    });

    document.querySelectorAll("#projects-grid .project-card").forEach((card) => {
      const p = projects[card.dataset.index];
      const show = filter === "all" || p.categories.includes(filter);
      card.classList.toggle("is-hidden", !show);
      if (show) {
        card.classList.remove("pop");
        void card.offsetWidth; // restart the animation
        card.classList.add("pop");
      }
    });
  });
}

function renderProjects() {
  const grid = document.getElementById("projects-grid");
  if (!grid) return;

  grid.innerHTML = projects.map((p, i) => {
    const tagsHtml = p.stack.slice(0, 4).map((t) => `<span class="tag">${t}</span>`).join("")
      + (p.stack.length > 4 ? `<span class="tag tag-more">+${p.stack.length - 4}</span>` : "");

    const demoLink = p.demo
      ? `<a href="${p.demo}" class="project-link" title="Testar aplicação" target="_blank" rel="noopener">${icons.external}</a>`
      : "";
    const githubLink = p.private
      ? `<span class="project-link is-locked" title="Repositório privado">${icons.lock}</span>`
      : `<a href="${p.github}" class="project-link" title="Ver no GitHub" target="_blank" rel="noopener">${icons.github}</a>`;

    return `
      <article class="project-card fade-up${p.featured ? " featured" : ""}" data-index="${i}" tabindex="0" role="button"
               aria-label="Ver detalhes de ${p.name}" style="--accent:${p.accent}">
        ${projectMedia(p)}
        <div class="project-content">
          <div class="project-header">
            <span class="project-kind">${icons[p.kind]} ${kindLabel[p.kind]}</span>
            <div class="project-links">${demoLink}${githubLink}</div>
          </div>
          <div class="project-name">${p.name}</div>
          <div class="project-desc">${p.summary}</div>
          <div class="project-tags">${tagsHtml}</div>
          <div class="project-footer">
            <span class="project-more">Ver detalhes <span aria-hidden="true">&rarr;</span></span>
            ${p.demo ? `<span class="project-status status-active">Demo online</span>` : `<span class="project-status status-wip">Demo em breve</span>`}
          </div>
        </div>
      </article>`;
  }).join("");

  grid.addEventListener("click", (e) => {
    if (e.target.closest("a")) return; // let icon links work normally
    const card = e.target.closest(".project-card");
    if (card) openProjectModal(Number(card.dataset.index));
  });

  grid.addEventListener("keydown", (e) => {
    const card = e.target.closest(".project-card");
    if (card && e.target === card && (e.key === "Enter" || e.key === " ")) {
      e.preventDefault();
      openProjectModal(Number(card.dataset.index));
    }
  });

  // Spotlight that follows the cursor
  grid.addEventListener("pointermove", (e) => {
    const card = e.target.closest(".project-card");
    if (!card) return;
    const rect = card.getBoundingClientRect();
    card.style.setProperty("--mx", `${e.clientX - rect.left}px`);
    card.style.setProperty("--my", `${e.clientY - rect.top}px`);
  });
}

// ---------- Project modal ----------
let modalIndex = 0;

function visibleProjectIndexes() {
  const cards = document.querySelectorAll("#projects-grid .project-card:not(.is-hidden)");
  return Array.from(cards, (c) => Number(c.dataset.index));
}

function fillProjectModal(i) {
  const p = projects[i];
  modalIndex = i;

  const modal = document.getElementById("project-modal");
  modal.style.setProperty("--accent", p.accent);
  document.getElementById("modal-media").innerHTML = projectMedia(p, "modal");
  document.getElementById("modal-kicker").innerHTML =
    `${icons[p.kind]} ${kindLabel[p.kind]}${p.private ? ` <span class="kicker-private">${icons.lock} Código privado</span>` : ""}`;
  document.getElementById("modal-title").textContent = p.name;
  document.getElementById("modal-desc").textContent = p.description;
  document.getElementById("modal-highlights").innerHTML = p.highlights.map((h) => `<li>${h}</li>`).join("");
  document.getElementById("modal-tags").innerHTML = p.stack.map((t) => `<span class="tag">${t}</span>`).join("");

  const demoBtn = p.demo
    ? `<a href="${p.demo}" target="_blank" rel="noopener" class="btn btn-primary">${icons.external} Testar aplicação</a>`
    : `<span class="btn btn-disabled" aria-disabled="true">${icons.external} Demo em breve</span>`;
  const codeBtn = p.private
    ? ""
    : `<a href="${p.github}" target="_blank" rel="noopener" class="btn btn-outline">${icons.github} Ver código</a>`;
  document.getElementById("modal-actions").innerHTML = demoBtn + codeBtn;

  const order = visibleProjectIndexes();
  document.getElementById("modal-counter").textContent = `${order.indexOf(i) + 1} / ${order.length}`;

  const shell = modal.querySelector(".modal-shell");
  shell.classList.remove("swap");
  void shell.offsetWidth; // restart the animation
  shell.classList.add("swap");
}

function stepProjectModal(dir) {
  const order = visibleProjectIndexes();
  const pos = order.indexOf(modalIndex);
  fillProjectModal(order[(pos + dir + order.length) % order.length]);
}

function openProjectModal(i) {
  const modal = document.getElementById("project-modal");
  fillProjectModal(i);
  modal.showModal();
  document.body.style.overflow = "hidden";
}

function initProjectModal() {
  const modal = document.getElementById("project-modal");
  if (!modal) return;

  const close = () => modal.close();
  document.getElementById("modal-close").addEventListener("click", close);
  document.getElementById("modal-prev").addEventListener("click", () => stepProjectModal(-1));
  document.getElementById("modal-next").addEventListener("click", () => stepProjectModal(1));

  // Clicking the backdrop closes the modal
  modal.addEventListener("click", (e) => {
    if (e.target === modal) close();
  });
  modal.addEventListener("close", () => {
    document.body.style.overflow = "";
  });
  modal.addEventListener("keydown", (e) => {
    if (e.key === "ArrowLeft") stepProjectModal(-1);
    if (e.key === "ArrowRight") stepProjectModal(1);
  });
}

// ---------- Typewriter terminal ----------
const commands = [
  {
    cmd: "cat about.json",
    output: `{
  "name": "Aluizio Neto",
  "cargo": "Full Stack Engineer",
  "stack": ["React", "FastAPI", "Express"],
  "status": "disponivel"
}`,
  },
  {
    cmd: "docker ps --format table",
    output: `IMAGE         STATUS
postgres:16   Up 2h
mongo:7       Up 2h
redis:7       Up 2h`,
  },
  {
    cmd: "uvicorn main:app",
    output: `<ok>INFO</ok>  Started on :8000
<ok>INFO</ok>  Docs at /docs
<info>INFO</info>  Waiting for connections...`,
  },
  {
    cmd: "git log --oneline -4",
    output: `<ok>f3a9c2b</ok> feat: JWT refresh rotation
<ok>a7d1e84</ok> fix: Prisma connection pool
<ok>c5b3f29</ok> chore: update Docker images
<ok>9e2a1d7</ok> docs: update API schema`,
  },
];

let cmdIndex = 0;
let charIndex = 0;
let typingTimer = null;

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function runTerminal() {
  const typewriterEl = document.getElementById("typewriter");
  const outputEl = document.getElementById("terminal-output");
  const cursorEl = document.getElementById("cursor");
  if (!typewriterEl || !outputEl) return;

  while (true) {
    const { cmd, output } = commands[cmdIndex % commands.length];

    // type command
    typewriterEl.textContent = "";
    outputEl.innerHTML = "";
    cursorEl.style.display = "inline";

    for (const ch of cmd) {
      typewriterEl.textContent += ch;
      await sleep(45 + Math.random() * 35);
    }

    await sleep(400);
    cursorEl.style.display = "none";

    // show output
    outputEl.innerHTML = output
      .replace(/<ok>(.*?)<\/ok>/g, '<span class="ok">$1</span>')
      .replace(/<info>(.*?)<\/info>/g, '<span class="info">$1</span>')
      .replace(/<warn>(.*?)<\/warn>/g, '<span class="warn">$1</span>');

    await sleep(2800);

    // clear
    typewriterEl.textContent = "";
    outputEl.innerHTML = "";
    cursorEl.style.display = "inline";

    cmdIndex++;
    await sleep(300);
  }
}

// ---------- Scroll animations ----------
function initScrollObserver() {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        }
      });
    },
    { threshold: 0.1, rootMargin: "0px 0px -40px 0px" }
  );

  document.querySelectorAll(".fade-up").forEach((el) => observer.observe(el));
}

// ---------- Nav scroll effect ----------
function initNavScroll() {
  const nav = document.getElementById("nav");
  window.addEventListener("scroll", () => {
    if (window.scrollY > 10) {
      nav.style.borderBottomColor = "var(--border)";
    } else {
      nav.style.borderBottomColor = "var(--border-soft)";
    }
  }, { passive: true });
}

// ---------- Active nav link ----------
function initActiveNav() {
  const sections = document.querySelectorAll("section[id]");
  const links = document.querySelectorAll(".nav-links a");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const id = entry.target.getAttribute("id");
          links.forEach((a) => {
            a.style.color = a.getAttribute("href") === `#${id}`
              ? "var(--text)"
              : "";
          });
        }
      });
    },
    { rootMargin: "-40% 0px -55% 0px" }
  );

  sections.forEach((s) => observer.observe(s));
}

// ---------- Add fade-up to sections ----------
function addFadeUp() {
  const targets = [
    ".about-card", ".about-bio",
    ".stack-group", ".lang-bar-section",
    ".contact-card", ".section-header",
  ];
  targets.forEach((sel) => {
    document.querySelectorAll(sel).forEach((el) => {
      el.classList.add("fade-up");
    });
  });
}

// ---------- Mobile menu ----------
function initMobileMenu() {
  const toggle = document.getElementById("menu-toggle");
  const menu = document.getElementById("mobile-menu");
  if (!toggle || !menu) return;

  toggle.addEventListener("click", () => {
    const isOpen = menu.classList.toggle("open");
    toggle.classList.toggle("active");
    document.body.style.overflow = isOpen ? "hidden" : "";
  });

  menu.querySelectorAll(".mobile-menu-link").forEach((link) => {
    link.addEventListener("click", () => {
      menu.classList.remove("open");
      toggle.classList.remove("active");
      document.body.style.overflow = "";
    });
  });
}

// ---------- Animated background (particle network that reacts to the mouse) ----------
const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
const pointer = { x: -9999, y: -9999, active: false };

function initBackground() {
  const canvas = document.getElementById("bg-canvas");
  if (!canvas || prefersReducedMotion) return;
  const ctx = canvas.getContext("2d");
  const colors = ["63,185,80", "88,166,255", "163,113,247"];
  const LINK_DIST = 130;
  const MOUSE_DIST = 180;
  let particles = [];
  let w = 0, h = 0, dpr = 1;

  function resize() {
    dpr = Math.min(window.devicePixelRatio || 1, 2);
    w = window.innerWidth;
    h = window.innerHeight;
    canvas.width = w * dpr;
    canvas.height = h * dpr;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

    const count = Math.min(110, Math.floor((w * h) / 14000));
    particles = Array.from({ length: count }, () => ({
      x: Math.random() * w,
      y: Math.random() * h,
      vx: (Math.random() - 0.5) * 0.35,
      vy: (Math.random() - 0.5) * 0.35,
      r: Math.random() * 1.6 + 0.6,
      c: colors[Math.floor(Math.random() * colors.length)],
    }));
  }

  function step() {
    ctx.clearRect(0, 0, w, h);

    for (const p of particles) {
      // gentle pull towards the cursor
      if (pointer.active) {
        const dx = pointer.x - p.x;
        const dy = pointer.y - p.y;
        const dist = Math.hypot(dx, dy);
        if (dist < MOUSE_DIST && dist > 1) {
          p.vx += (dx / dist) * 0.012;
          p.vy += (dy / dist) * 0.012;
        }
      }
      // keep speed in check
      const speed = Math.hypot(p.vx, p.vy);
      if (speed > 0.9) { p.vx *= 0.9 / speed; p.vy *= 0.9 / speed; }

      p.x += p.vx;
      p.y += p.vy;
      if (p.x < -10) p.x = w + 10; else if (p.x > w + 10) p.x = -10;
      if (p.y < -10) p.y = h + 10; else if (p.y > h + 10) p.y = -10;

      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(${p.c},.7)`;
      ctx.fill();
    }

    for (let i = 0; i < particles.length; i++) {
      const a = particles[i];
      for (let j = i + 1; j < particles.length; j++) {
        const b = particles[j];
        const d = Math.hypot(a.x - b.x, a.y - b.y);
        if (d < LINK_DIST) {
          ctx.strokeStyle = `rgba(${a.c},${(1 - d / LINK_DIST) * 0.18})`;
          ctx.lineWidth = 1;
          ctx.beginPath();
          ctx.moveTo(a.x, a.y);
          ctx.lineTo(b.x, b.y);
          ctx.stroke();
        }
      }
      if (pointer.active) {
        const d = Math.hypot(a.x - pointer.x, a.y - pointer.y);
        if (d < MOUSE_DIST) {
          ctx.strokeStyle = `rgba(${a.c},${(1 - d / MOUSE_DIST) * 0.45})`;
          ctx.beginPath();
          ctx.moveTo(a.x, a.y);
          ctx.lineTo(pointer.x, pointer.y);
          ctx.stroke();
        }
      }
    }

    requestAnimationFrame(step);
  }

  resize();
  window.addEventListener("resize", resize);
  requestAnimationFrame(step);
}

// ---------- Mouse-driven effects (glow, hero grid, card spotlights, photo tilt) ----------
function initPointerEffects() {
  const glow = document.getElementById("cursor-glow");
  const hero = document.getElementById("hero");
  const heroGrid = document.querySelector(".hero-grid-bg");
  const photo = document.querySelector(".photo-card");

  window.addEventListener("pointermove", (e) => {
    pointer.x = e.clientX;
    pointer.y = e.clientY;
    pointer.active = e.pointerType === "mouse";
    if (glow) {
      glow.style.setProperty("--gx", `${e.clientX}px`);
      glow.style.setProperty("--gy", `${e.clientY}px`);
    }
  }, { passive: true });
  document.addEventListener("pointerleave", () => { pointer.active = false; });

  if (hero && heroGrid) {
    hero.addEventListener("pointermove", (e) => {
      const rect = heroGrid.getBoundingClientRect();
      heroGrid.style.setProperty("--hx", `${e.clientX - rect.left}px`);
      heroGrid.style.setProperty("--hy", `${e.clientY - rect.top}px`);

      if (photo && !prefersReducedMotion) {
        const r = hero.getBoundingClientRect();
        const nx = (e.clientX - r.left) / r.width - 0.5;
        const ny = (e.clientY - r.top) / r.height - 0.5;
        photo.style.setProperty("--ry", `${nx * 10}deg`);
        photo.style.setProperty("--rx", `${-ny * 10}deg`);
      }
    });
    hero.addEventListener("pointerleave", () => {
      heroGrid.style.setProperty("--hx", "-500px");
      heroGrid.style.setProperty("--hy", "-500px");
      if (photo) {
        photo.style.setProperty("--rx", "0deg");
        photo.style.setProperty("--ry", "0deg");
      }
    });
  }

  document.querySelectorAll(".stack-group, .about-card, .contact-card").forEach((card) => {
    card.classList.add("spotlight");
    card.addEventListener("pointermove", (e) => {
      const r = card.getBoundingClientRect();
      card.style.setProperty("--mx", `${e.clientX - r.left}px`);
      card.style.setProperty("--my", `${e.clientY - r.top}px`);
    });
  });
}

// ---------- Scroll progress bar ----------
function initScrollProgress() {
  const bar = document.getElementById("scroll-progress");
  if (!bar) return;
  const update = () => {
    const max = document.documentElement.scrollHeight - window.innerHeight;
    bar.style.transform = `scaleX(${max > 0 ? window.scrollY / max : 0})`;
  };
  window.addEventListener("scroll", update, { passive: true });
  update();
}

// ---------- Init ----------
document.addEventListener("DOMContentLoaded", () => {
  renderFilters();
  renderProjects();
  initProjectModal();
  addFadeUp();
  initScrollObserver();
  initNavScroll();
  initActiveNav();
  initMobileMenu();
  initBackground();
  initPointerEffects();
  initScrollProgress();
  runTerminal();
});
