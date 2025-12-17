import { ReactElement } from 'react'
import { date2Period } from '@/lib/utils'

import { IconCalendar, IconMapPin } from '@tabler/icons-react'

import { Experience } from '@/data/experiences'

export const ExperienceTimeline = ({ experience, isLast }: { experience: Experience; isLast?: boolean }): ReactElement => {
    return (
        <div className="relative flex gap-4">
            <div className="relative w-3 shrink-0">
                {!isLast && <div className="bg-silver-700/20 absolute top-1.5 left-1/2 h-full w-0.5 -translate-x-1/2" />}
                <div className="relative z-10 mt-1.5 h-3 w-3 rounded-full bg-green-400 ring-4 ring-green-500/20" />
            </div>

            <div className="flex-1 pb-8">
                <div className="text-silver-900/90 text-base font-semibold">{experience.company}</div>
                <div className="text-silver-700/80 mt-1 text-sm">{experience.position}</div>
                <div className="text-silver-700/60 mt-2 flex flex-wrap items-center gap-x-3 gap-y-1 text-xs">
                    <div className="flex items-center gap-1">
                        <IconCalendar className="h-3.5 w-3.5" />
                        <span>
                            {date2Period(experience.startDate, true)} -{' '}
                            {experience.endDate ? date2Period(experience.endDate, true) : <b>Present</b>}
                        </span>
                    </div>
                    {experience.location && (
                        <div className="flex items-center gap-1">
                            <IconMapPin className="h-3.5 w-3.5" />
                            <span>{experience.location}</span>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}
