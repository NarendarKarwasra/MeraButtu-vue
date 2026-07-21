<script setup>
import { reactive, ref } from 'vue'
// import { useDevice } from '@/stores/devive.js'
// const { isMobile } = useDevice()

import DefaultLayout from '@/layouts/DefaultLayout.vue'

import contactHeroImage from '@/assets/images/contact-hero-back.webp'

const form = reactive({
  fullName: '',
  email: '',
  mobile: '',
  subject: '',
  message: '',
  agree: false,
})

const subjects = [
  'General Enquiry',
  'Order Support',
  'Returns & Refunds',
  'Bulk / Wholesale',
  'Partnership',
  'Feedback',
]

const submitting = ref(false)
const submitted = ref(false)

const handleSubmit = async () => {
  if (!form.agree) return
  submitting.value = true

  await new Promise((resolve) => setTimeout(resolve, 800))

  submitting.value = false
  submitted.value = true
  Object.assign(form, {
    fullName: '',
    email: '',
    mobile: '',
    subject: '',
    message: '',
    agree: false,
  })
}

// ---- Contact details (edit these to your real values) ----
const phoneNumber = '022 62014191'
const phoneDial = 'tel:+9102262014191'
const whatsappLink = 'https://wa.me/9102262014191'

const emails = ['hello@merabuttu.com', 'support@merabuttu.com']

const officeAddress =
  '2nd Floor, Harsh Residency, Cleand Corporate Office, above Bluestone and Axis bank, Kashimira, Mira Road East, Mira Bhayander, Maharashtra - 401107'
const mapUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(officeAddress)}`

const website = 'www.merabuttu.com'
const websiteUrl = 'https://www.merabuttu.com'

const socialLinks = [
  { icon: 'bi-instagram', href: 'https://instagram.com/merabuttu' },
  { icon: 'bi-facebook', href: 'https://facebook.com/merabuttu' },
  { icon: 'bi-youtube', href: 'https://youtube.com/@merabuttu' },
  { icon: 'bi-pinterest', href: 'https://pinterest.com/merabuttu' },
]

const storeHours = [
  { days: 'Monday - Saturday', hours: '10:00 AM - 8:00 PM' },
  { days: 'Sunday', hours: '11:00 AM - 7:00 PM' },
]

const mapEmbedUrl = `https://www.google.com/maps?q=${encodeURIComponent(officeAddress)}&output=embed`

const faqs = [
  {
    question: 'Do you have a physical store?',
    answer:
      'Yes, our flagship store is located in Alwar, Rajasthan. You can find the exact address in the "Our Location" section above.',
  },
  {
    question: 'What are your delivery charges?',
    answer:
      'Delivery is free on orders above ₹999. Orders below that are charged a flat shipping fee at checkout.',
  },
  {
    question: 'How can I track my order?',
    answer:
      'Once your order ships, you\'ll receive a tracking link via email and SMS. You can also track it from the "Track Order" page.',
  },
  {
    question: 'What is your return policy?',
    answer:
      'Most items can be returned within 7 days of delivery in original condition. Check our Returns & Refunds page for category-specific details.',
  },
]

const openFaqIndex = ref(null)
const toggleFaq = (index) => {
  openFaqIndex.value = openFaqIndex.value === index ? null : index
}

// trust feature Icons
import shippingIcon from '@/assets/images/icons/shipping-icon.webp'
import safeIcon from '@/assets/images/icons/safe-icon.webp'
import returnIcon from '@/assets/images/icons/return-icon.webp'
import supportIcon from '@/assets/images/icons/support-icon.webp'
const trustBadges = [
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
</script>

<template>
  <DefaultLayout>
    <main>
      <!-- Hero -->
      <section
        v-reveal
        class="relative bg-cover md:bg-center bg-left bg-no-repeat min-h-fit md:min-h-95"
        :style="{ backgroundImage: `url(${contactHeroImage})` }"
      >
        <div class="relative overflow-hidden mx-auto max-w-350 px-2 pt-0 md:pt-4">
          <div class="contact-hero-container relative z-10 py-2 md:py-10 pl-0 max-w-xl">
            <h1 class="text-4xl sm:text-5xl font-semibold text-brown mb-5">Contact Us</h1>
            <p
              class="contact-hero-container-highlight text-coral font-semibold text-xl sm:text-2xl mb-5"
            >
              We're here for you!
            </p>
            <p
              class="contact-hero-container-desc text-gray-600 text-md sm:text-[16px] leading-relaxed"
            >
              Have a question, need help, or want to share feedback?<br class="hidden sm:block" />
              Our team will get back to you as soon as possible.
            </p>
          </div>
        </div>
      </section>

      <!-- form section -->
      <section v-reveal class="contact-form-full-container mx-auto max-w-350 px-4 py-10">
        <div class="contact-form-section gap-6 items-start">
          <!-- Send Us a Message -->
          <div v-reveal class="bg-white rounded-2xl border border-gray-100 shadow-sm p-4 sm:p-8">
            <div class="contact-form-head flex items-start gap-3 mb-10">
              <span
                class="h-13 w-13 rounded-full bg-coral/10 text-coral flex items-center justify-center shrink-0"
              >
                <i class="bi bi-people text-3xl"></i>
              </span>
              <div>
                <h2 class="text-2xl font-semibold text-brown mb-2">Send Us a Message</h2>
                <p class="text-md text-gray-500">
                  Fill in the form and our team will get back to you.
                </p>
              </div>
            </div>

            <form class="space-y-6" @submit.prevent="handleSubmit">
              <div class="contact-form-row grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div class="relative">
                  <i
                    class="bi bi-person absolute left-4 text-xl top-1/2 -translate-y-1/2 text-gray-400"
                  ></i>
                  <input
                    v-model="form.fullName"
                    type="text"
                    placeholder="Full Name *"
                    required
                    class="w-full rounded-md border border-gray-300 pl-12 pr-4 py-3 text-md placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-primary/40 focus:border-primary"
                  />
                </div>
                <div class="relative">
                  <i
                    class="bi bi-envelope absolute left-4 text-xl top-1/2 -translate-y-1/2 text-gray-400"
                  ></i>
                  <input
                    v-model="form.email"
                    type="email"
                    placeholder="Email Address *"
                    required
                    class="w-full rounded-md border border-gray-300 pl-12 pr-4 py-3 text-md placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-primary/40 focus:border-primary"
                  />
                </div>
              </div>

              <div class="contact-form-row grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div class="relative">
                  <i
                    class="bi bi-telephone absolute left-4 text-xl top-1/2 -translate-y-1/2 text-gray-400"
                  ></i>
                  <input
                    v-model="form.mobile"
                    type="tel"
                    placeholder="Mobile Number *"
                    required
                    class="w-full rounded-md border border-gray-300 pl-12 pr-4 py-3 text-md placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-primary/40 focus:border-primary"
                  />
                </div>
                <div class="relative">
                  <i
                    class="bi bi-list-ul absolute left-4 text-xl top-1/2 -translate-y-1/2 text-gray-400"
                  ></i>
                  <select
                    v-model="form.subject"
                    required
                    class="w-full appearance-none rounded-md border border-gray-300 pl-12 pr-9 py-3 text-md text-gray-400 focus:outline-none focus:ring-1 focus:ring-primary/40 focus:border-primary"
                    :class="form.subject === '' ? 'text-gray-400' : 'text-gray-700'"
                  >
                    <option value="" disabled>Subject *</option>
                    <option v-for="s in subjects" :key="s" :value="s">{{ s }}</option>
                  </select>
                  <i
                    class="bi bi-chevron-down absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 text-xs pointer-events-none"
                  ></i>
                </div>
              </div>

              <div class="contact-form-row relative">
                <i class="bi bi-pencil absolute left-4 top-4 text-gray-400"></i>
                <textarea
                  v-model="form.message"
                  rows="5"
                  placeholder="Your Message *"
                  required
                  class="w-full rounded-md border border-gray-300 pl-12 pr-4 py-3 text-md placeholder:text-gray-400 resize-none focus:outline-none focus:ring-1 focus:ring-primary/40 focus:border-primary"
                ></textarea>
              </div>

              <label
                class="contact-form-row flex items-start gap-2.5 text-sm text-gray-600 cursor-pointer mb-8"
              >
                <input
                  v-model="form.agree"
                  type="checkbox"
                  required
                  class="mt-0.5 h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary/40 shrink-0"
                />
                <span
                  >I agree to receive communications from Mera Buttu via email, phone or
                  WhatsApp.</span
                >
              </label>

              <button
                type="submit"
                :disabled="submitting || !form.agree"
                class="form-submit-btn w-full max-w-100 flex items-center justify-center gap-2 bg-coral text-white font-semibold py-3.5 hover:bg-coral/90 disabled:opacity-50 disabled:cursor-not-allowed transition-colors mb-8"
              >
                <span>{{ submitting ? 'Sending...' : 'Submit Message' }}</span>
                <i class="bi bi-send"></i>
              </button>

              <p class="text-sm text-gray-500 flex items-center gap-1.5">
                <i class="bi bi-shield-lock"></i>
                <span>
                  Your information is safe with us. We respect your
                  <a href="/privacy-policy" class="text-coral hover:underline">privacy</a>.
                </span>
              </p>

              <p v-if="submitted" class="text-sm text-secondary font-medium">
                Thanks! Your message has been sent — we'll get back to you soon.
              </p>
            </form>
          </div>

          <!-- Get in Touch -->
          <div
            v-reveal
            class="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden"
          >
            <div class="contact-form-head flex items-start gap-3 bg-gray-200 p-4">
              <span
                class="h-12 w-12 rounded-full bg-secondary/20 text-secondary flex items-center justify-center shrink-0"
              >
                <i class="bi bi-chat-square-dots text-xl"></i>
              </span>
              <div>
                <h2 class="text-xl mb-2 font-semibold text-brown">Get in Touch</h2>
                <p class="text-md text-gray-500">You can also reach us using the details below.</p>
              </div>
            </div>

            <div class="contact-detail-container divide-y divide-gray-100 p-4">
              <!-- Phone / WhatsApp -->
              <div class="contact-detail-card flex items-start gap-4 py-4">
                <span
                  class="h-11 w-11 rounded-full bg-secondary/10 text-secondary flex items-center justify-center shrink-0"
                >
                  <i class="bi bi-telephone text-lg"></i>
                </span>
                <div>
                  <p class="text-md font-semibold text-brown mb-1">Phone / WhatsApp</p>
                  <a
                    :href="phoneDial"
                    class="block text-sm text-gray-700 hover:text-primary transition-colors"
                  >
                    {{ phoneNumber }}
                  </a>
                  <a
                    :href="whatsappLink"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="text-sm font-semibold text-[#4CC759] hover:underline"
                  >
                    Chat on WhatsApp
                  </a>
                  <p class="text-xs text-gray-400 mt-0.5">(Mon - Sat, 10:00 AM - 7:00 PM)</p>
                </div>
              </div>

              <!-- Email -->
              <div class="flex items-start gap-4 py-4">
                <span
                  class="h-11 w-11 rounded-full bg-accent/15 text-accent flex items-center justify-center shrink-0"
                >
                  <i class="bi bi-envelope text-lg"></i>
                </span>
                <div>
                  <p class="text-md font-semibold text-brown mb-1">Email</p>
                  <a
                    v-for="mail in emails"
                    :key="mail"
                    :href="`mailto:${mail}`"
                    class="block text-sm text-gray-700 hover:text-primary transition-colors"
                  >
                    {{ mail }}
                  </a>
                </div>
              </div>

              <!-- Registered Office -->
              <div class="flex items-start gap-4 py-4">
                <span
                  class="h-11 w-11 rounded-full bg-coral/10 text-coral flex items-center justify-center shrink-0"
                >
                  <i class="bi bi-geo-alt text-lg"></i>
                </span>
                <div>
                  <p class="text-md font-semibold text-brown mb-1">Registered Office</p>
                  <a
                    :href="mapUrl"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="text-sm text-gray-700 hover:text-primary transition-colors leading-relaxed"
                  >
                    {{ officeAddress }}
                  </a>
                </div>
              </div>

              <!-- Website -->
              <div class="flex items-start gap-4 py-4">
                <span
                  class="h-11 w-11 rounded-full bg-primary/10 text-primary flex items-center justify-center shrink-0"
                >
                  <i class="bi bi-globe text-lg"></i>
                </span>
                <div>
                  <p class="text-md font-semibold text-brown mb-1">Website</p>
                  <a
                    :href="websiteUrl"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="text-sm text-gray-700 hover:text-primary transition-colors"
                  >
                    {{ website }}
                  </a>
                </div>
              </div>

              <!-- Stay Connected -->
              <div class="flex items-start gap-4 py-4">
                <span
                  class="h-11 w-11 rounded-full bg-gray-200 text-brown flex items-center justify-center shrink-0"
                >
                  <i class="bi bi-chat-dots text-lg"></i>
                </span>
                <div>
                  <p class="text-md font-semibold text-brown mb-4">Stay Connected</p>
                  <div class="flex items-center gap-3">
                    <a
                      v-for="social in socialLinks"
                      :key="social.icon"
                      :href="social.href"
                      target="_blank"
                      rel="noopener noreferrer"
                      class="h-10 w-10 rounded-full bg-white border border-gray-300 flex items-center justify-center text-brown hover:bg-primary hover:text-white hover:border-primary transition-colors text-lg"
                    >
                      <i class="bi" :class="social.icon"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- location section -->
      <section v-reveal class="mx-auto max-w-350 px-4 py-8 pt-4">
        <div class="grid grid-cols-1 lg:grid-cols-3 gap-6 items-stretch">
          <!-- Store Timings -->
          <div
            v-reveal
            class="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 flex flex-col"
          >
            <h3 class="flex items-center gap-2 text-lg font-semibold text-brown mb-5">
              <i class="bi bi-clock text-secondary text-xl"></i>
              Store Timings
            </h3>

            <div class="divide-y divide-gray-200 mb-2">
              <div
                v-for="slot in storeHours"
                :key="slot.days"
                class="flex items-center justify-between py-3 text-md"
              >
                <span class="text-gray-600">{{ slot.days }}</span>
                <span class="font-medium text-gray-600">{{ slot.hours }}</span>
              </div>
            </div>

            <div class="mt-auto bg-[#EEF5ED] rounded-xl p-4 flex flex-col items-start gap-3">
              <span
                class="h-14 w-14 rounded-full bg-white flex items-center justify-center text-[#4CC759]"
              >
                <i class="bi bi-headset text-3xl"></i>
              </span>
              <div>
                <p class="text-lg font-semibold text-brown">Need immediate help?</p>
                <p class="text-md text-gray-600">Chat with our support team.</p>
              </div>
              <a
                :href="whatsappLink"
                target="_blank"
                rel="noopener noreferrer"
                class="inline-flex items-center rounded-full border-2 border-[#4CC759] text-[#4CC759] text-md font-medium px-6 py-1 hover:bg-[#4CC759] hover:text-white transition-colors"
              >
                Chat Now
              </a>
            </div>
          </div>

          <!-- Our Location -->
          <div
            v-reveal
            class="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 flex flex-col"
          >
            <h3 class="flex items-center gap-2 text-lg font-semibold text-brown mb-4">
              <i class="bi bi-geo-alt text-coral"></i>
              Our Location
            </h3>

            <div
              class="max-h-60 lg:max-h-full rounded-xl overflow-hidden mb-5 bg-gray-100 aspect-4/3"
            >
              <iframe
                :src="mapEmbedUrl"
                class="w-full h-full border-0"
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
                title="Mera Buttu store location map"
              ></iframe>
            </div>

            <a
              :href="mapUrl"
              target="_blank"
              rel="noopener noreferrer"
              class="max-w-70 mt-auto inline-flex items-center justify-center gap-2 rounded-full border border-gray-300 text-brown text-md font-medium px-5 py-2.5 hover:border-primary hover:text-primary transition-colors"
            >
              <i class="bi bi-signpost-2"></i>
              Get Directions
              <i class="bi bi-arrow-right"></i>
            </a>
          </div>

          <!-- FAQ -->
          <div
            v-reveal
            class="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 flex flex-col"
          >
            <h3 class="flex items-center gap-2 text-lg font-semibold text-brown mb-5">
              <i class="bi bi-question-circle text-accent"></i>
              Frequently Asked Questions
            </h3>

            <div class="divide-y divide-gray-200 mb-4">
              <div v-for="(faq, index) in faqs" :key="faq.question">
                <button
                  type="button"
                  class="w-full flex items-center justify-between gap-3 py-3.5 text-left text-md font-medium text-black hover:text-primary transition-colors cursor-pointer"
                  @click="toggleFaq(index)"
                >
                  <span>{{ faq.question }}</span>
                  <i
                    class="bi bi-chevron-right text-xs shrink-0 transition-transform duration-200"
                    :class="openFaqIndex === index ? 'rotate-90' : ''"
                  ></i>
                </button>
                <div
                  class="grid transition-[grid-template-rows] duration-300 ease-in-out"
                  :class="openFaqIndex === index ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'"
                >
                  <div class="overflow-hidden">
                    <p class="text-sm text-gray-500 leading-relaxed pb-3.5 pr-6">
                      {{ faq.answer }}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <a
              href="/faq"
              class="max-w-70 mt-auto inline-flex items-center justify-center gap-2 rounded-full border border-coral text-coral text-sm font-medium px-5 py-2.5 hover:bg-coral hover:text-white transition-colors"
            >
              <i class="bi bi-lightning-charge-fill"></i>
              View All FAQs
              <i class="bi bi-arrow-right"></i>
            </a>
          </div>
        </div>
      </section>

      <!-- Trust Features -->
      <section v-reveal class="relative z-10 mx-auto max-w-350 px-4">
        <div class="trust-feature-grid-container grid grid-cols-4 gap-3">
          <div v-for="point in trustBadges" :key="point.title" class="rounded-xl bg-gray-100 p-3">
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
    </main>
  </DefaultLayout>
</template>
