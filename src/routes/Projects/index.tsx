import { ReactElement } from 'react'
import projects from '../../data/projects'
import { ProjectsCard } from '../../components/Cards'

export const Projects = (): ReactElement => {
    return (
        <div className="space-y-16">
            <section className="container flex flex-col items-center">
                <h3 className="text-silver-900/90 w-full text-lg font-bold underline decoration-green-500/50 decoration-4 underline-offset-[6px]">
                    Projects
                </h3>
                <div className="mt-6 grid w-full grid-cols-1 gap-4">
                    {projects &&
                        projects.map((project, index) => (
                            <ProjectsCard key={index} project={project} priority={index < 3} />
                        ))}
                </div>
            </section>
        </div>
    )
}
