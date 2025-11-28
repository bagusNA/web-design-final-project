<script setup lang="ts">
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
      <Button size="small">Get Started</Button>
    </template>
  </Navbar>

  <slot></slot>
</template>
