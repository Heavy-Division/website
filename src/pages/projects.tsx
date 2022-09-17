import { Button, Card, cardProps, Container } from '../components/utils';
import { cardData } from '../data';
import Link from 'next/link';

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
        className="md:bg-navy md:shadow-2xl transition"
    >
        <Link href={props.href}>
            <Button className=" mt-3 relative hover:bg-blue-sky
            left-1/2 transnform -translate-x-1/2 ring-2 ring-blue-sky h-12 w-24">
            <p className="font-extrabold">explore</p>
            </Button>
        </Link>
    </Card>

    </>
);

const ProjectMap = (props: cardMapProps) => {
    return (
        <>
            {props.content.map(({ title, href, body, image}) => {
                return <ProjectCard
                title={title}
                href={href}
                body={body}
                image={image}
            />
            })}
        </>
    )
}

const Projects = () => {
    return (
        <section className="lg:flex place-items-center grid grid-cols-1 min-h-screen md:px-24 my-36 text-white">
            <div className="mx-12">
                <h1 className="underline decoration-8 decoration-blue-sky">Projects</h1>
                <p className="text-2xl mb-12">An overview of open source Heavy Division projects.</p>
            </div>
            <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
            <ProjectMap content={cardData.projects} />
            </div>
        </section>
    )
};

export default Projects;
