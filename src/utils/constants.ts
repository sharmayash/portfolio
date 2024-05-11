import { CompanyProps } from "./types";

export const shimmer = (w: number, h: number) => `
<svg width="${w}" height="${h}" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs>
    <linearGradient id="g">
      <stop stop-color="#333" offset="20%" />
      <stop stop-color="#222" offset="50%" />
      <stop stop-color="#333" offset="70%" />
    </linearGradient>
  </defs>
  <rect width="${w}" height="${h}" fill="#333" />
  <rect id="r" width="${w}" height="${h}" fill="url(#g)" />
  <animate xlink:href="#r" attributeName="x" from="-${w}" to="${w}" dur="1s" repeatCount="indefinite"  />
</svg>`;

export const toBase64 = (str: string) =>
  typeof window === "undefined"
    ? Buffer.from(str).toString("base64")
    : window.btoa(str);

export const experiences: CompanyProps[] = [
  {
    key: 1,
    id: "reelo",
    time_period: "May 2021 - Present",
    company_name: "Reelo Technologies Pvt. Ltd.",
    company_desc:
      "Reelo is a customer loyalty and marketing automation software built to empower modern retailers to easily bring their customers back, build a strong brand, and make more money.",
    position: "Software Engineer - Frontend",
    role: "During my tenure at Reelo, I lead and oversee the development of the entire frontend infrastructure, comprising the main CRM application, internal CMS tools, feedback portal, cashier portal, and website. Provided guidance and training to junior developers, and more. For a detailed overview of the projects and the work I accomplished, please check out the project details below.",
    projects: [
      {
        id: "main-crm-app",
        project_name_1: "CRM",
        project_name_2: "Software",
        live_link: "https://app.reelo.io",
        project_description:
          "A progressive web app used by retailers and restaurant businesses for customer engagement and loyalty management.",
        project_points: [
          "Architected the frontend of this app from scratch.",
          "Added theming, monitoring, and a custom UI library of components.",
          "Utilized route-based lazy loading with the help of React Suspense.",
          "Initially created with CRA, then later migrated to Vite, which decreased the build time.",
          "Attracted 40k+ signups, and it is currently used by thousands of users daily.",
          "Implemented features like loyalty programs, campaigns, auto-campaigns, feedback, QR codes, B2C Referrals, Credit refilling and consumption.",
          "Introduced subscription-based accounts, role-based accounts, demo accounts, etc.",
          "Created numerous insight pages using chart.js and Highcharts for displaying graphs/charts.",
          "Technologies used: HTML, CSS, SCSS, Bootstrap, React, Redux (for state management), Datadog (for monitoring), Strapi (for managing content and feature flags), Storybook (for creating and managing UI components).",
        ],
      },
      {
        id: "website",
        project_name_1: "Reelo's",
        project_name_2: "Website",
        live_link: "https://www.reelo.io",
        project_description: "Built the main website of Reelo with Next.js 11.",
        project_points: [
          "Added numerous mobile-friendly web pages.",
          "Used server-side rendering (SSR) for fetching blogs, case studies, etc., from Strapi CMS.",
          "Implemented dynamic meta tags and open graph titles, descriptions, and images for different blogs and case studies.",
          "Achieved a high-performance website with a Lighthouse score of more than 90+.",
          "Technologies used: HTML, CSS, SCSS, Bootstrap, React, Next.js 11.",
        ],
      },
      {
        id: "internal-cms-app-2",
        project_name_1: "Campaign",
        project_name_2: "CMS",
        project_description:
          "A CMS app built for managing all the templates shown on the campaign's template library.",
        project_points: [
          "Includes a settings page for showing and hiding templates on the main app (e.g., hide a template for Country A and show it for Country B).",
          "Replicate template functionality for creating duplicate templates and later editing them.",
          "Technologies used: HTML, CSS, SCSS, Bootstrap, React, Next.js 12.",
        ],
      },
      {
        id: "internal-cms-app-1",
        project_name_1: "Strapi",
        project_name_2: "CMS",
        project_description: "A self-hosted CMS app created with Strapi.",
        project_points: [
          "Used for creating feature flags to release new features for specific beta users.",
          "Used for displaying in-app updates and announcements in the CRM software.",
          "Used for managing the content shown on the website's blogs, case studies, testimonials, etc.",
          "Technologies used: Strapi and SQLite DB.",
        ],
      },
      {
        id: "cashier-portal",
        project_name_1: "Cashier",
        project_name_2: "Portal",
        live_link: "https://app.reelo.io/cashier/6131b8a92183fd3b23501f30",
        project_description:
          "A web app used by store cashiers for recording bills, redeeming customer rewards, viewing purchase/redemption history, etc.",
        project_points: [
          "Technologies used: HTML, CSS, SCSS, Bootstrap, React, Redux.",
        ],
      },
      {
        id: "feedback-portal",
        project_name_1: "Feedback",
        project_name_2: "Portal",
        live_link: "https://client.reelo.io/login/6131b8a92183fd3b23501f30",
        project_description:
          "A PWA that can be installed on mobile/tablet/desktop to gather in-store customer feedback at the time of purchase.",
        project_points: [
          "Technologies used: HTML, CSS, SCSS, Bootstrap, React.",
        ],
      },
    ],
  },
  {
    key: 2,
    id: "north_loop",
    time_period: "Nov. 2020 - March 2021",
    company_name: "North Loop - Banking Made Easy",
    company_desc:
      "North Loop was a digital bank for consumers & NRIs, offering services such as money transfers, checking accounts, credit/debit cards, consumer loans, and more. It provided a dashboard for monitoring transactions.",
    position: "Software Engineer - Frontend",
    role: "Here, I mainly worked on revamping the website developed with Next.js. I completely updated all pages on the website with a focus on mobile responsiveness and high web performance. Additionally, I developed many features on the invoice, vendors, and beneficiary management app.",
    projects: [
      {
        id: "nolo_website",
        project_name_1: "North Loop's",
        project_name_2: "Website",
        // live_link: "https://nolobank.com",
        project_description:
          "Revamped the UI of the website and increased pagespeed insights performance to 90+ for most viewed pages on website.",
        project_points: ["Tech. used: Next.js, Material-UI, PostCSS, Highcharts, etc"],
      },
      {
        id: "nolo_biz",
        project_name_1: "North Loop's",
        project_name_2: "business app",
        // live_link: "https://business.nolobank.com",
        project_description:
          "An app used for recieving and making payment, create and send invoices, vendor and beneficiary management, etc.",
        project_points: [
          "Worked on create invoices, vendor management and couple other features.",
          "Tech. used: Next.js, Material-UI, SCSS, Redux, Highcharts, Formik, Yup etc"
        ],
      },
      {
        id: "nolo_biz_support",
        project_name_1: "North Loop's",
        project_name_2: "CMS app",
        project_description:
          "A Next.js app used internally for managing the users",
        project_points: [
          "Worked on setting up the app structure, auth screens and user management dashboard.",
          "Tech. used: Next.js, Material-UI, Redux etc"
        ],
      },
    ],
  },
  {
    key: 3,
    id: "aunico_india",
    time_period: "May 2019 - July 2019",
    company_name: "Aunico India Pvt. Ltd.",
    company_desc: "Aunico India was a web and mobile app development agency.",
    position: "Full Stack Engineer - Intern",
    role: "Used various technologies like Node.js, Electron.js, EJS, etc., for developing desktop applications for Windows and Linux platforms.",
    projects: [
      {
        id: "bizzmail",
        project_name_1: "Bizzmail",
        project_name_2: "",
        live_link: "https://github.com/sharmayash/Bizzmail",
        project_description:
          "A desktop email client app used for sending and receiving emails using SMTP and IMAP.",
        project_points: [
          "Used nodemailer for sending emails with SMTP and inbox for receiving email via IMAP.",
          "Built and tested this desktop app for linux and windows.",
          "Tech. used: Node.js, Electron.js, EJS, etc"
        ],
      },
      {
        id: "billing_sw",
        project_name_1: "Billing",
        project_name_2: "software",
        // live_link: "https://github.com/sharmayash/aunico/tree/master/Billing_sw_day_5-6-7-8",
        project_description:
          "Converted the web app made with php into a desktop app using electron.js",
        project_points: [
          "Built and tested this desktop app for linux and windows.",
          "Tech. used: Node.js, Electron.js, php-server-manager, etc."
        ],
      }
    ],
  },
];

export const socials = [
  {
    name: "Github",
    image: "/socials/github.webp",
    link: "https://github.com/sharmayash",
  },
  {
    name: "Hackerrank",
    image: "/socials/hackerrank.webp",
    link: "https://www.hackerrank.com/profile/sharmayash44ys",
  },
  {
    name: "FreeCodeCamp",
    image: "/socials/freecodecamp.webp",
    link: "https://www.freecodecamp.org/sharmayash",
  },
  {
    name: "LinkedIn",
    image: "/socials/linkedin.webp",
    link: "https://linkedin.com/in/sharmayash44ys",
  },
  {
    name: "Facebook",
    image: "/socials/facebook.webp",
    link: "https://www.facebook.com/yash.sharma.404",
  },
  {
    name: "Instagram",
    image: "/socials/instagram.webp",
    link: "https://www.instagram.com/yash_._sharma",
  },
];