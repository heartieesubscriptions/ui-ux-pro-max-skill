import { useRef } from 'react';
import Hero from '../../components/Hero/Hero';

import ProductShowcase from '../../components/ProductShowcase/ProductShowcase';
import ManufacturingStrip from '../../components/ManufacturingStrip/ManufacturingStrip';
import TrustBand from '../../components/TrustBand/TrustBand';
import CTA from '../../components/CTA/CTA';

export default function Home() {
  const heroContainerRef = useRef(null);

  return (
    <>
      <div ref={heroContainerRef} style={{ height: '450vh', position: 'relative' }}>
        <Hero containerRef={heroContainerRef} />
      </div>

      <ManufacturingStrip />
      <TrustBand />
      <CTA title="Upgrade to Safer Smarter Wiring" />
    </>
  );
}
