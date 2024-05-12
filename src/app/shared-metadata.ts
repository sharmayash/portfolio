import type { Metadata } from "next";

const sharedMetaData: Metadata = {
  metadataBase: new URL("https://yash98.netlify.app"),
  description:
    "Welcome to my portfolio website! I am a skilled software engineer with experience in building responsive and dynamic web apps using modern technologies such as React, Next.js, Node.js, MongoDB, etc. Take a look at my previous projects and feel free to contact me to discuss any potential collaborations or job opportunities.",
  keywords: [
    "Yash",
    "web dev",
    "portfolio",
    "sharmayash",
    "Yash Sharma",
    "Web Developer",
    "web portfolio",
    "backend engineer",
    "frontend engineer",
    "backend Developer",
    "Yash Sharma Jaipur",
    "React js Developer",
    "frontend developer",
    "software Developer",
    "full stack engineer",
    "full stack developer",
    "yash sharma portfolio",
    "yash sharma web portfolio",
  ],

  openGraph: {
    title: "Yash Sharma | Software engineer",
    description:
      "Welcome to my portfolio website! I am a skilled software engineer with experience in building responsive and dynamic web apps using modern technologies such as React, Next.js, Node.js, MongoDB, etc. Take a look at my previous projects and feel free to contact me to discuss any potential collaborations or job opportunities.",
    url: "https://yash98.netlify.app",
    siteName: "Yash Sharma",
    images: [
      {
        url: "/og-thumb.png",
        width: 512,
        height: 512,
      },
    ],
    locale: "en-US",
    type: "website",
  },

  icons: {
    icon: "/code.png",
    shortcut: "/code.png",
    apple: "/code.png",
    other: {
      rel: "apple-touch-icon-precomposed",
      url: "/code.png",
    },
  },
};

export default sharedMetaData;
