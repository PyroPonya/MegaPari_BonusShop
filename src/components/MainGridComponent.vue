<template>
  <div class="grid">
    <div class="grid_div div1">
      <div class="content">
        <div class="title">Smartphones</div>
        <div class="subtitle">Apple iPhone 14 Pro Max, iPhone 14 Pro</div>
      </div>
      <img src="./icons/grid_div1.png" alt="" />
    </div>
    <div class="grid_div div2">
      <div class="content">
        <div class="title">MP Merch</div>
        <div class="subtitle">Sweatshirts, T-shirts, polos, hoodies</div>
      </div>
      <img src="./icons/grid_div2.png" alt="" />
    </div>
    <div class="grid_div div3">
      <div class="content">
        <div class="title">Musical equipment</div>
        <div class="subtitle">Headphones, JBL speakers, records</div>
      </div>
      <img src="./icons/grid_div3.png" alt="" />
    </div>
    <div class="grid_div div4">
      <div class="content">
        <div class="title">Sport</div>
        <div class="subtitle">Clubs and accessories for comfortable golf</div>
      </div>
      <img src="./icons/grid_div4.png" alt="" />
    </div>
    <div class="grid_div div5">
      <div class="content">
        <div class="title">Alcohol</div>
        <div class="subtitle">Whiskey, wine</div>
      </div>
      <img src="./icons/grid_div5.png" alt="" />
    </div>
    <div class="grid_div div6">
      <div class="content">
        <div class="title">Watch</div>
        <div class="subtitle">Apple Watch Ultra, Apple Watch Series 8</div>
      </div>
      <img src="./icons/grid_div6.png" alt="" />
    </div>
  </div>
</template>

<script setup></script>

<style scoped>
.grid {
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-template-rows: repeat(3, 1fr);
  grid-column-gap: 12px;
  grid-row-gap: 12px;
}
.grid .grid_div {
  position: relative;
  border-radius: 1rem;
  border: 1px solid #f1f1f1;
  background: #f9fafb;
  padding: 0 40px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  cursor: pointer;
}
.grid .grid_div .content {
  display: flex;
  max-width: 193px;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 8px;
  z-index: 2;
}
.grid .grid_div .content .title {
  color: #000;
  font-family: Inter;
  font-size: 24px;
  font-style: normal;
  font-weight: 600;
  line-height: 150%; /* 36px */
}
.grid .grid_div .content .subtitle {
  color: #6c6c6c;
  font-family: Inter;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%; /* 24px */
}
.grid .grid_div.div1 img,
.grid .grid_div.div5 img,
.grid .grid_div.div6 img {
  position: absolute;
  right: 60px;
  bottom: 0;
  z-index: 1;
}
.grid .grid_div.div2 img,
.grid .grid_div.div3 img,
.grid .grid_div.div4 img {
  position: absolute;
  right: 0;
  bottom: 0;
  z-index: 1;
}
.grid .div1 {
  grid-area: 1 / 1 / 2 / 7;
  height: 214px;
}
.grid .div2 {
  grid-area: 2 / 1 / 3 / 3;
}
.grid .div3 {
  grid-area: 2 / 3 / 3 / 5;
}
.grid .div4 {
  grid-area: 2 / 5 / 3 / 7;
}
.grid .div5 {
  grid-area: 3 / 1 / 4 / 4;
}
.grid .div6 {
  grid-area: 3 / 4 / 4 / 7;
}
</style>
