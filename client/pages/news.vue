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
    image: "/images/author_project.png",
    created_at: "05.04.2023",
    to: "/author-project",
    label: "SERVITY запускает авторский проект на телеканале Про Бизнесс",
    description:
      "“IT сегодня” - Новая программа на телеканале Про Бизнесс. В гости к авторам проекта приходят представители IT-индустрии и делятся своим экспертным мнением, взглядом на проиходнящие изменения в отрасли, опытом внедрения цифровых проектов и обсуждают  перспективы развития отечественного технологического стека.",
  },
  {
    id: 2,
    image: "/images/news_itclub.jpg",
    created_at: "25.07.2023",
    to: "/author-project",
    label: "IT-клуб SERVITY проводит первое мероприятие в рамках серии встреч",
    
    description:
      `В Москве прошло первое мероприятие из серии встреч закрытого IT-клуба, инициатором которого выступила компания SERVITY. Клуб объединяет экспертов и практиков в сфере ИТ с целью обсуждения актуальных тем, обмена опытом и знаниями.
Первая встреча посвящена обзору основных рыночных тенденций в области IT, российского рынка решений для ЦОДов, технологических стратегиях в условиях новых цепочек поставок. Приглашенный спикер и гости поделились своим практическим опытом и мнением о перспективах модернизации отечественного технологического стека."Открывая двери IT-клуба, мы стремимся создать уникальное нетворкинг-пространство для обмена идеями и опытом между профессионалами в области информационных технологий, где каждый сможет обзавестись новыми контактами, а также найти вдохновение для создания инноваций в своих сферах деятельности", - отметил Евгений Черных, коммерческий директор SERVITY.
Мероприятия будут закрытыми и доступными только для участников IT-клуба. Чтобы стать участником, пожалуйста, свяжитесь с организаторами по email social@servity.ru.`
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
