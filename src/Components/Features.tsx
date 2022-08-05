import { createRef, forwardRef } from 'react';
import Container from './Container';
import Image from 'next/image';
import { motion } from 'framer-motion';

export const featuresRef = createRef<HTMLDivElement>();

export const CustomLNAV = forwardRef(() => {
    return (
        <section id="CustomLNAV" ref={featuresRef} className="h-screen bg-navy overflow-hidden flex justify-center">
            <Container className="flex flex-col items-center justify-center">
                    <p className="flex justify-center text-5xl p-2">
                    LNAV and VNAV
                    </p>
                    <p className="flex justify-center p-2">
                        Auto-pilot improvements including Holds, Direct To, Waypoint Constraints, and Top of Descent.
                    </p>
                <motion.div
                    initial = {{ opacity: 0 }}
                    transition={{ ease: "easeIn", duration: 1 }}
                    whileInView={{ opacity: 1, x: -100 }}
                    viewport={{ once: true }}
                >
                <Image src={'/lnav.svg'} height={250} width={750} draggable={false} objectFit="contain" />
                </motion.div>
                <motion.div
                    initial = {{ opacity: 0 }}
                    transition={{ ease: "easeIn", duration: 1 }}
                    whileInView={{ opacity: 1, x: 100 }}
                    viewport={{ once: true }}
                >
                <Image src={'/vnav.svg'} height={250} width={750} draggable={false} objectFit="contain" />
                </motion.div>
            </Container>
        </section>
    )
}
);

export const CustomFMGC = () => {
    return (
        <section id="CustomFMGC" className="h-screen bg-navy overflow-hidden flex justify-center">
            <Container className="flex flex-col items-center justify-center">
                <motion.div
                    initial = {{ opacity: 0, x: 100 }}
                    transition={{ ease: "easeIn", duration: 2 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                 >
                        <p className="flex justify-center text-5xl">
                        FMGC
                        </p>
                        <p className="flex justify-center p-5">
                            FMGC rewrite, supporting SimBrief Flight Planning, Co-pilot functionality, and payload management.
                        </p>
                        <Image src="/CDU.svg" height={500} width={1000}  draggable={false} objectFit="contain"/>
                </motion.div>
            </Container>
        </section>
    )
}

export const CustomPFD = () => {
    return (
        <section id="CustomPFDMFD" className="h-screen bg-navy overflow-hidden flex justify-center">
            <Container className="flex flex-col items-center justify-center">
                <motion.div
                    initial = {{ opacity: 0, x: -100 }}
                    transition={{ ease: "easeIn", duration: 2 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                >
                        <p className="flex justify-center text-5xl">
                        PFD & MFD
                        </p>
                        <p className="flex justify-center">
                            Fully Rewritten PFD and MFD adding functionality and improving sim performance
                        </p>
                        <span className="grid grid-row-1 grid-cols-2 py-10">
                    <Image src="/PFD.svg" height={300} width={1000} draggable={false} objectFit="contain"/>
                        <Image src="/MFD.svg" height={1000} width={1500} draggable={false} objectFit="contain"/>
                    </span>
                </motion.div>
            </Container>
        </section>
    )
}
