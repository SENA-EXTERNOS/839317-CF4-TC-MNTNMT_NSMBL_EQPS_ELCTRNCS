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
                p.mb-0 Se utilizan para la identificación de diferentes procedimientos que se efectúan a los aparatos. Suministran información o comunican algo preciso en lo referente a la seguridad y funcionamiento del equipo, además de las configuraciones que cada fabricante tiene hacía sus componentes en restricciones de uso, almacenamiento, transporte y otras características.
        .imagen-absolute2.d-none.d-lg-block: img(src='@/assets/curso/temas/tema3/1.svg', alt='')
    .bg-linea-tiempo.p-5
      p.mb-5(data-aos='fade-right') En el siguiente enunciado se hace mención a los elementos que deben considerarse en el momento de intervenir los aparatos con diferentes tipos de mantenimientos y la correcta identificación del procedimiento que se está realizando.
      .row.justify-content-center.mb-5
        .col-lg-8(data-aos="fade-right")
          AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta tarjeta-bg")
            div(titulo='Descripción o nombre')
              p Es necesaria para conocer los aparatos y saber la ubicación, la descripción debe ser concreta y contener los datos precisos para definir los equipos.
            div(titulo='Etiquetado')
              p Este proceso es necesario para identificar el estado en el que se encuentra la orden de trabajo, su función es informar a los trabajadores sobre la fase de la reparación. Los rótulos se emplean para brindar información de paradas, reparaciones, equipos fuera de servicio, o mostrar problemas específicos sobre algún sistema o circuito. Se identifican por colores y formas, de acuerdo con las necesidades de la organización.
            div(titulo='Etiquetas de inspección')
              p Utilizadas para informar y registrar los procedimientos de vigilancia de los equipos, tienen los espacios para diligenciar fechas, dispositivos, responsable de la revisión y futuras intervenciones.
            div(titulo='Etiquetas de estado de producción')
              p Son para dar parte a los usuarios del estado de los aparatos, al igual que las inspecciones y monitoreo básico que se puede realizar para el óptimo desarrollo de los mismos, cuenta con líneas para escribir fechas y nombre de los técnicos que hacen el control.
            div(titulo='Etiquetas de mantenimiento y reparación')
              p Enfocadas en dar a conocer a los trabajadores el estado del mantenimiento del aparato, indican lo que está y no en funcionamiento, es decir las fallas en su operación.
            div(titulo='Logos')
              p Se establecen un sistema de pictogramas que ayudan a identificar el tipo de labores y el peligro al cual se pueda enfrentar. Son indispensables en las labores de manutención, indican de una forma clara y sencilla los posibles riesgos a los cuales se afrontan. Son muy utilizados en las áreas de mantenimiento y en los lugares de producción, mostrando diversa información de manera gráfica y explícita para que cualquier persona que los vea la entienda, su importancia radica en que son genéricos y universales al presentar imágenes y poco texto.
            div(titulo='Responsabilidad legal')
              p Está presente en cualquier actividad comercial, hace hincapié en la necesidad de cumplir aspectos básicos cómo el cumplimiento, pactar fechas de inicio y de entrega, forma de pago, garantías, responsable del trabajo, etc. Adhiriendo a los términos establecidos y a las posibles sanciones que acarrea los incumplimientos. También es de acotar el tema de la disposición final de los residuos eléctricos y electrónicos, para evitar posibles sanciones.
        .col-lg-4.col-8(data-aos="fade-left"): img(src='@/assets/curso/temas/tema3/2.svg', alt='')      


</template>

<script>
export default {
  name: 'Tema3',
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
.bg-linea-tiempo
  background-image: url('../assets/curso/temas/tema2/bg-linea-tiempo.svg')
  background-size: cover
  background-position: start
  background-repeat: no-repeat
  margin: 0 -3rem
</style>
