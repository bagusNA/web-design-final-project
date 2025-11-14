<script
  setup
  lang="ts"
>
import Icon from '@/components/atoms/Icon.vue'
</script>

<template>
  <!-- Features -->
  <div class="max-w-5xl px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
    <div class="aspect-w-16 aspect-h-7">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3951.3167232956425!2d112.61091841157464!3d-7.966183492025581!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e788286b690daf5%3A0xd4c41035e86e672e!2sNasi%20Cumi%20Hitam%20Madura%20Pak%20Kris!5e0!3m2!1sen!2sid!4v1763085690026!5m2!1sen!2sid"
        style="border: 0"
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
        class="w-full rounded-xl shadow-lg"
        height="600px"
      ></iframe>
    </div>

    <!-- Grid -->
    <div class="mt-5 lg:mt-16 grid lg:grid-cols-3 gap-8 lg:gap-12">
      <div class="lg:col-span-1">
        <h2 class="font-bold text-2xl md:text-3xl text-gray-800 dark:text-neutral-200">
          Let's work together
        </h2>
        <p class="mt-2 md:mt-4 text-gray-500 dark:text-neutral-500">
          We are available here
        </p>
      </div>
      <!-- End Col -->

      <div class="lg:col-span-2">
        <div class="grid sm:grid-cols-2 gap-8 md:gap-12">
          <!-- Icon Block -->
          <div class="flex gap-x-5">
            <Icon name="lucide--map" class="shrink-0 mt-1 size-6 text-blue-600 dark:text-blue-500" />

            <div class="grow">
              <h3 class="text-lg font-semibold text-gray-800 dark:text-white">
                Office Address
              </h3>
              <p class="mt-1 text-gray-600 dark:text-neutral-400">
                Jl. Galunggung No.67 M, Gading Kasri, Kec. Klojen, Kota Malang, Jawa Timur 65115
              </p>
            </div>
          </div>
          <!-- End Icon Block -->

          <!-- Icon Block -->
          <div class="flex gap-x-5">
            <Icon name="lucide--phone" class="shrink-0 mt-1 size-6 text-blue-600 dark:text-blue-500" />

            <div class="grow">
              <h3 class="text-lg font-semibold text-gray-800 dark:text-white">
                Phone Number
              </h3>
              <p class="mt-1 text-gray-600 dark:text-neutral-400">
                012311231231
              </p>
            </div>
          </div>
          <!-- End Icon Block -->

          <!-- Icon Block -->
          <div class="flex gap-x-5">
            <Icon name="lucide--mail" class="shrink-0 mt-1 size-6 text-blue-600 dark:text-blue-500" />

            <div class="grow">
              <h3 class="text-lg font-semibold text-gray-800 dark:text-white">
                Email Address
              </h3>
              <p class="mt-1 text-gray-600 dark:text-neutral-400">
                email@email.com
              </p>
            </div>
          </div>
          <!-- End Icon Block -->

        </div>
      </div>
      <!-- End Col -->
    </div>
    <!-- End Grid -->
  </div>
  <!-- End Features -->
</template>
