import B787Hero from '../components/home/B787Hero';
import { CustomLNAV, CustomFMGC, CustomPFD } from '../components/home/Features';
import { Footer } from '../components/utils/Footer';
import { ScrollToTopButton } from '../components/utils/ScrollToTopButton';

const Index = () => (
  <>
      <B787Hero />
      <ScrollToTopButton />
      <CustomLNAV />
      <CustomFMGC />
      <CustomPFD />
      <Footer />
  </>
);

export default Index;
