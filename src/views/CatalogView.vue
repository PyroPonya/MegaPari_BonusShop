<template>
  <div class="container">
    <CatalogComponent :category="props.category" />
  </div>
</template>

<script setup>
import CatalogComponent from '../components/CatalogComponent.vue';
const props = defineProps(['category']);
</script>

<style scoped>
.container {
  min-height: 50%;
  min-height: 70%;
}
</style>
