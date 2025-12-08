<script setup lang="ts">
import Navbar, { type MenuItem } from '@/components/organisms/Navbar.vue'
import Footer from '@/components/organisms/Footer.vue'

const navbarItems: MenuItem[] = [
  { label: 'My Resumes', url: { name: 'app.home' } },
  { label: 'Templates', url: { name: 'templates' } },
  { label: 'Settings', url: { name: 'app.settings' } },
]
</script>

<template>
  <Navbar :items="navbarItems"/>

  <transition name="fade">
    <slot></slot>
  </transition>

  <Footer/>
</template>
