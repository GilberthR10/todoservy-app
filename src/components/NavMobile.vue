<script setup>
import DropDown from "./shared/DropDown.vue";
</script>
<template>
  <div
    class="text-left space-y-6 w-full border-b-2 shadow-md p-8 md:hidden relative z-20 bg-white"
  >
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
          >Profesionales y Negocios
        </a>
        <a class="text-servy-dark font-medium flex py-3 items-center border-b-2 border-b-slate-300" href="#"
          >TodoServy <span class="ml-2 text-linear-servy text-base">Premium</span>
        </a>
        <a class="text-servy-dark font-medium flex pt-3" href="#"
          >Encuentra un proveedor
        </a>
      </template>
    </DropDown>
    <a class="text-servy-blue font-medium flex flex-col group" href="#"
      >Blog
      <span
        class="border-t-servy-dark border-t-2 group opacity-0 group-hover:opacity-100 duration-200"
      ></span
    ></a>
    <a class="text-servy-dark font-medium flex flex-col group" href="#"
      >Regístrate
      <span
        class="border-t-servy-blue border-t-2 group opacity-0 group-hover:opacity-100 duration-200"
      ></span>
    </a>
    <a
      class="text-white font-medium border rounded-full bg-gradient-to-r from-[#4293F7] to-[#70F0CD] px-5 py-2.5 shadow-md hover:scale-105 duration-100 flex justify-center"
      href="#"
      >Inicia Sesion</a
    >
  </div>
</template>
