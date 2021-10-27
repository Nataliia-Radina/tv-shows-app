<template>
  <div class="show--list">
    <h3>{{ title }}</h3>
    <vue-horizontal>
      <Card
        v-for="show in shows"
        :key="show.show.id"
        :title="show.show.name"
        :src-set="show.show.image || {}"
        :rating="show.show.rating.average"
        @cardClicked="$_navigateToDetailsPage(show.show.id)"
      />
    </vue-horizontal>
  </div>
</template>

<script>
  import VueHorizontal from 'vue-horizontal'
  import Card from '@/components/Card.vue'
  import Navigation from '@/shared/Navigation.vue'
  export default {
    name: 'ShowList',
    components: {
      VueHorizontal,
      Card
    },
    mixins: [Navigation],
    props: {
      title: {
        type: String,
        default: ''
      },
      shows: {
        type: Array,
        required: true
      }
    },
    methods: {
      redirectToDetails (id) {
        this.$router.push(`/show/${id}`)
      }
    }
  }
</script>

<style lang="scss" scoped>
    .show--list {
        h3 {
            text-transform: capitalize;
            margin-bottom: 0;
        }
        .card {
            margin: 3px;
        }
    }
</style>
