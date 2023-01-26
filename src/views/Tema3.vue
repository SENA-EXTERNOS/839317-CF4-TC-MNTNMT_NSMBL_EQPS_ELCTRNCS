<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 Elementos de marca
    .row.justify-content-center.mb-5
      .col-lg-8.position-relative
        .tarjeta.p-4.position-relative(style="background-color: #e5e7f2; width: 100%")
          .bg-card1.p-3.ms-5
            .row.justify-content-end
              .col-lg-10
                p.mb-0 Se utilizan para la identificación de diferentes procedimientos que se efectúan a los aparatos. Suministran información o comunican algo preciso en lo referente a la seguridad y funcionamiento del equipo; además de las configuraciones que cada fabricante tiene hacia sus componentes en restricciones de uso, almacenamiento, transporte y otras características.
        .imagen-absolute2.d-none.d-lg-block: img(src='@/assets/curso/temas/tema3/1.svg', alt='')
    .bg-linea-tiempo.py-5.px-5
      p.mb-5(data-aos='fade-right') Estos son los elementos que deben considerarse en el momento de intervenir los aparatos, con diferentes tipos de mantenimiento y la correcta identificación del procedimiento que se está realizando:
      .row.justify-content-center
        .col-lg-8(data-aos="fade-right")
          AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta tarjeta-bg")
            div(titulo='Descripción o nombre')
              p Se precisa para conocer los aparatos y saber la ubicación. La descripción debe ser concreta y contener los datos precisos para definir los equipos.
            div(titulo='Etiquetado')
              p Este proceso es necesario para identificar el estado en el que se encuentra la orden de trabajo, su función es informar a los trabajadores sobre la fase de la reparación. Los rótulos se emplean para brindar información de paradas, reparaciones, equipos fuera de servicio, o mostrar problemas específicos sobre algún sistema o circuito. Se identifican por colores y formas, de acuerdo con las necesidades de la organización.
            div(titulo='Etiquetas de inspección')
              p Utilizadas para informar y registrar los procedimientos de vigilancia de los equipos, tienen los espacios para diligenciar fechas, dispositivos, responsable de la revisión y futuras intervenciones.
            div(titulo='Etiquetas de estado de producción')
              p Son para dar parte a los usuarios del estado de los aparatos, al igual que las inspecciones y monitoreo básico que se puede realizar para el óptimo desarrollo de los mismos, cuenta con líneas para escribir fechas y nombre de los técnicos que hacen el control.
            div(titulo='Etiquetas de mantenimiento y reparación')
              p Enfocadas en dar a conocer a los trabajadores el estado del mantenimiento del aparato, indican lo que está, y lo que no está, en funcionamiento, es decir, las fallas en su operación.
            div(titulo='Logos')
              p Se establece un sistema de pictogramas para identificar el tipo de labores y el peligro al cual se pueda enfrentar. Son indispensables en las labores de manutención; indican de una forma clara y sencilla, los posibles riesgos a los cuales se enfrentan. Son muy utilizados en las áreas de mantenimiento y en los lugares de producción, mostrando diversa información de manera gráfica y explícita para que cualquier persona que los vea, la entienda. Su importancia radica en que son genéricos y universales, presentan imágenes y poco texto.
            div(titulo='Responsabilidad legal')
              p Está presente en cualquier actividad comercial, hace hincapié en la necesidad de cumplir aspectos básicos como el cumplimiento, pactar fechas de inicio y de entrega, formas de pago, garantías, responsable del trabajo, etc., adhiriendo los términos establecidos y las posibles sanciones que acarrean los incumplimientos. También es de acotar el tema de la disposición final de los residuos eléctricos y electrónicos, para evitar posibles sanciones.
        .col-lg-4.col-8(data-aos="fade-left"): img(src='@/assets/curso/temas/tema3/2.svg', alt='')      

    h3 Ética
    .row.justify-content-center.mb-5
      .col-lg-8(data-aos="fade-right")
        p La ética es un pilar fundamental en cualquier labor o profesión (Salazar, 2013); en el ámbito de la gestión de la electrónica y la electricidad, se recomienda actuar siguiendo las normas establecidas, cumpliendo con las prácticas de responsabilidad social de la profesión, en tanto se corren riesgos al intervenir equipos. Asimismo, se debe preservar la integridad y la dignidad de las personas, en concordancia con lo establecido por los derechos humanos.
        p Sin importar cuál sea la disciplina o labor desempeñada, hay que aplicar la ética de forma constante y sin reparo, en todas las acciones realizadas; si bien la profesión del mantenimiento no tiene un código como otras carreras, es correcto actuar bajo los preceptos de respeto hacia los demás.

      .col-lg-4(data-aos="fade-left"): img(src='@/assets/curso/temas/tema4/1.svg', alt='')
    .row.justify-content-center.mb-5
      .col-lg-10(data-aos="zoom-in")
        .tarjeta.bg-tec(style='background-color: #e5e7f2').p-4
          p En el campo de los aparatos eléctricos y electrónicos, se debe establecer un equilibrio entre el manejo de los medios tecnológicos y lo ético, dado que se pueden ver afectados los principios y valores de las personas.
    p.mb-5(data-aos='fade-right') Estas son algunas de las normas y preceptos más importantes para las labores correspondientes al ensamble y mantenimiento de equipos electrónicos:

    .contenedor-tarjetas
      .contenedor-tarjetas__tarjeta.px-5.py-4.ms-lg-4
        .textos
          h4 Uso responsable
          p.mb-0 Los elementos electrónicos deben ser utilizados de forma responsable, tanto en su vida útil como al terminar el ciclo de vida o uso, dando una disposición final adecuada. Al ser elementos que pueden brindar algunas ventajas, se necesita evitar accidentes, acciones riesgosas, malas prácticas u ocasionar algún tipo de daño a la sociedad.
        .imagen.d-none.d-xl-flex: img(src='@/assets/curso/temas/tema4/2.svg', alt='').m-auto
      .contenedor-tarjetas__tarjeta.px-5.py-4.ms-lg-4
        .textos
          h4 Interacción con el sistema
          p.mb-0 Las interacciones de los aparatos con el sistema, son responsabilidad de los usuarios; se deben considerar todas las recomendaciones de los fabricantes para su correcto uso, sabiendo que los elementos tecnológicos pueden llegar a ocasionar lesiones graves que afecten a los enseres y a las personas.
        .imagen.d-none.d-xl-flex: img(src='@/assets/curso/temas/tema4/3.svg', alt='').m-auto 
      .contenedor-tarjetas__tarjeta.px-5.py-4.ms-lg-4
        .textos
          h4 Correcta utilización
          p.mb-0 Es obligación para todos los creadores y usuarios de la tecnología darle un uso correcto, siguiendo las instrucciones que dan los fabricantes y los proveedores, acatando las recomendaciones para preservarlos en el tiempo.
        .imagen.d-none.d-xl-flex: img(src='@/assets/curso/temas/tema4/4.svg', alt='').m-auto 
      .contenedor-tarjetas__tarjeta.px-5.py-4.ms-lg-4
        .textos
          h4 Confidencialidad
          p.mb-0 Salvaguardar la información de los dispositivos, es una exigencia para los técnicos que intervienen los aparatos, es por esto que casi todas las empresas, sin importar la actividad económica, firman acuerdos de confidencialidad con sus empleados, lo que evita divulgar los temas sensibles de las organizaciones y de los equipos.
        .imagen.d-none.d-xl-flex: img(src='@/assets/curso/temas/tema4/5.svg', alt='').m-auto 
      .contenedor-tarjetas__imagen.d-none.d-xl-block: img(src='@/assets/curso/temas/tema4/6.svg', alt='')








</template>

<script>
export default {
  name: 'Tema4',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass">
.imagen-absolute2
  position: absolute
  bottom: 0
  left: 0
  transform: translate(-40%, 20%)
.tarjeta-bg
  background-image: url(../assets/curso/temas/tema1/bg-acrodion.svg)
  background-size: cover
  background-position: center
  background-repeat: no-repeat
  h3
    color: #fff
.acordion__activo
  background-color: #e5e7f2 !important
  background-image: none
  h3
    color: #000
.contenedor-tarjetas
  position: relative
  &__tarjeta:nth-child(odd)
    background-color: #cec3f1
  &__tarjeta:nth-child(even)
    background-color: #eae5f9
  &__tarjeta:first-child
    border-radius: 20px 20px 0px 0px
    @media (min-width: $bp-min-lg)
      border-radius: 20px 0px 0px 0px
  &__tarjeta:nth-last-of-type(2)
    border-radius: 0px 0px 20px 20px
    @media (min-width: $bp-min-lg)
      border-radius: 0px 0px 0px 20px
  &__tarjeta
    position: relative
    @media (min-width: $bp-min-lg)
      margin-right: 8rem
    .textos
      @media (min-width: $bp-min-lg)
        width: 73%
        margin-left: 3.5rem
    .imagen
      position: absolute
      display: flex
      top: 0
      left: 0
      height: 100%
      transform: translate(-40%, 0)
      img
        width: 120px
  &__imagen
    position: absolute
    bottom: 0
    right: 0
    transform: translate(5%, 0%)
    img
      width: 460px
.bg-tec
  background-image: url(../assets/curso/temas/tema4/bg-tec.svg)
  background-size: cover
  background-position: center
  background-repeat: no-repeat
</style>
