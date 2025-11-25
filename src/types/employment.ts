export enum EmploymentType {
  FullTime = "FULL_TIME",
  PartTime = "PART_TIME",
  Contract = "CONTRACT",
  Internship = "INTERNSHIP",
  Freelance = "FREELANCE",
  SelfEmployed = "SELF_EMPLOYED"
}

export interface OptionItem<T> {
  label: string
  value: T
  icon?: string
}

export const EmploymentTypeOptionsMap: Record<EmploymentType, OptionItem<EmploymentType>> = {
  [EmploymentType.FullTime]: {
    label: "Full Time",
    value: EmploymentType.FullTime,
  },
  [EmploymentType.PartTime]: {
    label: "Part Time",
    value: EmploymentType.PartTime,
  },
  [EmploymentType.Contract]: {
    label: "Contract",
    value: EmploymentType.Contract,
  },
  [EmploymentType.Internship]: {
    label: "Internship",
    value: EmploymentType.Internship,
  },
  [EmploymentType.Freelance]: {
    label: "Freelance",
    value: EmploymentType.Freelance,
  },
  [EmploymentType.SelfEmployed]: {
    label: "Self-Employed",
    value: EmploymentType.SelfEmployed,
  },
}

export const EmploymentTypeOptions: OptionItem<EmploymentType>[] = Object.values(EmploymentTypeOptionsMap)
