<template>
  <section class="d-flex align-items-center justify-content-center flex-column p-4">
    <h3 class="h3 text-uppercase color-light underline-decoration pb-1 mb-4" id="testimonials">
      {{ $t('testimonials.title') }}
    </h3>

    <carousel :items-to-show="isMobile ? 1 : 2" class="custom-carousel">
      <slide index="1" class="custom-slide">
        <div class="testimonials__card">
          <img src="https://storage.builderall.com//franquias/2/7055146/editor-html/9685481.png" alt="Tatiana galviz" class="testimonials__avatar"/>
          <p :class="`p-bold mb-1`">Tatiana Galvis</p>
          <p :class="`color-gray mb-2`">Administrator</p>
          <p class="p-small-regular color-gray mb-1"> {{ $t('testimonials.text_one') }}</p>
          <div class="d-flex align-items-center justify-content-between">
            <div>
              <img src="../../../assets/icons/testimonials/star.svg" alt="star" class="testimonials__star"/>
              <img src="../../../assets/icons/testimonials/star.svg" alt="star" class="testimonials__star"/>
              <img src="../../../assets/icons/testimonials/star.svg" alt="star" class="testimonials__star"/>
              <img src="../../../assets/icons/testimonials/star.svg" alt="star" class="testimonials__star"/>
              <img src="../../../assets/icons/testimonials/star.svg" alt="star" class="testimonials__star"/>
            </div>

            <p class="p-small-regular color-gray">5.0 review</p>
          </div>
        </div>
      </slide>

      <slide index="2" class="custom-slide">
        <div class="testimonials__card">
          <img src="https://storage.builderall.com//franquias/2/7055146/editor-html/9685475.png" alt="Andrea Diaz" class="testimonials__avatar"/>
          <p :class="`p-bold mb-1`">Juan Castro</p>
          <p :class="`color-gray mb-2`">Teacher</p>
          <p class="p-small-regular color-gray mb-1">{{ $t('testimonials.text_two') }}</p>
          <div class="d-flex align-items-center justify-content-between">
            <div>
              <img src="../../../assets/icons/testimonials/star.svg" alt="star" class="testimonials__star"/>
              <img src="../../../assets/icons/testimonials/star.svg" alt="star" class="testimonials__star"/>
              <img src="../../../assets/icons/testimonials/star.svg" alt="star" class="testimonials__star"/>
              <img src="../../../assets/icons/testimonials/star.svg" alt="star" class="testimonials__star"/>
              <img src="../../../assets/icons/testimonials/star.svg" alt="star" class="testimonials__star"/>
            </div>

            <p class="p-small-regular color-gray">5.0 review</p>
          </div>
        </div>
      </slide>

      <slide index="3" class="custom-slide">
        <div class="testimonials__card">
          <img src="https://storage.builderall.com//franquias/2/7055146/editor-html/9685479.png" alt="Christian Ford" class="testimonials__avatar"/>
          <p :class="`p-bold mb-1`">Javier Pertuz</p>
          <p :class="`color-gray mb-2`">Investor</p>
          <p class="p-small-regular color-gray mb-1">{{ $t('testimonials.text_three') }}</p>
          <div class="d-flex align-items-center justify-content-between">
            <div>
              <img src="../../../assets/icons/testimonials/star.svg" alt="star" class="testimonials__star"/>
              <img src="../../../assets/icons/testimonials/star.svg" alt="star" class="testimonials__star"/>
              <img src="../../../assets/icons/testimonials/star.svg" alt="star" class="testimonials__star"/>
              <img src="../../../assets/icons/testimonials/star.svg" alt="star" class="testimonials__star"/>
              <img src="../../../assets/icons/testimonials/star.svg" alt="star" class="testimonials__star"/>
            </div>

            <p class="p-small-regular color-gray">5.0 review</p>
          </div>
        </div>
      </slide>

      <slide index="4" class="custom-slide">
        <div class="testimonials__card">
          <img src="https://storage.builderall.com//franquias/2/7055146/editor-html/9685476.png" alt="Andrea Diaz" class="testimonials__avatar"/>
          <p :class="`p-bold mb-1`">Luz Ruiz</p>
          <p :class="`color-gray mb-2`">Student</p>
          <p class="p-small-regular color-gray mb-1">{{ $t('testimonials.text_four') }}</p>
          <div class="d-flex align-items-center justify-content-between">
            <div>
              <img src="../../../assets/icons/testimonials/star.svg" alt="star" class="testimonials__star"/>
              <img src="../../../assets/icons/testimonials/star.svg" alt="star" class="testimonials__star"/>
              <img src="../../../assets/icons/testimonials/star.svg" alt="star" class="testimonials__star"/>
              <img src="../../../assets/icons/testimonials/star.svg" alt="star" class="testimonials__star"/>
              <img src="../../../assets/icons/testimonials/star.svg" alt="star" class="testimonials__star"/>
            </div>

            <p class="p-small-regular color-gray">5.0 review</p>
          </div>
        </div>
      </slide>

      <template #addons>
        <navigation />
        <pagination />
      </template>
    </carousel>
  </section>
</template>

<script>
import 'vue3-carousel/dist/carousel.css';
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel';

export default {
  name: 'TestimonialsStateless',

  props: {
    isMobile: {
      type: String,
      required: true
    }
  },

  components: {
    Carousel,
    Slide,
    Pagination,
    Navigation,
  }
}
</script>

<style>
.custom-carousel {
  width: 80%;
}

.custom-slide {
  padding: 1rem;
}

.testimonials__card {
  background-color: white;
  padding: 1rem 2rem;
  border-radius: 1rem;
  width: 90%;
  -webkit-box-shadow: 0px 0px 14px 1px rgba(255,255,255,1);
  -moz-box-shadow: 0px 0px 14px 1px rgba(255,255,255,1);
  box-shadow: 0px 0px 14px 1px rgba(255,255,255,1);
  position: relative;
}

.testimonials__avatar {
  height: 5rem;
  width: 5rem;
  position: absolute;
  top: -1rem;
  left: -1rem;
}

.testimonials__star {
  height: 1.8rem;
  width: 1.8rem;
}

@media (max-width: 767px) {
  .custom-carousel {
    width: 100%;
  }

  .testimonials__card {
    width: 100%;
  }
}
</style>