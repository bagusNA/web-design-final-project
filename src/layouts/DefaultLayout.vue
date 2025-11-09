<script setup lang="ts">
import Navbar, { type MenuItem } from '@/components/ui/Navbar.vue'
import Button from '@/components/form/Button.vue'

const navbarItems: MenuItem[] = [
  { label: 'Templates', url: '/' },
  { label: 'GitHub', url: 'https://github.com/bagusNA', externalUrl: true, icon: 'lucide--github' },
]
</script>

<template>
  <Navbar :items="navbarItems">
    <template #actions>
      <Button>Get Started</Button>
    </template>
  </Navbar>

  <slot></slot>
</template>
