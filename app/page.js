import Link from "next/link";
import Navigation from "./_components/Navigation";
import Image from "next/image";
import bg from "@/public/bg.png";

export default function Page() {
  return (
    <main className="mt-24">
      <Image
        src={bg}
        fill
        quality={100}
        placeholder="blur"
        alt="Mountains and forests with two cabins"
        className="object-cover object-top"
      />

      <div className="relative z-10 text-center">
        <h1 className="text-2xl text-primary-50 mb-10 tracking-tight font-normal sm:text-7xl">
          Welcome to Hotelo.
        </h1>
        <Link
          href="/cabins"
          className="bg-accent-500 px-8 py-6 text-primary-800 text-lg font-semibold hover:bg-accent-600 transition-all"
        >
          Explore Our Cabins
        </Link>
      </div>
    </main>
  );
}
