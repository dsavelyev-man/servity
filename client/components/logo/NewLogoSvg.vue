<template>

</template>

<style lang="scss" module>
.logo {
    width: 140px;

    display: flex;
    white-space: nowrap;
    height: 1.8rem;

    & path {
        color: #ffffff;
        width: 1rem;
        display: inline-block;
        position: relative;
        margin-right: 0.5rem;
        transform: perspective(1000px) rotate3d(0, 1, 0, 0deg);
        transition:
            transform 0.5s,
            color 0.5s;
    }

    &:hover {
        & path {
            color: #999;
            transform: perspective(1000px) rotate3d(0, 1, 0, 360deg);
        }

        & path:nth-child(1) {
            transition-delay: 0.1s;
        }

        & path:nth-child(2) {
            transition-delay: 0.2s;
        }

        & path:nth-child(3) {
            transition-delay: 0.3s;
        }

        & path:nth-child(4) {
            transition-delay: 0.4s;
        }

        & path:nth-child(5) {
            transition-delay: 0.5s;
            color: #fff;
        }

        & path:nth-child(6) {
            transition-delay: 0.6s;
            color: #fff;
        }

        & path:nth-child(7) {
            transition-delay: 0.7s;
        }
    }

    & path:nth-child(1) {
        transition-delay: 0.7s;
    }

    & path:nth-child(2) {
        transition-delay: 0.6s;
    }

    & path:nth-child(3) {
        transition-delay: 0.5s;
    }

    & path:nth-child(4) {
        transition-delay: 0.4s;
    }

    & path:nth-child(5) {
        transition-delay: 0.3s;
    }

    & path:nth-child(6) {
        transition-delay: 0.2s;
    }

    & path:nth-child(7) {
        transition-delay: 0.1s;
    }

    & path:nth-of-type(1) {
        width: 1rem;
    }

    & path:nth-of-type(2) {
        width: 0.9rem;
    }

    & path:nth-of-type(3),
    & path:nth-of-type(4) {
        width: 1.2rem;
    }

    & path:nth-of-type(5) {
        width: 0.5rem;
        color: #999;
    }

    & path:nth-of-type(6) {
        width: 1rem;
        color: #999;
    }

    & path:nth-of-type(7) {
        width: 1.2rem;
    }
}
</style>
<script setup lang="ts">
</script>
