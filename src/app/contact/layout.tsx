import sharedMetaData from "../shared-metadata.js";

export const metadata = {
  ...sharedMetaData,
  title: "Contact Details",
};

const ExperienceLayout = ({ children }: { children: React.ReactNode }) => {
  return <section>{children}</section>;
};

export default ExperienceLayout;
