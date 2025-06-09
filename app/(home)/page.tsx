import FAQSection from "@/components/landingPage/FAQSection";
import Features from "@/components/landingPage/FeatureSection";
import FooterSection from "@/components/landingPage/Footer";
import GradientHero from "@/components/landingPage/HeroSection";
import QuoteSection from "@/components/landingPage/QuoteSection";
import { TextScroll } from "@/components/landingPage/TextScrollSection";

export default function HomePage() {
  return (
    <main className=" ">
      <GradientHero />
      <TextScroll
        text="Dark Mode Ready • Easy to Use • Customizable Components • Minimal Design • Built with Tailwind CSS • TypeScript Support • Blazing Fast UI • Copy-Paste Friendly • Open Source • Designed For Developer • Lightweight and Scalable • "
        className="px-6 text-center text-2xl font-bold tracking-tight md:text-4xl md:leading-[5rem] text-fd-foreground/30 "
        default_velocity={1}
      />
      <Features />
      <QuoteSection />
      <FAQSection />

    </main>
  );
}
