<template>
  <form :class="$style.form">
    <div>
      <FieldLabel>
        <TextArea placeholder="ОПИШИТЕ ЗАДАЧУ"/>
      </FieldLabel>
      <FieldLabel :class="$style.inputFileLabel">
        <input :class="$style.inputFile" type="file"/>
        <span>ДОБАВИТЬ СПЕЦИФИКАЦИЮ</span>
      </FieldLabel>
    </div>
    <FieldLabel>
      ИМЯ И ФАМИЛИЯ
      <Field/>
    </FieldLabel>
    <FieldLabel>
      ТЕЛЕФОН
      <Field type="phone"/>
    </FieldLabel>
    <FieldLabel>
      E-MAIL
      <Field/>
    </FieldLabel>
    <FieldLabel>
      КОМПАНИЯ
      <Field/>
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
import TextArea from "~/components/TextArea.vue";
</script>

<style lang="scss" module>
@import "scss/vars";

.button {
  background: none;
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
  max-width: calc(100vw - 60px);
}

.inputFileLabel {
  position: relative;
  display: flex;
  align-items: flex-start;
  margin-top: 10px;

  & span {
    background: none;
    border-radius: 10px;
    font-size: $text-default;
    border: none;
    cursor: pointer;
    padding: 12px 25px;
    font-weight: 400;
    margin-top: 10px;
    letter-spacing: $text-default-spacing;
    border: solid black 1px;
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