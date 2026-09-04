// app/data/experience.ts
import { Experience } from '../types';

export const experienceData: Experience[] = [
  {
    id: 'cs-tutor',
    role: 'Computer Science Tutor',
    organization: 'Rhodes University',
    period: '2026',
    description: [
      'Assisted students with understanding fundamental computer science concepts, algorithms, and data structures.',
      'Assisted students with coursework and assignments, improving understanding and academic performance during laboratory sessions.',
    ],
    skillsUsed: ['Java', 'C', 'Python', 'Data Structures', 'Code Review'],
  },
  {
    id: 'it-helpdesk',
    role: 'Student IT Helpdesk Technician',
    organization: 'Rhodes University',
    period: '2026',
    description: [
      'Provided tier-1 technical support for campus network infrastructure, device configuration, and OS troubleshooting.',
      'Resolved hardware, software, and account credential issues for university students and staff.',
      'Detected and removed computer viruses and malware using endpoint security tools.',
    ],
    skillsUsed: ['IT Support', 'Network Troubleshooting', 'Operating Systems', 'Customer Service'],
  },
  {
    id: 'first-year-mentor',
    role: 'First-Year Student Mentor',
    organization: 'Rhodes University',
    period: '2025',
    description: [
      'Mentored incoming first-year university students, helping them transition into higher education academic and social environments.',
    ],
    skillsUsed: ['Mentorship', 'Leadership', 'Communication'],
  },
];