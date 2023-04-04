<script setup>
import { ref } from "vue";
defineProps({
  title: String,
  toggleSection: String,
});
const universalToggle = ref(false);
const toggleDropdown = () => {
  universalToggle.value = !universalToggle.value;
};
</script>
<template>
  <section>
    <div
      class="inline-flex font-medium text-slate-400/80 cursor-pointer"
      v-show="!universalToggle"
      @click="toggleDropdown"
    >
      <span>{{ title }}</span>
      <img class="ml-3" src="@/assets/caret-down.svg" alt="caret" />
    </div>
    <Transition name="fade" mode="out-in">
      <div class="transition-all" v-show="universalToggle">
        <span>{{ toggleSection }}</span>
      </div>
    </Transition>
    <div
      class="inline-flex font-medium text-slate-400/80 mt-2 cursor-pointer"
      v-show="universalToggle"
      @click="toggleDropdown"
    >
      <span>Mostrar menos</span>
      <img class="ml-3 rotate-180" src="@/assets/caret-down.svg" alt="caret" />
    </div>
  </section>
</template>
<style scope>
.fade-enter-active {
  animation: slideInDown;
  animation-duration: 0.5s;
}
.fade-leave-active {
  animation: slideOutUp;
  animation-duration: 0.5s;
}
</style>
