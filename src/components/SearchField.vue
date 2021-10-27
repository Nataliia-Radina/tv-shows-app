<template>
  <div class="search--field--container">
    <font-awesome-icon icon="search" :style="{ color: '#141414', left: '6px', top: '6px', position: 'absolute' }" />
    <input
      type="search"
      class="search--field"
      :value="value"
      :placeholder="placeholder"
      @input="$emit('queryChange', $event)"
    >
  </div>
</template>

<script>
  export default {
    name: 'SearchField',
    props: {
      value: {
        type: String,
        required: true
      },
      placeholder: {
        type: String,
        default: 'Search'
      }
    }
  }
</script>

<style lang="scss" scoped>
    .search--field--container {
      position: relative;
    }
    .search--field {
        width: 140px;
        padding: 5px 10px 5px 24px;
        transition: width .5s ease-out;
      @media (min-width: 768px) {
        &:focus {
          width: 200px;
          transition: width .5s ease-out;
        }
      }
    }
</style>
