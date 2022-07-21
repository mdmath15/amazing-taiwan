import { Header, Hero } from "@/components";
import { Destinations } from "@/components/Destinations";
import { SEO } from "@/SEO";

export default function Home() {
  return (
    <>
      <SEO title="Amazing Taiwan" shouldExcludeTitleSuffix />
      <Header />
      <Hero />
      <Destinations />
    </>
  );
}
