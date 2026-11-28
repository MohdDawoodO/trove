import HeroSection from "@/components/landing page/hero";
import HomeNav from "@/components/landing page/nav";
import FeaturesSection from "@/components/landing page/features";
import { auth } from "@/server/auth";
import SessionRedirect from "@/components/session-redirect";

export const instant = false;

export default async function Home() {
  const session = await auth();

  return (
    <div>
      <div className="flex min-h-screen flex-col">
        <HomeNav />
        <HeroSection />
      </div>
      <FeaturesSection />
      <SessionRedirect session={session} />
    </div>
  );
}
