<script setup>
import HeroText from "../components/shared/HeroText.vue";
import HeadingTextIcon from "../components/shared/HeadingTextIcon.vue";
import DropdownButton from "../components/shared/DropdownButton.vue";
import CeoSection from "../components/shared/CeoSection.vue";
import AppTodoServySection from "../components/shared/AppTodoServySection.vue";
import StatsSection from "../components/shared/StatsSection.vue";
import ServiciosSection from "../components/shared/ServiciosSection.vue";
import FaqServicios from "../components/FaqServicios.vue";
</script>

<template>
  <section class="pb-16">
    <HeroText />

    <section class="my-8 flex flex-col items-center justify-center p-8">
      <picture class="object-cover w-full mt-6 md:order-3 md:mt-20 max-w-7xl">
        <source
          media="(min-width:768px)"
          srcset="@/assets/mockup_plataforma012.png"
        />
        <img
          class="object-cover w-full"
          src="@/assets/mockup_negocio_dispositivos_1.png"
          alt="computer image"
        />
      </picture>

      <p class="text-2xl text-center mt-8 md:hidden">
        <span class="font-bold md:font-normal"
          >Busca, compara, reserva y paga
        </span>
        de forma segura todos los servicios.
      </p>

      <p class="hidden text-2xl text-center md:block md:order-1 max-w-4xl">
        Busca, compara, reserva y paga de forma segura todos los servicios de
        profesionales, independientes y negocios aquí.
      </p>

      <a
        class="btn-blue text-white w-full md:w-min text-center mt-8 md:order-2"
        href="#"
        >Regístrate</a
      >

      <p class="font-bold text-2xl text-center mt-10 md:hidden">
        <span class="text-servy-blue">TodoServy</span>
        tiene el servicio que necesitas
      </p>

      <p
        class="font-bold text-2xl text-center mt-24 hidden md:block max-w-lg mx-auto md:order-4"
      >
        <span class="text-servy-blue">TodoServy</span>
        para que encuentres el servicio que necesitas
      </p>
    </section>

    <section
      class="flex flex-col space-y-6 md:grid md:grid-cols-3 grid-rows-2 p-8"
    >
      <div class="flex flex-col item justify-center space-y-6">
        <h1 class="text-3xl font-bold">TodoServy Web</h1>
        <p class="text-base"></p>
        <p class="text-base md:hidden">
          TodoServy realiza una verificación de credenciales para garantizar las aptitudes de los profesionales, independientes y la legalidad de los negocios.
          <br /><br />
          <span class="font-bold">Tu servicio está garantizado.</span>
        </p>
        <p class="text-base hidden md:block">
          La plataforma Universal donde podrás encontrar todos los servicios sin
          importar la categoría o industria.<br /><br />
          Encuentra todas las reseñas y comentarios unificados sobre un
          profesional, independiente, negocio o emprendimiento digital en
          TodoServy.
        </p>
      </div>
      <div class="md:col-span-2 md:row-span-2">
        <img
          class="object-cover w-full"
          src="@/assets/servy-web.png"
          alt="web page"
        />
      </div>
      <div class="flex flex-col item justify-start space-y-6">
        <HeadingTextIcon>
          <template v-slot:text> Inspiramos confianza </template>
        </HeadingTextIcon>

        <p class="text-base">
          TodoServy realiza una verificación de credenciales, licencias y
          diplomas para garantizar la calidad, la experiencia y el conocimiento
          de los negocios, profesionales e independientes.<br /><br />
          <span class="font-bold">Tu servicio está garantizado.</span>
        </p>
      </div>
    </section>

    <!-- Dropdown section -->
    <section class="flex flex-col md:flex-row gap-5 md:gap-x-12 mt-16">
      <div class="border-b-2 pb-3 space-y-10 md:border-t-2 py-5 w-full">
        <h1 class="text-servy-blue text-2xl font-bold">
          TodoServy es <br />Universal
        </h1>
        <p>
          TodoServy es universal, es decir que tiene todos los servicios que
          ofrecen profesionales, independientes, empresas, micronegocios y
          emprendimientos digitales en tu ciudad.
        </p>

        <DropdownButton
          title="Conoce más"
          toggle-section="Esto te permite encontrar fácilmente lo que necesitas, comparar precios
      y calidad de servicio, y leer reseñas y valoraciones de otros usuarios,
      todo en un solo lugar."
        />
      </div>
      <div class="border-b-2 pb-3 space-y-10 md:border-t-2 py-5 w-full">
        <h1 class="text-servy-blue text-2xl font-bold">
          TodoServy es <br />
          Unificado
        </h1>
        <p>
          En TodoServy encuentras todas las reseñas y valoraciones que están en
          internet sobre cada profesional, independiente y negocio registrado.
        </p>

        <DropdownButton
          title="Conoce más"
          toggle-section="
Al tener acceso a estas reseñas, puedes tomar una decisión acertada sobre a quién contratar.
No pierdas tiempo buscando reseñas en diferentes sitios web, todo está unificado en TodoServy."
        />
      </div>
    </section>

    <!-- servy section -->
    <ServiciosSection />

    <!-- APP todo servy section -->
    <AppTodoServySection />

    <!-- APP todo servy section -->
    <FaqServicios />

    <!-- stats section -->
    <StatsSection />

    <!-- Ceo section -->
    <CeoSection />
  </section>
</template>
