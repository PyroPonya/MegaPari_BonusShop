<template>
  <div>
    <div class="head">
      <div class="title">Новое</div>
      <div class="controls">
        <div ref="prev" class="swiper-button-prev btn noselect">
          <img src="./icons/arrow_left.svg" alt="" />
        </div>
        <div ref="next" class="swiper-button-next btn noselect">
          <img src="./icons/arrow_right.svg" alt="" />
        </div>
      </div>
    </div>
    <swiper
      :navigation="{
        prevEl: prev,
        nextEl: next,
      }"
      :pagination="true"
      :autoplay="false"
      :loop="true"
      :slides-per-view="4"
      :space-between="12"
      :modules="modules"
      class="mySwiper"
    >
      <swiper-slide>
        <div class="slide">
          <img src="./icons/small_slider_2_1.png" alt="" class="img" />
          <div class="desc">
            <div class="price_container">
              <div class="price">90,000 MP</div>
              <div class="subprice">100,000</div>
            </div>
            <div class="subtitle">
              Apple iPhone 13, 128 GBApple iPhone 13, 128 GBApple iPhone
            </div>
          </div>
        </div>
      </swiper-slide>
      <swiper-slide>
        <div class="slide">
          <img src="./icons/small_slider_2_2.png" alt="" class="img" />
          <div class="desc">
            <div class="price_container">
              <div class="price">90,000 MP</div>
              <div class="subprice">100,000</div>
            </div>
            <div class="subtitle">
              Apple iPhone 13, 128 GBApple iPhone 13, 128 GBApple iPhone
            </div>
          </div>
        </div>
      </swiper-slide>
      <swiper-slide>
        <div class="slide">
          <img src="./icons/small_slider_2_3.png" alt="" class="img" />
          <div class="desc">
            <div class="price_container">
              <div class="price">90,000</div>
              <div class="subprice">100,000</div>
            </div>
            <div class="subtitle">
              Наушники Apple AirPods Pro (2-го поколения, 2022), белый
            </div>
          </div>
        </div>
      </swiper-slide>
      <swiper-slide>
        <div class="slide">
          <img src="./icons/small_slider_2_4.png" alt="" class="img" />
          <div class="desc">
            <div class="price_container">
              <div class="price">90,000 MP</div>
              <div class="subprice">100,000</div>
            </div>
            <div class="subtitle">
              Apple iPhone 13, 128 GBApple iPhone 13, 128 GBApple iPhone
            </div>
          </div>
        </div>
      </swiper-slide>
      <!-- duplicated slides for looping -->
      <swiper-slide>
        <div class="slide">
          <img src="./icons/small_slider_2_1.png" alt="" class="img" />
          <div class="desc">
            <div class="price_container">
              <div class="price">90,000 MP</div>
              <div class="subprice">100,000</div>
            </div>
            <div class="subtitle">
              Apple iPhone 13, 128 GBApple iPhone 13, 128 GBApple iPhone
            </div>
          </div>
        </div>
      </swiper-slide>
      <swiper-slide>
        <div class="slide">
          <img src="./icons/small_slider_2_2.png" alt="" class="img" />
          <div class="desc">
            <div class="price_container">
              <div class="price">90,000 MP</div>
              <div class="subprice">100,000</div>
            </div>
            <div class="subtitle">
              Apple iPhone 13, 128 GBApple iPhone 13, 128 GBApple iPhone
            </div>
          </div>
        </div>
      </swiper-slide>
      <swiper-slide>
        <div class="slide">
          <img src="./icons/small_slider_2_3.png" alt="" class="img" />
          <div class="desc">
            <div class="price_container">
              <div class="price">90,000</div>
              <div class="subprice">100,000</div>
            </div>
            <div class="subtitle">
              Наушники Apple AirPods Pro (2-го поколения, 2022), белый
            </div>
          </div>
        </div>
      </swiper-slide>
      <swiper-slide>
        <div class="slide">
          <img src="./icons/small_slider_2_4.png" alt="" class="img" />
          <div class="desc">
            <div class="price_container">
              <div class="price">90,000 MP</div>
              <div class="subprice">100,000</div>
            </div>
            <div class="subtitle">
              Apple iPhone 13, 128 GBApple iPhone 13, 128 GBApple iPhone
            </div>
          </div>
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>
<script>
import { ref } from 'vue';
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import { Navigation } from 'swiper/modules';

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    const prev = ref(null);
    const next = ref(null);
    return {
      modules: [Navigation],
      prev,
      next,
    };
  },
};
</script>

<style scoped>
.noselect {
  -webkit-touch-callout: none; /* iOS Safari */
  -webkit-user-select: none; /* Safari */
  -khtml-user-select: none; /* Konqueror HTML */
  -moz-user-select: none; /* Old versions of Firefox */
  -ms-user-select: none; /* Internet Explorer/Edge */
  user-select: none; /* Non-prefixed version, currently
                                  supported by Chrome, Edge, Opera and Firefox */
}
.head {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 24px;
}
.head .title {
  color: #000;
  font-family: Inter;
  font-size: 32px;
  font-style: normal;
  font-weight: 500;
  line-height: 150%; /* 48px */
}
.head .controls {
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: center;
  gap: 12px;
}
.head .controls .btn {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 13px;
  border-radius: 16px;
  border: 1px solid #f1f1f1;
  background: #f9fafb;
  cursor: pointer;
}
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
}
.swiper-slide img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.slide {
  display: flex;
  flex-direction: column;
  max-height: 425px;
  border-radius: 16px;
  background: #fff;
}
.slide .desc {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding: 16px;
  gap: 16px;
}
.slide .desc .price_container {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: 8px;
}
.slide .desc .price_container .price {
  color: #000;
  text-align: center;
  font-family: Inter;
  font-size: 24px;
  font-style: normal;
  font-weight: 600;
  line-height: 150%; /* 36px */
}
.slide .desc .price_container .subprice {
  color: #6c6c6c;
  text-align: center;
  font-family: Inter;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: 150%; /* 27px */
  text-decoration: line-through;
}
.slide .desc .subtitle {
  color: #6c6c6c;
  font-family: Inter;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%; /* 24px */
  text-align: start;
}
</style>
