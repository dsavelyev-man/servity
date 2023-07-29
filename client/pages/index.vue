<template>
  <Home />
  <About />
  <OurPriorities />
  <Why />
  <History />
  <PatrnerStatuses />
  <InFaces />
  <client-only>
    <Scroll />
  </client-only>
</template>

<script setup lang="ts">
import Scroll from "~/components/pages/index/Scroll.vue";
import About from "~/components/pages/index/About.vue";
import OurPriorities from "~/components/pages/index/OurPriorities.vue";
import Home from "~/components/pages/index/Home.vue";
import BlocksType, { Block } from "~/types/Blocks.type";
import type { Ref } from "vue";
import Why from "~/components/pages/index/Why.vue";
import History from "~/components/pages/index/History.vue";
import PatrnerStatuses from "~/components/pages/index/PartnerStatuses.vue";
import InFaces from "~/components/pages/index/InFaces.vue";

const blocksRefs = inject("blocks") as Ref<BlocksType>;

const blocks = [
  {
    name: "home",
    dark: true,
  },
  {
    name: "about",
    dark: false,
  },
  {
    name: "priorities",
    dark: true,
  },
  {
    name: "why-are-we",
    dark: false,
  },
  {
    name: "history",
    dark: true,
  },
  {
    name: "partner-statuses",
    dark: false,
  },
  {
    name: "in-faces",
    dark: true,
  },
  {
    name: "footer",
    dark: true,
  },
];

const route = useRoute();

const blocksMeta: Pick<Block, "dark"> & { active: string } = {
  dark: true,
  active: "home",
};

if (route.hash) {
  const active = route.hash.replace("#", "");
  const block = blocks.find((block) => block.name === active);

  if (block) {
    blocksMeta.dark = block.dark;
    blocksMeta.active = block.name;
  }
}

blocksRefs.value = {
  ...blocksMeta,
  data: blocks,
  mobile: false,
};

const checkSize = () => {
  if (document.body.clientWidth > 1440) {
    document.body.style.overflow = "hidden";

    blocksRefs.value.mobile = false;
  } else {
    document.body.style.overflow = "";

    blocksRefs.value.mobile = true;
  }
};

onMounted(() => {
  checkSize();

  window.addEventListener("resize", checkSize);
});

onUnmounted(() => {
  document.body.style.overflow = "";

  window.removeEventListener("resize", checkSize);
});
</script>
