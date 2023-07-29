<template>
    <Teleport to="body">
        <div :class="$style.loader">asdasas</div>
    </Teleport>
</template>

<script setup lang="ts"></script>

<style lang="scss" module>
.loader {
    position: fixed;
    z-index: 9999;
    left: 0;
    top: 0;
    height: 100vh;
}
</style>
