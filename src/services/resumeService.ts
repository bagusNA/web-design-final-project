import { randomString } from '@/utils/string.ts'
import { EmploymentType } from '@/types/employment.ts'

export function createResume(id: string = randomString()) {
  return {
    id,
    templateId: 'simple',
    title: 'Untitled Resume',
    createdAt: new Date(),
    updatedAt: new Date(),
    thumbnailImage: null,

    biodata: {
      profileImage: null,
      name: 'Your Name',
      email: 'youremail@example.com',
      phoneNumber: '+62 812-3456-7890',
      jobTitle: 'Web Developer',
      location: 'City, Country',
      description: 'Describe yourself briefly',
      website: 'yourwebsite.com',
      githubUsername: '/username',
      linkedinUsername: '/in/username',
      keySkills: [],
      languages: [],
    },
    educationData: {
      educations: [
        {
          id: randomString(),
          schoolName: 'Kalimantan Institute of Technology',
          degree: 'Undergraduate in Computer Science',
          startDate: new Date('2023-07'),
          endDate: null,
          location: 'Balikpapan, Indonesia',
          description: '',
        },
      ],
    },
    experienceData: {
      experiences: [
        {
          id: randomString(),
          jobTitle: 'Your Job Title',
          employer: 'Super Company',
          employmentType: EmploymentType.FullTime,
          startDate: new Date('2025-02'),
          endDate: null,
          description: ['Describe your responsibilities briefly.'],
        },
        {
          id: randomString(),
          jobTitle: 'Your Job Title',
          employer: 'Super Company',
          employmentType: EmploymentType.FullTime,
          startDate: new Date('2024-04'),
          endDate: new Date('2025-02'),
          description: ['Describe your responsibilities briefly.'],
        },
      ],
    },
    awardData: {
      awards: [
        {
          id: randomString(),
          award: 'Best Striker of All Time',
          issuer: 'NATO',
          date: new Date('2025-03'),
          description: 'Describe what the award was for.',
        },
      ],
    },
  }
}
