
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import CategoriesSection from "@/components/CategoriesSection";
import AboutSection from "@/components/AboutSection";
import TeamSection from "@/components/TeamSection";
import PartnersSection from "@/components/PartnersSection";
import StoreSection from "@/components/StoreSection";
import NewsletterSection from "@/components/NewsletterSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-white font-inter">
      <Header />
      <HeroSection />
      <CategoriesSection />
      <AboutSection />
      <TeamSection />
      <PartnersSection />
      <StoreSection />
      <NewsletterSection />
      <Footer />
    </div>
  );
};

export default Index;
