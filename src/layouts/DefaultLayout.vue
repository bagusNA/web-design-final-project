<script setup lang="ts">
import { RouterLink } from 'vue-router'
import Button from 'primevue/button'
import Navbar, { type MenuItem } from '@/components/organisms/Navbar.vue'

const navbarItems: MenuItem[] = [
  { label: 'Templates', url: '/templates' },
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

  <slot></slot>
</template>
