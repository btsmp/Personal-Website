import { Typewriter } from 'react-simple-typewriter'

export function Apresentation() {
  return (
    <div className='flex flex-col items-center z-10'>
      <h1 className='font-bold md:text-6xl text-2xl'>Olá, eu sou Bruno Sampaio</h1>
      <p className='md:text-4xl md:w-[500px] w-[220px]'>
        Desenvolvedor web
        <span className='text-[#00b4d8] '>
          {' '}
          <span className='hidden'>Frontend</span>
          <Typewriter
            words={['Front-end', 'Back-end', 'FullStack']}
            loop={true}
          />
        </span>
      </p>
    </div>
  )
}