window.REHAB_DATA = {
  surgeryDate: "2026-08-14",
  title: "Rehabilitación",
  modes: {
    to: {
      id: "to",
      short: "TO",
      name: "Terapia ocupacional",
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
      accent: "kine",
      summary: "Fuerza progresiva, manguito, tracción, bíceps y control escapular.",
      weeks: {
        "11": {
          week: 11,
          status: "vigente",
          title: "Fuerza progresiva",
          dateLabel: "Rutina vigente · Semana 11",
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
        }
      }
    }
  }
};