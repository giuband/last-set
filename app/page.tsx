import { Scripts } from "./scripts";
import {
  AnimatedRow,
  EmailIcon,
  InstagramIcon,
  NavLink,
  SoundCloudIcon,
} from "./components";

export default function Home() {
  return (
    <>
      <main className="flex sticky top-0 min-h-screen flex-col items-center justify-between p-24 before:absolute before:-z-10 before:top-0 before:left-0 before:right-0 before:bottom-0 before:bg-cover before:bg-hero-pattern font-light z-0 before:animate-hue-rotate animate-grayscale overflow-hidden">
        <video className="absolute top-0 left-0 right-0 bottom-0 pointer-events-none z-0 h-full w-full" />
        <nav className="flex z-10 w-full max-w-5xl items-center justify-between flex-col gap-y-2 md:flex-row md:gap-y-0">
          <h1 className="font-bold text-2xl">L[ST]</h1>
          <div className="gap-4 flex">
            <NavLink link="#" label="About" />
            <NavLink link="#contact" label="Contact" />
          </div>
          <ul className="hidden list-none md:flex gap-3">
            <SoundCloudIcon />
            <InstagramIcon />
          </ul>
        </nav>

        <section className="relative z-[-1] flex grow items-center" id="about">
          <div className="flex flex-col gap-3 text-center text-sm sm:text-base md:text-lg lg:text-xl">
            <p>
              <AnimatedRow
                text="In a world often overshadowed by dystopian narratives and
              wandering emotions,"
              />
              <AnimatedRow
                text="Barcelona-based artist Giuseppe Bandiera
              offers a different path with Last Set."
              />
              <AnimatedRow text="This multifaceted project celebrates the euphoria found in the contemplation and" />
              <AnimatedRow text="realisation of intricate beauty. Giuseppe's music seeks to transcend the ordinary," />
              <AnimatedRow text="weaving gentle stories that uplift and inspire. His compositions resonate with the" />
              <AnimatedRow text="soul, aiming to foster wellbeing and reveal the unseen wonders within everyday reality." />
            </p>
            <p>
              <AnimatedRow text="Last Set is not merely a collection of songs but a journey through" />
              <AnimatedRow text="soundscapes that connect listeners to a higher sense of aesthetic and" />
              <AnimatedRow text="emotional clarity. Through every note, Last Set engages in a rebellious" />
              <AnimatedRow text="act of beauty, crafting melodies that whisper of the hidden marvels of life." />
            </p>
          </div>
        </section>
      </main>
      <footer
        className="relative z-10 bg-black text-white p-36 h-96 before:absolute before:-z-10 before:top-0 before:left-0 before:right-0 before:bottom-0 before:bg-cover before:bg-footer before:opacity-60"
        id="contact"
      >
        <div
          className="absolute top-0 right-0 bottom-0 left-0 shadow-[0_-20px_60px_60px_rgba(0.2,0.2,0.2,1)] opacity-0 pointer-events-none"
          id="footer-shadow"
        />
        <div className="flex justify-between">
          <div className="flex flex-col gap-y-4 items-center ">
            <div className="font-light">Get in touch:</div>
            <ul className="list-none flex gap-3">
              <EmailIcon />
              <InstagramIcon />
              <SoundCloudIcon />
            </ul>
          </div>
        </div>
      </footer>
      <Scripts />
    </>
  );
}
