<script setup>
import HeroText from "../components/shared/HeroText.vue";
import HeadingTextIcon from "../components/shared/HeadingTextIcon.vue";
import DropdownButton from "../components/shared/DropdownButton.vue";
import CeoSection from "../components/shared/CeoSection.vue";
import StatsSection from "../components/shared/StatsSection.vue";
import ServiciosNegociosSection from "../components/shared/ServiciosNegociosSection.vue";
import BannerPremium from "../components/shared/BannerPremium.vue";
import FaqNegocios from "../components/FaqNegocios.vue";
import ReclamaNegocioSection from "../components/ReclamaNegocioSection.vue";
import Carousel from "../components/shared/Carousel.vue";

import { defineComponent, ref } from "vue";
// Import Swiper Vue.js components
import { SwiperSlide } from "swiper/vue";

defineComponent({
  SwiperSlide,
});

const sliderPerfilNegocios = ref([
  {
    img: "https://sigredyn.sirv.com/slider-negocios/slider1.png",
    img_lg: "https://sigredyn.sirv.com/slider-negocios/slider1-lg.png",
    text: "Tu perfil personalizado mostrando categorías, estudios, horarios, reseñas y mucho más",
  },
  {
    img: "https://sigredyn.sirv.com/slider-negocios/slider2.png",
    img_lg: "https://sigredyn.sirv.com/slider-negocios/slider2-lg.png",
    text: "Obtén un sello de verificación de tus credenciales, licencias y diplomas",
  },
  {
    img: "https://sigredyn.sirv.com/slider-negocios/slider3.png",
    img_lg: "https://sigredyn.sirv.com/slider-negocios/slider3-lg.png",
    text: "Muestra todos los servicios que prestas, sin importar el tipo",
  },
  {
    img: "https://sigredyn.sirv.com/slider-negocios/slider4.png",
    img_lg: "https://sigredyn.sirv.com/slider-negocios/slider4-lg.png",
    text: "Tu perfil profesional contará con toda la información, reviews y ratings de toda presencia online",
  },
  {
    img: "https://sigredyn.sirv.com/slider-negocios/slider5.png",
    img_lg: "https://sigredyn.sirv.com/slider-negocios/slider5-lg.png",
    text: "Perfil optimizado para que puedas ofrecer una opción de agendamiento en línea.",
  },
]);

const sliderNegociosAgendamientos = ref([
  {
    img: "https://sigredyn.sirv.com/slider-negocios-agendamiento/slider1.png",
    img_lg: "https://sigredyn.sirv.com/slider-negocios-agendamiento/slider1-lg.png",
  },
  {
    img: "https://sigredyn.sirv.com/slider-negocios-agendamiento/slider2.png",
    img_lg: "https://sigredyn.sirv.com/slider-negocios-agendamiento/slider2-lg.png",
  },
  {
    img: "https://sigredyn.sirv.com/slider-negocios-agendamiento/slider3.png",
    img_lg: "https://sigredyn.sirv.com/slider-negocios-agendamiento/slider3-lg.png",
  },
  {
    img: "https://sigredyn.sirv.com/slider-negocios-agendamiento/slider4.png",
    img_lg: "https://sigredyn.sirv.com/slider-negocios-agendamiento/slider4-lg.png",
  },
]);
</script>

<template>
  <section class="pb-16">
    <HeroText />

    <!-- Hero Text Desktop section -->
    <div
      class="hidden md:flex flex-col items-center justify-center p-8 max-w-6xl mx-auto space-y-10"
    >
      <p class="text-2xl text-center mt-0">
        Ofrece los servicios de tu negocio, empresa o emprendimiento digital,
        muestra sus reseñas y calificaciones, garantiza pagos seguros y gana
        popularidad en tu ciudad.
      </p>
      <p class="font-bold text-2xl">¡Tu nuevo canal de ventas!</p>
      <a
        class="btn-blue text-white w-full text-center mt-8 mx-auto md:w-max"
        href="#"
        >¡Registra tu negocio gratis!</a
      >
    </div>

    <!-- Carousel -->
    <section class="max-w-full my-16">
      <Carousel>
        <swiper-slide v-for="slide in sliderPerfilNegocios">
          <div class="mx-auto flex flex-col space-y-6">
            <picture class="object-cover w-full max-w-6xl">
              <source media="(min-width:768px)" :srcset="slide.img_lg" />
              <img
                class="object-cover w-full"
                :src="slide.img"
                alt="apptodoservy"
              />
            </picture>
            <h1 class="font-bold text-center">
              {{ slide.text }}
            </h1>
          </div>
        </swiper-slide>
      </Carousel>
    </section>
    <!-- Registro mobile -->
    <div class="mt-5 flex flex-col items-center justify-center p-8 md:hidden">
      <p class="text-2xl text-center mt-8 md:hidden">
        <span class="font-bold md:font-normal"
          >Ofrece los servicios de tu empresa
        </span>
        y muestra lo que dicen los clientes de tu negocio. <br /><br />

        <span class="font-bold md:font-normal"
          >Miles de potenciales clientes </span
        ><br />
        están en TodoServy.
      </p>

      <a
        class="btn-blue text-white w-full md:w-min text-center mt-8 mx-auto"
        href="#"
        >¡Registra tu negocio gratis!</a
      >
    </div>

    <!-- Todo service slogan -->
    <p class="font-bold text-2xl text-center mt-10 hidden md:block">
      <span class="text-servy-blue">TodoServy</span>
      para negocios, <br />
      microempresas o negocio virtuales
    </p>

    <!-- Reclama negocio section -->
    <ReclamaNegocioSection />

    <!-- Inspiramos confianza  -->
    <section class="flex flex-col space-y-6 md:grid md:grid-cols-3 grid-rows-2">
      <!-- Inspiramos confianza  -->
      <div class="flex flex-col item justify-start space-y-6 md:hidden">
        <HeadingTextIcon>
          <template v-slot:text> Inspiramos confianza </template>
        </HeadingTextIcon>

        <p class="text-base">
          En TodoServy validamos las credenciales y licencias de tu negocio para
          darle más confianza a los usuarios. <br /><br />
          Toda la información en nuestra plataforma universal y unificada serán
          los motivos de confianza para que tus clientes agenden tus servicios.
        </p>
      </div>
    </section>

    <!-- Dropdown section -->
    <section class="flex flex-col md:flex-row gap-5 md:gap-x-12 mt-16">
      <div class="border-b-2 pb-3 space-y-10 md:border-t-2 py-5 w-full">
        <h1 class="text-servy-blue text-2xl font-bold">
          TodoServy es<br />
          Universal
        </h1>
        <p>
          En TodoServy, puedes ofrecer una amplia variedad de servicios si eres un negocio, empresa, micronegocio y emprendimiento digital de la ciudad.
        </p>

        <DropdownButton
          title="Conoce más"
          toggle-section="Puedes ofrecer cualquier servicio, no importa si es de reparaciones, entrenamiento, belleza, clases o cualquier otro, en TodoServy lo puedes hacer.
          Nuestra plataforma es universal, lo que significa que no está limitada a una sola área geográfica o industria específica.
          Además, al tener todos los servicios en un solo lugar, tus clientes podrán comparar fácilmente precios y calidad antes de tomar una decisión, asegurándose de obtener el mejor trato posible.
          ¡Únete a TodoServy hoy mismo y ofrece tus servicios con facilidad y rapidez!"
        />
      </div>
      <div class="border-b-2 pb-3 space-y-10 md:border-t-2 py-5 w-full">
        <h1 class="text-servy-blue text-2xl font-bold">
          TodoServy es <br />Unificado
        </h1>
        <p>
          En TodoServy, contamos con una sección de reseñas y valoraciones en la que puedes mostrar a todos los comentarios y opiniones que se encuentran en internet sobre tu negocio, emprendimiento digital, empresa y microempresa, registrado en nuestra plataforma.
        </p>

        <DropdownButton
          title="Conoce más"
          toggle-section="
          Esto brinda una visión completa y precisa de la reputación y calidad de tus servicios ofrecidos, lo que permite a tus clientes ver que tu negocio es confiable y que tienes experiencia para brindarle un servicio de calidad."
        />
      </div>
    </section>

    <!-- Agendamientos online Mobile -->
    <section class="flex flex-col p-8 space-y-5 md:hidden items-center">
      <h1 class="font-bold text-2xl text-center">
        Agendamiento revolucionario online
      </h1>
      <p class="font-medium text-center">
        Ofrece los servicios que quieras y los usuarios te encontrarán.
        <br /><br />
        Si eres jardinero, plomero, abogado, médico o de cualquier otra
        profesión, TodoServy es para ti.<br /><br />
        Si te haces premium tus clientes te contratarán más rápido
      </p>
    </section>

    <!-- Carousel agendamiento -->
    <!-- Carousel -->
    <section class="my-16 flex flex-col">
      <Carousel class="md:order-2">
        <swiper-slide v-for="slide in sliderNegociosAgendamientos">
          <div class="mx-auto flex flex-col space-y-6">
            <picture class="object-cover w-full max-w-6xl">
              <source media="(min-width:768px)" :srcset="slide.img_lg" />
              <img
                class="object-cover w-full"
                :src="slide.img"
                alt="apptodoservy"
              />
            </picture>
          </div>
        </swiper-slide>
      </Carousel>
      <!-- Agendamientos online Desk -->
      <section
        class="flex-col p-6 space-y-5 hidden md:block max-w-6xl my-10 items-center justify-center mx-auto text-center md:order-1"
      >
        <h1 class="font-bold text-2xl text-center">
          Agendamiento <br />revolucionario online
        </h1>
        <p class="font-medium text-center">
          Aumenta tus agendamientos de servicios con nuestra solución
          innovadora. Con nuestra agenda revolucionaria en línea, tus clientes
          podrán verificar fácilmente la disponibilidad y programar sus
          servicios de manera eficiente.
        </p>
        <h2 class="font-bold text-lg">
          ¡Optimiza tu negocio y obtén más agendamientos hoy mismo!
        </h2>
        <p class="font-medium text-center">
          Con nuestro sistema de agendamiento en línea, podrás tener una visión
          detallada de tu equipo de trabajo y sus disponibilidades. En el perfil
          de negocio, tus clientes podrán programar sus servicios de acuerdo con
          la disponibilidad de tu equipo.
        </p>
        <p class="font-medium text-center">
          Recuerda que, si eres “Negocio Free”, tienes un límite de
          agendamientos sobre tus servicios, pero si te haces “Negocio Premium”
          la cantidad de agendamientos será ilimitada.
        </p>
      </section>
    </section>

    <!-- servy section -->
    <ServiciosNegociosSection />

    <!-- BannerPremium -->
    <BannerPremium />

    <!-- APP todo servy section -->
    <FaqNegocios />

    <!-- stats section -->
    <StatsSection />

    <!-- Ceo section -->
    <CeoSection />
  </section>
</template>
