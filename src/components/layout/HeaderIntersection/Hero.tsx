import { type ReactElement } from "react";
import type { Social } from "@/types/socials";
import type { Navigation } from "@/types/navigation";

import { Icon } from "@/components/ui/Icon";

import profilePic from "@/assets/images/profile_pic.jpg";

export const Hero = ({
  socials,
  navigation,
}: {
  socials: Social[];
  navigation: Navigation[];
}): ReactElement => (
  <div className="mt-8 space-y-6">
    <div className="flex items-center space-x-6">
      <div className="ring-silver-500/10 hover:ring-silver-500/20 transform rounded-full shadow-lg ring-[5px] transition-transform duration-300 hover:scale-105">
        <img
          className="h-16 w-16 rounded-full object-cover"
          src={profilePic.src}
          alt="Logo"
          fetchPriority="high"
        />
      </div>

      <div className="mt-2">
        <h1 className="text-silver-900/90 text-3xl leading-none font-semibold">
          Luca Pattocchio
        </h1>
        <h2 className="text-silver-700/50 mt-2 items-center space-y-2 text-lg leading-none font-medium lg:mt-0 lg:flex lg:space-y-0 lg:space-x-2">
          <div className="whitespace-nowrap">
            <span>Full Stack Developer</span>
          </div>
        </h2>
      </div>
    </div>

    <div className="flex items-center space-x-2">
      <span className="text-md text-silver-700/90">
        I turn gibberish into web apps, outsmart stubborn terminals, but can’t
        fix a washing machine despite what my grandma thinks.
      </span>
    </div>

    <div className="flex flex-col items-center justify-between gap-4 lg:flex-row lg:gap-0">
      {/* Social Icons Navigation */}
      <nav>
        <ul className="flex space-x-4">
          {socials.map(({ id, label, url, icon }) => (
            <li key={id}>
              <a
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-silver-700/90 transition-colors duration-300 hover:text-green-700/90"
                title={`Go to ${label}`}
              >
                <Icon
                  name={icon}
                  className="text-silver-700/90 h-6 w-6 transform transition-transform hover:scale-110 hover:rotate-12"
                />
              </a>
            </li>
          ))}
          <li>
            <a
              href={`mailto:me@lucapattocchio.dev`}
              className="text-silver-700/90 transition-colors duration-300 hover:text-green-700/90"
              title={`Send me an email! 📧`}
            >
              <Icon
                name="mail"
                className="text-silver-700/90 h-6 w-6 transform transition-transform hover:scale-110 hover:rotate-12"
              />
            </a>
          </li>
        </ul>
      </nav>
      {/* Main Navigation */}
      <nav>
        <ul className="flex items-center space-x-4">
          {navigation.map(({ id, label, url }) => (
            <li key={id}>
              <a
                href={url}
                className="text-silver-700/90 transition-colors duration-300 hover:text-green-700/90"
                title={`Go to ${label} page`}
              >
                {label}
              </a>
            </li>
          ))}
          <li>
            <a
              href="/CV-LucaPattocchio.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="group text-cerulean-600 hover:text-cerulean-800 flex items-center gap-x-1 transition duration-300"
              title="Download Resume"
            >
              <span className="group-hover:border-cerulean-800 border-b border-dashed border-transparent font-medium transition-all">
                Resume
              </span>
              <Icon
                name="download"
                className="h-3.5 w-3.5 opacity-70 transition-transform group-hover:animate-bounce"
              />
            </a>
          </li>
        </ul>
      </nav>
    </div>
  </div>
);
