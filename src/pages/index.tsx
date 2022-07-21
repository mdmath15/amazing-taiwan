import { Header, Hero, Destinations, AboutUs } from "@/components";
import { SEO } from "@/SEO";

export default function Home() {
  return (
    <>
      <SEO title="Amazing Taiwan" shouldExcludeTitleSuffix />
      <Header />
      <Hero />
      <Destinations />
      <AboutUs />
    </>
  );
}
