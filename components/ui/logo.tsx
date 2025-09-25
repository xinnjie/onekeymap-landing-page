import Image from "next/image";
import Link from "next/link";

export default function Logo() {
  return (
    <Link
      href="/"
      className="inline-flex items-center gap-2 font-semibold tracking-[0.2em] text-gray-900"
      aria-label="OneKeymap"
    >
      <span className="relative flex h-10 w-10 items-center justify-center">
        <Image
          src="/images/logo-onekeymap-liquid-60x60@3x.png"
          alt="OneKeymap emblem"
          fill
          sizes="40px"
          className="object-contain"
        />
      </span>
      <span className="text-sm sm:text-base">ONEKEYMAP</span>
    </Link>
  );
}
