import { Header } from "@/components/Header";
import { SEO } from "@/SEO";

export default function Home() {
  return (
    <>
      <SEO title="Amazing Taiwan" shouldExcludeTitleSuffix />
      <Header />
    </>
  );
}
