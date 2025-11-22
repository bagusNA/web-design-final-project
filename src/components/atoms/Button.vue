<script setup lang="ts">
import { computed } from 'vue'

export type Severity = 'primary' | 'secondary' | 'success' | 'warning' | 'danger' | 'info' | 'light'
export type Size = 'sm' | 'md' | 'lg'

export interface ButtonProps {
  severity?: Severity
  size?: Size
  outlined?: boolean
  disabled?: boolean
}

const props = withDefaults(defineProps<ButtonProps>(), {
  severity: 'primary',
  size: 'md',
  outlined: false,
  disabled: false,
})

const normalSeverityClasses: Record<Severity, string> = {
  primary: 'bg-primary-600 text-white hover:bg-primary-700 active:bg-primary-800 focus:bg-primary-700 focus:ring-1 focus:ring-offset-2 focus:ring-primary-700',
  secondary: 'bg-gray-600 text-white hover:bg-gray-700 active:bg-gray-800 focus:bg-gray-700 focus:ring-1 focus:ring-offset-2 focus:ring-gray-700',
  success: 'bg-teal-500 text-white hover:bg-teal-600 active:bg-teal-700 focus:bg-teal-600 focus:ring-1 focus:ring-offset-2 focus:ring-teal-700',
  warning: 'bg-yellow-500 text-white hover:bg-yellow-600 active:bg-yellow-700 focus:bg-yellow-600 focus:ring-1 focus:ring-offset-2 focus:ring-yellow-600',
  danger: 'bg-red-500 text-white hover:bg-red-600 active:bg-red-700 focus:bg-red-600 focus:ring-1 focus:ring-offset-2 focus:ring-red-600',
  info: 'bg-sky-500 text-white hover:bg-sky-600 active:bg-sky-700 focus:bg-sky-600 focus:ring-1 focus:ring-offset-2 focus:ring-sky-600',
  light: 'bg-white text-gray-800 hover:bg-gray-200 active:bg-gray-300 focus:bg-gray-200 focus:ring-1 focus:ring-offset-2 focus:ring-gray-200',
}

const outlinedSeverityClasses: Record<Severity, string> = {
  primary: 'border border-primary-600 text-primary-600 hover:bg-primary-50 active:bg-primary-100 focus:ring-1 focus:ring-offset-2 focus:ring-primary-600',
  secondary: 'border border-gray-600 text-gray-600 hover:bg-gray-50 active:bg-gray-100 focus:ring-1 focus:ring-offset-2 focus:ring-gray-600',
  success: 'border border-teal-500 text-teal-500 hover:bg-teal-50 active:bg-teal-100 focus:ring-1 focus:ring-offset-2 focus:ring-teal-500',
  warning: 'border border-yellow-500 text-yellow-600 hover:bg-yellow-50 active:bg-yellow-100 focus:ring-1 focus:ring-offset-2 focus:ring-yellow-500',
  danger: 'border border-red-500 text-red-500 hover:bg-red-50 active:bg-red-100 focus:ring-1 focus:ring-offset-2 focus:ring-red-500',
  info: 'border border-sky-500 text-sky-500 hover:bg-sky-50 active:bg-sky-100 focus:ring-1 focus:ring-offset-2 focus:ring-sky-500',
  light: 'border border-gray-300 text-gray-700 hover:bg-gray-50 active:bg-gray-100 focus:ring-1 focus:ring-offset-2 focus:ring-gray-300',
}

const severityClasses = computed(() => props.outlined ? outlinedSeverityClasses : normalSeverityClasses)

const sizeClasses: Record<Size, string> = {
  sm: 'py-1 px-2',
  md: 'py-2 px-3',
  lg: 'py-3 px-4',
}
</script>

<template>
  <button
    type="button"
    :disabled="disabled"
    class="inline-flex items-center gap-x-2 text-sm font-medium rounded-md focus:outline-hidden transition-colors duration-150 cursor-pointer"
    :class="[
      severityClasses[severity] || severityClasses.primary,
      sizeClasses[size] || sizeClasses.md,
      { 'opacity-50 pointer-events-none': disabled },
    ]"
  >
    <slot>Button</slot>
  </button>
</template>
