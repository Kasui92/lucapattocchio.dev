import { ReactElement } from 'react'
import { Expercience } from '../data/experiences'
import { CalendarIcon, MapPinIcon } from '@heroicons/react/24/outline'
import { date2Period } from '../lib/utils'

export const ExperienceCard = ({ experience }: { experience: Expercience }): ReactElement => {
    return (
        <div className="flex w-full flex-col rounded-lg border border-silver-700/50 px-4 py-2 transition duration-300 hover:scale-[1.01] hover:border-silver-700/70">
            <div className="flex w-full space-x-2 font-semibold text-silver-700/90">
                <span>{experience.position}</span>
                <span className="text-green-500/70">@</span>
                <a
                    href={experience.companyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline-transition after:bg-silver-700/90"
                >
                    {experience.company}
                </a>
            </div>
            <div className="flex w-full flex-row items-center space-x-2 text-sm text-silver-700/70">
                <div className="flex items-center space-x-1">
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
            </div>
        </div>
    )
}
