<template>
  <div :class="$style.background">
    <Container :class="`${$style.container}`">
      <div :class="`${$style.mainContainer}`">
        <div :class="$style.content">
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
            <p :class="`${$style.text} ${$style.textType}`">ПРОИСХОЖДЕНИЕ</p>
            <div :class="`${$style.buttonContainer}`">
              <div v-for="item in production" :key="item.id">
                <button :class="`${$style.button} ${$style.text}`" @click="() => setGlobal(item.global)">{{ item.type }}</button>
              </div>
            </div>
          </div>
          <div :class="`${$style.types}`">
            <p :class="`${$style.text} ${$style.textType}`">БРЕНД</p>
            <div :class="`${$style.buttonContainer}`">
              <div v-for="item in type" :key="item.id" v-if="isGlobal">
                <button :class="`${$style.button} ${$style.text}`">{{ item.type }}</button>
              </div>
              <div v-for="item in typeRussian" :key="item.id" v-else>
                <button :class="`${$style.button} ${$style.text}`">{{ item.type }}</button>
              </div>
            </div>
          </div>
          <div :class="`${$style.types}`">
            <p :class="`${$style.text} ${$style.textType}`">ТИП</p>
            <div :class="`${$style.buttonContainer}`">
              <div v-for="item in cache" :key="item.id">
                <button :class="`${$style.button} ${$style.text}`">{{ item.type }}</button>
              </div>
            </div>
          </div>
          <div :class="`${$style.types}`">
            <p :class="`${$style.text} ${$style.textType}`">КЛАСС (ДЛЯ КОММУТАТОРОВ)</p>
            <div :class="`${$style.buttonContainer}`">
              <div v-for="item in volume" :key="item.id">
                <button :class="`${$style.button} ${$style.text}`">{{ item.type }}</button>
              </div>
            </div>
          </div>
          <div :class="`${$style.textSpec}`">
            <Form/>
          </div>
        </div>
        <div :class="`${$style.imgContainer}`">
          <div :class="`${$style.imgWrapper}`">
            <img src="/images/network_hardware.png" />
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
import Form from "~/components/pages/equipment/Form.vue";

const production = [
  {
    id: 1,
    type: "Иностранное",
    global: true,
  },
  {
    id: 2,
    type: "Российское",
    global: false,
  },
];

const typeRussian = [
  {
    id: 1,
    type: "Eltex"
  },
  {
    id: 2,
    type: "Qtech"
  },
  {
    id: 3,
    type: "БУЛАТ"
  },
]

const isGlobal = ref(false)
const setGlobal = (global: boolean) => {
  if (global) {
    isGlobal.value = true
  } else {
    isGlobal.value = false
  }
}

const type = [
  {
    type: "HPE Aruba",
  },
  {
    type: "DELL",
  },
  {
    type: "Huawei",
  },
  {
    type: "H3C",
  },
  {
    type: "Extreme Networks",
  },
  {
    type: "Cisco",
  },
  {
    type: "Brocade",
  },
  {
    type: "Juniper",
  },
].map((item, index) => ({
  ...item, id: index
}));

const cache = [
  {
    id: 1,
    type: "Коммутатор",
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
  }
];

const volume = [
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
  }
];
</script>

<style lang="scss" module>
@import "scss/vars";

.content {
  padding: 0 20px;
  max-width: 720px;
}

.link {
  margin: 0;
}

.logo2 {
  padding-left: 150px;
}

.types {
}

.imgWrapper {
  & img {
    max-width: 500px;
  }
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
  line-height: 6rem;
  margin-bottom: 10px;
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
  margin-bottom: 40px;
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
  background: none;
  border-radius: 5px;
  margin-right: 10px;
  margin-bottom: 10px;
  width: 326px;
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
  //padding: 0 20px;
}

.mainContainer {
  display: flex;
  justify-content: space-between;
}

.imgContainer {
  margin-top: 300px;
  padding-right: 200px;
}

.logoMobile {
  display: none;
}

.icon {
  height: 50px;
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
