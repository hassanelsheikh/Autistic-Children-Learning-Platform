"use client";

import Image from "next/image";
import Link from "next/link";
import kids_happy from "../../public/kids_happy.webp";

// Team member photos
import asmaa from "../../public/asmaa.jpeg";
import hana from "../../public/hana.jpeg";
import hassan from "../../public/hassan.jpeg";
import nada from "../../public/nada.jpeg";
import moemen from "../../public/moemen.jpeg";

const About = () => {
  return (
    <div className="mt-4">
      {/* Background image */}
      <Image
        src={kids_happy}
        placeholder="blur"
        fill
        quality={100}
        alt="kids playing"
        className="object-cover object-top"
      />
      {/* Overlay (black with opacity for visibility of text) */}
      <div className="absolute inset-0 bg-black opacity-70"></div>

      <div className="relative z-10 text-center text-white">
        <h1 className="text-6xl text-primary-50 mb-10 tracking-tight font-normal">
          About Us
        </h1>
        <p className="text-xl mb-10">
          Empowering individuals on the autism spectrum and their families with
          the support, resources, and information they need.
        </p>

        <section className="px-8">
          <h2 className="text-4xl mb-4">Our Mission</h2>
          <p>
            At CUFE Platform, our mission is to create a world where individuals
            on the autism spectrum have equal opportunities to thrive, live
            fulfilled lives, and be understood. We provide tailored resources,
            expert advice, and a strong community network to support both
            individuals and families affected by autism.
          </p>

          <h2 className="text-4xl mt-8 mb-4">What We Do</h2>
          <ul className="list-disc pl-6">
            <p>Games for emotions recognition and everyday activities.</p>
            <p>
              Conversational AI companion for improving social interactions with
              personalized feedback.
            </p>
          </ul>

          <h2 className="text-4xl mt-8 mb-4">Meet Our Team</h2>
          <div className="team-members flex justify-center gap-8 mt-6">
            <div className="team-member text-center">
              <div className="team-photo w-32 h-32 overflow-hidden rounded-full mx-auto">
                <Image
                  src={asmaa}
                  alt="Asmaa Khaled"
                  className="object-cover w-full h-full"
                  width={150}
                  height={150}
                />
              </div>
              <p className="mt-2">Asmaa Khaled</p>
            </div>

            <div className="team-member text-center">
              <div className="team-photo w-32 h-32 overflow-hidden rounded-full mx-auto">
                <Image
                  src={hana}
                  alt="Hana Fares"
                  className="object-cover w-full h-full"
                  width={150}
                  height={150}
                />
              </div>
              <p className="mt-2">Hana Fares</p>
            </div>

            <div className="team-member text-center">
              <div className="team-photo w-32 h-32 overflow-hidden rounded-full mx-auto">
                <Image
                  src={hassan}
                  alt="Hassan Alsheikh"
                  className="object-cover w-full h-full"
                  width={150}
                  height={150}
                />
              </div>
              <p className="mt-2">Hassan Elsheikh</p>
            </div>

            <div className="team-member text-center">
              <div className="team-photo w-32 h-32 overflow-hidden rounded-full mx-auto">
                <Image
                  src={nada}
                  alt="Nada Mohamed"
                  className="object-cover w-full h-full"
                  width={150}
                  height={150}
                />
              </div>
              <p className="mt-2">Nada Mohamed</p>
            </div>

            <div className="team-member text-center">
              <div className="team-photo w-32 h-32 overflow-hidden rounded-full mx-auto">
                <Image
                  src={moemen}
                  alt="Moemen Ehab"
                  className="object-cover w-full h-full"
                  width={150}
                  height={150}
                />
              </div>
              <p className="mt-2">Moemen Ehab</p>
            </div>
          </div>
        </section>

        <section>
          <Link
            href="https://github.com/hassanelsheikh/Autistic-Children-Learning-Platform"
            className="text-2xl mt-16 block underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            Get in touch with us
          </Link>
        </section>
      </div>
    </div>
  );
};

export default About;
