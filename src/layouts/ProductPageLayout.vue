<script setup>
import { reactive, computed } from 'vue'

import DefaultLayout from '@/layouts/DefaultLayout.vue'
import Breadcrumbs from '@/components/Breadcrumbs.vue'

const props = defineProps({
  breadcrumb: {
    // e.g. [{ label: 'Home', to: '/' }, { label: 'Fashion' }]  (last item has no `to`)
    type: Array,
    default: () => [],
  },
  title: { type: String, required: true },
  subtitle: { type: String, default: '' },
  bannerImage: { type: String, default: '' },

  filters: {
    // { categories: [{label,to}], age: [{label,value}], size: [{label,value}], colors: [{label,value,hex}], priceRanges: [{label,value}] }
    type: Object,
    default: () => ({ categories: [], age: [], size: [], colors: [], priceRanges: [] }),
  },

  resultsText: { type: String, default: '' },
  sortOptions: {
    type: Array,
    default: () => [
      { label: 'Popular', value: 'popular' },
      { label: 'Newest', value: 'newest' },
      { label: 'Price: Low to High', value: 'price_asc' },
      { label: 'Price: High to Low', value: 'price_desc' },
      { label: 'Rating', value: 'rating' },
    ],
  },
  sortBy: { type: String, default: 'popular' },
  viewMode: { type: String, default: 'grid' }, // 'grid' | 'list'

  currentPage: { type: Number, default: 1 },
  totalPages: { type: Number, default: 1 },
})

const emit = defineEmits([
  'update:sortBy',
  'update:viewMode',
  'update:currentPage',
  'apply-filters',
  'clear-filters',
])

// ---- Local filter selection state (UI only — emitted on Apply) ----
const selected = reactive({
  age: [],
  size: [],
  color: null,
  priceRange: null,
})

const toggleCheckbox = (list, value) => {
  const i = list.indexOf(value)
  if (i === -1) list.push(value)
  else list.splice(i, 1)
}

const applyFilters = () => {
  emit('apply-filters', { ...selected, age: [...selected.age], size: [...selected.size] })
}

const clearFilters = () => {
  selected.age = []
  selected.size = []
  selected.color = null
  selected.priceRange = null
  emit('clear-filters')
}

// ---- Pagination: compact page list with ellipses, e.g. 1 2 3 ... 100 ----
const pageList = computed(() => {
  const total = props.totalPages
  const current = props.currentPage
  if (total <= 7) return Array.from({ length: total }, (_, i) => i + 1)

  const pages = [1]
  if (current > 3) pages.push('...')

  const start = Math.max(2, current - 1)
  const end = Math.min(total - 1, current + 1)
  for (let p = start; p <= end; p++) pages.push(p)

  if (current < total - 2) pages.push('...')
  pages.push(total)
  return pages
})

const goToPage = (page) => {
  if (page === '...' || page === props.currentPage) return
  emit('update:currentPage', page)
}
</script>

<template>
  <DefaultLayout>
    <div class="mx-auto max-w-350 px-4 py-6">
      <div class="grid grid-cols-1 lg:grid-cols-[240px_1fr] gap-6">
        <!-- Sidebar -->
        <aside class="lg:sticky lg:top-2 lg:self-start">
          <Breadcrumbs :items="[{ label: 'Fashion' }]" class="mb-2" />
          <!-- Title (mobile shows above sidebar too, but the main title is up top on desktop) -->
          <div class="lg:hidden mb-5">
            <h1 class="text-2xl font-semibold text-brown">{{ title }}</h1>
            <p v-if="subtitle" class="text-sm text-gray-500 mt-1">{{ subtitle }}</p>
          </div>

          <div class="bg-white rounded-2xl border border-gray-200 p-4 space-y-6">
            <!-- Categories -->
            <div v-if="filters.categories?.length">
              <h3 class="text-sm font-bold text-brown mb-3">Categories</h3>
              <ul class="space-y-2">
                <li v-for="cat in filters.categories" :key="cat.label">
                  <router-link
                    :to="cat.to || '#'"
                    class="text-sm text-gray-600 hover:text-primary transition-colors"
                  >
                    {{ cat.label }}
                  </router-link>
                </li>
              </ul>
            </div>

            <!-- Age -->
            <div v-if="filters.age?.length">
              <h3 class="text-sm font-bold text-brown mb-3">Age</h3>
              <div class="space-y-2">
                <label
                  v-for="opt in filters.age"
                  :key="opt.value"
                  class="flex items-center gap-2.5 text-sm text-gray-600 cursor-pointer"
                >
                  <input
                    type="checkbox"
                    :value="opt.value"
                    :checked="selected.age.includes(opt.value)"
                    class="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary/40"
                    @change="toggleCheckbox(selected.age, opt.value)"
                  />
                  {{ opt.label }}
                </label>
              </div>
            </div>

            <!-- Size -->
            <div v-if="filters.size?.length">
              <h3 class="text-sm font-bold text-brown mb-3">Size</h3>
              <div class="space-y-2">
                <label
                  v-for="opt in filters.size"
                  :key="opt.value"
                  class="flex items-center gap-2.5 text-sm text-gray-600 cursor-pointer"
                >
                  <input
                    type="checkbox"
                    :value="opt.value"
                    :checked="selected.size.includes(opt.value)"
                    class="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary/40"
                    @change="toggleCheckbox(selected.size, opt.value)"
                  />
                  {{ opt.label }}
                </label>
              </div>
            </div>

            <!-- Color -->
            <div v-if="filters.colors?.length">
              <h3 class="text-sm font-bold text-brown mb-3">Color</h3>
              <div class="flex flex-wrap gap-2.5">
                <button
                  v-for="color in filters.colors"
                  :key="color.value"
                  type="button"
                  :aria-label="color.label"
                  class="h-7 w-7 rounded-full border transition-shadow"
                  :class="
                    selected.color === color.value
                      ? 'ring-2 ring-offset-2 ring-primary border-transparent'
                      : 'border-gray-200'
                  "
                  :style="{ backgroundColor: color.hex }"
                  @click="selected.color = selected.color === color.value ? null : color.value"
                ></button>
              </div>
            </div>

            <!-- Price -->
            <div v-if="filters.priceRanges?.length">
              <h3 class="text-sm font-bold text-brown mb-3">Price</h3>
              <div class="space-y-2">
                <label
                  v-for="range in filters.priceRanges"
                  :key="range.value"
                  class="flex items-center gap-2.5 text-sm text-gray-600 cursor-pointer"
                >
                  <input
                    type="radio"
                    name="price-range"
                    :value="range.value"
                    :checked="selected.priceRange === range.value"
                    class="h-4 w-4 border-gray-300 text-primary focus:ring-primary/40"
                    @change="selected.priceRange = range.value"
                  />
                  {{ range.label }}
                </label>
              </div>
            </div>

            <!-- Actions -->
            <div class="pt-2 space-y-2">
              <button
                type="button"
                class="w-full rounded-lg bg-primary text-white text-sm font-semibold py-2.5 hover:bg-primary/90 transition-colors cursor-pointer"
                @click="applyFilters"
              >
                Apply Filters
              </button>
              <button
                type="button"
                class="w-full text-center text-sm font-medium text-coral hover:underline cursor-pointer"
                @click="clearFilters"
              >
                Clear All
              </button>
            </div>
          </div>
        </aside>

        <!-- Main -->
        <div>
          <!-- Title (desktop) -->
          <div class="hidden lg:block mb-5">
            <h1 class="text-3xl font-bold text-brown">{{ title }}</h1>
            <p v-if="subtitle" class="text-md text-gray-500 mt-2">{{ subtitle }}</p>
          </div>

          <!-- Banner -->
          <div v-if="bannerImage" class="rounded-2xl overflow-hidden mb-6 bg-primary/5">
            <img :src="bannerImage" :alt="title" class="w-full h-auto object-cover" />
          </div>

          <!-- Results / Sort / View -->
          <div class="flex flex-wrap items-center justify-between gap-3 mb-4">
            <p class="text-sm text-gray-500">{{ resultsText }}</p>

            <div class="flex items-center gap-4">
              <div class="flex items-center gap-2">
                <label class="text-sm text-gray-500 shrink-0">Sort by:</label>
                <select
                  :value="sortBy"
                  class="text-sm border border-gray-200 rounded-lg pl-2 pr-7 py-1.5 focus:outline-none focus:ring-1 focus:ring-primary/40 focus:border-primary"
                  @change="emit('update:sortBy', $event.target.value)"
                >
                  <option v-for="opt in sortOptions" :key="opt.value" :value="opt.value">
                    {{ opt.label }}
                  </option>
                </select>
              </div>

              <div class="hidden sm:flex items-center gap-1.5">
                <span class="text-sm text-gray-500 mr-1">View:</span>
                <button
                  type="button"
                  class="h-8 w-8 rounded-md border flex items-center justify-center transition-colors"
                  :class="
                    viewMode === 'grid'
                      ? 'bg-primary/10 border-primary text-primary'
                      : 'border-gray-200 text-gray-400 hover:text-brown'
                  "
                  aria-label="Grid view"
                  @click="emit('update:viewMode', 'grid')"
                >
                  <i class="bi bi-grid-3x3-gap-fill text-sm"></i>
                </button>
                <button
                  type="button"
                  class="h-8 w-8 rounded-md border flex items-center justify-center transition-colors"
                  :class="
                    viewMode === 'list'
                      ? 'bg-primary/10 border-primary text-primary'
                      : 'border-gray-200 text-gray-400 hover:text-brown'
                  "
                  aria-label="List view"
                  @click="emit('update:viewMode', 'list')"
                >
                  <i class="bi bi-list-ul text-sm"></i>
                </button>
              </div>
            </div>
          </div>

          <!-- Product grid (supplied by the page using this layout) -->
          <slot />

          <!-- Pagination -->
          <div v-if="totalPages > 1" class="flex items-center justify-center gap-1.5 mt-8">
            <button
              type="button"
              class="h-9 w-9 rounded-lg border border-gray-200 flex items-center justify-center text-gray-500 hover:border-primary hover:text-primary disabled:opacity-40 disabled:pointer-events-none transition-colors cursor-pointer"
              :disabled="currentPage === 1"
              aria-label="Previous page"
              @click="goToPage(currentPage - 1)"
            >
              <i class="bi bi-chevron-left text-xs"></i>
            </button>

            <template v-for="(page, index) in pageList" :key="`${page}-${index}`">
              <span v-if="page === '...'" class="px-1.5 text-gray-400 text-sm">…</span>
              <button
                v-else
                type="button"
                class="h-9 w-9 rounded-lg text-sm font-medium border transition-colors cursor-pointer"
                :class="
                  page === currentPage
                    ? 'bg-primary text-white border-primary'
                    : 'border-gray-200 text-gray-600 hover:border-primary hover:text-primary'
                "
                @click="goToPage(page)"
              >
                {{ page }}
              </button>
            </template>

            <button
              type="button"
              class="h-9 w-9 rounded-lg border border-gray-200 flex items-center justify-center text-gray-500 hover:border-primary hover:text-primary disabled:opacity-40 disabled:pointer-events-none transition-colors cursor-pointer"
              :disabled="currentPage === totalPages"
              aria-label="Next page"
              @click="goToPage(currentPage + 1)"
            >
              <i class="bi bi-chevron-right text-xs"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  </DefaultLayout>
</template>
