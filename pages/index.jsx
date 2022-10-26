import { SectionCardsTechs } from '../components/SectionCardsTechs'
import { Apresentation } from '../components/Apresetation'
import { SectionWhite } from '../components/SectionWhite'
import { MeAndSocial } from '../components/MeAndSocial'
import { Section } from '../components/Section'
import { Header } from '../components/Header'
import { Title } from '../components/Title'
import { Fade } from 'react-awesome-reveal'
import { About } from '../components/About'
import Image from 'next/image'
import Head from 'next/head'
import pokedexImg from '../assets/pokedex.png'
import { BsArrowRight } from 'react-icons/bs'

const Home = () => {

  return (
    <div className="min-h-screen font-sans bg-[#0A0A0A] text-white overflow-x-hidden">
      <Head>
        <title>Bruno Sampaio</title>
        <link rel="icon" href="/ico.ico" />
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
        <SectionWhite id='about'>
          <Fade triggerOnce>
            <About />
            <MeAndSocial />
          </Fade>

        </SectionWhite>


        <Section id='techs'>
          <Title title='Tecnologias dominadas' />
          <SectionCardsTechs />
        </Section>

        <Section id='projects' className='bg-white w-full h-full p-8 text-[#0A0A0A]'>
          <Title title='Projetos' />
          <div>
            <div className='rounded-xl md:w-[500px] overflow-hidden border-[#0A0A0A] border-2' >
              <div className='relative'>
                <Image src={pokedexImg} />
                <div className='bg-gradient-to-b from-transparent to-white w-full h-full absolute top-0'></div>
                <h1 className='absolute w-full text-center bottom-0 p-3 font-bold  md:text-3xl '>Pokédex</h1>
              </div>
              <div className='py-4 px-6'>

                <atricle>
                  <strong>Sobre o projeto:</strong>
                  <p className='text-justify mt-2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas et tempus sapien. Maecenas cursus facilisis massa eu porta. Ut porta enim laoreet aliquam condimentum. In vestibulum dolor sit amet nibh maximus tincidunt. Vestibulum tincidunt arcu in urna vulputate ultricies. Sed pretium tellus sit amet ligula tempor tincidunt. Vivamus fringilla convallis nisl, ut pharetra libero feugiat a. Nunc non tempor nulla. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas et tempus sapien. Maecenas cursus facilisis massa eu porta. Ut porta enim laoreet aliquam condimentum. In vestibulum dolor sit amet nibh maximus tincidunt. Vestibulum tincidunt arcu in urna vulputate ultricies. Sed pretium tellus sit amet ligula tempor tincidunt. Vivamus fringilla convallis nisl, ut pharetra libero feugiat a. Nunc non tempor nulla.</p>
                </atricle>
                <article className='my-3'>
                  <strong >Tecnologias utilizadas:</strong>
                  <p className='text-justify mt-2'>React, ReactHooks, ContextAPI, Styled-Components</p>
                </article>

                <div className='w-full text-center'>

                  <a href="" className='flex items-center justify-center gap-2 cursor-pointer font-medium hover:translate-x-2 duration-300'>Saiba mais <BsArrowRight /></a>
                </div>
              </div>
            </div>
          </div>
        </Section>
      </main>

    </div>
  )
}

export default Home