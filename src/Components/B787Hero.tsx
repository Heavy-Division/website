import React, {ReactNode} from 'react';
import { useState, useEffect } from 'react';
import Button from './Button'
import Container from './Container';
import Image from 'next/Image';
import {IconArrowUpCircle} from "@tabler/icons";

type ButtonProps = {
    className?: string,
    titleName?: string,
    children?: ReactNode
}

const B787Hero = (props: ButtonProps) => {
    const [isShown, setIsShown] = useState(false);
    return (
        <header className="overflow-y-scroll h-screen">
            <Container className="overflow-y-scroll relative max-w-screen h-96">
        <div className="screen min-h-screen fixed bg-navy">
            <div className="relative flex justify-center min-w-screen h-fit top-24">
            <Image src="/B78XH.svg"  height={200} width={500} />
        </div>

            <div className="object-cover flex justify-center">
                <div className="relative h-5/6 w-5/6 pl-5 pr-5">
                    <Image
                        className="absolute"
                        src="/787.svg" // TODO: This image is copyrighted, will need to make a custom svg for production build.
                        height={1000} width={2000} />
                </div>
            </div>
            <div className="absolute h-fit w-full place-content-center grid">
                <div className={`cursor-pointer ${props.className}`} onMouseEnter={() => setIsShown(true)} onMouseLeave={() => setIsShown(false)}>
                     <span
                         draggable="false"
                         onClick={() => setIsShown(!isShown)}
                         className="px-5"
                     >
                <Button className="absolute flex justify-center grid place-items-center w-40 h-12 bg-blue-tailwind text-white hover:bg-white hover:text-navy">
                    Download
                </Button>
                            <Button className={`${isShown && 'rot'} bg-amber-400 duration-300 self-center`}>
                                Stable {props.titleName}
                            </Button>
                          <Button className={`${isShown && 'rot'} bg-amber-400 duration-300 self-center`}>
                                Dev {props.titleName}
                            </Button>
                          <Button className={`${isShown && 'rot'} bg-amber-400 duration-300 self-center`}>
                                Experimental {props.titleName}
                            </Button>
                     </span>
                </div>
            </div>
        </div>
           </Container>
       </header>
    )
};

export default B787Hero;
