<script setup lang="ts">
import FieldGroup from '@/components/molecules/FieldGroup.vue'
import Icon from '@/components/atoms/Icon.vue'
import Panel from 'primevue/panel'
import InputText from 'primevue/inputtext'

export interface BiodataData {
  name: string | null
  email: string | null
  phoneNumber: string | null
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
    </div>
  </Panel>
</template>
