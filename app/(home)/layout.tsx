import type { ReactNode } from "react";
import { HomeLayout } from "fumadocs-ui/layouts/home";
import { baseOptions } from "@/app/layout.config";
import FooterSection from "@/components/landingPage/Footer";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <HomeLayout {...baseOptions} 
    
    className="  ">
      {children}
      <FooterSection />
    </HomeLayout>
  );
}
