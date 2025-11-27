<script setup lang="ts">
import { useDark } from '@vueuse/core'

useDark({ disableTransition: false })
</script>

<template>
  <component :is="$route.meta.layoutComponent">
    <RouterView/>
  </component>
</template>
