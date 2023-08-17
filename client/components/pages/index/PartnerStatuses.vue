<template>
  <client-only>
    <DynamicBackgroundContainer :class="$style.wrapper" id="block-partner-statuses">
      <Container :class="$style.container">
        <div :class="$style.content">
          <h1 :class="$style.heading">ВЕНДОРЫ</h1>
          <div>
            <h2 :class="$style.title">ИНОСТРАННОЕ ПРОИЗВОДСТВО, ПАРАЛЛЕЛЬНЫЙ ИМПОРТ</h2>
            <hr :class="$style.divider" />
            <div :class="$style.statusesWrapperContent">
              <div :class="$style.statuses">
                <!--              <div v-for="block in computedItems.global" :class="$style.block">-->
                <!--                -->
                <!--              </div>-->
                <div v-for="item in items.global" :class="$style.status">
                  <img :src="`/images/${item.img}`" :alt="item.img" />
                </div>
              </div>
            </div>
          </div>
          <div :class="$style.statusesWrapper">
            <h2 :class="$style.title">ПРОИЗВОДСТВО РОССИЙСКАЯ ФЕДЕРАЦИЯ</h2>
            <hr :class="$style.divider" />
            <div :class="$style.statusesWrapperContent">
              <div :class="$style.statuses">
                <!--              <div v-for="block in computedItems.global" :class="$style.block">-->
                <!--                -->
                <!--              </div>-->
                <div v-for="item in items.russian" :class="$style.status">
                  <img :src="`/images/${item.img}`" :alt="item.img" />
                </div>
              </div>
            </div>
          </div>
          <!-- <div :class="$style.end">
            <NuxtLink :class="$style.link" href="/privacy">
              ЛИЦЕНЗИИ И СЕРТИФИКАТЫ
              <ArrowIcon />
            </NuxtLink>
          </div> -->
        </div>
      </Container>
    </DynamicBackgroundContainer>
  </client-only>
</template>

<script setup lang="ts">
import DynamicBackgroundContainer from "~/components/pages/index/DynamicBackgroundContainer.vue";
import ArrowIcon from "~/components/svg/ArrowIcon.vue";

const items = {
  global: [
    {
      img: "global_status_1.png",
    },
    {
      img: "global_status_2.png",
    },
    {
      img: "global_status_3.png",
    },
    {
      img: "global_status_4.png",
    },
    {
      img: "global_status_5.png",
    },
    {
      img: "global_status_6.png",
    },
    {
      img: "global_status_7.png",
    },
    {
      img: "global_status_8.png",
    },
    {
      img: "global_status_9.png",
    },
    {
      img: "global_status_10.png",
    },
  ],
  russian: [
    {
      img: "russian_status_1.png",
    },
    {
      img: "russian_status_2.png",
    },
    {
      img: "russian_status_3.png",
    },
    {
      img: "russian_status_4.png",
    },
    {
      img: "russian_status_5.png",
    },
    {
      img: "russian_status_6.png",
    },
    // {
    //   img: "russian_status_7.png",
    // },
    {
      img: "russian_status_8.png",
    },
    {
      img: "russian_status_9.png",
    },
    {
      img: "russian_status_10.png",
    },
  ],
};

const computedItems = computed(() => {
  const cItems: {
    global: { img: string }[][];
    russian: { img: string }[][];
  } = {
    global: [],
    russian: [],
  };

  items.global.forEach((item, index) => {
    const blockKey = Math.trunc(index / 5);

    if (!cItems.global[blockKey]) cItems.global.push([]);

    cItems.global[blockKey].push(item);
  });

  items.russian.forEach((item, index) => {
    const blockKey = Math.trunc(index / 5);

    if (!cItems.russian[blockKey]) cItems.russian.push([]);

    cItems.russian[blockKey].push(item);
  });

  return cItems;
});
</script>

<style lang="scss" module>
@import "scss/vars";

.statusesWrapperContent {
  display: flex;
  justify-content: center;
  align-items: center;
}

.link {
  color: $black;
  opacity: 0.6;
  font-weight: 400;
  letter-spacing: $text-default-spacing;
  margin-top: 0;
  font-size: $text-sm;
  text-decoration: none;
}

.end {
  margin-top: 80px;
  display: flex;
  justify-content: flex-start;

  & svg {
    margin-left: 4px;
  }
}

.wrapper {
  display: flex;
  align-items: center;
}

.heading {
  color: $black;
  opacity: 0.6;
  font-weight: 400;
  letter-spacing: $text-default-spacing;
  margin-top: calc($navbar-height);
  margin-bottom: 24px;
  font-size: $text-xl;
}

.statusesWrapper {
  margin-top: 40px;
}

.title {
  color: $black;
  opacity: 0.6;
  font-weight: 400;
  letter-spacing: $text-default-spacing;
  margin-top: 0;
  font-size: $text-md;
}

.content {
  display: flex;
  flex-direction: column;
}

.divider {
  border: none;
  height: 1px;
  background-color: $grey;
  margin-bottom: 28px;
  margin-top: 28px;
}

.block {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 40px;

  &:last-child {
    margin-bottom: 0;
  }
}

.statuses {
  display: grid;
  grid-template-columns: 90px 90px 90px 90px 90px;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 9rem;
  //max-width: 1360px;
  row-gap: 4rem;
}

.status {
  display: flex;
  justify-content: flex-start;
  align-items: center;

  & img {
    max-height: 50px;
    max-width: 90px;
  }
}

@media screen and (max-width: 1440px) {
  .content {
    padding: 20px 20px;
  }

  .statuses {
    gap: 40px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: center;
    row-gap: 40px;
  }

  .block {
  }

  .status {
    margin-right: 20px;
  }
}
</style>
