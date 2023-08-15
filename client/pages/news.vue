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
  {
    id: 2,
    image: "/images/newsTest.png",
    created_at: "05.04.2023",
    to: "/author-project",
    label: "Servity запускает авторский проект на телеканале Про Бизнесс",
    collapsible: true,
    description: `<p>Lorem ipsum dolor sit amet. Et voluptates quasi et dolorem dolores At quod voluptatum. Qui iusto sunt hic ducimus blanditiis ut laborum numquam? Et omnis alias est repellendus error qui voluptatum vero. </p><p>Aut iure numquam nam earum adipisci vel consectetur impedit non voluptatum maiores qui vero iusto vel magnam quisquam ea magnam ipsa. Aut voluptatibus similique qui odio eaque qui molestiae officia ut omnis voluptatem et harum galisum. Est animi sunt ab molestias quam ad praesentium odit aut iure dolorem! Hic explicabo dolores et nulla officiis aut voluptatem aliquam nam internos rerum et optio placeat qui dolorem officiis vel vero veritatis. </p><p>Et quaerat dolorem ad asperiores exercitationem qui laborum omnis qui soluta ipsam aut vitae officia vel neque repellendus. Qui minus soluta et iusto perspiciatis ad adipisci dicta. </p><p>Ut earum maiores sed officiis quidem eos impedit corrupti a galisum autem est magnam voluptatem. Nam ipsum repellat aut quia temporibus ut modi adipisci sit dolores sequi et molestiae provident a repellendus internos ea dolorem ipsum. Sed similique aspernatur et dolores quia est possimus ipsam ut laborum rerum et laborum aliquid. </p>`
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
