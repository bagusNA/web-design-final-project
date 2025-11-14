<script setup lang="ts">
export interface IconProps {
  name: string
  // See: https://iconify.design/docs/usage/css/tailwind/tailwind4/#extra-class-name
  color?: boolean
}

defineProps<IconProps>()
</script>

<template>
  <i :class="[color ? 'iconify-color' : 'iconify', name]"></i>
</template>
