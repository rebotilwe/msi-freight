import React from 'react';
import SideNav from '../components/msi/SideNav';
import HeroSection from '../components/msi/HeroSection';
import AboutSection from '../components/msi/AboutSection';
import ServicesSection from '../components/msi/ServicesSection';
import FleetSection from '../components/msi/FleetSection';
import ValuesSection from '../components/msi/ValuesSection';
import ContactSection from '../components/msi/ContactSection';
import Footer from '../components/msi/Footer';

const IMAGES = {
  hero: 'https://media.base44.com/images/public/69ddf7077879d1ccdcdfd7c0/a725e8a17_truck1.jpeg',
  services: 'https://media.base44.com/images/public/69ddf7077879d1ccdcdfd7c0/12c57a675_generated_49f1c95a.png',
  warehouse: 'https://media.base44.com/images/public/69ddf7077879d1ccdcdfd7c0/02aff465e_generated_d4e7c55c.png',
  transport: 'https://media.base44.com/images/public/69ddf7077879d1ccdcdfd7c0/52b6004a1_truck3.jpg',
  contact: 'https://media.base44.com/images/public/69ddf7077879d1ccdcdfd7c0/4c894ec7a_truck4.jpg',
  shipSpares: 'https://media.base44.com/images/public/69ddf7077879d1ccdcdfd7c0/f479bbf7e_generated_2af6c031.png',
  fleet: 'https://media.base44.com/images/public/69ddf7077879d1ccdcdfd7c0/875358b8a_truck5.jpg',
  truck2: 'https://media.base44.com/images/public/69ddf7077879d1ccdcdfd7c0/e11c17935_truck2.jpg',
  logo: 'https://media.base44.com/images/public/69ddf7077879d1ccdcdfd7c0/17e92797d_generated_image.png',
};

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <SideNav />
      
      <main className="lg:ml-20">
        <HeroSection heroImage={IMAGES.hero} />
        <AboutSection />
        <ServicesSection
          transportImg={IMAGES.transport}
          warehouseImg={IMAGES.warehouse}
          shipImg={IMAGES.shipSpares}
        />
        <FleetSection fleetImage={IMAGES.fleet} />
        <ValuesSection servicesImage={IMAGES.services} />
        <ContactSection contactImage={IMAGES.contact} />
        <Footer />
      </main>
    </div>
  );
}