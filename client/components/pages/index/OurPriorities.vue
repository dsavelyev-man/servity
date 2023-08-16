<template>
  <Container :class="$style.outPriorities" id="block-priorities">
    <h1 :class="$style.heading">НАШИ ПРИОРИТЕТЫ</h1>
    <div :class="$style.content">
      <div :class="$style.prioritiesWrapper">
        <div :class="$style.priorities" ref="scrollEl">
          <div v-for="priority in priorities" :class="$style.priority">
            <div :class="$style.wrapper">
              <p v-html="priority.label" :class="$style.label"></p>
              <div :class="$style.iconContainer">
                <CheckIcon />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div :class="$style.imageContainer">
        <img :class="$style.image" src="/images/out_priorities.png"/>
      </div>
    </div>
  </Container>
</template>

<script lang="ts" setup>
import CheckIcon from "~/components/svg/CheckIcon.vue";

const priorities = [
  {
    label: "Гарантия,<br/>сервис и поддержка",
  },
  {
    label: "Оперативность поставки и<br/> качественная логистика",
  },
  {
    label: "Ориентированность на решение<br/> задач клиента",
  },
  {
    label: "Техническая<br/>экспертиза",
  },
  {
    label: "Экспертный<br/>подход",
  },
  {
    label: "Сотрудничество с проверенными<br/> производителями",
  },
];
</script>

<style lang="scss" module>
@import "scss/vars";

.content {
  display: flex;
}

.image {
  max-width: 410px;
  max-height: 80vh;
  border-radius: 32px;
}

.outPriorities {
  height: 100vh;
  display: flex;
  justify-content: center;
  flex-direction: column;
}

.prioritiesWrapper {
  display: flex;
  align-items: center;
}

.heading {
  color: $white;
  opacity: 0.6;
  font-weight: 400;
  letter-spacing: $text-default-spacing;
  margin-top: 0;
  margin-bottom: 48px;
  font-size: $text-xl;
  padding: 0 20px;
}

.priorities {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 200px 200px;
  padding: 0 20px;
}

.label {
  color: $white;
  font-size: $text-default;
  letter-spacing: $text-default-spacing;
}

.iconContainer {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-top: 20px;
}

.priority {
  position: relative;
  padding: 24px;
}

.priority {
  &::after,
  &::before {
    background-color: $grey;
    margin: 0;
  }

  &:nth-child(1) {
    &::after {
      content: "";
      position: absolute;
      height: 1px;
      width: calc(100% - 56px);
      left: 50%;
      bottom: 0;

      transform: translateX(-50%);
    }

    &::before {
      content: "";
      position: absolute;
      width: 1px;
      height: calc(100% - 28px);
      right: 0;
      top: 0;
    }
  }

  &:nth-child(2) {
    &::after {
      content: "";
      position: absolute;
      height: 1px;
      width: calc(100% - 56px);
      left: 50%;
      bottom: 0;

      transform: translateX(-50%);
    }

    &::before {
      content: "";
      position: absolute;
      width: 1px;
      height: calc(100% - 28px);
      right: 0;
      top: 0;
    }
  }

  &:nth-child(3) {
    &::after {
      content: "";
      position: absolute;
      height: 1px;
      width: calc(100% - 56px);
      left: 50%;
      bottom: 0;

      transform: translateX(-50%);
    }
  }

  &:nth-child(4) {
    &::before {
      content: "";
      position: absolute;
      width: 1px;
      height: calc(100% - 28px);
      right: 0;
      bottom: 0;
    }
  }

  &:nth-child(5) {
    &::before {
      content: "";
      position: absolute;
      width: 1px;
      height: calc(100% - 28px);
      right: 0;
      bottom: 0;
    }
  }
}

@media screen and (max-width: 1324px) {
  .imageContainer {
    display: none;
  }

  .prioritiesWrapper {
    justify-content: center;
  }

  .content {
    display: block;
  }
}

@media screen and (max-width: 1024px) {
  .priorities {
    grid-template-columns: 1fr 1fr;
  }

  .heading {
    margin-top: 120px;
  }

  .priority {
    &:nth-child(1) {
      &::after {
        content: "";
        position: absolute;
        height: 1px;
        width: calc(100% - 28px);
        left: 0;
        bottom: 0;
        
        transform: translate(0);
      }

      &::before {
        content: "";
        position: absolute;
        width: 1px;
        height: calc(100% - 28px);
        right: 0;
        top: 0;
        
      }
    }

    &:nth-child(2) {
      &::after {
        content: "";
        position: absolute;
        height: 1px;
        width: calc(100% - 28px);
        right: 0;
        left: auto;
        bottom: 0;

        transform: translate(0);
      }

      &::before {
        width: 0;
      }
    }

    &:nth-child(3) {
      &::after {
        content: "";
        position: absolute;
        height: 1px;
        width: calc(100% - 28px);
        left: 0;
        bottom: 0;

        transform: translate(0);

      }

      &::before {
        content: "";
        position: absolute;
        width: 1px;
        height: calc(100% - 56px);
        right: 0;
        top: 50%;
        transform: translateY(-50%);
      }
    }

    &:nth-child(4) {
      &::after {
        content: "";
        position: absolute;
        height: 1px;
        width: calc(100% - 28px);
        right: 0;
        bottom: 0;
      }

      &::before {
        width: 0;
      }
    }

    &:nth-child(5) {
      &::before {
        content: "";
        position: absolute;
        width: 1px;
        height: calc(100% - 28px);
        right: 0;
        bottom: 0;
      }
    }
  }
}

@media screen and (max-width: 767px) {
  .priorities {
    grid-template-columns: 1fr;
  }

  .heading {
    margin-top: 120px;
  }

  .priority.priority {
    &::before {
      width: 0;
    }

    &::after {
      width: 100%;
    }
  }

  .outPriorities {
    min-height: 100vh;
    height: auto;
  }
}
</style>
