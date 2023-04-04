<script setup>
import { ref } from "vue";
const show = ref(false);
</script>
<template>
  <div class="z-50">
    <div class="relative">
      <!-- Dropdown toggle button -->
      <a
        class="text-servy-dark font-medium flex items-center"
        href="#"
        @click="show = !show"
      >
        <slot name="title"></slot>
        <svg
          class="w-5 h-5 text-black ml-2"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fill-rule="evenodd"
            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
            clip-rule="evenodd"
          />
        </svg>
      </a>
      <span
          class="border-t-servy-blue border-t-2 group opacity-0 group-hover:opacity-100 duration-200"
        >
        </span>

      <!-- Dropdown menu -->
      <div
        v-show="show"
        class="links bg-white shadow-xl  flex flex-col justify-between py-8 space-y-3 absolute text-left md: px-3 text-sm"
      >
        <slot name="links"></slot>
      </div>
    </div>
  </div>
</template>
<style scope>
.links  {
    @apply border-t-4 rounded-t-sm border-servy-blue
}
</style>
