"use client";

import React from "react";
import { motion } from "framer-motion";
import { socials } from "@/utils/constants";
import HomeButton from "@/components/common/HomeButton";
import { AnimatedTooltip } from "@/components/ui/animated-tooltip";
import { AuroraBackground } from "@/components/ui/aurora-background";

const Contact: React.FC = () => {
  return (
    <div id="contact-us-page" className="relative">
      <HomeButton />
      <AuroraBackground>
        <motion.div
          initial={{ opacity: 0.0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="relative flex flex-col gap-4 items-center justify-center px-4"
        >
          <div className="text-4xl md:text-7xl font-bold dark:text-white text-center mb-16">
            Get In Touch
          </div>
          <div className="flex flex-row items-center justify-center mb-2 w-full">
            <AnimatedTooltip items={socials} />
          </div>
          <div className="font-extralight text-xl md:text-3xl dark:text-neutral-200">
            <a href="mailto:sharmayash98ys@gmail.com">
              sharmayash98ys@gmail.com
            </a>
          </div>
        </motion.div>
      </AuroraBackground>
    </div>
  );
};

export default Contact;
