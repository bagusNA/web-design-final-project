<script setup lang="ts">
import { ref, computed } from "vue"
import { useWindowSize } from '@vueuse/core'

interface Props {
  images: string[]
}

const props = defineProps<Props>()

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
  const count = props.images.length

  const isMobile = windowSize.width.value < 640

  const spreadAngle = isMobile ? 20 : 25
  const radius = isMobile ? 400 : 1600

  return props.images.map((_, i) => {
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
    <div class="relative w-full flex justify-center overflow-hidden pt-32">
      <div class="relative perspective-[1600px]" :style="{ height: `${cardWidth + cardWidth * 0.6}px` }">
        <div
          v-for="(img, index) in props.images"
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

    <div>
      ...and many more to come!
    </div>
  </div>
</template>
