<template>
  <Container :class="classes" id="block-footer">
    <div :class="`${$style.mainFLex}`">
      <div :class="`${$style.mainFLexMobileLogo}`">
        <Logo :dark="blocks.dark" />
        <socials :class="`${$style.socialMobile}`" />
      </div>
      <div :class="`${$style.mainFLexMobile}`">
        <div :class="`${$style.List}`">
          <NuxtLink to="/#about" :class="`${$style.linkContent}`">
            <div :class="`${$style.text} ${$style.listName}`">КОМПАНИЯ</div>
          </NuxtLink>
          <div :class="`${$style.text} ${$style.listContent}`">
            <NuxtLink to="/#history" :class="`${$style.linkContent}`"> ИСТОРИЯ </NuxtLink>
          </div>
          <div :class="`${$style.text} ${$style.listContent}`">
            <NuxtLink to="/#partner-statuses" :class="`${$style.linkContent}`">
              ВЕНДОРЫ
            </NuxtLink>
          </div>
          <!-- <div :class="`${$style.text} ${$style.listContent}`">
            <a href="/privacy" :class="`${$style.linkContent}`"> ЛИЦЕНЗИИ И СЕРТИФИКАТЫ </a>
          </div> -->
          <div :class="`${$style.text} ${$style.listContent}`">
            <NuxtLink to="/#servity-in-faces" :class="`${$style.linkContent}`">
              SERVITY В ЛИЦАХ
            </NuxtLink>
          </div>
        </div>
        <div :class="`${$style.List}`">
          <div :class="`${$style.text} ${$style.listName}`">КОМПЕТЕНЦИИ</div>
          <div :class="`${$style.text} ${$style.listContent}`">
            <NuxtLink to="/equipment" :class="`${$style.linkContent}`"> ОБОРУДОВАНИЕ </NuxtLink>
          </div>
          <div :class="`${$style.text} ${$style.listContent}`">
            <NuxtLink to="/projects" :class="`${$style.linkContent}`"> ПРОЕКТЫ </NuxtLink>
          </div>
          <div :class="`${$style.text} ${$style.listContent}`">
            <NuxtLink to="/" :class="`${$style.linkContent}`"> ГАРАНТИИ </NuxtLink>
          </div>
        </div>
        <div :class="`${$style.List}`">
          <div :class="`${$style.text} ${$style.listName}`">СОБЫТИЯ</div>
          <div :class="`${$style.text} ${$style.listContent}`">
            <NuxtLink to="/author-project" :class="`${$style.linkContent}`">
              ТВ-ПРОЕКТ
            </NuxtLink>
          </div>
          <div :class="`${$style.text} ${$style.listContent}`">
            <NuxtLink to="/events" :class="`${$style.linkContent}`"> МЕРОПРИЯТИЯ </NuxtLink>
          </div>
          <div :class="`${$style.text} ${$style.listContent}`">
            <NuxtLink to="/news" :class="`${$style.linkContent}`"> НОВОСТИ </NuxtLink>
          </div>
        </div>
        <div :class="`${$style.List}`">
          <div :class="`${$style.text} ${$style.listName}`">КОНТАКТЫ</div>
          <div :class="`${$style.text} ${$style.listContent}`">
            <NuxtLink to="/contacts" :class="`${$style.linkContent}`"> ВСЕ КОНТАКТЫ </NuxtLink>
          </div>
          <div :class="`${$style.text} ${$style.listContent}`">
            <a href="tel:+74959020099" :class="$style.linkContent"> +7-495-902-00-99 </a>
          </div>
          <div :class="`${$style.text} ${$style.listContent}`">
            <a href="mailto:office@servity.ru" :class="$style.linkContent"> INFO@SERVITY.RU </a>
          </div>
          <div :class="`${$style.text} ${$style.listContent}`">
            Г. МОСКВА, УЛ. ШАБОЛОВКА, Д.26, СТР. 12
          </div>
        </div>
      </div>
<!--      <div :class="`${$style.mainFLexMobile}`">-->
<!--        -->
<!--      </div>-->
      <socials :class="`${$style.socialPc}`" :dakr="blocks.dark" />
    </div>
    <hr :class="`${$style.row}`" />
    <div :class="`${$style.mainFLex}`">
      <p :class="`${$style.text} ${$style.TextLgGrey}`">©️ 2023 SERVITY. ВСЕ ПРАВА ЗАЩИЩЕНЫ</p>
      <p :class="`${$style.text} ${$style.textLg}`">
        <NuxtLink to="/policy" :class="`${$style.linkContent}`">
          ПОЛИТИКА КОНФИДЕНЦИАЛЬНОСТИ
        </NuxtLink>
      </p>
    </div>
  </Container>
</template>

<script setup lang="ts">
import BlocksType from "~/types/Blocks.type";
import { Ref } from "vue";

const blocks = inject<Ref<BlocksType>>("blocks");

const $style = useCssModule();

const classes = computed(() => [$style.container, !blocks?.value.dark ? $style.white : undefined]);
</script>

<style lang="scss" module>
@import "scss/vars";

.socialMobile {
  display: none;
}

.container {
  margin-top: 210px;

  &.white {
    & .listName {
      color: $black
    }

    & a {
      color: $black;
    }

    & li {
      color: $black;
    }

    & .TextLgGrey {
      color: $black;
    }
  }
}

.TextLgGrey {
  font-size: 2.8rem;
  color: white;
  opacity: 0.6;
  letter-spacing: $text-default-spacing;
}

.textLg {
  font-size: 2.8rem;
  color: white;
  letter-spacing: $text-default-spacing;
}

.row {
  margin-bottom: 20px;
  width: calc(100% - 40px);
}

.social:hover {
  & path {
    stroke: $white;
  }
  transition: 0.2s;
}

.mainFLexMobile {
  display: grid;
  gap: 80px;
  grid-template-columns: auto auto auto auto;
}

.social {
  margin-right: 10px;
}

.socials {
  display: flex;
  justify-content: flex-end;
  align-items: flex-start;
}

.List {
  list-style-type: none;
  margin-top: 0;
}

.text {
  font-weight: 300;
}

.mainFLex {
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
}

.listName {
  font-size: 3rem;
  color: white;
  margin-bottom: 20px;
  letter-spacing: $text-default-spacing;
}

.listContent {
  font-size: 2rem;
  margin-bottom: 15px;
  color: white;
  opacity: 0.6;
  letter-spacing: $text-default-spacing;
}

.linkContent {
  color: white;
  text-decoration: none;
}

@media screen and (max-width: 1328px) {
  .mainFLexMobile {
    grid-template-columns: auto auto;
    grid-template-rows: auto auto;
  }
}

@media screen and (max-width: 768px) {
  .List {
    padding: 0 40px 0 0;
  }

  .mainFLexMobileLogo {
    display: flex;
    justify-content: space-between;
  }

  .mainFLex {
    flex-direction: column;
    padding-left: 20px;
    margin-right: auto;
    margin-left: auto;
  }

  .mainFLexMobile {
    margin-top: 30px;
    grid-template-columns: auto auto;
    grid-template-rows: auto auto;
  }

  .socialMobile {
    display: block;
  }

  .TextLgGrey {
    margin-bottom: 10px;
  }

  .textLg {
    margin-bottom: 40px;
  }

  .socialPc {
    display: none;
  }
}
</style>
