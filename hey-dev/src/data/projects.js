export const projects = [
  {
    name: "GoShortly",
    type: "Production URL Shortener",
    description:
      "A production-grade URL shortening platform with real-time analytics, click tracking, dashboards, and QR-code generation.",
    tech: [
      "React",
      "Spring Boot",
      "Spring Security",
      "PostgreSQL",
      "Redis",
      "JWT",
      "Tailwind CSS",
    ],
    stats: [
      { value: "700+", label: "Links" },
      { value: "4,000+", label: "Clicks" },
      { value: "<24ms", label: "Redirect" },
    ],
    github: "https://github.com/devch105/goshortly.in",
    live: "https://goshortly.onrender.com/login",
    featured: true,
  },

  {
    name: "Cloud-Share",
    type: "File Sharing Platform",
    description:
      "A secure file-sharing platform with credit-based storage, Razorpay upgrades, asynchronous processing, and optimized MongoDB queries.",
    tech: [
      "React",
      "Spring Boot",
      "MongoDB",
      "Clerk",
      "Razorpay",
    ],
    stats: [
      { value: "50+", label: "Active Users" },
      { value: "45%", label: "Faster Responses" },
    ],
    github: "https://github.com/devch105/cloudShareApp",
    live: "https://www.cloudshare.co.in/",
    featured: false,
  },

  {
    name: "Money Manager",
    type: "Personal Finance Platform",
    description:
      "A personal finance platform with JWT authentication, automated email reminders, scheduled Excel reports, and REST APIs.",
    tech: [
      "React",
      "Spring Boot",
      "Spring Security",
      "MySQL",
      "JWT",
      "Resend",
      "Apache POI",
    ],
    stats: [
      { value: "40+", label: "Active Users" },
      { value: "97%", label: "Less Manual Effort" },
      { value: "98%", label: "Uptime" },
    ],
    github: "https://github.com/devch105/moneymanagerUi",
    live: "https://moneymanagerui.onrender.com/login",
    featured: false,
  },
];