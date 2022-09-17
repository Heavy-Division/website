import React, { ReactNode } from 'react';
import { Button } from '../components/utils';
import Image from 'next/image';

type downloadItemProps = {
    children: ReactNode,
    description: string
}

export const DownloadItem = (props: downloadItemProps) => (
    <div className="my-4 px-4 overflow-hidden sm:my-3 sm:px-3 md:my-3 md:px-3 md:w-1/3 lg:my-1 lg:px-1 lg:w-1/3 xl:my-6 xl:px-6 xl:w-1/3 text-white">
        <Button className="border-2 border-white w-48 h-16 mt-12 hover:bg-white hover:text-navy text-xl sm:text-sm">{props.children}</Button>
        <hr className="mt-10"></hr>
        <p className="text-center sm:text-start text-xl sm:text-sm mt-12 w-48">{props.description}</p>
    </div>
)

const stableSummary = 'The Stable Build is our most tested and reliable version, with features following strict requirements to ensure a smooth experience. ';
const developmentSummary = 'The Development Build includes new features ready for public preview, but may encounter some bugs.';
const experimentalSummary = 'The Experimental Build includes brand new features for public testing. No support will be provided for this build.';

const Downloads = () => {
    return (
        <div className="px-6 py-16">
                <div className="flex justify-center">
                <Image src="/svg/78x-side.svg" width={1000} height={330} draggable={false} objectFit="contain" layout={"fixed"} />
                </div>
                <div className="flex justify-center">
                    <Image src={'/svg/b78xh.svg'} height={68} width={350} draggable={false} />
                </div>
                <div className="flex justify-center">
                    <div className="flex flex-col sm:flex-row gap-x-5">
                            <DownloadItem description={stableSummary}>Stable</DownloadItem>
                            <DownloadItem description={developmentSummary}>Development</DownloadItem>
                            <DownloadItem description={experimentalSummary}>Experimental</DownloadItem>
                        </div>
                    </div>
                </div>
    );
};

export default Downloads;
