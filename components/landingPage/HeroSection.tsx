"use client";

import React from "react";
import { motion } from "motion/react";
import { ArrowUpRight, ChevronRight } from "lucide-react";
import Link from "next/link";
import { FaGithub } from "react-icons/fa6";

export default function HeroSection() {
  return (
    <div className="relative w-full overflow-hidden bg-fd-background">
      {/* Background gradient */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/10 via-fd-background to-fd-background"></div>
        <div className="absolute left-1/2 top-0 -z-10 h-[1000px] w-[1000px] -translate-x-1/2 rounded-full md:bg-fd-primary/5 blur-3xl"></div>
      </div>
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8882_1px,transparent_1px),linear-gradient(to_bottom,#8882_1px,transparent_1px)] bg-[size:16px_16px] opacity-15"></div>

      <div className="container relative z-10 mx-auto px-4 py-24 sm:px-6 lg:px-8 lg:py-32">
        <div className="mx-auto max-w-5xl">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mx-auto mb-6 flex justify-center"
          >
            <div className=" flex items-center justify-center text-fd-muted-foreground rounded-full border border-fd-border bg-fd-background/80 px-2 py-1 text-sm backdrop-blur-sm">
              Open Source UI Library
              <ChevronRight className="ml-1 h-4 w-4 text-fd-muted-foreground" />
            </div>
          </motion.div>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-balance font-semibold bg-gradient-to-tl from-fd-primary/10 via-fd-foreground/85 to-fd-foreground/100 bg-clip-text text-center text-4xl tracking-tighter text-transparent sm:text-5xl md:text-6xl lg:text-7xl"
          >
            Code Less. Build More.
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mx-auto mt-6 max-w-2xl text-center text-lg text-fd-muted-foreground"
          >
            A modern UI component library designed to help developers create
            stunning web applications with minimal effort. Fully customizable,
            responsive, and accessible.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
          >
            <Link
              href="/docs/components"
              className="inline-flex w-full md:max-w-sm items-center justify-center border border-fd-primary px-6 py-3 text-sm font-semibold text-fd-primary-foreground bg-fd-primary h-10 md:h-12 md:w-fit rounded-full hover:bg-fd-background hover:text-fd-primary transition-all ease-in-out focus:outline-none "
            >
              Browse Components
              <ArrowUpRight className="ml-2 text-xl" />
            </Link>
            <Link
              href="https://github.com/shivaydv/axiomite-ui"
              className="inline-flex w-full md:max-w-sm items-center justify-center px-6 py-3 text-sm font-semibold text-fd-foreground bg-fd-background border border-fd-foreground h-10 md:h-12 md:w-fit rounded-full hover:bg-fd-foreground hover:text-fd-background  transition-all focus:outline-none ease-in-out "
            >
              Star on Github
              <FaGithub className="ml-2 text-xl" />
            </Link>
          </motion.div>

          {/* Feature Image */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              delay: 0.5,
              type: "spring",
              stiffness: 50,
            }}
            className="relative mx-auto mt-16 max-w-4xl"
          >
            <div className="overflow-hidden rounded-xl border border-fd-border/40 bg-background/50 shadow-xl backdrop-blur-sm">
              {/* <div className="flex h-10 items-center border-b border-fd-border/40 bg-fd-muted/50 px-4">
                <div className="flex space-x-2">
                  <div className="h-3 w-3 rounded-full bg-red-500"></div>
                  <div className="h-3 w-3 rounded-full bg-yellow-500"></div>
                  <div className="h-3 w-3 rounded-full bg-green-500"></div>
                </div>
                <div className="mx-auto flex items-center rounded-md bg-fd-background/50 px-3 py-1 text-xs text-fd-muted-foreground">
                  https://axiomite.vercel.app
                </div>
              </div> */}
              <div className="relative">
                <img
                  src="https://i.postimg.cc/0yk8Vz7t/dashboard.webp"
                  alt="Dashboard Preview"
                  className="w-full"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-fd-background to-transparent opacity-0"></div>
              </div>
            </div>

            {/* Floating elements for visual interest */}
            <div className="absolute -right-6 -top-6 h-12 w-12 rounded-lg border border-border/40 bg-fd-background/80 p-3 shadow-lg backdrop-blur-md  ">
              <div className="h-full w-full rounded-md bg-fd-primary/20 "></div>
            </div>
            <div className="absolute -bottom-4 -left-4 h-8 w-8 rounded-full border border-border/40 bg-fd-background/80 shadow-lg backdrop-blur-md "></div>
            <div className="absolute -bottom-6 right-12 h-10 w-10 rounded-lg border border-border/40  bg-fd-background/80 p-2 shadow-lg backdrop-blur-md">
              <div className="h-full w-full rounded-md bg-green-500/20"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
