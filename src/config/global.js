export default {
  global: {
    componenteFormativo:
      'Desarme de elementos, piezas eléctricas y electrónicas',
    descripcionCurso:
      'El desarme de los equipos es una de las funciones clave en los procesos de mantenimiento y ensamble. Este componente formativo aborda conceptos y acciones de operación que afianzarán conocimientos y habilidades del aprendiz. Se desarrollarán aspectos técnicos como: orden, aseo, seguridad, diligenciamiento de las diferentes evidencias y hallazgos que se encuentran durante el mantenimiento. ',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.svg'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/a1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/a2.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/a3.svg'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Aparatos eléctricos y electrónicos',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Categorías',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: 'Componentes electrónicos y componentes mecánicos',
            hash: 't_1_2',
          },
        ],
      },

      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Equipamiento',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Elementos de marca y ámbito ético de los procedimientos',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema4',
        icono: 'far fa-file-alt',
        numero: '4',
        titulo: 'Sistemas de Información',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: 'Elementos de marca y ámbito ético de los procedimientos',
      referencia:
        'SenaVirtualCursos. (2015). <em>Curso SENA Sofia Plus Ética en lo laboral y profesional [video]. </em>YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=sQskfCM_Ae0',
    },
    {
      tema: 'Aparatos eléctricos y electrónicos',
      referencia:
        'Ecosistema de Recursos Educativos Digitales SENA. (2022). <em>Diagnóstico de circuitos electrónicos digitales: introducción</em> [video]. YouTube. ',
      tipo: 'Video.',
      link: 'https://www.youtube.com/watch?v=UV2wDC09B4g',
    },
    {
      tema: 'Aparatos eléctricos y electrónicos',
      referencia:
        'Arrow Divisiones. (2022). <em>Fabricantes, Proporcionamos la tecnología que necesita. Arrow.</em> ',
      tipo: 'Página Web.',
      link: 'https://www.arrow.com/es-mx/manufacturers',
    },
    {
      tema: 'Equipamiento',
      referencia:
        'Mora, L. (2016). <em>Inventario Cero Cuánto y cuándo pedir.</em> Alfaomega.',
      tipo: 'Libro  ',
      link:
        'https://books.google.com.co/books?hl=es&lr=&id=WaFxEAAAQBAJ&oi=fnd&pg=PA6&dq=Inventario+Cero+Cu%C3%A1nto+y+cu%C3%A1ndo+pedir.&ots=HjBxM0_txJ&sig=rk3nAOsb4VTW96lI9kT5LBKlGGE&redir_esc=y#v=onepage&q=Inventario%20Cero%20Cu%C3%A1nto%20y%20cu%C3%A1ndo%20pedir.&f=false',
    },
    {
      tema: 'Aparatos eléctricos y electrónicos',
      referencia:
        'El Profe Ricardo. (2021). <em>Uso del multímetro </em>[video]. YouTube. ',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=tT_hYtrp9xI',
    },
  ],
  glosario: [
    {
      termino: 'Componente electrónico',
      significado:
        'dispositivos que forman parte de un circuito, configurados específicamente en una placa. Son de diferentes materiales y clasificaciones, de acuerdo con su aspecto, aplicación, etc.',
    },
    {
      termino: 'Desarme',
      significado:
        'se refiere a la acción realizada para quitar las partes de un artefacto específico.',
    },
    {
      termino: 'Fabricante',
      significado:
        'aquella persona o empresa que se dedica a la elaboración de diferentes productos.',
    },
    {
      termino: 'Inspección',
      significado:
        'acción que se realiza con el objetivo de verificar el correcto funcionamiento o posible fallo de un aparato.',
    },
    {
      termino: 'Material',
      significado:
        'composición física de un elemento, el cual le brinda características especiales para una aplicación específica.',
    },
    {
      termino: 'Medición',
      significado:
        'es la acción que se realiza con algún instrumento de medida.',
    },
    {
      termino: 'Pieza',
      significado:
        'es un elemento que forma parte de un conjunto, para este caso, puede ser mecánica o electrónica, cumpliendo una función específica dentro del sistema.',
    },
    {
      termino: 'RAEE',
      significado:
        'es la denominación que se le da a los Residuos de Aparatos Eléctricos y Electrónicos.',
    },
    {
      termino: 'Residuos',
      significado:
        'materiales o partes que ya no son útiles para un fin específico, los cuales deben ser dispuestos correctamente para su desecho.',
    },
    {
      termino: 'Servicio',
      significado:
        'actividad que realiza especialmente cuando es para otra persona, por lo general es remunerado.',
    },
    {
      termino: 'Soldadura',
      significado:
        'proceso industrial por medio del cual se unen mínimo dos elementos, que generalmente son metálicos, fundiendo',
    },
  ],
  referencias: [
    {
      referencia:
        'Alldatasheet. (2022). Hoja de datos LED-530LB5C (PDF) - Componentes electrónicos HB. Alldatasheet. ',
      link:
        'https://pdf1.alldatasheet.es/datasheet-pdf/view/739351/HB/LED-530LB5C.html',
    },
    {
      referencia:
        'Altium Limited. (2020). Ficha técnica de componentes electrónicos para su gestión',
      link:
        'https://resources.altium.com/sites/default/files/uberflip_docs/file_806.pdf',
    },
    {
      referencia: 'Arrow Electronics. (2022). Fabricantes. Arrow.',
      link: 'https://www.arrow.com/es-mx/manufacturers',
    },
    {
      referencia:
        'López, C. (2022). Desarme de elementos y piezas eléctricas y electrónicas. Educaplay.',
      link:
        'https://es.educaplay.com/recursos-educativos/12816363-desarme_de_elementos_y_piezas_electricas_y_electronicas.html',
    },
    {
      referencia:
        'Encyclopedia Britannica ImageQuest. (2022). Millones de imágenes libres de derechos de autor recopiladas en un único sitio confiable. Bdigital.sena.',
      link: 'https://quest-eb-com.bdigital.sena.edu.co/',
    },
    {
      referencia:
        'Harper, G. (2002). Manual de instalación y reparación de aparatos electrodomésticos: instalaciones eléctricas e hidráulicas. Editorial Limusa.',
      link: '',
    },
    {
      referencia:
        'Hughes, R. S. (2022). Etiquetas de mantenimiento y reparación. Rshughes.',
      link:
        'https://www.rshughes.mx/c/Etiquetas-De-Mantenimiento-Y-Reparacion/7096/',
    },
    {
      referencia:
        'Landín, P. (2017). Resumen de electrónica en infografías. Pelandintecno.',
      link:
        'http://pelandintecno.blogspot.com/2017/05/resumen-de-electronica-en-infografias.html',
    },
    {
      referencia:
        'Ministerio de Ambiente y Desarrollo Sostenible. (2017). Política Nacional. Gestión Integral de Residuos de Aparato Eléctricos y Electrónicos – RAEE.',
      link:
        'https://www.minambiente.gov.co/wp-content/uploads/2021/10/Politica_RAEE.pdf',
    },
    {
      referencia:
        'Mora, L. (2016). Inventario Cero Cuánto y cuándo pedir. Alfaomega.',
      link: '',
    },
    {
      referencia:
        'Mouser Electronics. (2022). Componentes electrónicos. Mouser.',
      link: 'https://co.mouser.com/c/passive-components/',
    },
    {
      referencia:
        'Salazar, J. (2013). La ética profesional en la ingeniería electrónica. [Web log post]. Wordpress.',
      link:
        'https://juansalazars.wordpress.com/2013/01/03/la-etica-profesional-en- la- ingenieria-electronica/',
    },
  ],
  creditos: {
    liderEquipo: [
      {
        nombre: 'Maria Camila Garcia Santamaria',
        cargo: 'Líder del equipo',
        centro: 'Dirección General',
      },
    ],
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Asesor metodológico y pedagógico',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Desarrollo front-end',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Validación de diseño y contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Álvaro Andrés Angarita Ramirez',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Daniel Felipe Varón Molina',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
    ],
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
