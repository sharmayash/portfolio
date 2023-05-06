import Link from "next/link";

const Experience: React.FC = () => {
  return (
    <div className="relative w-full min-h-screen overflow-hidden flex items-center justify-center flex-col bg-gradient-to-b from-background to-teal-900">
      <h1 className="text-9xl font-caveat">404</h1>
      <h5 className="text-xl mt-2 mb-8 font-caveat">Page under development</h5>

      <p className="text-base text-center">
        Click{" "}
        <Link href="/" className="text-primary">
          here
        </Link>{" "}
        to redirect to home.
      </p>
    </div>
  );
};

export default Experience;
