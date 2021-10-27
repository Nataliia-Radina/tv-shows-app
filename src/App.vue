<template>
  <div class="app">
    <AppHeader />
    <router-view />
  </div>
</template>

<script>
  import AppHeader from '@/components/AppHeader.vue'

  export default {
    name: 'App',
    components: {
      AppHeader
    }
  }
</script>

<style lang="scss">
  body {
    margin: 0;
    padding: 0;
    background-color: #141414;
    color: #e5e5e5;
  }
  p {
    margin: 0
  }
  img {
    border-radius: 6px;
    width: 100%;
  }
  .app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    padding: 64px 25px;
    @media (min-width: 768px) {
      padding: 64px 50px;
    }
  }

  .show--list .v-hl-container[data-v-45080727] {
    padding: 30px 0;
  }

  .grid--container--cards--list {
    display: grid;
    padding-top: 30px;
    gap: 30px 3px;
    grid-template-columns: 1fr 1fr;
    @media (min-width: 768px) {
      grid-template-columns: 1fr 1fr 1fr;
    }
    @media (min-width: 1024px) {
      grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
    }
    @media (min-width: 1280px) {
      grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
    }
    .card {
      margin: 3px;
    }
  }

</style>
