/* ===================================================
   Portfolio — script.js
   =================================================== */

// ---------- Mock Projects ----------
const projects = [
  {
    name: "fastapi-auth-service",
    icon: "🔐",
    description: "Microsserviço de autenticação JWT com FastAPI e PostgreSQL. Suporta OAuth2, controle de acesso por perfil e rotação de refresh token.",
    tags: ["python", "pg"],
    tagLabels: { python: "Python", pg: "PostgreSQL" },
    language: "Python",
    languageColor: "#3776ab",
    stars: 34,
    forks: 7,
    status: "active",
    github: "#",
    demo: "#",
  },
  {
    name: "express-api-boilerplate",
    icon: "⚡",
    description: "Template de API REST Node.js pronto para produção com Express, Prisma, validação Zod e Docker Compose. Inclui exemplos de workflow CI/CD.",
    tags: ["node", "docker", "pg"],
    tagLabels: { node: "TypeScript", docker: "Docker", pg: "PostgreSQL" },
    language: "TypeScript",
    languageColor: "#68a063",
    stars: 58,
    forks: 12,
    status: "active",
    github: "#",
    demo: null,
  },
  {
    name: "mongo-event-log",
    icon: "📋",
    description: "Serviço de log de eventos append-only com MongoDB e FastAPI. Projetado para trilhas de auditoria com alto volume de escrita e consultas em séries temporais.",
    tags: ["python", "mongo", "docker"],
    tagLabels: { python: "Python", mongo: "MongoDB", docker: "Docker" },
    language: "Python",
    languageColor: "#3776ab",
    stars: 19,
    forks: 4,
    status: "active",
    github: "#",
    demo: "#",
  },
  {
    name: "prisma-seeder-cli",
    icon: "🌱",
    description: "Ferramenta CLI para gerar e executar seeds do Prisma a partir de arquivos YAML. Suporta múltiplos ambientes e estratégias de seed incremental.",
    tags: ["node", "pg"],
    tagLabels: { node: "TypeScript", pg: "PostgreSQL" },
    language: "TypeScript",
    languageColor: "#68a063",
    stars: 11,
    forks: 2,
    status: "wip",
    github: "#",
    demo: null,
  },
  {
    name: "docker-dev-stack",
    icon: "🐳",
    description: "Setup Docker Compose para ambiente de desenvolvimento local com Postgres, MongoDB, Redis, PgAdmin e Mongo Express. Um comando para subir tudo.",
    tags: ["docker", "pg", "mongo"],
    tagLabels: { docker: "Docker", pg: "PostgreSQL", mongo: "MongoDB" },
    language: "Shell",
    languageColor: "#89e051",
    stars: 42,
    forks: 9,
    status: "active",
    github: "#",
    demo: null,
  },
  {
    name: "pydantic-config-loader",
    icon: "⚙️",
    description: "Biblioteca de gerenciamento de configuração e variáveis de ambiente com Pydantic Settings v2. Suporta múltiplos ambientes, segredos em arquivo e modelos tipados.",
    tags: ["python"],
    tagLabels: { python: "Python" },
    language: "Python",
    languageColor: "#3776ab",
    stars: 23,
    forks: 5,
    status: "archive",
    github: "#",
    demo: null,
  },
];

// ---------- Render Projects ----------
function renderProjects() {
  const grid = document.getElementById("projects-grid");
  if (!grid) return;

  grid.innerHTML = projects.map((p) => {
    const tagsHtml = p.tags
      .map((t) => `<span class="tag ${t}">${p.tagLabels[t]}</span>`)
      .join("");

    const statusMap = {
      active: ["status-active", "Ativo"],
      wip: ["status-wip", "Em andamento"],
      archive: ["status-archive", "Arquivado"],
    };
    const [statusClass, statusLabel] = statusMap[p.status] || statusMap.archive;

    const demoLink = p.demo
      ? `<a href="${p.demo}" class="project-link" title="Live demo" target="_blank" rel="noopener">
           <svg viewBox="0 0 16 16" fill="currentColor" width="13" height="13">
             <path d="M3.75 2h8.5c.966 0 1.75.784 1.75 1.75v8.5A1.75 1.75 0 0 1 12.25 14h-8.5A1.75 1.75 0 0 1 2 12.25v-8.5C2 2.784 2.784 2 3.75 2Zm0 1.5a.25.25 0 0 0-.25.25v8.5c0 .138.112.25.25.25h8.5a.25.25 0 0 0 .25-.25v-8.5a.25.25 0 0 0-.25-.25Zm6.78 2.22-5.5 5.5a.749.749 0 0 1-1.275-.326.749.749 0 0 1 .215-.734l5.5-5.5a.751.751 0 0 1 1.042.018.751.751 0 0 1 .018 1.042Z"/>
           </svg>
         </a>`
      : "";

    return `
      <div class="project-card fade-up">
        <div class="project-header">
          <div class="project-icon">${p.icon}</div>
          <div class="project-links">
            ${demoLink}
            <a href="${p.github}" class="project-link" title="Ver no GitHub" target="_blank" rel="noopener">
              <svg viewBox="0 0 16 16" fill="currentColor" width="14" height="14">
                <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
              </svg>
            </a>
          </div>
        </div>

        <div class="project-name">${p.name}</div>
        <div class="project-desc">${p.description}</div>
        <div class="project-tags">${tagsHtml}</div>

        <div class="project-footer">
          <div class="project-meta">
            <span class="meta-item">
              <span class="meta-dot" style="background:${p.languageColor}"></span>
              ${p.language}
            </span>
            <span class="meta-item">
              <svg viewBox="0 0 16 16" fill="currentColor" width="12" height="12">
                <path d="M8 .25a.75.75 0 0 1 .673.418l1.882 3.815 4.21.612a.75.75 0 0 1 .416 1.279l-3.046 2.97.719 4.192a.751.751 0 0 1-1.088.791L8 12.347l-3.766 1.98a.75.75 0 0 1-1.088-.79l.72-4.194L.818 6.374a.75.75 0 0 1 .416-1.28l4.21-.611L7.327.668A.75.75 0 0 1 8 .25Z"/>
              </svg>
              ${p.stars}
            </span>
            <span class="meta-item">
              <svg viewBox="0 0 16 16" fill="currentColor" width="12" height="12">
                <path d="M5 5.372v.878c0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75v-.878a2.25 2.25 0 1 1 1.5 0v.878a2.25 2.25 0 0 1-2.25 2.25h-1.5v2.128a2.251 2.251 0 1 1-1.5 0V8.5h-1.5A2.25 2.25 0 0 1 3.5 6.25v-.878a2.25 2.25 0 1 1 1.5 0ZM5 3.25a.75.75 0 1 0-1.5 0 .75.75 0 0 0 1.5 0Zm6.75.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm-3 8.75a.75.75 0 1 0-1.5 0 .75.75 0 0 0 1.5 0Z"/>
              </svg>
              ${p.forks}
            </span>
          </div>
          <span class="project-status ${statusClass}">${statusLabel}</span>
        </div>
      </div>
    `;
  }).join("");
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
    ".contact-card",
  ];
  targets.forEach((sel) => {
    document.querySelectorAll(sel).forEach((el) => {
      el.classList.add("fade-up");
    });
  });
}

// ---------- Init ----------
document.addEventListener("DOMContentLoaded", () => {
  // renderProjects(); // WIP: uncomment when projects are ready
  addFadeUp();
  initScrollObserver();
  initNavScroll();
  initActiveNav();
  runTerminal();
});
