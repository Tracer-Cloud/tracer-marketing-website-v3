import Approach from "@/components/RoutePlatform/approach";
import Cta from "@/components/RoutePlatform/cta";
import GainVisibility from "@/components/RoutePlatform/gain-visibility";
import Hero from "@/components/RoutePlatform/hero";
import Implementation from "@/components/RoutePlatform/implementation";
import Monitoring from "@/components/RoutePlatform/monitoring";
import YourPartner from "@/components/RoutePlatform/your-partner";

export default function PlatformPage() {
  return (
    <main className="w-full h-screen">
      <Hero />
      <Approach />
      <Monitoring />
      <GainVisibility />
      <YourPartner />
      <Implementation />
      <Cta />
    </main>
  );
}
