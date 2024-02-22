<template>
  <div class="catalog_container">
    <div class="catalog_filters">
      <!-- categories start -->
      <div class="categories">
        <div class="subtitle">Categories</div>
        <div v-for="category of categories" :key="category.key" class="categories_line">
          <Checkbox
            v-model="selectedCategories"
            :inputId="category.key"
            name="category"
            :value="category.name"
          />
          <label :for="category.key">{{ category.name }}</label>
        </div>
      </div>
      <!-- categories end -->
      <div class="slider_container">
        <div class="subtitle">Price</div>
        <div class="slider_range">
          <Slider v-model="value" :min="min" :max="max" />
        </div>
      </div>
      <!-- brands start -->
      <div v-if="displayBrand" class="brands">
        <div class="subtitle">Brand</div>
        <div v-for="brand of brands" :key="brand.key" class="brands_line">
          <Checkbox
            v-model="selectedBrands"
            :inputId="brand.key"
            name="brand"
            :value="brand.name"
          />
          <label :for="brand.key">{{ brand.name }}</label>
        </div>
      </div>
      <!-- brands end -->
    </div>
    <div class="catalog_display">
      display
      <div>{{ filteredData }}</div>
    </div>
  </div>
</template>

<script setup>
import { ref, watch } from 'vue';
import Slider from '@vueform/slider';
import Checkbox from 'primevue/checkbox';
import json from '../stores/test.json';
const data = json;
// filter values
const arr = Object.values(data.map((el) => el.value));
const min = Math.min(...arr);
const max = Math.max(...arr);
const value = ref([min, max]);
let filteredData = data.filter(
  (el) => el.value >= value.value[0] && el.value <= value.value[1]
);
// watch(value, async () => {
//   filteredData = data.filter(
//     (el) => el.value >= value.value[0] && el.value <= value.value[1]
//   );
// });
// filter categories
const displayBrand = ref(false);
let brands_pre = Object.values(data.map((el) => el.brand));
const brands = ref([]);
const categories_pre = Object.values(data.map((el) => el.category));
const categories = ref([]);
const uniqueList = (list, output) => {
  let temp = [...new Set(list)];
  temp.map((el) => output.push({ name: el }));
};
uniqueList(categories_pre, categories.value);
uniqueList(brands_pre, brands.value);
const selectedBrands = ref([]);
const selectedCategories = ref([]);
// @TODO: here
watch([value, selectedCategories], async () => {
  filteredData = data.filter(
    (el) => el.value >= value.value[0] && el.value <= value.value[1]
  );
  if ([...selectedCategories.value].length == 0) {
    filteredData = data.filter(
      (el) => el.value >= value.value[0] && el.value <= value.value[1]
    );
    displayBrand.value = false;
  } else {
    filteredData = data
      .filter((el) => el.value >= value.value[0] && el.value <= value.value[1])
      .filter((el) => [...selectedCategories.value].includes(el.category));
    brands_pre = [];
    brands_pre = Object.values(filteredData.map((el) => el.brand));
    brands.value = [];
    uniqueList(brands_pre, brands.value);
    displayBrand.value = true;
  }
});
// filter brands
</script>

// Styles for slider-range
<style src="@vueform/slider/themes/default.css"></style>

<style scoped>
@layer primevue;
.catalog_container {
  padding: 40px 120px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: 1fr;
  grid-column-gap: 40px;
  grid-row-gap: 0px;

  /* @TODO: remove */
  outline: 1px solid black;
  min-height: 70vh;
}
.catalog_filters {
  grid-area: 1 / 1 / 3 / 2;

  display: flex;
  flex-direction: column;
  align-items: center;
  /* justify-content: center; */
  justify-content: flex-start;
  gap: 24px;
}
.catalog_display {
  grid-area: 1 / 2 / 2 / 4;
  outline: 1px solid pink;

  display: flex;
  flex-direction: column;
  align-items: center;
  /* justify-content: center; */
  justify-content: flex-start;
}
.slider_container {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;
}
.slider_range {
  width: 90%;
  display: flex;
  flex-direction: column;
}
.subtitle {
  width: 100%;
}
.categories,
.brands {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 12px;
  /* gap: 24px; */
  width: 100%;
}
.categories_line,
.brands_line {
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: center;
  gap: 12px;
}
.categories_line > label,
.brands_line > label {
  text-transform: capitalize;
}

@layer primevue {
  .p-checkbox-input {
    border: 1.5px solid #9d9d9d;
    border-radius: 6px;
  }
}
</style>
