<template>
  <div class="card" @click="onCardClick">
    <ResponsiveImage :src-set="srcSet" :alt="title" />
    <p class="card--title">
      {{ title }}
    </p>
    <span v-if="rating" class="rating">
      <font-awesome-icon icon="star" :style="{ color: 'yellow'}" />
      {{ rating }}
    </span>
  </div>
</template>

<script>
  import ResponsiveImage from '@/components/ResponsiveImage.vue'
  export default {
    name: 'ShowCard',
    components: {
      ResponsiveImage
    },
    props: {
      title: {
        type: String,
        default: ''
      },
      srcSet: {
        type: Object,
        required: true
      },
      rating: {
        type: Number,
        default: 0
      }
    },
    methods: {
      onCardClick () {
        this.$emit('cardClicked')
      }
    }
  }
</script>

<style lang="scss" scoped>
    .card {
        position: relative;
        margin: 3px;
        font-size: 13px;
        font-weight: bold;
        &:hover {
            cursor: pointer;
            transform: translateY(-30px);
            transition: transform .4ms linear;
            -webkit-transition: -webkit-transform .5s ease-out;
            -moz-transition: -moz-transform .5s ease-out;
            -o-transition: -o-transform .5s ease-out;
            transition: transform .5s ease-out;
        }
        -webkit-transition: -webkit-transform .5s ease-out;
        -moz-transition: -moz-transform .5s ease-out;
        -o-transition: -o-transform .5s ease-out;
        transition: transform .5s ease-out;
    }
  .rating {
    position: absolute;
    top: 6px;
    right: 6px;
    background-color: rgba(#141414, 0.7);
    padding: 4px 8px;
    border-radius: 15px;
    border: 1px solid rgba(#e5e5e5, 0.7)
  }
</style>
