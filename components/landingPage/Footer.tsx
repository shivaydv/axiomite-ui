"use client";
import Logo from "@/components/Logo";
import Link from "next/link";
import { motion, useInView } from "motion/react";
import { useRef } from "react";

const links = [
  {
    group: "Menu",
    items: [
      {
        title: "Components",
        href: "docs/components",
      },
      {
        title: "Showcase",
        href: "/showcase",
      },
      {
        title: "Sponsors",
        href: "/sponsors",
      },
    ],
  },
  {
    group: "Social",
    items: [
      {
        title: "Github",
        href: "https://github.com/shivaydv",
      },
      {
        title: "Twitter",
        href: "https://x.com/Shivay1256",
      },
      {
        title: "Youtube",
        href: "https://www.youtube.com/@shivay1256",
      },
    ],
  },
  {
    group: "Other Porducts",
    items: [
      {
        title: "Dev Axioms",
        href: "https://devaxioms.vercel.app/",
      },
    ],
  },
];

export default function Footer() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <footer className="pt-16">
      <motion.div
        ref={ref}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={{
          hidden: {},
          visible: {
            transition: {
              staggerChildren: 0.18,
            },
          },
        }}
        className="mx-auto max-w-fd-container border-t py-8"
      >
        <div className="grid gap-12 md:grid-cols-5 px-6">
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 40 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
            }}
            className="md:col-span-2"
          >
            <Link href="/" aria-label="go home" className="block size-fit">
              <Logo />
            </Link>
          </motion.div>

          <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 md:col-span-3 ">
            {links.map((link, index) => (
              <motion.div
                key={index}
                variants={{
                  hidden: { opacity: 0, y: 40 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
                }}
                className="space-y-4 text-sm"
              >
                <span className="block font-semibold">{link.group}</span>
                {link.items.map((item, idx) => (
                  <Link
                    key={idx}
                    href={item.href}
                    className="text-fd-muted-foreground hover:text-fd-primary block duration-150"
                  >
                    <span>{item.title}</span>
                  </Link>
                ))}
              </motion.div>
            ))}
          </div>
        </div>
        <motion.span
          variants={{
            hidden: { opacity: 0, y: 40 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
          }}
          className="mt-12 flex items-center justify-center border-t pt-6 text-sm text-fd-muted-foreground [word-spacing:0.1rem] tracking-wide"
        >
          Built with ❤️ by{" "}
          <a
            href="https://x.com/Shivay1256"
            className="underline font-semibold ml-1"
          >
            Shiva
          </a>
        </motion.span>
      </motion.div>
    </footer>
  );
}
