<template>
  <q-page>
    <div class="row justify-between">
      <div class="square-box bg-primary"></div>
      <div class="square-box bg-secondary"></div>
      <div class="square-box bg-accent"></div>
    </div>
    <div class="row">
      <div class="square-box bg-primary"></div>
      <div class="square-box bg-secondary"></div>
      <div class="square-box bg-accent"></div>
    </div>

    <q-separator spaced/>

    <div class="row q-mb-md">
      <div class="col bg-primary"></div>
      <div class="col bg-secondary"></div>
      <div class="col bg-accent"></div>
    </div>
    <div class="row q-mb-md">
      <div class="col bg-primary"></div>
      <div class="col bg-secondary"></div>
      <div class="col bg-accent"></div>
    </div>
    <div class="row q-mb-md justify-center">
      <div class="col-4 bg-primary"></div>
      <div class="col-4 bg-secondary"></div>
    </div>
    <div class="row q-mb-md justify-end">
      <div class="col-4 bg-primary"></div>
      <div class="col-4 bg-secondary"></div>
    </div>
    <div class="row q-mb-md justify-between">
      <div class="col-6 bg-primary"></div>
      <div class="col-6 bg-secondary"></div>
    </div>

    <q-separator spaced />


  </q-page>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Flex'
})
</script>

<style scoped>

.col, .col-4, .col-6, .col-12 {
  height: 50px;
}

.square-box {
  height: 50px;
  width: 50px;
}

</style>
