<script setup></script>
<template>
  <div class="flex mx-auto justify-center items-center relative z-0">
    <span class="isolate inline-flex mt-5 py-5 px-3">
      <router-link to="/servicios" class="tab rounded-l-md">
        Busco un servicio
      </router-link>
      <router-link to="/negocios" class="tab"> Soy un Negocio </router-link>
      <router-link to="/profesionales" class="tab rounded-r-md">
        Soy un Profesional
      </router-link>
    </span>
  </div>
</template>

<style>
.tab {
  @apply relative -ml-px inline-flex items-center border border-gray-300 bg-white px-5 py-2.5 text-sm font-medium text-gray-400 hover:bg-gray-100/70 text-center;
}
.router-link-exact-active {
  @apply text-white bg-servy-dark hover:bg-servy-dark/95;
}
</style>
