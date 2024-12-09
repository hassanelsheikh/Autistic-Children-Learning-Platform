import Image from "next/image";

export default function Chat() {
  return (
    <div className="flex justify-center items-start min-h-screen bg-darkBlue px-4">
      <div className="w-full max-w-lg mt-10">
        <h1 className="text-4xl font-bold text-center mb-8 text-lightBlue">
          Chat
        </h1>

        <div className="rounded-lg overflow-hidden shadow-lg bg-lightBlue transition-transform transform hover:scale-105 duration-300">
          <div className="relative w-full h-80">
            <Image
              src="/kids_happy.webp"
              alt="Game 1"
              layout="fill"
              objectFit="cover"
              className="rounded-t-lg"
            />
          </div>
          <div className="p-4 text-darkBlue">
            <h2 className="text-2xl font-semibold mb-2">Hume AI</h2>
            <p>Let's have a fun conversation together!</p>
          </div>
        </div>
      </div>
    </div>
  );
}
