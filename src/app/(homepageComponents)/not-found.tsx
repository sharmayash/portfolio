// !Issue in next.js 13.4.0, custom 404 pages are not working with next/link.
// TODO: Move this file to parent app folder once it start working

import Link from "next/link";

export default function NotFound() {
  return (
    <div className="relative w-full min-h-screen overflow-hidden flex items-center justify-center flex-col bg-gradient-to-b from-background to-teal-900">
      <h1 className="text-9xl font-caveat">404</h1>
      <h5 className="text-xl mt-2 mb-8 font-caveat">Page Not Found</h5>

      <p className="text-base text-center">
        Click{" "}
        <Link href="/" className="text-primary">
          here
        </Link>{" "}
        to redirect to home.
      </p>
    </div>
  );
}
