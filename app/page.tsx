import Image from "next/image";

export default function Home() {
  const corecss ='/corecss.svg'

  return (
    <main className="min-h-screen flex justify-center items-center">
      <div className="space-y-2 text-right">
        <Image src={corecss} width={230} height={56} alt="Core CSS" />
        <p className="text-xs text-gray-400">v.0.1.0-alpha.1</p>
      </div>
    </main>
  )
}