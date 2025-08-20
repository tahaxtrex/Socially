import { SignInButton, SignUpButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <SignedOut>
        <SignInButton />
        <SignUpButton>
          <button className="bg-[#6c47ff] text-ceramic-white rounded-full font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 cursor-pointer">
            Sign Up
          </button>
        </SignUpButton>
      </SignedOut>
      <SignedIn>
        <UserButton />
      </SignedIn>
    </>
  );
}
