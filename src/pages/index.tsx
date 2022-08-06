import B787Hero from '../Components/home/B787Hero';
import { CustomLNAV, CustomFMGC, CustomPFD } from '../Components/home/Features';
import { Footer } from '../Components/utils/Footer';
import { ScrollToTopButton } from '../Components/utils/ScrollToTopButton';

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
