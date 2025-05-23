import AboutTracer from "@/components/RouteHome/AboutTracer";
import CoreChallengeSection from "@/components/RouteHome/CoreChallenges";
import DataPrivacyNotice from "@/components/RouteHome/DataPrivacyNotice";
import DigitalDiscoverySection from "@/components/RouteHome/DigitalDiscoverySection";
import Faq from "@/components/RouteHome/Faq";
import HeroSection from "@/components/RouteHome/Hero";
import HowTracerWorks from "@/components/RouteHome/HowTracerWorks";
import InfrastructureReview from "@/components/RouteHome/InfrastructureReview";
import ModernMonitoringPlatform from "@/components/RouteHome/ModernMonitoringPlatform";
import PersonalizedDemoHome from "@/components/RouteHome/PersonalizedDemoHome";
import UnifiedPlatformOverview from "@/components/RouteHome/UnifiedPlatformOverview";
import WhyMonitoringSection from "@/components/RouteHome/WhyMonitoringSection";

// Shared
import PreLoaderProgress from "@/components/shared/PreLoader"

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
