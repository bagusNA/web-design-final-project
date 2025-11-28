<script setup lang="ts">
import Navbar, { type MenuItem } from '@/components/organisms/Navbar.vue'

const navbarItems: MenuItem[] = [
  { label: 'My Resumes', url: '/app' },
  { label: 'Templates', url: '/templates' },
]
</script>

<template>
  <Navbar :items="navbarItems"/>

  <slot></slot>
</template>
