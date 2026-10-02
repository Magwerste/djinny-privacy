import { useEffect, useRef, useState } from "react";
import { PLAY_URL } from "../../site.config";
import { cn } from "@/lib/utils";

/**
 * Official "Get it on Google Play" badge.
 *
 * Google's brand guidelines require the unmodified badge artwork, so it is not recreated here:
 * download the PNG for your locale from https://play.google.com/intl/en_us/badges/ and save it as
 * public/badges/en_badge_web_generic.png. The artwork already includes the required clear space,
 * so don't crop it, recolor it, or add effects. Until the file exists, a plain text link is shown.
 */
export function PlayBadge({ className, placement }: { className?: string; placement: string }) {
  const [missing, setMissing] = useState(false);
  const img = useRef<HTMLImageElement>(null);

  // The page is prerendered, so the image may already have failed before React attached onError.
  useEffect(() => {
    const el = img.current;
    if (el?.complete && el.naturalWidth === 0) setMissing(true);
  }, []);
  const href = `${PLAY_URL}&utm_source=djinny-site&utm_medium=web&utm_campaign=${placement}`;

  if (missing) {
    return (
      <a
        href={href}
        rel="noopener"
        className={cn("font-heading text-sm font-semibold text-primary underline underline-offset-4", className)}
      >
        Get it on Google Play
      </a>
    );
  }

  return (
    <a href={href} rel="noopener" className={cn("inline-block rounded-lg focus-visible:ring-[3px] focus-visible:ring-ring/50 outline-none", className)}>
      <img
        ref={img}
        src={`${import.meta.env.BASE_URL}badges/en_badge_web_generic.png`}
        alt="Get it on Google Play"
        className="-ml-3 h-[76px] w-auto"
        width={196}
        height={76}
        onError={() => setMissing(true)}
      />
    </a>
  );
}
