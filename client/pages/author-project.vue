<template>
  <Container>
    <div :class="`${$style.heroBlock}`">
      <div :class="`${$style.container}`">
        <h2 :class="`${$style.text} ${$style.pageTitle}`">ТВ-ПРОЕКТ</h2>
        <h3 :class="`${$style.text} ${$style.textLightGrey}`">
          IT СЕГОДНЯ – ТВ-ПРОЕКТ КОМПАНИИ SERVITY НА ТЕЛЕКАНАЛЕ ПРО БИЗНЕС
        </h3>
        <p :class="`${$style.text} ${$style.textDarkGrey}`">
          Олег Белов, Директор по развитию SERVITY и герои программы обсуждают текущую повестку в
          IT-бизнесе. Как проходит трансформация отечественного IT-рынка, какие вызовы стоят перед
          компаниями в эпоху цифровизации, как меняется технологический стек – ответы на эти вопросы
          в передаче IT сегодня.
        </p>
        <p :class="`${$style.text} ${$style.textUpButton}`">Хотите стать героем?</p>
        <p :class="`${$style.text} ${$style.textUpButton}`">Напишите нам</p>
        <a href="mailto:social@servity.com">
          <Button :class="`${$style.text} ${$style.textInButton} ${$style.button}`">
            social@servity.com
          </Button>
        </a>
      </div>
      <div :class="`${$style.donut}`">
        <DonutLogo />
      </div>
    </div>
  </Container>
  <Container>
    <div :class="`${$style.secondContainer}`">
      <div :class="`${$style.videoContainer}`" v-for="item in items" :key="item.id">
        <NuxtLink :to="item.link">
          <div :class="`${$style.video}`" :style="`background-image: url(${item.video})`">
            <div :class="`${$style.svgBackground}`">
              <img :class="`${$style.svg}`" src="/images/play.svg" />
            </div>
          </div>
        </NuxtLink>
        <div :class="`${$style.textContainer}`">
          <p :class="`${$style.text} ${$style.textName}`">{{ item.name }}</p>
          <p :class="`${$style.text} ${$style.textJob}`">{{ item.job }}</p>
          <p :class="`${$style.text} ${$style.textDesc}`">{{ item.desc }}</p>
        </div>
      </div>
    </div>
  </Container>
</template>

<script setup>
import DonutLogo from "~/components/logo/DonutLogo.vue";
const items = [
  {
    id: 1,
    link: "http://cloud.tvigle.ru/video/5828500/?playerId=49&partnerId=2398",
    video: "/images/videoPreview.png",
    name: "Владимир Федин",
    job: "Директор IT-департамента группы компаний «Инвитро»",
    desc:
      "Рассказываем об изменениях, которые произошли в " +
      "«Инвитро» благодаря цифровой трансформации и о том, как компания использует алгоритмы " +
      "искусственного интеллекта для улучшения качества медицинских услуг. Обсуждаем, " +
      "какие преимущества могут принести пациентам IT-технологии ",
  },
  {
    id: 2,
    link: "http://cloud.tvigle.ru/video/5828454/?playerId=49&partnerId=2398",
    video: "/images/videoPreview2.png",
    name: "Павел Чернышин",
    job: "Директор по развитию бизнеса «ТКО-Информ»",
    desc: "Обсуждаем, как проходит цифровизация отрасли обращения с отходами и какова роль регуляторов в формировании требований к цифровым решениям",
  },
  {
    id: 3,
    link: "http://cloud.tvigle.ru/video/5828381/?playerId=49&partnerId=2398",
    video: "/images/videoPreview3.png",
    name: "Карим Кузахметов",
    job: "Вице-президент Sitronics Group",
    desc: "Какие задачи сегодня стоят перед Sitronics Group и как изменился подход к цифровизации за последний год. Что такое «умный город» и как развивается система «умного города» за пределами столицы",
  },
  {
    id: 4,
    link: "http://cloud.tvigle.ru/video/5828205/?playerId=49&partnerId=2398",
    video: "/images/videoPreview4.png",
    name: "Андрей Ревяшко",
    job: "СТО компании «М.Видео-Эльдорадо»",
    desc: "В компании «М.Видео-Эльдорадо» активно развиваются процессы цифровизации. Андрей Ревяшко рассказал, какие инновационные решения дают технологическое преимущество для разработки интернет-магазинов и как компания улучшает пользовательский опыт своих клиентов.",
  },
  {
    id: 5,
    link: "http://cloud.tvigle.ru/video/5828885/?playerId=49&partnerId=2398",
    video: "/images/videoPreview5.png",
    name: "Александр Сахаров",
    job: "Директор департамента цифровой трансформации ПСБ",
    desc: "В программе обсудили, какие задачи стоят перед IT-департаментом ПСБ и как изменился подход к цифровизации за последнее время."
  },
  {
    id: 6,
    link: "http://cloud.tvigle.ru/video/5828598/?playerId=49&partnerId=2398",
    video: "/images/videoPreview6.png",
    name: "Сергей Меркулов",
    job: "Директор по цифровой трансформации (CDTO) Segezha Group.",
    desc: "В программе поговорили о цифровой трансформации Segezha Group и узнали, каково её влияние на экологическую составляющую лесоперерабатывающей отрасли."
  },
];
</script>

<style lang="scss" module>
@import "scss/vars";

.heroBlock {
  height: 100vh;
  position: relative;
  transform: translateY(-$navbar-height);
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
}

.text {
  font-weight: 300;
  letter-spacing: $text-default-spacing;
}

.pageTitle {
  color: white;
  font-size: $text-xl;
  margin: 0 0 50px;
}

.donut {
}

.textLightGrey {
  color: white;
  font-size: $text-lg;
  opacity: 0.6;
  margin: 0 0 20px;
}

.textDarkGrey {
  color: $grey;
  font-size: $text-sm;
  margin: 0 0 40px;
}

.container {
  max-width: 800px;
}

.textUpButton {
  color: $grey;
  opacity: 0.6;
  font-size: $text-default;
  margin: 0 0 10px;
}

.textInButton {
  color: white;
}

.videoContainer {
  display: flex;
  flex-direction: column;
}

.textName {
  color: white;
  font-size: $text-default;
  margin: 30px 0 20px;
}

.svg {
  height: 30px;
  padding: 15px 40px;
  z-index: 3;
}

.svgBackground {
  background: var(--bg-light, rgba(29, 29, 29, 0.85));
  border-radius: 10px;
  z-index: 3;
}

.textJob {
  color: $grey;
  font-size: $text-default;
  margin: 0;
}

.video {
  height: 300px;
  background-size: cover;
  background-position: center center;
  display: flex;
  justify-content: center;
  align-items: center;
  filter: grayscale(100%);
}

.video:hover {
  & .svgBackground {
    background: $grey;
  }
}

.video::after {
  content: "";
  position: absolute;
  background: rgba(0, 0, 0, 0.6);
  z-index: 2;
  height: 300px;
  width: 100%;
}

.textDesc {
  color: $grey;
  font-size: $text-sm;
  margin: 30px 0 0;
}

.textContainer {
  max-width: 800px;
}

.videoContainer {
  margin-top: 70px;

  &:first-child {
    margin-top: 0;
  }
}

.button {
  margin-top: 15px;
}

.secondContainer {
  padding: 0 20px;
}

@media screen and (max-width: 1024px) {
  .donut {
    display: none;
  }

  .heroBlock {
    height: auto;
    margin-top: 100px;
  }
  .container {
    max-width: none;
  }

  .pageTitle {
    margin-bottom: 25px;
  }

  .textName {
    margin-bottom: 10px;
  }

  .textJob {
    margin-bottom: 10px;
  }

  .textDesc {
    margin: 0;
  }
}
</style>
