<script setup lang="ts">
export type Severity = 'primary' | 'secondary' | 'success' | 'warning' | 'danger' | 'info' | 'light'
export type Size = 'sm' | 'md' | 'lg'

export interface ButtonProps {
  severity?: Severity
  size?: Size
  disabled?: boolean
}

const props = withDefaults(defineProps<ButtonProps>(), {
  severity: 'primary',
  size: 'md',
  disabled: false,
})

const severityClasses: Record<Severity, string> = {
  primary: 'bg-blue-600 text-white hover:bg-blue-700 active:bg-blue-800 focus:bg-blue-700',
  secondary: 'bg-gray-600 text-white hover:bg-gray-700 active:bg-gray-800 focus:bg-gray-700',
  success: 'bg-teal-500 text-white hover:bg-teal-600 active:bg-teal-700 focus:bg-teal-600',
  warning: 'bg-yellow-500 text-white hover:bg-yellow-600 active:bg-yellow-700 focus:bg-yellow-600',
  danger: 'bg-red-500 text-white hover:bg-red-600 active:bg-red-700 focus:bg-red-600',
  info: 'bg-sky-500 text-white hover:bg-sky-600 active:bg-sky-700 focus:bg-sky-600',
  light: 'bg-white text-gray-800 hover:bg-gray-200 active:bg-gray-300 focus:bg-gray-200',
}

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
    class="inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent focus:outline-hidden transition-colors duration-150 cursor-pointer"
    :class="[
      severityClasses[severity] || severityClasses.primary,
      sizeClasses[size] || sizeClasses.md,
      { 'opacity-50 pointer-events-none': disabled },
    ]"
  >
    <slot>Button</slot>
  </button>
</template>
