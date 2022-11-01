import { Fade } from "react-awesome-reveal";
import { AiFillGithub, AiOutlineDownload, AiOutlineLinkedin, AiOutlineWhatsApp } from "react-icons/ai";
import { Profile } from "./Profile";

export function MeAndSocial() {
  return (
    <Fade triggerOnce direction='right'>
      <Profile />
      <div className='text-center p-7 '>
        <ul className='flex justify-between items-center  '>
          <li><a href="https://www.linkedin.com/in/brunosmp/" target='_blank' rel="noopener"><AiOutlineLinkedin size={30} opacity={0.9} /></a></li>
          <li><a href="https://github.com/btsmp" target='_blank' rel="noopener"><AiFillGithub size={30} opacity={0.9} /></a></li>
          <li><a href="https://wa.me/5582993191313" target='_blank' rel="noopener"><AiOutlineWhatsApp size={30} opacity={0.9} /></a></li>
        </ul>
        <a
          href='/DesenvolvedorBruno.pdf' download={true}
          className=' flex items-center justify-center gap-2 p-2 bg-[#0A0A0A] hover:opacity-95 font-medium text-white rounded-md my-5 w-full cursor-pointer'>
          Baixar CV <AiOutlineDownload />
        </a>

      </div>
    </Fade>
  )
}