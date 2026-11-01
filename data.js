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
              id: "to-c1",
              label: "Circuito 01",
              title: "Movilidad y entrada en calor",
              subtitle: "Soltar primero. Sin carga importante.",
              exercises: [
                {n:"01",name:"Movilidad general de brazos",dose:"10 repeticiones",how:"Mover los brazos en distintos planos, con recorrido amplio pero cómodo."},
                {n:"02",name:"Rotación torácica parado",dose:"10 por lado",how:"Brazos extendidos / manos al centro y rotar el torso hacia ambos lados."},
                {n:"03",name:"Ponerse y sacarse el sombrero",dose:"10 repeticiones",how:"Llevar la mano hacia la parte superior de la cabeza y volver. Movimiento fluido, sin compensar de más con el tronco."},
                {n:"04",name:"Rotación externa con bastón",dose:"10 repeticiones",how:"Usar el bastón para abrir progresivamente el hombro. Buscar movilidad, no fuerza."}
              ]
            },
            {
              id: "to-c2",
              label: "Circuito 02",
              title: "Movilidad por arriba de la cabeza",
              subtitle: "El bloque principal de la sesión.",
              exercises: [
                {n:"01",name:"Bastón acostado + peso, llevando brazos arriba",dose:"10 repeticiones",how:"Acostado, llevar ambos brazos por encima de la cabeza con el bastón y la carga ya pautada.",note:"Recorrido amplio y controlado. No aumentar peso por tu cuenta."},
                {n:"02",name:"Espaldar + banda liviana",dose:"8–10 repeticiones",how:"Subir progresivamente los brazos en el espaldar. La banda agrega algo de trabajo sin perder movilidad."},
                {n:"03",name:"Pelota contra la pared subiendo",dose:"8–10 repeticiones",how:"Hacer rodar la pelota por la pared hacia arriba y acompañar el recorrido hasta el máximo cómodo."},
                {n:"04",name:"Wall slide frontal",dose:"8–10 repeticiones",how:"Deslizar los brazos recto hacia arriba y hacia abajo sobre la pared.",note:"Va al final porque te demanda bastante. No usarlo como primer ejercicio en frío."}
              ]
            },
            {
              id: "to-c3",
              label: "Circuito 03",
              title: "Rotación externa + escápula",
              subtitle: "Movilidad, control y liberar la mecánica del hombro.",
              exercises: [
                {n:"01",name:"Rotación externa en 90/90",dose:"8–10 repeticiones",how:"Brazo a la altura del hombro y codo flexionado. Trabajar la rotación externa con resistencia mínima o asistida.",note:"En TO el objetivo es rango y control, no cansarte."},
                {n:"02",name:"Plus de serrato en cuadrupedia",dose:"10–12 repeticiones",how:"Manos apoyadas, codos estirados. Empujar el piso y separar las escápulas sin doblar los brazos."},
                {n:"03",name:"Face pull con banda liviana",dose:"10–12 repeticiones",how:"Banda a la altura de la cara. Llevar los codos atrás y afuera, controlando la escápula.",note:"Control de espalda y escápula; no hacerlo pesado como ejercicio de fuerza."},
                {n:"04",name:"Rotación externa acostado de costado",dose:"10 repeticiones",how:"Acostado de costado, codo pegado al cuerpo y abrir el antebrazo hacia afuera con mancuerna.",note:"En TO, menos carga que en kinesio: priorizar recorrido y control."}
              ]
            },
            {
              id: "to-extra",
              label: "Opcional",
              title: "Descarga",
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
      currentWeek: 5,
      accent: "kine",
      summary: "Fuerza progresiva, manguito, tracción, bíceps y control escapular.",
      weeks: {
        "1": {
          week: 1,
          routineNumber: 1,
          status: "historico",
          actualDate: "2026-09-07",
          pdfDate: "2026-09-07",
          dateLabel: "07/09/2026",
          postopLabel: "Postop 3 semanas",
          title: "Fase protegida",
          intro: "Primera rutina formal de kinesio. Trabajo protegido hasta 90°, control escapular y rotación externa suave, todavía cuidando especialmente el ancla del bíceps.",
          circuits: [
            {
              id:"k1-c1",label:"Bloque 01",title:"Movilidad articular",subtitle:"Rango protegido hasta 90°, suave y sin dolor.",
              exercises:[
                {n:"01",name:"Pendulares (Codman)",dose:"3 × 30–60 s",how:"Dejar el brazo relajado y generar el movimiento desde el cuerpo, sin contraer activamente el hombro."},
                {n:"02",name:"Movilidad con pelota",dose:"3 × 10–15",how:"Sobre camilla o pared, hacer círculos y desplazamientos suaves y controlados."},
                {n:"03",name:"Elevación asistida con bastón",dose:"3 × 10",how:"Flexión o plano escapular hasta 90°. El brazo sano guía el movimiento."},
                {n:"04",name:"Escalera en espaldar",dose:"3 × 8–10",how:"Trepar barrote a barrote hasta llegar aproximadamente a 90°."}
              ]
            },
            {
              id:"k1-c2",label:"Bloque 02",title:"Control escapular",subtitle:"Activar y controlar la escápula sin cargar la articulación.",
              exercises:[
                {n:"01",name:"Retracción escapular",dose:"3 × 12",how:"Juntar los omóplatos hacia atrás sin encoger ni subir los hombros."},
                {n:"02",name:"Depresor lateral",dose:"3 × 12",how:"Llevar el hombro abajo y atrás de manera controlada."},
                {n:"03",name:"Depresor frontal",dose:"3 × 12",how:"Descender la escápula hacia abajo al frente, sostener y soltar sin dolor."}
              ]
            },
            {
              id:"k1-c3",label:"Bloque 03",title:"Rotación externa",subtitle:"Progresión suave con el brazo al costado.",
              exercises:[
                {n:"01",name:"RE asistida con bastón",dose:"3 × 10",how:"Codo pegado al cuerpo, idealmente con toalla en la axila. Llevar la mano hacia afuera en rango cómodo."},
                {n:"02",name:"Isométrico de RE submáximo",dose:"3 × 5–10 s",how:"Con el brazo al costado, empujar suavemente contra pared o toalla al 30–50% de fuerza, sin dolor."}
              ]
            }
          ],
          rules:[
            "Evitar flexión de codo y supinación resistidas.",
            "Evitar contracción fuerte o activa del bíceps.",
            "No elevar activamente por encima de 90°.",
            "No hacer RE en abducción ni cruzar el brazo por delante.",
            "Cabestrillo hasta la 4.ª semana; retirarlo solo para ejercicios."
          ]
        },

        "2": {
          week: 2,
          routineNumber: 2,
          status: "historico",
          actualDate: "2026-09-12",
          pdfDate: "2026-09-15",
          dateLabel: "12/09/2026",
          postopLabel: "Postop 4–5 semanas",
          title: "Fuerza inicial",
          intro: "Inicio de fuerza liviana de manguito y escápula, ya sin cabestrillo y buscando ampliar el rango activo sin cargar todavía el bíceps.",
          circuits: [
            {
              id:"k2-c1",label:"Bloque 01",title:"Movilidad y rango",subtitle:"Buscar rango amplio e indoloro.",
              exercises:[
                {n:"01",name:"Elevación activa asistida con bastón",dose:"3 × 10",how:"Flexión o plano escapular buscando superar 120° sin dolor."},
                {n:"02",name:"Escalera en espaldar",dose:"3 × 8–10",how:"Trepar barrote a barrote y progresar la altura sin dolor."},
                {n:"03",name:"Elevación activa en plano escapular",dose:"3 × 10",how:"Elevar sin asistencia, controlando todo el rango disponible."},
                {n:"04",name:"Movilidad RE / RI con bastón al costado",dose:"3 × 10",how:"Codo pegado al cuerpo para mantener y ampliar suavemente el rango rotacional."}
              ]
            },
            {
              id:"k2-c2",label:"Bloque 02",title:"Fuerza inicial de manguito",subtitle:"Banda liviana y trabajo submáximo.",
              exercises:[
                {n:"01",name:"RE con banda al costado",dose:"3 × 12",how:"Codo pegado al cuerpo, banda liviana, recorrido controlado y sin dolor."},
                {n:"02",name:"RI con banda al costado",dose:"3 × 12",how:"Misma posición, carga suave y control de la vuelta."},
                {n:"03",name:"Isométrico de deltoides",dose:"3 × 8–10 s",how:"Empujar contra la pared en abducción al 30–50% de fuerza, sin dolor."},
                {n:"04",name:"Isométrico en plano escapular",dose:"3 × 8–10 s",how:"Sostener el brazo a 30–45° en plano escapular, sin dolor."}
              ]
            },
            {
              id:"k2-c3",label:"Bloque 03",title:"Control escapular y cadena",subtitle:"Estabilidad escapular sin cargar el bíceps.",
              exercises:[
                {n:"01",name:"Retracción escapular con banda",dose:"3 × 12",how:"Con codos casi estirados, juntar omóplatos sin encoger ni tirar con los brazos."},
                {n:"02",name:"Serrato con banda (punch)",dose:"3 × 12",how:"Empujar hacia adelante sacando el hombro para activar el serrato."},
                {n:"03",name:"Depresor lateral con banda",dose:"3 × 12",how:"Llevar el hombro abajo y atrás con control."},
                {n:"04",name:"Depresor frontal con banda",dose:"3 × 12",how:"Descender la escápula al frente, sostener y soltar."},
                {n:"05",name:"Paso lateral con banda",dose:"3 × 10 por lado",how:"Banda en rodillas o tobillos, tronco estable. Trabajo de cadena sin cargar el hombro."}
              ]
            }
          ],
          rules:[
            "Todavía evitar cargar el bíceps.",
            "Evitar remos, dominadas y tracciones con el brazo.",
            "Evitar RE en abducción máxima y cruzar el brazo por delante.",
            "Nada de cargas máximas ni gesto de pádel.",
            "Sí a fuerza liviana de manguito, escápula, tren inferior y core."
          ]
        },

        "3": {
          week: 3,
          routineNumber: 3,
          status: "historico",
          actualDate: "2026-09-29",
          pdfDate: "2026-09-29",
          dateLabel: "29/09/2026",
          postopLabel: "Fuerza progresiva · bíceps aún protegido",
          title: "Fuerza progresiva",
          intro: "Más trabajo dinámico de manguito, control excéntrico y estabilidad escapular, manteniendo todavía protegido el bíceps.",
          circuits: [
            {
              id:"k3-c1",label:"Bloque 01",title:"Movilidad y rango",subtitle:"Rango completo activo, con control en la bajada.",
              exercises:[
                {n:"01",name:"Elevación activa en flexión",dose:"3 × 12",how:"Rango completo sin asistencia, controlando especialmente la bajada."},
                {n:"02",name:"Elevación activa en plano escapular",dose:"3 × 12",how:"Buscar rango completo con foco en el control excéntrico."},
                {n:"03",name:"Escalera en espaldar",dose:"3 × 10",how:"Trepar barrote a barrote hasta el tope cómodo de rango."},
                {n:"04",name:"Movilidad RE / RI con bastón",dose:"3 × 10",how:"Mantener el rango rotacional y llevar la RE hacia 45° de abducción si sale cómodo."}
              ]
            },
            {
              id:"k3-c2",label:"Bloque 02",title:"Fuerza de manguito",subtitle:"Trabajo dinámico con banda y mancuerna liviana.",
              exercises:[
                {n:"01",name:"RE dinámica con banda al costado",dose:"3 × 12",how:"Banda algo más dura que antes, recorrido completo y control concéntrico/excéntrico."},
                {n:"02",name:"RI dinámica con banda al costado",dose:"3 × 12",how:"Codo pegado al cuerpo, progresando carga y controlando la vuelta."},
                {n:"03",name:"Full can en plano escapular",dose:"3 × 12",how:"Mancuerna de 0,5–1 kg, pulgar arriba, elevar hasta 90° sin dolor."},
                {n:"04",name:"RE acostado de costado",dose:"3 × 12",how:"Mancuerna de 0,5–1 kg, codo al costado y bajada lenta."}
              ]
            },
            {
              id:"k3-c3",label:"Bloque 03",title:"Control escapular y cadena",subtitle:"Más carga escapular, todavía sin carga de bíceps.",
              exercises:[
                {n:"01",name:"Retracción escapular con banda",dose:"3 × 12",how:"Usar una banda más dura, juntar omóplatos sin encoger."},
                {n:"02",name:"Serrato con banda (punch)",dose:"3 × 12",how:"Empujar al frente y sumar rango para activar serrato."},
                {n:"03",name:"Wall slide con banda",dose:"3 × 12",how:"Deslizar antebrazos por la pared manteniendo activación escapular."},
                {n:"04",name:"Paso lateral con banda",dose:"3 × 12 por lado",how:"Banda en rodillas o tobillos, tronco estable y progresión de carga."}
              ]
            },
            {
              id:"k3-c4",label:"Bloque 04",title:"Propiocepción y control",subtitle:"Cadena cerrada para estabilidad del hombro.",
              exercises:[
                {n:"01",name:"Plus de serrato en cuadrupedia",dose:"3 × 12",how:"Empujar el piso separando las escápulas sin doblar los codos."},
                {n:"02",name:"Círculos con pelota contra la pared",dose:"3 × 20–30 s",how:"Círculos y ochos controlados con la mano sobre la pelota, activando manguito y serrato."}
              ]
            }
          ],
          rules:[
            "Bíceps aún protegido hasta confirmación médica.",
            "Todavía sin remos, dominadas ni curls.",
            "Evitar RE en abducción máxima y estiramientos bruscos.",
            "Nada de cargas máximas ni saque/remate de pádel.",
            "Sí a manguito dinámico, full can, RE lateral, tren inferior y core."
          ]
        },

        "4": {
          week: 4,
          routineNumber: 4,
          status: "historico",
          actualDate: "2026-10-13",
          pdfDate: "2026-09-29",
          dateLabel: "13/10/2026",
          postopLabel: "Postop ~8 semanas",
          title: "Fuerza progresiva + bíceps",
          intro: "El cirujano ya había habilitado bíceps y patrones de tracción. Entra una fase más completa de fuerza en rango amplio, con progresión de banda a mancuerna.",
          circuits: [
            {
              id:"k4-c1",label:"Bloque 01",title:"Movilidad y activación",subtitle:"Rango completo e incorporación de RE en abducción.",
              exercises:[
                {n:"01",name:"Movilidad activa en todos los planos",dose:"3 × 10",how:"Flexión, abducción y rotaciones en rango completo indoloro."},
                {n:"02",name:"RE / RI con bastón en plano escapular",dose:"3 × 10",how:"Rotaciones a unos 45° de abducción, ganando amplitud de a poco."},
                {n:"03",name:"Movilidad torácica",dose:"3 × 10",how:"Extensión y rotación sobre rulo o sentado, acompañando el gesto del hombro."},
                {n:"04",name:"Activación de manguito con banda",dose:"2 × 15",how:"RE y RI con banda liviana como entrada en calor."}
              ]
            },
            {
              id:"k4-c2",label:"Bloque 02",title:"Fuerza de manguito y rotadores",subtitle:"Progresar carga de banda a mancuerna.",
              exercises:[
                {n:"01",name:"RE en abducción 45°",dose:"3 × 12",how:"En plano escapular con banda o polea, controlar la vuelta y progresar hacia 90/90 según tolerancia."},
                {n:"02",name:"RI en abducción 45°",dose:"3 × 12",how:"Misma posición, con control de la vuelta."},
                {n:"03",name:"Full can con mancuerna",dose:"3 × 12",how:"Pulgar arriba, elevar en plano escapular y subir carga respecto de la banda."},
                {n:"04",name:"RE acostado de costado con mancuerna",dose:"3 × 12",how:"Codo al costado, progresar carga y bajar lento."}
              ]
            },
            {
              id:"k4-c3",label:"Bloque 03",title:"Empuje y tracción",subtitle:"Ya habilitados remo, dorsal, bíceps y press.",
              exercises:[
                {n:"01",name:"Remo con mancuerna o banda",dose:"3 × 12",how:"Llevar el codo atrás, juntar la escápula y completar el rango."},
                {n:"02",name:"Jalón dorsal con banda",dose:"3 × 12",how:"Tracción vertical controlada sin encoger el hombro."},
                {n:"03",name:"Curl de bíceps",dose:"3 × 12",how:"Reactivar el bíceps con carga liviana a moderada y sin dolor."},
                {n:"04",name:"Press de hombro controlado",dose:"3 × 12",how:"Con banda o mancuerna liviana, empujar hasta donde el control lo permita."}
              ]
            },
            {
              id:"k4-c4",label:"Bloque 04",title:"Control escapular",subtitle:"Estabilidad con banda y trabajo en pared.",
              exercises:[
                {n:"01",name:"Plus de serrato en cuadrupedia",dose:"3 × 12",how:"Empujar el piso separando la escápula sin doblar codos."},
                {n:"02",name:"Círculos con pelota contra la pared",dose:"3 × 20–30 s",how:"Círculos y ochos controlados activando manguito y serrato."},
                {n:"03",name:"Wall slide con banda",dose:"3 × 12",how:"Espalda contra la pared y banda en antebrazos. Subir manteniendo rotación externa y contacto con la pared."},
                {n:"04",name:"Face pull con banda",dose:"3 × 12",how:"Tirar hacia la cara con codos atrás y afuera, terminando en rotación externa."}
              ]
            }
          ],
          rules:[
            "No trabajar con cargas máximas ni llegar al fallo.",
            "Todavía no saque o remate de pádel a máxima intensidad.",
            "Evitar RE forzada en abducción y estiramientos bruscos.",
            "Dolor por debajo de 4/10.",
            "Sí a remo, tracción y curl con carga controlada."
          ]
        },

        "5": {
          week: 5,
          routineNumber: 5,
          status: "vigente",
          actualDate: "2026-11-01",
          pdfDate: "2026-10-29",
          startDate: "2026-11-02",
          dateLabel: "01/11/2026",
          postopLabel: "Postop ~12 semanas",
          title: "Fuerza + movilidad de RE",
          intro: "Rutina ajustada después de la medición de fuerza. El foco es ganar rotación externa y cerrar el déficit respecto del hombro sano, todavía sin gesto de pádel ni pliometría.",
          circuits: [
            {
              id:"k5-c1",label:"Bloque 01",title:"Movilidad de rotación externa",subtitle:"Ganar rango de RE progresivamente y sin dolor.",
              exercises:[
                {n:"01",name:"Rotación externa con bastón",dose:"3 × 30–45 s",how:"Trabajar RE en tres posiciones: 0°, 45° y 90° de abducción. Llegar al rango final cómodo y sostener sin dolor."},
                {n:"02",name:"Estiramiento en marco de puerta",dose:"3 × 30 s",how:"Abrir suavemente el pecho en el marco para ganar rotación externa, sin rebotes ni dolor."},
                {n:"03",name:"Contracción–relajación en RE (PNF)",dose:"3 × 8–10 s",how:"Llegar al final cómodo de RE, hacer una contracción isométrica submáxima durante 8–10 segundos, relajar y avanzar suavemente un poco más."},
                {n:"04",name:"CARs de hombro · foco RE",dose:"2 × 5",how:"Hacer rotaciones articulares lentas y controladas, enfatizando el arco de rotación externa."}
              ]
            },
            {
              id:"k5-c2",label:"Bloque 02",title:"Fuerza de rotadores y manguito",subtitle:"Acercarse a los valores del lado sano sin llevar el manguito a máxima carga.",
              exercises:[
                {n:"01",name:"RE en abducción 60°",dose:"3 × 10",how:"Con polea o banda, hacer RE con el brazo a 60° de abducción. Subir carga respecto de la fase anterior y controlar la vuelta lenta."},
                {n:"02",name:"RI en abducción 60°",dose:"3 × 10",how:"En la misma posición a 60°, hacer RI con más carga y controlar también la vuelta."},
                {n:"03",name:"Full can con mancuerna",dose:"3 × 10",how:"Elevar en plano escapular con el pulgar hacia arriba, usando más carga pero controlando todo el recorrido."},
                {n:"04",name:"RE acostado de costado con mancuerna",dose:"3 × 12",how:"Codo pegado al cuerpo, abrir hacia afuera y bajar lento, con foco en la fase excéntrica."}
              ]
            },
            {
              id:"k5-c3",label:"Bloque 03",title:"Fuerza: empuje y tracción",subtitle:"Cargas altas y controladas, con técnica estricta.",
              exercises:[
                {n:"01",name:"Remo con mancuerna pesado",dose:"4 × 8",how:"Traccionar llevando el codo hacia atrás sin perder el control de la escápula.",note:"Última ejecución registrada: 12 kg."},
                {n:"02",name:"Jalón dorsal con banda o polea",dose:"4 × 8",how:"Hacer una tracción vertical con más resistencia, manteniendo el recorrido controlado."},
                {n:"03",name:"Press de hombro con mancuerna",dose:"4 × 8",how:"Progresar la carga y usar recorrido completo solo si el control lo permite y no aparece dolor."},
                {n:"04",name:"Curl de bíceps / flexo-extensión de codo",dose:"3 × 10",how:"Subir progresivamente la carga del bíceps, manteniendo el movimiento controlado."}
              ]
            },
            {
              id:"k5-c4",label:"Bloque 04",title:"Estabilidad escapular",subtitle:"Más demanda de escápula y serrato para sostener mejor la carga.",
              exercises:[
                {n:"01",name:"Shoulder taps en plancha",dose:"3 × 10 por lado",how:"Desde rodillas o pies, tocar el hombro opuesto alternando sin dejar que roten las caderas."},
                {n:"02",name:"Face pull con banda o polea",dose:"3 × 12",how:"Tirar hacia la cara y terminar con rotación externa, manteniendo el control de la escápula."},
                {n:"03",name:"Wall slide con banda",dose:"3 × 12",how:"Deslizar los brazos por la pared manteniendo rotación externa y tensión constante en la banda."},
                {n:"04",name:"Y-T-W en banco boca abajo",dose:"3 × 8 por posición",how:"Boca abajo, elevar los brazos formando una Y, una T y una W. Activar trapecio medio e inferior con carga liviana."}
              ]
            }
          ],
          rules:[
            "Dolor siempre por debajo de 4/10; por encima de 5/10 durante el ejercicio, frenar.",
            "Si el dolor aumenta al día siguiente, bajar la carga en la próxima sesión.",
            "Fuerza pesada controlada sí; fallo muscular y cargas máximas sin control técnico, no.",
            "Todavía no gesto de pádel, lanzamientos, saque, remate ni pliometría.",
            "RE en abducción progresa a 60° y más adelante hacia 90/90.",
            "Objetivo de fuerza: LSI 90%; re-test previsto entre semanas postoperatorias 16–18."
          ]
        }
      }
    }
  }
};