import { useState } from 'react';
import Image from 'next/image';
import { Button, Container } from '../utils';


export const Donate = () => {
    const [isShown, setIsShown] = useState(false);

    return (
        <section id="Donate">
            <Container className="max-w-full min-h-screen py-24">
                <div className="px-5 md:px-24">
                    <div className="flex flex-wrap justify-between w-full -mx-px overflow-hidden md:-mx-4">
                        <div className="my-px px-px overflow-hidden md:my-4 md:px-4 md:w-1/4 lg:w-1/4 xl:w-1/4">
                            <h1>Donate</h1>
                            <p>Contributions enable us to sustain and grow the project through operating expenses such as hosting and serving downloads. </p>
                            <p className="my-12">We use Open Collective to make all donations and expenses transparent, which means you can see exactly how we utilize donated funds anytime.</p>
                        </div>
                        <div className="my-px px-px w-full overflow-hidden md:my-4 md:px-4 md:w-1/2 lg:w-1/2 xl:w-1/2">
                            <Image src="/img/donate.png" height={300} width={300} objectFit={"contain"} draggable={false} layout={"responsive"} />
                        </div>
                    </div>
                    <div className="flex justify-center">
                    <Button onMouseEnter={() => setIsShown(true)} onMouseLeave={() => setIsShown(false)}
                            className="bg-blue-tailwind h-16 w-48 p-4 my-24 hover:bg-blue-sky text-2xl">
                        <a href="https://opencollective.com/heavy-division-simulations/donate">Donate</a>
                    </Button>
                    </div>
                </div>
            </Container>
        </section>
    );
};


