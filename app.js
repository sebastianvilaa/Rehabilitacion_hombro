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
  const refreshButton = document.getElementById("refresh-button");

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

  refreshButton.addEventListener("click", async () => {
    const original = refreshButton.textContent;
    refreshButton.disabled = true;
    refreshButton.textContent = "…";
    try {
      await Promise.all(
        ["./", "styles.css", "data.js", "app.js"].map(resource =>
          fetch(resource + (resource.includes("?") ? "&" : "?") + "refresh=" + Date.now(), {
            cache: "reload"
          })
        )
      );
    } catch (e) {
      // Si falla alguna petición, igualmente recargamos para intentar tomar la versión más nueva.
    } finally {
      refreshButton.textContent = original;
      location.reload();
    }
  });

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
              <div class="eyebrow">Semanas completas + días</div>
              <span class="progress-big">${p.fullWeeks} sem · ${p.rest} d</span>
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
    const now = new Date();
    const todayKey = [now.getFullYear(),String(now.getMonth()+1).padStart(2,"0"),String(now.getDate()).padStart(2,"0")].join("-");
    const startedWeeks = weeks.filter(w => {
      const start = mode.weeks[String(w)].startDate;
      return !start || start <= todayKey;
    });
    const defaultWeekNum = startedWeeks.length ? Math.max(...startedWeeks) : weeks[weeks.length-1];
    const weekNum = requestedWeek && mode.weeks[String(requestedWeek)] ? Number(requestedWeek) : defaultWeekNum;
    const data = mode.weeks[String(weekNum)];
    const accent = mode.accent;
    const statusLabel = data.startDate && data.startDate > todayKey
      ? "PRÓXIMA RUTINA"
      : weekNum === defaultWeekNum
        ? "RUTINA VIGENTE"
        : "HISTÓRICO";

    view.innerHTML = `
      <div class="view">
        <section class="mode-header ${accent}">
          <div class="eyebrow">${mode.name}</div>
          <h1>${data.title}<br>Semana ${data.week}</h1>
          <p>${data.intro}</p>
          <div class="mode-meta">
            <span class="current">${statusLabel}</span>
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
            </div>
          </article>
        `).join("")}
      </section>`;
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