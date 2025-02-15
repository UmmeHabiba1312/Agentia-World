import AIAgentsSection from "@/components/ai-agents";
import Header from "@/components/header";
import HeroSection from "@/components/home";
import AITechnologySection from "@/components/ai-technology";
import PricingSection from "@/components/pricing";
import ContactPage from "@/components/contact";
import FuturisticFooter from "@/components/footer";

export default function Home() {
  return (
    <main>
      
        <Header/>
        <HeroSection/>
        <AIAgentsSection/>
      <AITechnologySection/>
      <PricingSection/>
      <ContactPage/>
      <FuturisticFooter/>
    </main>
  );
}
