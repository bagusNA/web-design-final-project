<script setup lang="ts">
import type { TemplateProps } from '@/components/organisms/templates/index.ts'
import { formatMonthYear } from '@/utils/date.ts'
import { EmploymentTypeOptionsMap } from '@/types/employment.ts'

defineProps<TemplateProps>()
</script>

<template>
  <div class="h-full p-10 font-sans text-gray-800 bg-gradient-to-br from-indigo-50 to-white">
    <div class="grid grid-cols-12 gap-10">
      <!-- Sidebar -->
      <aside class="col-span-4 p-6 rounded-2xl bg-white shadow-lg border border-indigo-100">
        <div class="flex flex-col items-center gap-4 text-center">
          <img
            v-if="data.biodata.profileImage"
            :src="data.biodata.profileImage"
            :alt="data.biodata.name"
            class="w-32 h-32 rounded-full object-cover shadow-md border-4 border-indigo-200"
          />
          <div
            v-else
            class="w-32 h-32 rounded-full bg-indigo-100 flex items-center justify-center shadow-md"
          >
            <span class="text-indigo-600">No Photo</span>
          </div>

          <div>
            <h1 class="text-3xl font-bold tracking-tight text-indigo-700">
              {{ data.biodata.name }}
            </h1>
            <p class="text-sm tracking-wide uppercase text-gray-500 font-medium">
              {{ data.biodata.jobTitle }}
            </p>
          </div>

          <p class="text-sm text-gray-600 leading-relaxed max-w-xs">
            {{ data.biodata.description }}
          </p>
        </div>

        <!-- Contact -->
        <section class="mt-8">
          <h3 class="text-sm font-bold text-indigo-700 tracking-wider">CONTACT</h3>
          <ul class="mt-3 text-sm text-gray-700 space-y-1">
            <li><span class="font-semibold">Email:</span> {{ data.biodata.email }}</li>
            <li><span class="font-semibold">Phone:</span> {{ data.biodata.phoneNumber }}</li>
            <li><span class="font-semibold">Location:</span> {{ data.biodata.location }}</li>
            <li v-if="data.biodata.website">
              <span class="font-semibold">Website:</span> {{ data.biodata.website }}
            </li>
            <li v-if="data.biodata.linkedinUsername">
              <span class="font-semibold">LinkedIn:</span>
              {{ data.biodata.linkedinUsername }}
            </li>
            <li v-if="data.biodata.githubUsername">
              <span class="font-semibold">GitHub:</span>
              {{ data.biodata.githubUsername }}
            </li>
          </ul>
        </section>

        <!-- Skills -->
        <section class="mt-8">
          <h3 class="text-sm font-bold text-indigo-700 tracking-wider">KEY SKILLS</h3>
          <div class="flex flex-wrap gap-2 mt-3">
            <span
              v-for="skill in data.biodata.keySkills"
              :key="skill"
              class="px-3 py-1 text-xs bg-indigo-100 text-indigo-700 rounded-full font-medium"
            >
              {{ skill }}
            </span>
          </div>
        </section>

        <!-- Languages -->
        <section class="mt-8">
          <h3 class="text-sm font-bold text-indigo-700 tracking-wider">LANGUAGES</h3>
          <ul class="mt-3 space-y-1 text-sm text-gray-700">
            <li v-for="lang in data.biodata.languages" :key="lang">
              {{ lang }}
            </li>
          </ul>
        </section>

        <!-- Awards -->
        <section class="mt-8">
          <h3 class="text-sm font-bold text-indigo-700 tracking-wider">AWARDS</h3>
          <ul class="mt-3 space-y-1 text-sm text-gray-700">
            <li v-for="award in data.awardData.awards" :key="award.id">
              <span class="font-semibold">{{ award.award }}</span>
              — {{ formatMonthYear(award.date)?.value }}
            </li>
          </ul>
        </section>
      </aside>

      <!-- Main -->
      <main class="col-span-8">
        <!-- Experience -->
        <section>
          <h2 class="text-2xl font-semibold text-indigo-800 mb-6">Experience</h2>

          <div class="space-y-8 border-l-2 border-indigo-300 pl-6">
            <article
              v-for="experience in data.experienceData.experiences"
              :key="experience.id"
              class="relative"
            >
              <!-- Bullet -->
              <div
                class="w-4 h-4 bg-indigo-500 rounded-full absolute -left-[34px] top-1.5 shadow-md"
              ></div>

              <!-- Job Info -->
              <div>
                <div class="flex justify-between items-start">
                  <div>
                    <h3 class="text-lg font-semibold text-gray-800">
                      {{ experience.jobTitle }}
                    </h3>
                    <p class="text-sm text-gray-500">
                      {{ experience.employer }} •
                      {{
                        experience.employmentType
                          ? EmploymentTypeOptionsMap[experience.employmentType].label
                          : ''
                      }}
                    </p>
                  </div>
                  <div class="text-sm text-gray-500 whitespace-nowrap">
                    {{ formatMonthYear(experience.startDate)?.value ?? '' }} —
                    {{ formatMonthYear(experience.endDate)?.value ?? 'Present' }}
                  </div>
                </div>

                <ul class="mt-3 text-sm text-gray-600 space-y-1">
                  <li v-for="d in experience.description">
                    {{ d }}
                  </li>
                </ul>
              </div>
            </article>
          </div>
        </section>

        <!-- Education -->
        <section class="mt-12">
          <h2 class="text-2xl font-semibold text-indigo-800">Education</h2>

          <div class="mt-4 space-y-4">
            <div
              v-for="education in data.educationData.educations"
              :key="education.id"
              class="border-b pb-3"
            >
              <div class="flex-justify-between">
                <div>
                  <p class="font-semibold text-gray-800">{{ education.schoolName }}</p>
                  <p class="text-sm text-gray-500">{{ education.degree }}</p>
                </div>
                <p class="text-sm text-gray-500">
                  {{ formatMonthYear(education.startDate)?.value ?? '' }} —
                  {{ formatMonthYear(education.endDate)?.value ?? 'Present' }}
                </p>
              </div>

              <div class="mt-1 text-xs">
                {{ education.description }}
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  </div>
</template>
