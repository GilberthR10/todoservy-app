<template>
  <swiper
    :navigation="true"
    :pagination="{ clickable: true }"
    :loop="true"
    :keyboard="{
      enabled: true,
    }"
    :centeredSlides="true"
    :modules="modules"
    class="mySwiper"
  >
    <slot></slot>
  </swiper>
</template>
<script setup>
import { defineComponent } from "vue";
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";
// import required modules
import { Navigation, Pagination } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
defineComponent({
  Swiper,
  SwiperSlide,
});
const modules = [Navigation, Pagination];
</script>

<style>
.swiper {
  width: 100%;
  height: 100%;
}

.swiper-slide {
  text-align: center;
  font-size: 18px;
  background: #fff;

  /* Center slide text vertically */
  display: flex;
  justify-content: center;
  align-items: center;
  @apply flex-col;
}

.swiper-slide img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.swiper {
  margin-left: auto;
  margin-right: auto;
}
.swiper-wrapper {
    padding-bottom: 2.5rem;
}
</style>
