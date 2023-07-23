import React, { ReactNode } from 'react';
import Image from 'next/image';
import { Button, Container } from '../components/utils';

type downloadItemProps = {
    children: ReactNode,
    description: string
    href: string,
}

export const DownloadItem = (props: downloadItemProps) => (
    <div className="my-4 overflow-hidden px-4 text-white">
        <a href={props.href}>
            <Button className="mt-12 h-16 w-48 border-2 border-white text-xl hover:bg-white hover:text-navy">
                {props.children}
            </Button>
        </a>
        <hr className="mt-10" />
        <p className="mt-12 w-48 text-center text-xl sm:text-start">{props.description}</p>
    </div>
);

const downloadURL = 'https://github.com/Heavy-Division/B78XH/archive/refs/heads/experimental.zip';

const Downloads = () => (
    <Container className="mx-auto mt-48">
        <div className="flex h-[50vh] justify-center">
            <Image src="/svg/78x-side.svg" alt="787-10_side" width={1000} height={330} draggable={false}
                   className="absolute mx-4 object-contain" />
        </div>
        <div className="flex justify-center">
            <Image src="/svg/B78XH.svg" alt="B78XH" height={68} width={350} draggable={false} />
        </div>
        <div className="flex justify-center">
            <div className="mb-10 flex flex-col gap-x-5 sm:flex-row">
                <DownloadItem href={downloadURL}
                              description={'Available only for the premium deluxe version of Microsoft Flight Simulator 2020'}>v1.2.0</DownloadItem>
            </div>
        </div>
    </Container>
);

export default Downloads;
