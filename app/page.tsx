import Image from "next/image";
import Link from "next/link";
import { IconBrandGithub } from '@tabler/icons-react'

export default function Home() {
  const corecss ="/corecss.svg"
  const urkLink = "/docs"
  const gitHub = "https://github.com/thefubon/corecss-ru"

  return (
    <main className="md:min-h-screen pt-12 md:pt-0 flex justify-center items-center">
      <div className="space-y-8 flex flex-col items-center">
        <div className="text-right">
          <Image src={corecss} width={300} height={56} alt="Core CSS" />
          <p className="text-xs text-gray-400">Версия: 0.1.0-alpha.1</p>
        </div>
        <div className="flex justify-between items-center gap-4">
          <Link className="px-6 h-10 rounded-lg bg-light-primary text-white flex items-center hover:bg-light-hover-primary" href={urkLink}>Документация</Link>
          <Link className="px-4 h-10 rounded-lg bg-slate-400 text-white flex items-center gap-2 hover:bg-slate-500" href={gitHub} target="_blank">
            <IconBrandGithub />GitHub
          </Link>
        </div>
      </div>
    </main>
  )
}