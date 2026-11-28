import HeroSection from "@/components/landing page/hero";
import HomeNav from "@/components/landing page/nav";
import FeaturesSection from "@/components/landing page/features";

export default function Home() {
  return (
    <div>
      <div className="flex min-h-screen flex-col">
        <HomeNav />
        <HeroSection />
      </div>
      <FeaturesSection />
    </div>
  );
}
