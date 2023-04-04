<script setup>
import DropDown from "./shared/DropDown.vue";
</script>

<template>
  <nav class="md:space-x-5 hidden md:flex flex-nowrap items-center text-center">
    <a class="text-servy-dark font-medium flex flex-col group" href="#">
      Inscribe tu Negocio
      <span
        class="border-t-servy-blue border-t-2 group opacity-0 group-hover:opacity-100 duration-200"
      ></span>
    </a>
    <a class="text-servy-dark font-medium flex flex-col group" href="#"
      >Hazte Profesional
      <span
        class="border-t-servy-blue border-t-2 group opacity-0 group-hover:opacity-100 duration-200"
      ></span
    ></a>
    <DropDown>
      <template v-slot:title> Más de TodoServy </template>
      <template v-slot:links>
        <a class="text-servy-dark font-medium flex py-3 items-center border-b-2 border-b-slate-300" href="#"
          >¿Qué es TodoServy?
        </a>
        <a class="text-servy-dark font-medium flex py-3 items-center border-b-2 border-b-slate-300" href="#"
          >Hazte <span class="ml-2 text-linear-servy text-base">Premium</span>
        </a>
        <a class="text-servy-dark font-medium flex py-3 items-center" href="#"
          >Contáctanos
        </a>
      </template>
    </DropDown>
    <a class="text-servy-blue font-medium flex flex-col group" href="#"
      >Blog
      <span
        class="border-t-servy-dark border-t-2 group opacity-0 group-hover:opacity-100 duration-200"
      ></span
    ></a>
  </nav>
</template>
