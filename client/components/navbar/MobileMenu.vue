<template>
  <div :class="classes">
    <Logo :dark="show ? show : blocks.dark" />
    <button
      :class="`${$style.burger} ${show ? $style.active : $style.inactive}`"
      @click="props.setShow"
    >
      <hr :class="$style.line" />
      <hr :class="$style.line" />
      <hr :class="$style.line" />
    </button>
    <div v-if="props.show" :class="$style.menu">
      <MobileMenuItem :list="menus.about" name="about" :active="acitve" :setActive="setActive"
        >О КОМПАНИИ</MobileMenuItem
      >
      <MobileMenuItem
        :list="menus.competencies"
        name="competencies"
        :active="acitve"
        :setActive="setActive"
        >КОМПЕТЕНЦИИ</MobileMenuItem
      >
      <MobileMenuItem :list="menus.events" name="events" :active="acitve" :setActive="setActive"
        >СОБЫТИЯ</MobileMenuItem
      >
      <NuxtLink to="/contacts" :class="$style.contacts">КОНТАКТЫ</NuxtLink>
    </div>
  </div>
</template>

<script setup lang="ts">
import Logo from "~/components/logo/Logo.vue";
import BlocksType from "~/types/Blocks.type";
import { Ref } from "vue";
import MobileMenuItem from "~/components/navbar/MobileMenuItem.vue";
import menus from "~/components/navbar/menus";

const acitve = ref();

const setActive = (name: string | undefined) => {
  acitve.value = name;
};

const blocks = inject("blocks") as Ref<BlocksType>;

const props = defineProps<{
  show: boolean;
  setShow: () => void;
}>();

const $style = useCssModule();

const classes = computed(() => [
  $style.mobile,
  !blocks.value.dark ? $style.mobileLight : undefined,
  props.show ? $style.acitve : undefined,
]);
</script>

<style lang="scss" module>
@import "scss/vars";

.contacts {
  font-size: $text-sm;
  text-decoration: none;
}

.acitve {
  & .line.line {
    background-color: $white;
  }
}

.menu {
  position: absolute;
  top: 100%;
  left: 0;
  width: calc(100% - 40px);
  animation: show $transition forwards;
  padding: 20px;
}

@keyframes show {
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
    background-color: rgba($navbar-mobile-background, 0.6);
    backdrop-filter: blur(10px);
  }
}

.mobile {
  display: none;
  padding: 0 20px;
  width: 100%;
}

.burger {
  background: none;
  margin-left: auto;
  border: none;
  cursor: pointer;
  position: relative;
  width: 2.6rem;
  height: calc(0.2rem * 3 + 1.2rem);

  &.active {
    & .line:nth-child(1) {
      transform: rotate(45deg);
      top: calc((0.2rem * 3 + 1rem) / 2);
    }

    & .line:nth-child(2) {
      opacity: 0;
    }

    & .line:nth-child(3) {
      transform: rotate(-45deg);
      top: calc((0.2rem * 3 + 1rem) / 2);
    }
  }

  &.inactive {
  }
}

.mobileLight {
  & .line {
    background-color: $black;
  }
}

.line {
  position: absolute;
  width: 2.6rem;
  height: 0.2rem;
  border: none;
  margin: 0;
  background-color: $white;
  left: 0;
  top: 0;
  transition:
    transform 0.2s,
    opacity 0.2s,
    top 0.2s,
    background-color $transition;

  &:nth-child(1) {
    transition-delay: 0.1s;
  }

  &:nth-child(2) {
    top: 0.8rem;
  }

  &:nth-child(3) {
    transition-delay: 0.1s;
    top: 1.6rem;
  }
}

@media screen and (max-width: 1124px) {
  .mobile {
    display: flex;
  }
}
</style>
