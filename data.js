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
        targetErIrMax: 75,
        targetLsi: 90,
        retestLabel: "Semanas 16–18"
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
          routineNumber: 6,
          startDate: "2026-11-02",
          status: "vigente",
          title: "Fuerza + movilidad de RE",
          dateLabel: "Vigente · desde 02/11/2026",
          postopLabel: "Postop ~12 semanas",
          intro: "Rutina ajustada después de la medición de fuerza. El foco es ganar rotación externa y cerrar el déficit de fuerza respecto del hombro sano, todavía sin gesto de pádel ni pliometría.",
          circuits: [
            {
              id:"k12-c1",label:"Bloque 01",title:"Movilidad de rotación externa",subtitle:"Ganar rango de RE progresivamente y sin dolor.",
              exercises:[
                {n:"01",name:"Rotación externa con bastón",dose:"3 × 30–45 s",how:"Con el bastón, trabajar la rotación externa en tres posiciones: brazo a 0°, 45° y 90° de abducción. Llegar al rango final cómodo y sostener sin dolor."},
                {n:"02",name:"Estiramiento en marco de puerta",dose:"3 × 30 s",how:"Apoyarte en el marco y abrir suavemente el pecho para ganar rotación externa. Sin rebotes ni dolor."},
                {n:"03",name:"Contracción–relajación en RE (PNF)",dose:"3 × 8–10 s",how:"Llegar al final cómodo de rotación externa, hacer una contracción isométrica submáxima durante 8–10 segundos, relajar y avanzar suavemente un poco más en el nuevo rango."},
                {n:"04",name:"CARs de hombro · foco RE",dose:"2 × 5",how:"Hacer rotaciones articulares lentas y controladas del hombro, buscando especialmente recorrer bien el arco de rotación externa."}
              ]
            },
            {
              id:"k12-c2",label:"Bloque 02",title:"Fuerza de rotadores y manguito",subtitle:"Acercarse a los valores del lado sano sin llevar el manguito a máxima carga.",
              exercises:[
                {n:"01",name:"RE en abducción 60°",dose:"3 × 10",how:"Con polea o banda, hacer rotación externa con el brazo a 60° de abducción. Subir la carga respecto de la fase anterior y controlar especialmente la vuelta lenta."},
                {n:"02",name:"RI en abducción 60°",dose:"3 × 10",how:"En la misma posición a 60°, hacer rotación interna con más carga, manteniendo el movimiento controlado también al volver."},
                {n:"03",name:"Full can con mancuerna",dose:"3 × 10",how:"Elevar el brazo en plano escapular con el pulgar hacia arriba, usando más carga pero controlando todo el recorrido."},
                {n:"04",name:"RE acostado de costado con mancuerna",dose:"3 × 12",how:"Acostado de costado, codo pegado al cuerpo. Abrir el antebrazo hacia afuera y bajar lento, con foco en la fase excéntrica."}
              ]
            },
            {
              id:"k12-c3",label:"Bloque 03",title:"Fuerza: empuje y tracción",subtitle:"Cargas altas y controladas, con técnica estricta.",
              exercises:[
                {n:"01",name:"Remo con mancuerna pesado",dose:"4 × 8",how:"Traccionar llevando el codo hacia atrás sin perder el control de la escápula.",note:"Última ejecución registrada: 12 kg."},
                {n:"02",name:"Jalón dorsal con banda o polea",dose:"4 × 8",how:"Hacer una tracción vertical con más resistencia, manteniendo el recorrido controlado."},
                {n:"03",name:"Press de hombro con mancuerna",dose:"4 × 8",how:"Progresar la carga y usar recorrido completo solo si el control lo permite y no aparece dolor."},
                {n:"04",name:"Curl de bíceps / flexo-extensión de codo",dose:"3 × 10",how:"Subir progresivamente la carga del bíceps, manteniendo el movimiento controlado."}
              ]
            },
            {
              id:"k12-c4",label:"Bloque 04",title:"Estabilidad escapular",subtitle:"Más demanda de escápula y serrato para sostener mejor la carga.",
              exercises:[
                {n:"01",name:"Shoulder taps en plancha",dose:"3 × 10 por lado",how:"En plancha desde rodillas o pies, tocar el hombro opuesto alternando sin dejar que roten las caderas. Buscar serrato y control escapular."},
                {n:"02",name:"Face pull con banda o polea",dose:"3 × 12",how:"Traccionar hacia la cara y terminar con rotación externa, manteniendo el control de la escápula y el manguito posterior."},
                {n:"03",name:"Wall slide con banda",dose:"3 × 12",how:"Deslizar los brazos por la pared manteniendo rotación externa y tensión constante en la banda."},
                {n:"04",name:"Y-T-W en banco boca abajo",dose:"3 × 8 por posición",how:"Boca abajo, elevar los brazos formando una Y, una T y una W. Activar trapecio medio e inferior con carga liviana."}
              ]
            }
          ],
          rules:[
            "Dolor siempre por debajo de 4/10; si supera 5/10 durante el ejercicio, frenar.",
            "Si el dolor aumenta al día siguiente, bajar la carga en la próxima sesión.",
            "Fuerza pesada controlada sí; fallo muscular y cargas máximas sin control técnico, no.",
            "Todavía no gesto de pádel, lanzamientos, saque, remate ni pliometría.",
            "La rotación externa progresa a 60° y más adelante hacia 90/90.",
            "Objetivo de fuerza: acercarse a un LSI del 90%; re-test previsto entre semanas postoperatorias 16–18."
          ]
        }
        }
      }
    }
  }
};