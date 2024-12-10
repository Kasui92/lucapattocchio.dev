import { ReactElement } from 'react'
import { Expercience } from '../data/experiences'
import { BriefcaseIcon, CalendarIcon, MapPinIcon } from '@heroicons/react/24/outline'
import { date2Period } from '../lib/utils'

export const ExperienceCard = ({ experience }: { experience: Expercience }): ReactElement => {
    return (
        <div className="flex w-full flex-col rounded-lg border border-silver-700/50 px-4 py-2 transition duration-300 hover:scale-[1.01] hover:border-silver-700/70">
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
