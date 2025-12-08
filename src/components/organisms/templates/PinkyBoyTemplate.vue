<script setup lang="ts">
import type { TemplateProps } from '@/components/organisms/templates/index.ts'
import { formatMonthYear } from '@/utils/date'
import { EmploymentTypeOptionsMap } from '@/types/employment'

defineProps<TemplateProps>()
</script>

<template>
  <div class="h-full w-full p-4 bg-white">
    <div class="h-full w-full grid grid-cols-12 gap-6 p-8 text-gray-800 border border-pink-200">

      <!-- Sidebar -->
      <aside class="col-span-4 pr-4 border-r border-pink-200">
        <div class="flex flex-col items-start gap-6">

          <!-- Profile Photo -->
          <div class="w-full flex flex-col items-center">
            <img
              v-if="data.biodata.profileImage"
              :src="data.biodata.profileImage"
              :alt="data.biodata.name"
              class="w-32 h-32 rounded-full object-cover ring-4 ring-pink-300"
            >
            <div
              v-else
              class="w-32 h-32 rounded-full bg-pink-100 text-pink-400 flex items-center justify-center ring-4 ring-pink-200"
            >
              <span class="text-sm">No Photo</span>
            </div>

            <div class="mt-4 text-center">
              <h1 class="text-2xl font-bold text-pink-600">
                {{ data.biodata.name }}
              </h1>
              <p class="text-sm text-gray-500 italic mt-1">
                {{ data.biodata.jobTitle }}
              </p>
            </div>
          </div>

          <!-- Bio -->
          <p class="text-sm text-gray-600 leading-relaxed">
            {{ data.biodata.description }}
          </p>
        </div>

        <!-- Contact -->
        <section class="mt-8">
          <h3 class="text-sm font-bold uppercase tracking-wide text-pink-600">
            Contact
          </h3>
          <ul class="mt-2 text-sm text-gray-700 space-y-1">
            <li>
              <span class="font-medium">Email:</span>
              <a :href="`mailto:${data.biodata.email}`" class="text-pink-600 underline">
                {{ data.biodata.email }}
              </a>
            </li>
            <li><span class="font-medium">Phone:</span> {{ data.biodata.phoneNumber }}</li>
            <li><span class="font-medium">Location:</span> {{ data.biodata.location }}</li>
            <li v-if="data.biodata.website">
              <span class="font-medium">Website:</span>
              <span class="text-pink-600">{{ data.biodata.website }}</span>
            </li>
            <li v-if="data.biodata.linkedinUsername">
              <span class="font-medium">LinkedIn:</span>
              <span class="text-pink-600">{{ data.biodata.linkedinUsername }}</span>
            </li>
            <li v-if="data.biodata.githubUsername">
              <span class="font-medium">GitHub:</span>
              <a
                :href="`https://github.com/${data.biodata.githubUsername}`"
                class="text-pink-600 underline"
                target="_blank"
              >
                {{ data.biodata.githubUsername }}
              </a>
            </li>
          </ul>
        </section>

        <!-- Skills -->
        <section class="mt-8">
          <h3 class="text-sm font-bold uppercase tracking-wide text-pink-600">Key Skills</h3>
          <div class="mt-3 flex flex-wrap gap-2">
            <span
              v-for="skill in data.biodata.keySkills"
              :key="skill"
              class="px-3 py-1 bg-pink-100 text-pink-700 text-xs rounded-full border border-pink-200"
            >
              {{ skill }}
            </span>
          </div>
        </section>

        <!-- Languages -->
        <section class="mt-8">
          <h3 class="text-sm font-bold uppercase tracking-wide text-pink-600">
            Languages
          </h3>
          <ul class="mt-2 space-y-1 text-sm text-gray-700">
            <li v-for="language in data.biodata.languages" :key="language">
              {{ language }}
            </li>
          </ul>
        </section>

        <!-- Awards -->
        <section class="mt-8">
          <h3 class="text-sm font-bold uppercase tracking-wide text-pink-600">
            Awards & Certificates
          </h3>
          <ul class="mt-2 space-y-1 text-sm text-gray-700">
            <li><span class="font-medium text-pink-600">Award 1</span> — 2024</li>
            <li><span class="font-medium text-pink-600">Cert: ABC</span> — 2023</li>
          </ul>
        </section>
      </aside>

      <!-- Main Content -->
      <main class="col-span-8 pl-4">

        <!-- Experience -->
        <section>
          <h2 class="text-xl font-bold text-pink-600">Experience</h2>

          <div class="mt-5 space-y-6">
            <article
              v-for="experience in data.experienceData.experiences"
              :key="experience.id"
              class="border-b border-pink-100 pb-4"
            >
              <div class="flex justify-between">
                <div>
                  <h3 class="font-semibold text-lg text-gray-800">{{ experience.jobTitle }}</h3>
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
                  {{ formatMonthYear(experience.startDate)?.value ?? '' }} -
                  {{ formatMonthYear(experience.endDate)?.value ?? 'Present' }}
                </div>
              </div>

              <ul class="mt-3 text-sm text-gray-600 list-disc list-inside space-y-1">
                <li v-for="d in experience.description">{{ d }}</li>
              </ul>
            </article>
          </div>
        </section>

        <!-- Education -->
        <section class="mt-10">
          <h2 class="text-xl font-bold text-pink-600">Education</h2>

          <div class="mt-4 space-y-4 text-sm text-gray-700">
            <div
              v-for="education in data.educationData.educations"
              :key="education.id"
              class="border-b border-pink-100 pb-3"
            >
              <div class="flex justify-between">
                <div>
                  <p class="font-medium text-gray-900">{{ education.schoolName }}</p>
                  <p class="text-gray-500 text-sm">{{ education.degree }}</p>
                </div>
                <div>
                  {{ formatMonthYear(education.startDate)?.value ?? '' }} -
                  {{ formatMonthYear(education.endDate)?.value ?? 'Present' }}
                </div>
              </div>

              <p class="mt-2 text-xs text-gray-600">{{ education.description }}</p>
            </div>
          </div>
        </section>

        <!-- Awards & Honors -->
        <section class="mt-10">
          <h2 class="text-xl font-bold text-pink-600">Awards & Honors</h2>

          <div class="mt-4 space-y-3 text-sm text-gray-700">
            <div
              v-for="award in data.awardData.awards"
              :key="award.id"
              class="flex justify-between border-b border-pink-100 pb-2"
            >
              <div>
                <p class="font-semibold text-gray-900">{{ award.award }}</p>
                <p class="text-xs text-gray-500">{{ award.description }}</p>
              </div>
              <div class="text-gray-600">{{ formatMonthYear(award.date)?.value }}</div>
            </div>
          </div>
        </section>

      </main>
    </div>
  </div>
</template>
