import Link from "next/link";

export default function Home() {
  return (
    <div className="absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]">
      <div className="text-center mt-[8rem]">
        <button className="font-sans border px-5 py-3 rounded-full">
          Learn in the most practical way possible
        </button>

        <div className="">
          <h1 className="text-[6rem] font-sans">Introducing Quicko</h1>
          <p className="max-w-[450px] text-center m-auto">
            Your next <span className="text-blue-500">Go-To</span> place for
            practical learning, Lets create while learning your most favourite languages !!
          </p>
        </div>

        <div className="flex items-center justify-center">
          <div className="flex gap-[50px] text-center mt-[5rem]">
            <Link href={'/dashboard'}>
            
            <button className="bg-blue-500 px-5 py-2 rounded-md">Get Started</button>
            </Link>
            <button className="border-blue-500 px-5 py-2 border rounded-md">Github</button>
          </div>
        </div>
      </div>
      <div></div>
    </div>
  );
}
