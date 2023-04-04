<template>
  <section
    class="p-1.5 bg-gradient-to-tr from-servy-green to-servy-blue rounded-[1.8rem] overflow-auto max-w-6xl mx-auto mt-10"
  >
    <div class="bg-white rounded-3xl p-4">
      <div class="flex flex-col items-center p-5 space-y-10">
        <img src="@/assets/corona.svg" alt="corona" />
        <h1 class="font-bold text-2xl text-center md:hidden">
          ¿Quieres más beneficios?<br />
          <span class="text-linear-servy">¡Únete a Premium!</span>
        </h1>
        <h1 class="font-bold text-2xl text-center hidden md:block">
            Obtén todos los beneficios<br />
          <span class="text-linear-servy">¡Únete a Premium!</span>
        </h1>
        <div class="flex gap-20 items-baseline">
          <!-- Text mobile -->
          <p class="md:hidden font-bold">
            Si accedes a Premium, tu visibilidad aumentará: aparecerás en los
            primeros resultados de TodoServy. Con la insignia premium demuestras
            que eres uno de los más calificados para ese servicio.
          </p>
          <p class="font-bold hidden md:block">
            Si te registras como profesional o independiente y accedes a
            Premium, tu visibilidad aumentará significativamente: aparecerás en
            los primeros resultados dentro de TodoServy.
          </p>
          <p class="font-bold hidden md:block">
            Con tu perfil premium tendrás un identificador en tu nombre que
            demuestra que eres uno de los más calificados para ese servicio.
            Miles de usuarios están esperando para contratarte.
          </p>
        </div>

        <ul class="flex flex-col">
          <li>
            <img src="@/assets/list-bullet.svg" alt="bullet-list" />
            Verificación de credenciales, licencias y diplomas
          </li>
          <li>
            <img src="@/assets/list-bullet.svg" alt="bullet-list" /> Visibilidad
            premium
          </li>
          <li>
            <img src="@/assets/list-bullet.svg" alt="bullet-list" /> Ofertar
            servicios ilimitados
          </li>
          <li>
            <img src="@/assets/list-bullet.svg" alt="bullet-list" /> Botón que
            direcciona a WhatsApp
          </li>
          <li>
            <img src="@/assets/list-bullet.svg" alt="bullet-list" /> Acceso
            ilimitado al calendario y agendamiento online
          </li>
          <li>
            <img src="@/assets/list-bullet.svg" alt="bullet-list" /> Recibe
            pagos 100% seguros a través de TodoServy
          </li>
        </ul>
        <a class="btn-linear text-white font-bold" href="#"
          >¡Únete a Premium!</a
        >
      </div>
    </div>
  </section>
</template>

<style scoped>
li {
  @apply flex mb-6 font-bold items-center gap-8 w-full;
}
</style>
