import React from 'react';
import Container from './Container';
import Image from 'next/image';

export const CustomLNAV = () => {
    return (
        <section id="CustomLNAV">
            <Container className="h-screen py-10">
                <div className="justify-left text-3xl md:text-5xl px-12 ">
                Enhanced LNAV and VNAV
                    <p className="flex flex-wrap w-1/2 text-sm md:text-lg p-2">
                        Enhancements to LNAV and VNAV including direct to, holds, top of descent, and constraints.
                    </p>
                    <span className="flex justify-center">
                    <Image src="/LNAV_VNAV.png" height={350} width={502} className="object-cover" />
                    </span>
                </div>
            </Container>
        </section>
    )
}

export const CustomFMGC = () => {
    return (
        <section id="CustomFMGC">
            <Container className="h-screen">
                <div className="justify-left text-3xl md:text-5xl px-12 ">
                    Custom FMGC
                    <p className="flex flex-wrap w-1/2 text-sm md:text-lg p-2">
                        Custom FMGC rewrite, supporting SimBrief Flight Planning, Co-pilot functionality, simrate management, and more
                    </p>
                    <span className="flex justify-center">
                        <Image src="/FMGC.png" height={300} width={400} />
                    </span>
                </div>
            </Container>
        </section>
    )
}

export const CustomPFD = () => {
    return (
        <section id="CustomPFD">
            <Container className="h-screen">
                <div className="justify-left text-3xl md:text-5xl px-12 ">
                    Custom PFD
                    <p className="flex flex-wrap w-1/2 text-sm md:text-lg p-2">
                        Fully Rewritten PFD and MFD adding functionality and improving sim performance                    </p>
                    <span className="flex justify-center">
                    <Image src="/PFD_MFD.png" height={300} width={750} />
                    </span>
                </div>
            </Container>
        </section>
    )
}
