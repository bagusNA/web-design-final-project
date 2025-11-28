<script setup lang="ts">
import { useDark } from '@vueuse/core'

useDark({ disableTransition: false })
</script>

<template>
  <div class="min-h-screen">
    <transition name="fade">
      <component :is="$route.meta.layoutComponent">
        <RouterView/>
      </component>
    </transition>
  </div>
</template>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
