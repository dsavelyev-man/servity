<template>
  <input :class="$style.field"/>
</template>

<script setup lang="ts">
</script>

<style lang="scss" module>
@import "scss/vars";

.field {
  border: none;
  font-size: $text-default;
  border-bottom: 2px solid $black;
  background: none;
  outline: none;
  padding: 10px 0;
  letter-spacing: $text-default-spacing;
}
</style>