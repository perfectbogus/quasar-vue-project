<template>
  <q-btn color="primary" :label="isSideMenuOpen ? 'Close Menu' : 'Open Menu'" class="q-mt-md" @click="toggleSideMenu"/>
  <q-page class="flex column q-pa-md">
    <span class="text-h1">Typography</span>
    <span class="text-h2">Typography</span>
    <span class="text-h3">Typography</span>
    <span class="text-h4">Typography</span>
    <span class="text-h5">Typography</span>
    <span class="text-h6">Typography</span>

    <q-separator/>
    <span class="text-subtitle1">Subtitle 1</span>
    <span class="text-subtitle2">Subtitle 2</span>

  </q-page>
  <q-page class="flex">
    <span class="text-h1">Typography</span>
    <span class="text-h2">Typography</span>
    <span class="text-h3">Typography</span>
    <span class="text-h4">Typography</span>
    <span class="text-h5">Typography</span>
    <span class="text-h6">Typography</span>
  </q-page>
</template>

<script>
import { defineComponent } from 'vue'
import useUI from '../composables/useUI'

export default defineComponent({
  name: 'Typography',

  setup() {

    const {toggleSideMenu, isSideMenuOpen } = useUI()

    return {
      toggleSideMenu,
      isSideMenuOpen
    }
  }

})
</script>
