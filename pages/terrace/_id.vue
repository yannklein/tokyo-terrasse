<template>
  <v-row justify="center" align="center">
      <v-col cols="12" sm="12" md="6">
        The current terrace is {{terrace.name}}
      </v-col>
  </v-row>
</template>

<script>
export default {
  async asyncData({params, store}) {
    await store.dispatch('terrace/getTerrace', {terraceID: params.id})
  },
  computed: {
    terrace () {
      return this.$store.state.terrace.terrace
    }
  },
}
</script>
