<template>
  <swiper
    :pagination="true"
    :autoplay="{
      delay: 4500,
      disableOnInteraction: false,
    }"
    :loop="true"
    :modules="modules"
    class="mySwiper"
    :slides-per-view="1"
    :space-between="0"
    @swiper="onSwiper"
    @slideChange="onSlideChange"
  >
    <swiper-slide v-for="el in store.data.home['1_ad_slider']">
      <div class="slide">
        <div class="content">
          <div class="title">
            {{ el.title }}
            <div>
              <span class="rainbow">{{ el.fancy_title }}</span>
            </div>
          </div>
          <div class="subtitle">{{ el.subtitle }}</div>
          <div class="btn">{{ el.btn_text }}</div>
        </div>
        <div class="image" :style="{ backgroundImage: 'url(' + el.img + ')' }"></div>
      </div>
    </swiper-slide>
  </swiper>
</template>

<script>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css/pagination';
import { Autoplay, Pagination } from 'swiper/modules';
// Import Swiper styles
import 'swiper/css';
import { useGlobalStore } from '@/stores/store';

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    const store = useGlobalStore();
    const onSwiper = (swiper) => {
      // console.log(swiper);
    };
    const onSlideChange = () => {
      // console.log('slide change');
    };
    // const progressCircle = ref(null);
    // const progressContent = ref(null);
    // const onAutoplayTimeLeft = (s, time, progress) => {
    //   progressCircle.value.style.setProperty('--progress', 1 - progress);
    //   progressContent.value.textContent = `${Math.ceil(time / 1000)}s`;
    // };
    return {
      // onAutoplayTimeLeft,
      onSwiper,
      onSlideChange,
      modules: [Autoplay, Pagination],
      store,
    };
  },
};
</script>

<style scoped>
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
  position: relative;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  min-width: 100%;
  height: 480px;
  padding: 0 40px;
}
.slide .content {
  max-width: 548px;
  align-self: center;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 12px;
}
.slide .title {
  color: #000;
  font-family: NT Somic;
  font-size: 44px;
  font-style: normal;
  font-weight: 600;
  line-height: 140%; /* 61.6px */
  text-align: left;
}
.slide .rainbow {
  background: linear-gradient(91deg, #3e51ff 27.99%, #f14aff 80.83%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-family: NT Somic;
  font-size: 44px;
  font-style: normal;
  font-weight: 600;
  line-height: 140%;
}
.slide .subtitle {
  color: #7e7e7e;
  font-family: NT Somic;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: 140%; /* 25.2px */
}
.slide .btn {
  margin-top: 30px;
  display: flex;
  width: 234px;
  height: 46px;
  padding: 10px 12px;
  justify-content: center;
  align-items: center;
  gap: 16px;
  flex-shrink: 0;
  border-radius: 16px;
  background: #353535;
  color: #fff;
  text-align: center;
  font-family: Inter;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 150%; /* 24px */
  cursor: pointer;
}
.slide .image {
  position: absolute;
  background-image: url('./icons/wide_slide1_img.png');
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
  width: 33.25rem;
  height: 20.25rem;
  width: 40%;
  height: 50%;
  bottom: 0;
  right: 0;
}
</style>
