<template>
  <div :class="$style.background">
    <Container :class="`${$style.container}`">
      <div :class="`${$style.mainContainer}`">
        <div>
          <div :class="`${$style.logoMobile}`">
            <NuxtLink to="/equipment/server-equipment" :class="`${$style.link}`">
              <ArrowLeftIcon border />
            </NuxtLink>
              <Donut :class="`${$style.logoMobileMini}`" />
          </div>
          <div :class="`${$style.titleContainer}`">
            <div :class="styleCommon.iconContainer">
              <Donut :class="`${$style.icon}`" third-hide first-hide second-hide />
            </div>
            <h2 :class="`${$style.pageName} ${$style.text}`">СЕТЕВОЕ ОБОРУДОВАНИЕ</h2>
            <NuxtLink to="/equipment/server-equipment" :class="`${$style.link}`">
              <Donut :class="`${$style.icon}`" />
            </NuxtLink>
          </div>
          <div :class="`${$style.textContainer}`">
            <p :class="`${$style.text} ${$style.textDesc}`">
              Осуществляем поставки серверного оборудования от ведущих производителей в рамках
              параллельного импорта, сотрудничаем с основными российскими поставщиками. Поставляем
              серверное оборудование, которое гарантирует высокую надежность, производительность и
              масштабируемость. Комплексно подходим к каждому проекту, начиная от анализа
              потребностей и разработки оптимального решения, до поставки и технической поддержки.
              Наша цель - обеспечить нашим клиентам надежную и эффективную ИТ-инфраструктуру,
              которая будет соответствовать их бизнес-потребностям.
            </p>
            <p :class="`${$style.text} ${$style.textDescWhite}`">
              Для получения индивидуального коммерческого предложения, заполните необходимые
              параметры конфигуратора и отправьте нам запрос.
            </p>
          </div>
          <div :class="`${$style.types}`">
            <p :class="`${$style.text} ${$style.textType}`">ПРОИЗВОДСТВО</p>
            <div :class="`${$style.buttonContainer}`">
              <div v-for="item in production" :key="item.id">
                <button :class="`${$style.button} ${$style.text}`">{{ item.type }}</button>
              </div>
            </div>
          </div>
          <div :class="`${$style.types}`">
            <p :class="`${$style.text} ${$style.textType}`">ТИП</p>
            <div :class="`${$style.buttonContainer}`">
              <div v-for="item in type" :key="item.id">
                <button :class="`${$style.button} ${$style.text}`">{{ item.type }}</button>
              </div>
            </div>
          </div>
          <div :class="`${$style.types}`">
            <p :class="`${$style.text} ${$style.textType}`">КЛАСС (ДЛЯ КОММУТАТОРОВ)</p>
            <div :class="`${$style.buttonContainer}`">
              <div v-for="item in cache" :key="item.id">
                <button :class="`${$style.button} ${$style.text}`">{{ item.type }}</button>
              </div>
            </div>
          </div>
          <div :class="`${$style.types}`">
            <p :class="`${$style.text} ${$style.textType}`">КОЛИЧЕСТВО ПОРТОВ</p>
            <div :class="`${$style.buttonContainer}`">
              <div v-for="item in height" :key="item.id">
                <button :class="`${$style.button} ${$style.text}`">{{ item.type }}</button>
              </div>
            </div>
          </div>
          <div :class="`${$style.types}`">
            <p :class="`${$style.text} ${$style.textType}`">ТИП ПОРТОВ</p>
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
import styleCommon from "@/scss/modules/equipment.module.scss";
import ArrowLeftIcon from "~/components/svg/ArrowLeftIcon.vue";
import Donut from "~/components/svg/Donut.vue";

const production = [
  {
    id: 1,
    type: "Иностранное",
  },
  {
    id: 2,
    type: "Российское",
  },
];

const type = [
  {
    id: 1,
    type: "Коммунатор",
  },
  {
    id: 2,
    type: "Маршрутизатор",
  },
  {
    id: 3,
    type: "Межсетевой экран",
  },
  {
    id: 4,
    type: "Оптический коммутатор",
  },
];

const cache = [
  {
    id: 1,
    type: "Доступа",
  },
  {
    id: 2,
    type: "Ядра",
  },
  {
    id: 3,
    type: "Агрегации",
  },
];

const height = [
  {
    id: 1,
    type: "8",
  },
  {
    id: 2,
    type: "16",
  },
  {
    id: 3,
    type: "24",
  },
  {
    id: 4,
    type: "32",
  },
  {
    id: 5,
    type: "48",
  },
  {
    id: 6,
    type: "64",
  },
];

const volume = [
  {
    id: 1,
    type: "RJ-45",
  },
  {
    id: 2,
    type: "SFP",
  },
  {
    id: 3,
    type: "SFP+",
  },
  {
    id: 4,
    type: "SFP28",
  },
  {
    id: 5,
    type: "QSFP",
  },
  {
    id: 6,
    type: "QSFP28",
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
  color: black;
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

.textDescWhite {
  color: black;
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
  width: 200px;
  cursor: pointer;
  border: solid $black 1px;
}

.background {
  //background-color: white;
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
  border: none;
  cursor: pointer;
  padding: 5px 15px;
  font-weight: 400;
  margin-top: 30px;
  border: solid black 1px;
}

.mainContainer {
  display: flex;
  justify-content: space-between;
}

.imgContainer {
  margin-bottom: auto;
  margin-top: auto;
  padding-right: 200px;
}

.logoMobile {
  display: none;
}

.icon {
  height: 70px;
}

@media screen and (max-width: 1024px) {
  .logo2 {
    display: none;
  }

  .icon {
    display: none;
  }

  .logoMobile {
    display: flex;
    margin-top: 100px;
    justify-content: space-around;
    align-items: center;
  }

  .titleContainer {
    margin-top: 30px;
  }

  .imgContainer {
    display: none;
  }
}
</style>
