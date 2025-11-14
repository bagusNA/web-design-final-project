<script setup lang="ts">
import { RouterLink } from 'vue-router'
import { ref } from 'vue'

import Button from '@/components/atoms/Button.vue'
import Icon from '@/components/atoms/Icon.vue'

export interface MenuItem {
  label: string
  url?: string | null
  externalUrl?: boolean
  icon?: string | null
  items?: MenuItem[]
}

export interface NavbarProps {
  items: MenuItem[]
}

const props = defineProps<NavbarProps>()

const expandMobileMenu = ref<boolean>(false)
</script>

<template>
  <header
    class="sticky top-4 inset-x-0 before:absolute before:inset-0 before:max-w-5xl before:mx-2 lg:before:mx-auto before:rounded-xl before:border before:border-gray-200 before:shadow-xl dark:border-neutral-700 after:absolute after:inset-0 after:-z-1 after:max-w-5xl after:mx-2 lg:after:mx-auto after:rounded-xl after:bg-white dark:bg-neutral-900 flex flex-wrap md:justify-start md:flex-nowrap z-50 w-full">
    <nav
      class="relative max-w-5xl w-full md:flex md:items-center md:justify-between md:gap-3 ps-5 pe-2 mx-2 lg:mx-auto dark:bg-neutral-900">
      <div class="flex items-center justify-between">
        <RouterLink
          class="flex-none font-semibold text-xl text-black focus:outline-hidden focus:opacity-80 dark:text-white"
          to="/" aria-label="OpenAtelio Logo">
          <img src="@/assets/images/logo-dark.svg" alt="OpenAtelio Logo" class="size-12">
        </RouterLink>

        <div class="md:hidden">
          <Button @click="expandMobileMenu = !expandMobileMenu" severity="light" outlined>
            <Icon name="lucide--text-align-justify"></Icon>
          </Button>
        </div>
      </div>

      <div :class="{ hidden: !expandMobileMenu }"
        class="overflow-hidden transition-all duration-300 basis-full grow md:block">
        <div
          class="overflow-hidden overflow-y-auto max-h-[75vh] [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-thumb]:bg-gray-300 dark:[&::-webkit-scrollbar-track]:bg-neutral-700 dark:[&::-webkit-scrollbar-thumb]:bg-neutral-500">
          <div class="py-2 md:py-0 flex flex-col md:flex-row md:items-center md:justify-end gap-0.5 md:gap-1">
            <component v-for="item in items" :is="item.externalUrl ? 'a' : RouterLink" :href="item.url"
              :target="item.externalUrl ? '_blank' : ''"
              class="p-2 flex items-center gap-x-2 text-sm font-medium text-gray-800 hover:text-gray-500 focus:outline-hidden focus:text-gray-500 dark:text-neutral-200 dark:hover:text-neutral-500 dark:focus:text-neutral-500">
              <Icon v-if="item.icon" :name="item.icon"></Icon>
              {{ item.label }}
            </component>

            <!-- Button Group -->
            <div v-if="$slots.actions"
              class="relative flex flex-wrap items-center gap-x-1.5 md:ps-2.5 md:ms-1.5 before:block before:absolute before:top-1/2 before:-start-px before:w-px before:h-4 before:bg-gray-300 before:-translate-y-1/2 dark:before:bg-neutral-700">
              <slot name="actions" />
            </div>
          </div>
        </div>
      </div>
    </nav>
  </header>
</template>
