import Image from 'next/image';
import { Button, Container } from '../utils';

export const Donate = () => {
    return (
        <section id="Donate">
            <Container className="max-w-6xl min-h-screen">
                <div className="md:grid flex flex-wrap overflow-hidden md:grid-cols-2 md:grid-rows-2 grid-rows-3 md:gap-24 gap-12 w-screen px-24">
                    <div className="box row-start-1 row-span-2 col-start-1 col-span-1">
                        <h1 className="flex font-semibold md:col-start-1 md:px-24 justify-center text-6xl">Donate</h1>
                        <Image src="/img/Donate_image.png" height={400} width={400} draggable={false} />
                    </div>
                    <div className="box row-start-1 col-span-2">
                        <p className="py-7">Contributions enable us to sustain and grow the project through operating expenses such as hosting and serving downloads.</p>
                        <p>We use Open Collective to make all donations and expenses transparent, which means you can see exactly how we utilize donated funds anytime.</p>
                    </div>
                    <div className="box col-span-2">
                        <Button className="bg-blue-tailwind w-48 h-12 p-5 text-2xl hover:bg-blue-sky mb-4">Donate</Button>
                        <p className="text-sm">*No profit is generated from donations. Donating does not guarantee access to additional content nor its exclusivity if such content is ever given.</p>
                    </div>
                </div>
            </Container>
        </section>
    );
};


