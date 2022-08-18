import Image from 'next/image';
import { Container, Button } from '../utils';


export const B787Hero = () => {

    return (
            <section id="B787Hero">
                <Container className="max-w-6xl md:max-w-full min-h-screen">
                <div className="grid grid-col justify-center py-32 gap-y-12">
                    <Image src={'/svg/b78xh.svg'} height={40} width={300} draggable={false} className="-z-20" />
                    <Image src={'/svg/plane-forward.svg'} height={270} width={1290} draggable={false}/>
                </div>
                <div className="flex justify-center">
                    <p className="md:text-5xl text-3xl font-extrabold">
                        A new era of&nbsp;
                        <span className="text-blue-sky">flight&nbsp;</span>
                        Simulation
                    </p>
                </div>
                <div className="flex justify-center gap-x-6">
                <Button className="border-2 border-blue-sky p-3 w-48 md:w-72 h-16 text-2xl md:text-3xl mt-5 hover:bg-blue-sky">
                    <a href={"/downloads"}>Download</a>
                </Button>
                    <Button className="border-2 border-blue-sky p-3 w-48 sm:h-18 md:w-72 sm:h-18 text-xl sm:text-2xl md:text-3xl mt-5 hover:bg-blue-sky">
                        <a href={"#Features"}>Learn More</a>
                    </Button>
                </div>
                </Container>
            </section>
    )
};

