import Image from 'next/image';
import { ReactNode } from 'react';

export type cardProps = {
    title: string,
    body: string,
    image: string,
    alt: string,
    className?: string,
    children?: ReactNode
}

export const Card = (props: cardProps) => (
    <div>
        <div className={`mx-24 h-72 w-screen bg-navy p-2 px-12 text-white transition duration-300 hover:opacity-90 md:w-96 md:rounded-md ${props.className}`}>
            <p className="text-2xl font-extrabold lg:text-3xl">
                {props.title}
            </p>
            <p className="text-md flex">
                {props.body}
            </p>
            <div className="mt-8 flex max-h-24 justify-center">
                <Image src={props.image} height={100} width={300} alt={props.alt} draggable={false} />
            </div>
        </div>
        {props.children}
    </div>
);
