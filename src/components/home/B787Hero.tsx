import Image from 'next/image';
import { Container, Button } from '../utils';
import Link from 'next/link';

export const B787Hero = () => {
    return (
            <section id="hero">
                <Image src={"/img/image4.jpg"} objectFit={"cover"} layout={"fill"} className="opacity-80" />
                <Container className="grid place-items-center md:justify-end max-w-6xl md:max-w-7xl mx-auto h-screen">
                        <div className="bg-white backdrop-blur-md p-9 rounded-md bg-opacity-10">
                            <Image src={"/svg/b78xh.svg"} objectFit={"contain"} draggable={false} height={60} width={300} />
                            <h4 className="mt-5">
                                A refresh of the 787-10 for Microsoft Flight Simulator
                            </h4>
                            <div className="grid grid-col md:grid-cols-2 text-2xl justify-center gap-x-8">
                                <Button className="bg-blue-sky w-full p-3 h-16 mt-5 hover:bg-blue-tailwind">
                                    <Link href={"/downloads"}>Download</Link>
                                </Button>
                                <Button className="border-4 w-full p-3 h-16 border-blue-sky w-48 mt-5 hover:bg-blue-sky">
                                    <Link href={"#features"}>Learn More</Link>
                                </Button>
                            </div>
                        </div>
                </Container>
            </section>
    )
};

