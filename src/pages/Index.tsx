import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { Features } from "@/components/Features";
import { TechStack } from "@/components/TechStack";
import { Dashboard } from "@/components/Dashboard";
import { CTA } from "@/components/CTA";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <Hero />
        <section id="features">
          <Features />
        </section>
        <section id="tech-stack">
          <TechStack />
        </section>
        <section id="dashboard">
          <Dashboard />
        </section>
        <CTA />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
