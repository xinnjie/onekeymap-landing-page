"use client";

import Link from "next/link";
import Image from "next/image";
import { APP_STORE_URL } from "@/constants";
import Logo from "./logo";
import DiscordLogo from "@/public/images/logo-discord.svg";
import { useState } from "react";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-2 z-30 w-full md:top-6">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="relative flex h-14 items-center justify-between gap-3 rounded-2xl bg-white/90 px-3 shadow-lg shadow-black/[0.03] backdrop-blur-xs before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(var(--color-gray-100),var(--color-gray-200))_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)]">
          {/* Site branding */}
          <div className="flex flex-1 items-center">
            <Logo />
          </div>

          {/* Desktop navigation */}
          <nav className="hidden grow md:flex">
            <ul className="flex grow items-center justify-end">
              <li>
                <Link
                  href="https://discord.gg/fW3TWuXj9A"
                  className="flex items-center justify-center text-gray-600 transition hover:text-gray-900"
                  aria-label="Discord"
                >
                  <span className="flex h-8 w-8 items-center justify-center">
                    <Image
                      src={DiscordLogo}
                      alt="Discord logo"
                      className="h-5 w-5"
                    />
                  </span>
                  <span className="ml-2 text-sm font-medium">Contact us</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/#features"
                  className="px-4 py-2 text-sm font-medium text-gray-600 hover:text-gray-900"
                >
                  Features
                </Link>
              </li>
              <li>
                <Link
                  href="/pricing"
                  className="px-4 py-2 text-sm font-medium text-gray-600 hover:text-gray-900"
                >
                  Pricing
                </Link>
              </li>
              <li>
                <Link
                  href={APP_STORE_URL}
                  className="btn-sm ml-4 bg-blue-500 text-white shadow-sm hover:bg-blue-600"
                >
                  Download
                </Link>
              </li>
            </ul>
          </nav>

          {/* Mobile navigation */}
          <div className="flex items-center gap-2 md:hidden">
            {/* Download button */}
            <Link
              href={APP_STORE_URL}
              className="btn-sm bg-blue-500 text-white shadow-sm hover:bg-blue-600"
            >
              Download
            </Link>

            {/* Hamburger menu button */}
            <button
              className="flex h-8 w-8 items-center justify-center text-gray-600 hover:text-gray-900"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {mobileMenuOpen ? (
                  <path d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile dropdown menu */}
        {mobileMenuOpen && (
          <div className="mt-2 rounded-2xl bg-white/90 shadow-lg backdrop-blur-xs md:hidden">
            <nav className="px-4 py-2">
              <ul className="space-y-1">
                <li>
                  <Link
                    href="/#features"
                    className="block px-4 py-2 text-sm font-medium text-gray-600 hover:text-gray-900"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Features
                  </Link>
                </li>
                <li>
                  <Link
                    href="/pricing"
                    className="block px-4 py-2 text-sm font-medium text-gray-600 hover:text-gray-900"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Pricing
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://discord.gg/fW3TWuXj9A"
                    className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-gray-600 hover:text-gray-900"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <Image
                      src={DiscordLogo}
                      alt="Discord logo"
                      className="h-4 w-4"
                    />
                    <span>Contact us</span>
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
