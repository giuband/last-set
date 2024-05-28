import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { faInstagram, faSoundcloud } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function HoverableIcon({
  icon,
  href,
  title,
}: {
  icon: IconDefinition;
  href: string;
  title: string;
}) {
  return (
    <li className="opacity-60 transition-opacity hover:opacity-100">
      <a href={href} target="_blank" rel="noopener" title={title}>
        <FontAwesomeIcon size="2x" icon={icon} />
      </a>
    </li>
  );
}

export const SoundCloudIcon = () => (
  <HoverableIcon
    icon={faSoundcloud}
    href="//soundcloud.com/lastset"
    title="Last Set on SoundCloud"
  />
);

export const InstagramIcon = () => (
  <HoverableIcon
    icon={faInstagram}
    href="//instagram.com/lastsetmusic"
    title="Last Set on Instagram"
  />
);

export const EmailIcon = () => (
  <HoverableIcon
    icon={faEnvelope}
    href="mailto:example@example.com"
    title="Send an email to Last Set"
  />
);

export const NavLink = ({ link, label }: { link: string; label: string }) => (
  <a
    href={link}
    className="relative before:absolute before:top-0 before:right-0 before:bottom-0 before:left-0 before:border-b-2 before:border-b-zinc-600 before:opacity-0 hover:before:opacity-100 focus:before:opacity-100 before:transition-opacity"
  >
    {label}
  </a>
);

export const AnimatedRow = ({ text }: { text: string }) => (
  <span
    className="block animation-delay-1 animate-fade-in opacity-0 text-nowrap"
    data-animated-row="true"
  >
    {text}
  </span>
);
