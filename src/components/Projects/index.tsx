import { ReactElement } from 'react'
import { useTranslation } from 'react-i18next'
import ProjectCard from '@/components/Projects/ProjectCard'

import projects from '@/data/projects'
import social from '@/data/social'

/**
 * About
 * @constructor
 */
const Projects = (): ReactElement => {
    const { t } = useTranslation()

    return (
        <section className={`relative py-32`} id={`projects`}>
            <div className={`mx-auto max-w-6xl px-8`}>
                <h2 className={`mb-16 text-center text-4xl font-semibold uppercase tracking-wider xl:text-7xl`}>
                    <span className={`border-b-4 border-violet-500`}>{t(`projects.title`)}</span>
                </h2>
                <div className={`flex flex-col gap-10`}>
                    <div className={`mx-auto w-5/6 grow md:w-4/6 xl:w-3/4`}>
                        <div className={`flex flex-col gap-6 text-center leading-7`}>{t(`projects.description`)}</div>
                    </div>
                    <div className={`mx-auto flex max-w-2xl flex-col gap-6`}>
                        {projects && projects.length > 0 && (
                            <div className={`mx-auto grid grid-cols-1 gap-2 md:grid-cols-2 md:gap-5`}>
                                {projects.map((project, index) => (
                                    <ProjectCard project={project} key={index} />
                                ))}
                            </div>
                        )}
                        <a
                            className={`mx-auto flex flex-row items-center justify-center rounded-md border px-4 py-2 transition duration-300 ease-in-out hover:scale-110`}
                            href={social.github.url}
                        >
                            <span className={`mr-2`}>See more at</span>
                            <img className={`h-6 w-6`} src={social.github.icon} alt={`Github Logo`} />
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Projects
