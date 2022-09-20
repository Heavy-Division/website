import Image from 'next/image';
import Link from 'next/link';
import { Container, Button } from '../utils';

export const B787Hero = () => (
    <section id="hero">
        <Image src="/img/image4.jpg" objectFit="cover" layout="fill" className="opacity-60" draggable={false} alt="Hero Image" />
        <Container className="mx-auto grid h-screen max-w-6xl place-items-center md:max-w-7xl md:justify-end">
            <div className="z-10">
                <Image src="/svg/B78XH.svg" objectFit="contain" draggable={false} height={60} width={300} alt="B78XH.svg" />
                <h4 className="mt-5">
                    A refresh of the 787-10 for Microsoft Flight Simulator
                </h4>
            </div>
            <div className="grid-col z-10 grid justify-center gap-x-8 text-2xl md:grid-cols-2">
                <Button className="mt-5 h-16 w-full bg-blue-sky p-3 hover:bg-blue-tailwind">
                    <Link href="/downloads">Download</Link>
                </Button>
                <Button className="mt-5 h-16 w-48 border-4 border-blue-sky p-3 hover:bg-blue-sky">
                    <Link href="#features">Learn More</Link>
                </Button>
            </div>
        </Container>
    </section>
);
