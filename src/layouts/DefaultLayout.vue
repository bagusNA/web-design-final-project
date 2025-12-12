<script setup lang="ts">
import { RouterLink } from 'vue-router'
import Button from 'primevue/button'
import Navbar, { type MenuItem } from '@/components/organisms/Navbar.vue'
import Footer from '@/components/organisms/Footer.vue'

const navbarItems: MenuItem[] = [
  { label: 'Templates', url: '/templates' },
  { label: 'About', url: '/about' },
  { label: 'GitHub', url: 'https://github.com/bagusNA', externalUrl: true, icon: 'lucide--github' },
]
</script>

<template>
  <Navbar :items="navbarItems">
    <template #actions>
      <RouterLink :to="{ name: 'app.home' }">
        <Button size="small">Get Started</Button>
      </RouterLink>
    </template>
  </Navbar>

  <transition name="fade">
    <slot></slot>
  </transition>

  <Footer/>
</template>
