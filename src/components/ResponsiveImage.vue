<template>
  <picture>
    <source v-if="responsive" :srcset="srcOriginal" media="(min-width: 768px)">
    <img :src="srcMedium" alt="alt">
  </picture>
</template>

<script>
  export default {
    name: 'SearchField',
    props: {
      srcSet: {
        type: Object,
        required: true
      },
      alt: {
        type: String,
        default: ''
      },
      responsive: {
        type: Boolean,
        default: false
      }
    },
    computed: {
      srcMedium () {
        return this.srcSet.medium ? this.srcSet.medium : this.defaultImageMedium
      },
      srcOriginal () {
        return this.srcSet.original ? this.srcSet.original : this.defaultImageSrc
      },
    },
    created () {
      this.defaultImageSrc = require('@/assets/default-image.jpg')
      this.defaultImageMedium = require('@/assets/default-image-medium.jpg')
    },
  }
</script>
