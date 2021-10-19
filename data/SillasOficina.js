/*Enlaces de Amazon*/

const AmazonURLS = [
    "https://www.amazon.es/IntimaTe-WM-Heart-Escritorio-Giratorio/dp/B01EIXO56O/ref=sr_1_1?__mk_es_ES=%C3%85M%C3%85%C5%BD%C3%95%C3%91&dchild=1&keywords=IntimaTe%2BWM%2BHeart%2BSilla%2BGaming%2BErgon%C3%B3mica%2C%2BSilla%2Bde%2BEscritorio%2Bde%2BOficina%2C%2BRacing%2BSilla%2BComputadora%2C%2BAsiento%2BGiratorio%2Bdel%2BEscritorio%2Bdel%2BOrdenador%2C%2BSilla%2Bde%2BTrabajo%2BAjustable%2BPU&qid=1634248066&qsid=260-0704692-3716067&s=kitchen&sr=1-1&sres=B01EIXO56O%2CB07K7FCK36%2CB077MYVDQY%2CB07DK8JC3F%2CB01N4AEDAF%2CB01HNXGLFO%2CB082TWZZGJ%2CB07F8S742Q%2CB01EIXO424%2CB0978R5661%2CB07VB65V1Z%2CB092DCB92S%2CB087RLN7HG%2CB07V5184HD%2CB015VDJ33U%2CB08X65GL8C%2CB084T2SQL4%2CB07J3DGH8M%2CB07YWB48T5%2CB08MQ2HRDZ&srpt=CHAIR&th=1",
    "https://www.amazon.es/STmeng-Computadora-Ergon%C3%B3mico-Ajustable-Giratorio/dp/B087RC5JV4/ref=sr_1_2?__mk_es_ES=%C3%85M%C3%85%C5%BD%C3%95%C3%91&dchild=1&keywords=STMENG%2BLIBERTY%2BT1&qid=1634498637&qsid=260-0704692-3716067&sr=8-2&sres=B087RC5JV4%2CB09HZDZFZK%2CB07RZTRZTB%2CB00UTBFWNU%2CB01HNXGIRK%2CB00TBF407E%2CB089Y8PM5Y%2CB08FC5H383%2CB08524CRGT%2CB01EIXO56O%2CB07WXYXW2K%2CB07K7FCK36%2CB07VB65V1Z%2CB074MKPVS5&srpt=HEADPHONES&th=1",
    "https://www.amazon.es/SONGMICS-Oficina-Alta-Altura-Ajustable-Apoyabrazos-Abatibles-Azul-OBG28BU/dp/B0827SQ4K2/ref=sr_1_1?__mk_es_ES=%C3%85M%C3%85%C5%BD%C3%95%C3%91&dchild=1&keywords=SONGMICS%2BOBG28BU&qid=1634498687&qsid=260-0704692-3716067&sr=8-1&sres=B0827SQ4K2%2CB07C2T696S%2CB07PS1TTFF%2CB086MBLBJB%2CB077MYVDQY%2CB01HNXGLFO%2CB07GNDDNMW%2CB00UTBFWNU%2CB07ZCM9YH1%2CB079GLTJTY%2CB071G2ZKGR%2CB079RYS5XN%2CB07BKQPJ1M%2CB081HX9SRM%2CB0768WHG6L%2CB071J8T44L%2CB077RV85ZB%2CB0769SCRXR%2CB097B7PNS7%2CB07J3DGH8M&srpt=CHAIR&th=1",
    "https://www.amazon.es/SONGMICS-Racing-Escritorio-computadora-reposabrazos/dp/B01HNXGIRK/ref=sr_1_3?__mk_es_ES=%C3%85M%C3%85%C5%BD%C3%95%C3%91&dchild=1&keywords=Songmics%2BOBG56L&qid=1634498727&qsid=260-0704692-3716067&sr=8-3&sres=B01HNXGIRK%2CB0769SCRXR%2CB07S2XCK3P%2CB07V5184HD%2CB077MYVDQY%2CB07GNDDNMW%2CB01HAVJUNO%2CB086M537BB%2CB017IAKF8Q%2CB01I4HT452%2CB07PS1TTFF%2CB00UTBFWNU%2CB079GLTJTY%2CB071G2ZKGR%2CB07ZCM9YH1%2CB07BKQPJ1M%2CB079RYS5XN%2CB081HX9SRM%2CB0768WHG6L%2CB071J8T44L&srpt=CHAIR&th=1",
    "https://www.amazon.es/IntimaTe-WM-Heart-Escritorio-Apoyabrazos/dp/B07F8S742Q/ref=sr_1_9?__mk_es_ES=%C3%85M%C3%85%C5%BD%C3%95%C3%91&dchild=1&keywords=silla+gamer+play+haha&qid=1634495604&qsid=259-2113611-9323707&s=kitchen&sr=1-9&sres=B07S2XCK3P%2CB07XXP3FQS%2CB085246DCM%2CB08FC59KFR%2CB07QZMN6RY%2CB07F8S742Q%2CB01EIXO56O%2CB01EIXO424%2CB083SXXFN1%2CB09D38W6JM%2CB01HNXGIRK%2CB08S3STC4V%2CB07R6C3FMT%2CB08423NPRF%2CB017IAKF8Q%2CB07WF933C1%2CB08K96VM1N%2CB07PDN7L5R%2CB01N4AEDAF%2CB07SVY3HVS&srpt=CHAIR",
  ];
  
  /* Imagen de la cabecera */
  
  const ImgCabecera = "silla gaming ergonomica";
  
  /*Texto de la cabecera*/
  
  const CabeceraText = [
    <>
      Si pasas muchas horas delante del ordenador o eres aficionado a los
      videojuegos, la compra de <b>una silla gamer es la mejor opción para ti.</b>
    </>,
    <>
      La comodidad que te ofrece una silla gaming, no la vas a lograr de otra
      manera. Miles y miles de usuarios se decantan por una silla gaming antes que
      una silla de oficina convencional, ya que una silla gaming te permite pasar
      horas y horas jugando sin cansarte,{" "}
      <b>evitando malas posturas y lesiones</b>, siempre que elijamos una silla
      gaming ergonómica.
    </>,
    <>
      La elección de una silla gaming no es fácil, por ello, traemos esta
      comparativa entre las{" "}
      <b>mejores sillas gaming económicas por menos de 100 euros.</b> ¿Quién dijo
      que la calidad y el bolsillo no van de la mano? 😁
    </>,
  ];
  
  /*Texto del top*/
  
  const TopText = [
    /*Top1*/
    [
      <>
        Sin ninguna duda, estamos ante la campeona de los pesos pesados en
        relación calidad-precio.
      </>,
      <>
        Cuando vimos las especificaciones de esta silla gaming no lo podíamos
        creer. ¡Lo tiene todo! Comodidad, respaldo reclinable a cualquier altura,
        buenos materiales de construcción y sobre todo durabilidad. Todo esto la
        convierte en <b>la silla gaming mejor valorada en Amazon</b> dentro del
        rango de precio entre 50 y 100 euros.
      </>,
      <>
        Si estás buscando una silla gaming para cualquier altura, resistente y con
        una estética elegante, <b>¡esta es tu silla gamer!</b>
      </>,
    ],
    /*Top2*/
    [
      <>
        Si hablamos de sillas gaming calidad – precio, STmeng es la marca
        indicada.
      </>,
      <>
        Con una estética elegante, muy parecida a la anteriormente mencionada,
        esta silla gaming cuenta con superficie de PU de alta calidad y un
        acolchado grueso tanto en el asiento como en los reposabrazos. Comodidad
        absoluta. 👌
      </>,
      <>
        Se trata de una silla gaming{" "}
        <b> ergonómica, abatible y ajustable a cualquier altura.</b> Además,
        cuenta con un cupón de 20% de descuento, convirtiéndola en una de las
        sillas más vendidas de Amazon debido a su gran precio. ¡No se puede pedir
        más!
      </>,
    ],
    /*Top3*/
    [
      <>
        No es casualidad que la marca <b>Songmics</b> aparezca en esta lista. Esta
        empresa lleva años fabricando sillas gaming con una excelente relación
        calidad - precio.
      </>,
      <>
        Contamos con una silla gaming resistente, amplia y con espumas de alta
        densidad que garantizan la comodidad.
      </>,
      <>
        Si hablamos de estética, no se queda atrás, ya que esta silla gaming está
        cubierta de <b>cuero sintético.</b> Cuenta con{" "}
        <b>apoyabrazos abatibles, asiento elevable y ruedas PU de alta calidad</b>
        , resistencia y comodidad a un precio inmejorable.
      </>,
    ],
    /*Top4*/
    [
      <>
        De la mano del mismo fabricante que la anterior, Songmics se mantiene en
        el podio, apostando por una silla gaming con un diseño ergonómico, muy
        parecido a la STMENG LIBERTY T1.
      </>,
      <>
        Hablamos de una <b>silla gaming cómoda y funcional</b>, cuenta con una
        rejilla central para evitar el exceso de calor y apoyabrazos de cuero
        sintético resistentes al uso diario.
      </>,
      <>
        Por menos de 100 euros, esta silla gaming es una opción a valorar.{" "}
        <b>
          Los usuarios aseguran que su espuma de alta densidad proporciona una
          comodidad poco común en este rango de precios.
        </b>{" "}
        También cuenta con mecanismo de inclinación y asiento elevable.
      </>,
    ],
    /*Top5*/
    [
      <>
        Intimate WM Heart lo vuelve a hacer, esta vez con un diseño moderno,
        similar a las sillas gaming de alta gama.
      </>,
      <>
        Esta marca es sinónimo de <b>comodidad y resistencia</b>, cuenta con
        espumas de alta densidad, <b>añadiendo un cojín lumbar y cervical</b> para
        conseguir una sensación de comodidad y relajación.
      </>,
      <>
        Esta silla gaming posee un{" "}
        <b>
          respaldo abatible hasta 135º, apoyabrazos regulables y mecanismo de
          inclinación y altura en el asiento.
        </b>{" "}
        Ha obtenido muy buenas valoraciones y no es para menos, se trata de una
        silla gaming completa, con buenos materiales de construcción y{" "}
        <b>apta para cualquier altura y peso.</b>
      </>,
    ],
  ];
  
  /*Tabla de contenido*/
  const contenido = [
    {
      url: "TOP 5 MEJORES SILLAS DE OFICINA RELACIÓN CALIDAD PRECIO",
      title: "Introducción. Mejores sillas por menos de 100 euros.",
    },
    {
      url: "🏆 TOP 1 – SILLA DE OFICINA 1",
      title: "Top 1: Silla de oficina 1.",
    },
    {
      url: "TOP 2 – SILLA DE OFICINA 2",
      title: "Top 2: Silla de oficina 2.",
    },
    {
      url: "TOP 3 – SILLA DE OFICINA 3",
      title: "Top 3: Silla de oficina 3.",
    },
    {
      url: "TOP 4 – SILLA DE OFICINA 4",
      title: "Top 4: Silla de oficina 4.",
    },
    {
      url: "TOP 5 – SILLA DE OFICINA 5",
      title: "Top 5: Silla de oficina 5.",
    },
  ];
  
  /*Ventajas y desventajas*/
  const conclusiones = [
    {
      vtg: [
        "Duradera y robusta",
        "Cómoda y ergonómica",
        "Completamente regulable",
        "Apta para cualquier altura y peso",
      ],
      dtg: ["Apoyabrazos ligeramente altos"],
    },
    {
      vtg: [
        "Acolchada y cómoda",
        "Regulable a cualquier altura",
        "Materiales de construcción",
        "Estética elegante",
      ],
      dtg: ["Apoyabrazos ligeramente altos", "Abatible únicamente 110º"],
    },
    {
      vtg: [
        "Duradera y robusta",
        "Apoyabrazos abatibles",
        "Estética elegante",
        "Fácil montaje",
      ],
      dtg: [
        "Abatible únicamente a 110°",
        "No apta para pesos superiores a 100kg",
      ],
    },
    {
      vtg: [
        "Materiales de construcción",
        "Acolchada y cómoda",
        "Estética elegante",
      ],
      dtg: [
        "Abatible únicamente a 110°",
        "Apoyabrazos ligeramente altos",
        "No apto para personas de gran tamaño",
      ],
    },
    {
      vtg: [
        "Completamente regulable",
        "Estética moderna",
        "Cómoda y ergonómica",
        "Con soporte lumbar y cervical",
      ],
      dtg: ["Respaldo ligeramente estrecho", "Montaje difícil"],
    },
  ];
  
  /*Imágenes del top*/
  
  const img = [
    {
      title: "Silla Intimate WM Heart",
      width: 209.33,
      height: 323,
    },
    {
      title: "Silla Stmeng Liberty T1",
      width: 236.5,
      height: 375,
    },
    {
      title: "Silla Songmics OBG28BU",
      width: 212.5,
      height: 351.5,
    },
    {
      title: "Silla Songmics OBG56L",
      width: 207,
      height: 340.75,
    },
    {
      title: "IntimaTe WM Heart Silla Gaming",
      width: 228,
      height: 375,
    },
  ];
  
  const NumItems = [0, 1, 2, 3, 4];
  
  export {
    AmazonURLS,
    CabeceraText,
    TopText,
    contenido,
    conclusiones,
    img,
    NumItems,
    ImgCabecera,
  };
  