import SmoothScroll from "@/components/smooth-scroll";
import Cursor from "@/components/cursor";
import Preloader from "@/components/preloader";
import Navbar from "@/components/sections/navbar";
import Hero from "@/components/sections/hero";
import BrandStrip from "@/components/sections/brand-strip";
import Intro from "@/components/sections/intro";
import Categories from "@/components/sections/categories";
import Showcase from "@/components/sections/showcase";
import Featured from "@/components/sections/featured";
import Why from "@/components/sections/why";
import Trust from "@/components/sections/trust";
import Story from "@/components/sections/story";
import Contact from "@/components/sections/contact";
import Footer from "@/components/sections/footer";

export default function Home() {
  return (
    <>
      <Preloader />
      <SmoothScroll />
      <Cursor />
      <Navbar />
      <main className="flex-1">
        <Hero />
        <BrandStrip />
        <Intro />
        <Categories />
        <Showcase />
        <Featured />
        <Why />
        <Trust />
        <Story />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
