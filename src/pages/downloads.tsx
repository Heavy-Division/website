import React, { ReactNode } from 'react';
import Image from 'next/image';
import { Button, Container } from '../components/utils';

type downloadItemProps = {
    children: ReactNode,
    description: string
    href: string,
}

export const DownloadItem = (props: downloadItemProps) => (
    <div className="my-4 overflow-hidden px-4 text-white sm:my-3 sm:px-3 md:my-3 md:w-1/3 md:px-3 lg:my-1 lg:w-1/3 lg:px-1 xl:my-6 xl:w-1/3 xl:px-6">
        <a href={props.href}>
            <Button className="mt-12 h-16 w-48 border-2 border-white text-xl hover:bg-white hover:text-navy sm:text-sm">
                {props.children}
            </Button>
        </a>
        <hr className="mt-10" />
        <p className="mt-12 w-48 text-center text-xl sm:text-start sm:text-sm">{props.description}</p>
    </div>
);

const stableSummary = 'The Stable Build is our most tested and reliable version, with features following strict requirements to ensure a smooth experience. ';
const developmentSummary = 'The Development Build includes new features ready for public preview, but may encounter some bugs.';
const experimentalSummary = 'The Experimental Build includes brand new features for public testing. No support will be provided for this build.';

const stableDownloadUrl = 'https://github.com/Heavy-Division/B78XH/releases/download/v0.1.15/B78XH-v0.1.15.zip';
const devDownloadUrl = 'https://github.com/Heavy-Division/B78XH/archive/refs/heads/main.zip';
const experimentalDownloadUrl = 'https://github.com/Heavy-Division/B78XH/archive/refs/heads/experimental.zip';

const Downloads = () => (
    <Container className="mx-auto mt-48">
        <div className="flex h-[50vh] justify-center">
            <Image src="/svg/78x-side.svg" alt="787-10_side" width={1000} height={330} draggable={false} className="absolute mx-4 object-cover" />
        </div>
        <div className="flex justify-center">
            <Image src="/svg/B78XH.svg" alt="B78XH" height={68} width={350} draggable={false} />
        </div>
        <div className="flex justify-center">
            <div className="flex flex-col gap-x-5 mb-10 sm:flex-row">
                <DownloadItem href={stableDownloadUrl} description={stableSummary}>Stable</DownloadItem>
                <DownloadItem href={devDownloadUrl} description={developmentSummary}>Development</DownloadItem>
                <DownloadItem href={experimentalDownloadUrl} description={experimentalSummary}>Experimental</DownloadItem>
            </div>
        </div>
    </Container>
);

export default Downloads;
