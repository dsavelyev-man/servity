<template>
  <div :class="$style.inFaces" id="block-in-faces">
    <Carousel ref="carousel" :class="$style.carousel">
      <Slide v-for="slide in items" :key="slide.fullName">
        <Container :class="$style.item" :style="`background-image: url('/images/${slide.img}')`">
          <div :class="$style.content">
            <h1>SERVITY В ЛИЦАХ</h1>
            <h2 v-html="slide.fullName" />
            <h3 v-html="slide.job" />
            <p v-html="slide.description" />
            <div :class="$style.navigation">
              <ArrowLeftIcon :class="slide.id === 1 ? $style.hidden : undefined" @click="prev" />
              <p>
                {{ slide.id < 10 ? `0${slide.id}` : slide.id }} /
                {{ items.length < 10 ? `0${items.length}` : items.length }}
              </p>
              <ArrowRightIcon
                :class="slide.id === items[items.length - 1].id ? $style.hidden : undefined"
                @click="next"
              />
            </div>
          </div>
        </Container>
      </Slide>
    </Carousel>
  </div>
</template>

<script lang="ts" setup>
import "vue3-carousel/dist/carousel.css";
import { Carousel, Slide } from "vue3-carousel";
import ArrowLeftIcon from "~/components/svg/ArrowLeftIcon.vue";
import ArrowRightIcon from "~/components/svg/ArrowRightIcon.vue";

const carousel = ref<any>(null);

const next = () => {
  console.log(carousel);
  carousel.value.next();
};

const prev = () => {
  carousel.value.prev();
};

let items = [
  {
    fullName: "ЕВГЕНИЙ ЧЕРНЫХ",
    job: "КОММЕРЧЕСКИЙ ДИРЕКТОР",
    description:
      "Отвечает за прибыль компании, контролирует и развивает несколько направлений: маркетинг, продажи, развитие стратегических отношений с клиентами. В сотрудниках ценит ответственность и нацеленность на результат.",
    img: "in_faces_1.jpg",
  },
  {
    fullName: "ВЛАДИСЛАВ ТОЛПЕКИН",
    job: "ГЕНЕРАЛЬНЫЙ ДИРЕКТОР",
    description: "ЗАМЕНИТЬ",
    img: "in_faces_2.jpg",
  },
];

items = items.map((item, index) => ({ ...item, id: index + 1 }));
</script>

<style lang="scss" module>
@import "scss/vars";

.inFaces {
  height: 100vh;
}

.item {
  height: 100vh;
  width: 100%;
  background-color: $black;
  color: $white;
  font-size: 20px;
  border-radius: 8px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  background-position: center;
  background-size: cover;
}

.carousel {
  height: 100%;
}

.container {
  height: 100%;
}

.navigation.navigation {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 60px;

  & p {
    text-align: center;
    margin: 0 10px;
  }

  & svg {
    width: 24px;
    cursor: pointer;
  }
}

.hidden {
  visibility: hidden;
}

.content {
  max-width: 440px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  margin-left: 80px;

  & * {
    text-align: start;
    margin: 0;
    color: $white;
    font-weight: 300;
    letter-spacing: 4px;
    font-size: $text-xl;
  }

  & h1 {
    font-size: $text-xl;
    font-weight: 400;
    margin-bottom: $text-lg * 1.5;
    letter-spacing: 8px;
  }

  & h2 {
    margin-bottom: 14px;
  }

  & h3 {
    font-size: $text-default;
    margin-bottom: 34px;
    color: $grey;
    letter-spacing: $text-default-spacing;
  }

  & p {
    font-size: $text-sm;
    letter-spacing: $text-default-spacing;
  }
}

@media screen and (max-width: 767px) {
  .inFaces {
    min-height: 100vh;
    height: auto;
  }

  .content {
    & h1 {
      display: none;
    }

    & h2 {
      font-size: $text-lg;
    }
  }
}
</style>
