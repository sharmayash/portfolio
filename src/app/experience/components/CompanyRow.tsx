"use client";

import "atropos/css";
import Link from "next/link";
import Image from "next/image";
import Atropos from "atropos/react";
import { CompanyProps } from "@/utils/types";
import { shimmer, toBase64 } from "@/utils/constants";

const CompanyRow = ({ card }: { card: CompanyProps }) => {
  return (
    <div id={card?.id} className="my-8 md:my-16 py-8 md:py-16 font-montserrat">
      <div className="m-auto max-w-4xl text-sm md:text-base text-center">
        <h2 className="mb-4 text-xl md:text-3xl font-medium">
          {card.company_name}
        </h2>
        <p className="m-auto mb-6 md:mb-24 max-w-2xl">{card.company_desc}</p>
        <div className="gap-4 flex items-center justify-between">
          <p>
            <span className="font-semibold">Position:</span> {card.position}
          </p>
          <p>
            <span className="font-semibold">Time Period:</span>{" "}
            {card.time_period}
          </p>
        </div>
        <p className="mt-6 mb-12">
          <span className="font-semibold">My Role : </span>
          {card.role}
        </p>
      </div>
      <div
        id="company-projects"
        className="gap-4 flex items-start justify-center flex-wrap"
      >
        {card.projects.map((project, i) => (
          <Link
            passHref
            scroll={false}
            key={project.id}
            href={`/experience/${project?.id}`}
            title={`Click to know more about the ${project.project_name_1} ${project.project_name_2}`}
          >
            <Atropos className="relative w-72 h-52 sm:w-80 sm:h-60 cursor-pointer">
              <Image
                fill
                loading="lazy"
                alt="back-image"
                className="scale-110"
                data-atropos-offset="-10"
                src={`/backgrounds/triangles/${i + 1}.webp`}
                placeholder={`data:image/svg+xml;base64,${toBase64(
                  shimmer(320, 240)
                )}`}
                style={{
                  objectFit: "cover",
                }}
              />
              <Image
                fill
                alt="back-image"
                data-atropos-offset="-5"
                src={`/backgrounds/waves/${i + 1}.png`}
                style={{
                  objectFit: "cover",
                }}
              />
              <div className="relative z-10 w-full h-full flex flex-col items-center justify-center font-caveat">
                <span
                  data-atropos-offset="10"
                  className="text-2xl sm:text-3xl font-medium text-white"
                >
                  {project.project_name_1}
                </span>
                <span
                  data-atropos-offset="20"
                  className="text-2xl sm:text-3xl font-medium text-white"
                >
                  {project.project_name_2}
                </span>
              </div>
            </Atropos>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CompanyRow;
