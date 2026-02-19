export interface Project {
  title: string;
  description: string;
  tech: string[];
  category: "Offensive" | "Defensive" | "Full Stack";
  link?: string;
}

export const profileData = {
  name: "Anand K B",
  role: "Cybersecurity Analyst & Linux Administrator",
  tagline: "Securing infrastructure through vulnerability assessment, hardening, and offensive tactics.",
  contact: {
    email: "anandbenny112@gmail.com",
    phone: "+91 7306593281",
    linkedin: "https://www.linkedin.com/in/anand-k-b-a461ba299",
    github: "https://github.com/Maddreamer112",
    location: "Calicut, Kerala, India"
  },
  education: {
    degree: "B.Tech in Computer Science and Engineering",
    school: "Lovely Professional University",
    year: "2027",
    coursework: ["Cryptography", "Offensive Security", "Operating Systems", "Computer Networks", "Artificial Intelligence"]
  },
  certs: [
    "Red Hat System Administration I (RH124)",
    "Red Hat System Administration II (RH134)",
    "Computer Communications (2024)"
  ],
  achievements: [
    {
      title: "Global Rank 412",
      event: "picoCTF 2025",
      details: "Top percentile among 18k+ global participants"
    },
    {
      title: "Global Rank 842",
      event: "HTB Cyber Apocalypse 2025",
      details: "Competitive finish among 12k+ teams"
    }
  ],
  skills: {
    languages: ["Python", "Bash", "C++", "Java", "JavaScript"],
    securityTools: ["Wireshark", "Nmap", "Zmap", "Burp Suite", "Metasploit"],
    infrastructure: ["Linux (RHEL/Kali)", "Docker", "SELinux", "Firewalld", "Systemd"]
  },
  projects: [
    {
      title: "Sentinel FIM",
      description: "A lightweight File Integrity Monitor that detects unauthorized file modifications in real-time using SHA-256 hashing algorithms and forensic logging.",
      tech: ["Python", "SHA-256", "OS Libraries"],
      category: "Defensive"
    },
    {
      title: "USB Sentry",
      description: "Automated USB device whitelisting system designed to prevent unauthorized peripheral access and mitigate BadUSB attacks.",
      tech: ["Linux Kernel", "Bash", "Udev Rules"],
      category: "Defensive"
    },
    {
      title: "Custom Vuln Scanner",
      description: "Network vulnerability scanner capable of port enumeration and service detection, simulating Nmap functionality for offensive reconnaissance.",
      tech: ["Python", "Socket Programming", "TCP/IP"],
      category: "Offensive"
    },
    {
      title: "AI Fitness Coach",
      description: "Full-stack application demonstrating secure API integration with Gemini and backend automation for real-time tracking.",
      tech: ["Node.js", "MongoDB", "Gemini API"],
      category: "Full Stack"
    }
  ] as Project[]
};