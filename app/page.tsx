import { Scripts } from "./scripts";
import {
  AnimatedRow,
  AnimatedRowSmall,
  EmailIcon,
  InstagramIcon,
  NavLink,
  ResidentAdvisorIcon,
  SoundCloudIcon,
  VideoPlayer,
} from "./components";
import { EMAIL_ADDRESS, EMAIL_ADDRESS_HREF } from "./constants";

export default function Home() {
  return (
    <>
      <main className="flex sticky top-0 min-h-screen flex-col items-center justify-between p-24 before:absolute before:-z-10 before:top-0 before:left-0 before:right-0 before:bottom-0 before:bg-cover before:bg-hero-pattern font-light z-0 before:animate-hue-rotate animate-grayscale overflow-hidden before:pointer-events-none text-gray-900">
        <VideoPlayer />
        <nav className="flex relative z-10 w-full max-w-5xl items-center justify-between flex-col gap-y-2 md:flex-row md:gap-y-0">
          <h1 className="font-bold text-2xl">L[ST]</h1>
          <div className="gap-4 flex">
            <NavLink link="#" label="About" />
            <NavLink link="#contact" label="Contact" />
          </div>
          <ul className="hidden list-none md:flex gap-3">
            <SoundCloudIcon />
            <InstagramIcon />
            <ResidentAdvisorIcon />
          </ul>
        </nav>

        <section className="relative z-[-1] flex grow items-center" id="about">
          <div className="flex flex-col gap-3 text-center text-sm sm:text-base md:text-lg lg:text-xl">
            <p className="hidden sm:block">
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
            <p className="hidden sm:block">
              <AnimatedRow text="Last Set is not merely a collection of songs but a journey through" />
              <AnimatedRow text="soundscapes that connect listeners to a higher sense of aesthetic and" />
              <AnimatedRow text="emotional clarity. Through every note, Last Set engages in a rebellious" />
              <AnimatedRow text="act of beauty, crafting melodies that whisper of the hidden marvels of life." />
            </p>

            <p className="sm:hidden">
              <AnimatedRowSmall text="In a world often overshadowed by dystopian narratives and" />
              <AnimatedRowSmall text="wandering emotions, Barcelona-based artist Giuseppe" />
              <AnimatedRowSmall text="Bandiera offers a different path with Last Set." />
              <AnimatedRowSmall text="This multifaceted project celebrates the euphoria found" />
              <AnimatedRowSmall text="in the contemplation and realisation of intricate beauty." />
              <AnimatedRowSmall text="Giuseppe's music seeks to transcend the ordinary," />
              <AnimatedRowSmall text="weaving gentle stories that uplift and inspire." />
              <AnimatedRowSmall text="His compositions resonate with the soul aiming to" />
              <AnimatedRowSmall text="foster wellbeing and reveal the unseen wonders" />
              <AnimatedRowSmall text="within everyday reality." />
            </p>
            <p className="sm:hidden">
              <AnimatedRowSmall text="Last Set is not merely a collection of songs" />
              <AnimatedRowSmall text="but a journey through soundscapes that connect listeners" />
              <AnimatedRowSmall text="to a higher sense of aesthetic and emotional clarity." />
              <AnimatedRowSmall text="Through every note, Last Set engages in a" />
              <AnimatedRowSmall text="rebellious act of beauty, crafting melodies" />
              <AnimatedRowSmall text="that whisper of the hidden marvels of life." />
            </p>
          </div>
        </section>
      </main>
      <footer
        className="relative flex items-center justify-center sm:justify-between sm:pl-20 z-10 bg-black text-white h-96 before:absolute before:-z-10 before:top-0 before:left-0 before:right-0 before:bottom-0 before:bg-cover before:bg-footer before:opacity-60"
        id="contact"
      >
        <div
          className="absolute top-0 right-0 bottom-0 left-0 shadow-[0_-20px_60px_60px_rgba(0.2,0.2,0.2,1)] opacity-0 pointer-events-none"
          id="footer-shadow"
        />
        <div className="flex justify-between">
          <div className="flex flex-col gap-y-2 items-center">
            <div className="text-3xl font-bold">Get in touch</div>
            <a
              href={EMAIL_ADDRESS_HREF}
              target="_blank"
              rel="noopener"
              title={"Send an email to Last Set"}
              className="flex relative px-4 py-3 text-white w-full z-10 underline underline-offset-1"
            >
              {EMAIL_ADDRESS}
            </a>
            <ul className=" list-none flex items-center gap-2 md:hidden">
              <SoundCloudIcon />
              <InstagramIcon />
              <ResidentAdvisorIcon />
            </ul>
          </div>
        </div>
      </footer>
      <Scripts />
    </>
  );
}
