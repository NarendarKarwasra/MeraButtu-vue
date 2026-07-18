<script setup>
import { ref } from 'vue'
import { useDevice } from '@/stores/devive.js'

const { isMobile } = useDevice()

import DefaultLayout from '@/layouts/DefaultLayout.vue'

// Header Icons
import shippingIcon from '@/assets/images/icons/shipping-icon.webp'
import safeIcon from '@/assets/images/icons/safe-icon.webp'
import premiumIcon from '@/assets/images/icons/premium-icon.webp'
import returnIcon from '@/assets/images/icons/return-icon.webp'
import supportIcon from '@/assets/images/icons/support-icon.webp'

// hero
import heroDesktop from '@/assets/images/hero-main.webp'
import heroMobile from '@/assets/images/hero-main-mobile-view.webp'

// Categories
import catFashion from '@/assets/images/cat-fashion.webp'
import catToy from '@/assets/images/cat-toy.webp'
import catBabyCare from '@/assets/images/cat-babycare.webp'
import catFeeding from '@/assets/images/cat-feeding.webp'
import catNursery from '@/assets/images/cat-nursery.webp'
import catBooks from '@/assets/images/cat-books.webp'
import catGear from '@/assets/images/cat-gear.webp'
import catGift from '@/assets/images/cat-gift.webp'

// Promo banners
import newbornBanner from '@/assets/images/special-items-newborn.webp'
import kidsBanner from '@/assets/images/special-items-kids.webp'
import toysBanner from '@/assets/images/special-items-toys.webp'

// cat category
import age0To6Icon from '@/assets/images/icons/rattle-icon.webp'
import age6To12Icon from '@/assets/images/icons/feeding-bottle-icon.webp'
import age1To2Icon from '@/assets/images/icons/teddy-bear-icon.webp'
import age2To4Icon from '@/assets/images/icons/toy-pyramid-icon.webp'
import age4To6Icon from '@/assets/images/icons/toy-car-icon.webp'
import age6PlusIcon from '@/assets/images/icons/rocket-icon.webp'

const trustPoints = [
  {
    icon: shippingIcon,
    title: 'Free Shipping',
    subtitle: 'On orders above ₹999',
  },
  {
    icon: safeIcon,
    title: '100% Safe & Secure',
    subtitle: 'Secure payments',
  },
  {
    icon: premiumIcon,
    title: 'Premium Quality',
    subtitle: 'For your little ones',
  },
  {
    icon: returnIcon,
    title: 'Easy Returns',
    subtitle: 'Hassle free returns',
  },
  {
    icon: supportIcon,
    title: '24x7 Support',
    subtitle: 'We are here to help',
  },
]

const categories = [
  { name: 'Fashion', icon: catFashion, bg: 'bg-[#feecec]' },
  { name: 'Toys & Games', icon: catToy, bg: 'bg-[#fceee3]' },
  { name: 'Baby Care', icon: catBabyCare, bg: 'bg-[#e8f4f4]' },
  { name: 'Feeding', icon: catFeeding, bg: 'bg-[#fef5e6]' },
  { name: 'Nursery', icon: catNursery, bg: 'bg-[#feecec]' },
  { name: 'Books & Learning', icon: catBooks, bg: 'bg-[#f0f1f6]' },
  { name: 'Gear & Travel', icon: catGear, bg: 'bg-[#feeee1]' },
  { name: 'Gifts & More', icon: catGift, bg: 'bg-[#fbf5e7]' },
]

const hoveredButton = ref(null)
const promoBanners = [
  {
    title: 'New Born Essentials',
    subtitle: 'Everything for your little bundle of joy',
    image: newbornBanner,
    bg: 'bg-[#FBD2D4]',
    color: '#e9645f',
    hoverColor: '#d44d48',
  },
  {
    title: 'Trending Kids Fashion',
    subtitle: "Cute, comfy & colorful styles they'll love!",
    image: kidsBanner,
    bg: 'bg-[#feecc6]',
    color: '#df850b',
    hoverColor: '#c77300',
  },
  {
    title: 'Play. Learn. Grow',
    subtitle: 'Fun toys & games for every little explorer',
    image: toysBanner,
    bg: 'bg-[#BDE0DB]',
    color: '#31a493',
    hoverColor: '#1c7c6e',
  },
]

const ageGroups = [
  {
    label: '0 – 6 Months',
    icon: age0To6Icon,
  },
  {
    label: '6 – 12 Months',
    icon: age6To12Icon,
  },
  {
    label: '1 – 2 Years',
    icon: age1To2Icon,
  },
  {
    label: '2 – 4 Years',
    icon: age2To4Icon,
  },
  {
    label: '4 – 6 Years',
    icon: age4To6Icon,
  },
  {
    label: '6+ Years',
    icon: age6PlusIcon,
  },
]
</script>

<template>
  <DefaultLayout>
    <main>
      <section class="mx-auto">
        <div class="w-full overflow-hidden">
          <img
            :src="isMobile ? heroMobile : heroDesktop"
            alt="Everything they need, all in one happy place"
            class="w-full h-auto object-cover"
          />
        </div>
      </section>

      <!-- Trust Bar -->
      <section class="relative z-10 mx-auto max-w-350 px-4 mt-4 sm:-mt-6">
        <div
          class="features bg-white rounded-2xl shadow-sm border border-gray-100 px-4 sm:px-8 py-5 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-y-6 gap-x-4"
        >
          <div v-for="point in trustPoints" :key="point.title" class="flex items-center gap-3">
            <img :src="point.icon" alt="" class="h-8 w-auto object-contain shrink-0" />
            <div class="leading-tight">
              <p class="text-[16px] font-semibold">{{ point.title }}</p>
              <p class="text-[14px] mt-1 text-gray-500">{{ point.subtitle }}</p>
            </div>
          </div>
        </div>
      </section>

      <!-- Shop by Category -->
      <section class="mx-auto max-w-350 px-4 mt-6 sm:mt-8">
        <div class="flex items-center justify-between mb-5">
          <h2 class="flex items-center gap-2 text-xl sm:text-2xl font-semibold text-brown">
            Shop by Category
            <i class="bi bi-heart-fill text-coral/70 text-base rotate-20 mt-2"></i>
          </h2>
          <a
            href="#"
            class="hidden sm:flex items-center gap-1 text-sm font-medium text-primary hover:underline"
          >
            View All Categories
            <i class="bi bi-chevron-right text-xs"></i>
          </a>
        </div>

        <div class="category-grid grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-8 gap-3 sm:gap-4">
          <a
            v-for="cat in categories"
            :key="cat.name"
            href="#"
            class="flex flex-col items-center gap-2 group border-2 border-gray-200 rounded-2xl overflow-hidden"
          >
            <div
              class="w-full aspect-square flex flex-col items-center justify-center overflow-hidden"
              :class="cat.bg"
            >
              <img
                :src="cat.icon"
                alt=""
                class="w-auto h-2/3 object-contain group-hover:scale-110 transition-all duration-[0.3s]"
              />
              <span
                class="text-sm font-medium mt-3 text-center group-hover:text-primary transition-colors duration-[0.3s]"
              >
                {{ cat.name }}
              </span>
            </div>
          </a>
        </div>

        <a
          href="#"
          class="sm:hidden block m-auto mt-4 text-center text-md font-medium py-1 w-50 rounded-lg bg-primary text-white hover:underline"
        >
          View All Categories
        </a>
      </section>

      <!-- Promo Banners -->
      <section class="mx-auto max-w-350 px-4 mt-8 sm:mt-10">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div
            v-for="banner in promoBanners"
            :key="banner.title"
            class="relative rounded-2xl overflow-hidden flex items-center gap-4"
            :class="banner.bg"
          >
            <img
              :src="banner.image"
              alt=""
              class="promo-banner-image w-40 h-auto sm:w-40 ml-4 object-contain"
            />

            <div class="flex-1 relative z-10">
              <h3 class="text-xl font-semibold pt-1 mb-1" :style="{ color: banner.color }">
                {{ banner.title }}
              </h3>
              <p class="text-sm text-gray-600 max-w-40 mb-2 leading-[1.1rem]">
                {{ banner.subtitle }}
              </p>
              <button
                class="inline-flex items-center mb-2 gap-1.5 text-white text-xs font-semibold rounded-full px-4 py-1.5 transition-all duration-300 cursor-pointer"
                :style="{
                  backgroundColor:
                    hoveredButton === banner.title ? banner.hoverColor : banner.color,
                }"
                @mouseenter="hoveredButton = banner.title"
                @mouseleave="hoveredButton = null"
              >
                Explore Now
                <i class="bi bi-chevron-right text-[10px]"></i>
              </button>
            </div>
          </div>
        </div>
      </section>

      <!-- Shop by Age -->
      <section class="mx-auto max-w-350 px-4 mt-6 sm:mt-8 mb-12">
        <div class="flex items-center justify-between mb-5">
          <h2 class="flex items-center gap-2 text-xl sm:text-2xl font-semibold text-brown">
            Shop by Age
            <i class="bi bi-heart-fill text-coral/70 text-base rotate-20 mt-2"></i>
          </h2>
          <a
            href="#"
            class="hidden sm:flex items-center gap-1 text-sm font-medium text-primary hover:underline"
          >
            View All
            <i class="bi bi-chevron-right text-xs"></i>
          </a>
        </div>

        <div class="flex flex-wrap gap-3 pb-1">
          <a
            v-for="age in ageGroups"
            :key="age.label"
            href="#"
            class="flex items-center gap-2 border border-gray-300 rounded-full px-4 sm:px-6 xl:px-10 py-2 shrink-0 hover:border-primary hover:bg-primary/20 transition-colors"
          >
            <span class="h-6 w-6 rounded-full bg-gray-50 flex items-center justify-center shrink-0">
              <img :src="age.icon" alt="" class="h-6 w-6 sm:h-7 sm:w-7 object-contain" />
            </span>
            <span class="text-sm font-medium text-brown whitespace-nowrap">{{ age.label }}</span>
          </a>
        </div>

        <a
          href="#"
          class="sm:hidden block m-auto mt-4 text-center text-md font-medium py-1 w-40 rounded-lg bg-primary text-white hover:underline"
        >
          View All
        </a>
      </section>
    </main>
  </DefaultLayout>
</template>

<style scoped>
.no-scrollbar {
  scrollbar-width: none;
  -ms-overflow-style: none;
}
.no-scrollbar::-webkit-scrollbar {
  display: none;
}
</style>
