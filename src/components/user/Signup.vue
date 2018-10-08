<template>
  <v-content>
    <v-layout>
    <v-flex xs12 sm6 offset-sm3>
      <v-card class="pa-5">
        <v-form ref="form" v-model="valid" lazy-validation>
    <v-text-field
      v-model="name"
      :rules="[rules.required]"
      label="Name"
      required
    ></v-text-field>
    <v-text-field
      v-model="password"
      :append-icon="show1 ? 'visibility_off' : 'visibility'"
      :rules="[rules.required, rules.min]"
      :type="show1 ? 'text' : 'password'"
      name="password"
      label="Password"
      hint="At least 8 characters"
      counter
      @click:append="show1 = !show1"
    ></v-text-field>
    <v-text-field
      v-model="email"
      :rules="[rules.required, rules.emailFormat]"
      label="E-mail"
      required
    ></v-text-field>

    <v-checkbox
      v-model="checkbox"
      :rules="[v => !!v || 'You must agree to continue!']"
      label="Do you agree?"
      required
    ></v-checkbox>

    <v-btn
      :disabled="!valid"
      v-on:click="signUp"
    >
      submit
    </v-btn>
    <v-btn @click="clear">clear</v-btn>
  </v-form>
      </v-card>
    </v-flex>
  </v-layout>
    
  </v-content>
</template>

<script>
  import firebase from 'firebase'

  export default {
    data: () => ({
      valid: true,
      show1: false,
      show2: false,
      password: '',
      reEnterPassword: '',
      email: '',

      rules: {
        required: value => !!value || 'Required.',
        min: v => v.length >= 8 || 'Min 8 characters',
        emailFormat: v => /.+@.+/.test(v) || 'E-mail must be valid'
      },
      name: '',
      checkbox: false
    }),
    methods: {
      clear () {
        this.$refs.form.reset()
      },
      signUp: function () {
        firebase.auth().createUserWithEmailAndPassword(this.email, this.password).then(
          function (user) {
            alert('your account has been created!')
          },
          function (err) {
            alert(err.message)
          }
        )
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
