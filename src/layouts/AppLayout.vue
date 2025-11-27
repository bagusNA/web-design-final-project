<script setup lang="ts">
import Navbar, { type MenuItem } from '@/components/organisms/Navbar.vue'

const navbarItems: MenuItem[] = [
  { label: 'My Resumes', url: '/' },
]
</script>

<template>
  <Navbar :items="navbarItems"/>

  <slot></slot>
</template>
