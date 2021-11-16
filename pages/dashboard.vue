<template>
    <v-row justify="center" align="center">
      <v-col v-for="terrace in terraces" :key="terrace.name" sm="12" md="8" >
        <TerraceCard v-bind="terrace" />
      </v-col>
      <v-col sm="12" md="4">
        <TerraceForm />
      </v-col>
    </v-row>
</template>

<script>
import TerraceCard from '../components/TerraceCard.vue'
import TerraceForm from '../components/TerraceForm.vue'
export default {
  components: {
    TerraceCard,
    TerraceForm,
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