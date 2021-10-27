<template>
  <div class="app--header--container">
    <div class="app--header">
      <router-link to="/">ABN-TV</router-link>

      <SearchField
        :value="searchQuery"
        placeholder="Search shows"
        @queryChange="searchShowsByQuery($event.target.value)"
      />
    </div>
  </div>
</template>

<script>
  import SearchField from '@/components/SearchField.vue'
  import Navigation from '@/shared/Navigation.vue'
  import { mapState, mapActions } from 'vuex'
  export default {
    name: 'AppHeader',
    components: {
      SearchField
    },
    mixins: [Navigation],
    computed: {
      ...mapState(['searchResults', 'searchQuery', 'hasError', 'previousUrl'])
    },
    created () {
      if (this.searchQuery) {
        this.searchShowsByQuery(this.searchQuery)
      }
    },
    methods: {
      searchShowsByQuery (val) {
        if (val) {
          this.getShowsByQuery(val)
          this.navigateToSearch()
        } else {
          this.$_navigateToPreviousUrl()
        }
      },
      navigateToSearch () {
        if (!this.$router.currentRoute.path.match('/search')) {
          this.updatePreviousUrl(this.$router.currentRoute.path)
          this.$router.push('/search')
        }
      },
      ...mapActions(['getShowsByQuery', 'updateSearchQuery', 'updatePreviousUrl'])
    }
  }
</script>

<style lang="scss">
    .app--header {
        position: fixed;
        top: 0;
        left: 0;
        padding: 10px 25px;
        width: calc(100% - 50px);
        background-color: #141414;
        z-index: 100;
        display: flex;
        align-items: center;
        justify-content: space-between;
        a {
            text-decoration: none;
            color: #00857a;
            font-weight: bold;
            font-size: 28px;
            &:hover {
                animation: shake 0.82s cubic-bezier(.36,.07,.19,.97) both;
                transform: translate3d(0, 0, 0);
                backface-visibility: hidden;
                perspective: 1000px;
            }
        }
        @media (min-width: 768px) {
            padding: 10px 50px;
            width: calc(100% - 100px);
            a {
                font-size: 32px;
            }
        }
        @keyframes shake {
            10%, 90% {
                transform: translate3d(-1px, 0, 0);
            }

            20%, 80% {
                transform: translate3d(2px, 0, 0);
            }

            30%, 50%, 70% {
                transform: translate3d(-3px, 0, 0);
            }

            40%, 60% {
                transform: translate3d(3px, 0, 0);
            }
        }

    }
</style>
