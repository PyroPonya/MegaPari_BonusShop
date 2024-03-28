<template>
  <div class="cart">
    <div v-if="cart.length > 0" class="cart_container">
      <div class="cart_left">
        <div class="left_top">
          <div class="item">Item</div>
          <div class="price">Price</div>
          <div class="quantity">Quantity</div>
        </div>
        <div class="left_bottom">
          <div v-for="(el, id) in cart" class="card">
            <div class="card_content">
              <div class="item">
                <img :src="el.item.gallery[0]" class="card_img" alt="item_img" />
                <div class="item_name">{{ el.item.name }}</div>
              </div>
              <div class="price">
                {{ el.item.value.toLocaleString('en-US') }} MP
                <div class="item_price_bait">
                  {{ Math.floor(el.item.value * 1.2).toLocaleString('en-US') }}
                </div>
              </div>
              <div class="quantity">
                <div @click="subtractQuantity(el)" class="btn btn_subtract noselect">
                  -
                </div>
                {{ el.quantity }}
                <div @click="addQuantity(el)" class="btn btn_add noselect">+</div>
              </div>
            </div>
            <div v-if="parseInt(id) !== parseInt(cart.length) - 1" class="divider"></div>
          </div>
        </div>
      </div>
      <div class="cart_right">
        <div class="right_top">
          <div class="right_top-string goods">
            <span>
              <img src="./icons/goods.svg" alt="goods_icon" class="goods_img" />
              Goods ({{ cart.length }})
            </span>
            <span>{{ getSum().toLocaleString('en-US') }}</span>
          </div>
          <div class="right_top-string sale">
            <span>
              <img src="./icons/sale.svg" alt="sale_icon" class="sale_img" />
              Sale (WiP)
            </span>
            <span>WiP</span>
          </div>
        </div>
        <div class="right_bottom">
          <div class="divider"></div>
          <span>
            <img src="./icons/bonus_points.svg" alt="" />
            {{ getSum().toLocaleString('en-US') }}
          </span>
          <div class="right_btn">Confirm</div>
        </div>
      </div>
    </div>
    <div v-else class="note">
      <div class="note_top">
        <div class="title">Cart is empty</div>
        <div class="subtitle">Go to the catalog to select a product</div>
      </div>
      <div class="note_bottom">
        <router-link to="/catalog/all" :category="'all'">
          <div class="btn note_btn">Catalog</div>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useGlobalStore } from '@/stores/store';
import { ref } from 'vue';
const store = useGlobalStore();
const cart = ref(store.cart);
const getSum = () => {
  let sum = 0;
  cart.value.map((el) => {
    let temp = 0;
    temp = parseInt(el.item.value);
    temp = temp * parseInt(el.quantity);
    sum += parseInt(temp);
  });
  return sum;
};
const addQuantity = (el) => {
  if (el.quantity > 0) {
    el.quantity = parseInt(el.quantity) + 1;
  }
};
const subtractQuantity = (el) => {
  if (el.quantity > 1) {
    el.quantity = parseInt(el.quantity) - 1;
  } else if (el.quantity == 1) {
    cart.value = cart.value.filter((item) => item !== el);
    store.cart = cart.value.filter((item) => item !== el);
  }
};
</script>

<style scoped>
.cart {
  margin: 40px 0px;
  height: 100%;
  width: 100%;
  min-height: 528px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.cart_container {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  border-radius: 20px;
  box-shadow: 0 10px 32px -4px rgba(24, 39, 75, 0.1),
    0 6px 14px -6px rgba(24, 39, 75, 0.12);
  background: #fff;
  height: 100%;
  width: 100%;
  min-height: 528px;
}
.note {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 32px;
  height: 100%;
  width: 100%;
}
.note_top {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 4px;
}
.note .title {
  font-family: 'Inter', sans-serif;
  font-weight: 500;
  font-size: 24px;
  line-height: 150%;
  color: #000;
}
.note .subtitle {
  font-family: 'Inter', sans-serif;
  font-weight: 500;
  font-size: 16px;
  line-height: 150%;
  text-align: center;
  color: #4f4f4f;
}
.note_btn {
  background: #353535;
  border-radius: 16px;
  padding: 10px 12px;
  width: 284px;
  height: 46px;
  font-family: 'Inter', sans-serif;
  font-weight: 500;
  font-size: 16px;
  line-height: 150%;
  text-align: center;
  color: #fff;
  transition: all 0.2s ease-in-out;
}
.note_btn:hover {
  cursor: pointer;
  transform: scale(1.05);
}
.cart_left {
  padding: 40px;
  width: 100%;
}
.left_top {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: 1fr;
  grid-column-gap: 0px;
  grid-row-gap: 0px;
  justify-items: stretch;
  margin-bottom: 24px;
}
.left_top .item,
.left_top .price,
.left_top .quantity {
  font-family: 'Inter', sans-serif;
  font-weight: 500;
  font-size: 16px;
  line-height: 150%;
  color: #786f6f;
}
.left_bottom .item,
.left_bottom .price,
.left_bottom .quantity {
  font-family: 'Inter', sans-serif;
  font-weight: 400;
  font-size: 16px;
  line-height: 150%;
  color: #000;
}
.left_bottom .price {
  font-weight: 500;
}
.item {
  grid-area: 1 / 1 / 2 / 3;
}
.price {
  grid-area: 1 / 3 / 2 / 4;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  gap: 8px;
}
.quantity {
  grid-area: 1 / 4 / 2 / 5;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
}
.left_bottom {
  display: flex;
  flex-direction: column;
  gap: 24px;
}
.left_bottm .card {
  display: flex;
  flex-direction: column;
}
.left_bottom .card_content {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: 1fr;
  grid-column-gap: 0px;
  grid-row-gap: 0px;
  justify-items: stretch;
}
.card_content .item {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: 24px;
}
.card_img {
  border-radius: 12px;
  width: 64px;
  height: 64px;
}
.card .quantity {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 12px;
}
.card .quantity .btn {
  border-radius: 16px;
  border: 1px solid #fff;
  width: 46px;
  height: 46px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s ease-in-out;
}
.card .quantity .btn:hover {
  cursor: pointer;
  border: 1px solid #f1f1f1;
  border-radius: 16px;
  width: 46px;
  height: 46px;
  background-color: #f1f1f1;
}
.cart_right {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 40px;
  background-color: #f9fafb;
  /* background-color: #f1f1f1; */
  width: 318px;
  max-width: 318px;
}
.right_top {
  display: flex;
  flex-direction: column;
  gap: 24px;
  width: 100%;
}
.right_top-string {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
}
.right_top-string span,
.right_bottom span {
  display: flex;
  flex-direction: row;
  gap: 8px;
}
.right_top-string span {
  font-family: 'Inter', sans-serif;
  font-weight: 400;
  font-size: 16px;
  line-height: 150%;
  color: #000;
}
.right_bottom span {
  font-family: 'Inter', sans-serif;
  font-weight: 600;
  font-size: 24px;
  line-height: 150%;
  text-align: center;
  color: #141414;
}
.right_bottom {
  display: flex;
  flex-direction: column;
  gap: 24px;
  width: 100%;
}
.right_btn {
  background: #353535;
  border-radius: 16px;
  padding: 10px 12px;
  width: 100%;
  height: 46px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: 'Inter', sans-serif;
  font-weight: 500;
  font-size: 16px;
  line-height: 150%;
  text-align: center;
  color: #fff;
  transition: all 0.2s ease-in-out;
}
.right_btn:hover {
  cursor: pointer;
  transform: scale(1.03);
}
.divider {
  stroke-width: 1px;
  stroke: rgba(225, 225, 225, 0);
  background-image: url('/src/components/icons/Separator.svg');
  background-repeat: no-repeat;
  background-position: center;
  width: 100%;
  height: 1px;
  padding: 0px 0px;
}
.item_price_bait {
  font-weight: 500;
  font-size: 12px;
  line-height: 150%;
  text-decoration: line-through;
  text-align: center;
  color: #6c6c6c;
  /* padding: 4.5px; */
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
</style>
