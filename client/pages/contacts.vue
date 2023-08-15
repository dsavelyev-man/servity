<template>
  <Container>
    <div :class="`${$style.mainContainer}`">
      <div :class="`${$style.container}`">
        <p :class="`${$style.pageTitle} ${$style.text}`">КОНТАКТЫ</p>
        <p :class="`${$style.textWhiteLg} ${$style.text}`">ГОЛОВНОЙ ОФИС</p>
        <p :class="`${$style.textGrey} ${$style.text}`">
          ООО «Аврора Технолоджис»
        </p>
        <p :class="`${$style.textGrey} ${$style.text}`">
          119049, г. Москва. ул. Шаболовка, 26, стр. 12
        </p>
        <p :class="`${$style.textGrey} ${$style.links} ${$style.text}`">
          тел.{{ "\u00A0" }}
          <a href="tel:+74959020099" :class="`${$style.linkContent} ${$style.text}`">
            +74959020099
          </a>
        </p>
        <p :class="`${$style.textGrey} ${$style.links} ${$style.text}`">
          почта:{{ "\u00A0" }}
          <a href="mailto:info@servity.ru" :class="`${$style.linkContent} ${$style.text}`">

            info@servity.ru
          </a>
        </p>
        <div :class="`${$style.socials}`">
          <socials></socials>
        </div>
        <div>
          <Button @click="setShowPopup" :class="`${$style.button}`">
            КОНСУЛЬТАЦИЯ
          </Button>
        </div>
        <p :class="`${$style.textWhiteLg} ${$style.text}`">ПРЕДСТАВИТЕЛЬСТВО В КИТАЕ</p>
        <p :class="`${$style.textGrey} ${$style.text}`">
          Best new way company limited. Room 1403, 14/f, Capital centre, 151 Cloucester road
          Canchai, Hong Kong, 999077
        </p>
        <p :class="`${$style.textWhiteLg} ${$style.text}`">ПРЕДСТАВИТЕЛЬСТВО В ЕВРОПЕ</p>
        <p :class="`${$style.textGrey} ${$style.text}`">
          SMBE OÜ. Tartu mnt 67/1-13b 67/1-13b, 10115 Tallinn, Kesklinna linnaosa, Estonia
        </p>
      </div>
      <div :class="$style.map">
        <Map />
      </div>
      <!--      <img src="/images/mapTest.png" :class="`${$style.map}`" />-->
      <div :class="`${$style.support}`">
        <p :class="`${$style.pageTitle} ${$style.text}`">ТЕХНИЧЕСКАЯ ПОДДЕРЖКА</p>
        <p :class="`${$style.textGrey} ${$style.text}`">
          СИСТЕМНЫЙ ИНТЕГРАТОР «СЕРВИТИ» ПРЕДОСТАВЛЯЕТ КОМПЛЕКСНУЮ ТЕХНИЧЕСКУЮ ПОДДЕРЖКУ КЛИЕНТА.
          АНАЛИЗИРУЯ КАЖДУЮ ЗАДАЧУ, МЫ <br />
          НАХОДИМ ПРАВИЛЬНЫЕ РЕШЕНИЯ.
        </p>
        <p :class="`${$style.textGrey} ${$style.text}`">ТЕЛЕФОНЫ</p>
        <p :class="`${$style.textWhite} ${$style.text}`">+7 (495) 902-00-99</p>
        <p :class="`${$style.textGrey} ${$style.text}`">ПОЧТА</p>
        <p :class="`${$style.textWhite} ${$style.text}`">info@servity.ru</p>
        <p :class="`${$style.textGrey} ${$style.text}`">ВРЕМЯ РАБОТЫ</p>
        <div :class="`${$style.time}`">
          <p :class="`${$style.textWhite} ${$style.text} ${$style.days}`">Пн-Чт</p>
          <p :class="`${$style.textWhite} ${$style.text}`">С 9 до 18</p>
        </div>
        <div :class="`${$style.time}`">
          <p :class="`${$style.textWhite} ${$style.text} ${$style.days}`">Пт</p>
          <p :class="`${$style.textWhite} ${$style.text}`">С 9 до 17</p>
        </div>
        <p :class="`${$style.textWhite} ${$style.text}`">В ПРАЗДНИЧНЫЕ ДНИ СЛУЖБА НЕ РАБОТАЕТ</p>
      </div>
    </div>
    <client-only>
      <Consultation :show="showPopup" />
    </client-only>
  </Container>
</template>

<script setup lang="ts">
import Consultation from "~/components/navbar/Consultation.vue";
import Map from "~/components/pages/contacts/Map.vue";

const showPopup = ref(false);

const setShowPopup = () => {
  showPopup.value = !showPopup.value;
};
</script>

<style lang="scss" module>
@import "scss/vars";

.map {
  height: 100%;
  position: relative;

  &:before {
    content: "";
    width: 100vh;
    height: 100%;
    position: absolute;
    left: 0;
    top: 0;

    background-color: rgba(0, 0, 0, .03);

  }
}

.links {
  display: flex;
}

.support {
  display: none;
}

//тут был костыль, в жопе никиты

.mainContainer {
  display: grid;
  margin-top: 10rem;
  align-items: flex-start;
  grid-template-columns: 480px 1fr;
  grid-gap: 80px;
}

.container {
  display: flex;
  flex-direction: column;
  gap: 5px;
  padding: 0 20px;
}

.button {
  padding: 15px 25px;
  letter-spacing: $text-default-spacing;
  margin-bottom: 40px;
}

.socials {
  display: flex;
  justify-content: flex-start;
  margin-bottom: 20px;
}

.snail {
  height: 15px;
  margin-right: 5px;
}

.pageTitle {
  font-size: $text-xl;
  margin-top: 0;
  margin-bottom: 2rem;
}

.text {
  color: $black;
  font-weight: 300;
  letter-spacing: $text-default-spacing;
  margin: 0;
  line-height: 2em;
}

.textGrey {
  font-size: 2.3rem;
  margin-top: 0;
}

.textWhiteLg {
  font-size: 2.5rem;
  margin-top: 0;
}

.textWhite {
  font-size: 2.3rem;
  margin-top: 0;
}

.linkContent {
  text-decoration: none;
  font-size: 2.3rem;
  display: flex;
  align-items: center;
}

@media screen and (max-width: 1024px) {
  .support {
    display: block;
    margin-top: 3rem;
  }

  .mainContainer {
    display: grid;
    grid-template-rows: auto 1fr;
    grid-template-columns: none;
  }
}
</style>
