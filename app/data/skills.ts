// app/data/skills.ts
import { SkillCategory } from '../types';

export const skillsData: SkillCategory[] = [
  {
    category: 'Programming Languages',
    skills: [
      { name: 'C#' },
      { name: 'Python' },
      { name: 'JavaScript' },
      { name: 'TypeScript' },
      { name: 'Java' },
      { name: 'C / C++' },
      { name: 'SQL' },
      { name: 'PHP' },
      { name: 'R' },
    ],
  },
  {
    category: 'Web & Infrastructure',
    skills: [
      { name: 'React' },
      { name: 'Next.js' },
      { name: 'Node.js' },
      { name: 'Express.js' },
      { name: 'Django' },
      { name: 'Tailwind CSS' },
      { name: 'PostgreSQL' },
      { name: 'MySQL' },
      { name: 'MS SQL Server' },
      { name: 'Docker' },
    ],
  },
  {
    category: 'Cybersecurity Tools',
    skills: [
      { name: 'Wazuh SIEM/XDR' },
      { name: 'Kali Linux' },
      { name: 'Nmap' },
      { name: 'Burp Suite' },
      { name: 'Metasploit' },
      { name: 'John the Ripper' },
      { name: 'Scapy' },
      { name: 'Netcat' },
      { name: 'tcpdump' },
    ],
  },
  {
    category: 'Data & Analytics',
    skills: [
      { name: 'Power BI' },
      { name: 'Tableau Desktop' },
      { name: 'Tableau Prep' },
    ],
  },
];