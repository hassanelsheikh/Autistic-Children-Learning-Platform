import Image from "next/image";
import Link from "next/link";
import kids_play from "../public/kids_play.jpg";

export default function Home() {
  return (
    <div className="mt-24">
      <Image
        src={kids_play}
        placeholder="blur"
        quality={80}
        fill
        alt="kids playing"
        className="object-cover object-top"
      />
      <div className="relative z-10 text-center">
        <h1 className="text-8xl text-primary-50 mb-10 tracking-tight font-normal">
          Welcome to CUFE Platform
        </h1>
        <Link
          href="/cabins"
          className="bg-accent-500 px-8 py-6 text-primary-800 text-lg font-semibold hover:bg-accent-600 transition-all"
        >
          Explore luxury cabins
        </Link>
      </div>
    </div>
  );
}
