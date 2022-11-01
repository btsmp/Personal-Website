import { Fade } from "react-awesome-reveal";

export function Header() {
  return (
    <header
      className="flex font-medium sm:text-lg md:text-2xl text-xs items-center sm:px-20 px-10 justify-center border-b-[1px] border-[#141414] absolute w-full h-11 top-0 left-0"
    >
      <Fade>
        <ul className="flex items-center justify-center text-center w-full">
          <li className='hover:bg-white w-full h-full py-2 hover:text-[#0A0A0A] duration-300 cursor-pointer'>
            <a href="#home">Home</a>
          </li>
          <li className='hover:bg-white w-full h-full py-2 hover:text-[#0A0A0A] duration-300 cursor-pointer'>
            <a href="#about">Sobre</a>
          </li>
          <li className='hover:bg-white w-full h-full py-2 hover:text-[#0A0A0A] duration-300 cursor-pointer'>
            <a href="#techs">Techs</a>
          </li>
          <li className='hover:bg-white w-full h-full py-2 hover:text-[#0A0A0A] duration-300 cursor-pointer'>
            <a href="#projects">Projetos</a>
          </li>
        </ul>
      </Fade>
    </header>
  )
}