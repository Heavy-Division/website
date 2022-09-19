import Link from 'next/link';
import { Button, Card, cardProps } from '../components/utils';
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
    <>
        <Card
            title={props.title}
            image={props.image}
            body={props.body}
            className="transition md:bg-navy md:shadow-2xl"
        >
            <Link href={props.href}>
                <Button className=" transnform relative left-1/2
            mt-3 h-12 w-24 -translate-x-1/2 ring-2 ring-blue-sky hover:bg-blue-sky"
                >
                    <p className="font-extrabold">explore</p>
                </Button>
            </Link>
        </Card>

    </>
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
    <section className="my-36 grid min-h-screen grid-cols-1 place-items-center text-white md:px-24 lg:flex">
        <div className="mx-12">
            <h1 className="underline decoration-blue-sky decoration-8">Projects</h1>
            <p className="mb-12 text-2xl">An overview of open source Heavy Division projects.</p>
        </div>
        <div className="grid gap-8 lg:grid-cols-2 xl:grid-cols-3">
            <ProjectMap content={cardData.projects} />
        </div>
    </section>
);

export default Projects;
