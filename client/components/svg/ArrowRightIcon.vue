<template>
  <svg
    :class="classes"
    width="23"
    height="12"
    viewBox="0 0 23 12"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      id="Arrow 5"
      d="M1 5.25C0.585786 5.25 0.25 5.58579 0.25 6C0.25 6.41421 0.585786 6.75 1 6.75L1 5.25ZM22.5303 6.53033C22.8232 6.23744 22.8232 5.76257 22.5303 5.46967L17.7574 0.696701C17.4645 0.403807 16.9896 0.403807 16.6967 0.696701C16.4038 0.989594 16.4038 1.46447 16.6967 1.75736L20.9393 6L16.6967 10.2426C16.4038 10.5355 16.4038 11.0104 16.6967 11.3033C16.9896 11.5962 17.4645 11.5962 17.7574 11.3033L22.5303 6.53033ZM1 6.75L22 6.75L22 5.25L1 5.25L1 6.75Z"
      fill="white"
    />
  </svg>
</template>

<script lang="ts" setup>
const props = defineProps<{
    border?: boolean;
}>()

const $style = useCssModule();

const classes = computed(() => [$style.icon, props.border ? $style.border : undefined])
</script>

<style lang="scss" module>
@import "scss/vars";
.icon {
  height: 20px;
  width: 100px;
}

.border {
  & path {
    fill: $black;
  }
}
</style>
