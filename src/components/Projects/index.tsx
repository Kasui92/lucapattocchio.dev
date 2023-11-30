import React, { ReactElement, useEffect } from 'react'
import ProjectCard from '@/components/Projects/ProjectCard'
import ProjectTag from '@/components/Projects/ProjectTag'

import projects, { projectsTags } from '@/config/projects'
import social from '@/config/social'

/**
 * About
 * @constructor
 */
const Projects = (): ReactElement => {
    // Set filtered tags to all tags by default
    const [filteredTags, setFilteredTags] = React.useState<string[]>([...projectsTags.map((tag) => tag.label)])
    const [filteredProjects, setFilteredProjects] = React.useState(projects)

    /**
     * Handle tag click event
     * @param tag
     */
    const handleTagClick = (tag: string) => {
        // If tag is already in filteredTags, remove it
        if (filteredTags.includes(tag)) {
            setFilteredTags(filteredTags.filter((item) => item !== tag))
        } else {
            // Otherwise, add it
            setFilteredTags([...filteredTags, tag])
        }
    }

    useEffect(() => {
        setFilteredProjects(
            projects.filter((project) => project?.tags && project.tags.some((tag) => filteredTags.includes(tag))),
        )
    }, [filteredTags])

    return (
        <section className={`relative py-32`} id={`About`}>
            <div className={`mx-auto w-[80%] xl:w-7/12`}>
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
                            {projectsTags.map((tag, index) => (
                                <ProjectTag
                                    color={tag.color}
                                    label={tag.label}
                                    key={index}
                                    className={`cursor-pointer ${!filteredTags.includes(tag.label) && `opacity-60 ring-2`}`}
                                    onClick={() => handleTagClick(tag.label)}
                                />
                            ))}
                        </div>
                    </div>
                    <div className={`flex flex-col gap-6`}>
                        {filteredProjects.length === 0 && (
                            <div className={`flex flex-col items-center justify-center`}>
                                <h3 className={`text-2xl font-semibold`}>No projects found</h3>
                                <p className={`text-center`}>Try removing some filters</p>
                            </div>
                        )}
                        {filteredProjects && filteredProjects.length > 0 && (
                            <div className={`mx-auto grid grid-cols-1 gap-6 md:w-3/4 md:grid-cols-2`}>
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
                            <img className={`h-6 w-6`} src={`/assets/icons/socials/github.svg`} alt={`Github Logo`} />
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Projects
