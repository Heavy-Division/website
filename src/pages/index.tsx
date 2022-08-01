import B787Hero from '../Components/B787Hero';
import { CustomLNAV, CustomFMGC, CustomPFD } from '../Components/Features';
import { Footer } from '../Components/Footer';
import { ScrollToTopButton } from '../Components/ScrollToTopButton';

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
