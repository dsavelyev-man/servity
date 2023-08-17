<template>
  <header :class="classes.header">
    <Container :class="$style.content">
      <Logo :dark="show ? show : blocks.dark" />
      <ul :class="$style.links">
        <li :class="$style.linkWrapper">
          <NavbarMenu :dark="blocks.dark" :list="menus.about"> КОМПАНИЯ </NavbarMenu>
        </li>
        <li :class="$style.linkWrapper">
          <NavbarMenu :dark="blocks.dark" :list="menus.competencies"> КОМПЕТЕНЦИИ </NavbarMenu>
        </li>
        <li :class="$style.linkWrapper">
          <NavbarMenu :dark="blocks.dark" :list="menus.events"> СОБЫТИЯ </NavbarMenu>
        </li>
        <li :class="$style.linkWrapper">
          <NuxtLink :class="$style.link" to="/contacts"> КОНТАКТЫ </NuxtLink>
        </li>
      </ul>
      <NuxtLink to="/equipment">
        <Button :class="[$style.configuratorButton, $style.button]"> ПОЛУЧИТЬ КП </Button>
      </NuxtLink>
      <Button :class="[$style.button, $style.consultationButton]" @click="setShowPopup">
        КОНСУЛЬТАЦИЯ
      </Button>
      <a href="tel:+74959020099" :class="$style.phone"> +7-495-902-00-99 </a>
    </Container>
    <MobileMenu :show="show" :setShow="setShowMenu" />
  </header>
  <div :class="`${$style.blur} ${classes.blur}`" />
  <client-only>
    <Consultation :show="showPopup" />
  </client-only>
</template>

<script setup lang="ts">
import Logo from "../logo/Logo.vue";
import Consultation from "./Consultation.vue";
import MobileMenu from "~/components/navbar/MobileMenu.vue";
import BlocksType from "~/types/Blocks.type";
import type { Ref } from "vue";
import menus from "~/components/navbar/menus";

const showPopup = ref(false);
const show = ref(false);

const blocks = inject("blocks") as Ref<BlocksType>;

const classes = computed(() => ({
  header: [
    $style.navbar,
    blocks?.value.dark ? $style.headerDark : $style.headerLight,
    show.value ? $style.showMobile : undefined,
  ],
  blur: blocks?.value.dark ? "" : $style.blurLight,
}));

const setShowMenu = () => {
  show.value = !show.value;
};

const setShowPopup = () => {
  showPopup.value = !showPopup.value;
};

const $style = useCssModule();
</script>

<style lang="scss" module>
@import "scss/vars";

.consultationButton {
  background-color: $button;

  &:hover {
    background-color: rgba($button, 0.75);
  }
}

.headerLight {
  & .link {
    color: $black;
  }

  & .phone {
    color: $black;
  }

  & .button {
    animation: $transition buttonLight forwards;
  }
}

.headerDark {
  & .button {
    animation: $transition buttonDark;
  }
}

@keyframes buttonDark {
  to {
    color: $white;
  }

  from {
    color: $black;
  }
}

@keyframes buttonLight {
  from {
    color: $white;
  }

  to {
    color: $black;
  }
}

.showMobile {
  background-color: $navbar-mobile-background;
  transition: background-color $transition;
}

.blurLight.blurLight {
  background-color: rgba(0, 0, 0, 0);
}

.blur {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  transition: $transition;
  background-color: rgba($black, 0.2);
  height: $navbar-blur-height;
  backdrop-filter: blur(10px);
  z-index: 5;
}

.phone {
  font-size: $text-default;
  text-decoration: none;
  margin-left: 10rem;
  transition: $transition;
}

.configuratorButton {
  margin-left: 4rem;
  margin-right: 2rem;
}

.navbar {
  padding-top: 20px;
  position: sticky;
  top: 0;
  height: $navbar-height;
  display: flex;
  justify-content: space-between;
  align-items: center;

  z-index: 6;
  & * {
    color: $white;
    letter-spacing: $text-default-spacing;
  }
}

.content {
  display: flex;
  align-items: center;
}

.links {
  display: flex;
  list-style-type: none;
  margin-left: 4rem;
}

.linkWrapper {
  margin-right: 4rem;
  margin-left: 4rem;
}

.link {
  font-size: $text-default;
  text-decoration: none;
  font-weight: 400;
  transition: $transition;
}

@media screen and (max-width: 1440px) {
  .content {
    padding: 0 20px;
  }

  .links {
    margin-left: 2rem;
  }

  .linkWrapper {
    margin-left: 2rem;
    margin-right: 2rem;
  }

  .phone {
    display: none;
  }
}

@media screen and (max-width: 1124px) {
  .content {
    display: none;
  }

  .navbar {
    height: $navbar-height - 30px;
    padding-bottom: 20px;
  }

  .blur {
    height: $navbar-height + 10px;
  }
}
</style>
