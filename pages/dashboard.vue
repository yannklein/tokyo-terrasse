<template>
    <v-row justify="center" align="center">
      <v-btn color="prinary" @click="fetchTerrasses"> Fetch terrasses </v-btn>
      <div v-for="terrasse in terrasses" :key="terrasse.name">
        <v-col cols="12" sm="12" md="6">
          <TerrasseCard v-bind="terrasse" />
        </v-col>
      </div>
    </v-row>
</template>