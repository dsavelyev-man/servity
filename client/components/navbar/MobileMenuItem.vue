<template>
  <div :class="$style.menu">
    <p @click="set" :class="$style.button"><slot /></p>
    <client-only>
      <div v-if="props.active === props.name">
        <div v-for="li in list" :key="li.to" :class="$style.item">
          <NuxtLink v-if="!li.defaultLink" :to="li.to" :class="$style.link">
            {{ li.label }}
          </NuxtLink>
          <a v-else :href="li.to" :class="$style.link">{{ li.label }}</a>
        </div>
      </div>
    </client-only>
  </div>
</template>

<script lang="ts" setup>
const props = defineProps<{
  list: {
    label: string;
    to: string;
    defaultLink?: boolean;
  }[];
  setActive: (name: string | undefined) => void;
  active: string | undefined;
  name: string;
  dark?: boolean;
}>();

const set = () => {
  if (props.active !== props.name) {
    props.setActive(props.name);
  } else {
    props.setActive(undefined);
  }
};
</script>

<style lang="scss" module>
@import "scss/vars";

.menu {
  font-size: $text-sm;
}

.button {
  margin: 0;
  margin-bottom: 10px;
}

.link.link {
  color: $grey;
  text-decoration: none;
}

.item {
  margin-left: 5px;
  margin-bottom: 10px;
}
</style>
