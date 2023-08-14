import Image from 'next/image';

export type cardProps = {
    title: string,
    body: string,
    image: string,
    alt: string,
    height: number,
    width: number,
    className?: string,
}

export const Card = (props: cardProps) => (
    <div>
        <div className={`mx-24 h-72 w-96 bg-navy px-6 py-1 text-white transition duration-300 hover:opacity-90 md:w-96 md:rounded-md ${props.className}`}>
            <p className="text-2xl font-extrabold lg:text-3xl">
                {props.title}
            </p>
            <p className="text-md flex max-h-14">
                {props.body}
            </p>
            <div className="mt-8 flex justify-center object-contain">
                <Image src={props.image} height={props.height} width={props.width} alt={props.alt} draggable={false} />
            </div>
        </div>
    </div>
);
