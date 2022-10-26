import pokedexImg from '../assets/pokedex.png'
import { BsArrowRight } from 'react-icons/bs'
import Image from 'next/image'

export function CardProject() {
  return (
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
        <article className='py-3 border-dashed border-b-black border-b'>
          <strong >Tecnologias utilizadas:</strong>
          <p className='text-justify mt-2'>React, ReactHooks, ContextAPI, Styled-Components</p>
        </article>

        <div className='w-full text-center pt-2'>

          <a href="" className='flex items-center justify-center gap-2 cursor-pointer font-medium hover:translate-x-2 duration-300'>Saiba mais <BsArrowRight /></a>
        </div>
      </div>
    </div>
  )
}