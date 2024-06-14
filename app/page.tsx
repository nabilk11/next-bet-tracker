import Image from "next/image";
import { useUser } from "@clerk/nextjs/auth";
import Link from "next/link";

export default async function Home() {
  const user = await useUser();

  if (!user) {
    return (
      <div className="min-h-screen bg-gray-900 text-white flex items-center justify-center">
        <Link href="/sign-in" className="text-4xl text-blue-500">
          Sign In
        </Link>
        <span className="text-4xl mx-4">or Don&apos;t Have an Account?</span>
        <Link href="/sign-up" className="text-4xl text-blue-500">
          Sign Up
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <h1 className="text-4xl text-center pt-10">
        Welcome to the Sports Betting Tracker
      </h1>
    </div>
  );
}

// export default function Home() {
//   return (
//     <main className="flex min-h-screen flex-col items-center justify-between p-24">
//       <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">

//       </div>
//     </main>
//   );
// }
