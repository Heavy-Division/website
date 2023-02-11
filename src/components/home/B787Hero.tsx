import Image from 'next/image';
import Link from 'next/link';
import { Container, Button } from '../utils';
import * as Hero from '../../../public/img/Hero.jpg';

export const B787Hero = () => (
    <section id="hero">
        <Image src={Hero} priority className="-z-1 absolute h-3/4 w-screen object-cover opacity-60" draggable={false} alt="Hero" />
        <Container className="mx-auto min-h-screen max-w-6xl">
            <div className="absolute bottom-12">
                <div className="z-10 md:max-w-7xl py-2 sm:flex gap-x-8">
                    <div className="grid grid-col gap-y-4">
                        <Image src="/svg/B78XH.svg" className="object-contain" draggable={false} height={60} width={300} alt="B78XH.svg" />
                        <h4>
                            A refresh of the 787-10 for Microsoft Flight Simulator
                        </h4>
                    </div>
                    <div className="z-10 grid gap-y-2 text-2xl grid-col">
                        <Link href="/downloads">
                            <Button className="h-12 w-48 bg-blue-tailwind hover:opacity-70">
                                Download
                            </Button>
                        </Link>
                        <Link href="#features">
                            <Button className="h-12 w-48 border-2 border-blue-sky hover:opacity-70">
                                Learn More
                            </Button>
                        </Link>
                    </div>
                </div>
            </div>
        </Container>
    </section>
);
