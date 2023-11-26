import { ReactElement } from 'react'
import TechnologyTag from '@/components/TechnologyTag'
import ProjectTag from '@/components/Projects/ProjectTag'

import { Project, projectsTags } from '@/config/projects'
import stack from '@/config/stack'

/**
 * ProjectCard
 * @param project
 * @param props
 * @constructor
 */
const ProjectCard = ({ project, ...props }: { project: Project }): ReactElement => {
    return (
        <a
            className={`relative mb-4 w-full rounded-xl border transition duration-300 ease-in-out hover:scale-110 `}
            href={project.url}
            aria-label={`Go to ${project.title} website`}
            target={`_blank`}
            rel={`noopener noreferrer`}
            {...props}
        >
            <div className={`h-100 relative`}>
                <div className={`relative flex flex-col items-start rounded p-4`}>
                    <div className={`my-4`}>
                        {project?.image && (
                            <img className={`mr-4 h-12 w-12`} src={project.image} alt={`${project.title} Logo`} />
                        )}
                    </div>
                    <h4 className={`tracking-tigh text-xl font-bold`}>{project.title}</h4>
                    <div className={`pt-4 leading-6 `}>{project.description}</div>
                    {project.tags && (
                        <div className={`flex flex-wrap pt-4 md:flex-row`}>
                            {project.tags.map((tag, index) => {
                                // Retrieve tag info from projectsTags
                                const tagInfo = projectsTags.find((item) => item.label === tag)

                                return (
                                    <ProjectTag color={tagInfo?.color || 'gray'} label={tagInfo?.label || tag} key={index} />
                                )
                            })}
                        </div>
                    )}
                    <div className={`flex flex-wrap pt-4 md:flex-row`}>
                        {project.technologies.map((technology, index) => {
                            // Retrieve technology info from stack
                            const technologyInfo = stack.find((item) => item.label === technology)

                            return (
                                <TechnologyTag
                                    icon={technologyInfo?.icon}
                                    label={technologyInfo?.label || technology}
                                    key={index}
                                />
                            )
                        })}
                    </div>
                </div>
            </div>
        </a>
    )
}

export default ProjectCard
