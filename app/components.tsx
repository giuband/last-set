import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { faInstagram, faSoundcloud } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  EMAIL_ADDRESS_HREF,
  INSTAGRAM_HREF,
  SOUNDCLOUD_HREF,
} from "./constants";

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
    href={SOUNDCLOUD_HREF}
    title="Last Set on SoundCloud"
  />
);

export const InstagramIcon = () => (
  <HoverableIcon
    icon={faInstagram}
    href={INSTAGRAM_HREF}
    title="Last Set on Instagram"
  />
);

export const EmailIcon = () => (
  <HoverableIcon
    icon={faEnvelope}
    href={EMAIL_ADDRESS_HREF}
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

interface TreeLinkPropsBase {
  href: string;
  label: string;
  title: string;
}

interface TreeLinkIconProps extends TreeLinkPropsBase {
  icon: IconDefinition;
}

interface TreeLinkExternalIconProps extends TreeLinkPropsBase {
  externalIcon: React.ReactNode;
}

export function TreeLink({
  href,
  label,
  title,
  ...iconProps
}: TreeLinkIconProps | TreeLinkExternalIconProps) {
  let renderedIcon: React.ReactNode;
  if ("icon" in iconProps) {
    renderedIcon = <FontAwesomeIcon size="2x" icon={iconProps.icon} />;
  } else if ("externalIcon" in iconProps) {
    renderedIcon = iconProps.externalIcon;
  }
  return (
    <li className=" bg-black shadow-sm shadow-black relative before:absolute before:top-0 before:right-0 before:left-0 before:bottom-0 before:pointer-events-none before:bg-gray-800 before:opacity-0 hover:before:opacity-100 before:transition-opacity before:z-0">
      <a
        href={href}
        target="_blank"
        rel="noopener"
        title={title}
        className="flex relative px-4 py-3 text-white w-full z-10"
      >
        <div className="grid grid-cols-[50px_1fr] gap-2 items-center">
          <div className="flex justify-center">{renderedIcon}</div>
          <span className=" text-lg font-bold">{label}</span>
        </div>
      </a>
    </li>
  );
}
