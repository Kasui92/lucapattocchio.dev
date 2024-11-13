import React, { ReactElement, useEffect } from 'react'
import ProjectCard from '@/components/Projects/ProjectCard'
import { ProjectTagSelector } from '@/components/Projects/ProjectTag'

import projects, { projectsTags } from '@/config/projects'
import social from '@/config/social'

/**
 * About
 * @constructor
 */
const Projects = (): ReactElement => {
    const [filteredTag, setFilteredTag] = React.useState<string | null>(null)
    const [filteredProjects, setFilteredProjects] = React.useState(projects)

    /**
     * Filter projects by tag
     * @param tag
     */
    const handleTagClick = (tag: string | null) => {
        setFilteredTag(tag)
    }

    useEffect(() => {
        // If no tag is selected, show all projects
        if (!filteredTag) {
            setFilteredProjects(projects)
            return
        }
        // Filter projects by tag
        else {
            const filtered = projects.filter((project) => project.tags && project.tags.includes(filteredTag))
            setFilteredProjects(filtered)
        }
    }, [filteredTag])

    return (
        <section className={`relative py-32`} id={`About`}>
            <div className={`mx-auto max-w-6xl px-8`}>
                <h2 className={`mb-16 text-center text-4xl font-semibold uppercase tracking-wider xl:text-7xl`}>
                    <span className={`border-b-4 border-violet-500`}>Projects</span>
                </h2>
                <div className={`flex flex-col gap-10`}>
                    <div className={`mx-auto w-5/6 grow md:w-4/6 xl:w-3/4`}>
                        <div className={`flex flex-col gap-6 text-center leading-7`}>
                            This is a list of some of the projects I&apos;ve worked on in the past few years.
                        </div>
                    </div>
                    <div className={'mx-auto flex w-5/6 flex-col gap-5 md:w-4/6 xl:w-3/4'}>
                        <div className={'text-center'}>You can filter them by clicking on the tags below.</div>
                        <div className={'flex justify-center'}>
                            <ProjectTagSelector label={'All'} active={!filteredTag} onClick={() => handleTagClick(null)} />
                            {projectsTags.map((tag, index) => (
                                <ProjectTagSelector
                                    label={tag.label}
                                    active={tag.label === filteredTag}
                                    key={index}
                                    onClick={() => handleTagClick(tag.label)}
                                />
                            ))}
                        </div>
                    </div>
                    <div className={`mx-auto flex max-w-2xl flex-col gap-6`}>
                        {filteredProjects.length === 0 && (
                            <div className={`flex flex-col items-center justify-center`}>
                                <h3 className={`text-2xl font-semibold`}>No projects found</h3>
                                <p className={`text-center`}>Try removing some filters</p>
                            </div>
                        )}
                        {filteredProjects && filteredProjects.length > 0 && (
                            <div className={`mx-auto grid grid-cols-1 gap-2 md:grid-cols-2 md:gap-5`}>
                                {filteredProjects.map((project, index) => (
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
