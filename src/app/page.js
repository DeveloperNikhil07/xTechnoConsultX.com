import React from 'react'
import Banner from './Component/HomeSections/Banner';
import WhoWeAre from './Component/HomeSections/WhoWeAre';
import OurExperienceLayout from './Component/HomeSections/OurExperienceLayout';
import PortfolioLayout from './Component/HomeSections/PortfolioLayout';
export default function Home() {
  return (
    <>
      <Banner />
      <WhoWeAre />
      <OurExperienceLayout />
      <PortfolioLayout />
    </>
  );
}
