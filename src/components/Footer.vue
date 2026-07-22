<script setup>
import { useDevice } from '@/stores/devive.js'

const { isMobile } = useDevice()

const shopLinks = [
  'Fashion',
  'Toys & Games',
  'Baby Care',
  'Feeding',
  'Nursery',
  'Books & Learning',
  'Gear & Travel',
  'Gifts & More',
  'Offers',
]

const customerServiceLinks = [
  { name: 'Track Order', url: '/track-order' },
  { name: 'Returns & Refunds', url: '/returns-refunds' },
  { name: 'Shipping Policy', url: '/shipping-policy' },
  { name: 'Size Guide', url: '/size-guide' },
  { name: 'FAQs', url: '/faqs' },
  { name: 'Store Locator', url: '/store-locator' },
  { name: 'Contact Us', url: '/contact-us' },
]

const mobileCustomerServiceLinks = [
  { name: 'Returns & Refunds', url: '/returns-refunds' },
  { name: 'Shipping Policy', url: '/shipping-policy' },
  { name: 'Size Guide', url: '/size-guide' },
  { name: 'FAQs', url: '/faqs' },
  { name: 'Contact Us', url: '/contact-us' },
]

const accountLinks = ['My Account', 'Orders', 'Wishlist', 'Addresses', 'Coupons']
const mobileAccountLinks = ['Orders', 'Addresses', 'Coupons']

const socialLinks = [
  { icon: 'bi-facebook', href: '#' },
  { icon: 'bi-instagram', href: '#' },
  { icon: 'bi-youtube', href: '#' },
  { icon: 'bi-pinterest', href: '#' },
]

import paymentIcons1 from '@/assets/images/footer-card-visa.webp'
import paymentIcons2 from '@/assets/images/footer-card-master.webp'
import paymentIcons3 from '@/assets/images/footer-card-paytm.webp'
import paymentIcons4 from '@/assets/images/footer-card-upi.webp'
const paymentIcons = [paymentIcons1, paymentIcons2, paymentIcons3, paymentIcons4]
</script>

<template>
  <footer v-reveal v-if="isMobile" class="bg-[#fff0e7] border-t border-accent/20">
    <div class="footer-main-container mx-auto max-w-350 px-4 sm:px-6 py-10 pb-6">
      <div class="footer-grid-container footer-grid-container-mobile">
        <!-- Brand -->
        <div v-reveal>
          <RouterLink to="/" class="inline-block mb-4">
            <img src="../assets/images/merabuttu-logo.webp" alt="Mera Buttu" class="h-30 w-auto" />
          </RouterLink>
          <p class="text-sm text-gray-600 leading-relaxed mb-6 max-w-70">
            India's most loved one-stop store for kids & infants. Everything they need, all in one
            happy place.
          </p>
          <div class="footer-social-box flex items-center gap-3 max-w-60">
            <a
              v-for="social in socialLinks"
              :key="social.icon"
              :href="social.href"
              class="h-10 w-10 rounded-full bg-white border border-gray-300 flex items-center justify-center text-brown hover:bg-primary hover:text-white hover:border-primary transition-colors"
            >
              <i class="bi text-xl" :class="social.icon"></i>
            </a>
          </div>
        </div>

        <div v-reveal class="footer-mid-grid-container-mobile grid grid-cols-2 gap-4">
          <!-- Customer Service -->
          <div v-reveal>
            <h3 class="text-sm font-bold tracking-wide mb-4">CUSTOMER SERVICE</h3>
            <ul class="space-y-2">
              <li v-for="link in mobileCustomerServiceLinks" :key="link.name">
                <RouterLink
                  :to="link.url"
                  class="text-sm text-gray-600 hover:text-primary transition-colors"
                >
                  {{ link.name }}
                </RouterLink>
              </li>
            </ul>
          </div>

          <!-- My Account -->
          <div v-reveal>
            <h3 class="text-sm font-bold tracking-wide mb-4">MY ACCOUNT</h3>
            <ul class="space-y-2">
              <li v-for="link in mobileAccountLinks" :key="link">
                <a href="#" class="text-sm text-gray-600 hover:text-primary transition-colors">
                  {{ link }}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <!-- App Download -->
        <div v-reveal>
          <h3 class="text-sm font-bold tracking-wide mb-4">DOWNLOAD OUR APP</h3>
          <div class="footer-download-buttons flex flex-col gap-3">
            <a href="#" target="_blank" rel="noopener noreferrer">
              <img
                src="../assets/images/google-playstore-icon.webp"
                alt="Get it on Google Play"
                class="h-12 w-auto"
              />
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer">
              <img
                src="../assets/images/appstore-icon.webp"
                alt="Download on the App Store"
                class="h-12 w-auto"
              />
            </a>
          </div>
        </div>
      </div>
    </div>

    <!-- Bottom bar -->
    <div class="border-t border-accent/20">
      <div
        class="mx-auto max-w-350 px-4 sm:px-6 py-4 flex flex-col lg:flex-row items-center justify-between gap-3 text-xs sm:text-sm text-gray-600"
      >
        <!-- Left: copyright -->
        <p class="text-center md:text-left">
          © 2026
          <a
            href="https://leadbanana.in/"
            target="_blank"
            rel="noopener noreferrer"
            class="font-medium text-brown hover:text-primary transition-colors"
          >
            LeadBanana India
          </a>
          . All rights reserved.
        </p>

        <!-- Middle: developed by -->
        <a
          href="https://leadbanana.in/"
          target="_blank"
          rel="noopener noreferrer"
          class="footer-bottom-developedBy flex items-center gap-2 hover:opacity-80 transition-opacity"
        >
          <span>Designed & Developed by</span>
          <img src="../assets/images/leadbanana-logo.webp" alt="LeadBanana" class="h-5 w-auto" />
        </a>

        <!-- Right: payment icons -->
        <div class="footer-bottom-imageCard flex items-center gap-6 lg:pt-0 pt-2">
          <img
            v-for="(icon, index) in paymentIcons"
            :key="index"
            :src="icon"
            alt=""
            class="h-5 w-auto object-contain"
          />
        </div>
      </div>
    </div>
  </footer>

  <footer v-reveal v-else class="bg-[#fff0e7] border-t border-accent/20">
    <div class="footer-main-container mx-auto max-w-350 px-4 sm:px-6 py-10 pb-6">
      <div class="footer-grid-container">
        <!-- Brand -->
        <div v-reveal>
          <RouterLink to="/" class="inline-block mb-4">
            <img src="../assets/images/merabuttu-logo.webp" alt="Mera Buttu" class="h-30 w-auto" />
          </RouterLink>
          <p class="text-sm text-gray-600 leading-relaxed mb-6 max-w-70">
            India's most loved one-stop store for kids & infants. Everything they need, all in one
            happy place.
          </p>
          <div class="footer-social-box flex items-center gap-3 max-w-60">
            <a
              v-for="social in socialLinks"
              :key="social.icon"
              :href="social.href"
              class="h-10 w-10 rounded-full bg-white border border-gray-300 flex items-center justify-center text-brown hover:bg-primary hover:text-white hover:border-primary transition-colors"
            >
              <i class="bi text-xl" :class="social.icon"></i>
            </a>
          </div>
        </div>

        <!-- Shop -->
        <div v-reveal class="footer-links-container">
          <h3 class="text-sm font-bold tracking-wide mb-4">SHOP</h3>
          <ul class="space-y-2">
            <li v-for="link in shopLinks" :key="link">
              <a href="#" class="text-sm text-gray-600 hover:text-primary transition-colors">
                {{ link }}
              </a>
            </li>
          </ul>
        </div>

        <!-- Customer Service -->
        <div v-reveal>
          <h3 class="text-sm font-bold tracking-wide mb-4">CUSTOMER SERVICE</h3>
          <ul class="space-y-2">
            <li v-for="link in customerServiceLinks" :key="link.name">
              <RouterLink
                :to="link.url"
                class="text-sm text-gray-600 hover:text-primary transition-colors"
              >
                {{ link.name }}
              </RouterLink>
            </li>
          </ul>
        </div>

        <!-- My Account -->
        <div v-reveal>
          <h3 class="text-sm font-bold tracking-wide mb-4">MY ACCOUNT</h3>
          <ul class="space-y-2">
            <li v-for="link in accountLinks" :key="link">
              <a href="#" class="text-sm text-gray-600 hover:text-primary transition-colors">
                {{ link }}
              </a>
            </li>
          </ul>
        </div>

        <!-- Newsletter + App Download -->
        <div v-reveal>
          <!-- <h3 class="text-sm font-bold tracking-wide mb-4">NEWSLETTER</h3>
          <p class="text-sm text-gray-600 mb-6 max-w-60">
            Subscribe to get special offers, new arrivals & parenting tips.
          </p>

          <form
            class="footer-newslattter-form flex items-center mb-6 rounded-md border border-gray-300 overflow-hidden"
          >
            <input
              type="email"
              placeholder="Enter your email address"
              class="flex-1 min-w-0 bg-white px-4 py-2.5 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-primary/40 focus:border-primary"
            />
            <button
              type="submit"
              class="shrink-0 bg-primary text-white text-sm font-semibold px-5 py-2.5 hover:bg-primary/90 transition-colors cursor-pointer"
            >
              Subscribe
            </button>
          </form> -->

          <h3 class="text-sm font-bold tracking-wide mb-4">DOWNLOAD OUR APP</h3>
          <div class="footer-download-buttons flex flex-col gap-3">
            <a href="#" target="_blank" rel="noopener noreferrer">
              <img
                src="../assets/images/google-playstore-icon.webp"
                alt="Get it on Google Play"
                class="h-12 w-auto"
              />
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer">
              <img
                src="../assets/images/appstore-icon.webp"
                alt="Download on the App Store"
                class="h-12 w-auto"
              />
            </a>
          </div>
        </div>
      </div>
    </div>

    <!-- Bottom bar -->
    <div class="border-t border-accent/20">
      <div
        class="mx-auto max-w-350 px-4 sm:px-6 py-4 flex flex-col lg:flex-row items-center justify-between gap-3 text-xs sm:text-sm text-gray-600"
      >
        <!-- Left: copyright -->
        <p class="text-center md:text-left">
          © 2026
          <a
            href="https://leadbanana.in/"
            target="_blank"
            rel="noopener noreferrer"
            class="font-medium text-brown hover:text-primary transition-colors"
          >
            LeadBanana India
          </a>
          . All rights reserved.
        </p>

        <!-- Middle: developed by -->
        <a
          href="https://leadbanana.in/"
          target="_blank"
          rel="noopener noreferrer"
          class="footer-bottom-developedBy flex items-center gap-2 hover:opacity-80 transition-opacity"
        >
          <span>Designed & Developed by</span>
          <img src="../assets/images/leadbanana-logo.webp" alt="LeadBanana" class="h-5 w-auto" />
        </a>

        <!-- Right: payment icons -->
        <div class="footer-bottom-imageCard flex items-center gap-6 lg:pt-0 pt-2">
          <img
            v-for="(icon, index) in paymentIcons"
            :key="index"
            :src="icon"
            alt=""
            class="h-5 w-auto object-contain"
          />
        </div>
      </div>
    </div>
  </footer>
</template>
