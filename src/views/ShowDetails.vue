<template>
  <main v-if="showDetails">
    <h1>{{ showDetails.name }}</h1>

    <section class="grid--container--details">
      <ResponsiveImage
        :src-set="showDetails.image || {}"
        :title="showDetails.name"
        responsive
      />

      <!-- eslint-disable-next-line vue/no-v-html -->
      <div class="show--summary" v-html="showDetails.summary" />

      <div class="show--about">
        <div v-if="showDetails.rating && showDetails.rating.average">
          <font-awesome-icon icon="star" :style="{ color: 'yellow'}" />
          {{ showDetails.rating.average }}
        </div>
        <div v-if="showDetails.network"><b>Network:</b> {{ showDetails.network.name }}</div>
        <div><b>Status:</b> {{ showDetails.status }}</div>
        <div><b>Language:</b> {{ showDetails.language }}</div>
        <div><b>Runtime:</b> {{ showDetails.runtime }}min</div>
        <div v-if="genres"><b>Genre:</b> {{ genres }}</div>
        <div><b>Type:</b> {{ showDetails.type }}</div>
      </div>
    </section>

    <section v-if="showDetails._embedded && showDetails._embedded.cast && showDetails._embedded.cast.length">
      <h2>Cast</h2>
      <div class="grid--container--cards--list">
        <Card
          v-for="person in showDetails._embedded.cast"
          :key="person.id"
          :title="getCardTitle(person.person.name, person.character.name)"
          :src-set="person.person.image || {}"
        />
      </div>
    </section>
  </main>
</template>

<script>
  import { mapState, mapActions, mapMutations } from 'vuex'
  import Card from '@/components/Card'
  import ResponsiveImage from '@/components/ResponsiveImage'

  export default {
    name: 'ShowDetails',
    components: {
      Card,
      ResponsiveImage
    },
    props: {
      id: {
        type: String,
        required: true
      }
    },
    computed: {
      genres () {
        return this.showDetails.genres ? this.showDetails.genres.join(', ') : ''
      },
      ...mapState(['showDetails'])
    },
    mounted () {
      this.getShowDetails(this.id)
    },
    beforeDestroy () {
      this.setShowDetails({})
    },
    methods: {
      getCardTitle (actorName, characterName) {
        return `${actorName} as ${characterName}`
      },
      ...mapActions(['getShowDetails']),
      ...mapMutations(['setShowDetails'])
    }
  }
</script>

<style lang="scss" scoped>
  .show--about {
    font-size: 18px;
  }

  .grid--container--details {
	display: grid;
	gap: 10px;
	grid-template-columns: 1fr;
      @media (min-width: 768px) {
        grid-template-columns: 1fr 1fr 1fr;
      }
      @media (min-width: 1024px) {
        grid-template-columns: 1fr 2fr 1fr;
      }
  }
</style>
