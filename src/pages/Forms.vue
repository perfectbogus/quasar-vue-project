<template>
  <q-page class="q-ma-md">
    <span class="text-h3">Forms</span>
    <q-separator spaced/>

    <div class="row justify-center">
      <q-form @submit="onSubmit" @reset="onReset" class="q-gutter-md col-sm-12 col-md-6 q-pt-xl">

        <q-input v-model="userForm.email" filled type="email" label="User Email"  lazy-rules no-error-icon
        :rules="[
          val => val && val.length > 0 || 'Invalid Email',
           val => isValidEmail(val),
            //this is the same as the above example because has only one value can be rewrite a just call the function
            isValidEmail]"/>

        <q-input v-model="userForm.password" filled type="password" label="Pass" lazy-rules no-error-icon
                 :rules="[val => val && val.length > 0 || 'Required']"/>

        <q-input v-model="userForm.confirmPass" filled type="password" label="Confirm Pass" lazy-rules no-error-icon
        :rules="[val => val && val.length > 0 || 'Required', matchPass]"/>

        <q-checkbox v-model="userForm.conditions" label="Conditions" :style="userForm.errorInConditions && !userForm.conditions && 'color: red'"/>

        <div class="row justify-end">
          <q-btn label="Reset" type="reset" color="primary" flat class="q-ml-sm"/>
          <q-btn label="Submit" type="submit" color="primary"/>
        </div>
      </q-form>
    </div>
  </q-page>
</template>

<script>
import {defineComponent, ref } from 'vue'
import { useQuasar} from "quasar";

export default defineComponent({
  name: 'Forms',
  setup() {
    const $q = useQuasar()
    const userForm = ref({
      email: '',
      password: '',
      confirmPass: '',
      conditions: false,
      errorInConditions: false
    })

    return {
      userForm,
      onSubmit(){

        userForm.value.errorInConditions = false
        if(!userForm.value.conditions ) {
          console.log(userForm.value)
          $q.notify({message: 'Condition No Selected', icon: 'la la-automobile'})
          userForm.value.errorInConditions = true
          return
        }
        console.log(userForm.value)

      },
      onReset(){console.log(userForm.value)},
      isValidEmail(val){
        return true
      },
      matchPass(val){
        return (val === userForm.value.password || 'Pass does not match')
      }
    }
  }
})
</script>
