<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Aparatos eléctricos y electrónicos
    
    .bloque-texto-g.color-acento-contenido.p-3.p-sm-4.p-md-5
      .bloque-texto-g__img(
        :style="{'background-image':`url(${require('@/assets/curso/temas/tema1/1.jpg')})`}"
        style='width: 36%'
      )
      .bloque-texto-g__texto.p-4.w-80
        p.mb-0 Para iniciar, es necesario conocer la diferencia entre aparatos eléctricos y electrónicos, entendiendo que ambos requieren de corrientes eléctricas o de campos electromagnéticos para su alimentación, necesitan de la misma energía. Los aparatos electrónicos tienen una composición de circuitos complejos para procesar información. Ambos aparatos son denominados como AEE (Aparatos eléctricos y electrónicos).
    Separador
    #t_1_1.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 1.1 Categorías
    .row.justify-content-center.mb-5
      .col-lg-10
        .tarjeta.p-4.position-relative(style="background-color: #e5e7f2")
          .w-65.bg-card1
            p.mb-0 La categorización de los aparatos eléctricos y electrónicos se basan desde el punto de vista del aparato y por la disposición final de los residuos basado en datos concretos y confiables, suministradas por fuentes autorizadas, aunque no es fácil realizarlo por la variedad y complejidad de los aparatos existentes en la actualidad (UPB, 2021).
          .imagen-absolute.d-none.d-lg-block: img(src='@/assets/curso/temas/tema1/2.svg', alt='')
    p.mb-5(data-aos='fade-right') En Colombia se categorizan los AEE basado en la comercialización de estos, en su utilización y en las labores de tipo doméstico. En la figura 1, se explica mejor.
    .titulo-sexto.color-acento-contenido(data-aos='fade-right')
      h5 Figura 1.
      span Comercialización de los AEE
    .info-hexagon
      ImagenInfografica.color-acento-botones.mb-5
        template(v-slot:imagen)
          figure
            img(src='@/assets/curso/temas/tema1/info.svg', alt='Texto que describa la imagen')
        .tarjeta.color-acento-botones.p-3.text-center(x="17%" y="90%" numero="")
            //- p.text-white.mb-0(style='font-size: 57px').fw-bold 01
            //- h3.mb-4 Linea blanca
            p Incluye los electrodomésticos que sirven para la cocina, el lavado, la refrigeración y la ventilación.
        .tarjeta.color-acento-botones.p-3.text-center(x="37.8%" y="2.3%" numero="")
            //- p.text-white.mb-0(style='font-size: 57px').fw-bold 02
            //- h3.mb-4 Línea marrón
            p Comprende una parte de la electrónica de consumo que engloba todos los equipos electrónicos utilizados cotidianamente para el entretenimiento, las comunicaciones y  tareas de oficina. En esta categoría se encuentran: televisores, equipos reproductores y grabadores de sonido y de vídeo.
        .tarjeta.color-acento-botones.p-3.text-center(x="58.5%" y="90%" numero="")
            //- p.text-white.mb-0(style='font-size: 57px').fw-bold 03
            //- h3.mb-4 Línea gris
            p Se refiere a los dispositivos y aparatos de la gama tecnologías de la información y las comunicaciones (TIC) e incluye los computadores, impresoras, copiadoras, celulares y periféricos.
        .tarjeta.color-acento-botones.p-3.text-center(x="79.3%" y="2.3%" numero="")
            //- p.text-white.mb-0(style='font-size: 57px').fw-bold 04
            //- h3.mb-4 Pequeños electrodomésticos
            p Pertenecen a esta línea los electrodomésticos menores que son utilizados en las cocinas, además de otros que se usan para el cuidado personal.





    p.mb-5(data-aos='fade-right') En la Directiva RAEE de 2012 se clasifica desde el punto de vista del aparato y en la Directiva del 2002 se cataloga con base a la gestión del residuo. Para Colombia aplica cualquiera de las categorías. (Ministerio de Ambiente y Desarrollo Sostenible, 2017, pág. 27). A continuación, se presenta cada una de ellas:
    PasosA.color-secundario.mb-5(tipo="n").text-start
      .row(titulo="1")
        .col-md-6.mb-4.mb-md-0
          p Aparatos de intercambio de temperatura, (equivalentes para la Directiva del 2002, grandes electrodomésticos, únicamente de refrigeración y calefacción).
        .col-md-6: img(src='@/assets/curso/temas/tema1/3.svg', alt='')
      .row(titulo="2")
        .col-md-6: img(src='@/assets/curso/temas/tema1/4.svg', alt='')
        .col-md-6.mb-4.mb-md-0
          p Monitores, pantallas, y artilugios con pantallas de superficie superior a los 100 cm cuadrados, (equivalentes para la Directiva del 2002, equipos de informática y telecomunicaciones, exclusivamente equipos de informática con pantallas de tamaño superior a 10 cm cuadrados).
      .row(titulo="3")
        .col-md-6.mb-4.mb-md-0
          p Lámparas, (equivalentes para la Directiva del 2002: aparatos de alumbrado excepto las luminarias).
        .col-md-6: img(src='@/assets/curso/temas/tema1/5.svg', alt='')
      .row(titulo="4")
        .col-md-6: img(src='@/assets/curso/temas/tema1/6.svg', alt='')
        .col-md-6.mb-4.mb-md-0
          p Grandes aparatos (con una dimensión exterior superior a 50 cm), (equivalentes para la Directiva del 2002, equipos voluminosos con una dimensión exterior superior a 50 cm, de todas las categorías excepto los dispositivos de refrigeración, calefacción y las lámparas).
      .row(titulo="5")
        .col-md-6.mb-4.mb-md-0
          p Pequeños aparatos (sin volumen exterior, superior a 50 cm), (equivalentes para la Directiva del 2002, artefactos diminutos sin magnitud externa superior a 50 cm, de todas las categorías excepto las lámparas).
        .col-md-6: img(src='@/assets/curso/temas/tema1/7.svg', alt='')
      .row(titulo="6")
        .col-md-6: img(src='@/assets/curso/temas/tema1/8.svg', alt='')
        .col-md-6.mb-4.mb-md-0
          p Equipos de informática y de telecomunicaciones de menor tamaño (sin ningún largo exterior superior a los 50 cm), (equivalentes para la Directiva del 2002, artefactos de informática y telecomunicaciones, con pantalla medida menor a 100 cm cuadrados o dimensión exterior menor a 50 cm).
    p.mb-5(data-aos='fade-right') Se conocerán los diferentes aparatos eléctricos y electrónicos que circulan en el mercado y cómo se denominan según la UPB (2021), tomando en cuenta que existen muchas categorías, se intenta agrupar la mayor parte de aparatos que puedan generalizarse, por diferentes características comunes entre ellos. La categorización muestra los siguientes grupos: 
    SlyderF.slyder-100.mb-5(columnas="col-lg-6 col-xl-4")
      .tarjeta.p-4.h-100(style="background-color: #ddf7ec")
        .row.justify-content-center.mb-4
          .col-8
            img(src='@/assets/curso/temas/tema1/9.svg' alt='AvatarTop')
        h3.text-center Grandes electrodomésticos

        p.text-center  Lavadoras, secadoras, neveras, aire acondicionado y calefacción, hornos, etc.
      .tarjeta.p-4.h-100(style="background-color: #ddf7ec")
        .row.justify-content-center.mb-4
          .col-8
            img(src='@/assets/curso/temas/tema1/10.svg' alt='AvatarTop')
        h3.text-center Pequeños electrodomésticos 
        p.text-center Planchas, aspiradoras, cafeteras, tostadoras, cuchillos eléctricos, máquinas de afeitar, secadoras, etc. 
      .tarjeta.p-4.h-100(style="background-color: #ddf7ec")
        .row.justify-content-center.mb-4
          .col-8
            img(src='@/assets/curso/temas/tema1/11.svg' alt='AvatarTop')
        h3.text-center Equipos de informática y telecomunicaciones 
        p.text-center Computadores, celulares, impresoras, fotocopiadoras, calculadoras, audífonos, etc.
      .tarjeta.p-4.h-100(style="background-color: #ddf7ec")
        .row.justify-content-center.mb-4
          .col-8
            img(src='@/assets/curso/temas/tema1/12.svg' alt='AvatarTop')
        h3.text-center Aparatos electrónicos de consumo y paneles fotovoltaicos 
        p.text-center Radios, televisores, cámaras de video, instrumentos musicales, amplificadores de sonido, etc.
      .tarjeta.p-4.h-100(style="background-color: #ddf7ec")
        .row.justify-content-center.mb-4
          .col-8
            img(src='@/assets/curso/temas/tema1/13.svg' alt='AvatarTop')
        h3.text-center Aparatos de alumbrado 
        p.text-center Bombillas fluorescentes, lámparas de sodio y haluros metálicos, luminarias, etc. 
      .tarjeta.p-4.h-100(style="background-color: #ddf7ec")
        .row.justify-content-center.mb-4
          .col-8
            img(src='@/assets/curso/temas/tema1/14.svg' alt='AvatarTop')
        h3.text-center Herramientas eléctricas y electrónicas 
        p.text-center Taladros, sierras, máquinas de coser, torno, pulidora, cortadora, destornilladores, soldadores, rociadores, etc 
      .tarjeta.p-4.h-100(style="background-color: #ddf7ec")
        .row.justify-content-center.mb-4
          .col-8
            img(src='@/assets/curso/temas/tema1/15.svg' alt='AvatarTop')
        h3.text-center Juguetes o equipos deportivos y de ocio
        p.text-center Trenes o carros eléctricos, consolas portátiles, videojuegos, material deportivo con componentes electrónicos, etc.
      .tarjeta.p-4.h-100(style="background-color: #ddf7ec")
        .row.justify-content-center.mb-4
          .col-8
            img(src='@/assets/curso/temas/tema1/16.svg' alt='AvatarTop')
        h3.text-center Aparatos médicos 
        p.text-center Equipos para radioterapia, cardiología, diálisis, ventilación pulmonar, etc
      .tarjeta.p-4.h-100(style="background-color: #ddf7ec")
        .row.justify-content-center.mb-4
          .col-8
            img(src='@/assets/curso/temas/tema1/17.svg' alt='AvatarTop')
        h3.text-center Instrumentos de vigilancia y control
        p.text-center Termostatos, reguladores de calefacción, aparatos de medición, pesaje y reglaje, instrumentos de control, entre otros.  
      .tarjeta.p-4.h-100(style="background-color: #ddf7ec")
        .row.justify-content-center.mb-4
          .col-8
            img(src='@/assets/curso/temas/tema1/18.svg' alt='AvatarTop')
        h3.text-center Máquinas expendedoras
        p.text-center Son aquellas que entregan productos sólidos, bebidas frías, calientes y dinero.
    Separador
    #t_1_2.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 1.2 Componentes electrónicos
    .row.justify-content-center.mb-5
      .col-lg-10
        .tarjeta.p-4.position-relative(style="background-color: #e5e7f2")
          .bg-card1.row.justify-content-end
            .col-lg-8
              p.mb-0 Son las piezas individuales, que se requiere para la realización de los circuitos y de tarjetas. Existe una amplia gama que se califican para diferentes aplicaciones, materiales, usos, entre otros (Mouser electronics, 2022) 
                br
                br
                |De acuerdo con Landín (2017), los componentes electrónicos se pueden clasificar teniendo en cuenta diversos criterios.
          .imagen-absolute2.d-none.d-lg-block: img(src='@/assets/curso/temas/tema1/19.svg', alt='')
    p.mb-5(data-aos='fade-right') Según Landín (2017), en el documento se aborda contenido referente a la distribución de los dispositivos que forman parte de los circuitos electrónicos, su aplicabilidad y funcionamiento correcto, realizando la configuración y diseño más acertado de la placa escogida. 
    .margin-n.bg-rosa.p-5
      .row.justify-content-center.mb-5
        .col-lg-8(data-aos="fade-right")
          AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta tarjeta-bg")
            div(titulo='Según su funcionamiento')
              p #[b Pasivos:] son llamados de este modo por no tener la capacidad de suministrar energía por sí mismos, son utilizados para la comunicación de los componentes activos o el mejoramiento de las señales transmitidas. Entre los más conocidos están: las resistencias, bobinas, condensadores.
                br
                br
                |#[b Activos:] son aquellos que proporcionan la energía, controlando las ganancias de flujo y corriente de los circuitos. Se emplean en los sistemas electrónicos, configurados a partir de mínimo un componente de estos. De esta categoría hacen parte: las baterías, diodo, microprocesador, microcontrolador, transistor, etc. 
            div(titulo='Según el material de fabricación')
              p #[b Semiconductores:] emplean las propiedades eléctricas de materiales semiconductores, los cuales pueden ser orgánicos o no, entre los materiales más utilizados están el silicio, arseniuro y el germanio. Entre los más se destacan: el transistor Mosfet, diodos, tiristores, etc
            div(titulo='Según su estructura física')
              p #[b Discretos:] su presentación es de forma encapsulada e individual, cómo es el caso de los condensadores, resistencias, diodos, etc. Es importante consultar siempre en la hoja de datos la forma de conexión, para tener en cuenta la polaridad de los componentes, dado que no todos pueden conectarse en diferentes posiciones.
                br
                br
                |#[b Integrados:] son parte de un conjunto de dispositivos discretos llamados circuitos integrados, que se organizan para cumplir varias funciones, algunos son amplificadores operacionales y compuertas lógicas, suelen ser de un tamaño muy pequeño y con muchos terminales para ser conectados, los mismos deben ser examinados  en una hoja de datos o data #[em sheet], para su correcta conexión y funcionamiento, han sido desplazados por otro tipo de tarjetas más sencillas en la programación, las cuales son reutilizables.
            div(titulo='Según el tipo de energía')
              p #[b Optoelectrónicos:] tienen la capacidad de convertir la energía lumínica en eléctrica y viceversa, poseen gran auge en la industria de las energías limpias y renovables que se impulsan por el planeta. Algunas de las más conocidas son las celdas solares y las luces LED.
                br
                br
                |#[b Electroacústicos:] tienen la competencia de transformar la energía acústica en eléctrica y viceversa. Algunos de los más conocidos son los auriculares, bocinas, altavoces, parlantes y micrófonos.
                br
                br
                |#[b Electromagnéticos:] son componentes mixtos, una parte electrónica y una magnética, aprovechando las propiedades de los materiales, trabajando bajo ambos principios y dependiendo de estos para su operación correcta. sobresalen: los transformadores e inductores.
                br
                br
                |#[b Información tomada de Mouser Electronics, (2022).]
        .col-lg-4.col-6(data-aos="fade-left")
          .titulo-sexto.color-acento-contenido(data-aos='fade-right')
            h5 Figura 2
            span Internet de las cosas 
          img(src='@/assets/curso/temas/tema1/20.svg', alt='').mb-3
          figcaption(style='background-color: #f6f1ff') Nota: Adaptada de Diagrama de flujo isométrico de Internet de las cosas, Arrow Electronics, (2022)
    Separador
    #t_1_3.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 1.3 Componentes Mecánicos
    .bloque-derecha(data-aos="zoom-in")
      .bloque-texto-g.color-acento-contenido.p-3.p-sm-4.p-md-5
        .bloque-texto-g__img(
          :style="{'background-image':`url(${require('@/assets/curso/temas/tema1/21.jpg')})`}"
          style='width: 36%'
        )
        .bloque-texto-g__texto.p-4.w-80
          p.mb-0 Los artefactos mecánicos, no contienen ninguna parte electrónica, generalmente están inmersos en la parte estructural del dispositivo. En condiciones externas al ambiente cumplen funciones de protección para los componentes electrónicos internos. También pueden ser engranajes de tipo automático que no tienen energía por sí mismos y son de diferentes materiales. Entre los más utilizados están los tornillos, arandelas, pasadores, piñones, engranajes, tubos, carcasas, etc.
    Separador
    #t_1_4.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 1.4 Fabricantes
    p.mb-5(data-aos='fade-right') En el mundo existen diversos fabricantes de componentes electrónicos, basado en su experiencia o aplicación estos pueden especializarse en determinado producto. La misma es una industria que está en constante crecimiento, dadas las múltiples aplicaciones, formas, características, materiales, etc. Los principales consumidores son USA y China, (Arrow Electronics, 2022). 
    .row.justify-content-center.mb-5
      .col-lg-8
        .titulo-sexto.color-acento-contenido(data-aos='fade-right')
          h5 Figura 3
          span Listado de fabricantes de componentes electrónicos más populares 
        img(src='@/assets/curso/temas/tema1/22.png', alt='').mb-3
        figcaption(style='background-color: #f6f1ff') Nota: Listado de fabricantes. Arrow Divisiones (2022). Fabricantes, proporcionamos la tecnología que necesita.



</template>

<script>
import Separador from '../../node_modules/ecored-base-pkg/src/components/Separador.vue'
export default {
  name: 'Tema1',
  components: { Separador },
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

.bg-card1
  background-image: url(../assets/curso/temas/tema1/bg-card1.svg)
  background-size: cover
  background-position: center
  background-repeat: no-repeat
.imagen-absolute
  position: absolute
  bottom: 0
  right: 0
  transform: translate(10%, 20%)
.imagen-absolute2
  position: absolute
  bottom: 0
  left: 0
  transform: translate(-15%, 20%)
.text-start
  p
    text-align: start !important
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
.hexagono
  width: 0;
  border-bottom: 30px solid #6C6;
  border-left: 52px solid transparent;
  border-right: 52px solid transparent;

  width: 104px;
  height: 60px;
  background-color: #6C6;

  width: 0;
  border-top: 30px solid #6C6;
  border-left: 52px solid transparent;
  border-right: 52px solid transparent

.imagen-hexagon
  background-color: transparent
  background-image: url(../assets/curso/temas/tema1/hexagon.svg)
  background-size: cover
  background-position: center
  background-repeat: no-repeat
  // width: 450px
  // height: 389px
  position: relative
  &__textos
    position: inherit
    top: 0
    left: 0
    width: 50%
    transform: translate(50%, 0%)
    height: 100%
.bg-rosa
  background-image: url(../assets/curso/temas/tema1/bg-rosa.svg)
  background-size: cover
  background-position: center
  background-repeat: no-repeat
  margin: 0 -3rem
</style>
