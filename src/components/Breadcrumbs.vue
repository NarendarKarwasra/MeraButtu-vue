<script setup>
defineProps({
  items: {
    type: Array,
    required: true,
  },
})
</script>

<template>
  <nav aria-label="Breadcrumb" class="flex items-center gap-2 py-3 text-sm">
    <RouterLink to="/" class="text-gray-500 hover:text-primary"> Home </RouterLink>

    <template v-for="item in items" :key="item.label">
      <i class="bi bi-chevron-right text-[10px] text-gray-400"></i>

      <RouterLink v-if="item.to" :to="item.to" class="text-gray-500 hover:text-primary">
        {{ item.label }}
      </RouterLink>

      <span v-else class="font-medium text-gray-800">
        {{ item.label }}
      </span>
    </template>
  </nav>
</template>
