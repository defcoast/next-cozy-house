import Header from '@/components/common/Header/Header';
import SectionOffer from '@/components/sections/SectionOffer/SectionOffer';
import SectionBenefits from '@/components/sections/SectionBenefits/SectionBenefits';
import SectionAbout from '@/components/sections/SectionAbout/SectionAbout';
import SectionExample from '@/components/sections/SectionExample/SectionExample';
import SectionAdditional from '@/components/sections/SectionAdditional/SectionAdditional';
import SectionAction from '@/components/sections/SectionAction/SectionAction';
import SectionSteps from '@/components/sections/SectionSteps/SectionSteps';
import SectionNumbers from '@/components/sections/SectionNumbers/SectionNumbers';
import Footer from '@/components/common/Footer/Footer';
import SectionReviews from '@/components/sections/SectionReviews/SectionReviews';
import SectionMiniForm from '@/components/sections/SectionMiniForm/SectionMiniForm';
import SectionAboutMe from '@/components/sections/SectionAboutMe/SectionAboutMe';
import SectionQuiz from '@/components/sections/SectionQuiz/SectionQuiz';
import SectionFaq from '@/components/sections/SectionFaq/SectionFaq';
import CostCalculator from '@/components/common/CostCalculator/CostCalculator';

export default function Home() {
  return (
  <>
    <Header />

    <main>
      <SectionOffer />
      <SectionBenefits />
      <SectionQuiz />
      <SectionAbout />
      <CostCalculator />
      <SectionSteps />
      <SectionMiniForm />
      <SectionAboutMe />
      <SectionReviews />
      <SectionExample />
      <SectionNumbers />
      <SectionAdditional />
      <SectionFaq />
      <SectionAction />
    </main>

    <Footer />
  </>
  );
}
