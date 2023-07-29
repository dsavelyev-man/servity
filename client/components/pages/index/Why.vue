<template>
  <client-only>
    <DynamicBackgroundContainer :class="$style.container" id="block-why-are-we">
      <Container :class="$style.content">
        <h1 :class="$style.heading">ПОЧЕМУ SERVITY</h1>
        <div :class="$style.grid" ref="scrollEl">
          <div v-for="item in items" :key="item.label">
            <img :src="`/images/${item.icon}`" height="45" />
            <h2 :class="$style.itemHeading">
              {{ item.label }}
            </h2>
            <p :class="$style.itemDescription">
              {{ item.description }}
            </p>
          </div>
        </div>
      </Container>
    </DynamicBackgroundContainer>
  </client-only>
</template>

<script lang="ts" setup>
import DynamicBackgroundContainer from "~/components/pages/index/DynamicBackgroundContainer.vue";

const items = [
  {
    icon: "why_icon_1.svg",
    label: "Оригинальность продукции",
    description:
      "Гарантируем поставку оригинальных продуктов. Каждая зарубежная поставка проверяется сотрудником компании перед отправкой в Россию",
  },
  {
    icon: "why_icon_2.svg",
    label: "Комфортные условия оплаты",
    description: "Подберем подходящий вариант взаиморасчетов",
  },
  {
    icon: "why_icon_3.svg",
    label: "Сроки поставки",
    description:
      "Имеем выстроенную систему логистики, офисы в Китае и Европе, обеспечиваем поставку оборудования за 6-8* недель",
  },
  {
    icon: "why_icon_4.svg",
    label: "Экспертиза",
    description:
      "С 2013 года работаем на рынке системной интеграции, обладаем уникальными знаниями и опытом",
  },
  {
    icon: "why_icon_5.svg",
    label: "Универсальность",
    description:
      "Имеем 8 партнерских статусов отечественных производителей и сотрудничаем напрямую с иностранными вендорами",
  },
  {
    icon: "why_icon_6.svg",
    label: "Гарантия и сервис",
    description:
      "Имеем необходимый объемом комплектующих (ЗИП), располагаем штатом сервисных инженеров",
  },
];
</script>

<style lang="scss" module>
@import "scss/vars";

.grid {
  grid-template-columns: 1fr 1fr 1fr;
  display: grid;
  grid-gap: 34px;
}

.content {
  max-width: 1280px;
}

.heading {
  color: $black;
  opacity: 0.6;
  font-weight: 400;
  letter-spacing: $text-default-spacing;
  margin-top: 0;
  margin-bottom: 48px;
  font-size: $text-xl;
}

.container {
  display: flex;
  align-items: center;
  padding: 0 20px;
}

.itemHeading {
  font-size: $text-md;
  font-weight: 300;
  letter-spacing: $text-default-spacing;
}

.itemDescription {
  font-size: $text-sm;
  letter-spacing: $text-default-spacing;
}

@media screen and (max-width: 1024px) {
  .grid {
    grid-template-columns: 1fr 1fr;
  }
}

@media screen and (max-width: 767px) {
  .grid {
    grid-template-columns: 1fr;
  }
}
</style>
