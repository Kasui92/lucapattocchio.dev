export interface Expercience {
    position: string
    company: string
    companyUrl?: string
    workExperience?: string
    startDate: string
    endDate?: string
    location?: string
    description?: string
}

export const experiences: Expercience[] = [
    {
        position: 'Full Stack Developer',
        company: 'Altuofianco',
        companyUrl: 'https://www.altuofianco.it/',
        workExperience: 'Employee',
        startDate: '2015-06-01',
        location: 'Modena, Italy',
    },
    {
        position: 'Embedded System Analyst',
        company: 'Autron',
        companyUrl: 'http://www.autron.net/',
        workExperience: 'Internship',
        startDate: '2014-09-01',
        endDate: '2014-12-31',
        location: 'Mirandola, Italy',
    },
    {
        position: 'Embedded System Analyst',
        company: 'Techimp Impianti',
        companyUrl: 'https://www.techimpimpianti.it/',
        workExperience: 'Internship',
        startDate: '2014-06-01',
        endDate: '2014-07-31',
        location: 'Zola Predosa, Italy',
    },
]
