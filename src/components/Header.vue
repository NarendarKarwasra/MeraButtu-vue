<script setup>
import { ref } from 'vue'

import fashionIcon from '@/assets/images/icons/nav-fashion-icon.webp'
import toyIcon from '@/assets/images/icons/nav-toy-icon.webp'
import babyCareIcon from '@/assets/images/icons/nav-babycare-icon.webp'
import feedingIcon from '@/assets/images/icons/nav-feeding-icon.webp'
import nurseryIcon from '@/assets/images/icons/nav-nursery-icon.webp'
import booksIcon from '@/assets/images/icons/nav-books-icon.webp'
import gearIcon from '@/assets/images/icons/nav-gear-icon.webp'
import giftsIcon from '@/assets/images/icons/nav-gifts-icon.webp'
import offerIcon from '@/assets/images/icons/nav-offer-icon.webp'

const categories = [
  { name: 'Fashion', icon: fashionIcon },
  { name: 'Toys & Games', icon: toyIcon },
  { name: 'Baby Care', icon: babyCareIcon },
  { name: 'Feeding', icon: feedingIcon },
  { name: 'Nursery', icon: nurseryIcon },
  { name: 'Books & Learning', icon: booksIcon },
  { name: 'Gear & Travel', icon: gearIcon },
  { name: 'Gifts & More', icon: giftsIcon },
  { name: 'Offers', icon: offerIcon, highlight: true },
]

const wishlistCount = ref(0)
const cartCount = ref(0)
const mobileMenuOpen = ref(false)
</script>

<template>
  <header class="w-full">
    <!-- Top Utility Bar -->
    <div class="bg-(--color-primary-light) border-b border-accent/20 text-black text-xs sm:text-sm">
      <div class="mx-auto max-w-350 px-4 py-2 flex items-center justify-between gap-4">
        <p class="flex items-center gap-2 truncate">
          <i class="bi bi-gift text-primary text-base shrink-0"></i>
          <span class="truncate">
            Welcome to Mera Buttu – Your One-Stop Store for Every Little Need!
          </span>
        </p>

        <div class="hidden md:flex items-center gap-6 shrink-0">
          <a href="#" class="flex items-center gap-1.5 hover:text-primary transition-colors">
            <i class="bi bi-box-seam text-base"></i>
            <span>Track Order</span>
          </a>
          <a href="#" class="flex items-center gap-1.5 hover:text-primary transition-colors">
            <i class="bi bi-geo-alt text-base"></i>
            <span>Store Locator</span>
          </a>
          <a href="#" class="flex items-center gap-1.5 hover:text-primary transition-colors">
            <i class="bi bi-headset text-base"></i>
            <span>Help & Support</span>
          </a>
        </div>
      </div>
    </div>

    <!-- Main Header -->
    <div class="bg-white">
      <div class="mx-auto max-w-350 px-2 py-2 flex items-center gap-4 sm:gap-6 justify-between">
        <div class="flex items-center gap-4 sm:gap-6 justify-between flex-1 max-w-4xl">
          <!-- Logo -->
          <a href="/" class="flex items-center gap-2 shrink-0">
            <img
              src="../assets/images/merabuttu-logo.webp"
              alt="Mera Buttu"
              class="h-10 sm:h-18 w-auto"
            />
          </a>

          <!-- Search bar -->
          <div class="hidden md:flex flex-1 max-w-2xl">
            <div class="relative w-full">
              <input
                type="text"
                placeholder="Search for products, brands and more..."
                class="w-full rounded-full border border-gray-400 bg-gray-50 pl-5 pr-14 py-2.5 text-sm placeholder:text-gray-500 focus:outline-none focus:ring-1 focus:ring-primary/40 focus:border-primary transition-colors"
              />
              <button
                class="absolute right-1 top-1/2 -translate-y-1/2 h-9 w-9 rounded-full bg-primary text-white flex items-center justify-center hover:bg-primary/90 transition-colors"
                aria-label="Search"
              >
                <i class="bi bi-search"></i>
              </button>
            </div>
          </div>
        </div>

        <!-- Right actions -->
        <div class="flex items-center gap-4 sm:gap-4 lg:gap-10">
          <!-- Mobile search icon -->
          <button class="md:hidden text-black text-3xl" aria-label="Search">
            <i class="bi bi-person"></i>
          </button>

          <!-- Account -->
          <a
            href="#"
            class="hidden sm:flex items-center gap-2 hover:text-primary transition-colors"
          >
            <i class="bi bi-person text-3xl"></i>
            <span class="leading-tight text-left">
              <span class="block text-[12px] text-gray-700">Login / Signup</span>
              <span class="flex items-center gap-1 text-sm font-medium">
                My Account
                <i class="bi bi-chevron-down text-xs"></i>
              </span>
            </span>
          </a>

          <!-- Wishlist -->
          <a href="#" class="relative flex gap-3 items-center hover:text-primary transition-colors">
            <span class="relative">
              <i class="bi bi-heart text-2xl"></i>
              <span
                class="absolute -top-1.5 -right-2 bg-coral text-white text-[12px] leading-none rounded-full h-4.5 w-4.5 flex items-center justify-center"
              >
                {{ wishlistCount }}
              </span>
            </span>
            <span class="hidden sm:block text-[13px] font-medium mt-0.5">Wishlist</span>
          </a>

          <!-- Cart -->
          <a href="#" class="relative flex gap-3 items-center hover:text-primary transition-colors">
            <span class="relative">
              <i class="bi bi-bag text-2xl"></i>
              <span
                class="absolute -top-1.5 -right-2 bg-coral text-white text-[10px] leading-none rounded-full h-4.5 w-4.5 flex items-center justify-center"
              >
                {{ cartCount }}
              </span>
            </span>
            <span class="hidden sm:block text-[13px] font-medium mt-0.5">Cart</span>
          </a>
        </div>

        <!-- Mobile menu toggle -->
        <button
          class="lg:hidden text-brown text-2xl shrink-0"
          @click="mobileMenuOpen = !mobileMenuOpen"
          aria-label="Toggle menu"
        >
          <i class="bi" :class="mobileMenuOpen ? 'bi-x-lg' : 'bi-list'"></i>
        </button>
      </div>

      <!-- Mobile search bar -->
      <div class="md:hidden px-4 pb-3">
        <div class="relative w-full">
          <input
            type="text"
            placeholder="Search for products, brands and more..."
            class="w-full rounded-full border border-gray-200 bg-gray-50 pl-5 pr-12 py-2.5 text-sm text-brown placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-primary/40"
          />
          <button
            class="absolute right-1.5 top-1/2 -translate-y-1/2 h-8 w-8 rounded-full bg-primary text-white flex items-center justify-center"
            aria-label="Search"
          >
            <i class="bi bi-search text-sm"></i>
          </button>
        </div>
      </div>
    </div>

    <!-- Category Bar -->
    <nav class="bg-white">
      <div class="mx-auto max-w-350 px-4 mb-2">
        <div
          class="flex items-center gap-2 overflow-x-auto no-scrollbar border rounded-xl border-gray-200"
        >
          <!-- All Categories -->
          <button
            class="flex items-center gap-2 bg-primary/10 text-primary font-medium rounded-xl px-4 py-2 text-sm shrink-0 hover:bg-primary/15 transition-colors"
          >
            <i class="bi bi-grid text-base"></i>
            <span>All Categories</span>
          </button>

          <!-- Category items -->
          <a
            v-for="cat in categories"
            :key="cat.name"
            href="#"
            class="flex items-center gap-1.5 px-3 py-2 text-sm font-medium rounded-full shrink-0 whitespace-nowrap transition-colors"
            :class="cat.highlight ? 'text-coral hover:bg-coral/10' : 'text-brown hover:bg-gray-50'"
          >
            <img :src="cat.icon" alt="" class="h-5 w-5 object-contain shrink-0" />
            <span>{{ cat.name }}</span>
          </a>
        </div>
      </div>
    </nav>

    <!-- Mobile slide-out menu -->
    <Transition name="fade">
      <div
        v-if="mobileMenuOpen"
        class="lg:hidden fixed inset-0 z-50 bg-black/40"
        @click.self="mobileMenuOpen = false"
      >
        <div class="bg-white w-72 h-full shadow-xl p-5 overflow-y-auto">
          <div class="flex items-center justify-between mb-6">
            <img src="" alt="Mera Buttu" class="h-10 w-auto" />
            <button @click="mobileMenuOpen = false" class="text-2xl text-brown">
              <i class="bi bi-x-lg"></i>
            </button>
          </div>

          <a
            v-for="cat in categories"
            :key="cat.name"
            href="#"
            class="flex items-center gap-3 py-3 border-b border-gray-100 text-sm font-medium"
            :class="cat.highlight ? 'text-coral' : 'text-brown'"
          >
            <img :src="cat.icon" alt="" class="h-6 w-6 object-contain" />
            <span>{{ cat.name }}</span>
          </a>

          <div class="mt-5 flex flex-col gap-4 text-sm text-brown">
            <a href="#" class="flex items-center gap-2"
              ><i class="bi bi-box-seam"></i>Track Order</a
            >
            <a href="#" class="flex items-center gap-2"
              ><i class="bi bi-geo-alt"></i>Store Locator</a
            >
            <a href="#" class="flex items-center gap-2"
              ><i class="bi bi-headset"></i>Help & Support</a
            >
          </div>
        </div>
      </div>
    </Transition>
  </header>
</template>

<style scoped>
.no-scrollbar {
  scrollbar-width: none;
  -ms-overflow-style: none;
}
.no-scrollbar::-webkit-scrollbar {
  display: none;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
