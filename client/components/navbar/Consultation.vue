<template>
    <Teleport to="body">
        <div :class="`${classes.container} giorgio`">
            <h1 :class="$style.header">Свяжитесь с нами</h1>
            <iframe src="/amo.htm" :class="$style.iframe" />
        </div>
    </Teleport>
</template>

<script lang="ts" setup>
const props = defineProps<{
    show: boolean
}>()

const $style = useCssModule()

const classes = computed(() => ({
    container: `${$style.consultation} ${
        props.show ? $style.show : $style.hide
    }`,
}))
</script>

<style lang="scss" module>
@import "scss/vars";

.header {
    font-weight: 300;
}

.consultation {
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 100vh;
    z-index: 6;
    background-color: $black;
    display: flex;
    flex-direction: column;
    opacity: 0;
}

.iframe {
    height: 520px;
    max-width: 1440px;
    width: 100%;
    border: none;
    margin-left: auto;
    margin-right: auto;
}

.show {
    display: flex;
    animation: 0.2s forwards consultationShowAnimation;
}

@keyframes consultationShowAnimation {
    from {
        opacity: 0;
    }

    to {
        opacity: 1;
    }
}

.hide {
    display: none;
}
</style>
