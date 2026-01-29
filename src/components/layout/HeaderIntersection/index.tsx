import type { Social } from "@/types/socials";
import type { Navigation } from "@/types/navigation";

import { type ReactElement, useState, useRef } from "react";
import clsx from "clsx";

import { useInView } from "react-intersection-observer";

import { Hero } from "./Hero";
import { HeaderNav } from "./HeaderNav";

export default function Header({
  socials,
  navigation,
}: {
  socials: Social[];
  navigation: Navigation[];
}): ReactElement {
  const [showPrimary, setShowPrimary] = useState(false);
  const isFirstRender = useRef(true);

  const { ref } = useInView({
    rootMargin: "-100px",
    threshold: 0,
    onChange: (inView) => {
      // Ignore the first render to prevent flickering
      if (isFirstRender.current) {
        isFirstRender.current = false;
        return;
      }
      setShowPrimary(!inView);
    },
  });

  return (
    <>
      <header
        className={clsx(
          "fixed top-6 left-0 z-30 w-full transition duration-75 will-change-transform",
          {
            "-translate-y-2 scale-95 opacity-0": !showPrimary,
            "opacity-100": showPrimary,
          },
        )}
      >
        <HeaderNav navigation={navigation} />
      </header>
      <div ref={ref}>
        <div
          className={clsx("transition duration-150 will-change-transform", {
            "-translate-y-2 scale-[0.98] opacity-0": showPrimary,
            "opacity-100 delay-100": !showPrimary,
          })}
        >
          <Hero socials={socials} navigation={navigation} />
        </div>
      </div>
    </>
  );
}
