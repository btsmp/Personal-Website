import {
  TbBrandJavascript,
  TbBrandHtml5,
  TbBrandCss3,
  TbBrandTailwind,
  TbBrandSass,
  TbBrandNextjs,
} from 'react-icons/tb'
import { DiNodejs, DiReact } from 'react-icons/di'
import { SiStyledcomponents, SiMysql, SiJest } from 'react-icons/si'
import { ImGit } from 'react-icons/im'
import { CardTech } from '../components/CardTech'
import { Fade, Slide } from 'react-awesome-reveal'

export function SectionCardsTechs() {
  const techs = [
    {
      name: 'JavaScript',
      icon: TbBrandJavascript
    },
    {
      name: 'HTML5',
      icon: TbBrandHtml5
    },
    {
      name: 'CSS3',
      icon: TbBrandCss3,

    },
    {
      name: 'React.Js',
      icon: DiReact
    },
    {
      name: 'Node.Js',
      icon: DiNodejs
    },
    {
      name: 'Next.Js',
      icon: TbBrandNextjs
    },
    {
      name: 'Git',
      icon: ImGit
    },
    {
      name: 'Jest',
      icon: SiJest
    },
    {
      name: 'MySQL',
      icon: SiMysql
    },
    {
      name: 'TailwindCSS',
      icon: TbBrandTailwind
    },
    {
      name: 'Styled-Components',
      icon: SiStyledcomponents
    },
    {
      name: 'Sass',
      icon: TbBrandSass
    },
  ]
  return (
    <div className=' flex flex-wrap  items-center justify-center gap-6 px-10'>

      {techs.map(tech => (
        <Fade>
          <CardTech key={tech.name} name={tech.name} icon={tech.icon} />
        </Fade>
      ))}
    </div>
  )
}