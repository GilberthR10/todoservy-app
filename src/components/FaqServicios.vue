<script setup>
import { ref } from "vue";
import Faq from "@/components/shared/Faq.vue";
const faqs = ref([
  {
    question: "¿Tiene algun costo pertenecer a TodoServy?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    showAnswer: false,
  },
  {
    question: "¿Que tipos de servicio puedo encontrar?",
    answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    showAnswer: false,
  },
  {
    question: "¿Como puedo pagar por un servicio?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    showAnswer: false,
  },
  {
    question: "¿Puedo cancelar un servicio despues de contratado?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    showAnswer: false,
  },
  {
    question: "¿Como es el proceso de registro?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    showAnswer: false,
  },
]);
</script>
<template>
  <section class="flex flex-col items-center justify-between mt-10 md:p-10">
    <h1 class="text-3xl md:text-5xl font-bold text-center md:self-start md:w-full mb-10">
      Preguntas Frecuentes
    </h1>
    <div
      class="w-full flex items-center justify-between md:p-6 md:gap-3 flex-col md:flex-row"
    >
      <div class="">
        <img
          class="w-full object-cover"
          src="@/assets/preguntas-servicios.svg"
          alt="preguntas-servicios"
        />
      </div>
      <Faq :faqs="faqs" />
    </div>
  </section>
</template>

<style lang="scss" scoped></style>
