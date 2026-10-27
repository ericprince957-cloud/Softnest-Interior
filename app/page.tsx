import PreviewBanner from "@/components/PreviewBanner";
import Hero from "@/components/Hero";
import FabricCatalog from "@/components/FabricCatalog";
import MeasurementGuide from "@/components/MeasurementGuide";
import Footer from "@/components/Footer";
import type { Fabric } from "@/components/types";
import fabrics from "@/data/fabrics.json";

export default function Home() {
  return (
    <>
      <PreviewBanner />
      <Hero />
      <main>
        <FabricCatalog fabrics={fabrics as Fabric[]} />
        <MeasurementGuide />
      </main>
      <Footer />
    </>
  );
}
