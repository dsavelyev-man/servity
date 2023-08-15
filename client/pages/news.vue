<template>
  <Container>
    <p :class="`${$style.text} ${$style.pageTitle}`">НОВОСТИ</p>
          <client-only>
            <Post v-for="item in news" :item="item" :key="item.id"/>
          </client-only>
  </Container>
</template>

<script setup>
import Post from "@/components/pages/news/Post.vue"

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

.pageTitle {
  color: $black;
  font-size: $text-xl;
}


.text {
  font-weight: 300;
  letter-spacing: $text-default-spacing;
}

@media screen and (max-width: 1024px) {

  .pageTitle {
    margin-left: 15px;
  }
}
</style>
