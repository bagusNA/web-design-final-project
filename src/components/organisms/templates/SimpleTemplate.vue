<script setup lang="ts">
import type { TemplateProps } from '@/components/organisms/templates/index.ts'
import { formatMonthYear } from '@/utils/date.ts'
import { EmploymentTypeOptionsMap } from '@/types/employment.ts'

defineProps<TemplateProps>()
</script>

<template>
  <div class="p-2">
    <div class="grid grid-cols-12 gap-6 p-8">
      <aside class="col-span-4 border-r pr-3">
        <div class="flex flex-col items-start gap-4">
          <img
            v-if="data.biodata.profileImage"
            :src="data.biodata.profileImage"
            :alt="data.biodata.name"
            class="w-28 h-28 rounded-full overflow-hidden bg-gray-200 flex items-center justify-center"
          >
          <div
            v-else
            class="w-28 h-28 rounded-full overflow-hidden bg-gray-200 flex items-center justify-center"
          >
            <span class="text-gray-500">Photo</span>
          </div>

          <div>
            <h1 class="text-2xl font-semibold leading-tight">{{ data.biodata.name }}</h1>
            <p class="muted">{{ data.biodata.jobTitle }}</p>
          </div>

          <p class="text-sm muted">{{ data.biodata.description }}</p>
        </div>

        <section class="mt-6">
          <h3 class="text-sm font-semibold section-title">Contact</h3>
          <ul class="mt-2 text-sm muted space-y-1">
            <li>
              <span class="font-medium text-gray-700 mr-1">Email:</span>
              <a :href="`mailto:${data.biodata.email}`" target="_blank">{{ data.biodata.email }}</a>
            </li>
            <li>
              <span class="font-medium text-gray-700">Phone:</span> {{ data.biodata.phoneNumber }}
            </li>
            <li>
              <span class="font-medium text-gray-700">Location:</span> {{ data.biodata.location }}
            </li>
            <li v-if="data.biodata.website">
              <span class="font-medium text-gray-700">Website:</span> {{ data.biodata.website }}
            </li>
            <li v-if="data.biodata.linkedinUsername">
              <span class="font-medium text-gray-700">LinkedIn:</span>
              {{ data.biodata.linkedinUsername }}
            </li>
            <li v-if="data.biodata.githubUsername">
              <span class="font-medium text-gray-700 mr-1">GitHub:</span>
              <a :href="`https://github.com/${data.biodata.githubUsername}`" target="_blank">
                {{ data.biodata.githubUsername }}
              </a>
            </li>
          </ul>
        </section>

        <section class="mt-6">
          <h3 class="text-sm font-semibold section-title">Key Skills</h3>
          <div class="mt-2 grid grid-cols-1 gap-2 text-sm">
            <div class="flex flex-wrap gap-1.5">
              <span
                v-for="skill in data.biodata.keySkills"
                class="px-2 py-1 text-xs border rounded-full muted"
              >
                {{ skill }}
              </span>
            </div>
          </div>
        </section>

        <section class="mt-6">
          <h3 class="text-sm font-semibold section-title">Languages</h3>
          <ul class="mt-2 text-sm muted space-y-1">
            <li v-for="language in data.biodata.languages">
              <span class="font-medium text-gray-700">{{ language }}</span>
            </li>
          </ul>
        </section>

        <section class="mt-6">
          <h3 class="text-sm font-semibold section-title">Awards & Certificates</h3>
          <ul class="mt-2 text-sm muted space-y-1">
            <li><span class="font-medium text-gray-700">Award 1</span> — 2024</li>
            <li><span class="font-medium text-gray-700">Cert: ABC</span> — 2023</li>
          </ul>
        </section>
      </aside>

      <main class="col-span-8 pl-3">

        <!-- Experiences -->
        <section>
          <div class="flex items-center justify-between">
            <h2 class="text-lg font-semibold">Experience</h2>
            <!--            <span class="text-sm muted">Total: 6 years</span>-->
          </div>

          <div class="mt-4 space-y-4">

            <article v-for="experience in data.experienceData.experiences" :key="experience.id">
              <div class="flex justify-between">
                <div>
                  <h3 class="font-semibold">{{ experience.jobTitle }}</h3>
                  <p class="text-sm muted">
                    {{ experience.employer }} -
                    {{
                      experience.employmentType
                      ? EmploymentTypeOptionsMap[experience.employmentType].label
                      : ''
                    }}
                  </p>
                </div>
                <div v-if="experience.startDate" class="text-sm muted">
                  {{ formatMonthYear(experience.startDate)?.value ?? '' }} -
                  {{ formatMonthYear(experience.endDate)?.value ?? 'Present' }}
                </div>
              </div>
              <ul class="mt-2 text-sm list-disc list-inside muted">
                <li v-for="d in experience.description">
                  {{ d }}
                </li>
              </ul>
            </article>
          </div>
        </section>

        <!-- Education -->
        <section class="mt-6">
          <h2 class="text-lg font-semibold">Education</h2>

          <div class="mt-3 space-y-3 text-sm muted">
            <div
              v-for="education in data.educationData.educations"
              :key="education.id"
            >
              <div class="flex justify-between">
                <div>
                  <p class="font-medium">{{ education.schoolName }}</p>
                  <p class="muted">{{ education.degree }}</p>
                </div>
                <div v-if="education.startDate">
                  {{ formatMonthYear(education.startDate)?.value ?? '' }} -
                  {{ formatMonthYear(education.endDate)?.value ?? 'Present' }}
                </div>
              </div>

              <div class="mt-1 text-xs">
                {{ education.description }}
              </div>
            </div>
          </div>
        </section>

        <!--        <section class="mt-6">-->
        <!--          <h2 class="text-lg font-semibold">Projects</h2>-->
        <!--          <div class="mt-3 space-y-3 text-sm muted">-->
        <!--            <div>-->
        <!--              <p class="font-medium">Project Name</p>-->
        <!--              <p class="mt-1">-->
        <!--                Lorem ipsum-->
        <!--              </p>-->
        <!--            </div>-->
        <!--          </div>-->
        <!--        </section>-->

        <section class="mt-6">
          <h2 class="text-lg font-semibold">Awards & Honors</h2>
          <div class="mt-3 space-y-2 text-sm muted">
            <div
              v-for="award in data.awardData.awards"
              :key="award.id"
              class="flex justify-between"
            >
              <div>
                <p class="font-medium">{{ award.award }}</p>
                <p class="text-xs muted">{{ award.description }}</p>
              </div>

              <div>{{ formatMonthYear(award.date)?.value }}</div>
            </div>
          </div>
        </section>
      </main>
    </div>
  </div>
</template>
