import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import Demo from "@/components/Demo";
import WhyWorkoutEngine from "@/components/WhyWorkoutEngine";
import Pricing from "@/components/Pricing";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-white dark:bg-black text-gray-900 dark:text-white">
      <Navbar />
      <Hero />
      <HowItWorks />
      <Demo />
      <WhyWorkoutEngine />
      <Pricing />
      <FinalCTA />
      <Footer />
    </main>
  );
}
