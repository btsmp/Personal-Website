
import { BsArrowRight } from 'react-icons/bs'
import Image from 'next/image'

export function CardProject({ data }) {

  const imgURL = data.project_cover

  return (
    <div className='rounded-xl md:w-[500px] overflow-hidden border-[#0A0A0A] border-2' >
      <div className='relative'>


        <Image src={imgURL} width={750} height={349} placeholder='blur' blurDataURL={imgURL} objectFit="cover" />
        <div className='bg-gradient-to-b from-transparent to-white w-full h-full absolute top-0'></div>
        <h1 className='absolute w-full text-center bottom-0 p-3 font-bold  md:text-3xl '>{data.project_title}</h1>
      </div>
      <div className='py-4 px-6'>

        <atricle>
          <strong>Sobre o projeto:</strong>
          <p className='text-justify mt-2'>{data.project_description}</p>
        </atricle>
        <article className='py-3 border-dashed border-b-black border-b'>
          {
            data.project_techs &&
            <>
              <strong >Tecnologias utilizadas:</strong>
              <p className='mt-2'>{data.project_techs}</p>
            </>
          }
        </article>

        <div className='w-full text-center pt-2'>

          <a href={data.project_repo} target='_blank' rel="noreferrer" className='flex items-center justify-center gap-2 cursor-pointer font-medium hover:translate-x-2 duration-300'>Saiba mais <BsArrowRight /></a>
        </div>
      </div>
    </div>
  )
}