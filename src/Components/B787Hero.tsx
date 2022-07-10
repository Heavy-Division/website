import React from 'react';
import Button from './Button'
import Container from './Container';
import { ScrollToTopButton } from './ScrollToTopButton';

const B787Hero = () => {

    return (
        <header>
            <video
                className="object-cover fixed w-screen h-screen opacity-40 -z-10"
                src="https://cdn.discordapp.com/attachments/429734269838032898/995401479328378992/2022-07-09_11-33-29.mp4"
                playsInline
                autoPlay
                muted
                loop
            />
            <Container className=" min-h-screen">
                    <Button className="absolute right-1/3 top-1/3 h-14 bg-blue-sky w-40 mx-3 md:w-30 md:text-lg transition hover:opacity-70 font-medium">
                        Download
                    </Button>
                    <Button className="absolute left-2/3 top-1/3 h-14 bg-blue-tailwind w-40 md:w-30 md:text-lg transition hover:opacity-70 font-medium">
                       Learn More
                    </Button>
            </Container>
            <ScrollToTopButton />
        </header>
    )
};

export default B787Hero;

