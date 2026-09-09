import { type ComponentType, type SVGProps } from "react";

import CodebergIcon from "@/assets/icons/codeberg.svg?react";
import GitHubIcon from "@/assets/icons/github.svg?react";
import GitLabIcon from "@/assets/icons/gitlab.svg?react";
import LinkedInIcon from "@/assets/icons/linkedin.svg?react";
import MailIcon from "@/assets/icons/mail.svg?react";
import DownloadIcon from "@/assets/icons/download.svg?react";
import Menu2Icon from "@/assets/icons/menu-2.svg?react";

interface IconProps {
  name: string;
  className?: string;
}

export function Icon({ name, className = "" }: IconProps) {
  const icons: Record<string, ComponentType<SVGProps<SVGSVGElement>>> = {
    codeberg: CodebergIcon,
    github: GitHubIcon,
    gitlab: GitLabIcon,
    linkedin: LinkedInIcon,
    mail: MailIcon,
    download: DownloadIcon,
    "menu-2": Menu2Icon,
  };

  const IconComponent = icons[name];

  if (!IconComponent) return null;

  return <IconComponent className={className} />;
}
