import { ReactElement } from 'react'
import works from '@/data/works'
import { ProjectsCard } from '@/components/Cards'

export const Works = (): ReactElement => {
    return (
        <div className="space-y-16">
            <section className="container flex flex-col items-center">
                <h3 className="text-silver-900/90 w-full text-lg font-bold underline decoration-green-500/50 decoration-4 underline-offset-[6px]">
                    Works
                </h3>
                <div className="mt-6 grid w-full grid-cols-1 gap-x-6 gap-y-10 md:grid-cols-2">
                    {works &&
                        works.map((project, index) => <ProjectsCard key={index} project={project} priority={index < 3} />)}
                </div>
            </section>
        </div>
    )
}
