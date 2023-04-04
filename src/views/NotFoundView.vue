<template>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-1 items-center p-10 max-w-5xl mx-auto place-items-center">
      <img class="object-cover" src="@/assets/imagen_error_404.png" alt="Error 404" />
      <div class="space-y-5 flex flex-col items-start">
        <h1 class="text-servy-blue text-8xl font-bold">404</h1>
        <h2 class="font-semibold text-2xl">Página no encontrada</h2>
        <p class="text-lg">
          Lo sentimos, no se pudo encontrar la página solicitada. ¡Por favor,
          vuelve a la página de inicio! Ir al inicio
        </p>
        <RouterLink class="bg-servy-blue text-white rounded-full px-5 py-2.5 mt-5" to="/">ir al inicio</RouterLink>
      </div>
    </div>
  </template>
