<script setup>
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'

import { useDevice } from '@/stores/devive.js'

const { isMobile } = useDevice()
</script>

<template>
  <div class="min-h-screen flex flex-col bg-white">
    <Header />

    <div class="flex-1" :class="isMobile ? 'pb-10' : ''">
      <slot />
    </div>

    <Footer :class="isMobile ? 'pb-18' : ''" />
  </div>
</template>
