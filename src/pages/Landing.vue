<script setup lang="ts">
import Hero from '@/components/organisms/Hero.vue'
import Button from '@/components/atoms/Button.vue'
import Overview from '@/components/organisms/Overview.vue'
</script>

<template>
  <Hero title="Your free and open-source resume builder"
    subtitle="Quickly create your own resume and CV. Free, forever."
    class="mt-12 sm:mt-18 md:mt-24 mb-12 max-w-5xl px-4 mx-auto">
    <Button> Start building your resume </Button>
  </Hero>

  <Overview class="max-w-5xl"/>
</template>
