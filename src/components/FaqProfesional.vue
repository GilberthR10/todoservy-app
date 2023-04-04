<script setup>
import { ref } from "vue";
import Faq from "@/components/shared/Faq.vue";
const faqs = ref([
  {
    question: "¿Para qué sirve TodoServy?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    showAnswer: false,
  },
  {
    question: "¿Cómo me registro en TodoServy?",
    answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    showAnswer: false,
  },
  {
    question: "¿TodoServy funciona a nivel nacional en Colombia?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    showAnswer: false,
  },
  {
    question: "¿Cómo verifico mi perfil de usuario en TodoServy?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    showAnswer: false,
  },
  {
    question: "¿Cuánto me cuesta ser Premium en TodoServy?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    showAnswer: false,
  },
]);
</script>
<template>
  <section class="flex flex-col items-center justify-between mt-10 md:p-10">
    <h1 class="text-3xl font-bold text-center md:self-start md:w-full mb-10">
      Preguntas Frecuentes
    </h1>
    <div
      class="w-full flex items-center justify-between md:p-6 md:gap-3 flex-col md:flex-row"
    >
      <div class="w-full">
        <img
          class="w-full object-cover"
          src="@/assets/preguntas-negocios.svg"
          alt="preguntas-servicios"
        />
      </div>
      <Faq :faqs="faqs" />
    </div>
  </section>
</template>

<style lang="scss" scoped></style>
