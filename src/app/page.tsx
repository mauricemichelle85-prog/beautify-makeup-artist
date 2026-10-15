import { TopBar } from "@/components/site/TopBar";
import { Header } from "@/components/site/Header";
import { Hero } from "@/components/site/Hero";
import { WelcomeAbout } from "@/components/site/WelcomeAbout";
import { Specials } from "@/components/site/Specials";
import { WhyUs } from "@/components/site/WhyUs";
import { Services } from "@/components/site/Services";
import { Testimonials } from "@/components/site/Testimonials";
import { Partners } from "@/components/site/Partners";
import { Blog } from "@/components/site/Blog";
import { Newsletter } from "@/components/site/Newsletter";
import { Footer } from "@/components/site/Footer";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-white text-ink">
      <TopBar />
      <Header />
      <main className="flex-1">
        <Hero />
        <WelcomeAbout />
        <Specials />
        <WhyUs />
        <Services />
        <Testimonials />
        <Partners />
        <Blog />
        <Newsletter />
      </main>
      <Footer />
    </div>
  );
}
