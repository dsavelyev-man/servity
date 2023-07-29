<template>
    <p :class="$style.text">
        <slot />
    </p>
</template>

<style lang="scss" module>
@import "~/scss/vars";

.text {
    font-weight: 300;
    font-size: $text-default;
    color: darken($grey, 100);
    margin-bottom: 15px;
}

@media screen and (max-width: 1440px) {
    .text {
        padding-left: 20px;
        padding-right: 20px;
    }
}
</style>
