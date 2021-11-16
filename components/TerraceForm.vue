<template>
  <validation-observer
    ref="observer"
    v-slot="{ invalid }"
  >
    <form @submit.prevent="submit">
      <validation-provider
        v-slot="{ errors }"
        name="Venue name"
        rules="required|max:20"
      >
        <v-text-field
          v-model="name"
          :counter="10"
          :error-messages="errors"
          label="Name"
          required
        ></v-text-field>
      </validation-provider>
      <validation-provider
        v-slot="{ errors }"
        name="category"
        rules="required"
      >
        <v-select
          v-model="category"
          :items="categories"
          :error-messages="errors"
          label="Category"
          data-vv-name="category"
          required
        ></v-select>
      </validation-provider>
      <validation-provider
        v-slot="{ errors }"
        name="address"
        :rules="{
          required: true,
        }"
      >
        <v-text-field
          v-model="address"
          :error-messages="errors"
          label="Address"
          required
        ></v-text-field>
      </validation-provider>
      <validation-provider
        v-slot="{ errors }"
        name="website"
        rules="required"
      >
        <v-text-field
          v-model="website"
          :error-messages="errors"
          label="Website"
          hint="www.example.com/page"
          persistent-hint
          required
        ></v-text-field>
      </validation-provider>
      <validation-provider
        v-slot="{ errors }"
        name="phoneNumber"
        :rules="{
          required: true,
          regex: '^[+](71|72|74|76|81|82|84|85|86|87|88|89)\\d{10}$'
        }"
      >
        <v-text-field
          v-model="phoneNumber"
          :counter="7"
          :error-messages="errors"
          label="Phone Number"
          hint="+819012342345"
          persistent-hint
          required
        ></v-text-field>
      </validation-provider>

      <validation-provider
        v-slot="{ errors }"
        name="description"
        rules="required|max:300"
      >
        <v-textarea
        label="Description"
        :error-messages="errors"
        required
      ></v-textarea>
      </validation-provider>

      <v-btn
        class="mr-4"
        type="submit"
        :disabled="invalid"
      >
        submit
      </v-btn>
      <v-btn @click="clear">
        clear
      </v-btn>
    </form>
  </validation-observer>
</template>

<script>
  import { required, digits, email, max, regex } from 'vee-validate/dist/rules'
  import { extend, ValidationObserver, ValidationProvider, setInteractionMode } from 'vee-validate'

  setInteractionMode('eager')

  extend('digits', {
    ...digits,
    message: '{_field_} needs to be {length} digits. ({_value_})',
  })

  extend('required', {
    ...required,
    message: '{_field_} can not be empty',
  })

  extend('max', {
    ...max,
    message: '{_field_} may not be greater than {length} characters',
  })

  extend('regex', {
    ...regex,
    message: '{_field_} {_value_} does not match {regex}',
  })

  extend('email', {
    ...email,
    message: 'Email must be valid',
  })

  export default {
    components: {
      ValidationProvider,
      ValidationObserver,
    },
    data: () => ({
      name: '',
      phoneNumber: '',
      address: '',
      website: '',
      email: '',
      category: null,
      categories: [
        'Restaurant',
        'Bar',
        'Izakaya',
        'Cafe',
        'BYOB area',
        'Other'
      ],
      checkbox: null,
    }),

    methods: {
      submit () {
        const payload = {
          name: this.name || "",
          category: this.category.toLowerCase() || "",
          address: this.address || "",
          website: this.website || "",
          number: this.phoneNumber || "",
          description: this.description || "",
        }
        this.$refs.observer.validate()
        console.log(payload)
        this.$store.dispatch('terraces/saveTerrace', payload)
      },
      clear () {
        this.name = ''
        this.category = null
        this.address = ''
        this.website = ''
        this.phoneNumber = ''
        this.description = ''
        this.$refs.observer.reset()
      },
    },
  }
</script>