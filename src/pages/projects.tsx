import { Card, cardProps } from '../components/utils';

const ProjectCard = (props: cardProps) => (
    <Card title={props.title} url={props.url} body={props.body} className="hover:bg-white hover:text-navy" />
)

const Projects = () => {
    return (
        <section className="h-screen my-36">
                <div className="grid grid-cols-3 place-items-center">
                    <ProjectCard title={"B78XH"} body={"test"} url={"/svg/logo.svg"} />
                    <ProjectCard title={"B789H"} body={"test"} url={"/svg/logo.svg"}  />
                    <ProjectCard title={"Avionics"} body={"test"} url={"/svg/logo.svg"}  />
                    <ProjectCard title={"Sound"} body={"test"} url={"/svg/logo.svg"}  />
                    <ProjectCard title={"Web"} body={"test"} url={"/svg/logo.svg"} />
                    <ProjectCard title={"Discord Bot"} body={"test"} url={"/svg/logo.svg"}  />
                    <ProjectCard title={"Design"} body={"test"} url={"/svg/logo.svg"}  />
                </div>
        </section>
    )
};

export default Projects;