import Contact from "@/components/Contact";
import HeroSection from "@/components/HeroSection";
import Projects from "@/components/Projects";
import Services from "@/components/services";
import Image from "next/image";

export default function Home() {
  return (
    <div className="w-full overflow-hidden">
      <section className="sticky top-0 ">
        <HeroSection />
      </section>
      <section className="sticky top-0 ]  bg-[#041130]">
        <Services />
      </section>
      <section className="sticky top-0 ]">
        <Projects />
      </section>

      <section className="sticky top-0 ]">
        <Contact />
      </section>
    </div>
  );
}
