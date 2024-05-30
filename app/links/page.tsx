import { faInstagram, faSoundcloud } from "@fortawesome/free-brands-svg-icons";
import { TreeLink, VideoPlayer } from "../components";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import {
  EMAIL_ADDRESS_HREF,
  INSTAGRAM_HREF,
  RESIDENT_ADVISOR_HREF,
  SOUNDCLOUD_HREF,
} from "../constants";
import { RaIcon } from "../external-icons";

const HOMEPAGE_URL = "/";

export default function Links() {
  return (
    <main className="flex items-center justify-between min-h-screen flex-col p-12 sm:p-24 overflow-hidden sm:overflow-auto before:absolute before:-z-10 before:top-0 before:left-0 before:right-0 before:bottom-0 before:bg-cover before:bg-hero-pattern font-light z-0 before:animate-hue-rotate animate-grayscale before:pointer-events-none">
      <VideoPlayer />
      <header className="flex flex-col gap-3 items-center">
        <a
          href={HOMEPAGE_URL}
          target="_blank"
          rel="noopener"
          title="Last Set Homepage"
        >
          <div className=" border-2 border-white rounded-full w-24 h-24 bg-footer bg-cover bg-right" />
        </a>
        <h1 className="font-bold text-4xl ">L[ST]</h1>
      </header>
      <ul className="flex list-none flex-col gap-4 items-stretch mt-4">
        <TreeLink
          label="MY SETS"
          icon={faSoundcloud}
          href={SOUNDCLOUD_HREF}
          title="Last Set on SoundCloud"
        />
        <TreeLink
          label="UPCOMING GIGS"
          externalIcon={<RaIcon />}
          href={RESIDENT_ADVISOR_HREF}
          title="Last Set on ResidentAdvisor"
        />
        <TreeLink
          label="INSTAGRAM"
          icon={faInstagram}
          href={INSTAGRAM_HREF}
          title="Last Set on Instagram"
        />
        <TreeLink
          label="WEBSITE"
          icon={faGlobe}
          href={HOMEPAGE_URL}
          title="Last Set Homepage"
        />
        <TreeLink
          label="CONTACT"
          icon={faEnvelope}
          href={EMAIL_ADDRESS_HREF}
          title="Send an email to Last Set"
        />
      </ul>
      <div />
    </main>
  );
}
