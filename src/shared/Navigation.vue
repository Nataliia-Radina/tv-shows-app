<script>
  import { mapState } from 'vuex'
  export default {
    name: 'Navigation',
    computed: {
      ...mapState('app', ['previousUrl'])
    },
    methods: {
      $_navigateToDetailsPage (id) {
        this.$router.push(`/show/${id}`)
      },
      $_navigateToPreviousUrl () {
        this.$router.push(this.previousUrl)
      }
    }
  }
</script>
