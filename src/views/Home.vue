<template>
  <main>
    <ShowList
      v-for="(shows, genre) in showsByGenre"
      :key="genre"
      :title="genre"
      :shows="shows"
    />
  </main>
</template>

<script>
  import ShowList from '@/components/ShowList.vue'
  import { mapState, mapActions } from 'vuex'

  export default {
    name: 'Home',
    components: {
      ShowList
    },
    computed: {
      genres () {
        return ['action', 'drama', 'comedy', 'horror', 'detective']
      },
      ...mapState(['showsByGenre'])
    },
    mounted () {
      this.getShowsByGenre(this.genres)
    },
    methods: {
      ...mapActions(['getShowsByGenre'])
    }
  }
</script>
