<script setup>
import HeroText from "../components/shared/HeroText.vue";
import HeadingTextIcon from "../components/shared/HeadingTextIcon.vue";
import DropdownButton from "../components/shared/DropdownButton.vue";
import CeoSection from "../components/shared/CeoSection.vue";
import StatsSection from "../components/shared/StatsSection.vue";
import ServiciosProfesionalSection from "../components/shared/ServiciosProfesionalSection.vue";
import BannerPremium from "../components/shared/BannerPremium.vue";
import FaqProfesional from "../components/FaqProfesional.vue";

import Carousel from "../components/shared/Carousel.vue";

import { defineComponent, ref } from "vue";
// Import Swiper Vue.js components
import { SwiperSlide } from "swiper/vue";

defineComponent({
  SwiperSlide,
});

const sliderPerfilNegocios = ref([
  {
    img: "https://sigredyn.sirv.com/slider-profesional/slider1.png",
    img_lg: "https://sigredyn.sirv.com/slider-profesional/slider1-lg.png",
    text: "Tu perfil personalizado mostrando categorías, estudios, horarios, reseñas y mucho más",
  },
  {
    img: "https://sigredyn.sirv.com/slider-profesional/slider2.png",
    img_lg: "https://sigredyn.sirv.com/slider-profesional/slider2-lg.png",
    text: "Obtén un sello de verificación de tus credenciales, licencias y diplomas",
  },
  {
    img: "https://sigredyn.sirv.com/slider-profesional/slider3.png",
    img_lg: "https://sigredyn.sirv.com/slider-profesional/slider3-lg.png",
    text: "Muestra todos los servicios que prestas, sin importar el tipo",
  },
  {
    img: "https://sigredyn.sirv.com/slider-profesional/slider4.png",
    img_lg: "https://sigredyn.sirv.com/slider-profesional/slider4-lg.png",
    text: "Tu perfil profesional contará con toda la información, reviews y ratings de toda presencia online",
  },
  {
    img: "https://sigredyn.sirv.com/slider-profesional/slider5.png",
    img_lg: "https://sigredyn.sirv.com/slider-profesional/slider5-lg.png",
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
        Si eres profesional o independiente, ofrece tus servicios y muestra tus
        reseñas y calificaciones, garantiza pagos seguros y
        <span class="font-bold">gana popularidad en tu ciudad.</span>
      </p>
      <a
        class="btn-blue text-white w-full text-center mt-8 mx-auto md:w-max"
        href="#"
        >¡Crea tu perfil Profesional/Independiente gratis!</a
      >
    </div>

    <!-- Carousel -->
    <section class="max-w-full my-16">
      <Carousel>
        <swiper-slide v-for="slide in sliderPerfilNegocios">
          <div class="mx-auto flex flex-col space-y-6">
            <picture class="object-cover w-full max-w-6xl mb-5">
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
        <span class="font-bold md:font-normal">Ofrece tus servicios, </span>
        muestra tus reseñas y consigue visibilidad frente a miles de clientes.
      </p>

      <a
        class="btn-blue text-white w-full md:w-min text-center mt-8 mx-auto"
        href="#"
        >¡Crea tu perfil y consigue clientes!</a
      >
    </div>

    <!-- Todo service slogan -->
    <p class="font-bold text-2xl text-center my-16">
      <span class="text-servy-blue">TodoServy</span>
      es visibilidad y confianza frente a tus clientes
    </p>

    <!-- todoservy web section -->
    <section
      class="flex flex-col space-y-10 md:grid md:grid-cols-3 grid-rows-2 gap-8 my-10"
    >
      <div class="flex flex-col item justify-center space-y-6">
        <h1 class="text-3xl font-bold">TodoServy Web</h1>
        <p class="text-base md:hidden">
          Todas las reseñas y comentarios de la web unificadas sobre ti en tu
          perfil.<br /><br />
          Miles de clientes buscando tus servicios para contratarte.<br /><br />
        </p>
        <p class="text-base hidden md:block">
          Todas las reseñas y comentarios de la web unificadas sobre ti, como
          profesional en TodoServy. <br /><br />
          Tus clientes podrán encontrar todos los servicios que ofreces y ver
          las calificaciones en tu perfil.<br /><br />
        </p>
        <a href="#" class="text-servy-blue underline hidden md:inline-block"
          >Mira como crear tu perfil profesional></a
        >
        <a href="#" class="text-servy-blue underline font-bold md:hidden"
          >Conoce como crear tu perfil ></a
        >
      </div>
      <div class="md:col-span-2 md:row-span-2">
        <picture class="object-cover w-full">
          <source
            media="(min-width:768px)"
            srcset="@/assets/servyweb-profesional-lg.png"
          />
          <img
            class="object-cover w-full"
            src="@/assets/servyweb-profesional.png"
            alt="computer_image"
          />
        </picture>
      </div>
      <div class="flex flex-col item justify-start space-y-6">
        <HeadingTextIcon>
          <template v-slot:text> Inspiramos confianza </template>
        </HeadingTextIcon>

        <p class="text-base md:hidden">
          Validamos tu perfil a través de tus credenciales para darte un perfil
          verificado.<br /><br /> Tu servicio está garantizado y las personas te agendarán.
        </p>
        <p class="text-base hidden md:block">
          En TodoServy validamos tus licencias, diplomas y credenciales para dar
          más confianza a los usuarios. Toda la información en nuestra
          plataforma universal y unificada serán un motivo de confianza para que
          tus clientes agenden tus servicios.
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
          En TodoServy, puedes ofrecer una amplia variedad de servicios si eres
          un profesional o independiente en tu ciudad.
        </p>

        <DropdownButton
          title="Conoce más"
          toggle-section="Puedes ofrecer cualquier servicio, no importa si es de barbería, como entrenador personal, mecánico de carros, médico particular o cualquier otro, en TodoServy lo puedes hacer.
          Nuestra plataforma es universal, lo que significa que no está limitada a una sola área geográfica o industria específica.
          Además, al tener todos los servicios en un solo lugar, tus clientes podrán comparar fácilmente precios y calidad antes de tomar una decisión, asegurándose de obtener el mejor profesional.
          ¡Únete a TodoServy hoy mismo y ofrece tus servicios con facilidad y rapidez!"
        />
      </div>
      <div class="border-b-2 pb-3 space-y-10 md:border-t-2 py-5  w-full">
        <h1 class="text-servy-blue text-2xl font-bold">
          TodoServy es <br />Unificado
        </h1>
        <p>
          En TodoServy, contamos con una sección de reseñas y valoraciones en la
          que puedes mostrar a todos los comentarios y opiniones que se
          encuentran en internet sobre tus servicios
        </p>

        <DropdownButton
          title="Conoce más"
          toggle-section="
          Esto brinda una visión completa y precisa de la reputación y calidad de lo que ofreces, lo que permite a tus clientes ver que eres confiable y que tienes experiencia para brindarle un servicio de calidad."
        />
      </div>
    </section>

    <!-- Agendamientos online Mobile -->
    <section class="flex flex-col p-8 space-y-5 md:hidden items-center">
      <h1 class="font-bold text-2xl text-center">
        Agendamiento revolucionario online
      </h1>
      <p class="font-medium text-center">
        Cuentas con un calendario revolucionario online para que tus clientes
        puedan reservar tus servicios sin necesidad de contactarte.¡Es fácil y
        rápido!
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
          TodoServy está optimizado para que puedas ofrecer una opción de
          agendamiento en línea, de esta forma tus clientes pueden conocer tu
          disponibilidad y agendar tus servicios de manera efectiva.
        </p>
        <h2 class="font-bold text-lg">
          ¡Puedes incluir más de un tipo de servicio en tu perfil profesional!
          No tienes límites
        </h2>
        <p class="font-medium text-center">
          Recuerda que, si eres “Profesional Free”, tienes un límite de
          agendamientos sobre tus servicios, pero si te haces “Profesional
          Premium” la cantidad de agendamientos será ilimitada.
        </p>
      </section>
    </section>

    <!-- servy section -->
    <ServiciosProfesionalSection />

    <!-- BannerPremium -->
    <BannerPremium />

    <!-- APP todo servy section -->
    <FaqProfesional />

    <!-- stats section -->
    <StatsSection />

    <!-- Ceo section -->
    <CeoSection />
  </section>
</template>
