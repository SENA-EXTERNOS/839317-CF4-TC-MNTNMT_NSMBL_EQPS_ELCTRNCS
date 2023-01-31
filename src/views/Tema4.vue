<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 4
      h1 Sistemas de información 
    p.mb-3(data-aos='fade-right') Es vital entender e identificar el procedimiento que se lleva a cabo, a la hora de implementar un sistema de información en una organización, como estrategia que ayude al mejoramiento continuo y facilitar la interpretación de los procesos para la toma de decisiones. 
    p.mb-5(data-aos='fade-right') Profundice en las generalidades de la implementación de sistemas de información observando, con atención, el siguiente video:

    figure.mb-5
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
    
    
    h3 Estructura de orden de trabajo
    p.mb-5(data-aos='fade-right') La estructura de orden de trabajo, es un documento con especificaciones concretas para realizar un servicio. Se concibe como un primer escrito donde se consignan las condiciones iniciales del aparato; es recomendable que se entregue una copia al cliente y otra a la persona encargada de la labor. (Tractian, 2022)
      br
      br
      | Cada organización es libre de establecer un formato que le permita realizar esta actividad, para ello, se sugieren tener presente los siguientes aspectos.
    .bg-infografia.p-5
      .row.justify-content-center.mb-5
        .col-lg-10
          ImagenInfografica.color-acento-botones.mb-5
            template(v-slot:imagen)
              figure
                img(src='@/assets/curso/temas/tema5/1.svg', alt='Texto que describa la imagen').mb-4
                figcaption(style='background-color: #f6f1ff') Nota: adaptada de Tractian (2022).
            .tarjeta.color-acento-botones.p-3(x="95%" y="2%" numero="1")
              img(src='@/assets/curso/temas/tema5/n1.svg', alt='' style='width: 50px').mb-3
              .textos.ms-3
                .h5.mb-2 Número de orden y código de identificación
                p Este código se requiere para una orden de la empresa y, si es necesario, se asocia a un código de identificación del aparato, se detalla si pertenece a alguna organización, área, zona, etc.
            .tarjeta.color-acento-botones.p-3(x="10%" y="68%" numero="5")
              img(src='@/assets/curso/temas/tema5/n5.svg', alt='' style='width: 50px').mb-3
              .textos.ms-3
                .h5.mb-2 Fecha de emisión de la orden
                p Registro del momento en el cual se inicia el trabajo.
            .tarjeta.color-acento-botones.p-3(x="10%" y="23%" numero="2")
              img(src='@/assets/curso/temas/tema5/n2.svg', alt='' style='width: 50px').mb-3
              .textos.ms-3
                .h5.mb-2 Nombre del solicitante con sus datos de contacto
                p Debe diligenciar el nombre completo de la persona que requiere el servicio, datos de ubicación y contacto.
            .tarjeta.color-acento-botones.p-3(x="-0%" y="35%" numero="3")
              img(src='@/assets/curso/temas/tema5/n3.svg', alt='' style='width: 50px').mb-3
              .textos.ms-3
                .h5.mb-2 Tipo de servicio
                p Se reciben las indicaciones proporcionadas por el usuario, para determinar el tipo de servicio que se realizará y la clase de intervención que requiere el equipo: preventiva, correctiva, predictiva o de inspección.
            .tarjeta.color-acento-botones.p-3(x="50%" y="53%" numero="4")
              img(src='@/assets/curso/temas/tema5/n4.svg', alt='' style='width: 50px').mb-3
              .textos.ms-3
                .h5.mb-2 Descripción del servicio
                p Se detalla cuál es el proceso que se piensa realizar y se asigna a la persona indicada para hacerlo, con base en su experticia y conocimiento. La descripción de los servicios debe ser muy concreta y sin lugar a presentar ambigüedades, garantizando que la persona que lo reciba entienda todas las instrucciones consignadas en este apartado.
            .tarjeta.color-acento-botones.p-3(x="22%" y="80%" numero="7")
              img(src='@/assets/curso/temas/tema5/n7.svg', alt='' style='width: 50px').mb-3
              .textos.ms-3
                .h5.mb-2 Costo del trabajo
                p Se determina el valor del procedimiento, basándose en las posibles técnicas a emplear; se realiza por tiempo de servicio, tipo de tratamiento y criterios de cobro.
            .tarjeta.color-acento-botones.p-3(x="30%" y="68%" numero="6")
              img(src='@/assets/curso/temas/tema5/n6.svg', alt='' style='width: 50px').mb-3
              .textos.ms-3
                .h5.mb-2 Fecha de entrega
                p Se especifica la fecha en la que se pretende entregar el trabajo y se recomienda cumplir con lo establecido, para generar credibilidad en los usuarios.
            .tarjeta.color-acento-botones.p-3(x="80%" y="75%" numero="8")
              img(src='@/assets/curso/temas/tema5/n8.svg', alt='' style='width: 50px').mb-3
              .textos.ms-3
                .h5.mb-2  Observaciones generales
                p En este espacio se registran las notas generales de la intervención realizada, especificando los datos más relevantes: cambio de partes, inspecciones, etc.
            .tarjeta.color-acento-botones.p-3(x="0%" y="90%" numero="9")
              img(src='@/assets/curso/temas/tema5/n9.svg', alt='' style='width: 50px').mb-3
              .textos.ms-3
                .h5.mb-2  Firmas
                p Se registran las firmas de: personas que emiten la orden, el que realiza la intervención y quien recibe el trabajo. En su defecto, todos los que intervengan durante la etapa del servicio.

    h3.mb-5 Balance de materiales
    .row.justify-content-center.mb-5
      .col-lg-10.position-relative
        .tarjeta.p-4.position-relative(style="background-color: #fff2df; width: 78%")
          .bg-card.p-3.me-5
            p.mb-0.me-2 Al terminar las intervenciones, se debe desarrollar un balance de los materiales empleados y de los componentes reemplazados. Se deben mostrar al usuario, los dispositivos que se utilizaron, dejando claro el estado actual de funcionamiento y el uso que desempeña en el aparato. 
            br
            p Desde la parte ética, sirve generar confianza y credibilidad entre los usuarios y la organización. Es clave hacer una disposición final adecuada de los materiales, de acuerdo con la normatividad RAEE.

        .imagen-absolute.d-none.d-lg-block: img(src='@/assets/curso/temas/tema5/2.svg', alt='')
    
    h3.mb-5 Formatos, guías, reportes e instructivos
    .row.justify-content-center.mb-5
      .col-lg-8.position-relative
        .tarjeta.p-4.position-relative.bg-tec2(style=" width: 100%")
          .bg-card1.p-3.ms-5
            .row.justify-content-end
              .col-lg-10
                p.mb-0 Para completar todo el sistema de documentación, es necesario diligenciar los campos requeridos, dejando trazabilidad de la información, como se ha mencionado ampliamente. Cada documento es importante y necesario para el sistema de gestión de las empresas. Esta herramienta de control permite planear, organizar, controlar y administrar las evidencias que son el principal insumo de implementación de los procesos, siendo clave para generar información valiosa para la organización.
        .imagen-absolute2.d-none.d-lg-block: img(src='@/assets/curso/temas/tema5/3.svg', alt='')
    
    br
    br
    .row.justify-content-center.mb-5
      .col-lg-10(data-aos="zoom-in")
        .tarjeta.bg-tec2(style='background-color: #e5e7f2').p-4
          p Recuerde explorar los demás recursos que se encuentran disponibles en este componente formativo; para ello, diríjase al menú principal, donde encontrará la síntesis, una actividad didáctica para reforzar los conceptos estudiados, material complementario, entre otros.
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
  margin: 0 -3rem
.imagen-absolute
  position: absolute
  bottom: 0
  right: 0
  transform: translate(20%, 20%)
.imagen-absolute2
  position: absolute
  bottom: 0
  left: 0
  transform: translate(-45%, 10%)
.bg-tec2
  background-image: url(../assets/curso/temas/tema5/bg-tec2.svg)
  background-size: cover
  background-position: center
  background-repeat: no-repeat
</style>
