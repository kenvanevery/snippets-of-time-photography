import Image from "next/image";

const navigation = [
  { label: "HOME", href: "#" },
  { label: "GALLERIES", href: "#galleries" },
  { label: "ABOUT", href: "#about" },
  { label: "PRINTS", href: "#prints" },
  { label: "SPECIAL COMMISSIONS", href: "#commissions" },
  { label: "CONTACT", href: "#contact" },
];

/*
  HERO CONTROL PANEL

  Change only these values when we want to adjust the hero.
*/
const heroSettings = {
  topPosition: "13vh",
  groupLift: "-3.5rem",
  logoWidth: "clamp(300px, 28vw, 470px)",
  spacing: "1.2rem",
  buttonTopMargin: "1rem",
};

export default function Home() {
  return (
    <main
      className="relative min-h-screen overflow-hidden bg-cover bg-[center_45%] text-white"
      style={{
        backgroundImage:
          "url('/images/hero/hero-mackinac-bridge-v2.jpg')",
      }}
    >
      <div
  className="absolute inset-0"
  style={{
    background: `
      linear-gradient(
        to bottom,
        rgba(5, 8, 20, 0.45) 0%,
        rgba(5, 8, 20, 0.22) 22%,
        rgba(5, 8, 20, 0.08) 42%,
        rgba(5, 8, 20, 0.00) 70%
      )
    `,
  }}
/>

      <div className="relative z-10 flex min-h-screen flex-col">
        <nav className="mx-auto hidden w-full max-w-6xl items-center justify-center gap-10 px-6 pt-8 text-sm tracking-[0.2em] md:flex">
          {navigation.map((item, index) => (
            <a
              key={item.label}
              href={item.href}
              className={
                index === 0
                  ? "border-b-2 border-[#d4ad63] pb-3 text-[#d4ad63]"
                  : "pb-3 text-white/90 transition hover:text-[#d4ad63]"
              }
            >
              {item.label}
            </a>
          ))}
        </nav>

        <section
          className="flex flex-1 items-start justify-center px-6 text-center"
          style={{ paddingTop: heroSettings.topPosition }}
        >
          <div
            className="flex w-full flex-col items-center"
            style={{
              transform: `translateY(${heroSettings.groupLift})`,
              gap: heroSettings.spacing,
            }}
          >
            <Image
              src="/branding/logo/logo-gold.png"
              alt="Snippets of Time Photography"
              width={1600}
              height={500}
              priority
              className="h-auto max-w-[85vw]"
              style={{ width: heroSettings.logoWidth }}
            />

            <p className="text-xs tracking-[0.2em] text-white/95 sm:text-sm md:text-base">
              FINE ART PHOTOGRAPHY FROM MICHIGAN AND BEYOND
            </p>

            <a
              href="#galleries"
              className="group inline-flex items-center gap-4 border border-[#d4ad63] bg-black/10 px-8 py-4 text-xs tracking-[0.2em] text-[#d4ad63] backdrop-blur-[2px] transition duration-300 hover:bg-[#d4ad63] hover:text-black sm:text-sm"
              style={{ marginTop: heroSettings.buttonTopMargin }}
            >
              EXPLORE THE GALLERY
              <span className="transition-transform duration-300 group-hover:translate-x-2">
                →
              </span>
            </a>
          </div>
        </section>
      </div>
    </main>
  );
}