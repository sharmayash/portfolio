import { ReactNode } from "react";
import sharedMetaData from "../shared-metadata";

export const metadata = {
  ...sharedMetaData,
  title: "Experience",
  description: "Hey there, you can view my experiences on this webpage.",
};

const ExperienceLayout = (props: {
  children: ReactNode;
  projects: ReactNode;
}) => {
  return (
    <section>
      {props.children}
      {props.projects}
    </section>
  );
};

export default ExperienceLayout;
