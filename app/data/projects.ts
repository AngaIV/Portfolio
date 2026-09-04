// app/data/projects.ts
import { Project } from '../types';

export const projectsData: Project[] = [
  {
    id: 'winharden',
    title: 'WinHarden',
    description: 'An interactive C# security console and CLI tool for auditing Windows OS security baselines, executing registry remediations, and exporting compliance reports.',
    tags: ['C#', '.NET', 'Windows Security', 'Powershell', 'Registry Audit'],
    githubUrl: 'https://github.com/AngaIV/WinHarden',
    featured: true,
  },
  {
    id: 'sec-ops-lab',
    title: 'Security Operations Lab',
    description: 'A Python and CustomTkinter desktop app integrating Linux network traffic monitoring via tcpdump, authentication log analysis, and automated network interface isolation.',
    tags: ['Python', 'CustomTkinter', 'tcpdump', 'Linux', 'Network Security'],
    githubUrl: 'https://github.com/AngaIV/SEC-OPS-Lab',
    featured: true,
  },
  {
    id: 'active-defense-siem',
    title: 'Wazuh Active Defense SIEM',
    description: 'Active Defense SIEM system linking a Wazuh manager with local Linux iptables firewall rules to automatically detect SSH brute-force attempts and block malicious IP addresses.',
    tags: ['Wazuh SIEM/XDR', 'Linux', 'iptables', 'Cybersecurity', 'Active Defense'],
    githubUrl: 'https://github.com/AngaIV/wazuh-firewall-response',
    featured: true,
  },
  {
    id: 'intergalactic-war',
    title: 'Intergalactic War 2D',
    description: 'A 2D arcade action game built in Java featuring custom graphics, custom keyboard input handling, collision dynamics, wave progression, and enemy AI.',
    tags: ['Java', 'OOP', 'Game Development', 'Java Swing/AWT'],
    githubUrl: 'https://github.com/AngaIV/Intergalactic-War',
    featured: false,
  },
  {
    id: 'retail-storefront',
    title: 'River of Life Church – Website & Demo Store',
    description: 'This is a frontend web platform built as an assignment for a CS3 Web Technology course. It combines standard church community pages with an interactive e-commerce store layout.',
    tags: ['JavaScript', 'PHP', 'MySQL', 'HTML5', 'CSS'],
    githubUrl: 'https://github.com/AngaIV/rolc.github.io',
    liveUrl: 'https://your-username.github.io/e-commerce-storefront',
    featured: false,
  },
];