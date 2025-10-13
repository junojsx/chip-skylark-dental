import { SignInButton, SignOutButton, SignUpButton } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/button";

const Header = () => {
  return (
    <nav className="fixed top-0 right-0 left-0 z-50 px-6 py-2 border-b border-border/50 bg-background/80 backgdrop-blur-md h-16">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <Link href="/" className="text-lg flex items-center gap-2">
          <Image width={32} height={32} alt="home" src={"/chip.png"}></Image>
          <span className="font-semibold text-lg">Chip Skylark Dental</span>
        </Link>

        <div className="hidden md:flex items-center gap-8">
          <a
            href="http://"
            className="text-muted-foreground hover:text-foreground"
          >
            How it Works
          </a>
          <a
            href="http://"
            className="text-muted-foreground hover:text-foreground"
          >
            Pricing
          </a>
          <a
            href="http://"
            className="text-muted-foreground hover:text-foreground"
          >
            About
          </a>
        </div>
        <div className="flex items-center gap-2">
          <SignInButton>
            <Button variant={"ghost"} size={"sm"}>
              Sign In
            </Button>
          </SignInButton>
          <SignUpButton>
            <Button size={"sm"}>Sign Up</Button>
          </SignUpButton>
        </div>
      </div>
    </nav>
  );
};

export default Header;
