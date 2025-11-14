<script setup lang="ts">
import Navbar, { type MenuItem } from '@/components/organisms/Navbar.vue'
import Button from '@/components/atoms/Button.vue'
import Footer from '@/components/organisms/Footer.vue'

const navbarItems: MenuItem[] = [
  { label: 'Templates', url: '/' },
  { label: 'GitHub', url: 'https://github.com/bagusNA', externalUrl: true, icon: 'lucide--github' },
]
</script>

<template>
  <div class="min-h-screen flex flex-col">
    <Navbar :items="navbarItems">
      <template #actions>
        <Button>Get Started</Button>
      </template>
    </Navbar>

    <main class="min-h-full grow">
      <slot></slot>
    </main>

    <Footer :items="navbarItems" class="max-w-5xl" />
  </div>
</template>
