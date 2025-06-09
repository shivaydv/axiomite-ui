"use client";

import Logo from "@/components/Logo";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html>
      <body>
        <div className="flex-1 justify-center items-center flex flex-col">
          <Logo className="text-4xl" />
          <p className="my-4 ">
            Something went wrong! <br />
            {error.message || "An unexpected error occurred."}
          </p>
          <button className="primary-gradient px-3 font-bold capitalize tracking-wide text-fd-background py-1 rounded-md" onClick={() => reset()}>Try again</button>
        </div>
      </body>
    </html>
  );
}
