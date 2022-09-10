import Image from 'next/image';

type cardProps = {
    title: string,
    body: string,
    url: string
    className?: string,
}


export const Card = (props: cardProps) => (
    <div className={`h-[270px] px-12 py-2 hover:opacity-90 md:rounded-md transition duration-150 ${props.className}`}>
        <p className="text-4xl font-extrabold">
            {props.title}
        </p>
        <p className="flex flex-wrap w-2/3 text-base">
            {props.body}
        </p>
        <div className="h-24 mt-8 flex justify-center">
            <Image src={props.url} height={72} width={300} objectFit={"contain"} draggable={false} />
        </div>
    </div>
)