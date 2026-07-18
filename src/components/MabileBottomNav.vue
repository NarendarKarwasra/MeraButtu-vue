<script setup>
// import { ref } from 'vue'
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { useDevice } from '@/stores/devive.js'

const { isMobile } = useDevice()

// const wishlistCount = ref(14)

const route = useRoute()

const navItems = [
  { label: 'Home', icon: 'bi-house', activeIcon: 'bi-house-fill', to: '/' },
  { label: 'Wishlist', icon: 'bi-heart', activeIcon: 'bi-heart-fill', to: '/wishlist' },
  { label: 'Chat', icon: 'bi-chat-dots', activeIcon: 'bi-chat-dots-fill', to: '/chat' },
  { label: 'Profile', icon: 'bi-person', activeIcon: 'bi-person-fill', to: '/account' },
]

const isActive = (path) => computed(() => route.path === path).value
</script>

<template>
  <nav
    v-if="isMobile"
    class="fixed bottom-0 inset-x-0 z-40 bg-white border-t border-gray-100 shadow-[0_-2px_10px_rgba(0,0,0,0.04)]"
  >
    <div class="grid grid-cols-4">
      <router-link
        v-for="item in navItems"
        :key="item.label"
        :to="item.to"
        class="relative flex flex-col items-center justify-center gap-0.5 py-2.5 text-[11px] font-medium transition-colors"
        :class="isActive(item.to) ? 'text-primary' : 'text-gray-500'"
      >
        <span class="relative">
          <i
            class="bi text-xl leading-none"
            :class="isActive(item.to) ? item.activeIcon : item.icon"
          ></i>
          <span
            v-if="item.label === 'Wishlist' && wishlistCount > 0"
            class="absolute -top-1.5 -right-2.5 bg-coral text-white text-[9px] leading-none rounded-full h-4 w-4 flex items-center justify-center"
          >
            {{ wishlistCount }}
          </span>
        </span>
        <span>{{ item.label }}</span>
      </router-link>
    </div>
  </nav>
</template>
