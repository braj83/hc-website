import CTABanner from "@/components/cta-banner";
import FAQ from "@/components/faq";
import Features from "@/components/features";
import Features4 from "@/components/features-04/features-04";
import Footer from "@/components/footer";
import Hero from "@/components/hero/hero";
import { BackgroundPattern } from "@/components/hero/background-pattern";
import { Navbar } from "@/components/navbar";
import Testimonials from "@/components/testimonials";
import Contact from "@/components/contact-02/contact-02";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="pt-16 xs:pt-20 sm:pt-24">
        <Hero />
        <BackgroundPattern />
        <Features />
        <Features4 />
        <FAQ />
        <Contact />
        <Testimonials />
        <CTABanner />
        <Footer />
      </main>
    </>
  );
}
