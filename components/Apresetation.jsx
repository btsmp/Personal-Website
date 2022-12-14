import { Typewriter } from 'react-simple-typewriter'
import { Fade } from 'react-awesome-reveal'
export function Apresentation({ name }) {
  return (
    <div className='flex flex-col items-center z-10 opacity-100 -mt-24'>
      <Fade cascade duration={1500} delay={200}>
        <h1 className='font-bold md:text-6xl text-2xl'>Olá, eu sou {name}</h1>
        <p className='md:text-4xl md:w-[500px] w-[220px]'>
          Desenvolvedor web
          <span className='text-[#00b4d8] font-medium '>
            {' '}
            <span className='hidden'>Frontend</span>
            <Typewriter
              words={['Front-end', 'Back-end', 'FullStack']}
              loop={true}
            />
          </span>
        </p>
      </Fade>
    </div>
  )
}