<template>
  <div class="container">
    <div class="top">
      <div class="left">
        <div class="logo"></div>
      </div>
      <div class="right">
        <div class="socials">
          <div class="el vk"></div>
          <div class="el twitter"></div>
          <div class="el insta"></div>
          <div class="el telegram"></div>
        </div>
      </div>
    </div>
    <div class="separator"></div>
    <div class="bottom">
      <div class="col">
        <div class="title">Покупателям</div>
        <div class="col_el">Подарочные карты</div>
        <div class="col_el">Публичная оферта</div>
        <div class="col_el">Частые вопросы</div>
        <div class="col_el">Акции и скидки</div>
        <div class="col_el">Акции и скидки</div>
      </div>
      <div class="col">
        <div class="title">Помощь</div>
        <div class="col_el">Оплата</div>
        <div class="col_el">Безопасность</div>
        <div class="col_el">Условия обработки данных</div>
      </div>
      <div class="col">
        <div class="title">О компании</div>
        <div class="col_el">Политика компании</div>
        <div class="col_el">Партнерская программа</div>
        <div class="col_el">Контакты</div>
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  padding: 12px 38px;
}
.top {
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: space-between;
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
.socials {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 16px;
}
.socials > .el {
  display: flex;
  width: 32px;
  height: 32px;
  padding: 6px;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  background: #f5f5f5;
}
.socials > .el:hover {
  outline: 1px solid #b9b9b9;
  -moz-outline: 1px solid #b9b9b9;
  -webkit-outline: 1px solid #b9b9b9;
}
.socials > .vk {
  background-image: url('./icons/vk.svg');
  background-position: center;
  background-repeat: no-repeat;
  cursor: pointer;
}
.socials > .twitter {
  background-image: url('./icons/twitter.svg');
  background-position: center;
  background-repeat: no-repeat;
  cursor: pointer;
}
.socials > .insta {
  background-image: url('./icons/insta.svg');
  background-position: center;
  background-repeat: no-repeat;
  cursor: pointer;
}
.socials > .telegram {
  background-image: url('./icons/telegram.svg');
  background-position: center;
  background-repeat: no-repeat;
  cursor: pointer;
}
.separator {
  stroke-width: 1px;
  stroke: rgba(225, 225, 225, 0);
  background-image: url('./icons/Separator.svg');
  background-repeat: no-repeat;
  background-position: center;
  width: 100%;
  height: 1px;
  padding: 42px 0;
}
.bottom {
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 64px;
}
.col {
  display: flex;
  flex-direction: column;
  gap: 24px;
  max-width: 167px;
}
.col > .title {
  color: #000;
  font-family: Inter;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: 150%; /* 27px */
}
.col > .col_el {
  color: rgba(0, 0, 0, 0.67);
  font-family: Inter;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%; /* 24px */
}
.col > .col_el:hover {
  cursor: pointer;
  color: rgba(0, 0, 0, 0.97);
}
</style>
