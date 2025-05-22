import { ReactElement } from 'react'
import { articles } from '../../data/articles'
import { BlogCard } from '../../components/Cards'

export const Blog = (): ReactElement => {
    // Sort articles by date in descending order
    const sortedArticles = articles.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())

    return (
        <div className="space-y-16">
            <section className="container flex flex-col items-center">
                <h3 className="text-silver-900/90 w-full text-lg font-bold underline decoration-green-500/50 decoration-4 underline-offset-[6px]">
                    Blog
                </h3>
                <p className="text-silver-700/70 text-md mt-4 text-justify leading-7">
                    <span className="font-semibold">Well, yes!</span> <br />
                    I've decided to open a space to share my abstruse reflections and useless thoughts, just to contribute in
                    a completely insignificant way to the web chaos. <br />
                    After all, everyone has a blog nowadays, <span className="italic">so why not me?</span>
                </p>
                <div className="mt-6 grid w-full grid-cols-1 gap-4">
                    {sortedArticles && sortedArticles.map((article, index) => <BlogCard key={index} article={article} />)}
                </div>
            </section>
        </div>
    )
}
