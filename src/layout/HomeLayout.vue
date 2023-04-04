<script setup>
import TabNavigation from "@/components/TabNavigation.vue";
import { RouterView } from "vue-router";
</script>

<template>
  <TabNavigation />
  <main class="p-6">
    <router-view v-slot="{ Component }">
      <component :is="Component" />
    </router-view>
  </main>
</template>