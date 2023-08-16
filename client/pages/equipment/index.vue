<template>
  <Container>
    <div :class="$style.content">
      <div :class="$style.links">
        <NuxtLink to="/equipment/server-equipment">СЕРВЕРНОЕ ОБОРУДОВАНИЕ</NuxtLink>
        <NuxtLink to="/equipment/storage-systems">СИСТЕМЫ ХРАНЕНИЯ ДАННЫХ</NuxtLink>
        <NuxtLink to="/equipment/network-hardware">СЕТЕВОЕ ОБОРУДОВАНИЕ</NuxtLink>
      </div>
      <div :class="$style.logo">
        <DonutLogo />
      </div>
    </div>
  </Container>
</template>

<style lang="scss" module>
@import "scss/vars";

.links {
  display: flex;
  flex-direction: column;

  & a {
    font-size: $text-lg;
    font-weight: 300;
    letter-spacing: $text-default-spacing;
    margin-top: 0;
    margin-bottom: $text-lg;
    color: $white;
    text-decoration: none;
  }
}

.content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100vh;
  padding-left: 22rem;
  transform: translateY(-$navbar-height - 82px);
}

@media screen and (max-height: 800px) {
  .heroBlock {
    padding-top: $navbar-height;
  }
}

@media screen and (max-width: 1024px) {
  .logo {
    display: none;
  }

  .content {
    padding-left: 0;
  }

  .links {
    padding: 0 20px;
  }
}
</style>

<script setup lang="ts">
import DonutLogo from "~/components/logo/DonutLogo.vue";
</script>
