import Image from 'next/image';
import Link from 'next/link';
import { ReactNode } from 'react';

export type cardProps = {
    title: string,
    body: string,
    image: string
    className?: string,
    children?: ReactNode
}


export const Card = (props: cardProps) => (
    <div>
        <div className={`min-h-[290px] bg-navy w-screen md:w-[419.06px] px-12 p-2 hover:opacity-90 md:rounded-md transition duration-300 text-white ${props.className}`}>
            <p className="text-2xl lg:text-3xl font-extrabold">
                {props.title}
            </p>
            <p className="text-md flex">
                {props.body}
            </p>
            <div className="flex mt-8 max-h-24 justify-center">
                <Image src={props.image} height={150} width={300} objectFit={"contain"} layout={"fixed"} draggable={false} />
            </div>
        </div>
        {props.children}
    </div>
)
