<script setup>
import Header from '@/components/Header.vue'
</script>

<template>
  <div class="min-h-screen bg-white">
    <Header />

    <main>
      <slot />
    </main>
  </div>
</template>
