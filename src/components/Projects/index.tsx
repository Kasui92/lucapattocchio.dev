import { ReactElement } from 'react'
import ProjectCard from '@/components/Projects/ProjectCard'

import projects from '@/config/projects'
import social from '@/config/social'

/**
 * About
 * @constructor
 */
const Projects = (): ReactElement => {
    return (
        <section className={`relative py-32`} id={`About`}>
            <div className={`mx-auto w-[80%] xl:w-7/12`}>
                <h2 className={`mb-16 text-center text-4xl font-semibold uppercase tracking-wider xl:text-7xl`}>
                    <span className={`border-b-4 border-violet-500`}>Projects</span>
                </h2>
                <div className={`flex flex-col gap-20`}>
                    <div className={`mx-auto w-5/6 grow md:w-4/6 xl:w-3/4`}>
                        <div className={`flex flex-col gap-6 text-center leading-7`}>
                            This is a list of some of the projects I&apos;ve worked on in the past few years.
                        </div>
                    </div>
                    <div className={`flex flex-col gap-4`}>
                        <div className={`mx-auto grid grid-cols-1 gap-6 md:w-3/4 md:grid-cols-2`}>
                            {projects.map((project, index) => (
                                <ProjectCard project={project} key={index} />
                            ))}
                        </div>
                        <a
                            className={`mx-auto flex flex-row items-center justify-center rounded-md border px-4 py-2 transition duration-300 ease-in-out hover:scale-110`}
                            href={social.github.url}
                        >
                            <span className={`mr-2`}>See more at</span>
                            <img className={`h-6 w-6`} src={`/assets/icons/socials/github.svg`} alt={`Github Logo`} />
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Projects
