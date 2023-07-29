<template>
  <div :class="$style.background">
    <Container :class="`${$style.container}`">
      <div :class="`${$style.mainContainer}`">
        <div>
          <div :class="`${$style.logoMobile}`">
              <Donut right second-hide third-hide/>
            <div :class="`${$style.logoFlex}`">
              <NuxtLink to="/equipment/storage-systems">
                <ArrowLeftIcon border/>
              </NuxtLink>
                <Donut first-hide :class="`${$style.iconRight}`"/>
              <NuxtLink to="/equipment/network-hardware">
                <ArrowRightIcon border/>
              </NuxtLink>
            </div>
          </div>
          <div :class="`${$style.titleContainer}`">
            <div :class="styleCommon.iconContainer">
              <NuxtLink to="/equipment/network-hardware" :class="`${$style.link}`">
                <Donut right second-hide third-hide :class="$style.iconLeft" />
              </NuxtLink>
            </div>
            <h2 :class="`${$style.pageName} ${$style.text}`">СЕРВЕРНОЕ ОБОРУДОВАНИЕ</h2>
            <div :class="styleCommon.iconContainer">
              <NuxtLink to="/equipment/storage-systems">
                <Donut first-hide :class="`${$style.icon}`" />
              </NuxtLink>
            </div>
          </div>
          <div :class="`${$style.textContainer}`">
            <p :class="`${$style.text} ${$style.textDesc}`">
              Поставляем оборудование, которое гарантирует высокую надежность, производительность и
              масштабируемость. Поможем подобрать серверы по заявленным техническим характеристикам.
              Поставляем только оригинальную продукцию Dell, xFusion, Lenovo, HPE и других ведущих
              мировых производителей, с обеспечением заводской гарантии вендора. Дополнительно
              предлагаем расширенную гарантию уровня 8x5 NBD и 24х7. Средний срок поставки от 6-8
              недель.
            </p>
            <p :class="`${$style.text} ${$style.textDescWhite}`">
              Для получения индивидуального коммерческого предложения, заполните необходимые
              параметры конфигуратора и отправьте нам запрос.
            </p>
          </div>
          <div :class="`${$style.types}`">
            <p :class="`${$style.text} ${$style.textType}`">ИНОСТРАННОЕ ПРОИЗВОДСТВО</p>
            <div :class="`${$style.buttonContainer}`">
              <div v-for="item in production" :key="item.id">
                <button :class="`${$style.button} ${$style.text}`">{{ item.type }}</button>
              </div>
            </div>
          </div>
          <div :class="`${$style.types}`">
            <p :class="`${$style.text} ${$style.textType}`">РОССИЙСКОЕ ПРОИЗВОДСТВО</p>
            <div :class="`${$style.buttonContainer}`">
              <div v-for="item in type" :key="item.id">
                <button :class="`${$style.button} ${$style.text}`">{{ item.type }}</button>
              </div>
            </div>
          </div>
          <div :class="`${$style.types}`">
            <p :class="`${$style.text} ${$style.textType}`">ВЫСОТА</p>
            <div :class="`${$style.buttonContainer}`">
              <div v-for="item in height" :key="item.id">
                <button :class="`${$style.button} ${$style.text}`">{{ item.type }}</button>
              </div>
            </div>
          </div>
          <div :class="`${$style.types}`">
            <p :class="`${$style.text} ${$style.textType}`">КОЛИЧЕСТВО ПРОЦЕССОРОВ</p>
            <div :class="`${$style.buttonContainer}`">
              <div v-for="item in cache" :key="item.id">
                <button :class="`${$style.button} ${$style.text}`">{{ item.type }}</button>
              </div>
            </div>
          </div>
          <div :class="`${$style.types}`">
            <p :class="`${$style.text} ${$style.textType}`">ОБЪЕМ ПАМЯТИ</p>
            <div :class="`${$style.buttonContainer}`">
              <div v-for="item in volume" :key="item.id">
                <button :class="`${$style.button} ${$style.text}`">{{ item.type }}</button>
              </div>
            </div>
          </div>
          <div :class="`${$style.textSpec}`">
            <button :class="`${$style.buttonForm} ${$style.text}`">Отправить заявку</button>
          </div>
        </div>
        <div :class="`${$style.imgContainer}`">
          <div :class="`${$style.imgWrapper}`">
            <img src="/images/equpment-img.png" />
          </div>
        </div>
      </div>
    </Container>
  </div>
</template>

<script setup lang="ts">
import ArrowLeftIcon from "~/components/svg/ArrowLeftIcon.vue";
import ArrowRightIcon from "~/components/svg/ArrowRightIcon.vue";
import styleCommon from "@/scss/modules/equipment.module.scss";
import Donut from "~/components/svg/Donut.vue";

const production = [
  {
    id: 1,
    type: "Dell",
  },
  {
    id: 2,
    type: "EMC",
  },
  {
    id: 3,
    type: "HPE",
  },
  {
    id: 4,
    type: "Huawei",
  },
  {
    id: 5,
    type: "Lenovo",
  },
  {
    id: 6,
    type: "Cisco",
  },
];

const type = [
  {
    id: 1,
    type: "Depo",
  },
  {
    id: 2,
    type: "Рикор",
  },
  {
    id: 3,
    type: "QTech",
  },
  {
    id: 4,
    type: "iCL",
  },
  {
    id: 5,
    type: "Kraftway",
  },
  {
    id: 6,
    type: "Yadro",
  },
  {
    id: 7,
    type: "Aquarius",
  },
  {
    id: 8,
    type: "Гравитон",
  },
];

const cache = [
  {
    id: 1,
    type: "1",
  },
  {
    id: 2,
    type: "2",
  },
  {
    id: 3,
    type: "4",
  },
  {
    id: 4,
    type: "8",
  },
];

const height = [
  {
    id: 1,
    type: "1U",
  },
  {
    id: 2,
    type: "2U",
  },
  {
    id: 3,
    type: "3U",
  },
  {
    id: 4,
    type: "4U",
  },
  {
    id: 5,
    type: "5U",
  },
  {
    id: 6,
    type: "7U",
  },
  {
    id: 7,
    type: "8U",
  },
  {
    id: 8,
    type: "10U",
  },
  {
    id: 9,
    type: "25U",
  },
  {
    id: 10,
    type: "42U",
  },
];

const volume = [
  {
    id: 1,
    type: "64ГБ",
  },
  {
    id: 2,
    type: "128ГБ",
  },
  {
    id: 3,
    type: "256ГБ",
  },
  {
    id: 4,
    type: "512ГБ",
  },
  {
    id: 5,
    type: "6144ГБ",
  },
  {
    id: 6,
    type: "12288ГБ",
  },
  {
    id: 7,
    type: "1024ГБ",
  },
  {
    id: 8,
    type: "2048ГБ",
  },
  {
    id: 9,
    type: "3072ГБ",
  },
  {
    id: 10,
    type: "4096ГБ",
  },
  {
    id: 11,
    type: "24576ГБ",
  },
];
</script>

<style lang="scss" module>
@import "scss/vars";

.link {
  margin: 0;
}

.logo2 {
  padding-left: 150px;
}

.types {
  padding: 0 20px;
}

.buttonContainer {
  display: flex;
  flex-wrap: wrap;
  max-width: 700px;
}

.text {
  font-weight: 300;
  letter-spacing: $text-default-spacing;
}

.titleContainer {
  display: flex;
  align-items: center;
  margin-top: 100px;
  margin-bottom: 40px;
}

.pageName {
  font-size: $text-xl;
  color: $black;
  margin: 0;
  font-weight: 400;
  padding: 0 20px;
}

.container {
  position: relative;
  padding-bottom: 20px;
}

.logo {
  position: absolute;
  left: -85px;
  top: 75px;
}

.textDesc {
  color: darken($grey, 100);
  font-size: $text-default;
}

.textContainer {
  max-width: 660px;
  margin-bottom: 40px;
  padding: 0 20px;
}

.background {
  //background-color: $white;
}

.textDescWhite {
  color: $black;
  font-size: $text-default;
}

.button {
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 3px;
  padding-bottom: 3px;
  font-size: $text-default;
  color: $black;
  background-color: $white;
  border-radius: 5px;
  border: 1px solid white;
  margin-right: 10px;
  margin-bottom: 10px;
  width: 120px;
  cursor: pointer;
  border: solid $black 1px;
}

.textType {
  color: $black;
  font-size: $text-default;
}

.textSpec {
  max-width: 650px;
  padding: 0 20px;
}

.buttonForm {
  background-color: white;
  border-radius: 10px;
  font-size: $text-default;
  border: solid $black 1px;
  cursor: pointer;
  padding: 5px 15px;
  font-weight: 400;
  margin-top: 30px;
}

.mainContainer {
  display: flex;
  justify-content: space-between;
}

.logoMobile {
  display: none;
  margin-top: 100px;
}

.imgContainer {
  margin-bottom: auto;
  margin-top: auto;
  padding-right: 200px;
}

.icon {
  height: 65px;
}

.iconLeft {
  height: 70px;
}

@media screen and (max-width: 1580px) {
  .logo {
    left: 0;
    position: static;
    padding-left: 20px;
  }
}

@media screen and (max-width: 1024px) {
  .imgContainer {
    display: none;
  }

  .iconLeft {
    display: none;
  }

  .icon {
    display: none;
  }

  .logo2 {
    display: none;
  }

  .logoMobile {
    display: flex;
    justify-content: space-around;
  }

  .titleContainer {
    margin-top: 30px;
  }

  .logo {
    display: none;
  }

  .logoFlex {
    display: flex;
    align-items: center;
  }
}
</style>

<style lang="scss" scoped></style>
