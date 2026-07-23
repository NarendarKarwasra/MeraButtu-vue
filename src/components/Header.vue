<script setup>
import { ref } from 'vue'
import { useDevice } from '@/stores/devive.js'
//
const { isMobile } = useDevice()

import fashionIcon from '@/assets/images/icons/nav-fashion-icon.webp'
import toyIcon from '@/assets/images/icons/nav-toy-icon.webp'
import babyCareIcon from '@/assets/images/icons/nav-babycare-icon.webp'
import feedingIcon from '@/assets/images/icons/nav-feeding-icon.webp'
import nurseryIcon from '@/assets/images/icons/nav-nursery-icon.webp'
import booksIcon from '@/assets/images/icons/nav-books-icon.webp'
import gearIcon from '@/assets/images/icons/nav-gear-icon.webp'
import giftsIcon from '@/assets/images/icons/nav-gifts-icon.webp'
import offerIcon from '@/assets/images/icons/nav-offer-icon.webp'
import logo from '@/assets/images/merabuttu-logo.webp'

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

const wishlistCount = ref(14)
const cartCount = ref(2)
const mobileMenuOpen = ref(false)

import { computed } from 'vue'
import { useRoute } from 'vue-router'
const route = useRoute()
const navItems = [
  { label: 'Home', icon: 'bi-house', activeIcon: 'bi-house-fill', to: '/' },
  { label: 'Wishlist', icon: 'bi-heart', activeIcon: 'bi-heart-fill', to: '/wishlist' },
  { label: 'Chat', icon: 'bi-chat-dots', activeIcon: 'bi-chat-dots-fill', to: '/chat' },
  { label: 'Profile', icon: 'bi-person', activeIcon: 'bi-person-fill', to: '/account' },
]

const isActive = (path) => computed(() => route.path === path).value

const searchOpen = ref(false)
const searchQuery = ref('')
const searchInput = ref(null)
const isListening = ref(false)

// TODO: replace with a real API call (debounced) against your product/category search endpoint
const searchIndex = [
  'Baby Diapers',
  'Feeding Bottles',
  'Teddy Bear',
  'Kids Fashion',
  'Baby Care Combo',
  'Toys & Games',
  'Nursery Furniture',
  'Books & Learning Kits',
  'Baby Stroller',
  'Gift Hampers',
]

const searchResults = computed(() => {
  const q = searchQuery.value.trim().toLowerCase()
  if (!q) return []
  return searchIndex.filter((item) => item.toLowerCase().includes(q))
})

const openSearch = async () => {
  searchOpen.value = true
  // eslint-disable-next-line no-undef
  await nextTick()
  searchInput.value?.focus()
}

const closeSearch = () => {
  searchOpen.value = false
  searchQuery.value = ''
  isListening.value = false
}

const selectResult = (term) => {
  searchQuery.value = term
  submitSearch()
}

const submitSearch = () => {
  if (!searchQuery.value.trim()) return
  // TODO: navigate to search results, e.g.
  // router.push({ path: '/search', query: { q: searchQuery.value } })
}

// for filter option
const filterOpen = ref(false)
const selectedFilters = ref([])

const filterOptions = ['Medicines', 'Vitamins', 'Personal Care', 'Baby Care', 'Diabetes Care']

const toggleFilter = (filter) => {
  if (selectedFilters.value.includes(filter)) {
    selectedFilters.value = selectedFilters.value.filter((item) => item !== filter)
  } else {
    selectedFilters.value.push(filter)
  }
}

const isLoggedIn = ref(false)
const showAccountMenu = ref(false)
const login = () => {
  isLoggedIn.value = true
}
const logout = () => {
  isLoggedIn.value = false
  showAccountMenu.value = false
}
let closeMenuTimer

const openAccountMenu = () => {
  clearTimeout(closeMenuTimer)
  showAccountMenu.value = true
}

const closeAccountMenu = () => {
  closeMenuTimer = setTimeout(() => {
    showAccountMenu.value = false
  }, 250)
}
</script>

<template>
  <!-- mobile screen -->
  <header class="w-full" v-if="isMobile">
    <div class="sticky top-0 z-40 bg-white border-b border-gray-100">
      <div class="relative px-3 py-2.5">
        <!-- Normal row: hamburger, logo, search icon, cart -->
        <div class="flex items-center justify-between gap-3">
          <!-- Hamburger -->
          <button
            class="text-gray-300 w-8 h-9 text-xl shrink-0 border rounded-lg"
            @click="mobileMenuOpen = true"
            aria-label="Open menu"
          >
            <i class="bi bi-list text-black"></i>
          </button>

          <!-- Logo -->
          <a href="/" class="shrink-0">
            <img :src="logo" alt="Mera Buttu" class="h-14 w-auto" />
          </a>

          <div class="flex-1"></div>

          <!-- Search icon -->
          <button
            class="w-9 h-9 rounded-full border border-gray-300 bg-white flex items-center justify-center text-black shrink-0"
            aria-label="Open search"
            @click="openSearch"
          >
            <i class="bi bi-search text-[16px]"></i>
          </button>

          <!-- Cart -->
          <a
            href="#"
            class="relative w-9 h-9 rounded-full border border-gray-300 bg-white flex items-center justify-center text-black shrink-0"
            aria-label="Cart"
          >
            <i class="bi bi-bag text-[16px]"></i>

            <span
              v-if="cartCount"
              class="absolute -top-1 -right-1 bg-coral text-white text-[10px] rounded-full w-5 h-5 flex items-center justify-center"
            >
              {{ cartCount }}
            </span>
          </a>
        </div>

        <!-- Search overlay -->
        <Transition name="slide-left">
          <div v-if="searchOpen" class="fixed inset-0 bg-white z-50 flex flex-col">
            <form
              class="relative flex items-center gap-3 border-b border-gray-100 px-3 py-2.5 shrink-0"
              @submit.prevent="submitSearch"
            >
              <button
                type="button"
                class="text-2xl text-brown shrink-0"
                aria-label="Close search"
                @click="closeSearch"
              >
                <i class="bi bi-arrow-left"></i>
              </button>

              <input
                ref="searchInput"
                v-model="searchQuery"
                type="text"
                placeholder="Search medicines & health..."
                class="flex-1 min-w-0 bg-transparent border-0 text-base text-brown placeholder:text-gray-400 focus:outline-none focus:ring-0"
              />

              <button
                type="button"
                class="shrink-0 h-9 w-9 rounded-full bg-brown text-white flex items-center justify-center"
                :class="isListening ? 'animate-pulse' : ''"
                aria-label="Search by voice"
                @click="startVoiceSearch"
              >
                <i class="bi bi-mic-fill text-sm"></i>
              </button>

              <!-- Filter button -->
              <button
                type="button"
                class="relative flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-gray-300 text-brown"
                aria-label="Open search filters"
                @click="filterOpen = !filterOpen"
              >
                <i class="bi bi-sliders2 text-md"></i>

                <span
                  v-if="selectedFilters.length"
                  class="absolute -right-1 -top-1 flex h-4 min-w-4 items-center justify-center rounded-full bg-primary px-1 text-[10px] font-semibold text-white"
                >
                  {{ selectedFilters.length }}
                </span>
              </button>

              <!-- Filter dropdown -->
              <div
                v-if="filterOpen"
                class="absolute right-3 top-14 z-20 w-64 rounded-xl border border-gray-100 bg-white p-3 shadow-lg"
              >
                <div class="mb-3 flex items-center justify-between">
                  <p class="text-sm font-semibold text-brown">Filter by category</p>

                  <button
                    v-if="selectedFilters.length"
                    type="button"
                    class="text-xs font-medium text-primary"
                    @click="selectedFilters = []"
                  >
                    Clear all
                  </button>
                </div>

                <label
                  v-for="filter in filterOptions"
                  :key="filter"
                  class="flex cursor-pointer items-center gap-3 rounded-lg px-2 py-2 hover:bg-gray-50"
                >
                  <input
                    type="checkbox"
                    :checked="selectedFilters.includes(filter)"
                    class="h-4 w-4 accent-primary"
                    @change="toggleFilter(filter)"
                  />

                  <span class="text-sm text-gray-700">{{ filter }}</span>
                </label>

                <button
                  type="button"
                  class="mt-3 w-full rounded-lg bg-primary py-2 text-sm font-semibold text-white"
                  @click="filterOpen = false"
                >
                  Apply Filters
                </button>
              </div>
            </form>

            <!-- Results fill the rest of the screen -->
            <div class="flex-1 overflow-y-auto">
              <ul v-if="searchQuery.trim() && searchResults.length">
                <li v-for="term in searchResults" :key="term">
                  <button
                    type="button"
                    class="w-full flex items-center gap-3 px-4 py-3 text-left text-sm text-brown hover:bg-gray-50 transition-colors"
                    @click="selectResult(term)"
                  >
                    <i class="bi bi-search text-gray-400"></i>
                    <span>{{ term }}</span>
                  </button>
                </li>
              </ul>
              <p v-else-if="searchQuery.trim()" class="px-4 py-6 text-center text-sm text-gray-400">
                No results for "{{ searchQuery }}"
              </p>
            </div>
          </div>
        </Transition>
      </div>
    </div>

    <!-- Slide-out menu (hamburger drawer) -->
    <Transition name="slide-right">
      <div v-if="mobileMenuOpen" class="fixed inset-0 z-50" @click.self="mobileMenuOpen = false">
        <div class="bg-white w-72 h-full shadow-xl p-5 overflow-y-auto">
          <RouterLink
            to="/account"
            class="mb-5 flex w-full items-center gap-3 border-b border-gray-200 pb-5 text-left"
            @click="openAuth"
          >
            <div
              class="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border-2 border-gray-300 bg-orange-50 text-2xl text-brown"
            >
              <i class="bi bi-person"></i>
            </div>

            <div class="flex-1">
              <p class="text-xl font-semibold leading-tight text-gray-900">Hi, there!</p>

              <p class="mt-1 text-sm text-gray-600">Login / Sign Up</p>
            </div>

            <i class="bi bi-chevron-right text-xl text-gray-700"></i>
          </RouterLink>

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

  <!-- web screen -->
  <header class="w-full" v-else>
    <!-- Top Utility Bar -->
    <div class="bg-primary-light border-b border-accent/20 text-black text-xs sm:text-sm">
      <div class="mx-auto max-w-350 px-4 py-2 flex items-center justify-between gap-4">
        <p class="flex items-center gap-2 truncate">
          <i class="bi bi-gift text-primary text-base shrink-0"></i>
          <span class="truncate">
            Welcome to Mera Buttu – Your One-Stop Store for Every Little Need!
          </span>
        </p>

        <div class="flex items-center gap-6 shrink-0">
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
            <img :src="logo" alt="Mera Buttu" class="h-10 sm:h-18 w-auto" />
          </a>

          <!-- Search bar -->
          <div class="flex flex-1 max-w-2xl">
            <div class="relative w-full">
              <input
                type="text"
                placeholder="Search for products, brands and more..."
                class="w-full rounded-full border border-gray-400 bg-gray-50 pl-5 pr-14 py-2.5 text-sm placeholder:text-gray-500 focus:outline-none focus:ring-1 focus:ring-primary/40 focus:border-primary transition-colors"
              />
              <button
                class="absolute right-1 top-1/2 -translate-y-1/2 h-9 w-9 rounded-full bg-primary text-white flex items-center justify-center hover:bg-primary/90 transition-colors cursor-pointer"
                aria-label="Search"
              >
                <i class="bi bi-search"></i>
              </button>
            </div>
          </div>
        </div>

        <!-- Right actions -->
        <div class="flex items-center gap-4 sm:gap-4 lg:gap-10">
          <!-- Account -->
          <!-- <RouterLink
            to="/account"
            class="flex items-center gap-2 hover:text-primary transition-colors"
          >
            <i class="bi bi-person text-3xl"></i>
            <span class="leading-tight text-left">
              <span class="block text-[12px] text-gray-700">Login / Signup</span>
              <span class="flex items-center gap-1 text-sm font-medium">
                My Account
                <i class="bi bi-chevron-down text-xs"></i>
              </span>
            </span>
          </RouterLink> -->

          <!-- Not logged in -->
          <button
            v-if="!isLoggedIn"
            type="button"
            class="flex items-center gap-3 hover:text-primary transition-colors"
            @click="login"
          >
            <i class="bi bi-box-arrow-in-right text-[30px]"></i>

            <span class="leading-tight text-left">
              <span class="block text-[12px] text-gray-700">Welcome</span>
              <span class="text-sm font-medium">Login Now</span>
            </span>
          </button>

          <!-- Logged in -->
          <div v-else class="relative" @mouseenter="openAccountMenu" @mouseleave="closeAccountMenu">
            <button
              type="button"
              class="flex items-center gap-2 text-[#d15951] hover:text-primary transition-colors"
            >
              <i class="bi bi-person-circle text-3xl"></i>

              <span class="leading-tight text-left">
                <span class="block text-[12px] text-gray-700">Welcome back</span>

                <span class="flex items-center gap-1 text-sm font-medium">
                  My Account
                  <i
                    class="bi bi-chevron-down text-xs transition-transform"
                    :class="{ 'rotate-180': showAccountMenu }"
                  ></i>
                </span>
              </span>
            </button>

            <div
              v-if="showAccountMenu"
              class="absolute right-0 z-50 mt-2 w-48 rounded-md border border-gray-200 bg-white py-1 shadow-lg"
            >
              <RouterLink to="/account" class="block px-4 py-2 text-sm hover:bg-gray-100">
                My Profile
              </RouterLink>

              <RouterLink to="/orders" class="block px-4 py-2 text-sm hover:bg-gray-100">
                My Orders
              </RouterLink>

              <RouterLink to="/account" class="block px-4 py-2 text-sm hover:bg-gray-100">
                Whishlist
              </RouterLink>

              <RouterLink to="/orders" class="block px-4 py-2 text-sm hover:bg-gray-100">
                Addresses
              </RouterLink>

              <RouterLink to="/orders" class="block px-4 py-2 text-sm hover:bg-gray-100">
                Coupons
              </RouterLink>

              <button
                type="button"
                class="block w-full px-4 py-2 text-left text-sm text-red-600 hover:bg-gray-100 cursor-pointer"
                @click="logout"
              >
                <i class="bi bi-box-arrow-right mr-2"></i>
                Logout
              </button>
            </div>
          </div>

          <!-- Wishlist -->
          <a href="#" class="relative flex gap-3 items-center hover:text-primary transition-colors">
            <span class="relative">
              <i class="bi bi-heart text-2xl"></i>
              <span
                class="absolute -top-1.5 -right-2 bg-[#ff928a] text-white text-[12px] leading-none rounded-full h-4.5 w-4.5 flex items-center justify-center"
              >
                {{ wishlistCount }}
              </span>
            </span>
            <span class="text-[13px] font-medium mt-0.5">Wishlist</span>
          </a>

          <!-- Cart -->
          <a href="#" class="relative flex gap-3 items-center hover:text-primary transition-colors">
            <span class="relative">
              <i class="bi bi-bag text-2xl"></i>
              <span
                class="absolute -top-1.5 -right-2 bg-coral text-white text-[12px] font-semibold leading-none rounded-full h-4.5 w-4.5 flex items-center justify-center"
              >
                {{ cartCount }}
              </span>
            </span>
            <span class="text-[13px] font-medium mt-0.5">Cart</span>
          </a>
        </div>
      </div>

      <!-- Category Bar -->
      <nav class="bg-white">
        <div class="mx-auto max-w-350 px-4 mb-2">
          <div class="flex items-center flex-wrap gap-2 border rounded-xl border-gray-200">
            <button
              class="flex items-center gap-2 bg-primary-light-2 font-medium rounded-xl px-4 py-2 text-sm shrink-0 transition-colors cursor-pointer"
            >
              <i class="bi bi-grid text-base"></i>
              <span>All Categories</span>
            </button>

            <a
              v-for="cat in categories"
              :key="cat.name"
              href="#"
              class="flex items-center gap-1.5 px-3 py-2 text-sm font-medium rounded-full shrink-0 whitespace-nowrap transition-colors"
              :class="
                cat.highlight ? 'text-coral hover:bg-coral/20' : 'text-brown hover:bg-brown/10'
              "
            >
              <img :src="cat.icon" alt="" class="h-5 w-5 object-contain shrink-0" />
              <span>{{ cat.name }}</span>
            </a>
          </div>
        </div>
      </nav>
    </div>
  </header>

  <!-- bottom nav for mobile screen -->
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
        <span class="leading-none">
          {{ item.label }}
        </span>
      </router-link>
    </div>
  </nav>
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
