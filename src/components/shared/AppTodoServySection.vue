<template>
  <section
    class="space-y-4 flex items-center flex-col mt-20 md:flex-row justify-center gap-20"
  >
    <h1 class="font-bold text-3xl md:hidden">App Todoservy</h1>
    <picture class="object-cover w-full max-w-6xl">
      <source
        media="(min-width:768px)"
        srcset="@/assets/apptodoservydesk.png"
      />
      <img
      class="object-cover w-full"
      src="@/assets/apptodoservy.png"
      alt="apptodoservy"
    />
    </picture>

    <div class="flex flex-col space-y-8 self-start md:pt-20">
      <h1 class="font-bold text-3xl hidden md:block">App Todoservy</h1>
      <p class="font-medium">
        Busca, agenda, paga y califica el servicio que necesitas desde la palma
        de tu mano, con la App Todovervy.​​ ¡Es 100% gratis!
      </p>
      <span class="font-bold">¡Es 100% gratis!</span>
      <a class="btn-linear text-white w-full text-center md:w-max" href="#"
        >Descarga la App Gratis</a
      >
    </div>
  </section>
</template>
