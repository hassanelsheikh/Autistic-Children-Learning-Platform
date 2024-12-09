import Image from "next/image";

export default function Games() {
  return (
    <div className="mt-10 px-4">
      <h1 className="text-4xl font-bold text-center mb-8">Games</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

        <div className="rounded-lg overflow-hidden shadow-lg bg-lightblue transition-transform transform hover:scale-105 duration-300">
          <div className="relative w-full h-96">
            <Image
              src="/everyday-activities.jpg"
              alt="Game 1"
              layout="fill"
              objectFit="cover"
              className="rounded-t-lg"
            />
          </div>
          <div className="p-4">
            <h2 className="text-2xl font-semibold mb-2">Everyday Activities</h2>
            <p className="text-darkBlue">
              You will arrange the bedtime routine steps. Explore and have fun!
            </p>
          </div>
        </div>

        <div className="rounded-lg overflow-hidden shadow-lg bg-lightblue transition-transform transform hover:scale-105 duration-300">
          <div className="relative w-full h-96">
            <Image
              src="/Guess that feeling.jpg"
              alt="Game 2"
              layout="fill"
              objectFit="cover"
              className="rounded-t-lg"
            />
          </div>
          <div className="p-4">
            <h2 className="text-2xl font-semibold mb-2">Guess that Feeling</h2>
            <p className="text-darkBlue">
              Match facial expressions with feelings. Dive in and enjoy!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
