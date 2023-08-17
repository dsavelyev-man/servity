<template>
  <client-only>
    <DynamicBackgroundContainer :class="$style.about" id="block-about">
      <Container>
        <div :class="$style.content">
          <div :class="$style.header">
            <h1 :class="$style.heading">КОМПАНИЯ</h1>
            <p :class="$style.shortDescription">
              SERVITY – НАДЕЖНЫЙ ПАРТНЕР И ПОСТАВЩИК ИТ- ОБОРУДОВАНИЯ.
            </p>
          </div>
          <hr :class="$style.divider" />
          <div>
            <p :class="$style.description">
              Специализируемся на продаже и поставке серверов, систем хранения данных и сетевого
              оборудования зарубежных и отечественных производителей. Благодаря узкой специализации
              и экспертным знаниям профильных специалистов, SERVITY является одним из лидеров в нише
              построения ИТ-инфраструктуры.
            </p>
          </div>
          <div :class="$style.counters">
            <div v-for="item in aboutCounters">
              <h2 :class="$style.counterCount">{{ item.count }}</h2>
              <p :class="$style.counterLabel">{{ item.label }}</p>
            </div>
          </div>
        </div>
      </Container>
    </DynamicBackgroundContainer>
  </client-only>
</template>

<script setup lang="ts">
import Scroll from "~/components/pages/index/Scroll.vue";
import DynamicBackgroundContainer from "~/components/pages/index/DynamicBackgroundContainer.vue";

const aboutCounters = [
  {
    count: "10+",
    label: "Лет опыта в ИТ",
  },
  {
    count: "700+",
    label: "Реализованных проектов",
  },
  {
    count: "150",
    label: "Постоянных клиентов",
  },
  {
    count: "3",
    label: "Представительства",
  },
];
</script>

<style lang="scss" module>
@import "scss/vars";

.content {
  max-width: 1024px;
}

.about {
  display: flex;
  align-items: center;
}

.header {
  display: flex;
  align-items: center;
}

.shortDescription {
  font-size: $text-default;
  font-weight: 400;
  color: $grey;
  letter-spacing: $text-default-spacing;
  margin: 0;
}

.description {
  font-size: $text-default;
  font-weight: 400;
  color: $black;
  letter-spacing: $text-default-spacing;
  margin: 0;
}

.heading {
  font-size: $text-xl;
  font-weight: 400;
  opacity: 0.6;
  letter-spacing: $text-default-spacing;
  margin-right: 7rem;
  margin-top: 0;
  margin-bottom: 0;
}

.divider {
  border: none;
  height: 1px;
  background-color: $grey;
  margin: 24px 0;
}

.counters {
  display: grid;
  margin-top: 34px;
  grid-template-columns: repeat(4, 1fr);
}

.counterCount {
  font-size: $text-lg;
  letter-spacing: $text-default-spacing;
  margin: 0;
}

.counterLabel {
  margin: 0;
  font-size: $text-default;
  letter-spacing: $text-default-spacing;
}

@media screen and (max-width: 1324px) {
  .header {
    flex-direction: column;
    align-items: flex-start;
    padding: 0 40px;
  }

  .description {
    padding: 0 40px;
  }

  .counters {
    grid-template-columns: 1fr 1fr;
    padding: 0 40px;
    grid-gap: 20px;
  }
}
</style>
