import Container from './Container';
import Image from 'next/image';
import { motion } from 'framer-motion';

export const CustomLNAV = () => {
    return (
        <section id="CustomLNAV" className="bg-navy">
            <Container>
                <div className="text-5xl py-5">
                    LNAV and VNAV
                    <p className="flex justify-center w-1/2 p-2">
                        Auto-pilot improvements including Holds, Direct To, Waypoint Constraints, and Top of Descent.
                    </p>
                </div>
            </Container>
        </section>
    )
}

export const CustomFMGC = () => {
    return (
        <section id="CustomFMGC" className="bg-navy">
            <Container>
                <motion.div
                    initial = {{ opacity: 0 }}
                    transition={{ ease: "easeIn", duration: 2 }}
                    whileInView={{ opacity: 1, x: 100 }}
                    viewport={{ once: true }}
                 >
                    <div className="justify-left text-3xl md:text-5xl px-12 py-10">
                        FMGC
                        <p className="flex flex-wrap w-1/3 md:text-2xl p-2">
                            FMGC rewrite, supporting SimBrief Flight Planning, Co-pilot functionality, and payload management.
                        </p>
                        <span>
                        <Image src="/CDU.svg" height={500} width={1000}  draggable={false} objectFit="contain"/>
                    </span>
                    </div>
                </motion.div>
            </Container>
        </section>
    )
}

export const CustomPFD = () => {
    return (
        <section id="CustomPFD" className="bg-navy">
            <Container>
                <motion.div
                    initial = {{ opacity: 0 }}
                    transition={{ ease: "easeIn", duration: 2 }}
                    whileInView={{ opacity: 1, x: 100 }}
                    viewport={{ once: true }}
                >
                    <div className="justify-left text-3xl md:text-5xl px-12 py-10">
                        PFD & MFD
                        <p className="flex flex-wrap w-1/3 md:text-3xl">
                            Fully Rewritten PFD and MFD adding functionality and improving sim performance
                        </p>
                        <span className="grid grid-row-1 grid-cols-2 py-10">
                    <Image src="/PFD.svg" height={300} width={1000} draggable={false} objectFit="contain"/>
                        <Image src="/MFD.svg" height={1000} width={1500} draggable={false} objectFit="contain"/>
                    </span>
                    </div>
                </motion.div>
            </Container>
        </section>
    )
}
