<template>
    <button :class="$style.button"><slot /></button>
</template>

<style lang="scss" module>
@import "scss/vars";

.button {
    background-color: $button-light;
    border: none;
    padding: 12px 25px;
    color: $white;
    letter-spacing: $text-default-spacing;
    border-radius: 10px;
    font-size: $text-default;
    cursor: pointer;
    transition: 0.2s;

    &:hover {
        background-color: rgba($button-light, 0.5);
    }
}
</style>
