import { createElement, lazy, ReactElement, Suspense, useMemo } from 'react'
import { useParams, Link } from 'react-router'
import { ErrorBoundary } from 'react-error-boundary'
import { articles } from '../../data/articles'

// Module-level cache for lazy components
const mdxComponentCache = new Map<string, React.LazyExoticComponent<React.ComponentType>>()

function getLazyMDXComponent(slug: string) {
    if (!mdxComponentCache.has(slug)) {
        mdxComponentCache.set(
            slug,
            lazy(() => import(`../../../articles/${slug}.mdx`)),
        )
    }
    return mdxComponentCache.get(slug)!
}

interface ArticleNotFoundProps {
    error: Error
    resetErrorBoundary: () => void
    status?: '404' | '500'
}

function ArticleError({ error, resetErrorBoundary, status = '500' }: ArticleNotFoundProps) {
    const messages = {
        '404': {
            title: 'Page not found',
            description: "The article you're looking for doesn't exist.",
        },
        '500': {
            title: 'Something went wrong',
            description: "We couldn't load the article.",
        },
    }

    const { title, description } = messages[status]

    return (
        <div className="my-24 flex flex-col items-center justify-center space-y-8">
            <div className="text-center">
                <h1 className="text-silver-900/90 text-4xl font-semibold">{status}</h1>
                <h2 className="text-silver-700/50 mt-2 text-xl font-medium">Oops! {title}</h2>
                <p className="text-silver-700/70 mt-4 italic">{error.message || description}</p>
            </div>

            <div className="flex flex-col items-center space-y-6">
                <div className="flex flex-wrap justify-center gap-4">
                    <p className="text-silver-700/70">
                        {'You can '}
                        <Link
                            to="/blog"
                            className="underline-transition font-semibold text-green-700/90 after:bg-green-700/90"
                        >
                            browse all articles
                        </Link>
                        {' or '}
                        <button
                            onClick={resetErrorBoundary}
                            className="underline-transition text-cerulean-700/90 font-semibold after:bg-green-700/90"
                        >
                            try again
                        </button>
                        .
                    </p>
                </div>
            </div>
        </div>
    )
}

function MDXContent({ slug }: { slug: string }) {
    const LazyComponent = getLazyMDXComponent(slug)
    return createElement(LazyComponent)
}

function MDXRenderer({ slug }: { slug: string }) {
    const article = useMemo(() => {
        return articles.find((article) => article.id === slug)
    }, [slug])

    if (!article) {
        console.warn(`Article metadata for "${slug}" not found, but trying to load MDX file anyway`)
    }

    return (
        <ErrorBoundary
            FallbackComponent={(props) => <ArticleError {...props} status="500" />}
            resetKeys={[slug]}
            onError={(error) => {
                console.error(`Failed to load article: ${slug}`, error)
            }}
        >
            <article className="prose prose-invert prose-silver">
                {article?.date && (
                    <time dateTime={article.date} className="mb-4 block text-center text-sm text-gray-500">
                        {new Date(article.date).toLocaleDateString('en-En', {
                            year: 'numeric',
                            month: 'long',
                            day: 'numeric',
                        })}
                    </time>
                )}
                {article?.title && (
                    <h1 className="mb-2 text-center text-3xl font-bold sm:text-4xl lg:mb-4 lg:text-5xl">{article.title}</h1>
                )}
                {article?.description && (
                    <p className="text-silver-600/70 mt-0 mb-6 text-center text-base italic">{article.description}</p>
                )}
                <Suspense fallback={<div className="loading-ellipsis py-8 italic">Loading</div>}>
                    <MDXContent slug={slug} />
                </Suspense>
            </article>
        </ErrorBoundary>
    )
}

export const Articles = (): ReactElement => {
    const { articleId } = useParams()

    const articleExists = useMemo(() => {
        if (!articleId) return false
        return articles.some((article) => article.id === articleId)
    }, [articleId])

    return (
        <div className="space-y-16">
            <section className="container flex flex-col items-center">
                {!articleId ? (
                    <ArticleError error={new Error('No article selected')} resetErrorBoundary={() => {}} status="404" />
                ) : !articleExists ? (
                    <ArticleError
                        error={new Error(`The article "${articleId}" does not exist`)}
                        resetErrorBoundary={() => {}}
                        status="404"
                    />
                ) : (
                    <MDXRenderer slug={articleId} />
                )}
            </section>
        </div>
    )
}
