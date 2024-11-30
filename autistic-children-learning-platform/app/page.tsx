import Image from "next/image";
import Link from "next/link";
import kids_happy from "../public/kids_happy.webp";

export default function Home() {
  return (
    <div className="mt-24">
      <Image
        src={kids_happy}
        placeholder="blur"
        fill
        quality={100}
        alt="kids playing"
        className="object-cover object-top"
      />
      <div className="absolute inset-0 bg-black opacity-50"></div>

      <div className="relative z-10 text-center">
        <h1 className="text-8xl text-primary-50 mb-10 tracking-tight font-normal">
          Welcome to CUFE Platform
        </h1>
        <Link
          href="/cabins"
          className="bg-accent-500 px-8 py-6 text-primary-800 text-lg font-semibold hover:bg-accent-600 transition-all"
        >
          Discover Our Learning Approach
        </Link>
      </div>
    </div>
  );
}
