import { Container } from '../utils';
import Image from 'next/image';

export const Features = () => {

    return (
        <section id="Features">
            <Container className="max-w-6xl md:max-w-full min-h-screen">
                <div className="flex justify-center py-12">
                <Image src="/svg/LNAV.svg" height={160} width={790} draggable={false} />
                </div>
                <div className="flex justify-between gap-12">
                    <p className="w-72 md:w-96 text-2xl md:text-3xl px-10 md:px-24">LNAV and VNAV enhancements to tackle any route.</p>
                    <Image src="/svg/Hold.svg" height={400} width={265} draggable={false} objectFit={"contain"} className="px-24"/>
                </div>
                <div className="flex justify-center">
                    <Image src="/svg/VNAV.svg" height={140} width={650} draggable={false} />
                </div>
            </Container>
        </section>
    )
};

