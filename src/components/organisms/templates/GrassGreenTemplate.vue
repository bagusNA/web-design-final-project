<script setup lang="ts">
import type { TemplateProps } from '@/components/organisms/templates/index.ts'
import { formatMonthYear } from '@/utils/date'
import { EmploymentTypeOptionsMap } from '@/types/employment'

defineProps<TemplateProps>()
</script>

<template>
  <div class="h-full w-full mx-auto text-gray-800 font-sans shadow-lg bg-white overflow-hidden grid grid-cols-12">

    <!-- Sidebar -->
    <aside class="col-span-4 bg-emerald-600 text-white p-8 space-y-8">

      <!-- Profile Image -->
      <div class="flex flex-col items-center text-center space-y-4">
        <img
          v-if="data.biodata.profileImage"
          :src="data.biodata.profileImage"
          :alt="data.biodata.name"
          class="w-28 h-28 rounded-full border-4 border-white object-cover shadow-md"
        >
        <div
          v-else
          class="w-28 h-28 rounded-full bg-emerald-800 flex items-center justify-center"
        >
          <span class="text-gray-200">Photo</span>
        </div>

        <div>
          <h1 class="text-2xl font-bold">{{ data.biodata.name }}</h1>
          <p class="text-emerald-100">{{ data.biodata.jobTitle }}</p>
        </div>
        <p class="text-sm text-emerald-100">{{ data.biodata.description }}</p>
      </div>

      <!-- Contact -->
      <section>
        <h3 class="uppercase tracking-wide text-xs font-semibold text-emerald-100">Contact</h3>
        <ul class="mt-3 space-y-1 text-sm">
          <li><span class="font-medium">Email:</span> {{ data.biodata.email }}</li>
          <li><span class="font-medium">Phone:</span> {{ data.biodata.phoneNumber }}</li>
          <li><span class="font-medium">Location:</span> {{ data.biodata.location }}</li>
          <li v-if="data.biodata.website"><span class="font-medium">Website:</span> {{ data.biodata.website }}</li>
          <li v-if="data.biodata.linkedinUsername"><span class="font-medium">LinkedIn:</span> {{ data.biodata.linkedinUsername }}</li>
          <li v-if="data.biodata.githubUsername">
            <span class="font-medium">GitHub:</span> {{ data.biodata.githubUsername }}
          </li>
        </ul>
      </section>

      <!-- Skills -->
      <section>
        <h3 class="uppercase tracking-wide text-xs font-semibold text-emerald-100">Key Skills</h3>
        <div class="mt-3 flex flex-wrap gap-2">
            <span
              v-for="skill in data.biodata.keySkills"
              class="px-2 py-1 bg-emerald-500 text-xs rounded-full"
            >
              {{ skill }}
            </span>
        </div>
      </section>

      <!-- Languages -->
      <section>
        <h3 class="uppercase tracking-wide text-xs font-semibold text-emerald-100">Languages</h3>
        <ul class="mt-3 space-y-1 text-sm">
          <li
            v-for="language in data.biodata.languages"
            class="text-emerald-100"
          >
            {{ language }}
          </li>
        </ul>
      </section>

      <!-- Awards -->
      <section>
        <h3 class="uppercase tracking-wide text-xs font-semibold text-emerald-100">Awards & Certificates</h3>
        <ul class="mt-3 space-y-1 text-sm text-emerald-100">
          <li><strong>Award 1</strong> — 2024</li>
          <li><strong>Cert: ABC</strong> — 2023</li>
        </ul>
      </section>

    </aside>

    <!-- Main -->
    <main class="col-span-8 p-10 space-y-10">

      <!-- Experience -->
      <section>
        <h2 class="text-xl font-semibold text-emerald-700 border-b-2 border-emerald-600 pb-1">Experience</h2>

        <div class="mt-4 space-y-5">
          <article
            v-for="experience in data.experienceData.experiences"
            :key="experience.id"
            class="border-l-4 border-emerald-600 pl-4"
          >
            <div class="flex justify-between">
              <div>
                <h3 class="font-semibold text-gray-900">{{ experience.jobTitle }}</h3>
                <p class="text-sm text-gray-500">
                  {{ experience.employer }} —
                  {{
                    experience.employmentType
                    ? EmploymentTypeOptionsMap[experience.employmentType].label
                    : ''
                  }}
                </p>
              </div>
              <div class="text-sm text-gray-500">
                {{ formatMonthYear(experience.startDate)?.value ?? '' }}
                -
                {{ formatMonthYear(experience.endDate)?.value ?? 'Present' }}
              </div>
            </div>

            <ul class="mt-2 text-sm text-gray-700 list-disc list-inside">
              <li v-for="d in experience.description">{{ d }}</li>
            </ul>
          </article>
        </div>
      </section>

      <!-- Education -->
      <section>
        <h2 class="text-xl font-semibold text-emerald-700 border-b-2 border-emerald-600 pb-1">Education</h2>

        <div class="mt-4 space-y-4">
          <div
            v-for="education in data.educationData.educations"
            :key="education.id"
            class="border-l-4 border-emerald-600 pl-4"
          >
            <div class="flex justify-between">
              <div>
                <p class="font-medium text-gray-900">{{ education.schoolName }}</p>
                <p class="text-sm text-gray-500">{{ education.degree }}</p>
              </div>
              <div class="text-sm text-gray-500">
                {{ formatMonthYear(education.startDate)?.value ?? '' }} -
                {{ formatMonthYear(education.endDate)?.value ?? 'Present' }}
              </div>
            </div>

            <p class="mt-1 text-sm text-gray-600">{{ education.description }}</p>
          </div>
        </div>
      </section>

      <!-- Awards & Honors -->
      <section>
        <h2 class="text-xl font-semibold text-emerald-700 border-b-2 border-emerald-600 pb-1">Awards & Honors</h2>

        <div class="mt-4 space-y-3">
          <div
            v-for="award in data.awardData.awards"
            :key="award.id"
            class="flex justify-between border-l-4 border-emerald-600 pl-4"
          >
            <div>
              <p class="font-medium text-gray-900">{{ award.award }}</p>
              <p class="text-sm text-gray-600">{{ award.description }}</p>
            </div>
            <div class="text-sm text-gray-500">
              {{ formatMonthYear(award.date)?.value }}
            </div>
          </div>
        </div>
      </section>

    </main>

  </div>
</template>
