<script setup lang="ts">
import Panel from 'primevue/panel'
import InputText from 'primevue/inputtext'
import Textarea from 'primevue/textarea'
import FieldGroup from '@/components/molecules/FieldGroup.vue'
import Icon from '@/components/atoms/Icon.vue'
import MultipleInputText from '@/components/molecules/MultipleInputText.vue'

export interface BiodataData {
  name: string | null
  email: string | null
  phoneNumber: string | null
  jobTitle: string | null
  location: string | null
  website: string | null
  linkedinUsername: string | null
  githubUsername: string | null
  description: string | null
  keySkills: string[]
  languages: string[]
}

const biodata = defineModel<BiodataData>('biodata', { required: true })
</script>

<template>
  <Panel toggleable>
    <template #header>
      <div class="flex items-center gap-x-2">
        <Icon name="lucide--user"></Icon>
        <span class="font-semibold">Biodata</span>
      </div>
    </template>

    <template #toggleicon="{ collapsed }">
      <Icon
        name="lucide--chevron-down"
        class="transition"
        :class="{
          'rotate-180': !collapsed,
        }"
      ></Icon>
    </template>

    <div class="space-y-2">
      <FieldGroup label="Name" icon="lucide--user" inputId="name">
        <InputText v-model="biodata.name" id="name" placeholder="John Doe" size="small" />
      </FieldGroup>

      <FieldGroup label="Email" icon="lucide--mail" inputId="email">
        <InputText
          v-model="biodata.email"
          id="email"
          placeholder="personal@email.com"
          size="small"
          type="email"
        />
      </FieldGroup>

      <FieldGroup label="Phone Number" icon="lucide--phone" inputId="phone-number">
        <InputText
          v-model="biodata.phoneNumber"
          id="phone-number"
          placeholder="+62 8123456789"
          size="small"
        />
      </FieldGroup>

      <FieldGroup label="Job Title" icon="lucide--briefcase-business" inputId="job-title">
        <InputText
          v-model="biodata.jobTitle"
          id="job-title"
          placeholder="Web Developer"
          size="small"
        />
      </FieldGroup>

      <FieldGroup label="Location" icon="lucide--map-pin" inputId="location">
        <InputText
          v-model="biodata.location"
          id="location"
          placeholder="Web Developer"
          size="small"
        />
      </FieldGroup>

      <FieldGroup label="Website" icon="lucide--globe" inputId="website">
        <InputText
          v-model="biodata.website"
          id="website"
          placeholder="personalwebsite.com"
          size="small"
        />
      </FieldGroup>

      <FieldGroup label="LinkedIn" icon="lucide--linkedin" inputId="linkedin-username">
        <InputText
          v-model="biodata.linkedinUsername"
          id="linkedin-username"
          placeholder="/in/yourusername"
          size="small"
        />
      </FieldGroup>

      <FieldGroup label="Github" icon="lucide--github" inputId="github-username">
        <InputText
          v-model="biodata.githubUsername"
          id="github-username"
          placeholder="/yourusername"
          size="small"
        />
      </FieldGroup>

      <FieldGroup label="Description" icon="lucide--text-initial" inputId="description">
        <Textarea
          v-model="biodata.description"
          id="description"
          placeholder="Describe yourself here"
          size="small"
          class="w-full"
        />
      </FieldGroup>

      <MultipleInputText v-model="biodata.keySkills" label="Key Skills" inputId="key-skills" />

      <MultipleInputText v-model="biodata.languages" label="Languages" inputId="languages" />
    </div>
  </Panel>
</template>
