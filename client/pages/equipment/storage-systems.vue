<template>
  <div :class="$style.background">
    <Container :class="`${$style.container}`">
      <div :class="`${$style.mainContainer}`">
        <div :class="$style.content">
          <div :class="`${$style.logoMobile}`">
            <NuxtLink to="/equipment/server-equipment">
              <Donut third-hide right/>
            </NuxtLink>
            <div :class="`${$style.logoFlex}`">
<!--              <NuxtLink to="/equipment">-->
<!--&lt;!&ndash;                <ArrowLeftIcon border/>&ndash;&gt;-->
<!--              </NuxtLink>-->
              <Donut first-hide second-hide :class="`${$style.iconRight}`"/>


<!--                <ArrowRightIcon border/>-->

            </div>
          </div>
          <div :class="`${$style.titleContainer}`">
            <div :class="styleCommon.iconContainer">
              <NuxtLink to="/equipment/server-equipment" :class="`${$style.link}`">
                <Donut third-hide right :class="$style.iconLeft" />
              </NuxtLink>
            </div>
            <h2 :class="`${$style.pageName} ${$style.text}`">СИСТЕМЫ ХРАНЕНИЯ ДАННЫХ</h2>
            <div :class="styleCommon.iconContainer">
              <Donut first-hide second-hide :class="$style.iconRighter" />
            </div>
          </div>
          <div :class="`${$style.textContainer}`">
            <p :class="`${$style.text} ${$style.textDesc}`">
              Предлагаем решения, которые гарантируют целостность и доступность обрабатываемой и
              хранимой информации на системах хранения данных и на резервных копиях. Подбираем
              оборудование по заявленным техническим характеристикам, а также помогаем с разработкой
              технических заданий и спецификаций. Поставляем только оригинальную продукцию Dell,
              HPE, Huawei, IBM и других ведущих мировых производителей, с обеспечением заводской
              гарантии вендора. Дополнительно предлагаем расширенную гарантию уровня 8x5 NBD и 24х7.
              Средний срок поставки от 10-12 недель.
            </p>
            <p :class="`${$style.text} ${$style.textDescWhite}`">
              ДЛЯ ПОЛУЧЕНИЯ ИНДИВИДУАЛЬНОГО КОММЕРЧЕСКОГО ПРЕДЛОЖЕНИЯ, ЗАПОЛНИТЕ НЕОБХОДИМЫЕ ПАРАМЕТРЫ КОНФИГУРАТОРА И ОТПРАВЬТЕ НАМ ЗАПРОС.
            </p>
          </div>
          <div :class="`${$style.types}`">
            <p :class="`${$style.text} ${$style.textType}`">ПРОИCХОЖДЕНИЕ</p>
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
            <p :class="`${$style.text} ${$style.textType}`">ЗАДАЧА СХД</p>
            <div :class="`${$style.buttonContainer}`">
              <div v-for="item in cache" :key="item.id">
                <button :class="`${$style.button} ${$style.text}`">{{ item.type }}</button>
              </div>
            </div>
          </div>
          <div :class="`${$style.types}`">
            <p :class="`${$style.text} ${$style.textType}`">ТИП МАСШТАБИРОВАНИЯ</p>
            <div :class="`${$style.buttonContainer}`">
              <div v-for="item in height" :key="item.id">
                <button :class="`${$style.button} ${$style.text}`">{{ item.type }}</button>
              </div>
            </div>
          </div>
          <div :class="`${$style.types}`">
            <p :class="`${$style.text} ${$style.textType}`">УРОВЕНЬ ОТКАЗОУСТОЙЧИВОСТИ</p>
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
          <div :class="`${$style.imgWrapper} ${styleCommon.imgWrapper}`">
            <img src="/images/storage_systems.png" />
          </div>
        </div>
      </div>
    </Container>
  </div>
</template>

<script setup lang="ts">
import ArrowLeftIcon from "~/components/svg/ArrowLeftIcon.vue";
import ArrowRightIcon from "~/components/svg/ArrowRightIcon.vue";
import Donut from "~/components/svg/Donut.vue";
import styleCommon from "~/scss/modules/equipment.module.scss";
import Form from "~/components/pages/equipment/Form.vue";

const isGlobal = ref(false)
const setGlobal = (global: boolean) => {
  if (global) {
    isGlobal.value = true
  } else {
    isGlobal.value = false
  }
}

const production = [
  {
    id: 1,
    type: "Иностранное",
    global: true
  },
  {
    id: 2,
    type: "Российское",
    global: false
  },
];

const type = [
  {
    id: 1,
    type: "HPE",
  },
  {
    id: 2,
    type: "DELL",
  },
  {
    id: 3,
    type: "Huawei",
  },
  {
    id: 4,
    type: "Lenovo",
  },
  {
    id: 5,
    type: "xFusion",
  },
  {
    id: 6,
    type: "Supermicro",
  },
  {
    id: 7,
    type: "Cisco",
  },
];

const typeRussian = [
  {
    type: "AERODISK"
  },
  {
    type: "BAUM"
  },
  {
    type: "RAIDIX"
  },
  {
    type: "DEPO"
  },
  {
    type: "Nerpa"
  },
  {
    type: "YADRO"
  },
  {
    type: "БУЛАТ"
  },
].map((item, index) => ({
  ...item, id: index
}))

const cache = [
  {
    id: 1,
    type: "Хранение \"горячих данных\"",
  },
  {
    id: 2,
    type: "Хранение архивных данных",
  },
  {
    id: 3,
    type: "Видеонаблюдение",
  },
  {
    id: 4,
    type: "Создание файлового сервера",
  },
];

const height = [
  {
    id: 1,
    type: "Горизонтально-масштабируемая",
  },
  {
    id: 2,
    type: "Вертикально-масштабируемая",
  }
];

const volume = [
  {
    id: 1,
    type: "На уровне контроллеров",
  },
  {
    id: 2,
    type: "На уровне СХД",
  }
];
</script>

<style lang="scss" module>
@import "scss/vars";

.content {
  padding: 0 20px;
  max-width: 720px;
}

.imgWrapper {
  & img {
    max-width: 500px;
  }
}

.link {
  margin: 0;
}

.background {
  //background-color: $white;
}

.types {
}

.donutLeft {
  position: absolute;
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
  margin-top: 100px;
  margin-bottom: 0;
  align-items: center;
}

.pageName {
  font-size: $text-miniXl;
  color: $black;
  margin: 0;
  font-weight: 400;
  margin-bottom: 10px;
  line-height: 6rem;
}

.container {
  position: relative;
  padding-bottom: 20px;
}

.logo {
  position: absolute;
  left: -85px;
  top: 75px;
  padding-left: 20px;
}

.textDesc {
  color: darken($grey, 100);
  font-size: $text-default;
}

.textContainer {
  max-width: 660px;
  margin-bottom: 40px;
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
  background: none;
  border-radius: 5px;
  border: solid $black 1px;
  margin-right: 10px;
  margin-bottom: 10px;
  width: 328px;
  cursor: pointer;
}

.textType {
  color: $black;
  font-size: $text-default;
}

.textSpec {
  max-width: 650px;
}

.buttonForm {
  background-color: white;
  border-radius: 10px;
  font-size: $text-default;
  border: solid $black 1px;
  cursor: pointer;
  padding: 12px 25px;
  font-weight: 400;
  margin-top: 30px;
}

.mainContainer {
  display: flex;
  justify-content: space-between;
}

.imgContainer {
  margin-top: 300px;
}

.logoMobile {
  display: none;
  margin-top: 100px;
}

.iconRighter {
  height: 50px;
}

.iconLeft {
  height: 50px;
}

@media screen and (max-width: 1580px) {
  .logo {
    left: 0;
    position: static;
  }
}

@media screen and (max-width: 1024px) {
  .imgContainer {
    display: none;
  }

  .iconRighter {
    display: none;
  }

  .iconLeft {
    display: none;
  }

  .logo2 {
    display: none;
  }

  .logoMobile {
    display: flex;
    justify-content: space-between;
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
