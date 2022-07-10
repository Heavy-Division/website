import React, { useEffect } from 'react';
import Container from './Container';
import Image from 'next/image';
import Aos from 'aos';
import 'aos/dist/aos.css';

export const CustomLNAV = () => {
    useEffect(() => {
        Aos.init({ duration: 3000 });
    }, []);
    return (
        <section id="CustomLNAV" className="bg-navy h-screen">
            <Container className="py-24">
                <div data-aos="fade-up" className="justify-left md:text-5xl px-12 py-10">
                    Enhanced LNAV and VNAV
                    <p className="flex flex-wrap w-1/2 text-sm md:text-lg p-2">
                        Enhancements to LNAV and VNAV including direct to, holds, top of descent, and constraints.
                    </p>
                    <span className="grid grid-rows-2 place-items-end">
                        <div className="h-1/3">
                    <Image src="/LNAV.svg" height={250} width={1000} draggable={false} objectFit="contain" className="object-cover" />
                            </div>
                        <div className="h-1/3">
                    <Image src="/VNAV.svg" height={250} width={1000} draggable={false} objectFit="contain" className="object-cover" />
                        </div>
                    </span>
                </div>
            </Container>
        </section>
    )
}

export const CustomFMGC = () => {
    return (
        <section id="CustomFMGC" className="bg-navy">
            <Container className="h-screen">
                <div data-aos="fade-up" className="justify-left text-3xl md:text-5xl px-12 ">
                    Custom FMGC
                    <p className="flex flex-wrap w-1/3 md:text-2xl p-2">
                        Custom FMGC rewrite, supporting SimBrief Flight Planning, Co-pilot functionality, simrate management, and more
                    </p>
                    <span className="flex justify-end">
                        <Image src="/CDU.svg" height={500} width={1000}  draggable={false} objectFit="contain"/>

                    </span>
                </div>
            </Container>
        </section>
    )
}

export const CustomPFD = () => {
    return (
        <section id="CustomPFD" className="bg-navy">
            <Container className="h-screen">
                <div data-aos="fade-up" className="justify-left text-3xl md:text-5xl px-12">
                    Custom PFD
                    <p className="flex flex-wrap w-1/3 md:text-3xl">
                        Fully Rewritten PFD and MFD adding functionality and improving sim performance                    </p>
                    <span className="grid grid-row-1 grid-cols-2 py-10">
                    <Image src="/PFD.svg" height={300} width={1000}  draggable={false}  objectFit="contain"/>
                        <Image src="/MFD.svg" height={600} width={1000}  draggable={false}  objectFit="contain"/>
                    </span>
                </div>
            </Container>
        </section>
    )
}
