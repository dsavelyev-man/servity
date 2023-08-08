<template>
  <form :class="$style.form">
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
  </form>
</template>

<script setup lang="ts">
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

.form {
  display: flex;
  flex-direction: column;
  gap: 40px;
  margin-top: 40px;
}

</style>