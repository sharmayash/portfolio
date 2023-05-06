import sharedMetaData from "../shared-metadata.js";

export const metadata = {
  ...sharedMetaData,
  title: "Experience",
  description: "Hey there, you can view my experiences on this webpage.",
};

const ExperienceLayout = ({ children }: { children: React.ReactNode }) => {
  return <section>{children}</section>;
};

export default ExperienceLayout;
