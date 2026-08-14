import Link from 'next/link';
import Image from 'next/image';

export default function Header() {
  return (
    <header className="fixed w-full top-0 z-50 bg-white/10 backdrop-blur-md border-b border-white/20">
      <div className="container mx-auto px-6 py-0 flex justify-between items-center h-20">
        {/* Logo - Left Aligned */}
        <Link href="/" className="flex items-center hover:opacity-80 transition">
          {/* Logo Image - Large Green Rectangle Size */}
          <div className="relative w-32 h-16 flex-shrink-0">
            <img
              src="/images/e839ecde-f9f5-4b2c-83ec-e5641a709c6a.png"
              alt="Logo"
              className="w-full h-full object-contain"
            />
          </div>
        </Link>

        {/* Navigation */}
        <nav className="hidden md:flex gap-8">
          <a
            href="#projects"
            className="text-sm font-light text-white hover:text-white/70 transition"
          >
            Landscape
          </a>
          <a
            href="#projects"
            className="text-sm font-light text-white hover:text-white/70 transition"
          >
            Architecture
          </a>
          <a
            href="#projects"
            className="text-sm font-light text-white hover:text-white/70 transition"
          >
            Lighting
          </a>
          <a
            href="#projects"
            className="text-sm font-light text-white hover:text-white/70 transition"
          >
            Gym
          </a>
          <a
            href="#projects"
            className="text-sm font-light text-white hover:text-white/70 transition"
          >
            Design
          </a>
        </nav>

        {/* Menu Icon */}
        <button className="md:hidden text-white">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>
    </header>
  );
}
