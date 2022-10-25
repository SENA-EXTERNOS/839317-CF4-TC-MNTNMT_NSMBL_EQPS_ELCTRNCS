<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 4
      h1 Ética
    .row.justify-content-center.mb-5
      .col-lg-8(data-aos="fade-right")
        p La ética es un pilar fundamental en cualquier labor o profesión (Salazar, 2019), se debe actuar siguiendo las normas establecidas, en el caso de la electrónica y la electricidad se corren riesgos al intervenir equipos y se debe de preservar la integridad y la dignidad de las personas, lo anterior establecido en el marco de los derechos humanos, cumpliendo con las prácticas de responsabilidad social en la profesión.
          br
          br
          |#[b Sin importar cual sea la disciplina o labor desempeñada, se debe aplicar la ética de forma constante y sin reparo, en todas las acciones realizadas, si bien la profesión del mantenimiento no tiene un código como otras carreras, se debe actuar bajo los preceptos de respeto hacia los demás.]
      .col-lg-4(data-aos="fade-left"): img(src='@/assets/curso/temas/tema4/1.svg', alt='')
    .row.justify-content-center.mb-5
      .col-lg-10(data-aos="zoom-in")
        .tarjeta.bg-tec(style='background-color: #e5e7f2').p-4
          p En el campo de los aparatos eléctricos y electrónicos se debe establecer un equilibrio entre los medios tecnológicos y lo ético, dado que se pueden ver afectados los principios y valores de las personas.
    p.mb-5(data-aos='fade-right') En esta epístola, se presentan las normas y preceptos que deben estar presentes en las labores correspondientes al ensamble y mantenimiento de equipos electrónicos.
    .contenedor-tarjetas
      .contenedor-tarjetas__tarjeta.px-5.py-4.ms-lg-4
        .textos
          h4 Uso responsable
          p.mb-0 Los elementos electrónicos deben ser utilizados de forma responsable, tanto en su vida útil como al terminar el ciclo, dando una disposición final adecuada. Al ser elementos que pueden brindar algunas ventajas, el compromiso es una premisa para evitar accidentes, acciones riesgosas, malas prácticas u ocasionar algún tipo de daño a la sociedad. Se debe emplear el uso de la tecnología de manera responsable para dar oportunidades a las personas.
        .imagen.d-none.d-xl-flex: img(src='@/assets/curso/temas/tema4/2.svg', alt='').m-auto
      .contenedor-tarjetas__tarjeta.px-5.py-4.ms-lg-4
        .textos
          h4 Interacción con el sistema
          p.mb-0 Las interacciones de los aparatos con el sistema son responsabilidad de los usuarios, se deben considerar todas las recomendaciones de los fabricantes, para su correcto uso, sabiendo que los elementos tecnológicos pueden llegar a ocasionar lesiones graves que afecten los enseres y las personas.
        .imagen.d-none.d-xl-flex: img(src='@/assets/curso/temas/tema4/3.svg', alt='').m-auto 
      .contenedor-tarjetas__tarjeta.px-5.py-4.ms-lg-4
        .textos
          h4 Correcta utilización
          p.mb-0 Es obligación para todos los creadores y usuarios de la tecnología darle un uso correcto, siguiendo las instrucciones que dan los fabricantes y los proveedores, acatando las recomendaciones para preservarlos en el tiempo.
        .imagen.d-none.d-xl-flex: img(src='@/assets/curso/temas/tema4/4.svg', alt='').m-auto 
      .contenedor-tarjetas__tarjeta.px-5.py-4.ms-lg-4
        .textos
          h4 Confidencialidad
          p.mb-0 Salvaguardar la información de los dispositivos, es una exigencia para los técnicos que intervienen los aparatos, es por ello que casi todas las empresas, sin importar la actividad económica, están firmando con los empleados acuerdos de confidencialidad, para evitar divulgar los temas sensibles de las organizaciones y los equipos.
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
