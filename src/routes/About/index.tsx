import { ReactElement } from 'react'

export const About = (): ReactElement => {
    return (
        <div className="space-y-16">
            <div className="flex flex-col items-center">
                <h3 className="w-full text-lg font-bold text-silver-900/90 underline decoration-green-500/50 decoration-4 underline-offset-[6px]">
                    About me
                </h3>
                <div className="mt-4">
                    <div className={`text-md space-y-4 text-justify leading-7 text-silver-700/90`}>
                        <p>
                            My curiosity about technology and the web was sparked in my childhood, back when I got my hands
                            on my first <span className={`font-semibold text-yellow-300/70`}>Game Boy</span>, and it’s been
                            burning ever since, fueled by a desire to uncover the{' '}
                            <span className={`italic text-purple-500/70`}>magic</span> behind it. During the rise of online
                            forums, I took my first steps into the world of programming, breaking and fixing elements I
                            barely understood. Fascinated by what this realm had to offer, I decided to dive deeper into a
                            path that would allow me to be part of it.
                        </p>
                        <p>
                            At twenty, I realized this passion could become something more. I consolidated what I had learned
                            and ventured into the working world, pursuing{' '}
                            <span className={`font-semibold text-cerulean`}>web development</span> professionally—no longer
                            just as a self-taught tinkerer. I believe collaboration is a powerful forge for crafting
                            innovative solutions and self-improvement, both in my skills and personal growth.{' '}
                            <i>I'm always ready for new adventures.</i>
                        </p>
                        <p>
                            I love getting lost on trails and going for <span className={`text-green`}>long walks</span>,
                            especially when surrounded by nature, with a backpack always at the ready. In my free time, I
                            enjoy playing board games and role-playing games—
                            <span className={`italic line-through`}>but mostly, I end up accumulating side projects</span>.
                        </p>
                    </div>
                </div>
            </div>

            <div className="flex flex-col items-center">
                <h3 className="w-full text-lg font-bold text-silver-900/90 underline decoration-green-500/50 decoration-4 underline-offset-[6px]">
                    Experience
                </h3>
                <div className="mt-4">
                    <div className={`text-md space-y-4 text-justify leading-7 text-silver-700/90`}>
                        <p>
                            Laboris in nulla irure magna enim eiusmod enim dolor. Laborum deserunt est enim et ut.
                            Exercitation consequat consequat adipisicing non cillum ad id eiusmod consectetur laboris
                            pariatur cupidatat non. Consequat dolore officia cillum mollit pariatur nulla elit. Id sunt id
                            dolor sunt exercitation reprehenderit sint officia dolore aliqua et nulla minim consectetur.
                            Proident irure pariatur enim excepteur et sit sunt ex aute aliqua velit laboris incididunt
                            nostrud. Duis quis mollit occaecat adipisicing deserunt incididunt commodo. Sit adipisicing amet
                            ea ullamco commodo sint minim ut labore excepteur dolor eiusmod nulla. Amet fugiat exercitation
                            eu eiusmod anim. Tempor labore aliqua esse proident dolore ullamco elit excepteur qui eiusmod
                            labore fugiat pariatur. Excepteur et culpa esse sint elit laboris proident enim et mollit. Est
                            anim velit culpa voluptate est deserunt Lorem aute aliquip exercitation est incididunt. Esse amet
                            irure minim duis deserunt aliqua ad ex culpa anim enim laborum est. Id cillum deserunt id labore
                            sunt mollit duis nisi. Dolore Lorem occaecat ipsum officia ullamco veniam nulla enim. Excepteur
                            pariatur est fugiat ea adipisicing cillum excepteur ipsum est veniam est est. Irure aute amet eu
                            ut ipsum ipsum.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}
