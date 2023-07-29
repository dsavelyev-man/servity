<template>
  <Container>
    <div :class="`${$style.heroBlock}`">
      <div :class="`${$style.container}`">
        <h2 :class="`${$style.text} ${$style.pageTitle}`">АВТОРСКИЙ ПРОЕКТ</h2>
        <h3 :class="`${$style.text} ${$style.textLightGrey}`">
          IT СЕГОДНЯ – АВТОРСКИЙ ПРОЕКТ КОМПАНИИ SERVITY НА ТЕЛЕКАНАЛЕ ПРО БИЗНЕС
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
        <iframe
          :src="`${item.video}`"
          height="300"
          frameborder="no"
          scrolling="no"
          webkitallowfullscreen=""
          mozallowfullscreen=""
          allowfullscreen=""
        ></iframe>
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
    video: "http://cloud.tvigle.ru/video/5828500/?playerId=49&partnerId=2398",
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
    video: "http://cloud.tvigle.ru/video/5828454/?playerId=49&partnerId=2398",
    name: "Павел Чернышин",
    job: "Директор по развитию бизнеса «ТКО-Информ»",
    desc: "Обсуждаем, как проходит цифровизация отрасли обращения с отходами и какова роль регуляторов в формировании требований к цифровым решениям",
  },
  {
    id: 3,
    video: "http://cloud.tvigle.ru/video/5828381/?playerId=49&partnerId=2398",
    name: "Карим Кузахметов",
    job: "Вице-президент Sitronics Group",
    desc: "Какие задачи сегодня стоят перед Sitronics Group и как изменился подход к цифровизации за последний год. Что такое «умный город» и как развивается система «умного города» за пределами столицы",
  },
  {
    id: 4,
    video: "http://cloud.tvigle.ru/video/5828205/?playerId=49&partnerId=2398",
    name: "Андрей Ревяшко",
    job: "СТО компании «М.Видео-Эльдорадо»",
    desc: "В компании «М.Видео-Эльдорадо» активно развиваются процессы цифровизации. Андрей Ревяшко рассказал, какие инновационные решения дают технологическое преимущество для разработки интернет-магазинов и как компания улучшает пользовательский опыт своих клиентов.",
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

.textJob {
  color: $grey;
  font-size: $text-default;
  margin: 0;
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
