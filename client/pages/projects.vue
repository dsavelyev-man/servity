<template>
  <Container :class="`${$style.page}`">
    <h2 :class="`${$style.pageTitle} ${$style.text}`">Проекты</h2>
    <div :class="`${$style.containerLinks}`">
      <div v-for="item in links" :key="item.id" :class="`${$style.blockLinks}`">
        <NuxtLink
          :class="`${$style.text} ${$style.link} ${category === item.id ? $style.activeLink : ''}`"
          :to="`/projects?category=${item.id}`"
        >
          {{ item.text }}
        </NuxtLink>
      </div>1
    </div>
    <div :class="`${$style.container}`">
      <NuxtLink
        :class="`${$style.block}`"
        v-for="item in project"
        :key="item.id"
        :to="`/project/${item.id}`"
      >
        <p :class="`${$style.text} ${$style.textId}`">
          {{ item.id < 10 ? "0" + item.id : item.id }}
        </p>
        <img :src="item.image" />
        <p :class="`${$style.text} ${$style.textId}`">
          {{ item.text }}
        </p>
        <div :class="`${$style.badge}`">
          <p :class="`${$style.text} ${$style.textInButton}`">
            {{ item.textInButton }}
          </p>
        </div>
      </NuxtLink>
    </div>
  </Container>
</template>

<script setup>
const route = useRoute();

const category = computed(() => parseInt(route.query.category || 1));

const links = [
  {
    id: 1,
    text: "ВСЕ",
  },
  {
    id: 2,
    text: "НЕФТЕГАЗОВЫЕ КОМПАНИИ",
  },
  {
    id: 3,
    text: "ТОРГОВЫЕ ПРЕДПРИЯТИЯ",
  },
  {
    id: 4,
    text: "ПРОМЫШЛЕННЫЕ ПРЕДПРИЯТИЯ",
  },
  {
    id: 5,
    text: "ГОСУДАРСТВЕННЫЕ ОРГАНИЗАЦИИ",
  },
  {
    id: 6,
    text: "УЧРЕЖДЕНИЕ ОБРАЗОВАТЕЛЬНОЙ СФЕРЫ",
  },
  {
    id: 7,
    text: "МЕДИЦИНСКИЕ ОРГАНИЗАЦИИ",
  },
];

const project = [
  {
    id: 1,
    image: "/images/projectTest.png",
    text: "ГЛАВНОЕ УПРАВЛЕНИЕ МЧС РОССИИ ПО ТВЕРСКОЙ ОБЛАСТИ",
    textInButton: "ПОДРОБНЕЕ",
  },
  {
    id: 2,
    image: "/images/projectTest.png",
    text: "ГОСУДАРСТВЕННЫЙ КОСМИЧЕСКИЙ НАУЧНО-ПРОИЗВОДСТВЕННЫЙ ЦЕНТР ИМ. М.В. ХРУНИЧЕВА",
    textInButton: "ПОДРОБНЕЕ",
  },
  {
    id: 3,
    image: "/images/projectTest.png",
    text: "ФЕДЕРАЛЬНОЕ АГЕНТСТВО ПО ТЕХНИЧЕСКОМУ РЕГУЛИРОВАНИЮ И МЕТРОЛОГИИ",
    textInButton: "ПОДРОБНЕЕ",
  },
  {
    id: 4,
    image: "/images/projectTest.png",
    text: "МИНИСТЕРСТВО ПО ИНФОРМАТИЗАЦИИ, СВЯЗИ И ВОПРОСАМ ОТКРЫТОГО УПРАВЛЕНИЯ ТУЛЬСКОЙ ОБЛАСТИ",
    textInButton: "ПОДРОБНЕЕ",
  },
  {
    id: 5,
    image: "/images/projectTest.png",
    text: "ГОСУДАРСТВЕННЫЙ КОСМИЧЕСКИЙ НАУЧНО-ПРОИЗВОДСТВЕННЫЙ ЦЕНТР ИМ. М.В. ХРУНИЧЕВА",
    textInButton: "ПОДРОБНЕЕ",
  },
  {
    id: 6,
    image: "/images/projectTest.png",
    text: "ГОСУДАРСТВЕННЫЙ КОСМИЧЕСКИЙ НАУЧНО-ПРОИЗВОДСТВЕННЫЙ ЦЕНТР ИМ. М.В. ХРУНИЧЕВА",
    textInButton: "ПОДРОБНЕЕ",
  },
  {
    id: 7,
    image: "/images/projectTest.png",
    text: "ГЛАВНОЕ УПРАВЛЕНИЕ МЧС РОССИИ ПО ТВЕРСКОЙ ОБЛАСТИ",
    textInButton: "ПОДРОБНЕЕ",
  },
  {
    id: 8,
    image: "/images/projectTest.png",
    text: "ГЛАВНОЕ УПРАВЛЕНИЕ МЧС РОССИИ ПО ТВЕРСКОЙ ОБЛАСТИ",
    textInButton: "ПОДРОБНЕЕ",
  },
  {
    id: 9,
    image: "/images/projectTest.png",
    text: "ГЛАВНОЕ УПРАВЛЕНИЕ МЧС РОССИИ ПО ТВЕРСКОЙ ОБЛАСТИ",
    textInButton: "HPE PROLIANT",
  }
];
</script>

<style lang="scss" module>
@import "scss/vars";

.activeLink.activeLink {
  opacity: 1;
}

.container {
  display: grid;
  padding: 0 20px;
  grid-template-columns: repeat(3, 1fr);
}

.text {
  font-weight: 300;
  letter-spacing: $text-default-spacing;
}

.pageTitle {
  color: white;
  font-size: $text-xl;
  padding: 0 20px;
}

.blockLinks {
  margin-bottom: 12px;
}

.containerLinks {
  display: flex;
  margin-top: 50px;
  margin-bottom: 50px;
  flex-wrap: wrap;
  padding: 0 20px;
}

.link {
  color: white;
  white-space: nowrap;
  margin-right: 12px;
  opacity: 0.6;
  font-size: $text-sm;
  text-decoration: none;
}

.textId {
  color: white;
  font-size: $text-sm;
}

.badge {
  background-color: $button-light;
  border-radius: 10px;
  padding: 8px 20px;
  display: inline-block;
  text-transform: uppercase;
  margin-top: 15px;
}

.textInButton {
  color: white;
  font-size: $text-sm;
  padding: 0;
  margin: 0;
}

.block {
  text-decoration: none;
}


@media screen and (max-width: 1024px) {
  .pageTitle {
    padding: 0 20px;
  }

  .containerLinks {
    padding: 0 20px;
  }

  .container {
    padding: 0 20px;
  }
}

@media screen and (max-width: 768px) {
  .container {
    grid-template-columns: 1fr;
  }
}
</style>
