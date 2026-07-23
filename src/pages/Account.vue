<script setup>
import { useRoute } from 'vue-router'
const route = useRoute()

import DefaultLayout from '@/layouts/DefaultLayout.vue'
import Breadcrumbs from '@/components/Breadcrumbs.vue'

import profileAvatar from '@/assets/images/profile-lady-icon.webp'

const user = {
  name: 'Priya Sharma',
  email: 'priya.sharma@email.com',
  phone: '+91 98765 43210',
  avatar: profileAvatar,
}

const stats = [
  {
    label: 'Orders',
    count: 0,
    icon: 'bi-bag-fill',
    iconBg: 'bg-secondary/10',
    iconColor: 'text-secondary',
    sub: 'View all orders',
    to: '/orders',
  },
  {
    label: 'Wishlist',
    count: 0,
    icon: 'bi-heart-fill',
    iconBg: 'bg-coral/10',
    iconColor: 'text-coral',
    sub: 'View your picks',
    to: '/wishlist',
  },
  {
    label: 'Coupons',
    count: 0,
    icon: 'bi-ticket-perforated-fill',
    iconBg: 'bg-accent/15',
    iconColor: 'text-accent',
    sub: 'View offers',
    to: '/coupons',
  },
]

const primaryNav = [
  { label: 'My Account', icon: 'bi-person', to: '/account' },
  { label: 'Orders', icon: 'bi-box-seam', to: '/orders' },
  { label: 'Wishlist', icon: 'bi-heart', to: '/wishlist' },
  { label: 'Addresses', icon: 'bi-geo-alt', to: '/addresses' },
  { label: 'Coupons', icon: 'bi-ticket-perforated', to: '/coupons' },
]

const secondaryNav = [
  { label: 'Account Settings', icon: 'bi-gear', to: '/account/settings' },
  { label: 'Payment Methods', icon: 'bi-credit-card', to: '/account/payment-methods' },
  { label: 'Notifications', icon: 'bi-bell', to: '/account/notifications' },
  { label: 'Help & Support', icon: 'bi-headset', to: '/contact' },
]

const menuCards = [
  {
    title: 'My Account',
    description: 'View and edit your personal information and account details.',
    icon: 'bi-person-fill',
    iconBg: 'bg-orange-100',
    iconColor: 'text-orange-500',
    buttonBg: 'bg-orange-100 hover:bg-orange-200',
    buttonText: 'text-orange-600',
    ctaLabel: 'Manage',
    to: '/account/settings',
  },
  {
    title: 'Orders',
    description: 'Track your orders, view order history and details.',
    icon: 'bi-box-seam-fill',
    iconBg: 'bg-emerald-100',
    iconColor: 'text-emerald-500',
    buttonBg: 'bg-emerald-100 hover:bg-emerald-200',
    buttonText: 'text-emerald-600',
    ctaLabel: 'View Orders',
    to: '/orders',
  },
  {
    title: 'Wishlist',
    description: 'See your saved products and items you love.',
    icon: 'bi-heart-fill',
    iconBg: 'bg-rose-100',
    iconColor: 'text-rose-500',
    buttonBg: 'bg-rose-100 hover:bg-rose-200',
    buttonText: 'text-rose-600',
    ctaLabel: 'View Wishlist',
    to: '/wishlist',
  },
  {
    title: 'Addresses',
    description: 'Manage your saved addresses for faster checkout.',
    icon: 'bi-geo-alt-fill',
    iconBg: 'bg-blue-100',
    iconColor: 'text-blue-500',
    buttonBg: 'bg-blue-100 hover:bg-blue-200',
    buttonText: 'text-blue-600',
    ctaLabel: 'Manage Addresses',
    to: '/addresses',
  },
  {
    title: 'Coupons',
    description: 'View and manage your available coupons and offers.',
    icon: 'bi-ticket-perforated-fill',
    iconBg: 'bg-violet-100',
    iconColor: 'text-violet-500',
    buttonBg: 'bg-violet-100 hover:bg-violet-200',
    buttonText: 'text-violet-600',
    ctaLabel: 'View Coupons',
    to: '/coupons',
  },
]

const settingsCards = [
  {
    title: 'Account Settings',
    description: 'Update your password, email and security preferences.',
    icon: 'bi-gear-fill',
    iconBg: 'bg-teal-50',
    iconColor: 'text-teal-500',
    buttonBg: 'bg-teal-100 hover:bg-teal-200',
    buttonText: 'text-teal-700',
    ctaLabel: 'Settings',
    to: '/account/settings',
  },
  {
    title: 'Payment Methods',
    description: 'Manage your saved cards and payment options.',
    icon: 'bi-credit-card-fill',
    iconBg: 'bg-orange-50',
    iconColor: 'text-orange-500',
    buttonBg: 'bg-orange-100 hover:bg-orange-200',
    buttonText: 'text-orange-700',
    ctaLabel: 'Manage',
    to: '/account/payment-methods',
  },
  {
    title: 'Notifications',
    description: 'Choose how you want to receive updates from us.',
    icon: 'bi-bell-fill',
    iconBg: 'bg-violet-50',
    iconColor: 'text-violet-500',
    buttonBg: 'bg-violet-100 hover:bg-violet-200',
    buttonText: 'text-violet-700',
    ctaLabel: 'Manage',
    to: '/account/notifications',
  },
  {
    title: 'Help & Support',
    description: 'Get help with orders, returns and other queries.',
    icon: 'bi-headset',
    iconBg: 'bg-blue-50',
    iconColor: 'text-blue-500',
    buttonBg: 'bg-blue-100 hover:bg-blue-200',
    buttonText: 'text-blue-700',
    ctaLabel: 'Get Help',
    to: '/contact',
  },
]

const isActive = (path) => route.path === path

// TODO: wire to real auth/logout logic (pinia store + router redirect)
const handleLogout = () => {
  console.log('Logging out...')
}

// trust points  Icons
import shippingIcon from '@/assets/images/icons/shipping-icon.webp'
import safeIcon from '@/assets/images/icons/safe-icon.webp'
import premiumIcon from '@/assets/images/icons/premium-icon.webp'
import returnIcon from '@/assets/images/icons/return-icon.webp'
import supportIcon from '@/assets/images/icons/support-icon.webp'
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

const whatsappLink = 'https://wa.me/918982123458'
</script>

<template>
  <DefaultLayout>
    <section class="mx-auto max-w-350 px-4 py-2 sm:py-4">
      <Breadcrumbs :items="[{ label: 'My Account' }]" />
      <!-- Page heading -->
      <div class="text-center mb-8">
        <h1 class="text-2xl sm:text-3xl font-bold text-brown">MY ACCOUNT</h1>
        <p class="text-md text-gray-600 mt-3 leading-[1.2rem]">
          Manage your account, orders and preferences easily
        </p>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-[260px_1fr] gap-6">
        <!-- Sidebar (desktop) -->
        <aside class="hidden lg:block">
          <nav class="bg-white rounded-2xl border border-gray-100 shadow-sm p-3 sticky top-2">
            <router-link
              v-for="item in primaryNav"
              :key="item.label"
              :to="item.to"
              class="flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium mb-1 transition-colors"
              :class="
                isActive(item.to) ? 'bg-primary/10 text-primary' : 'text-brown hover:bg-gray-100'
              "
            >
              <i class="bi" :class="item.icon"></i>
              <span>{{ item.label }}</span>
            </router-link>

            <hr class="my-3 border-gray-100" />

            <router-link
              v-for="item in secondaryNav"
              :key="item.label"
              :to="item.to"
              class="flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium mb-1 text-brown hover:bg-gray-100 transition-colors"
            >
              <i class="bi" :class="item.icon"></i>
              <span>{{ item.label }}</span>
            </router-link>

            <button
              type="button"
              class="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium text-coral hover:bg-coral/5 transition-colors cursor-pointer"
              @click="handleLogout"
            >
              <i class="bi bi-box-arrow-right"></i>
              <span>Logout</span>
            </button>

            <hr class="my-3 border-gray-100" />

            <div
              v-reveal
              class="bg-primary-light/80 rounded-2xl border p-4 border-gray-100 d-flex flex-col align-middle justify-center text-center"
            >
              <img
                src="../assets/images/bear-icon.webp"
                alt="need-help"
                class="h-auto w-20 m-auto object-cover shrink-0"
              />
              <h2 class="text-lg font-semibold text-brown mt-3">Need Help?</h2>
              <p class="text-sm text-gray-600">We're here for you!</p>
              <button
                class="shrink-0 inline-flex items-center gap-1 mt-3 rounded-lg text-sm font-semibold px-6 py-2 transition-colors bg-coral/20 text-coral cursor-pointer"
              >
                <span class="hidden sm:inline">Contact Support</span>
                <i class="bi bi-chevron-right text-xs pl-2"></i>
              </button>
            </div>
          </nav>
        </aside>

        <!-- Mobile nav (horizontal scroll) -->
        <div class="lg:hidden flex items-center gap-2 overflow-x-auto no-scrollbar pb-1">
          <router-link
            v-for="item in [...primaryNav, ...secondaryNav]"
            :key="item.label"
            :to="item.to"
            class="flex items-center gap-1.5 px-3 py-2 rounded-full text-xs font-medium shrink-0 border transition-colors"
            :class="
              isActive(item.to)
                ? 'bg-primary/10 text-primary border-primary/30'
                : 'text-brown border-gray-200'
            "
          >
            <i class="bi" :class="item.icon"></i>
            <span>{{ item.label }}</span>
          </router-link>
        </div>

        <!-- Main content -->
        <div>
          <!-- Welcome card -->
          <div class="bg-primary/10 rounded-2xl p-5 sm:p-6 mb-6">
            <div
              class="account-detail-container grid grid-cols-1 sm:grid-cols-[1fr_auto] gap-5 items-center"
            >
              <div v-reveal class="flex items-center gap-4">
                <img
                  :src="user.avatar"
                  alt="Profile"
                  class="h-24 w-20 rounded-xl object-cover bg-gray-200 shrink-0"
                />
                <div>
                  <p class="text-md text-gray-600">Welcome back,</p>
                  <p class="text-lg font-bold text-brown">{{ user.name }}</p>
                  <p class="text-md text-gray-500 account-detail-email">
                    {{ user.email }}
                  </p>
                  <p class="text-md text-gray-500">{{ user.phone }}</p>
                </div>
              </div>

              <div v-reveal class="account-detail-cards-container grid grid-cols-3 gap-3">
                <router-link
                  v-for="stat in stats"
                  :key="stat.label"
                  :to="stat.to"
                  class="w-full bg-white rounded-xl p-4 flex items-center justify-between gap-1 hover:shadow-sm transition-shadow"
                >
                  <div class="">
                    <span class="text-2xl font-bold text-brown">{{ stat.count }}</span>
                    <p class="text-md font-medium text-brown mt-1">{{ stat.label }}</p>
                    <p class="text-sm text-gray-400 whitespace-nowrap">{{ stat.sub }}</p>
                  </div>
                  <div
                    class="h-12 w-12 rounded-full flex items-center justify-center"
                    :class="[stat.iconBg, stat.iconColor]"
                  >
                    <i class="bi text-2xl" :class="stat.icon"></i>
                  </div>
                </router-link>
              </div>
            </div>
          </div>

          <!-- Menu cards -->
          <div
            class="bg-white rounded-2xl border border-gray-100 shadow-sm divide-y divide-gray-100"
          >
            <div
              v-reveal
              v-for="card in menuCards"
              :key="card.title"
              class="account-menu-card-container flex items-center justify-between gap-4 p-5"
            >
              <div class="flex items-center gap-4 min-w-0">
                <span
                  class="h-11 w-11 rounded-full flex items-center justify-center text-xl shrink-0"
                  :class="[card.iconBg, card.iconColor]"
                >
                  <i class="bi" :class="card.icon"></i>
                </span>
                <div class="min-w-0">
                  <p class="text-md font-semibold text-brown">{{ card.title }}</p>
                  <p class="text-sm text-gray-600">
                    {{ card.description }}
                  </p>
                </div>
              </div>

              <router-link
                :to="card.to"
                class="shrink-0 inline-flex items-center gap-1 rounded-lg text-xs font-semibold px-6 py-2 transition-colors"
                :class="[card.buttonBg, card.buttonText]"
              >
                <span>{{ card.ctaLabel }}</span>
                <i class="bi bi-chevron-right text-xs pl-2"></i>
              </router-link>
            </div>
          </div>

          <!-- Account Settings & More -->
          <div class="mt-8">
            <h2 class="text-xs font-bold tracking-wide text-brown mb-4">ACCOUNT SETTINGS & MORE</h2>

            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div
                v-reveal
                v-for="card in settingsCards"
                :key="card.title"
                class="account-setting-card bg-white rounded-2xl border border-gray-100 shadow-sm p-5 flex items-start gap-4"
              >
                <span
                  class="h-14 w-14 rounded-full flex items-center justify-center text-2xl shrink-0"
                  :class="[card.iconBg, card.iconColor]"
                >
                  <i class="bi" :class="card.icon"></i>
                </span>
                <div class="min-w-0 flex-1">
                  <p class="text-sm font-bold text-brown mb-1">{{ card.title }}</p>
                  <p class="text-sm text-gray-500 mb-3">{{ card.description }}</p>
                  <router-link
                    :to="card.to"
                    class="inline-flex items-center gap-1 rounded-md text-xs font-semibold px-3.5 py-1.5 transition-colors"
                    :class="[card.buttonBg, card.buttonText]"
                  >
                    {{ card.ctaLabel }}
                  </router-link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Trust Bar -->
      <section v-reveal class="relative z-10 mx-auto mt-8">
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

      <!-- need help bar -->
      <section v-reveal class="mx-auto max-w-350 mt-8">
        <div
          class="need-help-bar-container relative overflow-hidden rounded-2xl bg-primary/10 grid grid-cols-2 items-center gap-6 px-6 md:px-30 py-2"
        >
          <div class="py-1">
            <h2 class="text-2xl md:text-3xl font-bold text-brown mb-2">Still Need Help?</h2>
            <p class="text-md md:text-[17px] text-gray-600 leading-[1.3] mb-5">
              Our happy team is just a message away.<br />
              We love hearing from you!
            </p>

            <a
              :href="whatsappLink"
              target="_blank"
              rel="noopener noreferrer"
              class="inline-flex items-center gap-2 rounded-lg bg-brown text-white text-sm md:text-md font-semibold px-5 py-1 hover:bg-brown/90 transition-colors"
            >
              <i class="bi bi-headset text-lg md:text-xl"></i>
              Chat with Us
            </a>
          </div>

          <img
            src="../assets/images/help-badge.webp"
            alt="Our support team is here to help"
            class="h-30 lg:h-48 w-auto object-contain justify-self-end"
          />
          <img
            src="../assets/images/prop-rocket.webp"
            alt=""
            class="hidden lg:block absolute top-1/6 left-2/5 h-20 lg:h-30"
          />
        </div>
      </section>
    </section>
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
