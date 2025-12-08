<script setup lang="ts">
import type { TemplateProps } from '@/components/organisms/templates/index.ts'
import { formatMonthYear } from '@/utils/date'
import { EmploymentTypeOptionsMap } from '@/types/employment'

defineProps<TemplateProps>()
</script>

<template>
  <div class="p-10 bg-white font-sans text-gray-900">

    <!-- Header -->
    <header class="border-b pb-6 mb-10">
      <img
        v-if="data.biodata.profileImage"
        :src="data.biodata.profileImage"
        :alt="data.biodata.name"
        class="w-28 h-28 rounded-full overflow-hidden bg-gray-200 flex items-center justify-center mb-4"
      >
      <div
        v-else
        class="w-28 h-28 rounded-full overflow-hidden bg-gray-200 flex items-center justify-center mb-4"
      >
        <span class="text-gray-500">Photo</span>
      </div>

      <h1 class="text-3xl font-bold tracking-tight">
        {{ data.biodata.name }}
      </h1>
      <p class="text-lg text-gray-600 mt-1">
        {{ data.biodata.jobTitle }}
      </p>

      <div class="mt-4 text-sm text-gray-700 flex flex-wrap gap-x-6 gap-y-1">
        <p v-if="data.biodata.email">
          <span class="font-medium">Email:</span> {{ data.biodata.email }}
        </p>
        <p v-if="data.biodata.phoneNumber">
          <span class="font-medium">Phone:</span> {{ data.biodata.phoneNumber }}
        </p>
        <p v-if="data.biodata.location">
          <span class="font-medium">Location:</span> {{ data.biodata.location }}
        </p>
        <p v-if="data.biodata.website">
          <span class="font-medium">Website:</span> {{ data.biodata.website }}
        </p>
        <p v-if="data.biodata.linkedinUsername">
          <span class="font-medium">LinkedIn:</span> {{ data.biodata.linkedinUsername }}
        </p>
        <p v-if="data.biodata.githubUsername">
          <span class="font-medium">GitHub:</span> {{ data.biodata.githubUsername }}
        </p>
      </div>
    </header>


    <div class="grid grid-cols-12 gap-10">

      <!-- Sidebar -->
      <aside class="col-span-4 space-y-10">

        <!-- Summary -->
        <section>
          <h2 class="text-base font-semibold tracking-wide text-gray-800 uppercase">
            Professional Summary
          </h2>
          <p class="mt-3 text-sm text-gray-700 leading-relaxed">
            {{ data.biodata.description }}
          </p>
        </section>

        <!-- Skills -->
        <section>
          <h2 class="text-base font-semibold tracking-wide text-gray-800 uppercase">
            Key Skills
          </h2>
          <div class="mt-3 flex flex-wrap gap-2">
            <span
              v-for="skill in data.biodata.keySkills"
              :key="skill"
              class="px-3 py-1 text-xs bg-gray-100 border border-gray-300 rounded-full"
            >
              {{ skill }}
            </span>
          </div>
        </section>

        <!-- Languages -->
        <section>
          <h2 class="text-base font-semibold tracking-wide text-gray-800 uppercase">
            Languages
          </h2>

          <ul class="mt-3 text-sm space-y-1">
            <li v-for="lang in data.biodata.languages" :key="lang">
              {{ lang }}
            </li>
          </ul>
        </section>

        <!-- Awards -->
        <section>
          <h2 class="text-base font-semibold tracking-wide text-gray-800 uppercase">
            Awards & Certifications
          </h2>
          <ul class="mt-3 text-sm space-y-2">
            <li
              v-for="award in data.awardData.awards"
              :key="award.id"
              class="flex justify-between"
            >
              <div>
                <p class="font-medium">{{ award.award }}</p>
                <p class="text-xs text-gray-600">{{ award.description }}</p>
              </div>
              <p class="text-xs text-gray-600 whitespace-nowrap">
                {{ formatMonthYear(award.date)?.value }}
              </p>
            </li>
          </ul>
        </section>

      </aside>


      <!-- Main Content -->
      <main class="col-span-8 space-y-12">

        <!-- Experience -->
        <section>
          <h2 class="text-xl font-semibold tracking-tight text-gray-800">
            Professional Experience
          </h2>

          <div class="mt-5 space-y-8">
            <article
              v-for="experience in data.experienceData.experiences"
              :key="experience.id"
              class="border-b pb-5"
            >
              <div class="flex justify-between items-start">
                <div>
                  <h3 class="font-semibold text-gray-900 text-lg">
                    {{ experience.jobTitle }}
                  </h3>
                  <p class="text-sm text-gray-600">
                    {{ experience.employer }} •
                    {{
                      experience.employmentType
                      ? EmploymentTypeOptionsMap[experience.employmentType].label
                      : ''
                    }}
                  </p>
                </div>
                <p class="text-sm text-gray-600 whitespace-nowrap">
                  {{ formatMonthYear(experience.startDate)?.value ?? '' }} —
                  {{ formatMonthYear(experience.endDate)?.value ?? 'Present' }}
                </p>
              </div>

              <ul class="mt-3 text-sm text-gray-700 space-y-1 list-disc ml-5">
                <li v-for="d in experience.description" :key="d">
                  {{ d }}
                </li>
              </ul>
            </article>
          </div>
        </section>

        <!-- Education -->
        <section>
          <h2 class="text-xl font-semibold tracking-tight text-gray-800">
            Education
          </h2>

          <div class="mt-5 space-y-5">
            <div
              v-for="education in data.educationData.educations"
              :key="education.id"
              class="flex justify-between border-b pb-4"
            >
              <div>
                <p class="font-semibold text-gray-900">
                  {{ education.schoolName }}
                </p>
                <p class="text-sm text-gray-600">{{ education.degree }}</p>
              </div>
              <p class="text-sm text-gray-600 whitespace-nowrap">
                {{ formatMonthYear(education.startDate)?.value ?? '' }} —
                {{ formatMonthYear(education.endDate)?.value ?? 'Present' }}
              </p>
            </div>
          </div>
        </section>

      </main>
    </div>
  </div>
</template>
