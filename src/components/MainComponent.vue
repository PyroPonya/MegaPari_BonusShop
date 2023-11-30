<template>
  <div class="main_container">
    <SwiperWideComponent />
    <MainGridComponent class="layout_grid" />
    <SwiperSmallComponent class="layout_swiper_small" />
    <TempSwiperSmallComponent class="layout_swiper_small" />
  </div>
</template>

<script setup>
import SwiperWideComponent from './SwiperWideComponent.vue';
import MainGridComponent from './MainGridComponent.vue';
import SwiperSmallComponent from './SwiperSmallComponent.vue';
import TempSwiperSmallComponent from './2_SwiperSmallComponent.vue';
</script>

<style scoped>
.layout_grid {
  margin-bottom: 80px;
}
.layout_swiper_small {
  margin-bottom: 80px;
}
</style>
