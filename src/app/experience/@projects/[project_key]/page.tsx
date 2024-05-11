"use client";

import {
  Drawer,
  DrawerTitle,
  DrawerHeader,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
} from "@/components/ui/drawer";
import { Button } from "@/components/ui/button";
import { experiences } from "@/utils/constants";
import { useRouter, usePathname } from "next/navigation";

const getProjectDetails = (projectKey: string) => {
  const projectList = experiences?.map((company) => company?.projects)?.flat();
  return projectList?.find((project) => project?.id === projectKey);
};

const ProjectPage = ({
  params: { project_key: projectKey },
}: {
  params: { project_key: string };
}) => {
  const router = useRouter();
  const pathname = usePathname();

  const projectDetails = getProjectDetails(projectKey);
  const isProjectDrawerOpen = pathname?.includes(projectKey);

  const handleClose = () => router.replace("/experience", { scroll: false });
  const handleOpenChange = (isOpen: Boolean) => (isOpen ? {} : handleClose());

  return (
    <Drawer open={isProjectDrawerOpen} onOpenChange={handleOpenChange}>
      <DrawerContent>
        <div className="mx-auto w-full max-w-5xl">
          <DrawerHeader>
            <DrawerTitle>
              {projectDetails?.project_name_1} {projectDetails?.project_name_2}
            </DrawerTitle>
            <DrawerDescription>
              {projectDetails?.project_description}
            </DrawerDescription>
            {projectDetails?.live_link ? (
              <a
                target="_blank"
                rel="noopener noreferrer"
                href={projectDetails?.live_link}
                className="mt-2 text-primary font-montserrat font-medium"
              >
                Live link
              </a>
            ) : (
              <></>
            )}
          </DrawerHeader>
          <div className="p-4 px-8 pb-0">
            <ul className="list-disc">
              {projectDetails?.project_points?.map((point, i) => (
                <li key={i} className="text-sm">
                  {point}
                </li>
              ))}
            </ul>
          </div>
          <DrawerFooter>
            <Button onClick={handleClose} variant="default">
              Close
            </Button>
          </DrawerFooter>
        </div>
      </DrawerContent>
    </Drawer>
  );
};
export default ProjectPage;
