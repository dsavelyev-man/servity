<template>
  <form :class="$style.form">
    <FieldLabel :class="$style.inputFileLabel">
      ПРИКРЕПИТЬ ФАЙЛ
      <input :class="$style.inputFile" type="file"/>
      <span>ВЫБЕРИТЕ ФАЙЛ</span>
    </FieldLabel>
    <FieldLabel>
      ИМЯ И ФАМИЛИЯ
      <Field placeholder="ИМЯ И ФАМИЛИЯ"/>
    </FieldLabel>
    <FieldLabel>
      ТЕЛЕФОН
      <Field type="phone" placeholder="+7"/>
    </FieldLabel>
    <FieldLabel>
      ПОЧТА
      <Field placeholder="E-MAIL"/>
    </FieldLabel>
    <FieldLabel>
      КОМПАНИЯ
      <Field placeholder="КОМПАНИЯ"/>
    </FieldLabel>
    <button :class="`${$style.button} ${$style.text}`">ОТПРАВИТЬ ЗАЯВКУ</button>
    <NuxtLink :class="$style.link" href="/policy">
      ПОЛИТИКА ОБРАБОТКИ ДАННЫХ
      <ArrowIcon />
    </NuxtLink>
  </form>
</template>

<script setup lang="ts">
import ArrowIcon from "~/components/svg/ArrowIcon.vue";
</script>

<style lang="scss" module>
@import "scss/vars";

.button {
  background-color: white;
  border-radius: 10px;
  font-size: $text-default;
  border: none;
  cursor: pointer;
  padding: 12px 25px;
  font-weight: 400;
  margin-top: 30px;
  letter-spacing: $text-default-spacing;
  border: solid black 1px;
}

.link {
  color: $black;
  opacity: 0.6;
  font-weight: 400;
  letter-spacing: $text-default-spacing;
  margin-top: 0;
  font-size: $text-sm;
  text-decoration: none;
}

.form {
  display: flex;
  flex-direction: column;
  gap: 40px;
  margin-top: 40px;
}

.inputFileLabel {
  position: relative;
  justify-content: flex-start;

  & span {
    position: relative;
    display: flex;
    align-items: center;
    cursor: pointer;
    border: none;
    font-size: $text-default;
    border-bottom: 2px solid $black;
    color: rgba($black, 0.7);
    outline: none;
    letter-spacing: $text-default-spacing;
    height: 44px;
    padding: 0;
  }
}

.inputFile {
  position: absolute;
  z-index: -1;
  opacity: 0;
  display: block;
  width: 0;
  height: 0;
}

</style>