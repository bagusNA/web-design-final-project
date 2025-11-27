<script setup lang="ts">
import { useDark } from '@vueuse/core'
import Icon from '@/components/atoms/Icon.vue'

const isDark = useDark({ disableTransition: false })
</script>

<template>
  <button @click="isDark = !isDark" class="appearance-none cursor-pointer transition" type="button">
    <Icon :name="isDark ? 'lucide--moon-star' : 'lucide--sun'"></Icon>
  </button>
</template>
