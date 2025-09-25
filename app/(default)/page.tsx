export const metadata = {
  title: "OneKeymap — Configure once. Use everywhere.",
  description:
    "Unify your editor shortcuts across VS Code, Zed, IntelliJ IDEA, and Helix with OneKeymap.",
};

import Hero from '@/components/hero-home';
import SupportedEditors from '@/components/supported-editors';
import Features from '@/components/features';
import Cta from '@/components/cta';

export default function Home() {
  return (
    <>
      <Hero />
      <SupportedEditors />
      <Features />
      <Cta />
    </>
  );
}
