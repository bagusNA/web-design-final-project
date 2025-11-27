<script setup lang="ts">
import Button from 'primevue/button'
import FAQ from '@/components/organisms/FAQ.vue'
import Footer from '@/components/organisms/Footer.vue'
import Hero from '@/components/organisms/Hero.vue'
</script>

<template>
  <Hero
    title="Your free and open-source resume builder"
    subtitle="Quickly create your own resume and CV. Free, forever."
    class="mt-12 sm:mt-18 md:mt-24 mb-12 max-w-7xl px-4 mx-auto"
  >
    <RouterLink to="/app/editor">
      <Button> Start building your resume </Button>
    </RouterLink>
  </Hero>

  <FAQ class="mx-auto max-w-7xl px-4" />

  <Footer/>
</template>
