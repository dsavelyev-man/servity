<template>
    <div :to="props.item.to" :class="`${$style.container} ${$style.link}`">
            <div :style="`background-image: url(${props.item.image})`" :class="`${$style.image}`" />
            <div :class="`${$style.textContainer}`">
              <p :class="`${$style.newsName} ${$style.text}`">{{ props.item.label }}</p>
              <p :class="`${$style.textDate} ${$style.text}`">{{ props.item.created_at }}</p>
              <div :class="$style.descriptionWrapper">
                <p v-if="!showMore" v-snip="{ lines: 5, onSnipped }" :class="`${$style.newsDes} ${$style.text}`">{{ props.item.description }}</p>
                <p v-else :class="`${$style.newsDes} ${$style.text}`">{{ props.item.description }}</p>
                <p @click="setShowMore" v-if="snipped && !showMore" :class="`${$style.text} ${$style.readMore}`">
                    ЧИТАТЬ БОЛЬШЕ
                    <ArrowTopIcon/>
                </p>
              </div>
            </div>
    </div>
</template>

<script setup lang="ts">
import ArrowTopIcon from "@/components/svg/ArrowTopIcon.vue";

const props = defineProps<{
    item: {
        to: string
        image: string
        label: string
        created_at: string
        description: string
        collapsible: boolean
    }
}>()

const snipped = ref(false);
const showMore = ref(null);

const onSnipped = (state) => {
    if(state.hasEllipsis) {
      snipped.value = true
    }
}

const setShowMore = () => {
  showMore.value = !showMore.value
}
</script>

<style lang="scss" module>
@import "scss/vars";

.text {
  font-weight: 300;
  letter-spacing: $text-default-spacing;
}

.readMore {
  font-size: $text-sm;
  display: flex;
  align-items: center;
  gap: 10px;
  cursor: pointer;
}

.textContainer {
    display: flex;
    flex-direction: column;
    color: $black;
}

.link {
  text-decoration: none;
}

.container {
  display: flex;
  align-items: flex-start;
  margin-top: 3rem;
}

.descriptionWrapper {
    max-height: 12.5rem;
}

.textDate {
  font-size: $text-sm;
  font-weight: 500;
  margin-top: 20px;
}

.newsName {
  font-size: $text-md;
  margin: 0;
}

.newsDes {
  font-size: $text-sm;
}

.image {
  border-radius: 10px;
  margin-right: 15px;
  min-width: 324px;
  height: 232px;
  background-position: center;
  background-size: cover;
}

@media screen and (max-width: 1024px) {
  .container {
    display: flex;
    flex-direction: column;
  }

  .image {
    padding-left: 10px;
    padding-right: 10px;
    width: calc(100% - 20px);
    max-width: none;
  }

  .textContainer {
    margin-left: 15px;
    margin-right: 15px;
  }

  .newsName {
    margin-top: 10px;
    margin-bottom: 10px;
  }
}
</style>