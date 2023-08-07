<template>
  <Container>
    <p :class="`${$style.text} ${$style.pageTitle}`">НОВОСТИ</p>
          <NuxtLink v-for="item in news" :key="item.id" :to="item.to" :class="`${$style.container} ${$style.link}`">
            <img :src="item.image" :class="`${$style.image}`" />
            <div :class="`${$style.textContainer}`">
              <p :class="`${$style.newsName} ${$style.text}`">{{ item.label }}</p>
              <p :class="`${$style.textDate} ${$style.text}`">{{ item.created_at }}</p>
              <p :class="`${$style.newsDes} ${$style.text}`">{{ item.description }}</p>
            </div>
          </NuxtLink>
  </Container>
</template>

<script setup>
const news = [
  {
    id: 1,
    image: "/images/newsTest.png",
    created_at: "05.04.2023",
    to: "/author-project",
    label: "Servity запускает авторский проект на телеканале Про Бизнесс",
    description:
      "“IT сегодня” - Новая программа на телеканале Про Бизнесс. В гости к Авторам проекта приходят представители IT-индустрии и делятся своим экспертным мнением, взглядом на проиходнящие изменения в отрасли, опытом внедрения цифровых проектов и обсуждают  перспективы развития отечественного технологического стека.",
  },
];
</script>

<style lang="scss" module>
@import "scss/vars";

.link {
  text-decoration: none;
}

.pageTitle {
  color: $black;
  font-size: $text-xl;
}

.textContainer {
  display: flex;
  flex-direction: column;
  color: $black;
}

.text {
  font-weight: 300;
  letter-spacing: $text-default-spacing;
}

.container {
  display: flex;
  margin-top: 3rem;
}

.textDate {
  font-size: $text-sm;
  font-weight: 500;
  margin-top: 20px;
}

.newsName {
  font-size: $text-md;
  margin: 0;
}

.newsDes {
  font-size: $text-sm;
}

.image {
  border-radius: 10px;
  margin-right: 15px;
  max-width: 324px;
  width: 100%;
}

@media screen and (max-width: 1024px) {
  .container {
    display: flex;
    flex-direction: column;
  }

  .image {
    padding-left: 10px;
    padding-right: 10px;
    width: calc(100% - 20px);
    max-width: none;
  }

  .textContainer {
    margin-left: 15px;
    margin-right: 15px;
  }

  .newsName {
    margin-top: 10px;
    margin-bottom: 10px;
  }

  .pageTitle {
    margin-left: 15px;
  }
}
</style>
