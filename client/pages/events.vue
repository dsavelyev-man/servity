<template>
  <div :class="$style.backgroundMain">
    <Container>
      <h2 :class="`${$style.pageTitle} ${$style.text}`">МЕРОПРИЯТИЯ</h2>
      <div :class="`${$style.container}`">
        <div
          :class="`${$style.background}`"
          :style="`background-image: url(${item.image})`"
          v-for="item in events"
          :key="item.id"
        >
          <p :class="`${$style.textDate} ${$style.text}`">{{ item.date }}</p>
          <p :class="`${$style.textType} ${$style.text}`">{{ item.type }}</p>
          <p :class="`${$style.textName} ${$style.text}`">{{ item.eventName }}</p>
          <p :class="`${$style.textDesc} ${$style.text}`">{{ item.eventDesc }}</p>
          <p>
            <NuxtLink
              :to="`/event/${item.id}`"
              :class="`${$style.textDate} ${$style.text} ${$style.link}`"
            >
              Читать больше <img src="/images/arrow.svg" :class="`${$style.arrow}`" />
            </NuxtLink>
          </p>
        </div>
      </div>
    </Container>
  </div>
</template>

<script setup lang="ts">
import type { Ref } from "vue";
import BlocksType from "~/types/Blocks.type";

const events = [
  {
    id: 1,
    image: "/images/eventTest.png",
    date: "6 Апреля 2023 Самара",
    type: "IT – клуб",
    eventName: "Закрытое мероприятие SERVITY",
    eventDesc:
      "Xcode — это интегрированная среда разработки (от англ. IDE, Integrated development environment) для всех...",
  },
  {
    id: 2,
    image: "/images/eventTest.png",
    date: "6 Апреля 2023 Самара",
    type: "IT – клуб",
    eventName: "Закрытое мероприятие SERVITY",
    eventDesc:
      "Xcode — это интегрированная среда разработки (от англ. IDE, Integrated development environment) для всех...",
  },
];

const blocks = inject<Ref<BlocksType>>("blocks") as Ref<BlocksType>;

onMounted(() => {
  blocks.value.dark = false;
});
</script>

<style lang="scss" module>
@import "scss/vars";

.backgroundMain {
  //background-color: $white;
  padding-bottom: 20px;
}

.container {
  display: grid;
  grid-template-columns: 1fr 1fr;
  padding: 0 20px;
}

.arrow {
  height: 6px;
  margin-left: 4px;
}

.link {
  text-decoration: none;
  display: flex;
  align-items: center;
}

.textDesc {
  color: white;
  font-size: 1.4rem;
}

.textName {
  color: white;
  font-size: $text-md;
  margin: 0;
}

.textType {
  color: white;
  font-size: $text-sm;
  margin: 0;
}

.textDate {
  color: $grey;
  font-size: 1.5rem;
  margin-bottom: 20px;
}

.background {
  &::after {
    content: "";
    position: absolute;
    background: rgba(0, 0, 0, 0.6);
    top: 0;
    left: 0;
    z-index: 2;
    height: 100%;
    width: 100%;
    border-radius: 10px;
  }
  position: relative;
  padding: 55px 35px;
  border-radius: 10px;
  margin-right: 30px;
  background-position: center;
  background-size: cover;
}

.text {
  font-weight: 300;
  letter-spacing: $text-default-spacing;
  z-index: 3;
  position: relative;
}

.pageTitle {
  font-size: $text-xl;
  color: $black;
  margin-bottom: 6rem;
  padding: 0 20px;
}

@media screen and (max-width: 1024px) {
  .container {
    grid-template-columns: 1fr;
  }

  .background {
    margin-bottom: 30px;
  }

  .background {
    margin: 0 0 20px;
  }
}
</style>
