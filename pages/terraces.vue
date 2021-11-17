<template>
    <v-row justify="center" align="center">
      <v-col 
        v-for="terrace in terraces" :key="terrace.id" 
        cols=12 
        xs=12 
        sm=6 
        md=4>
        <TerraceCard v-bind="terrace" />
      </v-col>
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
      return this.$store.state.terraces.terraces
    }
  },
}
</script>
