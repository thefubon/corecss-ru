import Image from "next/image";

export default function Home() {
  const corecss ='/corecss.svg'

  return (
    <main className="min-h-screen flex justify-center items-center">
      <Image src={corecss} width={230} height={56} alt="Core CSS" />
    </main>
  )
}