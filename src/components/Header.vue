<script setup>
import NavMobile from '../components/NavMobile.vue'
import Navbar from '../components/Navbar.vue'
import { ref } from 'vue';
const toggleMenu = ref(false);
</script>

<template>
  <header class="flex justify-between p-6 items-center mx-auto">
     <img class="md:hidden" src="../assets/menu-icon.svg" alt="" @click="toggleMenu = !toggleMenu">
    <a
      href="#"
      class="flex items-center"
    >
      <img class="md:shadow-xl rounded-full md:shadow-slate-400" src="../assets/todoservylogo.svg" alt="" />
      <span
        class="font-poppins text-servy-blue font-extrabold ml-2 md:ml-5 md:text-2xl lg:text-3xl p-0"
        >TodoServy</span
      >
    </a>
    <!-- NavBar links -->
    <Navbar />

    <div class="hidden md:flex flex-col items-center md:flex-row space-x-4">
      <a
        class="text-servy-dark font-medium relative flex flex-col group"
        href="#"
        >Regístrate
        <span
          class="border-t-servy-blue border-t-2 group opacity-0 group-hover:opacity-100 duration-200"
        ></span>
      </a>
      <a
        class="btn-linear text-white shadow-md hover:scale-105 duration-100"
        href="#"
        >Inicia Sesion</a
      >
    </div>

    <div class="md:hidden">
      <img src="../assets/gray-icon.svg" alt="">
    </div>
  </header>
  <Transition name="fade" mode="out-in">
    <NavMobile  v-if="toggleMenu" />
  </Transition>

</template>

<style scoped>
.fade-enter-active {
  animation: fadeInDown;
  animation-duration: 0.5s;
}
.fade-leave-active {
  animation: fadeOutUp;
  animation-duration: 0.8s;
}
</style>
