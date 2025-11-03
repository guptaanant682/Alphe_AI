import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import TrustSection from '@/components/TrustSection';
import ProblemsSection from '@/components/ProblemsSection';
import SolutionsSection from '@/components/SolutionsSection';
import WhatWeBuildSection from '@/components/WhatWeBuildSection';
import TeamsSection from '@/components/TeamsSection';
import ContactForm from '@/components/ContactForm';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="relative w-full min-w-full overflow-x-hidden flex flex-col items-center">
      <Navbar />
      <Hero />
      <TrustSection />
      <ProblemsSection />
      <SolutionsSection />
      <WhatWeBuildSection />
      <TeamsSection />
      <ContactForm />
      <Footer />
    </div>
  );
}
