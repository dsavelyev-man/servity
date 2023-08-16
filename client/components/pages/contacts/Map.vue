<template>
  <div class="map">
    <div data-lat="57.638763" data-lng="33.966983" class="map__wrap" id="map"></div>
    <!--    <button class="map__zoom-in"></button>-->
    <!--    <button class="map__zoom-out"></button>-->
  </div>
</template>

<script setup lang="ts">
//@ts-ignore
import ymaps from "ymaps";

let MARKERS = [
  {
    lat: 55.723952,
    lng: 37.701709,
    address: {
      underground: "м. Волгоградский проспект",
      street: "109316, Москва, Остаповский пр-д, д. 3, стр. 23",
      tel: "+7 (495) 902-00-99",
      link: "info@servity.ru",
    },
  },
  // {
  //   lat: 59.903002,
  //   lng: 30.398181,
  //   address: {
  //     underground: "м. Елизаровская",
  //     street: "192019, Санкт-Петербург, ул. Седова, д.12, оф. 333",
  //     tel: "+7 (812) 309-96-91",
  //     link: "info@servity.ru",
  //   },
  // },
];

let map: any;

const markers = (maps: any) => {
  MARKERS.forEach((item) => {
    const addressTemplate = `
          <div class='address'>
             <div class='underground'> ${item.address.underground}
            </div>
            <div class='body'>
              <p> ${item.address.street}
              <p> ${item.address.tel}
            </div>
            <div class='link'>
              <a href = 'mailto:${item.address.link}'> ${item.address.link}</a>
            </div>
          </div>`;

    let myPlacemark = new maps.Placemark(
      [item.lat, item.lng],
      {},
      {
        iconLayout: "default#image",
        iconImageHref: "/images/marker.svg",
        iconImageOffset: [-42, -81],
        iconImageSize: [80, 81],
      }
    );

    //@ts-ignore
    map.geoObjects.add(myPlacemark);
    myPlacemark.properties.set("balloonContent", addressTemplate);
  });
};

onMounted(async () => {
  const maps = await ymaps.load("https://api-maps.yandex.ru/2.1/?lang=ru_RU");

  const mapEl = document.getElementById("map") as HTMLElement;
  const mapLat = parseFloat(mapEl.dataset.lat as string);
  const mapLng = parseFloat(mapEl.dataset.lng as string);

  // MARKERS = JSON.parse(mapEl.dataset.markers as string);

  map = new maps.Map(mapEl, {
    center: [mapLat, mapLng],
    zoom: 5,
    controls: [],
    // params
  });

  markers(maps);

  // let buttonZoomIn = document.querySelector('.map__zoom-in');
  // let buttonZoomOut = document.querySelector('.map__zoom-out');
  // buttonZoomIn.addEventListener('click', () => {
  //   this.map.setZoom(this.map.getZoom() + 1);
  // });
  // buttonZoomOut.addEventListener('click', () => {
  //   this.map.setZoom(this.map.getZoom() - 1);
  // });

  if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
    map.behaviors.disable("drag");
  }
});
</script>

<style lang="scss">
.map {
  position: relative;

  &__zoom-in,
  &__zoom-out {
    position: absolute;
    right: 2rem;
    top: calc(50% - 2rem);
    width: 3rem;
    height: 3rem;
    padding: 0;

    &:active {
      outline: none;
    }
  }

  &__zoom-out {
    top: calc(50% + 2rem);
  }

  &__wrap {
    min-height: 60rem;
    max-width: calc(100% - 20px);

    .ymaps-2-1-68-image {
    }

    .ymaps-2-1-68-map-copyrights-promo {
      display: none;
    }

    ymaps[class*="ground-pane"] {
      & > ymaps:nth-of-type(1) {
        filter: grayscale(100%) !important;
      }

      & > ymaps:nth-of-type(1) {
        filter: grayscale(100%) !important;
      }
    }
  }
}

ymaps * {
  font-family: Arial, serif !important;
}

@keyframes tuda-suda {
  0% {
    transform: translateY(0);
  }

  50% {
    transform: translateY(5px);
  }

  100% {
    transform: translateY(0);
  }
}
</style>
