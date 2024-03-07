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
      <!-- <div>{{ filteredData }}</div> -->
      <div class="item" v-for="el in filteredData">
        <img :src="el.img" alt="item_image" class="item_img" />
        <div class="item_footer">
          <div class="item_price">
            {{ el.value }} MP
            <div class="item_price_bait">{{ el.value * 1.2 }} MP</div>
          </div>
          <div class="item_name">{{ el.name }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, watch } from 'vue';
import Slider from '@vueform/slider';
import Checkbox from 'primevue/checkbox';
import { useGlobalStore } from '@/stores/store';
const store = useGlobalStore();
// import json from '../stores/test.json';
// const data = json;
const data = store.data;
const catalog = data.catalog;
console.log(store.data);
console.log(catalog);
// filter values
const arr = Object.values(catalog.map((el) => el.value));
const min = Math.min(...arr);
const max = Math.max(...arr);
const value = ref([min, max]);
let filteredData = catalog.filter(
  (el) => el.value >= value.value[0] && el.value <= value.value[1]
);
// watch(value, async () => {
//   filteredData = catalog.filter(
//     (el) => el.value >= value.value[0] && el.value <= value.value[1]
//   );
// });
// filter categories
const displayBrand = ref(false);
let brands_pre = Object.values(catalog.map((el) => el.brand));
const brands = ref([]);
const categories_pre = Object.values(catalog.map((el) => el.category));
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
  filteredData = catalog.filter(
    (el) => el.value >= value.value[0] && el.value <= value.value[1]
  );
  if ([...selectedCategories.value].length == 0) {
    filteredData = catalog.filter(
      (el) => el.value >= value.value[0] && el.value <= value.value[1]
    );
    displayBrand.value = false;
  } else {
    filteredData = catalog
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
  /* padding: 40px 120px; */
  padding: 40px 0px;
  margin: auto;
  /* display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: 1fr;
  grid-column-gap: 40px;
  grid-row-gap: 0px; */
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: 1fr;
  grid-column-gap: 40px;
  grid-row-gap: 0px;

  min-height: 70vh;
  max-width: 1200px;
}
.catalog_filters {
  /* grid-area: 1 / 1 / 3 / 2; */
  grid-area: 1 / 1 / 2 / 2;

  display: flex;
  flex-direction: column;
  align-items: center;
  /* justify-content: center; */
  justify-content: flex-start;
  max-width: 276px;
  gap: 24px;
}
.catalog_display {
  /* grid-area: 1 / 2 / 2 / 4; */
  grid-area: 1 / 2 / 2 / 6;

  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: 1fr;
  grid-column-gap: 12px;
  grid-row-gap: 12px;
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
/* item styles */
.item {
  background-color: #ffffff;
  border-radius: 16px;
  width: 286px;
  height: 425px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
}
.item .item_img {
  border-radius: 16px 16px 0 0;
  max-width: 286px;
  max-height: 293px;
}
.item .item_footer {
  padding: 16px;
  width: 100%;
  max-height: 132px;
}
.item .item_price {
  font-weight: 600;
  font-size: 24px;
  line-height: 150%;
  text-align: left;
  display: flex;
  flex-direction: row;
  /* align-items: center; */
  justify-content: flex-start;
  gap: 8px;
}
.item .item_price_bait {
  font-weight: 500;
  font-size: 18px;
  line-height: 150%;
  text-decoration: line-through;
  text-align: center;
  color: #6c6c6c;
  /* padding: 4.5px; */
}
.item .item_name {
  font-weight: 400;
  font-size: 16px;
  line-height: 150%;
  color: #6c6c6c;
}

@layer primevue {
  .p-checkbox-input {
    border: 1.5px solid #9d9d9d;
    border-radius: 6px;
  }
}
</style>
