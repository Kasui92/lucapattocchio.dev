import { ReactElement } from 'react'
import { Trans, useTranslation } from 'react-i18next'
import TechnologyTag from '@/components/TechnologyTag'

import stack from '@/data/stack'

import aboutMe from '@/assets/images/aboutme.jpg'
import aboutMeXL from '@/assets/images/aboutme-xl.jpg'

/**
 * About
 * @constructor
 */
const About = (): ReactElement => {
    const { t } = useTranslation()

    return (
        <section className={`relative py-32`} id={`about`}>
            <div className={`mx-auto max-w-6xl px-8`}>
                <h2 className={`mb-20 text-center text-4xl font-semibold uppercase tracking-wider xl:text-7xl`}>
                    <span className={`border-b-4 border-violet-500`}>{t(`about.title`)}</span>
                </h2>
                <div className={`flex flex-col gap-24 xl:flex-row`}>
                    <div className={`order-2 mx-auto w-5/6 grow md:w-4/6 xl:w-1/2`}>
                        <div className={`flex flex-col gap-6 text-center leading-7 md:text-left`}>
                            <Trans i18nKey="about.description" components={{ p: <p />, span: <span />, i: <i /> }} />
                        </div>
                        <div className={`mt-20 md:mt-6`}>
                            <h3 className={`mb-3 text-2xl font-semibold tracking-wide`}>{t('about.techSkill.title')}</h3>
                            {stack.map((technology, index) => (
                                <TechnologyTag icon={technology.icon} label={technology.label} key={index} />
                            ))}
                        </div>
                    </div>
                    <div className={`order-1 grow`}>
                        <img
                            className={`mx-auto aspect-square h-[350px] w-[350px] rotate-3 rounded-2xl object-cover shadow xl:hidden`}
                            src={aboutMe}
                            alt={`Luca Pattocchio`}
                        />
                        <img
                            className={`hidden aspect-square h-[520px] w-[390px] rotate-3 rounded-2xl object-cover shadow xl:block`}
                            src={aboutMeXL}
                            alt={`Luca Pattocchio`}
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About
