<script setup>
import HeadingTextIcon from "../components/shared/HeadingTextIcon.vue";
</script>
<template>
  <section
    class="flex flex-col md:space-y-24 my-10 md:grid md:grid-cols-3 min-w-0 grid-flow-col relative md:pb-28 space-y-10 lg:pb-48"
  >
    <h1 class="font-bold text-2xl md:col-start-3 md:mt-24">
      Reclama tu negocio <br />¡Es gratis!
    </h1>

    <p class="font-medium md:col-start-3">
      En TodoServy tenemos la misión de impulsar tu negocio. Te ayudamos sin
      costo, reclama tu negocio y te damos visibilidad. <br /><br />
      Sube fotos, videos y pide a tus clientes que comenten sobre los servicios
      del negocio. <br /><br />
      Nos encargamos de hacerte visible.<br /><br />
      ¡Es gratis! Forma parte del Directorio Premium online revolucionario de
      Colombia.<br /><br />
      <a href="#" class="text-servy-blue underline"> Ver video tutorial </a>
    </p>

    <img
      class="w-full object-cover md:col-start-1 md:col-end-3 md:row-start-1 row-end-2 md:absolute max-h-max"
      src="@/assets/reclama-negocio.svg"
      alt="reclama-negocio"
    />
    <!-- Inspiramos confianza  -->
    <div class="space-y-6 hidden md:block col-start-3">
      <HeadingTextIcon>
        <template v-slot:text> Inspiramos confianza </template>
      </HeadingTextIcon>

      <p class="text-base">
        En TodoServy validamos las credenciales y licencias de tu negocio para
        darle más confianza a los usuarios. <br />
        Toda la información en nuestra plataforma universal y unificada serán
        los motivos de confianza para que tus clientes agenden tus servicios.
      </p>
    </div>

    <a
      href="#"
      class="font-medium border-2 rounded-full px-5 py-2.5 border-servy-blue text-servy-blue text-center text-lg md:col-start-3 max-w-sm"
      >Reclama tu negocio</a
    >
  </section>
</template>
`
