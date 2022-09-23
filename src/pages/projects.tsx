import Link from 'next/link';
import { Card, cardProps } from '../components/utils';
import { cardData } from '../data';

type projectCardProps = cardProps & {
    href: string,
}
type cardMapProps = {
    content: {
        title: string,
        href: string,
        body: string,
        image: string,
        alt: string,
    }[],
};

const ProjectCard = (props: projectCardProps) => (
    <Link href={props.href}>
        <Card
            title={props.title}
            image={props.image}
            body={props.body}
            alt={props.alt}
            className="md:shadow-2x cursor-pointer transition md:bg-navy"
        />
    </Link>
);

const ProjectMap = (props: cardMapProps) => (
    <>
        {props.content.map(({ title, href, body, image, alt }) => (
            <ProjectCard
                title={title}
                href={href}
                body={body}
                image={image}
                alt={alt}
            />
        ))}
    </>
);

const Projects = () => (
    <section className="my-32 min-h-screen">
        <div className="grid-col my-4 grid place-items-center gap-y-4">
            <h1 className="underline decoration-blue-tailwind decoration-8 underline-offset-8">Projects</h1>
            <p className="text-md mx-4 text-center md:text-xl">An overview of Heavy Division Projects. Click on each to explore it's repository</p>
        </div>
        <div className="mx-auto grid max-w-7xl grid-cols-1 place-items-center md:grid-cols-2 md:gap-4 lg:grid-cols-3">
            <ProjectMap content={cardData.projects} />
        </div>
    </section>
);

export default Projects;
