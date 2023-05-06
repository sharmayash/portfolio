"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import styles from "./ProfileSection.module.css";
import profileImage from "../../../public/yash.webp";

const ProfileSection: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div className="relative flex items-center justify-center flex-grow before:absolute before:inset-0 before:bg-repeat before:bg-[url('/bg.svg')]">
      <div
        className={`text-white text-center transition-opacity duration-1000 ${
          isLoaded ? "opacity-100" : "opacity-0"
        }`}
      >
        <div className="relative p-2">
          <Image
            width={256}
            height={256}
            alt="Profile"
            quality={100}
            src={profileImage}
            className="relative z-10 mx-auto w-48 h-48 rounded-full"
          />
          <div
            className={`${styles.radial_bg} absolute inset-0 rounded-full`}
          />
        </div>
        <h1 className="text-3xl font-bold mt-4 mb-2 font-caveat">
          Yash Sharma
        </h1>
        <h2 className="text-xl font-caveat">Software Engineer @ Reelo</h2>
      </div>
    </div>
  );
};

export default ProfileSection;
