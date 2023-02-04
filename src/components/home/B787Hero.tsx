import Image from 'next/image';
import Link from 'next/link';
import { Container, Button } from '../utils';
import * as Hero from '../../../public/img/Hero.jpg';

export const B787Hero = () => (
    <section id="hero">
        <Image src={Hero} priority className="absolute h-screen w-screen object-cover opacity-60" draggable={false} alt="Hero" />
        <Container className="mx-auto grid h-screen max-w-6xl place-items-center md:max-w-7xl md:justify-end">
            <div className="z-10">
                <Image src="/svg/B78XH.svg" className="object-contain" draggable={false} height={60} width={300} alt="B78XH.svg" />
                <h4 className="mt-5">
                    A refresh of the 787-10 for Microsoft Flight Simulator
                </h4>
            </div>
            <div className="grid-col z-10 grid justify-center gap-x-8 text-2xl md:grid-cols-2">
                <Button className="mt-5 h-16 w-48 bg-navy-light p-3 hover:bg-white hover:text-navy-dark">
                    <Link href="/downloads">
                        <p>Download</p>
                    </Link>
                </Button>
                <Button className="mt-5 h-16 w-48 border-2 border-white p-3 hover:bg-white hover:text-navy-dark">
                    <Link href="#features">Learn More</Link>
                </Button>
            </div>
        </Container>
    </section>
);
