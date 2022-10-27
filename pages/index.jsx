import { SectionCardsTechs } from '../components/SectionCardsTechs'
import { Apresentation } from '../components/Apresetation'
import { SectionWhite } from '../components/SectionWhite'
import { CardProject } from '../components/CardProject'
import { MeAndSocial } from '../components/MeAndSocial'
import { Section } from '../components/Section'
import StrapiClient from '../lib/strapiClient'
import { Footer } from '../components/Footer'
import { Header } from '../components/Header'
import { Title } from '../components/Title'
import { Fade } from 'react-awesome-reveal'
import { About } from '../components/About'
import Image from 'next/image'
import Head from 'next/head'

const Home = ({ projects, about }) => {
  console.log(about)

  return (
    <div className="min-h-screen font-sans bg-[#0A0A0A] text-white overflow-x-hidden">
      <Head>
        <title>Bruno Sampaio</title>
        <link rel="icon" href="/codefolder.ico" />
      </Head>

      <Header />
      <main className='flex flex-col py-14  items-center justify-center w-full h-full gap-32'>
        <section
          id='home'
          className='flex flex-col py-[30vh]  items-center justify-center w-full relative'
        >

          <Apresentation />
          <div className='absolute -z-[-2] opacity-30 md:right-28 md:w-[400px] md:h-[400px] w-64 h-64'>
            <Image
              src='/programming.svg'
              alt="Ilustração de uma pessoa no computador"
              width={400}
              height={400}
            />
          </div>

        </section>
        <SectionWhite classes='relative'>
          <div id='about' className='-z-10-1 absolute -top-36 '></div>
          <Fade triggerOnce>
            <About about='eu' />
            <MeAndSocial />
          </Fade>

        </SectionWhite>


        <Section className='relative'>
          <div id='techs' className='-z-10-1 absolute -top-36 '></div>
          <Title title='Tecnologias dominadas' />
          <SectionCardsTechs />
        </Section>

        <Section className='bg-white w-full h-full p-8 text-[#0A0A0A] relative'>
          <div id='projects' className='-z-10-1 absolute -top-36 '></div>
          <Title title='Projetos' />
          <div className='flex flex-wrap gap-16 justify-center items-baseline'>
            {projects.map(project => (
              <CardProject key={project.id} data={project.attributes} />
            ))}
          </div>
        </Section>
      </main>

      <Footer />

    </div>
  )
}

const client = new StrapiClient()

export async function getStaticProps() {
  const projects = await client.fetchData('/api/projects?populate=*')
  const about = await client.fetchData('/api/about')
  console.log(projects)
  console.log('txou')

  return {
    props: {
      projects: projects.data,
      about: about.data
    }, // will be passed to the page component as props
    revalidate: 60 * 60 * 24 // 1 day
  }
}


export default Home