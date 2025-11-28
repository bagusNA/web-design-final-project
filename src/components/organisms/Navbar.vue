<script setup lang="ts">
import { ref } from 'vue'
import {
  type RouteLocationAsPathGeneric,
  type RouteLocationAsRelativeGeneric,
  RouterLink,
} from 'vue-router'
import { useDark } from '@vueuse/core'

import Button from 'primevue/button'
import Icon from '@/components/atoms/Icon.vue'

export interface MenuItem {
  label: string
  url?: string | RouteLocationAsRelativeGeneric | RouteLocationAsPathGeneric | null
  externalUrl?: boolean
  icon?: string | null
  items?: MenuItem[]
}

export interface NavbarProps {
  items: MenuItem[]
}

const props = defineProps<NavbarProps>()

const expandMobileMenu = ref<boolean>(false)

const isDark = useDark()
</script>

<template>
  <header class="sticky top-0 inset-x-4 max-w-7xl p-2 md:px-4 mx-auto w-full z-10">
    <nav
      class="relative max-w-7xl w-full md:flex md:items-center md:justify-between px-2 rounded-xl shadow-xl bg-white border border-gray-200 dark:bg-neutral-900 dark:border-neutral-700"
    >
      <div class="flex items-center justify-between">
        <RouterLink
          class="flex-none font-semibold text-xl text-black focus:outline-hidden focus:opacity-80 dark:text-white"
          to="/"
          aria-label="OpenAtelio Logo"
        >
          <img
            v-if="!isDark"
            src="@/assets/images/logo-dark.svg"
            alt="OpenAtelio Logo"
            class="size-12 mx-2"
          />
          <img
            v-else
            src="@/assets/images/logo-light.svg"
            alt="OpenAtelio Logo"
            class="size-12 mx-2"
          />
        </RouterLink>

        <div class="md:hidden">
          <Button @click="expandMobileMenu = !expandMobileMenu" severity="light" outlined>
            <Icon name="lucide--text-align-justify"></Icon>
          </Button>
        </div>
      </div>

      <div
        :class="{ hidden: !expandMobileMenu }"
        class="transition-all duration-300 basis-full grow md:block"
      >
        <div class="max-h-[75vh]">
          <div
            class="py-2 md:py-0 flex flex-col md:flex-row md:items-center md:justify-end gap-0.5 md:gap-1"
          >
            <component
              v-for="item in items"
              :is="item.externalUrl ? 'a' : RouterLink"
              :to="item.url"
              :href="item.url"
              :target="item.externalUrl ? '_blank' : ''"
              class="p-2 flex items-center gap-x-2 text-sm font-medium text-gray-800 hover:text-gray-500 focus:outline-hidden focus:text-gray-500 dark:text-neutral-200 dark:hover:text-neutral-500 dark:focus:text-neutral-500"
            >
              <Icon v-if="item.icon" :name="item.icon"></Icon>
              {{ item.label }}
            </component>

            <div
              v-if="$slots.actions"
              class="relative flex flex-wrap items-center gap-x-1.5 md:ps-2.5 md:ms-1.5 before:block before:absolute before:top-1/2 before:-start-px before:w-px before:h-4 before:bg-gray-300 before:-translate-y-1/2 dark:before:bg-neutral-700"
            >
              <slot name="actions" />
            </div>
          </div>
        </div>
      </div>
    </nav>
  </header>
</template>
