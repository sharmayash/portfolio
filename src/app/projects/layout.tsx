import sharedMetaData from "../shared-metadata";

export const metadata = {
  ...sharedMetaData,
  title: "Projects",
};

const ExperienceLayout = ({ children }: { children: React.ReactNode }) => {
  return <section>{children}</section>;
};

export default ExperienceLayout;
