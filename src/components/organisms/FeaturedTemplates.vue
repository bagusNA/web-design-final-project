<script setup lang="ts">
import { ref, computed } from "vue"
import { useWindowSize } from '@vueuse/core'
import { resumeTemplates } from '@/composables/useResumeTemplate.ts'

const templateImages = computed<string[]>(() => resumeTemplates.map(template => template.thumbnail))

const hovered = ref<number | null>(null)
const windowSize = useWindowSize()

const onTap = (i: number) => {
  hovered.value = hovered.value === i ? null : i
}

const onEnter = (i: number) => {
  if (windowSize.width.value > 768) hovered.value = i
}
const onLeave = () => {
  if (windowSize.width.value > 768) hovered.value = null
}

const positions = computed(() => {
  const count = templateImages.value.length

  const isMobile = windowSize.width.value < 640

  const spreadAngle = isMobile ? 20 : 25
  const radius = isMobile ? 400 : 1600

  return templateImages.value.map((_, i) => {
    const t = count > 1 ? (i / (count - 1)) - 0.5 : 0
    const angle = t * spreadAngle
    const x = Math.sin((angle * Math.PI) / 180) * radius
    const y = Math.cos((angle * Math.PI) / 180) * 12

    return { x, y, angle }
  })
})

const cardWidth = computed(() => {
  if (windowSize.width.value < 400) return 150
  if (windowSize.width.value < 640) return 180
  if (windowSize.width.value < 1024) return 220
  return 260
})
</script>

<template>
  <div class="text-center space-y-12">
    <div class="pt-24">
      <h1 class="text-2xl sm:text-3xl md:text-4xl font-bold mb-2">
        Quick start your resume with our templates
      </h1>
      <p>
        No need to start from scratch, we’ve got you covered. Choose a layout you love and make it yours in no time.
      </p>
    </div>

    <div class="relative w-full flex justify-center overflow-hidden pt-24">
      <div class="relative perspective-[1600px]" :style="{ height: `${cardWidth + cardWidth * 0.6}px` }">
        <div
          v-for="(img, index) in templateImages"
          :key="index"
          class="absolute transition-all duration-500 ease-out cursor-pointer rounded-xl bg-white shadow-xl overflow-hidden"
          :style="{
          width: cardWidth + 'px',
          height: cardWidth * 1.414 + 'px', // A4 ratio
          left: `calc(50% + ${positions[index]!.x}px - ${cardWidth / 2}px)`,
          top: `${positions[index]!.y}px`,
          transform:
            hovered === index
              ? 'translateY(-20px) scale(1.15) rotate(0deg)'
              : `rotate(${positions[index]!.angle}deg)`,
          zIndex: hovered === index ? 999 : index
        }"
          @mouseenter="onEnter(index)"
          @mouseleave="onLeave"
          @click="onTap(index)"
        >
          <img :src="img" alt="" class="w-full h-full object-cover" />
        </div>
      </div>
    </div>

    <div class="text-center">
      ...and many more to come!
    </div>
  </div>
</template>
