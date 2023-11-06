import { ReactElement } from 'react'

/**
 * About
 * @constructor
 */
const Projects = (): ReactElement => {
    return (
        <section className={`relative py-32`} id={`About`}>
            <div className={`mx-auto w-[80%] xl:w-7/12`}>
                <h2 className={`mb-20 text-center text-4xl font-semibold uppercase tracking-wider xl:text-7xl`}>
                    <span className={`border-b-4 border-violet-500`}>Projects</span>
                </h2>
                <div className={`flex flex-col gap-24 xl:flex-row`}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin feugiat quam quis est laoreet, sed
                    accumsan lacus porttitor. Cras iaculis posuere sapien, quis cursus tellus mattis non. Morbi in eros quam.
                    Morbi efficitur ex eu erat volutpat, eget scelerisque lectus sodales. Nam pretium ultrices quam, nec
                    auctor est ultricies et. Cras sodales sed libero quis dignissim. Fusce in fermentum augue, eget ultricies
                    orci. Quisque dui nibh, vulputate ut lobortis ut, fermentum ut nibh. Quisque tincidunt commodo nisi non
                    ultrices. In quis lorem odio. Donec ultricies lacus ut elit placerat, ac rhoncus metus tincidunt.
                </div>
            </div>
        </section>
    )
}

export default Projects
