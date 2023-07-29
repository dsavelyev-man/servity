<template>
  <p :class="classes">
    <slot />
    <client-only>
      <div :class="$style.menuContent">
        <div :class="$style.link" v-for="li in list" :key="li.to">
          <NuxtLink v-if="!li.defaultLink" :to="li.to">
            {{ li.label }}
          </NuxtLink>
          <a v-else :href="li.to">{{ li.label }}</a>
        </div>
      </div>
    </client-only>
  </p>
</template>

<script lang="ts" setup>
const props = defineProps<{
  list: {
    label: string;
    to: string;
    defaultLink?: boolean;
  }[];
  dark?: boolean;
}>();

const $style = useCssModule();

const classes = computed(() => [$style.menu, props.dark ? undefined : $style.menuLight]);
</script>

<style lang="scss" module>
@import "scss/vars";

.menuContent {
  display: none;
}

.menuLight.menuLight {
  color: $black;
}

.menu {
  font-size: $text-default;
  text-decoration: none;
  font-weight: 400;
  position: relative;
  margin: 0;
  transition: $transition;

  .menuContent::after {
    content: "";
    position: absolute;
    left: 0;
    top: -14px;
    height: 20px;
    width: 100%;
  }

  &:hover .menuContent {
    left: -20px;
    display: flex;
    flex-direction: column;
    position: absolute;
    margin-top: 10px;
    background-color: rgba($black, 0.6);
    backdrop-filter: blur(4px);
    padding: 20px;
    padding-bottom: 10px;
    animation: 0.2s menuAnimationShow forwards;
    z-index: 4;
  }
}

@keyframes menuAnimationShow {
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
}

.link {
  margin-bottom: 10px;

  & a {
    text-decoration: none;
  }
}
</style>
