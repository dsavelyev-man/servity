<template>
  <div :class="$style.overflow">
    <Container id="block-history">
      <div :class="$style.history">
        <div :class="$style.wrapper">
          <div :class="$style.header">
            <div :class="$style.headingContainer">
              <h1 :class="$style.heading">ИСТОРИЯ</h1>
              <hr />
            </div>
            <DonutLogo :class="$style.donut" without-margin />
          </div>
          <!--          <perfect-scrollbar @mouseenter="onMouseEnter" :class="$style.items">-->
          <!--            <div :class="$style.item" v-for="item in items" :key="item.img">-->
          <!--              <img :src="`/images/${item.img}`" width="263" />-->
          <!--            </div>-->
          <!--          </perfect-scrollbar>-->
          <div ref="scrollContainer" :class="$style.itemsScroll">
            <div :class="$style.items" @mouseenter="onMouseEnter" @mouseleave="onMouseLeave">
              <div :class="$style.item" v-for="item in items" :key="item.img">
                <img :src="`/images/${item.img}`" width="263" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  </div>
</template>

<script lang="ts" setup>
import DonutLogo from "~/components/logo/DonutLogo.vue";
import "vue3-perfect-scrollbar/dist/vue3-perfect-scrollbar.css";
import type { Ref } from "vue";

const disableWheelEvent = inject<Ref<boolean>>("disableWheelEvent");

const onMouseEnter = () => {
  if (disableWheelEvent) {
    disableWheelEvent.value = true;
  }
};

const onMouseLeave = () => {
  if (disableWheelEvent) {
    disableWheelEvent.value = false;
  }
};

const scrollContainer = ref<HTMLDivElement>();
const wheelEvent = (e: WheelEvent) => {
  e.preventDefault();
  //@ts-ignore
  scrollContainer.value.scrollLeft += e.deltaY;
};

onMounted(() => {
  document.addEventListener("wheel", wheelEvent);
});

onUnmounted(() => {
  document.removeEventListener("wheel", wheelEvent);
});

const items = [
  {
    img: "history_1.png",
    top: 0,
  },
  {
    img: "history_2.png",
    top: 20,
  },
  {
    img: "history_3.png",
    top: 40,
  },
  {
    img: "history_4.png",
    top: 20,
  },
  {
    img: "history_5.png",
    top: 0,
  },
  {
    img: "history_6.png",
    top: 20,
  },
  {
    img: "history_7.png",
    top: 20,
  },
  {
    img: "history_8.png",
    top: 20,
  },
];
</script>

<style lang="scss" module>
@import "scss/vars";

.history {
  height: 100vh;
  display: flex;
  align-items: center;
  align-content: center;
}

.overflow {
  overflow: hidden;
}

.heading {
  color: $white;
  font-weight: 400;
  letter-spacing: $text-default-spacing;
  margin: 0;
  font-size: $text-xl;
}

.donut {
  max-width: 100px;
}

.items {
  display: grid;
  grid-template-columns: repeat(8, 1fr);
  height: 380px;
  margin-left: calc((100vw - 1440px) / 2);
}

.itemsScroll {
  overflow-x: scroll;
  max-width: calc(100vw);
  margin-top: 7rem;
  position: absolute;
  left: calc(((100vw - 1440px) / 2) * -1);
  bottom: 0;

  &::-webkit-scrollbar {
    display: none;
  }
}

.item {
  margin-right: 24px;
  border-radius: 10px;
  overflow: hidden;
  width: 263px;
}

.header {
  display: flex;
  justify-content: space-between;
  width: 100%;
  align-items: center;
  margin-bottom: 420px;
}

.headingContainer {
  max-width: 600px;
  width: 100%;

  & hr {
    color: $grey;
  }
}

.wrapper {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  align-content: center;
  width: 100%;
  position: relative;
}

@media screen and (max-width: 767px) {
  .history {
    min-height: 100vh;
    height: auto;
  }
}

@media screen and (max-width: 1440px) {
  .history {
    padding: 0 20px;
  }

  .itemsScroll {
    left: 0;
  }

  .items {
    margin-left: 0;
  }
}
</style>
