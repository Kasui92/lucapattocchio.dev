import { type ReactElement, useState } from "react";
import type { Navigation } from "@/types/navigation";

import { tw } from "@/libs/merge";
import { Icon } from "@/components/Icon";
import { ThemeToggle } from "./ThemeToggle";

import profileImage from "@/assets/images/profile.jpg";

const DownloadResume = (): ReactElement => (
  <a
    href="/CV-LucaPattocchio.pdf"
    target="_blank"
    rel="noopener noreferrer"
    className="group text-secondary hover:text-secondary/80 flex items-center gap-x-1 transition duration-300"
    title="Download Resume"
  >
    <span className="group-hover:border-secondary border-b border-dashed border-transparent font-medium transition-all">
      Resume
    </span>
    <Icon
      name="download"
      className="h-3.5 w-3.5 opacity-70 transition-transform group-hover:animate-bounce"
    />
  </a>
);

export const HeaderNav = ({
  page,
  navigation,
}: {
  page: string;
  navigation: Navigation[];
}): ReactElement => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);

  return (
    <div className="mx-auto w-full max-w-2xl px-4 xl:px-0">
      <div className="shadow-surface-glass bg-surface/60 -mx-px rounded-2xl px-4 py-2 shadow-lg backdrop-blur-md">
        <div className="flex items-center justify-between">
          {/* Brand */}
          <div className="flex space-x-4">
            <div className="group transform rounded-full transition-transform duration-300 hover:scale-110">
              <a
                href="/"
                className="transform rounded-full transition-transform duration-300 hover:scale-110"
                title="Go to homepage"
              >
                <img
                  className="h-10 w-10 rounded-full object-cover"
                  src={profileImage.src}
                  alt="Logo"
                  fetchPriority="high"
                />
              </a>
            </div>
            <div className="text-foreground flex items-center font-semibold">
              Luca Pattocchio
            </div>
          </div>

          <div className="hidden md:flex">
            {/* Main Navigation - Inline */}
            <nav>
              <ul className="flex items-center space-x-4">
                {navigation.map(({ id, label, url }) => {
                  const isActive = page === label.toLowerCase();

                  return (
                    <li key={id}>
                      <a
                        href={url}
                        className={tw(
                          isActive
                            ? "text-primary underline decoration-2 underline-offset-[6px]"
                            : "text-muted-foreground",
                          "transition-colors duration-300 hover:text-primary",
                        )}
                        title={`Go to ${label} page`}
                        data-astro-prefetch
                      >
                        {label}
                      </a>
                    </li>
                  );
                })}
                <li>
                  <DownloadResume />
                </li>
                <li>
                  <ThemeToggle />
                </li>
              </ul>
            </nav>
          </div>

          <div className="flex items-center gap-x-3 md:hidden">
            <ThemeToggle />
            <button
              className="cursor-pointer rounded-full p-1"
              type="button"
              onClick={() => setIsMobileMenuOpen((prev) => !prev)}
            >
              <Icon name="menu-2" className="text-foreground h-6 w-6" />
            </button>
          </div>
        </div>
        {/* Main Navigation - Mobile */}
        <div
          className={`transition-max-height overflow-hidden duration-300 ease-in-out md:hidden ${
            isMobileMenuOpen ? "max-h-screen" : "max-h-0"
          }`}
        >
          <div className="mt-2 py-2">
            <nav>
              <ul className="flex flex-col space-y-2">
                {navigation.map(({ id, label, url }) => {
                  const isActive = page === label.toLowerCase();

                  return (
                    <li key={id}>
                      <a
                        href={url}
                        className={tw(
                          isActive
                            ? "text-primary underline decoration-2 underline-offset-[6px]"
                            : "text-muted-foreground",
                          "transition-colors duration-300 hover:text-primary",
                        )}
                        title={`Go to ${label} page`}
                        data-astro-prefetch
                      >
                        {label}
                      </a>
                    </li>
                  );
                })}
                <li>
                  <DownloadResume />
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
};
