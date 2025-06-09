import { DocsLayout } from "fumadocs-ui/layouts/notebook";
import type { ReactNode } from "react";
import { baseOptions } from "@/app/layout.config";
import { source } from "@/lib/source";
import Logo from "@/components/Logo";
import ThemeToggle from "@/components/ThemeToggle";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <>
      <div className="absolute inset-0 -z-10 mx-0 max-w-none overflow-hidden max-md:hidden">
        <div className="absolute left-1/2 top-0 ml-[-30rem] h-[27rem] w-[85rem] dark:[mask-image:linear-gradient(white,transparent)]">
          <div className="absolute inset-0 bg-gradient-to-r from-[#FF6B4A] to-[#FF6B4C] opacity-40 [mask-image:radial-gradient(farthest-side_at_top,white,transparent)] dark:from-[#FF6B4A]/30 dark:to-[#FF6B4A]/30 dark:opacity-100">
            <svg
              aria-hidden="true"
              className="dark:fill-white/2.5 absolute inset-x-0 inset-y-[-50%] h-[200%] w-full skew-y-[-18deg] fill-black/40 stroke-black/50 mix-blend-overlay dark:stroke-white/5"
            >
              <defs>
                <pattern
                  id=":r26:"
                  width="72"
                  height="56"
                  patternUnits="userSpaceOnUse"
                  x="-12"
                  y="4"
                >
                  <path d="M.5 56V.5H72" fill="none"></path>
                </pattern>
              </defs>
              <rect
                width="100%"
                height="100%"
                strokeWidth="0"
                fill="url(#:r26:)"
              ></rect>
              <svg x="-12" y="4" className="overflow-visible">
                <rect
                  strokeWidth="0"
                  width="73"
                  height="57"
                  x="288"
                  y="168"
                ></rect>
                <rect
                  strokeWidth="0"
                  width="73"
                  height="57"
                  x="144"
                  y="56"
                ></rect>
                <rect
                  strokeWidth="0"
                  width="73"
                  height="57"
                  x="504"
                  y="168"
                ></rect>
                <rect
                  strokeWidth="0"
                  width="73"
                  height="57"
                  x="720"
                  y="336"
                ></rect>
              </svg>
            </svg>
          </div>
          <svg
            viewBox="0 0 1113 440"
            aria-hidden="true"
            className="absolute left-1/2 top-0 ml-[-19rem] w-[69.5625rem] fill-white blur-[26px] dark:hidden"
          >
            <path d="M.016 439.5s-9.5-300 434-300S882.516 20 882.516 20V0h230.004v439.5H.016Z"></path>
          </svg>
        </div>
      </div>
      <DocsLayout
        {...baseOptions}
        tree={source.pageTree}
        searchToggle={{ enabled: true }}
        themeSwitch={{
          enabled: true,
          component: (
            <div className="max-md:hidden lg:hidden">
              <ThemeToggle />
            </div>
          ),
          mode: "light-dark",
        }}
        nav={{
          ...baseOptions.nav,
          title: <Logo  />,
          mode: "top",
        }}
        sidebar={{
          defaultOpenLevel:2,
          footer: (
            <div className="flex items-center lg:justify-center justify-end   w-full">
              {/* <Logo className="hidden md:block" /> */}
              <div className="text-xs font-semibold text-fd-muted-foreground tracking-wide">
                Built with ❤️ by{" "}
                <a href="https://x.com/Shivay1256" className="underline font-semibold" >
                  Shiva
                </a>
              </div>
            </div>
          ),

          children: <h1 className="text-2xl font-bold">Documentation</h1>,
          banner: (
            <div className="md:hidden items-center  justify-between flex border-b pb-4 ">
              <Logo />
              <ThemeToggle />
            </div>
          ),
          collapsible: false,
        }}
      >
        {children}
      </DocsLayout>
    </>
  );
}
