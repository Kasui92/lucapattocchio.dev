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
        description: `Throughout my experience as a Full Stack Developer, I have worked on the development and maintenance of the company's CRM, managing all stages of the process—from design to deployment on dedicated systems. I have gained expertise in DevOps, handling deployment pipelines and managing Git repositories. Additionally, I have provided support to the IT department and Help Desk, assisting with the management of IT terminals, configuration of corporate emails, and troubleshooting issues related to Microsoft Office and Microsoft Business suite.`,
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
