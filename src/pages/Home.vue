<script setup>
import DefaultLayout from '@/layouts/DefaultLayout.vue'

// Header Icons
import shippingIcon from '@/assets/images/icons/shipping-icon.webp'
import safeIcon from '@/assets/images/icons/safe-icon.webp'
import premiumIcon from '@/assets/images/icons/premium-icon.webp'
import returnIcon from '@/assets/images/icons/return-icon.webp'
import supportIcon from '@/assets/images/icons/support-icon.webp'

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
  { name: 'Fashion', icon: catFashion, bg: 'bg-primary/10' },
  { name: 'Toys & Games', icon: catToy, bg: 'bg-accent/15' },
  { name: 'Baby Care', icon: catBabyCare, bg: 'bg-secondary/10' },
  { name: 'Feeding', icon: catFeeding, bg: 'bg-accent/10' },
  { name: 'Nursery', icon: catNursery, bg: 'bg-primary/10' },
  { name: 'Books & Learning', icon: catBooks, bg: 'bg-secondary/10' },
  { name: 'Gear & Travel', icon: catGear, bg: 'bg-brown/5' },
  { name: 'Gifts & More', icon: catGift, bg: 'bg-accent/15' },
]

const promoBanners = [
  {
    title: 'New Born Essentials',
    subtitle: 'Everything for your little bundle of joy',
    image: newbornBanner,
    bg: 'bg-primary/10',
    accent: 'text-coral',
  },
  {
    title: 'Trending Kids Fashion',
    subtitle: "Cute, comfy & colorful styles they'll love!",
    image: kidsBanner,
    bg: 'bg-accent/15',
    accent: 'text-accent',
  },
  {
    title: 'Play. Learn. Grow',
    subtitle: 'Fun toys & games for every little explorer',
    image: toysBanner,
    bg: 'bg-secondary/10',
    accent: 'text-secondary',
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
            src="../assets/images/hero-main.webp"
            alt="Everything they need, all in one happy place"
            class="w-full h-auto object-cover"
          />
        </div>
      </section>

      <!-- Trust Bar -->
      <section class="relative z-10 mx-auto max-w-350 px-4 mt-4 sm:-mt-6">
        <div
          class="bg-white rounded-2xl shadow-sm border border-gray-100 px-4 sm:px-8 py-5 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-y-6 gap-x-4"
        >
          <div v-for="point in trustPoints" :key="point.title" class="flex items-center gap-3">
            <img :src="point.icon" alt="" class="h-8 w-8 object-contain shrink-0" />
            <div class="leading-tight">
              <p class="text-sm font-semibold text-brown">{{ point.title }}</p>
              <p class="text-xs text-gray-500">{{ point.subtitle }}</p>
            </div>
          </div>
        </div>
      </section>

      <!-- Shop by Category -->
      <section class="mx-auto max-w-350 px-4 mt-10 sm:mt-14">
        <div class="flex items-center justify-between mb-5">
          <h2 class="flex items-center gap-2 text-xl sm:text-2xl font-bold text-brown">
            Shop by Category
            <i class="bi bi-heart-fill text-coral text-base"></i>
          </h2>
          <a href="#" class="hidden sm:block text-sm font-medium text-primary hover:underline">
            View All Categories
          </a>
        </div>

        <div class="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-3 sm:gap-4">
          <a
            v-for="cat in categories"
            :key="cat.name"
            href="#"
            class="flex flex-col items-center gap-2 group"
          >
            <div
              class="w-full aspect-square rounded-2xl flex items-center justify-center overflow-hidden"
              :class="cat.bg"
            >
              <img :src="cat.icon" alt="" class="w-2/3 h-2/3 object-contain" />
            </div>
            <span
              class="text-sm font-medium text-brown text-center group-hover:text-primary transition-colors"
            >
              {{ cat.name }}
            </span>
          </a>
        </div>

        <a
          href="#"
          class="sm:hidden mt-4 block text-center text-sm font-medium text-primary hover:underline"
        >
          View All Categories
        </a>
      </section>

      <!-- Promo Banners -->
      <section class="mx-auto max-w-350 px-4 mt-8 sm:mt-10">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div
            v-for="banner in promoBanners"
            :key="banner.title"
            class="relative rounded-2xl overflow-hidden p-6 flex items-center gap-4 min-h-35"
            :class="banner.bg"
          >
            <div class="flex-1 relative z-10">
              <h3 class="text-lg font-bold text-brown mb-1">{{ banner.title }}</h3>
              <p class="text-sm text-gray-600 mb-3">{{ banner.subtitle }}</p>
              <button
                class="inline-flex items-center gap-1.5 text-white text-xs font-semibold rounded-full px-4 py-2 bg-primary hover:bg-primary/90 transition-colors"
              >
                Explore Now
                <i class="bi bi-chevron-right text-[10px]"></i>
              </button>
            </div>
            <img
              :src="banner.image"
              alt=""
              class="w-24 h-24 sm:w-28 sm:h-28 object-contain shrink-0"
            />
          </div>
        </div>
      </section>

      <!-- Shop by Age -->
      <section class="mx-auto max-w-350 px-4 mt-10 sm:mt-14 mb-12">
        <div class="flex items-center justify-between mb-5">
          <h2 class="flex items-center gap-2 text-xl sm:text-2xl font-bold text-brown">
            Shop by Age
            <i class="bi bi-heart-fill text-coral text-base"></i>
          </h2>
          <a
            href="#"
            class="hidden sm:flex items-center gap-1 text-sm font-medium text-primary hover:underline"
          >
            View All
            <i class="bi bi-chevron-right text-xs"></i>
          </a>
        </div>

        <div class="flex gap-3 overflow-x-auto no-scrollbar pb-1">
          <a
            v-for="age in ageGroups"
            :key="age.label"
            href="#"
            class="flex items-center gap-2 border border-gray-200 rounded-full pl-2 pr-4 py-2 shrink-0 hover:border-primary hover:bg-primary/5 transition-colors"
          >
            <span class="h-8 w-8 rounded-full bg-gray-50 flex items-center justify-center shrink-0">
              <img :src="age.icon" alt="" class="h-5 w-5 object-contain" />
            </span>
            <span class="text-sm font-medium text-brown whitespace-nowrap">{{ age.label }}</span>
          </a>
        </div>
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
