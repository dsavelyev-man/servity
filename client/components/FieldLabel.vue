<template>
  <label :class="$style.label">
    <slot/>
  </label>
</template>

<style lang="scss" module>
@import "scss/vars";

.label {
  display: flex;
  flex-direction: column;
  letter-spacing: $text-default-spacing;
  font-size: $text-default;
}
</style>