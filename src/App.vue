<script setup>
import { ref, onMounted } from 'vue'
import AppLoader from '@/components/AppLoader.vue'

const isLoading = ref(true)

onMounted(() => {
  setTimeout(() => {
    isLoading.value = false
  }, 500)
})
</script>

<template>
  <AppLoader v-if="isLoading" />

  <RouterView v-else />
</template>
