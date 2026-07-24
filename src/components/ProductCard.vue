<script setup>
defineProps({
  product: {
    type: Object,
    required: true,
    // expected shape:
    // {
    //   id: string | number,
    //   image: string,
    //   name: string,
    //   price: number,
    //   originalPrice?: number,   // optional, shows strikethrough if higher than price
    //   rating: number,
    //   reviewCount: number,
    //   inWishlist?: boolean,
    //   to?: string,              // route to the product detail page
    // }
  },
})

const emit = defineEmits(['toggle-wishlist'])

const formatPrice = (value) =>
  new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 0,
  }).format(value)
</script>

<template>
  <router-link :to="product.to || '#'" class="block">
    <div
      class="bg-white rounded-lg border border-gray-100 shadow-sm overflow-hidden hover:shadow-md transition-shadow group"
    >
      <div class="w-auto h-40 bg-primary/7 flex items-center justify-center overflow-hidden py-2">
        <img
          :src="product.image"
          :alt="product.name"
          class="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
        />
      </div>

      <div class="p-3">
        <p class="text-sm font-medium text-brown mb-1.5">
          {{ product.name }}
        </p>

        <div class="flex items-center gap-2 mb-1">
          <span class="text-base font-bold text-brown">{{ formatPrice(product.price) }}</span>
          <span
            v-if="product.originalPrice && product.originalPrice > product.price"
            class="text-xs text-gray-400 line-through"
          >
            {{ formatPrice(product.originalPrice) }}
          </span>
        </div>

        <div class="flex items-center justify-between">
          <div v-if="product.rating" class="flex items-center gap-1 text-xs text-gray-500">
            <i class="bi bi-star-fill text-accent"></i>
            <span class="font-medium text-brown">{{ product.rating }}</span>
            <span>({{ product.reviewCount }})</span>
          </div>
          <div v-else></div>

          <button
            type="button"
            class="text-lg shrink-0"
            :class="product.inWishlist ? 'text-coral' : 'text-gray-300 hover:text-coral'"
            :aria-label="product.inWishlist ? 'Remove from wishlist' : 'Add to wishlist'"
            @click.stop.prevent="emit('toggle-wishlist', product)"
          >
            <i class="bi" :class="product.inWishlist ? 'bi-heart-fill' : 'bi-heart'"></i>
          </button>
        </div>
      </div>
    </div>
  </router-link>
</template>

<style scoped>
.line-clamp-2 {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>
