import { SectionCardsTechs } from '../components/SectionCardsTechs'
import { Apresentation } from '../components/Apresetation'
import { SectionWhite } from '../components/SectionWhite'
import { CardProject } from '../components/CardProject'
import { MeAndSocial } from '../components/MeAndSocial'
import { Section } from '../components/Section'
import { Footer } from '../components/Footer'
import { Header } from '../components/Header'
import { FetchData } from '../lib/NotionApi'
import { Title } from '../components/Title'
import { Fade } from 'react-awesome-reveal'
import { About } from '../components/About'

import Image from 'next/image'
import Head from 'next/head'

const Home = ({ projects, about }) => {
  return (
    <div className="min-h-screen font-sans bg-[#0A0A0A] text-white overflow-x-hidden">
      <Head>
        <title>{about.name}</title>
        <link rel="icon" href="/codefolder.ico" />
      </Head>

      <Header />
      <main className='flex flex-col py-14 items-center justify-center w-full h-full gap-32'>
        <section
          id='home'
          className='flex flex-col py-[30vh] h-screen items-center justify-center w-full relative'
        >

          <Apresentation name={about.name} />
          <div className='absolute -z-[-2] opacity-30 md:right-28 md:w-[400px] md:h-[400px] w-64 h-64'>
            <Image
              src='/programming.svg'
              alt="Ilustração de uma pessoa no computador"
              width={400}
              height={400}
            />
          </div>

        </section>
        <SectionWhite classes='relative' id='about'>

          <Fade triggerOnce>
            <About about={about.about} />
            <MeAndSocial />
          </Fade>

        </SectionWhite>


        <Section className='relative min-h-screen' id='techs'>
          <Title title='Tecnologias dominadas' />
          <SectionCardsTechs />
        </Section>

        <Section
          id='projects'
          className='bg-white w-full p-8 text-[#0A0A0A] relative min-h-screen pt-16'
        >
          <Title title='Projetos' />
          <div className='flex flex-wrap gap-16 justify-center items-baseline'>
            {projects && projects.map(project => (
              <CardProject key={project.project_id} data={project.data} />
            ))}
          </div>
        </Section>
      </main>

      <Footer name={about.footer} />

    </div>
  )
}

const fetcher = new FetchData()

export async function getStaticProps() {
  const projects = await fetcher.getProjects()
  const about = await fetcher.getAbout()


  return {
    props: {
      projects,
      about
    },
    revalidate: 60 * 60  // 1 hour
  }
}

export default Home