<template>
  <Container class="container container-fluid">
    <div class="row" style="padding-top: 8rem">
      <div class="col-13 col-md-12 offset-md-1">
        <h2 class="itclub-title title title--70 text-color--white title--bottom-indent">
          ЗАКРЫТОЕ МЕРОПРИЯТИЕ <b>SERV<span>IT</span>Y</b>
        </h2>
      </div>
    </div>
    <div class="row itclub-preview__row">
      <div class="col-8 col-md-7 offset-1">
        <div class="itclub-preview">
          <img class="itclub-preview__image" src="/images/itclub.jpg">
          <div class="itclub-preview__content">
            <div class="itclub-badge__wrapper">
<!--              <div class="itclub-badge title">-->
<!--              Offline-->
<!--            </div>-->
<!--              <h4 class="itclub-badge__suffx title">-->
<!--              IT – клуб-->
<!--            </h4>-->
            </div>
            <div class="itclub-short-description title itclub-short-description__bold">
              12 СЕНТЯБРЯ 2023
            </div>
            <div class="itclub-short-description title"> GOELRO LOFT </div>
            <div class="itclub-short-description title">МОСКВА</div>

          </div>
        </div>
        <Content class="itclub-content__desktop"/>
      </div>
      <div class="col-4 col-md-4 itclub-members">
        <div class="itclub-member__wrapper">
          <h4 class="title text--title text-color--white title--bottom-indent">
            МОДЕРАТОР
          </h4>
          <div class="itclub-member">
            <img class="itclub-member__image" src="/images/eugenyChernyh.jpg">
            <div class="itclub-member__content">
              <h5 class="itclub-member__full-name title">ЕВГЕНИЙ ЧЕРНЫХ</h5>
              <p class="itclub-member__job title">КОММЕРЧЕСКИЙ ДИРЕКТОР SERVITY</p>
              <div class="itclub-read-more" id="eugeny">
                <p class="title itclub-read-more__click">
                  ЧИТАТЬ БОЛЬШЕ
                  <svg class="itclub-read-more__svg" width="14" height="9" viewBox="0 0 14 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M13 7.60352C11.9895 6.08773 8.57895 2.97194 7 1.60352L1 7.60351" stroke="#9E9E9B" stroke-width="1.5"/>
                  </svg>
                </p>
              </div>
            </div>
          </div>
          <div id="content_eugeny" class="title itclub-read-more__content">
            ОТВЕЧАЕТ ЗА ПРИБЫЛЬ КОМПАНИИ, КОНТРОЛИРУЕТ И РАЗВИВАЕТ НЕСКОЛЬКО НАПРАВЛЕНИЙ: МАРКЕТИНГ, ПРОДАЖИ, РАЗВИТИЕ СТРАТЕГИЧЕСКИХ ОТНОШЕНИЙ С КЛИЕНТАМИ.
          </div>
          <div class="itclub-member__wrapper">
            <h4 class="title text--title text-color--white title--bottom-indent">
              СПИКЕР
            </h4>
            <div class="itclub-member">
              <img class="itclub-member__image" src="/images/andreyPodgornov.png">
              <div class="itclub-member__content">
                <h5 class="itclub-member__full-name title">АНДРЕЙ ПОДГОРНОВ</h5>
                <p class="itclub-member__job title">ДИРЕКТОР ПО ИТ. YADRO</p>
                <div class="itclub-read-more" id="denis">
                  <p class="title itclub-read-more__click">
                    ЧИТАТЬ БОЛЬШЕ
                    <svg class="itclub-read-more__svg" width="14" height="9" viewBox="0 0 14 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M13 7.60352C11.9895 6.08773 8.57895 2.97194 7 1.60352L1 7.60351" stroke="#9E9E9B" stroke-width="1.5"/>
                    </svg>
                  </p>
                </div>
              </div>
            </div>
            <div id="content_denis" class="title itclub-read-more__content">
              ОТВЕЧАЕТ ЗА РАЗВИТИЕ ИТ-ИНФРАСТРУКТУРЫ, КОММУНИКАЦИОННЫХ СЕРВИСОВ, ВЕБ-СЕРВИСОВ КОМПАНИИ YADRO.
            </div>
          </div>
          <div class="itclub-place title">
            <h3>ДВЕРИ ЛОФТ-ПРОСТРАНСТВА <b>GOELRO</b> ДЛЯ ГОСТЕЙ КЛУБА <br/> ОТКРЫТЫ С <b>18:30</b></h3>
            <br/>
            <h4>МЕСТО ПРОВЕДЕНИЯ:</h4>
            <br/>
            <a href="https://yandex.ru/maps/213/moscow/?ll=37.699008%2C55.781800&mode=poi&poi%5Bpoint%5D=37.698049%2C55.781925&poi%5Buri%5D=ymapsbm1%3A%2F%2Forg%3Foid%3D189574466928&utm_source=share&z=19">
              <svg width="16" height="19" viewBox="0 0 16 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M7.71818 1.75352C4.36682 1.75352 1.65 4.47033 1.65 7.8217C1.65 8.37721 1.84456 9.0785 2.2193 9.89031C2.5894 10.692 3.1097 11.5475 3.70081 12.3961C4.88288 14.0931 6.30482 15.7013 7.24535 16.7079C7.50685 16.9878 7.92952 16.9878 8.19101 16.7079C9.13154 15.7013 10.5535 14.0931 11.7356 12.3961C12.3267 11.5475 12.847 10.692 13.2171 9.89031C13.5918 9.0785 13.7864 8.37721 13.7864 7.8217C13.7864 4.47033 11.0695 1.75352 7.71818 1.75352ZM0.15 7.8217C0.15 3.64191 3.53839 0.253516 7.71818 0.253516C11.898 0.253516 15.2864 3.64191 15.2864 7.8217C15.2864 8.68928 14.994 9.61987 14.579 10.519C14.1593 11.4282 13.5869 12.3627 12.9664 13.2535C11.7253 15.0351 10.2486 16.7029 9.28703 17.732C8.43263 18.6464 7.00374 18.6464 6.14933 17.732C5.18779 16.7029 3.71105 15.0351 2.46998 13.2535C1.84951 12.3627 1.27711 11.4282 0.857408 10.519C0.442352 9.61987 0.15 8.68928 0.15 7.8217ZM7.7167 5.16261C6.56192 5.16261 5.62579 6.09874 5.62579 7.25352C5.62579 8.40829 6.56192 9.34443 7.7167 9.34443C8.87148 9.34443 9.80761 8.40829 9.80761 7.25352C9.80761 6.09874 8.87148 5.16261 7.7167 5.16261ZM4.12579 7.25352C4.12579 5.27031 5.7335 3.66261 7.7167 3.66261C9.69991 3.66261 11.3076 5.27031 11.3076 7.25352C11.3076 9.23672 9.69991 10.8444 7.7167 10.8444C5.7335 10.8444 4.12579 9.23672 4.12579 7.25352Z" fill="#FFF"/>
              </svg>

              GOELRO LOFT
            </a>
            <p class="itclub-place__address">
              МОСКВА, УЛ. БОЛЬШАЯ ПОЧТОВАЯ. Д 40, СТР. 7
            </p>
          </div>
        </div>
        <div class="col-11 col-lg-11 offset-lg-1 itclub-content__mobile-wrapper">
          <Content class="itclub-content__mobile"/>
        </div>
      </div>
    </div>
    <iframe class="iframe" src="/amo_itclub.htm"/>
  </Container>
</template>

<script lang="ts" setup>

import Content from "~/components/pages/events/Content.vue";

const addEvent = (id: string) => {
  const elem = document.getElementById(id) as HTMLDivElement;

  const clickEl = elem.querySelector(".itclub-read-more__click") as HTMLDivElement;

  clickEl.onclick = () => {
    const showEl = document.getElementById(`content_${id}`) as HTMLDivElement;

    elem.classList.toggle("active");
    showEl.classList.toggle("active")
  }
}

onMounted(() => {
  addEvent("eugeny")
  addEvent("denis")
})

</script>

<style lang="scss" scoped>
@import "scss/event";
@import "scss/deprecated_css";

.iframe {
  border: none;
  max-width: 680px;
  width: 100%;
  height: 1220px;
}
</style>
