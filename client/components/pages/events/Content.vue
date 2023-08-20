<template>
  <div class="itclub-content">
    <h2 class="title itclub-content__main-title">
      О МЕРОПРИЯТИИ
    </h2>
    <p class="title itclub-content__description">
      SERVITY ПРИГЛАШАЕТ ВАС НА ОЧЕРЕДНОЕ МЕРОПРИЯТИЕ ИЗ СЕРИИ ЗАКРЫТЫХ ВСТРЕЧ, ГДЕ МЫ СОБЕРЕМ ВМЕСТЕ ЭКСПЕРТОВ И ПРАКТИКОВ ДЛЯ  ОБСУЖДЕНИЯ АКТУАЛЬНЫХ ТЕМ, ОБМЕНА ОПЫТОМ И ЗНАНИЯМИ. НЕТВОРКИНГ СЕГОДНЯ ПРИОБРЕТАЕТ НОВЫЕ СМЫСЛЫ: ОБЩЕНИЕ В КРУГУ ЕДИНОМЫШЛЕННИКОВ НЕ ТОЛЬКО ПОЗВОЛЯЕТ НАЙТИ ОТВЕТЫ НА ЕЖЕДНЕВНЫЕ РАБОЧИЕ ВОПРОСЫ, НО И ЗАРЯДИТЬСЯ ЭНЕРГИЕЙ ЛЮДЕЙ, МЫСЛЯЩИХ ОДИНАКОВО.  МЫ ГАРАНТИРУЕМ ПРИЯТНУЮ, НЕФОРМАЛЬНУЮ ОБСТАНОВКУ И СООБЩЕСТВО КОЛЛЕГ, ГДЕ ВЫ СМОЖЕТЕ РАСШИРИТЬ СВОИ ПРОФЕССИОНАЛЬНЫЕ ГОРИЗОНТЫ.
    </p>
    <h2 class="title itclub-content__title">
      ТЕМА ВСТРЕЧИ
    </h2>
    <ul class="title itclub-content__list">
      <li class="itclub-content__list-item">ГАРАНТИЯ ОРИГИНАЛЬНОСТИ ОБОРУДОВАНИЯ ПРИ ПАРАЛЛЕЛЬНОМ ИМПОРТЕ</li>
    </ul>
    <h2 class="title itclub-content__title">
      В ПРОГРАММЕ
    </h2>
    <p class="title itclub-content__description">
      КЕЙС СПИКЕРА, ОТКРЫТАЯ ДИСКУССИЯ, КОМФОРТНОЕ ПРОСТРАНСТВО ДЛЯ ОБЩЕНИЯ, НАПИТКИ И ФУРШЕТ.
    </p>
    <p class="title itclub-content__end">
      УЧАСТИЕ БЕСПЛАТНОЕ, НЕОБХОДИМА РЕГИСТРАЦИЯ.
    </p>
  </div>
</template>

<style lang="scss" scoped>
.itclub-content {
  color: #FFF;
  letter-spacing: 2px;
  margin-top: 60px;
  max-width: 850px;
}

.itclub-content__main-title {
  font-size: 3rem;
  font-weight: 700;
  letter-spacing: 0.08em;
}

.itclub-content__description {
  font-weight: 300;
  margin-top: 20px;
  font-size: 2.4rem;
}

.itclub-content__title {
  margin-top: 20px;
  font-size: 3rem;
  letter-spacing: 0.08em;
  font-weight: 700;
  color: #FFFFFF;
}

.itclub-content__list {
  margin-top: 20px;
  font-weight: 300;
  list-style-type: none;
  padding-left: 0;
  letter-spacing: 2px;
  font-size: 2.4rem;
}

.itclub-content__list-item {
  position: relative;
}

.itclub-content__end {
  margin-top: 0;
  letter-spacing: 2px;
  font-size: 2.4rem;
}
</style>
<script setup lang="ts">
import Form from "~/components/pages/events/Form.vue";
</script>