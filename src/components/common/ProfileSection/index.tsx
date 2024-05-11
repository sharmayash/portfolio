"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import styles from "./ProfileSection.module.css";

const ProfileSection: React.FC = () => {
  return (
    <div className="relative flex items-center justify-center flex-grow before:absolute before:inset-0 before:bg-repeat before:bg-[url('/bg.svg')]">
      <motion.div
        transition={{ duration: 0.2 }}
        animate={{ opacity: 1, scale: 1 }}
        initial={{ opacity: 0, scale: 0.8 }}
        className={`text-white text-center`}
      >
        <div className="relative p-2">
          <Image
            priority
            width={256}
            height={256}
            alt="Profile"
            quality={100}
            src="/yash-sharma-passport.webp"
            className="relative z-10 mx-auto w-48 h-48 rounded-full"
          />
          <div
            className={`${styles.radial_bg} absolute inset-0 rounded-full`}
          />
        </div>
        <h1 className="text-3xl text-foreground font-bold mt-4 mb-2 font-caveat">
          Yash Sharma
        </h1>
        <h2 className="text-xl text-foreground font-caveat">
          Software Engineer @ Reelo
        </h2>
      </motion.div>
    </div>
  );
};

export default ProfileSection;
