<script setup>
import { ref, computed } from 'vue'
import ProductPageLayout from '@/layouts/ProductPageLayout.vue'
import ProductCard from '@/components/ProductCard.vue'
import bannerImage from '@/assets/images/products/fashion-banner.webp'

// ---- Filter sidebar config ----
const filters = {
  categories: [
    { label: 'Boys Clothing', to: '/fashion/boys' },
    { label: 'Girls Clothing', to: '/fashion/girls' },
    { label: 'Ethnic Wear', to: '/fashion/ethnic' },
    { label: 'Winter Wear', to: '/fashion/winter' },
    { label: 'Innerwear', to: '/fashion/innerwear' },
    { label: 'Footwear', to: '/fashion/footwear' },
    { label: 'Accessories', to: '/fashion/accessories' },
  ],
  age: [
    { label: '0 - 6 Months', value: '0-6m' },
    { label: '6 - 12 Months', value: '6-12m' },
    { label: '1 - 2 Years', value: '1-2y' },
    { label: '2 - 4 Years', value: '2-4y' },
    { label: '4 - 6 Years', value: '4-6y' },
    { label: '6+ Years', value: '6y-plus' },
  ],
  size: [
    { label: '0 - 6M', value: '0-6m' },
    { label: '6 - 12M', value: '6-12m' },
    { label: '1 - 2Y', value: '1-2y' },
    { label: '3 - 4Y', value: '3-4y' },
    { label: '3 - 5Y', value: '3-5y' },
    { label: '5 - 6Y', value: '5-6y' },
    { label: '6 - 7Y', value: '6-7y' },
    { label: '7Y & Above', value: '7y-plus' },
  ],
  colors: [
    { label: 'Pink', value: 'pink', hex: '#F9C6D0' },
    { label: 'White', value: 'white', hex: '#F5F1EA' },
    { label: 'Black', value: 'black', hex: '#1F1F1F' },
    { label: 'Green', value: 'green', hex: '#4CAF50' },
    { label: 'Blue', value: 'blue', hex: '#3B82F6' },
    { label: 'Purple', value: 'purple', hex: '#8B5CF6' },
  ],
  priceRanges: [
    { label: '₹0 - ₹499', value: '0-499' },
    { label: '₹500 - ₹999', value: '500-999' },
    { label: '₹1000 - ₹1499', value: '1000-1499' },
    { label: '₹1500 - ₹1999', value: '1500-1999' },
    { label: '₹2000+', value: '2000-plus' },
  ],
}

import fashion1 from '@/assets/images/products/fashion-1.webp'
import fashion2 from '@/assets/images/products/fashion-2.webp'
import fashion3 from '@/assets/images/products/fashion-3.webp'
import fashion4 from '@/assets/images/products/fashion-4.webp'
import fashion5 from '@/assets/images/products/fashion-5.webp'
import fashion6 from '@/assets/images/products/fashion-6.webp'
import fashion7 from '@/assets/images/products/fashion-7.webp'
import fashion8 from '@/assets/images/products/fashion-8.webp'
import fashion9 from '@/assets/images/products/fashion-9.webp'
import fashion10 from '@/assets/images/products/fashion-10.webp'
import fashion11 from '@/assets/images/products/fashion-11.webp'
import fashion12 from '@/assets/images/products/fashion-12.webp'
// ---- Products (TODO: replace with a real API call, e.g. axios.get('/api/products', { params: { category: 'fashion', page, sortBy, ...filters } })) ----
const products = ref([
  {
    id: 1,
    image: fashion1,
    name: 'Floral Frock for Girls',
    price: 799,
    rating: 4.6,
    reviewCount: 128,
    inWishlist: false,
    to: '/product/1',
  },
  {
    id: 2,
    image: fashion2,
    name: 'Boys Shirt & Shorts Set',
    price: 699,
    rating: 4.5,
    reviewCount: 96,
    inWishlist: false,
    to: '/product/2',
  },
  {
    id: 3,
    image: fashion3,
    name: 'Denim Dungaree Set',
    price: 899,
    rating: 4.7,
    reviewCount: 112,
    inWishlist: false,
    to: '/product/3',
  },
  {
    id: 4,
    image: fashion4,
    name: 'Kurta Pajama Set',
    price: 999,
    rating: 4.6,
    reviewCount: 89,
    inWishlist: false,
    to: '/product/4',
  },
  {
    id: 5,
    image: fashion5,
    name: 'Cute Graphic Co-ord Set',
    price: 749,
    rating: 4.5,
    reviewCount: 76,
    inWishlist: false,
    to: '/product/5',
  },
  {
    id: 6,
    image: fashion6,
    name: 'Hooded Jacket',
    price: 1199,
    rating: 4.7,
    reviewCount: 153,
    inWishlist: false,
    to: '/product/6',
  },
  {
    id: 7,
    image: fashion7,
    name: 'Cotton Leggings',
    price: 399,
    rating: 4.4,
    reviewCount: 56,
    inWishlist: false,
    to: '/product/7',
  },
  {
    id: 8,
    image: fashion8,
    name: 'Party Dress for Girls',
    price: 999,
    rating: 4.8,
    reviewCount: 101,
    inWishlist: false,
    to: '/product/8',
  },
  {
    id: 9,
    image: fashion9,
    name: 'Striped Polo T-shirt',
    price: 499,
    rating: 4.3,
    reviewCount: 67,
    inWishlist: false,
    to: '/product/9',
  },
  {
    id: 10,
    image: fashion10,
    name: 'Floral Ethnic Set',
    price: 1099,
    rating: 4.7,
    reviewCount: 88,
    inWishlist: false,
    to: '/product/10',
  },
  {
    id: 11,
    image: fashion11,
    name: 'Winter Co-ord Set',
    price: 899,
    rating: 4.6,
    reviewCount: 77,
    inWishlist: false,
    to: '/product/11',
  },
  {
    id: 12,
    image: fashion12,
    name: 'Suspender Shorts Set',
    price: 849,
    rating: 4.5,
    reviewCount: 62,
    inWishlist: false,
    to: '/product/12',
  },
])

const totalProducts = ref(1247) // TODO: comes from API response (total matching count)
const sortBy = ref('popular')
const viewMode = ref('grid')
const currentPage = ref(1)
const perPage = 12
const totalPages = computed(() => Math.ceil(totalProducts.value / perPage))

const resultsText = computed(() => {
  const start = (currentPage.value - 1) * perPage + 1
  const end = Math.min(currentPage.value * perPage, totalProducts.value)
  return `Showing ${start} - ${end} of ${totalProducts.value}+ products`
})

const toggleWishlist = (product) => {
  const target = products.value.find((p) => p.id === product.id)
  if (target) target.inWishlist = !target.inWishlist
  // TODO: sync with real wishlist API/pinia store
}

const handleApplyFilters = (selected) => {
  console.log('Applying filters:', selected)
  // TODO: refetch products with these filters + sortBy + currentPage
  currentPage.value = 1
}

const handleClearFilters = () => {
  console.log('Filters cleared')
  // TODO: refetch unfiltered products
  currentPage.value = 1
}

const handleSortChange = (value) => {
  sortBy.value = value
  // TODO: refetch products with new sort order
}

const handlePageChange = (page) => {
  currentPage.value = page
  // TODO: refetch products for this page
  window.scrollTo({ top: 0, behavior: 'smooth' })
}
</script>

<template>
  <ProductPageLayout
    title="Fashion"
    subtitle="Cute, comfy & colorful outfits for every little moment."
    :banner-image="bannerImage"
    :filters="filters"
    :results-text="resultsText"
    :sort-by="sortBy"
    :view-mode="viewMode"
    :current-page="currentPage"
    :total-pages="totalPages"
    @update:sort-by="handleSortChange"
    @update:view-mode="(v) => (viewMode = v)"
    @update:current-page="handlePageChange"
    @apply-filters="handleApplyFilters"
    @clear-filters="handleClearFilters"
  >
    <div
      class="grid gap-4"
      :class="viewMode === 'grid' ? 'grid-cols-2 sm:grid-cols-3 xl:grid-cols-4' : 'grid-cols-1'"
    >
      <ProductCard
        v-for="product in products"
        :key="product.id"
        :product="product"
        @toggle-wishlist="toggleWishlist"
      />
    </div>
  </ProductPageLayout>
</template>
