import AboutTracer from "@/components/RouteHome/aboutTracer";
import CoreChallengeSection from "@/components/RouteHome/core-challenges";
import DataPrivacyNotice from "@/components/RouteHome/data-privacy-notice";
import DigitalDiscoverySection from "@/components/RouteHome/digitalDiscoverySection";
import Faq from "@/components/RouteHome/faq";
import HeroSection from "@/components/RouteHome/hero";
import HowTracerWorks from "@/components/RouteHome/howTracerWorks";
import InfrastructureReview from "@/components/RouteHome/infrastructure-review";
import ModernMonitoringPlatform from "@/components/RouteHome/modernMonitoringPlatform";
import PersonalizedDemoHome from "@/components/RouteHome/personalized-demo-home";
import UnifiedPlatformOverview from "@/components/RouteHome/unified-platform-overview";
import WhyMonitoringSection from "@/components/RouteHome/whyMonitoringSection";

// Shared
import PreLoaderProgress from "@/components/shared/pre-loader"

const HomePage = () => {
  return (
    <>
      <PreLoaderProgress />
      <HeroSection />
      <DigitalDiscoverySection />
      <CoreChallengeSection />
      <WhyMonitoringSection />
      <ModernMonitoringPlatform />
      <AboutTracer />
      <HowTracerWorks />
      <UnifiedPlatformOverview />
      <InfrastructureReview />
      <Faq />
      <DataPrivacyNotice />
      <PersonalizedDemoHome />
    </>
  );
};

export default HomePage;
