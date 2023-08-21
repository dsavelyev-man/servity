<template>
  <div ref="preloaderRef" class="preloader">
    <div class="preloader__wrap">
      <span :ref="setRef" v-for="letter in lettersForView" :data-anim="`flick${letter.random}`">{{letter.item}}</span>
    </div>
  </div>
</template>

<script setup>
const indexArr = [0, 0.15, 0.3, 0.45, 0.6, 0.75, 0.9, 1];
const letters = ['S', 'E', 'R', 'V', 'I', 'T', 'Y'];
const lettersForView = letters.map((item, index) => ({item, random: Math.floor(Math.random() * (letters.length - 1) + 1)}));

const itemsRefs = ref([])
const preloaderRef = ref()

const setRef = (el) => itemsRefs.value.push(el)

onMounted(() => {
  const hidePreloader =() => {
    var self = this;
    setTimeout(function () {
      preloaderRef.value.classList.add('isHide');
    }, 3000);
    setTimeout(function () {
      preloaderRef.value.style = "display:none";
    }, 5000);

    // self.showPage();
    window.localStorage.setItem('servity_preloader', true);
  }

  const loadedAnim = () => {
    const timeout = 200;

    for (let i = 0; itemsRefs.value.length > i; i++) {
      setTimeout(function () {
        itemsRefs.value[i].dataset.anim = '';
        itemsRefs.value[i].classList.add('isLoaded');
        if (itemsRefs.value.length - 1 === i) {
          setTimeout(function () {
            itemsRefs.value[i].classList.add('isShown');
          }, 1000);
          // self.hidePreloader();
          hidePreloader()
        }
      }, i * timeout);
    }
  }

  const showPage = () => {
    document.body.classList.remove('isLoading');
  }

  if (window.localStorage.getItem('servity_preloader')) {
    preloaderRef.value.classList.add('isHide');
    showPage();

  } else {
    loadedAnim();
  }
})

// onMounted(() => {
//   (function () {
//
//     var indexArr = [0, 0.15, 0.3, 0.45, 0.6, 0.75, 0.9, 1];
//     var letters = ['S', 'E', 'R', 'V', 'I', 'T', 'Y'];
//
//     var preloader = {
//       init: function () {
//         this.body = document.querySelector('body');
//
//         this.makeStructure();
//       },
//       makeStructure: function () {
//
//         this.preloaderElement = document.createElement('DIV');
//         this.preloaderElement.classList.add('preloader', "giorgio");
//
//         var preloaderElements = this.getItem(7);
//         this.preloaderElement.innerHTML = '<div class="preloader__wrap">' +
//             preloaderElements + '</div>';
//
//         this.lettersElems = this.preloaderElement.querySelectorAll('span');
//
//         document.body.insertBefore(this.preloaderElement, document.body.childNodes[0]);
//       },
//       getItem (count) {
//         var result = '';
//         var lastRandom = 0;
//
//         for (var i = 0; count > i; i++) {
//           var random = this.getRdmIndex();
//
//           if (lastRandom === random && (random + 2) < indexArr.length) {
//             random += 2;
//           }
//
//           lastRandom = random;
//           result += '<span data-anim="flick' + random + '">' + letters[i] +
//               '</span>';
//         }
//
//         return result;
//       },
//       getRdmIndex () {
//         var index = 1;
//         var random = Math.random();
//
//         for (var i = 1; i < indexArr.length; i++) {
//           if (indexArr[i] < random) {
//             index = i;
//           }
//         }
//
//         return index;
//       },
//       loadedAnim () {
//         var timeout = 200;
//
//         for (var i = 0; this.lettersElems.length > i; i++) {
//           var self = this;
//           (function (i, self) {
//             setTimeout(function () {
//               self.lettersElems[i].dataset.anim = '';
//               self.lettersElems[i].classList.add('isLoaded');
//               if (self.lettersElems.length - 1 === i) {
//                 setTimeout(function () {
//                   self.preloaderElement.classList.add('isShown');
//                 }, 1000);
//                 self.hidePreloader();
//               }
//             }, i * timeout);
//           })(i, self);
//         }
//       },
//       hidePreloader() {
//         var self = this;
//         setTimeout(function () {
//           self.preloaderElement.classList.add('isHide');
//         }, 3000);
//         setTimeout(function () {
//           self.preloaderElement.style = "display:none";
//         }, 5000);
//
//         self.showPage();
//         window.localStorage.setItem('servity_preloader', true);
//       },
//       showPage() {
//         this.body.classList.remove('isLoading');
//       }
//     };
//
//     preloader.init();
//
//     window.addEventListener('load', function () {
//
//       if (window.localStorage.getItem('servity_preloader')) {
//         preloader.preloaderElement.classList.add('isHide');
//         preloader.showPage();
//
//       } else {
//         preloader.loadedAnim();
//       }
//     });
//   })();
// })

</script>

<style lang="scss">
@import "../scss/vars";

.preloader {
  position: fixed;
  left: 0;
  top: 0;
  width: 100vw;
  height: 100vh;
  max-width: 100%;
  max-height: 100%;
  background-color: #fff;
  z-index: 10;
  pointer-events: none;
  transition: opacity 0.55ms;
}
.preloader.isHide {
  animation: isHide 2s forwards 1;
}
.preloader__wrap {
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  margin: auto;
  width: 30rem;
  height: 4.5rem;
  font-weight: 600;
  text-align: center;
}
.preloader__wrap span {
  font-size: 4.5rem;
  min-width: 2.7rem;
  letter-spacing: 1.2rem;
  color: #000;
  position: relative;
  display: inline-block;
}
.preloader__wrap span.isLoaded {
  animation: showLetter 1s forwards;
}
.preloader__wrap span.isLoaded:after,
.preloader__wrap span.isLoaded:before {
  opacity: 0;
  transition: all 150ms ease-out;
}
.isShown .preloader__wrap span:nth-child(5),
.isShown .preloader__wrap span:nth-child(6) {
  animation: showLetterIT 0.75s 0.55s forwards ease-in-out;
}
.preloader__wrap span:nth-child(2) {
  animation-delay: 170ms;
}
.preloader__wrap span:nth-child(3) {
  animation-delay: 230ms;
}
.preloader__wrap span:nth-child(4) {
  animation-delay: 300ms;
}
.preloader__wrap span:nth-child(5) {
  animation-delay: 330ms;
}
.preloader__wrap span:nth-child(6) {
  animation-delay: 370ms;
}
.preloader__wrap span:nth-child(7) {
  animation-delay: 400ms;
}
.preloader__wrap span[data-anim="flick1"]:before {
  animation-name: flick1;
}
.preloader__wrap span[data-anim="flick2"]:before {
  animation-name: flick2;
}
.preloader__wrap span[data-anim="flick3"]:before {
  animation-name: flick3;
}
.preloader__wrap span[data-anim="flick4"]:before {
  animation-name: flick4;
}
.preloader__wrap span[data-anim="flick5"]:before {
  animation-name: flick5;
}
.preloader__wrap span[data-anim="flick6"]:before {
  animation-name: flick6;
}
.preloader__wrap span[data-anim="flick7"]:before {
  animation-name: flick7;
}
.preloader__wrap span:before,
.preloader__wrap span:after {
  background-color: #fff;
  display: inline-block;
  position: absolute;
  left: 0;
  right: 0;
  color: #000;
}
.preloader__wrap span:after {
  content: '0';
}
.preloader__wrap span:before {
  content: '1';
  opacity: 0;
  z-index: 2;
  animation-duration: 1.5s;
  animation-iteration-count: infinite;
}
@-moz-keyframes isHide {
  0% {
    opacity: 1;
  }
  50% {
    opacity: 0;
  }
  99% {
    opacity: 0;
    display: block;
  }
  100% {
    opacity: 0;
    display: none;
  }
}
@-webkit-keyframes isHide {
  0% {
    opacity: 1;
  }
  50% {
    opacity: 0;
  }
  99% {
    opacity: 0;
    display: block;
  }
  100% {
    opacity: 0;
    display: none;
  }
}
@-o-keyframes isHide {
  0% {
    opacity: 1;
  }
  50% {
    opacity: 0;
  }
  99% {
    opacity: 0;
    display: block;
  }
  100% {
    opacity: 0;
    display: none;
  }
}
@keyframes isHide {
  0% {
    opacity: 1;
  }
  50% {
    opacity: 0;
  }
  99% {
    opacity: 0;
    display: block;
  }
  100% {
    opacity: 0;
    display: none;
  }
}
@-moz-keyframes showLetter {
  0% {
    color: transparent;
  }
  78% {
    color: $grey;
  }
  79% {
    color: $grey;
  }
  100% {
    color: #000;
  }
}
@-webkit-keyframes showLetter {
  0% {
    color: transparent;
  }
  78% {
    color: $grey;
  }
  79% {
    color: $grey;
  }
  100% {
    color: #000;
  }
}
@-o-keyframes showLetter {
  0% {
    color: transparent;
  }
  78% {
    color: $grey;
  }
  79% {
    color: $grey;
  }
  100% {
    color: #000;
  }
}
@keyframes showLetter {
  0% {
    color: transparent;
  }
  78% {
    color: $grey;
  }
  79% {
    color: $grey;
  }
  100% {
    color: #000;
  }
}
@-moz-keyframes showLetterIT {
  0% {
    color: #000;
  }
  100% {
    color: $grey;
  }
}
@-webkit-keyframes showLetterIT {
  0% {
    color: #000;
  }
  100% {
    color: $grey;
  }
}
@-o-keyframes showLetterIT {
  0% {
    color: #000;
  }
  100% {
    color: $grey;
  }
}
@keyframes showLetterIT {
  0% {
    color: #000;
  }
  100% {
    color: $grey;
  }
}
@-moz-keyframes flick1 {
  0% {
    opacity: 0;
  }
  25% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}
@-webkit-keyframes flick1 {
  0% {
    opacity: 0;
  }
  25% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}
@-o-keyframes flick1 {
  0% {
    opacity: 0;
  }
  25% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}
@keyframes flick1 {
  0% {
    opacity: 0;
  }
  25% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}
@-moz-keyframes flick2 {
  0% {
    opacity: 0;
  }
  75% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}
@-webkit-keyframes flick2 {
  0% {
    opacity: 0;
  }
  75% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}
@-o-keyframes flick2 {
  0% {
    opacity: 0;
  }
  75% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}
@keyframes flick2 {
  0% {
    opacity: 0;
  }
  75% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}
@-moz-keyframes flick3 {
  0% {
    opacity: 0;
  }
  14% {
    opacity: 0;
  }
  15% {
    opacity: 1;
  }
  24% {
    opacity: 1;
  }
  25% {
    opacity: 0;
  }
  74% {
    opacity: 0;
  }
  75% {
    opacity: 1;
  }
  99% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}
@-webkit-keyframes flick3 {
  0% {
    opacity: 0;
  }
  14% {
    opacity: 0;
  }
  15% {
    opacity: 1;
  }
  24% {
    opacity: 1;
  }
  25% {
    opacity: 0;
  }
  74% {
    opacity: 0;
  }
  75% {
    opacity: 1;
  }
  99% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}
@-o-keyframes flick3 {
  0% {
    opacity: 0;
  }
  14% {
    opacity: 0;
  }
  15% {
    opacity: 1;
  }
  24% {
    opacity: 1;
  }
  25% {
    opacity: 0;
  }
  74% {
    opacity: 0;
  }
  75% {
    opacity: 1;
  }
  99% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}
@keyframes flick3 {
  0% {
    opacity: 0;
  }
  14% {
    opacity: 0;
  }
  15% {
    opacity: 1;
  }
  24% {
    opacity: 1;
  }
  25% {
    opacity: 0;
  }
  74% {
    opacity: 0;
  }
  75% {
    opacity: 1;
  }
  99% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}
@-moz-keyframes flick4 {
  0% {
    opacity: 0;
  }
  5% {
    opacity: 1;
  }
  74% {
    opacity: 1;
  }
  75% {
    opacity: 0;
  }
  84% {
    opacity: 0;
  }
  85% {
    opacity: 1;
  }
  99% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}
@-webkit-keyframes flick4 {
  0% {
    opacity: 0;
  }
  5% {
    opacity: 1;
  }
  74% {
    opacity: 1;
  }
  75% {
    opacity: 0;
  }
  84% {
    opacity: 0;
  }
  85% {
    opacity: 1;
  }
  99% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}
@-o-keyframes flick4 {
  0% {
    opacity: 0;
  }
  5% {
    opacity: 1;
  }
  74% {
    opacity: 1;
  }
  75% {
    opacity: 0;
  }
  84% {
    opacity: 0;
  }
  85% {
    opacity: 1;
  }
  99% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}
@keyframes flick4 {
  0% {
    opacity: 0;
  }
  5% {
    opacity: 1;
  }
  74% {
    opacity: 1;
  }
  75% {
    opacity: 0;
  }
  84% {
    opacity: 0;
  }
  85% {
    opacity: 1;
  }
  99% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}
@-moz-keyframes flick5 {
  0% {
    opacity: 0;
  }
  5% {
    opacity: 1;
  }
  95% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}
@-webkit-keyframes flick5 {
  0% {
    opacity: 0;
  }
  5% {
    opacity: 1;
  }
  95% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}
@-o-keyframes flick5 {
  0% {
    opacity: 0;
  }
  5% {
    opacity: 1;
  }
  95% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}
@keyframes flick5 {
  0% {
    opacity: 0;
  }
  5% {
    opacity: 1;
  }
  95% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}
@-moz-keyframes flick6 {
  0% {
    opacity: 0;
  }
  55% {
    opacity: 1;
  }
  75% {
    opacity: 1;
  }
  76% {
    opacity: 0;
  }
  100% {
    opacity: 0;
  }
}
@-webkit-keyframes flick6 {
  0% {
    opacity: 0;
  }
  55% {
    opacity: 1;
  }
  75% {
    opacity: 1;
  }
  76% {
    opacity: 0;
  }
  100% {
    opacity: 0;
  }
}
@-o-keyframes flick6 {
  0% {
    opacity: 0;
  }
  55% {
    opacity: 1;
  }
  75% {
    opacity: 1;
  }
  76% {
    opacity: 0;
  }
  100% {
    opacity: 0;
  }
}
@keyframes flick6 {
  0% {
    opacity: 0;
  }
  55% {
    opacity: 1;
  }
  75% {
    opacity: 1;
  }
  76% {
    opacity: 0;
  }
  100% {
    opacity: 0;
  }
}
@-moz-keyframes flick7 {
  0% {
    opacity: 0;
  }
  35% {
    opacity: 0;
  }
  36% {
    opacity: 1;
  }
  76% {
    opacity: 1;
  }
  77% {
    opacity: 0;
  }
  100% {
    opacity: 0;
  }
}
@-webkit-keyframes flick7 {
  0% {
    opacity: 0;
  }
  35% {
    opacity: 0;
  }
  36% {
    opacity: 1;
  }
  76% {
    opacity: 1;
  }
  77% {
    opacity: 0;
  }
  100% {
    opacity: 0;
  }
}
@-o-keyframes flick7 {
  0% {
    opacity: 0;
  }
  35% {
    opacity: 0;
  }
  36% {
    opacity: 1;
  }
  76% {
    opacity: 1;
  }
  77% {
    opacity: 0;
  }
  100% {
    opacity: 0;
  }
}
@keyframes flick7 {
  0% {
    opacity: 0;
  }
  35% {
    opacity: 0;
  }
  36% {
    opacity: 1;
  }
  76% {
    opacity: 1;
  }
  77% {
    opacity: 0;
  }
  100% {
    opacity: 0;
  }
}

</style>