import Header from '@/components/common/Header/Header';
import SectionOffer from '@/components/sections/SectionOffer/SectionOffer';
import SectionBenefits from '@/components/sections/SectionBenefits/SectionBenefits';
import SectionAbout from '@/components/sections/SectionAbout/SectionAbout';
import SectionEquipment from '@/components/sections/SectionEquipment/SectionEquipment';
import SectionExample from '@/components/sections/SectionExample/SectionExample';
import SectionAdditional from '@/components/sections/SectionAdditional/SectionAdditional';
import SectionAction from '@/components/sections/SectionAction/SectionAction';
import SectionSteps from '@/components/sections/SectionSteps/SectionSteps';
import SectionNumbers from '@/components/sections/SectionNumbers/SectionNumbers';
import Footer from '@/components/common/Footer/Footer';

export default function Home() {
  return (
  <>
    <Header />

    <main>
      <SectionOffer />
      <SectionBenefits />
      <SectionAbout />
      <SectionSteps />
      <SectionEquipment />
      <SectionExample />
      <SectionNumbers />
      <SectionAdditional />
      <SectionAction />
    </main>

    <Footer />
  </>
  );
}
