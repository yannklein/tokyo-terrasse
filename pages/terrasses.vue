<template>
    <v-row justify="center" align="center">
      <div v-for="terrasse in terrasses" :key="terrasse.name">
        <v-col cols="12" sm="12" md="6">
          <TerrasseCard v-bind="terrasse" />
        </v-col>
      </div>
    </v-row>
</template>

<script>
import TerrasseCard from '../components/TerrasseCard.vue'
export default {
  components: {
    TerrasseCard,
  },
  async asyncData({store}) {
    await store.dispatch('terrasses/getTerrasses')
  },
  computed: {
    terrasses () {
      return this.$store.state.terrasses
    }
  },
}

</script>
