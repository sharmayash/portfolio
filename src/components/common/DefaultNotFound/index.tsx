import Link from "next/link";

interface DefaultNotFoundProps {
  status?: string;
  message?: string;
}

const defaultProps: DefaultNotFoundProps = {
  status: "404",
  message: "Page not found",
};

const DefaultNotFound: React.FC<DefaultNotFoundProps> = ({
  status,
  message,
}) => {
  return (
    <div className="relative text-white w-full min-h-screen overflow-hidden flex items-center justify-center flex-col bg-gradient-to-b from-teal-950 to-teal-800">
      <h1 className="text-9xl font-caveat">{status}</h1>
      <h5 className="text-xl mt-2 mb-8 font-caveat">{message}</h5>

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

DefaultNotFound.defaultProps = defaultProps;

export default DefaultNotFound;
