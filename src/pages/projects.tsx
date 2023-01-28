import Image from 'next/image';
import { cardData } from '../data';
import { Container } from '../components/utils';

type projectCardProps = {
    title: string,
    body: string,
    href: string,
    image: string,
    width: number,
    height: number,
    alt: string,
}

type cardMapProps = {
    content: {
        title: string,
        href: string,
        body: string,
        image: string,
        width: number,
        height: number,
        alt: string,
    }[],
};

const ProjectCard = (props: projectCardProps) => (
    <a href={props.href}>
        <div className="grid-col grid h-64 w-80 place-items-center rounded-md bg-navy-dark p-3 ring-blue-sky transition hover:ring-2">
            <h2 className="font-semibold">{props.title}</h2>
            <p className="text-center">{props.body}</p>
            <Image src={props.image} width={props.width} height={props.height} alt={props.alt} />
        </div>
    </a>
);

const ProjectMap = (props: cardMapProps) => (
    <>
        {props.content.map(({ title, href, body, image, width, height, alt }) => (
            <ProjectCard
                title={title}
                href={href}
                body={body}
                height={height}
                width={width}
                image={image}
                alt={alt}
            />
        ))}
    </>
);

const Projects = () => (
    <section className="my-32 max-h-fit">
        <Container className="mx-auto">
            <div className="grid-col my-4 grid place-items-center gap-y-4">
                <h1 className="underline decoration-blue-tailwind decoration-8 underline-offset-8">Projects</h1>
                <p className="text-md mx-4 text-center md:text-xl">An overview of Heavy Division Projects. Click on each to explore it's repository</p>
            </div>
            <div className="mx-auto grid grid-cols-1 max-w-7xl grid-cols-1 place-items-center md:grid-cols-2 gap-y-6 md:gap-x-4 lg:grid-cols-3">
                <ProjectMap content={cardData.projects} />
            </div>
        </Container>
    </section>
);

export default Projects;
