window.REHAB_DATA = {
  surgeryDate: "2026-08-14",
  title: "Rehabilitación",
  measurements: [
    {
      date: "2026-10-30",
      label: "Medición de fuerza de rotadores",
      measuredBy: "Wenchi",
      operated: {
        side: "Hombro derecho operado",
        externalRotation: 70.5,
        internalRotation: 98
      },
      healthy: {
        side: "Hombro izquierdo sano",
        externalRotation: 98,
        internalRotation: 143
      },
      analysis: {
        externalRotationSymmetry: 71.9,
        internalRotationSymmetry: 68.5,
        operatedErIrRatio: 71.9,
        healthyErIrRatio: 68.5,
        externalRotationDifference: 28.1,
        internalRotationDifference: 31.5,
        targetErIrMin: 66,
        targetErIrMax: 75
      }
    }
  ],
  modes: {
    to: {
      id: "to",
      short: "TO",
      name: "Terapia ocupacional",
      currentWeek: 11,
      accent: "to",
      summary: "Movilidad, rango y control. Complementa kinesio sin duplicar la carga.",
      weeks: {
        "11": {
          week: 11,
          status: "vigente",
          title: "Movilidad",
          dateLabel: "Semana 11",
          intro: "Ganar movilidad por arriba de la cabeza, rotación externa y control escapular, sin duplicar el trabajo de fuerza de kinesio.",
          circuits: [
            {
              id: "to-c1", label: "Circuito 01", title: "Movilidad y entrada en calor",
              subtitle: "Soltar primero. Sin carga importante.",
              exercises: [
                {n:"01",name:"Movilidad general de brazos",dose:"10 repeticiones",how:"Mover los brazos en distintos planos, con recorrido amplio pero cómodo."},
                {n:"02",name:"Rotación torácica parado",dose:"10 por lado",how:"Brazos extendidos / manos al centro y rotar el torso hacia ambos lados."},
                {n:"03",name:"Ponerse y sacarse el sombrero",dose:"10 repeticiones",how:"Llevar la mano hacia la parte superior de la cabeza y volver. Movimiento fluido, sin compensar de más con el tronco."},
                {n:"04",name:"Rotación externa con bastón",dose:"10 repeticiones",how:"Usar el bastón para abrir progresivamente el hombro. Buscar movilidad, no fuerza."}
              ]
            },
            {
              id: "to-c2", label: "Circuito 02", title: "Movilidad por arriba de la cabeza",
              subtitle: "El bloque principal de la sesión.",
              exercises: [
                {n:"01",name:"Bastón acostado + peso, llevando brazos arriba",dose:"10 repeticiones",how:"Acostado, llevar ambos brazos por encima de la cabeza con el bastón y la carga ya pautada.",note:"Recorrido amplio y controlado. No aumentar peso por tu cuenta."},
                {n:"02",name:"Espaldar + banda liviana",dose:"8–10 repeticiones",how:"Subir progresivamente los brazos en el espaldar. La banda agrega algo de trabajo sin perder movilidad."},
                {n:"03",name:"Pelota contra la pared subiendo",dose:"8–10 repeticiones",how:"Hacer rodar la pelota por la pared hacia arriba y acompañar el recorrido hasta el máximo cómodo."},
                {n:"04",name:"Wall slide frontal",dose:"8–10 repeticiones",how:"Deslizar los brazos recto hacia arriba y hacia abajo sobre la pared.",note:"Va al final porque te demanda bastante. No usarlo como primer ejercicio en frío.",ref:"wall-slide"}
              ]
            },
            {
              id: "to-c3", label: "Circuito 03", title: "Rotación externa + escápula",
              subtitle: "Movilidad, control y liberar la mecánica del hombro.",
              exercises: [
                {n:"01",name:"Rotación externa en 90/90",dose:"8–10 repeticiones",how:"Brazo a la altura del hombro y codo flexionado. Trabajar la rotación externa con resistencia mínima o asistida.",note:"En TO el objetivo es rango y control, no cansarte."},
                {n:"02",name:"Plus de serrato en cuadrupedia",dose:"10–12 repeticiones",how:"Manos apoyadas, codos estirados. Empujar el piso y “separar” las escápulas sin doblar los brazos.",ref:"serratus-plus"},
                {n:"03",name:"Face pull con banda liviana",dose:"10–12 repeticiones",how:"Banda a la altura de la cara. Llevar los codos atrás y afuera, controlando la escápula.",note:"Control de espalda y escápula; no hacerlo pesado como ejercicio de fuerza.",ref:"face-pull"},
                {n:"04",name:"Rotación externa acostado de costado",dose:"10 repeticiones",how:"Acostado de costado, codo pegado al cuerpo y abrir el antebrazo hacia afuera con mancuerna.",note:"En TO, menos carga que los 4 kg de kinesio: priorizar recorrido y control.",ref:"side-lying-er"}
              ]
            },
            {
              id: "to-extra", label: "Opcional", title: "Descarga",
              subtitle: "Solo si llegás muy trabado o terminás muy cargado.",
              exercises: [
                {n:"A",name:"Correíta / polea suave",dose:"10 repeticiones",how:"Usarla como ayuda para destrabar la elevación, no como parte fija si el espaldar ya sale bien."},
                {n:"B",name:"Pelota sobre camilla",dose:"10–15 repeticiones",how:"Solo como descarga si el hombro está pesado o muy cargado."},
                {n:"C",name:"Extensión / rotación torácica suave",dose:"8–10 por lado",how:"Mover el tórax suavemente para acompañar mejor el gesto del hombro y descargar espalda."}
              ]
            }
          ],
          rules: [
            "Dolor siempre por debajo de 4/10.",
            "No forzar rotación externa ni hacer estiramientos bruscos.",
            "Si perdés calidad de movimiento por fatiga, no hace falta completar otra vuelta.",
            "TO complementa kinesio: movilidad y control antes que fuerza."
          ]
        }
      }
    },
    kine: {
      id: "kine",
      short: "Kine",
      name: "Kinesiología",
      currentWeek: 12,
      accent: "kine",
      summary: "Fuerza progresiva, manguito, tracción, bíceps y control escapular.",
      weeks: {
        "11": {
          startDate: "2026-10-26",
          week: 11,
          status: "historico",
          title: "Fuerza progresiva",
          dateLabel: "Semana 11 · histórico",
          intro: "Trabajo de fuerza progresiva en rango completo. La rutina sigue el esquema indicado en kinesio y su ejecución práctica actual.",
          circuits: [
            {
              id:"k-c1",label:"Bloque 01",title:"Movilidad + activación",subtitle:"Preparar antes de cargar.",
              exercises:[
                {n:"01",name:"Movilidad general",dose:"3 × 10",how:"Movilidad activa del brazo en todos los planos, dentro del rango cómodo."},
                {n:"02",name:"RE / RI con bastón",dose:"3 × 10",how:"Rotación externa e interna en plano escapular, progresiva."},
                {n:"03",name:"Rotación torácica parado",dose:"3 × 10",how:"Rotar el torso con brazos al frente, alternando ambos lados."},
                {n:"04",name:"Activación de manguito con banda",dose:"2 × 15",how:"Rotación externa e interna livianas como entrada en calor."}
              ]
            },
            {
              id:"k-c2",label:"Bloque 02",title:"Manguito + rotadores",subtitle:"Fuerza controlada y progresiva.",
              exercises:[
                {n:"01",name:"Rotación externa con banda",dose:"3 × 12",how:"Brazo aproximadamente a 45° / cerca de la altura del hombro. Abrir hacia afuera con control."},
                {n:"02",name:"Rotación interna con banda",dose:"3 × 12",how:"Misma posición general, llevando el antebrazo hacia adentro con control."},
                {n:"03",name:"Full can",dose:"3 × 12",how:"Elevar el brazo en plano escapular con pulgar hacia arriba, con carga pautada."},
                {n:"04",name:"RE acostado de costado",dose:"3 × 12",how:"Codo pegado al cuerpo, abrir hacia afuera y bajar lento.",note:"Actualmente lo hacés con 4 kg en kinesio.",ref:"side-lying-er"}
              ]
            },
            {
              id:"k-c3",label:"Bloque 03",title:"Tracción + bíceps",subtitle:"Patrones ya habilitados por el cirujano.",
              exercises:[
                {n:"01",name:"Remo",dose:"3 × 12",how:"Tirar del agarre hacia el cuerpo, llevando los codos hacia las costillas."},
                {n:"02",name:"Lat pulldown con banda",dose:"3 × 12",how:"Banda desde arriba, llevar hacia abajo con recorrido controlado."},
                {n:"03",name:"Curl de bíceps",dose:"3 × 12",how:"Flexión de codo normal con carga pautada, sin movimientos bruscos."},
                {n:"04",name:"Espaldar + banda amarilla",dose:"3 × 12 aprox.",how:"Subir progresivamente en el espaldar, yendo de a un nivel para arriba, con una banda amarilla que agrega una resistencia leve.",note:"Este fue el ejercicio que realmente terminó quedando en la rutina de esta semana; la correíta no se usó."}
              ]
            },
            {
              id:"k-c4",label:"Bloque 04",title:"Control escapular",subtitle:"Serrato, escápula y cadena posterior.",
              exercises:[
                {n:"01",name:"Plus de serrato en cuadrupedia",dose:"3 × 12",how:"Con codos estirados, empujar el piso separando las escápulas.",ref:"serratus-plus"},
                {n:"02",name:"Círculos con pelota en pared",dose:"3 × 20–30 s",how:"Pelota contra pared, círculos controlados.",note:"En kinesio puede llevar peso en muñeca y te resulta demandante."},
                {n:"03",name:"Wall slide frontal",dose:"3 × 12",how:"Subir y bajar recto sobre la pared, sin diagonal.",ref:"wall-slide"},
                {n:"04",name:"Face pull con banda",dose:"3 × 12",how:"Tirar hacia la cara, codos atrás y afuera, controlando la escápula.",ref:"face-pull"}
              ]
            }
          ],
          rules:[
            "Dolor por debajo de 4/10; si supera 5/10 durante el ejercicio, frenar.",
            "No trabajar a carga máxima ni al fallo.",
            "No forzar la rotación externa en abducción ni hacer estiramientos bruscos.",
            "La progresión de carga la marca kinesio según respuesta y control."
          ]
        },
        "12": {
          week: 12,
          startDate: "2026-11-02",
          status: "vigente",
          title: "Fuerza pesada",
          dateLabel: "Rutina vigente · Semana 12",
          intro: "Nueva fase de fuerza más pesada y controlada. Suben el ángulo de trabajo, la carga y la demanda escapular, todavía sin gesto de pádel ni pliometría.",
          circuits: [
            {
              id:"k12-c1",label:"Bloque 01",title:"Activación y movilidad",subtitle:"Entrada en calor y activación previa a la carga. RE progresando a 60°.",
              exercises:[
                {n:"01",name:"Movilidad activa en todos los planos",dose:"2 × 10",how:"Flexión, abducción y rotaciones en rango completo, como entrada en calor."},
                {n:"02",name:"RE / RI con banda en abducción 60°",dose:"2 × 12",how:"Rotación externa e interna con banda, llevando la abducción a 60° y manteniendo una activación suave.",note:"Ejecución real en sesión: banda amarilla, con resistencia muy suave."},
                {n:"03",name:"Movilidad torácica",dose:"2 × 10",how:"Extensión y rotación torácica, sobre rulo o sentado, acompañando el gesto."},
                {n:"04",name:"Activación de manguito + serrato",dose:"2 × 15",how:"Banda liviana para RE/RI y punch de serrato como preparación.",note:"Este componente de serrato aparece explícitamente en el nuevo plan; confirmar mañana cómo lo quiere ejecutar Wenchi."}
              ]
            },
            {
              id:"k12-c2",label:"Bloque 02",title:"Fuerza de rotadores y manguito",subtitle:"Más carga, controlando especialmente la vuelta excéntrica.",
              exercises:[
                {n:"01",name:"RE en abducción 60°",dose:"3 × 10",how:"Con banda o polea, rotación externa a 60° de abducción. Subir carga respecto a la fase anterior y controlar la vuelta."},
                {n:"02",name:"RI en abducción 60°",dose:"3 × 10",how:"Misma posición a 60°, rotación interna con más carga y vuelta controlada."},
                {n:"03",name:"Full can con mancuerna",dose:"3 × 10",how:"Brazos en plano escapular, pulgar arriba y recorrido completo con control.",note:"Venías usando 2,5 kg. La nueva carga queda a definir en sesión; no fijamos todavía 3, 4 o 5 kg."},
                {n:"04",name:"RE acostado de costado",dose:"3 × 12",how:"Decúbito lateral, codo pegado al cuerpo, abrir hacia afuera con mancuerna y bajar lento.",note:"Venías usando 4 kg. El plan pide progresar carga, pero el valor nuevo queda a definir."}
              ]
            },
            {
              id:"k12-c3",label:"Bloque 03",title:"Fuerza: empuje y tracción",subtitle:"Cargas altas y controladas, con técnica estricta.",
              exercises:[
                {n:"01",name:"Remo con mancuerna pesado",dose:"4 × 8",how:"Traccionar llevando el codo atrás sin perder el control de la escápula.",note:"Ejecución real en sesión: 12 kg."},
                {n:"02",name:"Jalón dorsal con banda o polea",dose:"4 × 8",how:"Tracción vertical controlada con más resistencia.",note:"Es el dorsal que ya venías haciendo con banda negra; la progresión exacta de resistencia queda a definir."},
                {n:"03",name:"Press de hombro con mancuerna",dose:"4 × 8",how:"Press de hombro con recorrido completo si el control lo permite y sin dolor.",note:"Ejercicio nuevo. Arranque y carga a definir en sesión."},
                {n:"04",name:"Curl de bíceps",dose:"3 × 10",how:"Flexo-extensión de codo controlada, en la variante que venís haciendo tipo martillo.",note:"Venías usando 7,5 kg. El plan indica subir carga, pero no fijamos todavía 10 kg."}
              ]
            },
            {
              id:"k12-c4",label:"Bloque 04",title:"Estabilidad escapular",subtitle:"Más demanda de serrato, escápula y manguito posterior.",
              exercises:[
                {n:"01",name:"Shoulder taps en plancha",dose:"3 × 10 por lado",how:"En plancha desde rodillas o pies, tocar el hombro opuesto alternando sin dejar que roten las caderas.",note:"Nuevo. Busca estabilidad, serrato y control escapular."},
                {n:"02",name:"Face pull con banda o polea",dose:"3 × 12",how:"Traccionar hacia la cara y terminar con rotación externa, manteniendo el control de la escápula.",note:"Venís haciéndolo con banda negra. El nuevo plan pide más carga, a definir según control."},
                {n:"03",name:"Wall slide con banda",dose:"3 × 12",how:"Deslizar sobre la pared manteniendo rotación externa y tensión constante en la banda.",note:"Venís usando banda verde; la azul es más fuerte, pero no cambiamos resistencia hasta probarlo."},
                {n:"04",name:"Y-T-W en banco, boca abajo",dose:"3 × 8 por posición",how:"Boca abajo, elevar los brazos formando sucesivamente una Y, una T y una W, activando trapecio medio e inferior.",note:"Ejercicio nuevo, con carga liviana. Confirmar mañana la ejecución exacta."}
              ]
            }
          ],
          rules:[
            "Dolor siempre por debajo de 4/10; por encima de 5/10 durante el ejercicio, frenar.",
            "Si el dolor aumenta al día siguiente, bajar la carga en la próxima sesión.",
            "Fuerza pesada sí, pero sin fallo muscular ni cargas máximas sin control técnico.",
            "Todavía no gesto de pádel, lanzamientos, saque, remate ni pliometría.",
            "La rotación externa progresa a 60° y luego hacia 90/90."
          ]
        }
      }
    }
  }
};