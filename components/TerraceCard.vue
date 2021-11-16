<template>
  <NuxtLink :to="{ name: 'terrace-id', params: { id: id }}" >
    <div>{{name}}</div>
  </NuxtLink>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      default: ""
    },
    id: {
      type: String,
      default: ""
    }
  },
}
</script>