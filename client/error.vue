<template>
    <div class="giorgio">
        <Navbar/>
        <LogoSvg/>
        <Container :class="$style.container">
            <h1 :class="$style.status">
                {{error.statusCode}}
            </h1>
        </Container>
    </div>
</template>

<script setup lang="ts">

const props = defineProps<{
    error: Object
}>()

</script>

<style lang="scss" module>
@import "~/scss/error";

.container {
    display: flex;
    align-items: center;
    justify-content: center;
    height: calc(100vh - $navbar-height - 42px);
    color: $white;
}

.status {
    font-size: $text-xl;
    letter-spacing: 2px;
}
</style>
