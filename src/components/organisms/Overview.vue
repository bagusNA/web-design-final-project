<script
  setup
  lang="ts"
>
import Icon from '@/components/atoms/Icon.vue'
</script>

<template>
  <!-- Features -->
  <div class="px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
    <!-- Grid -->
    <div class="md:grid md:grid-cols-2 md:items-center md:gap-12 xl:gap-32">
      <div>
        <img class="rounded-xl" src="https://images.unsplash.com/photo-1648737963503-1a26da876aca?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=900&h=900&q=80" alt="Features Image">
      </div>
      <!-- End Col -->

      <div class="mt-5 sm:mt-10 lg:mt-0">
        <div class="space-y-6 sm:space-y-8">
          <!-- Title -->
          <div class="space-y-2 md:space-y-4">
            <h2 class="font-bold text-3xl lg:text-4xl text-gray-800 dark:text-neutral-200">
              OpenAtelio is the tool for you
            </h2>
            <p class="text-gray-500 dark:text-neutral-500">
              Quickly create a polished, professional CV that highlights your strengths and makes a lasting impression. With intuitive tools, clean templates, and guided suggestions, OpenAtelio helps you tell your story clearly and confidently so you can stand out and move forward in your career
            </p>
          </div>
          <!-- End Title -->

          <!-- List -->
          <ul class="space-y-2 sm:space-y-4">
            <li class="flex gap-x-3">
            <span class="mt-0.5 size-5 flex justify-center items-center rounded-full bg-blue-50 text-blue-600 dark:bg-blue-800/30 dark:text-blue-500">
              <Icon name="lucide--check"></Icon>
            </span>
              <div class="grow">
              <span class="text-sm sm:text-base text-gray-500 dark:text-neutral-500">
                <span class="font-bold">Easy & fast</span> resume
              </span>
              </div>
            </li>

            <li class="flex gap-x-3">
            <span class="mt-0.5 size-5 flex justify-center items-center rounded-full bg-blue-50 text-blue-600 dark:bg-blue-800/30 dark:text-blue-500">
              <Icon name="lucide--check"></Icon>
            </span>
              <div class="grow">
              <span class="text-sm sm:text-base text-gray-500 dark:text-neutral-500">
                Create with <span class="font-bold">no hassle</span>
              </span>
              </div>
            </li>

            <li class="flex gap-x-3">
            <span class="mt-0.5 size-5 flex justify-center items-center rounded-full bg-blue-50 text-blue-600 dark:bg-blue-800/30 dark:text-blue-500">
              <Icon name="lucide--check"></Icon>
            </span>
              <div class="grow">
              <span class="text-sm sm:text-base text-gray-500 dark:text-neutral-500">
                <span class="font-bold">Lots of templates</span> to choose from
              </span>
              </div>
            </li>
          </ul>
          <!-- End List -->
        </div>
      </div>
      <!-- End Col -->
    </div>
    <!-- End Grid -->
  </div>
  <!-- End Features -->
</template>
