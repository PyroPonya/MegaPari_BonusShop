<template>
  <div class="container">
    <div class="left">
      <div class="logo"></div>
    </div>
    <div class="right">
      <div class="btn">Каталог</div>
      <div class="searchbox">
        <div class="img_glass"></div>
        <input type="text" class="search" placeholder="Найти" />
        <div class="img_heart"></div>
        <div class="img_cart"></div>
      </div>
      <div class="profile">Profile&nbsp;section</div>
    </div>
  </div>
</template>

<script setup></script>

<style scoped>
.container {
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
</style>
