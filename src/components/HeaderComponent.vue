<template>
  <div class="container">
    <div class="left">
      <div class="logo"></div>
    </div>
    <div class="right">
      <div class="btn noselect" @click="store.showMenu = !store.showMenu">Каталог</div>
      <div class="searchbox">
        <div class="img_glass"></div>
        <input type="text" class="search" placeholder="Найти" />
        <div class="img_heart"></div>
        <div class="img_cart"></div>
      </div>
      <div class="profile">Profile&nbsp;section</div>
    </div>
    <div v-if="store.showMenu == true" class="menu">
      <div class="menu_items">
        <div class="items_el" @click="store.showMenu = false">All products</div>
        <div class="items_el" @click="store.showMenu = false">Discounts</div>
        <div class="items_el" @click="store.showMenu = false">Electronics</div>
        <div class="items_el" @click="store.showMenu = false">Alcohol</div>
        <div class="items_el" @click="store.showMenu = false">Tobacco</div>
        <div class="items_el" @click="store.showMenu = false">Services</div>
        <div class="items_el" @click="store.showMenu = false">Merch</div>
        <div class="items_el" @click="store.showMenu = false">Sport</div>
        <div class="items_el" @click="store.showMenu = false">Other</div>
      </div>
      <div class="separator"></div>
      <div class="menu_subitems">
        <div class="subitems_el" @click="store.showMenu = false">All</div>
        <div class="subitems_el" @click="store.showMenu = false">Phones</div>
        <div class="subitems_el" @click="store.showMenu = false">Smart watches</div>
        <div class="subitems_el" @click="store.showMenu = false">Headphones</div>
        <div class="subitems_el" @click="store.showMenu = false">Laptops, tablets</div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useGlobalStore } from '@/stores/store';
import { storeToRefs } from 'pinia';
const store = useGlobalStore();
const storeRefs = storeToRefs(useGlobalStore());
</script>

<style scoped>
.container {
  position: relative;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: space-between;
  padding: 12px 38px;
}
.left {
  display: flex;
  align-items: center;
  justify-content: flex-start;
}
.right {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 16px;
  /* @TODO: check DIS NUTZ */
  flex-wrap: wrap;
  /* @TODO: NUTZ end */
}
.logo {
  background-image: url('./icons/logo.svg');
  display: flex;
  width: 132.243px;
  height: 16.176px;
  justify-content: center;
  align-items: center;
}
.btn {
  display: flex;
  height: 46px;
  padding: 0px 16px;
  align-items: center;
  gap: 8px;
  border-radius: 16px;
  border: 1px solid #f1f1f1;
  background: #f9fafb;
  color: #000;
  text-align: center;
  font-family: Inter;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 150%; /* 24px */
  cursor: pointer;
}
.searchbox {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  border-radius: 16px;
  border: 1px solid #f1f1f1;
  background: #f9fafb;
  padding: 12px 16px;
  gap: 16px;
}
.img_glass {
  background-image: url('./icons/MagnifyingGlass.svg');
  display: flex;
  justify-content: center;
  align-items: center;
  height: 20px;
  width: 20px;
}
.search {
  display: flex;
  flex-direction: row;
  color: #939393;
  font-family: Inter;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 150%; /* 24px */
  width: 232px;
}
.img_heart {
  background-image: url('./icons/Heart.svg');
  background-position: center;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 20px;
  width: 20px;
}
.img_cart {
  background-image: url('./icons/Cart.svg');
  background-position: center;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 20px;
  width: 20px;
}
.profile {
  display: flex;
  height: 46px;
  padding: 0px 4px;
  align-items: center;
  justify-content: center;
  gap: 8px;
  border-radius: 16px;
  border: 1px solid #f1f1f1;
  background: #f9fafb;
  width: 194px;
  color: #000;
  font-family: Inter;
}
.noselect {
  -webkit-touch-callout: none; /* iOS Safari */
  -webkit-user-select: none; /* Safari */
  -khtml-user-select: none; /* Konqueror HTML */
  -moz-user-select: none; /* Old versions of Firefox */
  -ms-user-select: none; /* Internet Explorer/Edge */
  user-select: none; /* Non-prefixed version, currently
                                  supported by Chrome, Edge, Opera and Firefox */
}
.menu {
  position: absolute;
  z-index: 2;
  top: 100%;
  right: 30px;
  min-width: 50%;
  min-height: 200px;
  border-radius: 20px;
  background: #fff;
  box-shadow: 0px 10px 32px -4px rgba(24, 39, 75, 0.1),
    0px 6px 14px -6px rgba(24, 39, 75, 0.12);
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 16px;
  gap: 8px;
}
.menu .menu_items,
.menu .menu_subitems {
  display: flex;
  flex-direction: column;
}
.menu .menu_items .items_el,
.menu .menu_subitems .subitems_el {
  color: #141414;
  font-family: Inter;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 150%; /* 24px */
  display: flex;
  padding: 12px 16px;
  align-items: center;
  gap: 10px;
  align-self: stretch;
  min-width: 215px;
}
.menu .menu_items .items_el:hover,
.btn:hover,
.menu .menu_subitems .subitems_el:hover {
  border-radius: 12px;
  background: #f0efef;
  cursor: pointer;
}
.separator {
  stroke-width: 1px;
  stroke: rgba(225, 225, 225, 0);
  background-image: url('./icons/menu_separator.svg');
  background-repeat: no-repeat;
  background-position: center;
  width: 1px;
  height: 100%;
  min-height: 432px;
  /* transform: rotate(90deg); */
}
</style>
