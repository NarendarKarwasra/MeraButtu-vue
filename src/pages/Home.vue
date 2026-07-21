<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'
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

// hero mobile
import heroMobile1 from '@/assets/images/hero-main-mobile-view.webp'
import heroMobile2 from '@/assets/images/hero-main-mobile-view.webp'
import heroMobile3 from '@/assets/images/hero-main-mobile-view.webp'
const activeSlide = ref(0)
let sliderInterval
const mobileSlides = [
  {
    image: heroMobile1,
    link: '/offers',
    alt: 'View offers',
  },
  {
    image: heroMobile2,
    link: '/products',
    alt: 'View products',
  },
  {
    image: heroMobile3,
    link: '/contact',
    alt: 'Contact us',
  },
]
const nextSlide = () => {
  activeSlide.value = (activeSlide.value + 1) % mobileSlides.length
}
const goToSlide = (index) => {
  activeSlide.value = index
}
onMounted(() => {
  sliderInterval = setInterval(nextSlide, 4000)
})
onBeforeUnmount(() => {
  clearInterval(sliderInterval)
})

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
const mobileTrustPoints = trustPoints.filter((point) => point.title !== 'Premium Quality')

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
const activePromoSlide = ref(0)
let promoSliderInterval

const nextPromoSlide = () => {
  activePromoSlide.value = (activePromoSlide.value + 1) % promoBanners.length
}

const goToPromoSlide = (index) => {
  activePromoSlide.value = index
}

onMounted(() => {
  promoSliderInterval = setInterval(nextPromoSlide, 4000)
})

onBeforeUnmount(() => {
  clearInterval(promoSliderInterval)
})

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
      <div v-if="isMobile">
        <!-- hero section -->
        <section class="mx-auto max-w-350 px-4">
          <div class="w-full overflow-hidden rounded-xl">
            <div
              class="flex transition-transform duration-600 ease-in-out"
              :style="{ transform: `translateX(-${activeSlide * 100}%)` }"
            >
              <a
                v-for="(slide, index) in mobileSlides"
                :key="index"
                :href="slide.link"
                class="block w-full shrink-0"
              >
                <img :src="slide.image" :alt="slide.alt" class="block w-full h-auto object-cover" />
              </a>
            </div>
          </div>

          <!-- Clickable dots -->
          <div class="mt-4 flex justify-center gap-2">
            <button
              v-for="(_, index) in mobileSlides"
              :key="index"
              type="button"
              :aria-label="`Go to slide ${index + 1}`"
              class="h-1 rounded-full transition-all duration-600"
              :class="activeSlide === index ? 'w-7 bg-black' : 'w-2.5 bg-gray-300'"
              @click="goToSlide(index)"
            />
          </div>
        </section>

        <!-- Shop by Category -->
        <section v-reveal class="mx-auto max-w-350 px-4 mt-6 sm:mt-8">
          <div class="flex items-center justify-between mb-5">
            <h2 class="flex items-center gap-2 text-xl sm:text-2xl font-semibold text-brown">
              Shop by Category
              <i class="bi bi-heart-fill text-coral/70 text-base rotate-20 mt-2"></i>
            </h2>
            <a
              href="#"
              class="flex items-center gap-1 text-sm font-medium text-primary hover:underline"
            >
              View All
              <i class="bi bi-chevron-right text-xs"></i>
            </a>
          </div>

          <div class="grid grid-cols-4 gap-4 sm:grid-cols-6 lg:grid-cols-8">
            <a
              v-for="cat in categories"
              :key="cat.name"
              :href="cat.link"
              class="group flex min-w-0 flex-col items-center gap-2 text-center"
            >
              <div
                class="flex aspect-square w-full items-center justify-center rounded-full bg-gray-100 p-4 transition-transform duration-300 group-hover:scale-105"
              >
                <img :src="cat.icon" :alt="cat.name" class="h-full w-full object-contain" />
              </div>

              <span
                class="text-xs font-medium text-gray-800 transition-colors duration-300 group-hover:text-coral sm:text-sm"
              >
                {{ cat.name }}
              </span>
            </a>
          </div>
        </section>

        <!-- Promo Banners Slider -->
        <section v-reveal class="mx-auto max-w-350 px-4 mt-8 sm:mt-10">
          <div class="w-full overflow-hidden rounded-2xl">
            <div
              class="flex transition-transform duration-500 ease-in-out"
              :style="{ transform: `translateX(-${activePromoSlide * 100}%)` }"
            >
              <a
                v-for="banner in promoBanners"
                :key="banner.title"
                :href="banner.link"
                class="block w-full shrink-0"
              >
                <div
                  class="relative flex min-h-38 items-center gap-4 overflow-hidden rounded-2xl"
                  :class="banner.bg"
                >
                  <img
                    :src="banner.image"
                    :alt="banner.title"
                    class="promo-banner-image ml-4 h-auto w-30 object-contain sm:w-44"
                  />

                  <div class="relative z-10 flex-1 pr-4">
                    <h3 class="mb-1 pt-1 text-xl font-semibold" :style="{ color: banner.color }">
                      {{ banner.title }}
                    </h3>

                    <p class="mb-2 max-w-40 text-sm leading-[1.1rem] text-gray-600">
                      {{ banner.subtitle }}
                    </p>

                    <span
                      class="inline-flex items-center gap-1.5 rounded-full px-4 py-1.5 text-xs font-semibold text-white"
                      :style="{ backgroundColor: banner.color }"
                    >
                      Explore Now
                      <i class="bi bi-chevron-right text-[10px]"></i>
                    </span>
                  </div>
                </div>
              </a>
            </div>
          </div>

          <!-- Promo slider dots -->
          <div class="mt-4 flex justify-center gap-2">
            <button
              v-for="(_, index) in promoBanners"
              :key="index"
              type="button"
              :aria-label="`Go to promo slide ${index + 1}`"
              class="h-1 rounded-full transition-all duration-500"
              :class="activePromoSlide === index ? 'w-7 bg-black' : 'w-2.5 bg-gray-300'"
              @click="goToPromoSlide(index)"
            />
          </div>
        </section>

        <!-- Shop by Age -->
        <section v-reveal class="mx-auto max-w-350 px-4 mt-6 sm:mt-8">
          <div class="flex items-center justify-between mb-5">
            <h2 class="flex items-center gap-2 text-xl sm:text-2xl font-semibold text-brown">
              Shop by Age
              <i class="bi bi-heart-fill text-coral/70 text-base rotate-20 mt-2"></i>
            </h2>
            <a
              href="#"
              class="flex items-center gap-1 text-sm font-medium text-primary hover:underline"
            >
              View All
              <i class="bi bi-chevron-right text-xs"></i>
            </a>
          </div>

          <div class="age-grid-container grid grid-cols-3 gap-2 pb-1">
            <a
              v-for="age in ageGroups"
              :key="age.label"
              href="#"
              class="flex items-center gap-2 border border-gray-300 rounded-lg px-4 sm:px-6 xl:px-10 py-2 shrink-0 hover:border-primary hover:bg-primary/20 transition-colors"
            >
              <span
                class="h-6 w-6 rounded-full bg-gray-50 flex items-center justify-center shrink-0"
              >
                <img :src="age.icon" alt="" class="h-6 w-6 sm:h-7 sm:w-7 object-contain" />
              </span>
              <span class="text-sm font-medium text-brown whitespace-nowrap">{{ age.label }}</span>
            </a>
          </div>
        </section>

        <!-- Trust Features -->
        <section v-reveal class="relative z-10 mx-auto mt-8 max-w-350 px-4">
          <div class="trust-feature-grid-container grid grid-cols-4 gap-3">
            <div
              v-for="point in mobileTrustPoints"
              :key="point.title"
              class="rounded-xl bg-gray-100 p-3"
            >
              <img
                :src="point.icon"
                :alt="point.title"
                class="mb-2 h-8 w-auto shrink-0 object-contain"
              />

              <p class="mb-2 text-sm font-medium leading-5 text-gray-900">
                {{ point.title }}
              </p>
            </div>
          </div>
        </section>
      </div>

      <div v-else>
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
        <section v-reveal class="relative z-10 mx-auto max-w-350 px-4 mt-4 sm:-mt-6">
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
        <section v-reveal class="mx-auto max-w-350 px-4 mt-6 sm:mt-8">
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
                  class="w-auto h-2/3 object-contain group-hover:scale-110 transition-all duration-300"
                />
                <span
                  class="text-sm font-medium mt-3 text-center group-hover:text-primary transition-colors duration-300"
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
        <section v-reveal class="mx-auto max-w-350 px-4 mt-8 sm:mt-10">
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
        <section v-reveal class="mx-auto max-w-350 px-4 mt-6 sm:mt-8">
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
              <span
                class="h-6 w-6 rounded-full bg-gray-50 flex items-center justify-center shrink-0"
              >
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
      </div>
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
