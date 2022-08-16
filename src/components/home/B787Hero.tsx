import Image from 'next/image';
import { Container, Button } from '../utils';


export const B787Hero = () => {

    return (
            <section id="B787Hero">
                <Container className="max-w-6xl md:max-w-full min-h-screen">
                <div className="grid grid-col justify-center py-24 gap-y-24">
                    <Image src={'/svg/b78xh.svg'} height={68} width={350} draggable={false} />
                    <Image src={'/svg/plane-forward.svg'} height={360} width={1290} draggable={false}/>
                </div>
                <div className="flex justify-center">
                    <p className="md:text-5xl text-3xl font-extrabold">
                        A new era of&nbsp;
                        <span className="text-blue-sky">flight&nbsp;</span>
                        Simulation
                    </p>
                </div>
                <div className="flex justify-center gap-x-6">
                <Button className="border-2 border-blue-sky w-48 md:w-72 h-18 md:h-24 text-2xl md:text-3xl mt-5 hover:bg-blue-sky">
                    <a href={"/Downloads"}>Download</a>
                </Button>
                    <Button className="border-2 border-blue-sky w-48 md:w-72 h-18 md:h-24 text-2xl md:text-3xl mt-5 hover:bg-blue-sky">
                        <a href={"/Downloads"}>Learn More</a>
                    </Button>
                </div>
                </Container>
            </section>
    )
};

