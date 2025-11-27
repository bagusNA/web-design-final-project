<script setup lang="ts">
import { useDark } from '@vueuse/core'

useDark({ disableTransition: false })
</script>

<template>
  <div class="min-h-screen">
    <component :is="$route.meta.layoutComponent">
      <RouterView/>
    </component>
  </div>
</template>
