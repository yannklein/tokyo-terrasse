<template>
  <v-form v-model="valid">
    <v-container>
      <v-text-field
        label="Venue name"
        required
      ></v-text-field>
      <v-select
        :items="categories"
        label="Category"
        data-vv-name="select"
        required
      ></v-select>

      <v-text-field
        v-model="address"
        :rules="addressRules"
        label="Address"
        required
      ></v-text-field>

      <v-text-field
        label="Website"
        hint="www.example.com/page"
        persistent-hint
        required
      ></v-text-field>

      <v-text-field
        :rules="nameRules"
        label="Phone"
        hint="+81 90 1234 5678"
        persistent-hint
        required
      ></v-text-field>

      <v-textarea
        label="Description"
        required
      ></v-textarea>

      <v-btn
        class="mr-4"
        @click="submit"
      >
        submit
      </v-btn>
      <v-btn @click="clear">
        clear
      </v-btn>
    </v-container>
  </v-form>
</template>

<script>
  export default {
    data: () => ({
      valid: false,
      name: '',
      address: '',
      categories: [
        'Restaurant',
        'Bar',
        'Izakaya',
        'Cafe',
        'BYOB area',
        'Other'
      ],
      nameRules: [
        v => !!v || 'Name is required',
      ],
      email: '',
      emailRules: [
        v => !!v || 'E-mail is required',
        v => /.+@.+/.test(v) || 'E-mail must be valid',
      ],
      addressRules: [
        v => !!v || 'This field is required',
        v => !!v && v.length <= 25 || 'Address must be less than 25 characters',
      ]
    }),
    methods: {
      submit () {
      },
      clear () {
        this.$refs.form.reset()
      },
    },
  }
</script>