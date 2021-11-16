<template>
    <v-row justify="center" align="center">
      <v-btn color="prinary" @click="fetchterraces"> Fetch terraces </v-btn>
      <div v-for="terrace in terraces" :key="terrace.name">
        <v-col cols="12" sm="12" md="6">
          <terraceCard v-bind="terrace" />
        </v-col>
      </div>
    </v-row>
</template>