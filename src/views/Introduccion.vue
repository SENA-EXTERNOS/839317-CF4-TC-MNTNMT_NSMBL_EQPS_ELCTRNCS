<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-7(data-aos="fade-right")
        p Apreciado aprendiz, bienvenido a este componente formativo, donde usted profundizará en aspectos claves del desarme de elementos, piezas eléctricas y electrónicas y fortalecerá sus saberes sobre la clasificación, equipamiento y elementos necesarios para las intervenciones en estos equipos. Además, potenciará conceptos y habilidades relacionados con el comportamiento ético que se debe tener al momento de realizar estos trabajos y almacenar los datos obtenidos durante el proceso de reparación. Aprópiese de cada tema propuesto y enriquezca su experiencia de formación. 
        p En el siguiente video conocerá, de forma general, la temática que se estudiará a lo largo del componente formativo.

      .col-lg-5.col-6(data-aos="fade-left"): img(src='@/assets/curso/temas/intro/1.png', alt='')
    figure(data-aos="zoom-in")
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
    
</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
