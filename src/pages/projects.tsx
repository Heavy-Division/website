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
    }[],
};

const ProjectCard = (props: projectCardProps) => (
    <Link href={props.href}>
        <Card
            title={props.title}
            image={props.image}
            body={props.body}
            className="md:shadow-2x transition md:bg-navy cursor-pointer"
        />
    </Link>
);

const ProjectMap = (props: cardMapProps) => (
    <>
        {props.content.map(({ title, href, body, image }) => (
            <ProjectCard
                title={title}
                href={href}
                body={body}
                image={image}
            />
        ))}
    </>
);

const Projects = () => (
    <section className="min-h-screen my-32">
        <div className="grid grid-col place-items-center gap-y-4 my-4">
            <h1 className="underline decoration-8 decoration-blue-tailwind underline-offset-8">Projects</h1>
            <p className="mx-4 text-md md:text-xl text-center">An overview of Heavy Division Projects. Click on each to explore it's repository</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto md:gap-4 place-items-center">
            <ProjectMap content={cardData.projects} />
        </div>
    </section>
);

export default Projects;
