"use client";

import DynamicIcon from "../DynamicIcon";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";

const HomeButton = () => {
  const router = useRouter();

  return (
    <Button
      size="icon"
      variant="secondary"
      onClick={() => router.replace("/")}
      className="fixed z-20 bottom-8 right-4"
    >
      <DynamicIcon name="home" className="h-5 w-5" />
    </Button>
  );
};
export default HomeButton;
