<script setup lang="ts">
import ThemeToggleSimple from '@/components/atoms/ThemeToggleSimple.vue'
</script>

<template>
  <footer class="w-full border-t border-gray-700 bg-gray-900 text-gray-200">
    <div
      class="mx-auto w-full max-w-7xl px-6 py-12 grid grid-cols-1 md:grid-cols-2 gap-8 items-center"
    >
      <div class="space-y-4">
        <img
          src="@/assets/images/logo-light.svg"
          alt="OpenAtelio Logo"
          class="h-18"
        />

        <p class="max-w-md text-sm leading-relaxed">
          OpenAtelio makes building your CV straightforward and free. It is fully open‑source. Join
          us and help make it better.
        </p>


        <a
          href="#"
          class="inline-flex items-center gap-2 text-sm font-medium transition hover:text-neutral-400"
        >
          <i class="iconify lucide--github text-xl"></i> GitHub
        </a>
      </div>

      <div class="flex flex-col md:items-end gap-6">
        <div class="flex items-center gap-4 text-xl">
          <i class="iconify lucide--languages"></i>
          <ThemeToggleSimple />
        </div>

        <div class="w-32 h-20 bg-[radial-gradient(#e5e7eb_2px,transparent_2px)] bg-size-[16px_16px]"></div>
      </div>
    </div>
  </footer>
</template>
