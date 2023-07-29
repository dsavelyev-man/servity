<template>
  <div>
    <NuxtLink :class="classes" to="/">
      <span>
        <svg :class="$style.logo__icon" width="7px" height="12px">
          <use href="#logo_s"></use>
        </svg>
      </span>
      <span>
        <svg :class="$style.logo__icon" width="6px" height="12px">
          <use href="#logo_e"></use>
        </svg>
      </span>
      <span>
        <svg :class="$style.logo__icon" width="8px" height="12px">
          <use href="#logo_r"></use>
        </svg>
      </span>
      <span>
        <svg :class="$style.logo__icon" width="8px" height="12px">
          <use href="#logo_v"></use>
        </svg>
      </span>
      <span>
        <svg :class="$style.logo__icon" width="3px" height="12px">
          <use href="#logo_i"></use>
        </svg>
      </span>
      <span>
        <svg :class="$style.logo__icon" width="7px" height="12px">
          <use href="#logo_t"></use>
        </svg>
      </span>
      <span>
        <svg :class="$style.logo__icon" width="8px" height="12px">
          <use href="#logo_y"></use>
        </svg>
      </span>
    </NuxtLink>
  </div>
</template>

<script lang="ts" setup>
const props = defineProps<{
  dark?: boolean;
}>();

const $style = useCssModule();

const classes = computed(() => [$style.logo, props.dark ? $style.dark : $style.light]);
</script>

<style lang="scss" module>
@import "scss/vars";

.logo {
  display: flex;
  white-space: nowrap;
  height: 1.8rem;

  & span {
    color: #ffffff;
    width: 1rem;
    display: inline-block;
    position: relative;
    margin-right: 0.5rem;
    transform: perspective(1000px) rotate3d(0, 1, 0, 0deg);
    transition:
      transform 0.5s,
      color 0.5s;
  }

  &:hover {
    & span {
      color: #999;
      transform: perspective(1000px) rotate3d(0, 1, 0, 360deg);
    }

    & span:nth-child(1) {
      transition-delay: 0.1s;
    }

    & span:nth-child(2) {
      transition-delay: 0.2s;
    }

    & span:nth-child(3) {
      transition-delay: 0.3s;
    }

    & span:nth-child(4) {
      transition-delay: 0.4s;
    }

    & span:nth-child(5) {
      transition-delay: 0.5s;
      color: #fff;
    }

    & span:nth-child(6) {
      transition-delay: 0.6s;
      color: #fff;
    }

    & span:nth-child(7) {
      transition-delay: 0.7s;
    }
  }

  & span:nth-child(1) {
    transition-delay: 0.7s;
  }

  & span:nth-child(2) {
    transition-delay: 0.6s;
  }

  & span:nth-child(3) {
    transition-delay: 0.5s;
  }

  & span:nth-child(4) {
    transition-delay: 0.4s;
  }

  & span:nth-child(5) {
    transition-delay: 0.3s;
  }

  & span:nth-child(6) {
    transition-delay: 0.2s;
  }

  & span:nth-child(7) {
    transition-delay: 0.1s;
  }

  & span:nth-of-type(1) {
    width: 1rem;
  }

  & span:nth-of-type(2) {
    width: 0.9rem;
  }

  & span:nth-of-type(3),
  & span:nth-of-type(4) {
    width: 1.2rem;
  }

  & span:nth-of-type(5) {
    width: 0.5rem;

    & use {
      color: #999;
    }
  }

  & span:nth-of-type(6) {
    width: 1rem;

    & use {
      color: #999;
    }
  }

  & span:nth-of-type(7) {
    width: 1.2rem;
  }

  & svg {
    width: 100%;
    height: 100%;
    display: block;
  }

  & use {
    transition: $transition;
  }

  & .logo__icon {
    margin-right: 0.5rem;
  }

  &.light {
    & use {
      color: $black;
    }
  }
}
</style>
