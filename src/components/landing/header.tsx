import Image from "next/image";
import Link from "next/link";

const Header = () => {
  return (
    <nav className="fixed top-0 right-0 z-50 px-6 py-2 border-b border-border/50 bg-background/80 backgdrop-blur-md h-16">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <Link href="/" className="text-lg flex items-center gap-2">
          <Image width={32} height={32} alt="home" src={"/chip.png"}></Image>
          <span className="font-semibold text-lg">Chip Skylark Dental</span>
        </Link>
      </div>
    </nav>
  );
};

export default Header;
