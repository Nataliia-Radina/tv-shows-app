<template>
  <main>
    <p v-if="!searchResults.length"> No results found for <b>{{ searchQuery }}</b></p>
    <div v-else class="grid--container--cards--list">
      <Card
        v-for="show in searchResults"
        :key="show.show.id"
        :title="show.show.name"
        :src-set="show.show.image || {}"
        @cardClicked="$_navigateToDetailsPage(show.show.id)"
      />
    </div>
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
