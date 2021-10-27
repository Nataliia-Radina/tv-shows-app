<template>
  <main class="grid--container--cards--list">
    <p v-if="!searchResults.length"> No results found for <b>{{ searchQuery }}</b></p>
    <Card
      v-else
      v-for="show in searchResults"
      :key="show.show.id"
      :title="show.show.name"
      :src-set="show.show.image || {}"
      @cardClicked="$_navigateToDetailsPage(show.show.id)"
    />
  </main>
</template>

<script>
  import Card from '@/components/Card.vue'
  import Navigation from '@/shared/Navigation'
  import { mapState } from 'vuex'

  export default {
    name: 'Search',
    components: {
      Card
    },
    mixins: [Navigation],
    computed: {
      ...mapState(['searchResults', 'searchQuery'])
    }
  }
</script>
