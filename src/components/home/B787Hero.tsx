import Image from 'next/image';
import { Container, Button } from '../utils';


export const B787Hero = () => {

    return (
            <section id="B787Hero">
                <Container className="max-w-6xl md:max-w-full h-screen">
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2">
                        <Image src={'/svg/b78xh.svg'} height={82} width={500} draggable={false} />
                    </div>
                        <div className="absolute top-3/4 left-1/2 transform -translate-x-1/2">
                            <div className="flex justify-center gap-x-8">
                                <Button className="border-2 border-blue-sky p-3 w-48 md:w-72 h-16 text-2xl md:text-3xl mt-5 hover:bg-blue-sky">
                                    <a href={"/downloads"}>Download</a>
                                </Button>
                                <Button className="border-2 border-blue-tailwind p-3 w-48 h-16 sm:h-18 md:w-72 sm:h-18 text-xl sm:text-2xl md:text-3xl mt-5 hover:bg-blue-tailwind">
                                    <a href={"#Features"}>Learn More</a>
                                </Button>
                            </div>
                        </div>
                </Container>
            </section>
    )
};

