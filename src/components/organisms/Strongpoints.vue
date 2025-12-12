<script setup lang="ts">
export interface StrongpointItem {
  title: string
  text: string
  icon: string
}

export interface StrongpointProps {
  items?: StrongpointItem[]
}

const props = withDefaults(defineProps<StrongpointProps>(), {
  items: () => [
    {
      title: 'Hassle-free',
      text: 'No logins, no hoops. Just open the app and start building your CV right away.',
      icon: 'iconify lucide--sparkles text-yellow-400',
    },
    {
      title: 'Yours, your way',
      text: 'Customize every detail to fit your style, no prior design experience required.',
      icon: 'iconify lucide--palette text-pink-400',
    },
    {
      title: 'Resume done, easy',
      text: 'Get your finished resume instantly. No paywall, one-click download.',
      icon: 'iconify lucide--rocket text-blue-500',
    },
  ] as StrongpointItem[]
})
</script>

<template>
  <section class="w-full py-16 bg-size-[8px_8px] bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] dark:bg-[radial-gradient(#343232_1px,transparent_1px)]">
    <div class="max-w-7xl mx-auto px-6">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 text-center">
        <div v-for="item in items" :key="item.title" class="flex flex-col items-center space-y-4 transition duration-750 hover:scale-120 hover:rotate-1 even:hover:-rotate-1">
          <span class="text-5xl" :class="item.icon"></span>
          <h3 class="text-xl font-semibold dark:text-neutral-50">{{ item.title }}</h3>
          <p class="text-sm max-w-xs text-gray-600 dark:text-neutral-300">{{ item.text }}</p>
        </div>
      </div>
    </div>
  </section>
</template>
