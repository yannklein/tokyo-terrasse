<template>
    <v-row justify="center" align="center">
      <div v-for="terrace in terraces" :key="terrace.id">
        <v-col cols="12" sm="12" md="6">
          <TerraceCard v-bind="terrace" />
        </v-col>
      </div>
      <NuxtChild />
    </v-row>
</template>

<script>
import TerraceCard from '../components/TerraceCard.vue'
export default {
  components: {
    TerraceCard,
  },
  async asyncData({store}) {
    await store.dispatch('terraces/getTerraces')
  },
  computed: {
    terraces () {
      return this.$store.state.terraces
    }
  },
}
</script>
