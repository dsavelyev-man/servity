<template>
  <div class="giorgio">
    <Navbar />
    <LogoSvg />
    <!--        <Loader/>-->
    <slot />
    <Footer />
  </div>
</template>

<script setup lang="ts">
import "~/scss/app.scss";
import Navbar from "../components/navbar/Navbar.vue";
import Footer from "~/components/Footer.vue";
import BlocksType, { Block } from "~/types/Blocks.type";
import scrollToElement from "scroll-to-element";

useSeoMeta({
  title: "Servity",
  ogTitle: "Servity",
  description:
    "Системный интегратор по построению программно-аппаратных комплексов в области вычисления, передачи, хранения и защиты данных.",
  ogDescription:
    "Системный интегратор по построению программно-аппаратных комплексов в области вычисления, передачи, хранения и защиты данных.",
  ogImage: "/preview.png",
  twitterCard: "summary_large_image",
});

const blocks = ref<any>({
  dark: true,
  active: undefined,
  data: [],
  mobile: false,
});

provide("blocks", blocks);

const disableWheelEvent = ref(false);

provide("disableWheelEvent", disableWheelEvent);

const route = useRoute();

const whiteRoutes = [
  "/equipment/server-equipment",
  "/equipment/storage-systems",
  "/equipment/network-hardware",
  "/events",
];

onMounted(() => {
  if (
    //@ts-ignore
    whiteRoutes.findIndex((url) => route.href === url) !== -1
  ) {
    blocks.value.dark = false;

    document.body.classList.add("white");
    return;
  } else {
    document.body.classList.remove("white");
  }
});

watch(route, (next, prev) => {
  if (
    //@ts-ignore
    whiteRoutes.findIndex((url) => next.href === url) !== -1
  ) {
    blocks.value.dark = false;

    document.body.classList.add("white");
    return;
  } else {
    document.body.classList.remove("white");
  }

  //@ts-ignore
  if (next.href === "/#home") {
    blocks.value.dark = true;
    blocks.value.active = "home";
  }

  const dataId = blocks.value.data.findIndex((block: Block) => {
    //@ts-ignore
    return `/#${block.name}` === next.href;
  });

  if (dataId === -1) {
    blocks.value.dark = true;
  } else {
    blocks.value.dark = blocks.value.data[dataId].dark;
    blocks.value.active = blocks.value.data[dataId].name;

    scrollToElement(`#block-${blocks.value.active}`, {
      offset: 0,
      duration: 800,
      ease: "in-out-sine",
      //@ts-ignore
    });
  }
});
</script>
