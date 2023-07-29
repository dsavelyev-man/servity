<template>
  <section
    class="section fullpage-nav__section isGrayBack"
    data-theme-section="dark"
    id="about"
    data-anchor="about-page"
  >
    <div class="container container-fluid">
      <Container class="privacy__row">
        <div>
          <div class="privacy__content">
            <h2 class="privacy__text privacy__text_xl">ЛИЦЕНЗИИ И СЕРТИФИКАТЫ</h2>
            <h3 class="privacy__text privacy__text_lg privacy__text_low-light privacy__mt-2">
              ЦЕНТР ПО ЛИЦЕНЗИРОВАНИЮ, СЕРТИФИКАЦИИ И ЗАЩИТЕ ГОСУДАРСТВЕННОЙ ТАЙНЫ ФЕДЕРАЛЬНОЙ
              СЛУЖБЫ БЕЗОПАСНОСТИ РОССИЙСКОЙ ФЕДЕРАЦИИ
            </h3>
            <p
              class="privacy__text privacy__text_sm privacy__text_grey privacy__text_low-light privacy__mt-1"
            >
              ЛС30014488 15942Н бессрочная от 16.05.2017
            </p>
            <h3 class="privacy__text privacy__text_md privacy__text_low-light privacy__mt-1">
              Вид лицензируемой деятельности, на который выдана лицензия
            </h3>
            <p class="privacy__text privacy__text_sm privacy__mt-1">
              Разработка, производство, распространение шифровальных (криптографических) средств,
              информационных систем и телекоммуникационных систем, защищенных с использованием
              шифровальных (криптографических) средств.
            </p>
            <p class="privacy__text privacy__text_sm privacy__mt-1">
              Выполнение работ, оказание услуг в области шифрования информации, техническое
              обслуживание шифровальных (криптографических) средств, информационных систем и
              телекоммуникационных систем, защищенных с использованием шифровальных
              (криптографических) средств (за исключением случая, если техническое обслуживание
              шифровальных (криптографических) средств, информационных систем и телекоммуникационных
              систем, защищенных с использованием шифровальных (криптографических) средств,
              осуществляется для обеспечения собственных нужд юридического лица или индивидуального
              предпринимателя).
            </p>
            <h3 class="privacy__text privacy__text_lg privacy__text_low-light privacy__mt-2">
              ФЕДЕРАЛЬНАЯ СЛУЖБА ПО ТЕХНИЧЕСКОМУ И ЭКСПОРТНОМУ КОНТРОЛЮ
            </h3>
            <p
              class="privacy__text privacy__text_sm privacy__text_grey privacy__text_low-light privacy__mt-1"
            >
              Лицензия N°3358 от 14.07.2017
            </p>
            <h3 class="privacy__text privacy__text_md privacy__text_low-light privacy__mt-1">
              Вид лицензируемой деятельности, на который выдана лицензия
            </h3>
            <p class="privacy__text privacy__text_sm privacy__mt-1">
              Деятельность по технической защите конфиденциальной информации.
            </p>
          </div>
        </div>
        <div class="privacy__image__wrapper">
          <img />
          <DonutLogo class="privacy__image" />
        </div>
      </Container>
    </div>
  </section>
</template>

<script setup lang="ts">
import DonutLogo from "~/components/logo/DonutLogo.vue";
</script>

<style>
.privacy__row {
  display: grid;
  grid-template-columns: 1fr 250px;
}

.privacy__content {
  max-width: 800px;
}

.privacy__image__wrapper {
  margin-left: auto;
}

.privacy__image {
  max-width: 250px;
  position: sticky;
  top: 200px;
  left: 0;
}

.privacy__text {
  color: #fff;
  font-size: 2.4rem;
  letter-spacing: 0.08em;
  font-weight: 300;
  line-height: 1.1;
}

.privacy__text_md {
  font-size: 3.2rem;
}

.privacy__text_xl {
  font-size: 7rem;
}

.privacy__text_sm {
  font-size: 1.8rem;
}

.privacy__text_lg {
  font-size: 4rem;
}

.privacy__text_low-light {
  opacity: 0.6;
}

.privacy__mt-2 {
  margin-top: 4rem;
}

.privacy__mt-1 {
  margin-top: 2rem;
}

.privacy__text_grey {
  color: #838383;
}

@media (max-width: 1118px) {
  .privacy__image__wrapper {
    display: none;
  }
}
</style>
