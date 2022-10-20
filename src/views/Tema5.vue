<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 5
      h1 Sistemas de Información
    p.mb-5(data-aos='fade-right') Para entender e identificar el procedimiento que se lleva a cabo a la hora de implementar un sistema de información en una organización como una estrategia que ayude al mejoramiento continuo y facilitar la interpretación de los procesos para la toma de decisiones, Se preparó el siguiente video.
    figure.mb-5
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
    Separador
    #t_5_1.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 5.1 Estructura orden de trabajo
    p.mb-5(data-aos='fade-right') Es un documento con especificaciones concretas para realizar un servicio, se toma como un primer escrito donde se consignan las condiciones iniciales del aparato, es recomendable que se entregue una copia al cliente y otra a la persona encargada de la labor, (Tractian, 2022).
      br
      br
      | Cada organización es libre de establecer un formato que le permita realizar esta actividad, para ello, se sugieren tener presente los siguientes aspectos.
    .bg-infografia.p-5
      .row.justify-content-center.mb-5
        .col-lg-10
          .titulo-sexto.color-acento-contenido(data-aos='fade-right')
            h5 Figura 10. 
            span Orden de trabajo 
          ImagenInfografica.color-acento-botones.mb-5
            template(v-slot:imagen)
              figure
                img(src='@/assets/curso/temas/tema5/1.svg', alt='Texto que describa la imagen').mb-4
                figcaption(style='background-color: #f6f1ff') Nota: Adaptada de Tractian, (2022)
            .tarjeta.color-acento-botones.p-3(x="20%" y="20%" numero="1")
              .h5.mb-2 titulo
              p Lorem ipsum dolor Curabitur vestibulum tortor quis nisi


</template>

<script>
export default {
  name: 'Tema5',
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
.bg-infografia
  background-image: url(../assets/curso/temas/tema4/bg-info.svg)
  background-size: cover
  background-position: center
  background-repeat: no-repeat
  // margin: 0 -3rem
</style>
