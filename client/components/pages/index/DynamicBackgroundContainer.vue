<template>
  <div ref="el" :class="`${classes} ${$style.container}`">
    <slot />
  </div>
</template>

<script lang="ts" setup>
import BlocksType from "~/types/Blocks.type";
import type { Ref } from "vue";

const blocks = inject("blocks") as Ref<BlocksType>;

const $style = useCssModule();

const classes = computed(() => (blocks.value.dark ? $style.dark : $style.light));

const el = ref<HTMLElement>();

const observer = new IntersectionObserver(
  (entries, observer) => {
    entries.forEach((entry) => {
      //@ts-ignore
      if (entry.isIntersecting) {
        blocks.value.dark = false;
      } else {
        blocks.value.dark = true;
      }
    });
  },
  {
    root: null,
    rootMargin: "0px",
    threshold: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1],
  }
);

onMounted(() => {
  if (window.innerWidth < 1440) {
    observer.observe(el.value as HTMLElement);
  }
});

onUnmounted(() => {
  if (el.value) {
    observer.unobserve(el.value);
  }
});
</script>

<style lang="scss" module>
@import "scss/vars";

.container {
  height: 100vh;
}

.dark {
  animation: dark 800ms forwards;
}

@keyframes dark {
  from {
    background-color: $white;
    opacity: 1;
  }

  to {
    background-color: $black;
    opacity: 0;
  }
}

.light {
  animation: light 800ms forwards;
}

@keyframes light {
  to {
    background-color: $white;
    opacity: 1;
  }

  from {
    background-color: $black;
    opacity: 0;
  }
}

@media screen and (max-width: 1440px) {
  .container {
    min-height: 100vh;
    height: auto;
  }
}

@media screen and (max-width: 1440px) {
  .container {
    animation: light 800ms forwards;
  }
}
</style>
