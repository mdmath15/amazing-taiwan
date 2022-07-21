import { Header, Hero, Destinations, AboutUs, Reviews } from "@/components";
import { SEO } from "@/SEO";

export default function Home() {
  return (
    <>
      <SEO title="Amazing Taiwan" shouldExcludeTitleSuffix />
      <Header />
      <Hero />
      <Destinations />
      <AboutUs />
      <Reviews />
    </>
  );
}
