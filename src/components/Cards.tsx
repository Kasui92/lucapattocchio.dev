import { ReactElement } from 'react'

import { IconArrowRight } from '@tabler/icons-react'

import { Work } from '@/data/works'
import { NavLink } from 'react-router'
import { Article } from '@/data/articles'

export const ProjectsCard = ({ project, priority = false }: { project: Work; priority?: boolean }): ReactElement => {
    return (
        <a
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col transition-transform duration-300 hover:scale-[1.02]"
            title={project.title}
        >
            <div className="relative aspect-video w-full overflow-hidden rounded-lg">
                <img
                    src={project.image}
                    alt={project.title}
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                    loading={priority ? 'eager' : 'lazy'}
                    fetchPriority={priority ? 'high' : 'low'}
                />
            </div>

            <div className="mt-3 flex flex-col gap-1">
                <h4 className="text-silver-900/90 text-center text-base font-semibold transition-colors group-hover:text-green-700/90">
                    {project.title}
                </h4>
                <p className="text-silver-700/70 text-center text-sm">{project.description}</p>
            </div>
        </a>
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
