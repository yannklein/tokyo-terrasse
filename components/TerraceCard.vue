<template>
  <NuxtLink v-if="id !== ''" :to="{ name: 'terrace-id', params: { id: id }}" >
    <v-card
      class="mx-auto my-12"
    >
      <v-img
        height="250"
        :src='images && images.length ? images[0] : ""'
      ></v-img>
      <v-card-title>{{name}} {{categoryIcon(category)}}</v-card-title>

      <v-card-text style="height: 160px">
        <!-- <v-row
          align="center"
          class="mx-0"
        >
          <v-rating
            :value="4.5"
            color="amber"
            dense
            half-increments
            readonly
            size="14"
          ></v-rating>

          <div class="grey--text ms-4">
            4.5 (413)
          </div>
        </v-row> -->

        <div 
          class="my-4 text-subtitle-1"
        >
          <div>{{address}}</div>
          <div>{{phone}}</div>
          <div>{{website}}</div>
        </div>
      </v-card-text>

      <v-divider class="mx-4"></v-divider>

      <v-card-actions>
        <v-btn
          color="deep-purple lighten-2"
          text
        >
          Details
        </v-btn>
      </v-card-actions>
    </v-card>
  </NuxtLink>
</template>

<script>
export default {
  props: {
    id: {type: String, default: ""},
    name: {type: String, default: ""},
    address: {type: String, default: ""},
    category: {type: String, default: ""},
    description: {type: String, default: ""},
    phone: {type: String, default: ""},
    website: {type: String, default: ""},
    images: {type: Array, default: ()=>{}},
  },
  methods: {
    categoryIcon (category) {
      switch(category) {
        case 'restaurant': return "🍽"
        case 'bar': return "🍹"
        case "izakaya": return "🏮"
      }
      return null
    }
  }
}
</script>