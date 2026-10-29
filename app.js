(() => {
  const DATA = window.REHAB_DATA;
  const SURGERY = new Date(DATA.surgeryDate + "T12:00:00");
  const PIN_HASH = "e3e54cd90759e644036cf64ac6b088e7ffb743a0c557712b483ccf880965e1bf";
  const SESSION_KEY = "rehab_unlocked_v1";

  const app = document.getElementById("app");
  const lock = document.getElementById("lock");
  const view = document.getElementById("view");
  const form = document.getElementById("pin-form");
  const input = document.getElementById("pin-input");
  const error = document.getElementById("pin-error");
  const lockButton = document.getElementById("lock-button");

  async function sha256(text){
    const data = new TextEncoder().encode(text);
    const digest = await crypto.subtle.digest("SHA-256", data);
    return Array.from(new Uint8Array(digest)).map(b=>b.toString(16).padStart(2,"0")).join("");
  }

  function unlock(){
    sessionStorage.setItem(SESSION_KEY,"1");
    lock.classList.add("hidden");
    app.classList.remove("hidden");
    renderFromHash();
  }

  function relock(){
    sessionStorage.removeItem(SESSION_KEY);
    app.classList.add("hidden");
    lock.classList.remove("hidden");
    input.value="";
    error.textContent="";
    setTimeout(()=>input.focus(),80);
  }

  form.addEventListener("submit", async e => {
    e.preventDefault();
    error.textContent="";
    const pin = input.value.trim();
    if(!/^\d{4,6}$/.test(pin)){
      error.textContent="Ingresá un PIN de 4 a 6 dígitos.";
      return;
    }
    if(PIN_HASH === "__PIN_HASH_PENDING__"){
      error.textContent="El acceso todavía no está configurado.";
      return;
    }
    const hash = await sha256(pin);
    if(hash === PIN_HASH) unlock();
    else {
      error.textContent="PIN incorrecto.";
      input.select();
    }
  });

  lockButton.addEventListener("click", relock);

  document.addEventListener("click", e => {
    const home = e.target.closest("[data-action='home']");
    if(home){ location.hash="#home"; }
    const mode = e.target.closest("[data-mode]");
    if(mode){ location.hash="#"+mode.dataset.mode; }
    const week = e.target.closest("[data-week]");
    if(week){
      const modeId = week.dataset.modeId;
      location.hash="#"+modeId+"/w"+week.dataset.week;
    }
    const nav = e.target.closest("[data-scroll]");
    if(nav){
      document.getElementById(nav.dataset.scroll)?.scrollIntoView({behavior:"smooth",block:"start"});
    }
  });

  function progress(){
    const now = new Date();
    const d0 = new Date(SURGERY.getFullYear(),SURGERY.getMonth(),SURGERY.getDate());
    const dn = new Date(now.getFullYear(),now.getMonth(),now.getDate());
    const days = Math.max(0,Math.round((dn-d0)/86400000));
    const fullWeeks = Math.floor(days/7);
    return {days,fullWeeks,rest:days%7,week:fullWeeks+1};
  }

  function homeView(){
    const p = progress();
    const toWeeks = Object.keys(DATA.modes.to.weeks).sort((a,b)=>b-a);
    const kWeeks = Object.keys(DATA.modes.kine.weeks).sort((a,b)=>b-a);
    view.innerHTML = `
      <div class="view">
        <section class="hero">
          <div class="eyebrow">Hombro derecho · Postoperatorio</div>
          <h1>Semana ${p.week}<br><span class="light">de rehabilitación</span></h1>
          <p class="hero-copy">Seguimiento simple de las rutinas de terapia ocupacional y kinesiología, con historial por semana.</p>

          <div class="progress-row">
            <div>
              <div class="eyebrow">Progreso</div>
              <span class="progress-big">${p.fullWeeks}+${p.rest}</span>
            </div>
            <div class="progress-small">
              ${p.days} días postoperatorio<br>
              Cirugía <strong>14.08.2026</strong>
            </div>
          </div>
        </section>

        <section class="section">
          <div class="section-head">
            <div><h2>Elegí la modalidad</h2><p>Rutina vigente y semanas anteriores.</p></div>
          </div>
          <div class="mode-grid">
            <button class="mode-card to" data-mode="to">
              <span class="mode-kicker">Celeste · movilidad</span>
              <h3>Terapia ocupacional</h3>
              <p>${DATA.modes.to.summary}</p>
              <span class="mode-arrow">→</span>
            </button>
            <button class="mode-card kine" data-mode="kine">
              <span class="mode-kicker">Lima · fuerza</span>
              <h3>Kinesiología</h3>
              <p>${DATA.modes.kine.summary}</p>
              <span class="mode-arrow">→</span>
            </button>
          </div>
        </section>

        <section class="section">
          <div class="section-head">
            <div><h2>Historial</h2><p>Se conserva cuando cambia una rutina.</p></div>
          </div>
          <div class="history-line">
            <span class="week-chip">TO · ${toWeeks.length} semana registrada</span>
            <span class="week-chip">Kine · ${kWeeks.length} semana registrada</span>
          </div>
        </section>
      </div>`;
  }

  function modeView(modeId, requestedWeek){
    const mode = DATA.modes[modeId];
    if(!mode){ homeView(); return; }
    const weeks = Object.keys(mode.weeks).map(Number).sort((a,b)=>b-a);
    const weekNum = requestedWeek && mode.weeks[String(requestedWeek)] ? Number(requestedWeek) : weeks[0];
    const data = mode.weeks[String(weekNum)];
    const accent = mode.accent;

    view.innerHTML = `
      <div class="view">
        <section class="mode-header ${accent}">
          <div class="eyebrow">${mode.name}</div>
          <h1>${data.title}<br>Semana ${data.week}</h1>
          <p>${data.intro}</p>
          <div class="mode-meta">
            <span class="current">${data.status === "vigente" ? "RUTINA VIGENTE" : "HISTÓRICO"}</span>
            <span class="progress-small">${data.dateLabel}</span>
          </div>
        </section>

        <div class="week-select" style="--accent:var(--${accent})">
          ${weeks.map(w=>`<button class="${w===weekNum?"active":""}" data-week="${w}" data-mode-id="${modeId}">Semana ${w}</button>`).join("")}
        </div>

        <nav class="sticky-nav" id="section-nav" style="--accent:var(--${accent})">
          ${data.circuits.map((c,i)=>`<button class="${i===0?"active":""}" data-scroll="${c.id}"><span class="nav-num">${String(i+1).padStart(2,"0")}</span><span>${c.title}</span></button>`).join("")}
        </nav>

        <div style="--accent:var(--${accent})">
          ${data.circuits.map(c=>circuitHtml(c)).join("")}
          <section class="rules">
            <div class="eyebrow">Reglas de esta etapa</div>
            <h3>Control antes que esfuerzo.</h3>
            <ul>${data.rules.map(r=>`<li>${r}</li>`).join("")}</ul>
          </section>
        </div>

        <div class="back-row"><button class="back-link" data-action="home">← Volver al inicio</button></div>
      </div>`;

    setupScrollSpy(data.circuits.map(c=>c.id));
  }

  function circuitHtml(c){
    return `
      <section class="circuit" id="${c.id}">
        <div class="circuit-title">
          <div class="eyebrow">${c.label}</div>
          <h2>${c.title}</h2>
          <p>${c.subtitle||""}</p>
        </div>
        ${c.exercises.map(ex=>`
          <article class="exercise">
            <div class="exercise-num">${ex.n}</div>
            <div>
              <h3>${ex.name}</h3>
              <div class="dose">${ex.dose}</div>
              <p><b>Cómo:</b> ${ex.how}</p>
              ${ex.note?`<div class="exercise-note"><b>Nota:</b> ${ex.note}</div>`:""}
              ${ex.ref?referenceHtml(ex.ref):""}
            </div>
          </article>
        `).join("")}
      </section>`;
  }

  function referenceHtml(type){
    return `
      <details class="exercise-reference">
        <summary>Ver referencia</summary>
        <div class="reference-panel">
          ${referenceSvg(type)}
          <div class="reference-caption">Referencia rápida del gesto.</div>
        </div>
      </details>`;
  }

  function referenceSvg(type){
    const commonStart = '<svg viewBox="0 0 320 170" role="img" aria-label="Referencia esquemática del ejercicio" xmlns="http://www.w3.org/2000/svg"><defs><marker id="arrow" markerWidth="7" markerHeight="7" refX="5.5" refY="3.5" orient="auto"><path d="M0,0 L7,3.5 L0,7" fill="none" stroke="currentColor" stroke-width="1.6"/></marker></defs>';
    const end = '</svg>';

    if(type==="wall-slide") return commonStart + `
      <line x1="250" y1="20" x2="250" y2="150" class="ref-wall"/>
      <circle cx="125" cy="48" r="13" class="ref-body"/>
      <line x1="125" y1="61" x2="125" y2="116" class="ref-body"/>
      <line x1="125" y1="116" x2="105" y2="148" class="ref-body"/>
      <line x1="125" y1="116" x2="145" y2="148" class="ref-body"/>
      <line x1="126" y1="74" x2="155" y2="98" class="ref-ghost"/>
      <line x1="155" y1="98" x2="190" y2="112" class="ref-ghost"/>
      <line x1="126" y1="74" x2="164" y2="50" class="ref-body"/>
      <line x1="164" y1="50" x2="205" y2="32" class="ref-body"/>
      <path d="M196 106 C215 88 219 59 209 38" class="ref-arrow" marker-end="url(#arrow)"/>
      <text x="20" y="28" class="ref-label">WALL SLIDE</text>
    ` + end;

    if(type==="face-pull") return commonStart + `
      <circle cx="160" cy="48" r="13" class="ref-body"/>
      <line x1="160" y1="61" x2="160" y2="118" class="ref-body"/>
      <line x1="160" y1="118" x2="138" y2="150" class="ref-body"/>
      <line x1="160" y1="118" x2="182" y2="150" class="ref-body"/>
      <line x1="160" y1="76" x2="118" y2="86" class="ref-body"/>
      <line x1="118" y1="86" x2="88" y2="72" class="ref-body"/>
      <line x1="160" y1="76" x2="202" y2="86" class="ref-body"/>
      <line x1="202" y1="86" x2="232" y2="72" class="ref-body"/>
      <line x1="18" y1="70" x2="88" y2="72" class="ref-band"/>
      <line x1="302" y1="70" x2="232" y2="72" class="ref-band"/>
      <path d="M105 105 C125 93 142 85 153 77" class="ref-arrow" marker-end="url(#arrow)"/>
      <path d="M215 105 C195 93 178 85 167 77" class="ref-arrow" marker-end="url(#arrow)"/>
      <text x="20" y="28" class="ref-label">FACE PULL</text>
    ` + end;

    if(type==="serratus-plus") return commonStart + `
      <line x1="30" y1="140" x2="292" y2="140" class="ref-floor"/>
      <circle cx="102" cy="73" r="12" class="ref-body"/>
      <line x1="113" y1="80" x2="172" y2="94" class="ref-body"/>
      <line x1="172" y1="94" x2="220" y2="121" class="ref-body"/>
      <line x1="220" y1="121" x2="260" y2="139" class="ref-body"/>
      <line x1="147" y1="88" x2="129" y2="138" class="ref-body"/>
      <line x1="190" y1="104" x2="184" y2="138" class="ref-body"/>
      <path d="M151 72 C161 61 179 60 190 70" class="ref-ghost"/>
      <path d="M151 83 C162 72 179 71 190 81" class="ref-body"/>
      <path d="M170 58 L170 77" class="ref-arrow" marker-end="url(#arrow)"/>
      <text x="20" y="28" class="ref-label">SERRATO PLUS</text>
    ` + end;

    if(type==="side-lying-er") return commonStart + `
      <line x1="28" y1="136" x2="292" y2="136" class="ref-floor"/>
      <circle cx="88" cy="92" r="12" class="ref-body"/>
      <line x1="100" y1="96" x2="190" y2="108" class="ref-body"/>
      <line x1="190" y1="108" x2="235" y2="128" class="ref-body"/>
      <line x1="135" y1="101" x2="160" y2="124" class="ref-body"/>
      <line x1="160" y1="124" x2="190" y2="124" class="ref-ghost"/>
      <line x1="135" y1="101" x2="160" y2="80" class="ref-body"/>
      <line x1="160" y1="80" x2="188" y2="64" class="ref-body"/>
      <circle cx="191" cy="62" r="5" class="ref-weight"/>
      <path d="M190 119 C206 104 207 82 194 67" class="ref-arrow" marker-end="url(#arrow)"/>
      <text x="20" y="28" class="ref-label">ROTACIÓN EXTERNA</text>
    ` + end;

    return "";
  }

  let observer;
  function setupScrollSpy(ids){
    if(observer) observer.disconnect();
    const buttons = [...document.querySelectorAll("[data-scroll]")];
    observer = new IntersectionObserver(entries=>{
      const visible = entries.filter(e=>e.isIntersecting).sort((a,b)=>b.intersectionRatio-a.intersectionRatio)[0];
      if(!visible) return;
      buttons.forEach(b=>b.classList.toggle("active",b.dataset.scroll===visible.target.id));
      const activeBtn = buttons.find(b=>b.classList.contains("active"));
      activeBtn?.scrollIntoView({behavior:"smooth",inline:"center",block:"nearest"});
    },{rootMargin:"-115px 0px -58% 0px",threshold:[0,.2,.5,.8]});
    ids.forEach(id=>{
      const el=document.getElementById(id);
      if(el) observer.observe(el);
    });
  }

  function renderFromHash(){
    const raw = location.hash.replace(/^#/,"") || "home";
    if(raw==="home"){ homeView(); return; }
    const [modeId,w] = raw.split("/");
    const week = w && /^w\d+$/.test(w) ? Number(w.slice(1)) : null;
    modeView(modeId,week);
  }

  window.addEventListener("hashchange",renderFromHash);

  if(sessionStorage.getItem(SESSION_KEY)==="1") unlock();
  else setTimeout(()=>input.focus(),100);
})();