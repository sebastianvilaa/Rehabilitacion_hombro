(() => {
  const DATA = window.REHAB_DATA;
  const SURGERY = new Date(DATA.surgeryDate + "T12:00:00");
  const PIN_HASH = "e3e54cd90759e644036cf64ac6b088e7ffb743a0c557712b483ccf880965e1bf";
  const SESSION_KEY = "rehab_unlocked_v1";
  const NOTES_KEY = "rehab_session_notes_v1";
  const EXERCISE_NOTES_KEY = "rehab_exercise_notes_v3";
  const IS_STANDALONE = window.matchMedia("(display-mode: standalone)").matches || window.navigator.standalone === true;
  let firstRender = true;

  const app = document.getElementById("app");
  const lock = document.getElementById("lock");
  const view = document.getElementById("view");
  const form = document.getElementById("pin-form");
  const input = document.getElementById("pin-input");
  const error = document.getElementById("pin-error");
  const lockButton = document.getElementById("lock-button");
  const refreshButton = document.getElementById("refresh-button");
  const notesButton = document.getElementById("notes-button");

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
  notesButton.addEventListener("click", () => { location.hash = "#notes"; });

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
    const route = e.target.closest("[data-route]");
    if(route){
      location.hash = "#" + route.dataset.route;
      return;
    }

    const current = e.target.closest("[data-go-current]");
    if(current){
      location.hash = "#" + current.dataset.goCurrent;
    }
    const mic = e.target.closest("[data-exercise-mic]");
    if(mic){
      const [modeId,week,ci,ei] = mic.dataset.exerciseMic.split("|");
      openExerciseNote(modeId,Number(week),Number(ci),Number(ei),true);
      return;
    }

    const closeNote = e.target.closest("[data-note-close]");
    if(closeNote){
      const key = closeNote.dataset.noteClose;
      document.querySelector('[data-note-panel="'+key+'"]')?.classList.add("hidden");
      return;
    }

    const nav = e.target.closest("[data-scroll]");
    if(nav){
      document.getElementById(nav.dataset.scroll)?.scrollIntoView({behavior:"smooth",block:"start"});
    }
  });

  document.addEventListener("change", e => {
    const select = e.target.closest("[data-routine-select]");
    if(!select) return;
    location.hash = "#" + select.dataset.modeId + "/w" + select.value;
  });

  document.addEventListener("input", e => {
    const area = e.target.closest("[data-note-area]");
    if(!area) return;
    const key = area.dataset.noteArea;
    const [modeId,week,ci,ei] = key.split("|");
    saveExerciseNote(modeId,Number(week),Number(ci),Number(ei),area.value);
    const status = document.querySelector('[data-note-status="'+key+'"]');
    if(status) status.textContent = area.value.trim() ? "Guardado" : "Vacío";
    const mic = document.querySelector('[data-exercise-mic="'+key+'"]');
    if(mic) mic.classList.toggle("has-note",!!area.value.trim());
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
              <span class="mode-kicker">Violeta · fuerza</span>
              <h3>Kinesiología</h3>
              <p>${DATA.modes.kine.summary}</p>
              <span class="mode-arrow">→</span>
            </button>
          </div>
        </section>

        <section class="section">
          <div class="section-head">
            <div><h2>Mediciones</h2><p>Valores objetivos para comparar la evolución.</p></div>
          </div>
          <button class="measurement-entry" data-route="measurements">
            <div>
              <span class="measurement-entry-kicker">30.10.2026 · Wenchi</span>
              <strong>Fuerza de rotadores</strong>
              <small>Derecho vs. izquierdo · RE / RI</small>
            </div>
            <span class="mode-arrow">→</span>
          </button>
        </section>

        <section class="section">
          <div class="section-head">
            <div><h2>Historial</h2><p>Se conserva cuando cambia una rutina.</p></div>
          </div>
          <div class="history-line">
            <span class="week-chip">TO · ${toWeeks.length} semana registrada</span>
            <span class="week-chip">Kine · ${kWeeks.length} rutinas registradas</span>
          </div>
        </section>
      </div>`;
  }

  function routineLabel(data){
    return data?.routineNumber ? "Rutina " + data.routineNumber : "Semana " + data?.week;
  }

  function modeView(modeId, requestedWeek){
    const mode = DATA.modes[modeId];
    if(!mode){ homeView(); return; }
    const weeks = Object.keys(mode.weeks).map(Number).sort((a,b)=>b-a);
    const defaultWeekNum = mode.currentWeek && mode.weeks[String(mode.currentWeek)]
      ? Number(mode.currentWeek)
      : weeks[0];
    const weekNum = requestedWeek && mode.weeks[String(requestedWeek)] ? Number(requestedWeek) : defaultWeekNum;
    const data = mode.weeks[String(weekNum)];
    const accent = mode.accent;
    const statusLabel = weekNum === defaultWeekNum ? "RUTINA VIGENTE" : "HISTÓRICO";

    view.innerHTML = `
      <div class="view">
        <section class="mode-header ${accent}">
          <div class="eyebrow">${mode.name}</div>
          <h1>${data.routineNumber ? "Rutina " + data.routineNumber : data.title}<br>${data.routineNumber ? data.title : "Semana " + data.week}</h1>
          <p>${data.intro}</p>
          <div class="mode-meta">
            <span class="current">${statusLabel}</span>
            <span class="progress-small">${data.routineNumber && data.postopLabel ? data.postopLabel + " · " + data.dateLabel : data.dateLabel}</span>
          </div>
        </section>

        ${weekNum !== defaultWeekNum ? `
          <div class="history-alert" style="--accent:var(--${accent})">
            <div><strong>Estás viendo una rutina anterior.</strong><span>La vigente es ${routineLabel(mode.weeks[String(defaultWeekNum)])}.</span></div>
            <button data-go-current="${modeId}">Ir a la vigente</button>
          </div>` : ""}

        ${modeId === "kine" ? `
          <div class="routine-select-wrap" style="--accent:var(--${accent})">
            <label for="routine-select">Historial de rutinas</label>
            <select id="routine-select" data-routine-select data-mode-id="${modeId}">
              ${weeks.map(w=>{
                const item = mode.weeks[String(w)];
                return `<option value="${w}" ${w===weekNum?"selected":""}>Rutina ${item.routineNumber} · ${item.dateLabel}${w===defaultWeekNum?" · actual":""}</option>`;
              }).join("")}
            </select>
          </div>
        ` : `
          <div class="week-select" style="--accent:var(--${accent})">
            ${weeks.map(w=>`<button class="${w===weekNum?"active":""} ${w===defaultWeekNum?"current-week":""}" data-week="${w}" data-mode-id="${modeId}">${routineLabel(mode.weeks[String(w)])}${w===defaultWeekNum?" · actual":""}</button>`).join("")}
          </div>
        `}

        <nav class="sticky-nav" id="section-nav" style="--accent:var(--${accent})">
          ${data.circuits.map((c,i)=>`<button class="${i===0?"active":""}" data-scroll="${c.id}"><span class="nav-num">${String(i+1).padStart(2,"0")}</span><span>${c.title}</span></button>`).join("")}
        </nav>

        <div style="--accent:var(--${accent})">
          ${data.circuits.map((c,ci)=>circuitHtml(c,modeId,weekNum,ci)).join("")}
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

  function getExerciseNotes(){
    try {
      return JSON.parse(localStorage.getItem(EXERCISE_NOTES_KEY) || "{}");
    } catch(e) {
      return {};
    }
  }

  function saveExerciseNotes(notes){
    localStorage.setItem(EXERCISE_NOTES_KEY, JSON.stringify(notes));
  }

  function exerciseNoteKey(modeId, week, circuitIndex, exerciseIndex){
    return [modeId, week, circuitIndex, exerciseIndex].join("|");
  }

  function exerciseNoteMeta(modeId, week, circuitIndex, exerciseIndex){
    const mode = DATA.modes[modeId];
    const weekData = mode?.weeks?.[String(week)];
    const circuit = weekData?.circuits?.[circuitIndex];
    const exercise = circuit?.exercises?.[exerciseIndex];
    if(!mode || !weekData || !circuit || !exercise) return null;
    return {mode,weekData,circuit,exercise};
  }

  function saveExerciseNote(modeId, week, circuitIndex, exerciseIndex, text){
    const notes = getExerciseNotes();
    const key = exerciseNoteKey(modeId,week,circuitIndex,exerciseIndex);
    const clean = text.trim();
    if(clean){
      const previous = notes[key] || {};
      const now = new Date().toISOString();
      notes[key] = {
        text: clean,
        createdAt: previous.createdAt || previous.updatedAt || now,
        updatedAt: now
      };
    } else {
      delete notes[key];
    }
    saveExerciseNotes(notes);
  }

  function formatNoteTimestamp(value){
    if(!value) return "";
    const date = new Date(value);
    if(Number.isNaN(date.getTime())) return "";
    return date.toLocaleString("es-AR", {
      day:"2-digit",
      month:"2-digit",
      year:"numeric",
      hour:"2-digit",
      minute:"2-digit",
      hour12:false
    });
  }

  function openExerciseNote(modeId, week, circuitIndex, exerciseIndex, startListening=false){
    const key = exerciseNoteKey(modeId,week,circuitIndex,exerciseIndex);
    const panel = document.querySelector('[data-note-panel="'+key+'"]');
    const area = document.querySelector('[data-note-area="'+key+'"]');
    const status = document.querySelector('[data-note-status="'+key+'"]');
    if(!panel || !area) return;

    panel.classList.remove("hidden");
    area.focus();

    if(startListening){
      startSpeechForExercise(modeId,week,circuitIndex,exerciseIndex,area,status);
    }
  }

  function startSpeechForExercise(modeId, week, circuitIndex, exerciseIndex, area, status){
    const Recognition = window.SpeechRecognition || window.webkitSpeechRecognition;

    if(!Recognition){
      if(status) status.textContent = "Usá el micrófono del teclado para dictar.";
      area.focus();
      return;
    }

    const recognition = new Recognition();
    recognition.lang = "es-AR";
    recognition.interimResults = true;
    recognition.continuous = false;

    const original = area.value.trim();
    let finalText = "";

    if(status) status.textContent = "Escuchando…";

    recognition.onresult = event => {
      let interim = "";
      finalText = "";
      for(let i=event.resultIndex;i<event.results.length;i++){
        const piece = event.results[i][0].transcript;
        if(event.results[i].isFinal) finalText += piece;
        else interim += piece;
      }
      const joined = [original, finalText || interim].filter(Boolean).join(original ? " " : "");
      area.value = joined;
    };

    recognition.onerror = () => {
      if(status) status.textContent = "No pude escuchar. Podés usar el dictado del teclado.";
      area.focus();
    };

    recognition.onend = () => {
      const text = area.value.trim();
      saveExerciseNote(modeId,week,circuitIndex,exerciseIndex,text);
      if(status) status.textContent = text ? "Guardado" : "Vacío";
    };

    try {
      recognition.start();
    } catch(e) {
      if(status) status.textContent = "Usá el micrófono del teclado para dictar.";
      area.focus();
    }
  }

  function buildExerciseNotesSummary(){
    const notes = getExerciseNotes();
    const rows = [];

    Object.entries(notes).forEach(([key,value]) => {
      const [modeId,week,circuitIndex,exerciseIndex] = key.split("|");
      const meta = exerciseNoteMeta(modeId,Number(week),Number(circuitIndex),Number(exerciseIndex));
      if(!meta || !value?.text?.trim()) return;
      rows.push({
        modeId,
        modeName: meta.mode.name,
        week: Number(week),
        routineNumber: meta.weekData.routineNumber || null,
        circuitIndex: Number(circuitIndex),
        circuit: meta.circuit.title,
        exerciseIndex: Number(exerciseIndex),
        exercise: meta.exercise.name,
        text: value.text.trim(),
        timestamp: value.createdAt || value.updatedAt || "",
        timestampLabel: formatNoteTimestamp(value.createdAt || value.updatedAt)
      });
    });

    rows.sort((a,b) =>
      a.week-b.week ||
      a.modeName.localeCompare(b.modeName) ||
      a.circuitIndex-b.circuitIndex ||
      a.exerciseIndex-b.exerciseIndex
    );
    return rows;
  }

  function buildChatGPTExport(){
    const general = (localStorage.getItem(NOTES_KEY) || "").trim();
    const rows = buildExerciseNotesSummary();
    const parts = [
      "Te paso mis notas tomadas durante las sesiones de rehabilitación. Usalas para corregir/actualizar la rutina real en la app, diferenciando lo que efectivamente hice de lo que decía el plan."
    ];

    if(rows.length){
      let currentGroup = "";
      rows.forEach(r => {
        const group = r.modeName + " · " + (r.routineNumber ? "Rutina " + r.routineNumber : "Semana " + r.week);
        if(group !== currentGroup){
          parts.push("\n" + group.toUpperCase());
          currentGroup = group;
        }
        const when = r.timestampLabel ? " [" + r.timestampLabel + "]" : "";
        parts.push("- " + r.circuit + " → " + r.exercise + when + ": " + r.text);
      });
    }

    if(general){
      parts.push("\nNOTAS GENERALES\n" + general);
    }

    return parts.join("\n");
  }

  function measurementsView(){
    const entries = DATA.measurements || [];
    const latest = entries[entries.length-1];
    if(!latest){
      view.innerHTML = '<div class="view"><p>No hay mediciones registradas.</p></div>';
      return;
    }

    const a = latest.analysis;
    view.innerHTML = `
      <div class="view measurements-view">
        <section class="measurements-hero">
          <div class="eyebrow">Seguimiento objetivo</div>
          <h1>Mediciones</h1>
          <p>${latest.label}. Medido por ${latest.measuredBy} el 30/10/2026.</p>
        </section>

        <section class="measurement-card operated">
          <div class="measurement-card-head">
            <div>
              <div class="eyebrow">Operado</div>
              <h2>${latest.operated.side}</h2>
            </div>
          </div>
          <div class="measurement-values">
            <div><span>Rotación externa</span><strong>${String(latest.operated.externalRotation).replace(".",",")}</strong></div>
            <div><span>Rotación interna</span><strong>${latest.operated.internalRotation}</strong></div>
          </div>
        </section>

        <section class="measurement-card healthy">
          <div class="measurement-card-head">
            <div>
              <div class="eyebrow">Referencia</div>
              <h2>${latest.healthy.side}</h2>
            </div>
          </div>
          <div class="measurement-values">
            <div><span>Rotación externa</span><strong>${latest.healthy.externalRotation}</strong></div>
            <div><span>Rotación interna</span><strong>${latest.healthy.internalRotation}</strong></div>
          </div>
        </section>

        <section class="measurement-analysis">
          <div class="eyebrow">Comparación</div>
          <h2>Lectura de referencia</h2>
          <div class="analysis-grid">
            <div><span>Simetría RE</span><strong>${a.externalRotationSymmetry}%</strong></div>
            <div><span>Simetría RI</span><strong>${a.internalRotationSymmetry}%</strong></div>
            <div><span>RE / RI derecho</span><strong>${a.operatedErIrRatio}%</strong></div>
            <div><span>RE / RI izquierdo</span><strong>${a.healthyErIrRatio}%</strong></div>
          </div>
          <div class="measurement-note">
            <p><b>Objetivo RE/RI del plan:</b> ${a.targetErIrMin}–${a.targetErIrMax}%.</p>
            <p>La proporción RE/RI está dentro de ese rango en ambos hombros. Frente al lado sano, el derecho está aproximadamente <b>${a.externalRotationDifference}% por debajo en RE</b> y <b>${a.internalRotationDifference}% por debajo en RI</b>.</p>
            <p><b>Objetivo de fuerza:</b> LSI 90%. Re-test previsto entre semanas postoperatorias 16–18.</p>
            <p>Tomamos esta medición como referencia del 30/10/2026 para comparar futuras evaluaciones.</p>
          </div>
        </section>

        <div class="back-row"><button class="back-link" data-action="home">← Volver al inicio</button></div>
      </div>`;
  }

  function notesView(){
    const saved = localStorage.getItem(NOTES_KEY) || "";
    view.innerHTML = `
      <div class="view notes-view">
        <section class="notes-hero">
          <div class="eyebrow">Bloc personal</div>
          <h1>Notas de sesión</h1>
          <p>Escribí o dictá mientras hacés kinesio o TO. Se guarda automáticamente en este dispositivo.</p>
        </section>

        <div class="notes-tip">
          <strong>Para dictar:</strong> tocá el campo y usá el micrófono del teclado del iPhone.
        </div>

        <textarea id="session-notes" class="notes-textarea" placeholder="Ej: Remo con mancuerna: 12 kg. El press se hace con..."></textarea>

        <div class="notes-status-row">
          <span id="notes-status">Guardado</span>
          <span>Solo en este dispositivo</span>
        </div>

        <div class="notes-actions">
          <button class="secondary-action" id="notes-date">+ Fecha y hora</button>
          <button class="primary-action" id="notes-copy">Copiar notas generales</button>
        </div>

        <section class="exercise-notes-summary">
          <div class="section-head">
            <div><h2>Notas por ejercicio</h2><p>Ordenadas automáticamente según la rutina.</p></div>
          </div>
          <div id="exercise-notes-list"></div>
          <button class="chatgpt-export" id="notes-export">Copiar para ChatGPT</button>
        </section>

        <button class="notes-clear" id="notes-clear">Vaciar notas generales</button>
      </div>`;

    const area = document.getElementById("session-notes");
    const status = document.getElementById("notes-status");
    area.value = saved;

    const exerciseList = document.getElementById("exercise-notes-list");
    const exerciseRows = buildExerciseNotesSummary();
    exerciseList.innerHTML = exerciseRows.length
      ? exerciseRows.map(r => `
          <article class="exercise-note-summary-item">
            <div class="exercise-note-summary-meta">${r.modeName} · ${r.routineNumber ? "Rutina " + r.routineNumber : "Semana " + r.week}${r.timestampLabel ? " · " + r.timestampLabel : ""}</div>
            <strong>${r.exercise}</strong>
            <span>${r.text}</span>
          </article>`).join("")
      : '<div class="empty-exercise-notes">Todavía no guardaste notas asociadas a ejercicios.</div>';

    let saveTimer;
    area.addEventListener("input", () => {
      status.textContent = "Guardando…";
      clearTimeout(saveTimer);
      saveTimer = setTimeout(() => {
        localStorage.setItem(NOTES_KEY, area.value);
        status.textContent = "Guardado";
      }, 180);
    });

    document.getElementById("notes-date").addEventListener("click", () => {
      const now = new Date();
      const stamp = now.toLocaleString("es-AR", {
        day:"2-digit", month:"2-digit", year:"numeric",
        hour:"2-digit", minute:"2-digit"
      });
      const prefix = area.value.trim() ? "\n\n" : "";
      area.value += prefix + "— " + stamp + " —\n";
      localStorage.setItem(NOTES_KEY, area.value);
      status.textContent = "Guardado";
      area.focus();
      area.setSelectionRange(area.value.length, area.value.length);
    });

    document.getElementById("notes-copy").addEventListener("click", async () => {
      const button = document.getElementById("notes-copy");
      try {
        await navigator.clipboard.writeText(area.value);
        button.textContent = "Copiado ✓";
      } catch(e) {
        area.select();
        document.execCommand("copy");
        button.textContent = "Copiado ✓";
      }
      setTimeout(() => button.textContent = "Copiar todo", 1400);
    });

    document.getElementById("notes-export").addEventListener("click", async () => {
      const button = document.getElementById("notes-export");
      const text = buildChatGPTExport();
      try {
        await navigator.clipboard.writeText(text);
      } catch(e) {
        const temp = document.createElement("textarea");
        temp.value = text;
        document.body.appendChild(temp);
        temp.select();
        document.execCommand("copy");
        temp.remove();
      }
      button.textContent = "Copiado para ChatGPT ✓";
      setTimeout(() => button.textContent = "Copiar para ChatGPT", 1600);
    });

    document.getElementById("notes-clear").addEventListener("click", () => {
      if(!area.value.trim() || confirm("¿Vaciar todas las notas guardadas en este dispositivo?")){
        area.value = "";
        localStorage.removeItem(NOTES_KEY);
        status.textContent = "Vacío";
      }
    });
  }

  function circuitHtml(c,modeId,weekNum,circuitIndex){
    const notes = getExerciseNotes();
    return `
      <section class="circuit" id="${c.id}">
        <div class="circuit-title">
          <div class="eyebrow">${c.label}</div>
          <h2>${c.title}</h2>
          <p>${c.subtitle||""}</p>
        </div>
        ${c.exercises.map((ex,ei)=>{
          const noteKey = exerciseNoteKey(modeId,weekNum,circuitIndex,ei);
          const savedNote = notes[noteKey]?.text || "";
          return `
          <article class="exercise">
            <div class="exercise-num">${ex.n}</div>
            <div>
              <div class="exercise-title-row">
                <h3>${ex.name}</h3>
                <button class="exercise-mic ${savedNote?"has-note":""}" type="button"
                  aria-label="Dictar nota sobre ${ex.name}"
                  data-exercise-mic="${noteKey}">
                  <svg viewBox="0 0 24 24" aria-hidden="true">
                    <rect x="9" y="3" width="6" height="11" rx="3"></rect>
                    <path d="M6.5 11.5a5.5 5.5 0 0 0 11 0"></path>
                    <path d="M12 17v4"></path>
                    <path d="M9 21h6"></path>
                  </svg>
                </button>
              </div>
              <div class="dose">${ex.dose}</div>
              <p><b>Cómo:</b> ${ex.how}</p>
              ${ex.note?`<div class="exercise-note"><b>Nota:</b> ${ex.note}</div>`:""}
              <div class="exercise-note-panel ${savedNote?"":"hidden"}" data-note-panel="${noteKey}">
                <textarea class="exercise-note-area" data-note-area="${noteKey}" placeholder="Nota rápida sobre este ejercicio…">${savedNote}</textarea>
                <div class="exercise-note-controls">
                  <span data-note-status="${noteKey}">${savedNote?"Guardado":"Listo para dictar"}</span>
                  <button type="button" data-note-close="${noteKey}">Cerrar</button>
                </div>
              </div>
            </div>
          </article>`;
        }).join("")}
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
    if(raw==="home"){ firstRender=false; homeView(); return; }
    if(raw==="notes"){ firstRender=false; notesView(); return; }
    if(raw==="measurements"){ firstRender=false; measurementsView(); return; }

    const [modeId,w] = raw.split("/");
    const week = w && /^w\d+$/.test(w) ? Number(w.slice(1)) : null;
    const mode = DATA.modes[modeId];

    if(firstRender && IS_STANDALONE && mode && week && mode.currentWeek && week !== Number(mode.currentWeek)){
      firstRender=false;
      location.replace("#"+modeId);
      return;
    }

    firstRender=false;
    modeView(modeId,week);
  }

  window.addEventListener("hashchange",renderFromHash);

  if(sessionStorage.getItem(SESSION_KEY)==="1") unlock();
  else setTimeout(()=>input.focus(),100);
})();