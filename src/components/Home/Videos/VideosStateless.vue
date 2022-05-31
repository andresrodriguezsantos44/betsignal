<template>
  <section class="d-flex align-items-center justify-content-center flex-column p-4">
    <h3 class="h3 text-uppercase color-light underline-decoration pb-1 mb-4" id="testimonials">
      {{ $t('videos.title') }}
    </h3>

    <carousel :items-to-show="1" class="custom-carousel">
      <slide index="1" class="custom-slide">
        <iframe width="560" height="315" src="https://www.youtube.com/embed/aOMygca02LM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      </slide>

      <slide index="2" class="custom-slide">
        <iframe width="560" height="315" src="https://www.youtube.com/embed/AiFGgObTJUw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      </slide>

      <slide index="3" class="custom-slide">
        <iframe width="560" height="315" src="https://www.youtube.com/embed/aTWSWSDwqqw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      </slide>

      <slide index="4" class="custom-slide">
        <iframe width="560" height="315" src="https://www.youtube.com/embed/JuJviszm2cU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
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
  name: 'VideosStateless',

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

@media (max-width: 767px) {
  .custom-carousel {
    width: 100%;
  }
}
</style>