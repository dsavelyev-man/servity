<template>
  <Container id="block-home">
    <div :class="$style.heroBlock">
      <div :class="$style.content">
        <h1 :class="$style.header">
          СОВРЕМЕННЫЕ <br />
          РЕШЕНИЯ <br />
          В СФЕРЕ IT
        </h1>
        <h4 :class="$style.description">РЕАЛИЗАЦИЯ УНИКАЛЬНЫХ КОМПЛЕКСНЫХ ПРОЕКТОВ</h4>
      </div>
      <div :class="$style.donut">
        <DonutLogo />
      </div>
    </div>
  </Container>
</template>
<script setup lang="ts">
import DonutLogo from "~/components/logo/DonutLogo.vue";
</script>

<style lang="scss" module>
@import "scss/vars";

.header {
  font-size: $text-xl;
  color: $white;
  letter-spacing: $text-default-spacing;
  font-weight: 400;
  margin-bottom: 0;
}

.content {
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  justify-content: space-between;
  padding-left: 22rem;
}

.description {
  color: $white;
  opacity: 0.6;
  margin-top: 16px;
  font-size: $text-default;
  font-weight: 400;
  letter-spacing: $text-default-spacing;
}

.heroBlock {
  height: 100vh;
  position: relative;
  transform: translateY(-$navbar-height);
  display: flex;
  align-items: center;
  justify-content: space-between;
}

@media screen and (max-height: 800px) {
  .heroBlock {
    padding-top: $navbar-height;
  }
}

@media screen and (max-width: 767px) {
  .content {
    flex-direction: column;
    align-items: flex-start;
  }

  .header {
    margin-top: 200px;
  }

  .donut {
    position: absolute;
    bottom: -40vh;
    transform: translateY(-50%);
    right: 20px;
    margin-right: 0;

    & svg {
      max-width: 320px;
      width: 100%;
    }
  }

  .donut {
    display: none;
  }

  .heroBlock {
    min-height: 100vh;
    height: auto;
  }
}

@media screen and (max-width: 1440px) {
  .heroBlock {
    padding: 0 40px;
  }

  .content {
    padding-left: 0;
  }
}
</style>
