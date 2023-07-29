<template></template>

<script lang="ts" setup>
import Blocks from "~/types/Blocks.type";
import scrollToElement from "scroll-to-element";
import type { Ref } from "vue";
import { b } from "vite-node/types-516036fa";

const to = ref<"top" | "down" | undefined>(undefined);

const blocks = inject("blocks") as Ref<Blocks>;

const listener = (e: WheelEvent) => {
  if (!to.value) {
    if (e.deltaY > 5) {
      to.value = "down";
    } else if (e.deltaY < -5) {
      to.value = "top";
    }
  }
};

const router = useRouter();

watch(to, (next, prev) => {
  if (next) {
    const prevBlockIndex = blocks.value.data.findIndex(
      (block) => block.name === blocks.value.active
    );
    const nextBlock = blocks.value.data[prevBlockIndex + (next === "top" ? -1 : 1)];

    if (nextBlock) {
      blocks.value.dark = nextBlock.dark;
      blocks.value.active = nextBlock.name;

      window.history.pushState(`block-${blocks.value.active}`, "", `/#${blocks.value.active}`);

      const el = document.getElementById(`block-${blocks.value.active}`) as HTMLElement;

      scrollToElement(`#block-${blocks.value.active}`, {
        offset: 0,
        duration: 800,
        ease: "in-out-sine",
        //@ts-ignore
      }).on("end", () => {
        to.value = undefined;
      });
    } else {
      to.value = undefined;
    }
  }
});

const disableWheelEvent = inject<Ref<boolean>>("disableWheelEvent");

onMounted(() => {
  const el = document.getElementById(`block-${blocks.value.active}`);

  if (el) {
    scrollToElement(`#block-${blocks.value.active}`, {
      offset: 0,
      duration: 800,
      ease: "in-out-sine",
      //@ts-ignore
    });
  }

  window.addEventListener("wheel", listener);
});

//@ts-ignore
watch(disableWheelEvent, (next, prev) => {
  if (next) {
    window.removeEventListener("wheel", listener);
  } else {
    window.addEventListener("wheel", listener);
  }
});

onUnmounted(() => {
  if (window.innerWidth > 1440) {
    window.removeEventListener("wheel", listener);
  }
});
</script>
