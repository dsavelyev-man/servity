<template>
    <div :class="$style.container"><slot /></div>
</template>

<style lang="scss" module>
.container {
    max-width: 1440px;
    width: 100%;
    margin-left: auto;
    margin-right: auto;
}
</style>
