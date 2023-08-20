<template>
  <div class="itclub-content">
    <h2 class="title itclub-content__main-title">
      О МЕРОПРИЯТИИ
    </h2>
    <p class="title itclub-content__description">
      ОФИЦИАЛЬНЫЕ ПРОИЗВОДИТЕЛИ УШЛИ С РОССИЙСКОГО РЫНКА — КАК РЕШАЕТСЯ ВОПРОС С ПОДДЕРЖКОЙ И ГАРАНТИЕЙ ПОСТАВЛЕННОГО РАНЕЕ ОБОРУДОВАНИЯ, А ТАКЖЕ С ТЕМ, ЧТО ПОСТУПАЕТ В РАМКАХ ПАРАЛЛЕЛЬНОГО ИМПОРТА?
      <br/><br/>
      ЗА ПОСЛЕДНИЙ ГОД КОМАНДА SERVITY РЕАЛИЗОВАЛА ПОРЯДКА 50 КРУПНЫХ ПРОЕКТОВ ПОСТАВКИ СЕРВЕРОВ, СИСТЕМ ХРАНЕНИЯ ДАННЫХ И СЕТЕВОГО ОБОРУДОВАНИЯ. ВОПРОСЫ ГАРАНТИИ — ЭТО ПЕРВОЕ, С ЧЕМ МЫ СТАЛКИВАЕМСЯ НА ПЕРЕГОВОРНОМ ЭТАПЕ, ТАК КАК ЭТА ТЕМА ОЧЕНЬ ВАЖНАЯ И СЛОЖНАЯ В СОВРЕМЕННЫХ УСЛОВИЯХ.
      <br/><br/>
      ПРИГЛАШАЕМ НА БЕСПЛАТНЫЙ ВЕБИНАР, ГДЕ ПОДЕЛИМСЯ СВОИМИ НАБЛЮДЕНИЯМИ, ДАДИМ РЕКОМЕНДАЦИИ И, ВОЗМОЖНО, НЕМНОГО ЗАГЛЯНЕМ В БУДУЩЕЕ РАЗВИТИЯ СЕРВИСНОЙ ПОДДЕРЖКИ В РОССИИ.
    </p>
    <h2 class="title itclub-content__title">
      ТЕМА ВСТРЕЧИ
    </h2>
    <ul class="title itclub-content__list">
      <li class="itclub-content__list-item">СЕРВИС, ГАРАНТИЯ И ТЕХПОДДЕРЖКА ИТ-ОБОРУДОВАНИЯ В «НОВУЮ ЭПОХУ»</li>
    </ul>
    <h2 class="title itclub-content__title">
      В ПРОГРАММЕ
    </h2>
    <ul class="title itclub-content__list">
      <li class="itclub-content__list-item">СЕРВИС И ГАРАНТИИ: «БЫЛО» / «СТАЛО»</li>
      <br/>
      <li class="itclub-content__list-item">ЧЕК-ЛИСТ: ЧТО ВНЕСТИ ЗАКАЗЧИКУ ОБОРУДОВАНИЯ В ТРЕБОВАНИЯ СПЕЦИФИКАЦИИ, ЧТОБЫ ОБЕСПЕЧИТЬ ГАРАНТИИ И СЕРВИС</li>
      <br/>
      <li class="itclub-content__list-item">КАК КОМПАНИЯ, ЗАКУПАЮЩАЯ ОБОРУДОВАНИЕ ЧЕРЕЗ ПАРАЛЛЕЛЬНЫЙ ИМПОРТ, МОЖЕТ СЕБЯ «ОБЕЗОПАСИТЬ»?</li>
      <br/>
      <li class="itclub-content__list-item">ЗИП, «СТАБИЛИЗАЦИОННЫЙ ФОНД», НАЛИЧИЕ СЕРТИФИЦИРОВАННЫХ ИНЖЕНЕРОВ: ЧТО ЕЩЕ ВАЖНО?</li>
      <br/>
      <li class="itclub-content__list-item">ОТКРЫТИЕ ГАРАНТИЙНОГО КЕЙСА У ОРИГИНАЛЬНЫХ ВЕНДОРОВ: ЧТО НЕОБХОДИМО ЗНАТЬ</li>
    </ul>
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