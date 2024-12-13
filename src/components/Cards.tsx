import { ReactElement } from 'react'
import { date2Period } from '../lib/utils'

import { ArrowTopRightOnSquareIcon, BriefcaseIcon, CalendarIcon, MapPinIcon } from '@heroicons/react/24/outline'
import githubIcon from '../assets/images/socials/github.svg'

import { Expercience } from '../data/experiences'
import { Project } from '../data/projects'

export const ExperienceCard = ({ experience }: { experience: Expercience }): ReactElement => {
    return (
        <div className="flex w-full flex-col rounded-lg border border-silver-700/50 px-4 py-2 shadow-sm transition duration-300 hover:scale-[1.01] hover:border-silver-700/70 hover:shadow-lg">
            <div className="flex w-full flex-wrap gap-x-1 font-semibold text-silver-700/90 lg:space-x-1">
                <div className="whitespace-nowrap">
                    {experience.position}
                    <span className="text-green-500/70"> @</span>
                </div>
                <div className="whitespace-nowrap">
                    <a
                        href={experience.companyUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        title={`Visit ${experience.company}`}
                        className="underline-transition after:bg-silver-700/90"
                    >
                        {experience.company}
                    </a>
                </div>
            </div>
            <div className="flex w-full flex-col gap-x-2 text-sm text-silver-700/70">
                <div className="flex space-x-1">
                    <CalendarIcon className="h-4 w-4" />
                    <span>{date2Period(experience.startDate)}</span>
                    <span>-</span>
                    {experience.endDate ? <span>{date2Period(experience.endDate)}</span> : <span>Present</span>}
                </div>
                {experience.location && (
                    <div className="flex items-center space-x-1">
                        <MapPinIcon className="h-4 w-4" />
                        <span>{experience.location}</span>
                    </div>
                )}
                {experience.workExperience && (
                    <div className="flex items-center space-x-1">
                        <BriefcaseIcon className="h-4 w-4" />
                        <span className="font-semibold">{experience.workExperience}</span>
                    </div>
                )}
                {experience?.description && <div className="mt-2 flex text-silver-700/70">{experience.description}</div>}
            </div>
        </div>
    )
}

export const ProjectsCard = ({ project }: { project: Project }): ReactElement => {
    return (
        <div className="group flex h-full flex-col gap-4 rounded-lg border border-silver-700/50 p-0 shadow-sm transition duration-300 hover:scale-[1.01] hover:border-silver-700/70 hover:shadow-lg md:flex-row md:p-4">
            <div className="relative h-full w-full md:w-48">
                <img
                    src={project.image}
                    alt={project.title}
                    className="h-36 w-full rounded-t-lg object-cover md:h-full md:rounded-lg"
                />
            </div>
            <div className="flex flex-1 flex-col gap-2 p-4 md:p-0">
                <h4 className="text-silver-900/90 group-hover:text-green-500/90">{project.title}</h4>
                <p className="text-sm text-silver-700/70">{project.description}</p>
                <div className="flex flex-wrap gap-1">
                    {project.technologies.map((technology) => (
                        <span
                            key={technology}
                            className="rounded-xl bg-cerulean-500/20 px-2 py-1 text-sm text-cerulean-700/90"
                        >
                            {technology}
                        </span>
                    ))}
                </div>
                <div className="flex justify-between gap-2 md:justify-start">
                    <a
                        href={project.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-green-500/90 hover:underline"
                    >
                        <span className="flex items-center gap-1">
                            <ArrowTopRightOnSquareIcon className="h-4 w-4" />
                            Visit
                        </span>
                    </a>
                    {project.viewSourceUrl && (
                        <a
                            href={project.viewSourceUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-green-500/90 hover:underline"
                        >
                            <span className="flex items-center gap-1">
                                <img src={githubIcon} alt="GitHub" className="h-4 w-4" />
                                Source
                            </span>
                        </a>
                    )}
                </div>
            </div>
        </div>
    )
}
