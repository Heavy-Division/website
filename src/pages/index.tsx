import B787Hero from '../Components/B787Hero';
import { CustomLNAV, CustomFMGC, CustomPFD } from '../Components/Features';
import { Footer } from '../Components/Footer';

const Index = () => (
    <>
      <B787Hero />
        <CustomLNAV />
        <CustomFMGC />
        <CustomPFD />
        <Footer />
    </>
);

export default Index;
