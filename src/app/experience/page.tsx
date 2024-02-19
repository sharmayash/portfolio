import { CompanyProps } from "@/utils/types";
import CompanyRow from "./components/CompanyRow";
import ScrollLink from "../(Components)/ScrollLink";
import ScrollProgressBar from "../(Components)/ScrollProgressBar";
import ScrollDownButton from "@/components/common/ScrollDownButton";

const Experience: React.FC = () => {
  return (
    <div className="relative">
      <ScrollProgressBar />
      <div id="experience-page" className="mx-auto max-w-screen-xl">
        <div
          id="page-header"
          className="p-4 h-screen relative flex items-center justify-center"
        >
          <h1 className="text-6xl font-caveat font-semibold text-center">
            Experience and Projects
          </h1>
          <ScrollLink
            href="/experience#reelo"
            className="left-1/2 bottom-8 -translate-x-1/2 absolute"
          >
            <ScrollDownButton />
          </ScrollLink>
        </div>
        <div id="companies-row" className="p-4">
          {cardData?.map((card) => (
            <CompanyRow key={card.id} card={card} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;

const cardData: CompanyProps[] = [
  {
    key: 1,
    id: "reelo",
    time_period: "May 2021 - Present",
    company_name: "Reelo Technologies Pvt. Ltd.",
    company_desc:
      "Reelo is a CRM software built to empower modern retailers to easily bring their customers back, build a strong brand, and make more money.",
    position: "Software Engineer - Frontend",
    role: "During my tenure at Reelo, I took on the responsibility of single-handedly developing the entire frontend, providing training to interns, and more. For a detailed overview of the projects and the work I accomplished, please check out the project details below.",
    projects: [
      {
        id: "main-crm-app",
        project_name_1: "CRM",
        project_name_2: "Software",
        project_description:
          "A progressive web app used by retailers and restaurant businesses for customer engagement and loyalty management.",
        project_points: [
          "Created and architected the frontend of this app from scratch.",
          "Added theming, monitoring, and a custom UI library of components.",
          "Utilized route-based lazy loading with the help of React Suspense.",
          "Initially created with CRA, then later migrated to Vite, which decreased the build time.",
          "Attracted 40k+ signups, and it is currently used by thousands of users daily.",
          "Implemented features like loyalty programs, campaigns, auto-campaigns, feedback, QR codes, B2C Referrals, Credit refilling, and used them for sending communications.",
          "Introduced subscription-based accounts, role-based accounts, demo accounts, etc.",
          "Created numerous insight pages using chart.js and Highcharts for displaying graphs/charts.",
          "Technologies used: HTML, CSS, SCSS, Bootstrap, React, Redux (for state management), Datadog (for monitoring), Strapi (for managing content and feature flags), Storybook (for creating and managing UI components).",
        ],
      },
      {
        id: "cashier-portal",
        project_name_1: "Cashier",
        project_name_2: "Portal",
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
        project_description:
          "A PWA that can be installed on mobile/tablet/desktop to gather customer feedback in-store at the time of purchase.",
        project_points: [
          "Technologies used: HTML, CSS, SCSS, Bootstrap, React.",
        ],
      },
      {
        id: "website",
        project_name_1: "Reelo's",
        project_name_2: "Website",
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
        id: "internal-cms-app-2",
        project_name_1: "Campaign",
        project_name_2: "CMS",
        project_description:
          "A CMS app built for managing all the templates shown on the campaign's template library.",
        project_points: [
          "Essentially a CRUD app for Campaign templates.",
          "Includes a settings page for showing and hiding templates on the main app (e.g., hide a template for Country A and show it for Country B).",
          "Replicate template functionality for creating duplicate templates and later editing them.",
          "Technologies used: HTML, CSS, SCSS, Bootstrap, React, Next.js 12.",
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
    projects: [],
  },
  {
    key: 3,
    id: "aunico_india",
    time_period: "May 2019 - July 2019",
    company_name: "Aunico India Pvt. Ltd.",
    company_desc: "Aunico India was a web and mobile app development agency.",
    position: "Full Stack Engineer - Intern",
    role: "Used various technologies like Node.js, Electron.js, EJS, etc., for developing desktop applications for Windows and Linux platforms.",
    projects: [],
  },
];

// const cardData: CompanyProps[] = [
//   {
//     key: 1,
//     id: "reelo",
//     time_period: "May 2021 - Present",
//     company_name: "Reelo Technologies Pvt. Ltd.",
//     company_desc:
//       "Reelo is a CRM software built to empower modern retailers to easily bring their customers back, build a strong brand and make more money.",
//     position: "Software Engineer - Frontend",
//     role: "Here I single handedly developed entire frontend of Reelo, trained interns, etc.",
//     projects: [
//       {
//         id: "main-crm-app",
//         project_name_1: "CRM",
//         project_name_2: "Software",
//         project_description:
//           "A progressive web app which is used by retailers and restaurant businesses for customer engagement and loyalty management.",
//         project_points: [
//           "Created and architected frontend of this app from scratch.",
//           "Added theming, monitoring, custom UI library of components.",
//           "Used route based lazy loading with the help of react Suspense",
//           "First created with CRA, then later migrated to Vite which decreased the build time",
//           "We got 40k+ signups from the app and it's currently used by thousands of users daily.",
//           "Added so many features like loyalty, campaigns, auto-campaigns, feedback, QR code, B2C Referrals, Credit refilling and using them for sending communications, Subscription based accounts, Role based accounts, Demo accounts etc.",
//           "Created lots of insight page and used chart.js and Highcharts for showing graphs/charts on these pages.",
//           "Technologies used: HTML, CSS, SCSS, Bootstrap, React, Redux (for state management), Datadog (for monitoring), Strapi (for managing content and feature flags), Storybook (For creating and managing UI components)",
//         ],
//       },
//       {
//         id: "cashier-portal",
//         project_name_1: "Cashier",
//         project_name_2: "Portal",
//         project_description:
//           "A web app which can be used by the cashiers of the store for recording bills, redeeming the customer rewards, View purchase/redemption history, etc.",
//         project_points: [
//           "Technologies used: HTML, CSS, SCSS, Bootstrap, React, Redux.",
//         ],
//       },
//       {
//         id: "feedback-portal",
//         project_name_1: "Feedback",
//         project_name_2: "Portal",
//         project_description:
//           "A PWA which can be installed on a mobile/tablet/desktop in order to get customers feedback in store at the time of purchase.",
//         project_points: [
//           "Technologies used: HTML, CSS, SCSS, Bootstrap, React",
//         ],
//       },
//       {
//         id: "website",
//         project_name_1: "Reelo's",
//         project_name_2: "website",
//         project_description: "Built main website of reelo with Next.js 11",
//         project_points: [
//           "Added lots of mobile friendly web pages.",
//           "Used ssr for fetching blogs, case-studies, etc from strapi CMS.",
//           "Dynamic meta tags and open graph title, description and images for different blogs and case studies.",
//           "High performance website with more than 90+ lighthouse score.",
//           "Technologies used: HTML, CSS, SCSS, Bootstrap, React, Next.js 11.",
//         ],
//       },
//       {
//         id: "internal-cms-app-1",
//         project_name_1: "Strapi",
//         project_name_2: "CMS",
//         project_description: "A self hosted CMS app created with Strapi",
//         project_points: [
//           "Used for creating feature flags in order to release new feature for some specific beta users",
//           "Used for showing the in-app updates/anouncements in CRM software.",
//           "Used for managing the content shown on website's blogs, case-studies, testimonials, etc",
//           "Technologies used: Strapi and SQLite DB",
//         ],
//       },
//       {
//         id: "internal-cms-app-2",
//         project_name_1: "Campaign",
//         project_name_2: "CMS",
//         project_description:
//           "A CMS app built for managing all the templates shown on campaigns template library.",
//         project_points: [
//           "It's basically a CRUD app for Campaign templates.",
//           "This app also have a settings page which can be used for showing and hiding templates on main app for example we can hide a template for country A and show it for Country B.",
//           "Also have a replicate template functionality by which we can create duplicate templates and then later edit them",
//           "Technologies used: HTML, CSS, SCSS, Bootstrap, React, Next.js 12",
//         ],
//       },
//     ],
//   },
//   {
//     key: 2,
//     id: "north_loop",
//     time_period: "Nov. 2020 - March 2021",
//     company_name: "North Loop - Banking Made Easy",
//     company_desc:
//       "North Loop was a digital bank for consumers & NRIs. Users are offered services such as money transfers, checking accounts, credit/debit cards, consumer loans, and more. It provides a dashboard for monitoring transactions.",
//     position: "Software Engineer - Frontend",
//     role: "Here I mainly worked on the revamping the website which was developed with next.js. We completely updated all the pages on the website keeping in mind the high web performance. I also worked and developed many features on the invoice, vendors and beneficiary management app.",
//     projects: [],
//   },
//   {
//     key: 3,
//     id: "aunico_india",
//     time_period: "May 2019 - July 2019",
//     company_name: "Aunico India Pvt. Ltd.",
//     company_desc: "Aunico India was a web and mobile app development agency.",
//     position: "Full Stack Engineer - Intern",
//     role: "Used various technologies like Node.js, Electron.js, EJS, etc for developing desktop application for windows and linux platforms.",
//     projects: [],
//   },
// ];
