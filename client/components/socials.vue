<template>
  <div :class="`${$style.socials}`">
    <NuxtLink to="https://dzen.ru/servity">
      <svg
        width="35"
        height="35"
        viewBox="0 0 35 35"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        :class="`${$style.social}`"
      >
        <path
          d="M18.9946 18.9946C17.7768 20.2513 17.6882 21.8179 17.583 25.25C20.7827 25.25 22.9914 25.2389 24.1318 24.1318C25.2389 22.9914 25.25 20.6775 25.25 17.583C21.8179 17.6937 20.2513 17.7768 18.9946 18.9946ZM9.75 17.583C9.75 20.6775 9.76107 22.9914 10.8682 24.1318C12.0086 25.2389 14.2173 25.25 17.417 25.25C17.3063 21.8179 17.2232 20.2513 16.0054 18.9946C14.7487 17.7768 13.1821 17.6882 9.75 17.583ZM17.417 9.75C14.2229 9.75 12.0086 9.76107 10.8682 10.8682C9.76107 12.0086 9.75 14.3225 9.75 17.417C13.1821 17.3063 14.7487 17.2232 16.0054 16.0054C17.2232 14.7487 17.3118 13.1821 17.417 9.75ZM18.9946 16.0054C17.7768 14.7487 17.6882 13.1821 17.583 9.75C20.7827 9.75 22.9914 9.76107 24.1318 10.8682C25.2389 12.0086 25.25 14.3225 25.25 17.417C21.8179 17.3063 20.2513 17.2232 18.9946 16.0054Z"
          :fill="colors.dzen[0]"
        />
        <path
          d="M25.25 17.583V17.417C21.8179 17.3063 20.2513 17.2232 18.9946 16.0054C17.7768 14.7487 17.6882 13.1821 17.583 9.75H17.417C17.3063 13.1821 17.2232 14.7487 16.0054 16.0054C14.7487 17.2232 13.1821 17.3118 9.75 17.417V17.583C13.1821 17.6937 14.7487 17.7768 16.0054 18.9946C17.2232 20.2513 17.3118 21.8179 17.417 25.25H17.583C17.6937 21.8179 17.7768 20.2513 18.9946 18.9946C20.2513 17.7768 21.8179 17.6882 25.25 17.583Z"
          fill="none"
        />
        <rect x="0.5" y="0.5" width="34" height="34" rx="17" :stroke="colors.dzen[0]" />
      </svg>
    </NuxtLink>
    <NuxtLink to="https://t.me/Servity">
      <svg
        width="34"
        height="35"
        viewBox="0 0 34 35"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        :class="`${$style.social}`"
      >
        <g>
          <path
            d="M25.9034 8.61955C25.7969 8.52489 25.6674 8.46193 25.5287 8.43747C25.39 8.413 25.2475 8.42795 25.1164 8.4807L7.70473 15.4951C7.45797 15.5939 7.24905 15.7725 7.10944 16.0041C6.96983 16.2357 6.90707 16.5076 6.93063 16.7791C6.95418 17.0506 7.06276 17.3068 7.24002 17.5093C7.41729 17.7117 7.65365 17.8494 7.91351 17.9016L12.4249 18.8135V23.9918C12.4241 24.2738 12.5055 24.5497 12.6587 24.7835C12.8119 25.0174 13.0298 25.1985 13.2841 25.3034C13.5381 25.4102 13.8174 25.4358 14.0857 25.3769C14.3539 25.3181 14.5988 25.1775 14.7885 24.9735L16.9639 22.651L20.4151 25.7606C20.6641 25.988 20.9853 26.1138 21.3181 26.1144C21.4639 26.1143 21.6089 26.0907 21.7477 26.0445C21.9744 25.9705 22.1784 25.8365 22.3393 25.6561C22.5001 25.4756 22.6122 25.2549 22.6644 25.016L26.1517 9.39873C26.1829 9.25789 26.1763 9.11096 26.1325 8.9737C26.0888 8.83643 26.0096 8.71401 25.9034 8.61955ZM20.6505 11.8035L12.9533 17.478L8.6919 16.6174L20.6505 11.8035ZM13.7996 23.9918V19.7925L15.9295 21.7153L13.7996 23.9918ZM21.3198 24.6993L14.2163 18.2872L24.4403 10.7439L21.3198 24.6993Z"
            :fill="colors.telegram[0]"
          />
          <rect x="0.5" y="0.5" width="33" height="34" rx="16.5" :stroke="colors.telegram[0]" />
        </g>
      </svg>
    </NuxtLink>
  </div>
</template>

<script lang="ts" setup>
const props = defineProps<{
  dark?: boolean;
}>();

const colors = computed(() =>
  props.dark
    ? {
        dzen: ["#838383"],
        telegram: ["white"],
      }
    : {
        dzen: ["#838383"],
        telegram: ["#838383"],
      }
);
</script>

<style lang="scss" module>
@import "scss/vars";

.TextLgGrey {
  font-size: 2.8rem;
  color: white;
  opacity: 0.6;
  letter-spacing: $text-default-spacing;
  margin: 0 0 140px;
}

.textLg {
  font-size: 2.8rem;
  color: white;
  letter-spacing: $text-default-spacing;
  margin: 0 0 140px;
}

.social:hover {
  cursor: pointer;
  transition: 0.2s;
}

.social {
  margin-right: 10px;
}

.socials {
  display: flex;
  justify-content: flex-end;
  align-items: flex-start;
}
</style>
