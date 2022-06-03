import React, { ReactNode, useState } from 'react';
import Container from './Container';
import Image from 'next/Image';
import Button from './Button';

type DownloadProps = {
    className?: string,
    titleName?: string,
    children?: ReactNode
}

const B787Hero = (props: DownloadProps) => {
    const [isShown, setIsShown] = useState(false);
    return (
        <header className="h-screen">
            <Container className="bg-transparent">
        <div className="overflow-hidden">
            <div className="fixed opacity-90 max-w-7xl -z-50">
            <Image src="/B78XH_Side.png"  height={1500} width={1900} />
        </div>
                <Button className="h-10 bg-blue-tailwind w-24 text-xs md:w-40 md:text-lg transition hover:opacity-70">
                    Download
                </Button>
        </div>
           </Container>
       </header>
    )
};

export default B787Hero;
