<script setup>
defineProps({
  faqs: Array,
});
</script>

<template>
  <ul class="flex flex-col max-w-3xl p-5 space-y-7 w-full">
    <li
      v-for="(faq, index) in faqs"
      :key="index"
      class="w-full border-b-2 border-slate-300 py-4 flex flex-col justify-center"
    >
      <h3
        @click="faq.showAnswer = !faq.showAnswer"
        class="font-bold flex justify-between mb-5"
      >
        {{ faq.question }}
        <img
          class="inline-block ml-auto"
          :class="{ 'rotate-180': faq.showAnswer }"
          src="@/assets/caretdownblue.svg"
          alt="caret"
        />
      </h3>
      <Transition name="fade" mode="out-in">
        <p class="font-medium" v-show="faq.showAnswer">{{ faq.answer }}</p>
      </Transition>
    </li>
  </ul>
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
