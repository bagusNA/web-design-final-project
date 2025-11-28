<script setup lang="ts">
import Navbar, { type MenuItem } from '@/components/organisms/Navbar.vue'
import Footer from '@/components/organisms/Footer.vue'

const navbarItems: MenuItem[] = [
  { label: 'My Resumes', url: '/app' },
  { label: 'Templates', url: '/templates' },
]
</script>

<template>
  <Navbar :items="navbarItems"/>

  <transition name="fade">
    <slot></slot>
  </transition>

  <Footer/>
</template>
