import { AiOutlineLinkedin, AiFillGithub, AiOutlineWhatsApp, AiOutlineDownload } from 'react-icons/ai'
import { Apresentation } from '../components/Apresetation'
import { Profile } from '../components/Profile'
import { Header } from '../components/Header'
import Image from 'next/image'
import Head from 'next/head'
import { SectionCardsTechs } from '../components/SectionCardsTechs'
import { Fade } from 'react-awesome-reveal'

const Home = () => {

  return (
    <div className="min-h-screen font-sans bg-[#0A0A0A] text-white overflow-x-hidden">
      <Head>
        <title>Bruno Sampaio</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <main className='flex flex-col py-14  items-center justify-center w-full h-full gap-32'>
        <section id='home' className='flex flex-col py-[30vh]  items-center justify-center w-full relative'>
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
        <section id="about" className='bg-white text-[#0A0A0A] w-full flex flex-col-reverse md:flex-row items-center  justify-center sm:justify-between gap-16 px-0 sm:px-36 py-28'>
          <Fade triggerOnce>
            <Fade triggerOnce direction='left '>
              <div className='md:w-[50vw] px-7 sm:px-0'>
                <h1 className='font-bold text-4xl mb-10 mt-[-30px]'>Sobre Bruno</h1>
                <p className=' text-lg mt-4 text-justify'>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas et tempus sapien. Maecenas cursus facilisis massa eu porta. Ut porta enim laoreet aliquam condimentum. In vestibulum dolor sit amet nibh maximus tincidunt. Vestibulum tincidunt arcu in urna vulputate ultricies. Sed pretium tellus sit amet ligula tempor tincidunt. Vivamus fringilla convallis nisl, ut pharetra libero feugiat a. Nunc non tempor nulla. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas et tempus sapien. Maecenas cursus facilisis massa eu porta. Ut porta enim laoreet aliquam condimentum. In vestibulum dolor sit amet nibh maximus tincidunt. Vestibulum tincidunt arcu in urna vulputate ultricies. Sed pretium tellus sit amet ligula tempor tincidunt. Vivamus fringilla convallis nisl, ut pharetra libero feugiat a. Nunc non tempor nulla.
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas et tempus sapien. Maecenas cursus facilisis massa eu porta. Ut porta enim laoreet aliquam condimentum. In vestibulum dolor sit amet nibh maximus tincidunt. Vestibulum tincidunt arcu in urna vulputate ultricies. Sed pretium tellus sit amet ligula tempor tincidunt. Vivamus fringilla convallis nisl, ut pharetra libero feugiat a. Nunc non tempor nulla. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas et tempus sapien. Maecenas cursus facilisis massa eu porta. Ut porta enim laoreet aliquam condimentum. In vestibulum dolor sit amet nibh maximus tincidunt. Vestibulum tincidunt arcu in urna vulputate ultricies. Sed pretium tellus sit amet ligula tempor tincidunt. Vivamus fringilla convallis nisl, ut pharetra libero feugiat a. Nunc non tempor nulla.
                </p>
              </div>
            </Fade>
            <div>
              <Fade triggerOnce direction='right'>
                <Profile />
                <div className='text-center p-7 '>
                  <ul className='flex justify-between items-center  '>
                    <li><a href="https://www.linkedin.com/in/brunosmp/"><AiOutlineLinkedin size={30} opacity={0.9} /></a></li>
                    <li><a href="https://github.com/btsmp"><AiFillGithub size={30} opacity={0.9} /></a></li>
                    <li><a href="https://wa.me/5582993191313"><AiOutlineWhatsApp size={30} opacity={0.9} /></a></li>
                  </ul>
                  <a
                    href='/DesenvolvedorBruno.pdf' download={true}
                    className=' flex items-center justify-center gap-2 p-2 bg-[#0A0A0A] hover:opacity-95 font-medium text-white rounded-md my-5 w-full cursor-pointer'>
                    Baixar CV <AiOutlineDownload />
                  </a>

                </div>
              </Fade>
            </div>
          </Fade>
        </section>

        <section id="techs" className='mt-9 flex justify-center items-center flex-col'>
          <h1 className=' font-bold text-xl md:text-6xl mb-10 text-center only:'>Tecnologias dominadas</h1>
          <SectionCardsTechs />

        </section>
      </main>

    </div >
  )
}

export default Home