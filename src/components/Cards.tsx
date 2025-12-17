import { Fragment, ReactElement } from 'react'
import { date2Period } from '../lib/utils'

import {
    IconExternalLink,
    IconBrandGithub,
    IconCalendar,
    IconFolderCode,
    IconMapPin,
    IconArrowRight,
} from '@tabler/icons-react'

import { Experience } from '../data/experiences'
import { Project } from '../data/projects'
import { NavLink } from 'react-router'
import { Article } from '../data/articles'

interface ProjectsCardProps {
    project: Project
    priority?: boolean
}

export const ExperienceCard = ({ experience }: { experience: Experience }): ReactElement => {
    return (
        <div className="border-silver-700/50 hover:border-silver-700/70 flex w-full flex-col rounded-lg border px-4 py-2 shadow-xs transition duration-300 hover:scale-[1.01] hover:shadow-lg">
            <div className="text-silver-700/90 flex w-full flex-col flex-wrap">
                <div className="font-semibold whitespace-nowrap">{experience.company}</div>
                <div className="whitespace-nowrap">{experience.position}</div>
            </div>
            <div className="text-silver-700/70 flex w-full flex-col gap-x-2 text-sm">
                <div className="flex space-x-1">
                    <IconCalendar className="h-4 w-4" />
                    <span>{date2Period(experience.startDate)}</span>
                    <span>-</span>
                    {experience.endDate ? <span>{date2Period(experience.endDate)}</span> : <span>Present</span>}
                </div>
                {experience.location && (
                    <div className="flex items-center space-x-1">
                        <IconMapPin className="h-4 w-4" />
                        <span>{experience.location}</span>
                    </div>
                )}
                {experience?.description && <div className="text-silver-700/70 mt-2 flex">{experience.description}</div>}
                {experience?.projects && (
                    <div className="mt-2 flex items-start space-x-1 md:items-center">
                        <div className="flex items-center space-x-1">
                            <IconFolderCode className="h-4 w-4 shrink-0" />
                            <span className="font-semibold">Projects</span>:
                        </div>
                        <div className="flex flex-wrap gap-1">
                            {experience.projects.map((project, index) => (
                                <Fragment key={index}>
                                    {index > 0 && <span className="hidden md:block">, </span>}
                                    <a
                                        href={project.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="underline-transition text-green-700/90 after:bg-green-700/90"
                                        title={`Visit ${project.title}`}
                                    >
                                        <span className="flex items-center gap-1">
                                            <IconExternalLink className="h-4 w-4" />
                                            {project.title}
                                        </span>
                                    </a>
                                </Fragment>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}

export const ProjectsCard = ({ project, priority = false }: ProjectsCardProps): ReactElement => {
    return (
        <div className="group border-silver-700/50 hover:border-silver-700/70 flex h-full flex-col gap-4 rounded-lg border p-0 shadow-xs transition duration-300 hover:scale-[1.01] hover:shadow-lg md:flex-row md:p-4">
            <div className="relative h-full w-full md:w-48">
                <img
                    src={project.image}
                    alt={project.title}
                    title={project.title}
                    className="h-36 w-full rounded-t-lg object-cover md:h-full md:rounded-lg"
                    loading={priority ? 'eager' : 'lazy'}
                    fetchPriority={priority ? 'high' : 'low'}
                />
            </div>
            <div className="flex flex-1 flex-col gap-2 p-4 md:p-0">
                <h4 className="text-silver-900/90 font-semibold">{project.title}</h4>
                <p className="text-silver-700/70 text-sm">{project.description}</p>
                <div className="flex flex-wrap gap-1">
                    {project.technologies.map((technology) => (
                        <span
                            key={technology}
                            className="bg-cerulean-500/20 text-cerulean-700/90 rounded-xl px-2 py-1 text-sm"
                        >
                            {technology}
                        </span>
                    ))}
                </div>
                <div className="flex justify-start gap-2">
                    {project.url && (
                        <a
                            href={project.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="underline-transition text-green-700/90 after:bg-green-700/90"
                            title={`Visit ${project.title}`}
                        >
                            <span className="flex items-center gap-1">
                                <IconExternalLink className="h-4 w-4" />
                                Visit
                            </span>
                        </a>
                    )}
                    {project.viewSourceUrl && (
                        <a
                            href={project.viewSourceUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="underline-transition text-green-700/90 after:bg-green-700/90"
                            title={`View source code of ${project.title}`}
                        >
                            <span className="flex items-center gap-1">
                                <IconBrandGithub className="h-4 w-4" />
                                Source
                            </span>
                        </a>
                    )}
                </div>
            </div>
        </div>
    )
}

export const BlogCard = ({ article }: { article: Article }): ReactElement => {
    return (
        <div className="border-silver-700/50 hover:border-silver-700/70 flex flex-col rounded-lg border p-4 text-left shadow-xs transition duration-300 hover:scale-[1.01] hover:shadow-lg">
            <div className="text-silver-500 mb-2 flex items-center space-x-1 text-xs">
                <span>
                    {new Date(article.date).toLocaleDateString(undefined, {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric',
                    })}
                </span>
            </div>
            <NavLink
                to={`/blog/${article.id}`}
                className="h4 text-silver-900/90 text-lg font-semibold transition-colors duration-300 hover:text-green-700/90"
            >
                {article.title}
            </NavLink>
            <p className="text-silver-700/70 mt-1 text-sm">{article.description}</p>
            <NavLink
                to={`/blog/${article.id}`}
                className="group mt-2 flex items-center text-sm font-semibold text-green-700/90 transition-colors duration-300 hover:text-green-900/70"
            >
                Read more
                <IconArrowRight className="group-hover:animate-bounce-x ml-1 h-4 w-4" />
            </NavLink>
        </div>
    )
}
