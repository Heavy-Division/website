import React from 'react';
import Container from './Container';
import Button from './Button';
import motion from 'framer-motion';

const B787Hero = () => {
        return (
            <section className="h-screen w-screen">
                <video
                    className="object-cover fixed -z-10 w-screen h-screen opacity-30"
                    src="https://media.istockphoto.com/videos/aerial-view-of-london-skyline-hyperlapse-video-id1196816851"
                    playsInline
                    autoPlay
                    muted
                    loop
                />
                <Container>
                    <Button className="absolute top-3/4 left-1/2 md:w-64 md:h-24 bg-blue-tailwind text-3xl">
                        <a href="">Download</a>
                    </Button>
                    <Button className="absolute top-3/4 left-3/4 md:w-64 md:h-24 bg-blue-sky text-3xl">
                        <a href="">About</a>
                    </Button>


                    <header>
        </header>
                </Container>
            </section>
    )
};

export default B787Hero;

