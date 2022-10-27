import { Fade } from "react-awesome-reveal";

export function About({ about }) {
  return (
    <Fade triggerOnce direction='left '>
      <div className='md:w-[50vw] px-7 sm:px-0'>
        <h1 className='font-bold text-4xl mb-10 mt-[-30px]'>Sobre Bruno</h1>
        <p className=' text-lg mt-4 text-justify'>
          {about}
        </p>
      </div>
    </Fade>
  )
}