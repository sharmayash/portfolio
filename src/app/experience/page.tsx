import { experiences } from "@/utils/constants";
import CompanyRow from "./components/CompanyRow";
import HomeButton from "@/components/common/HomeButton";
import ScrollLink from "@/components/common/ScrollLink";
import ScrollDownButton from "@/components/common/ScrollDownButton";
import ScrollProgressBar from "@/components/common/ScrollProgressBar";

const Experience: React.FC = () => {
  return (
    <div className="relative">
      <ScrollProgressBar />
      <div id="experience-page">
        <HomeButton />
        <div
          id="page-header"
          className="p-4 overflow-hidden w-full h-screen relative flex items-center justify-center antialiased dark:bg-dot-white/[0.4] bg-dot-black/[0.4]"
        >
          <div className="absolute pointer-events-none inset-0 dark:bg-background bg-foreground dark:[mask-image:radial-gradient(ellipse_at_center,transparent_10%,black_70%)] [mask-image:radial-gradient(ellipse_at_center,transparent_100%,black_70%)]" />
          <h1 className="text-5xl md:text-6xl font-caveat font-semibold text-center relative z-10">
            Experience and Projects
          </h1>
          <ScrollLink
            href="/experience#reelo"
            className="left-1/2 bottom-8 -translate-x-1/2 absolute z-10"
          >
            <ScrollDownButton />
          </ScrollLink>
        </div>
        <div className="mx-auto max-w-screen-xl">
          <div id="companies-row" className="p-4">
            {experiences?.map((card) => (
              <CompanyRow key={card.id} card={card} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
