"use client";

import Image from "next/image";
import { useState } from "react";

import { siteConfig } from "@/config/site";

export function Headshot() {
  const { src, alt, initials } = siteConfig.headshot;
  const [imageFailed, setImageFailed] = useState(false);
  const showImage = Boolean(src) && !imageFailed;

  return (
    <div className="relative mx-auto aspect-[4/5] w-full max-w-[270px] overflow-hidden rounded-[1.35rem] border border-border bg-muted shadow-premium sm:max-w-[320px]">
      {showImage ? (
        <Image
          src={src}
          alt={alt}
          fill
          sizes="(max-width: 768px) 280px, 320px"
          className="object-cover"
          priority
          onError={() => setImageFailed(true)}
        />
      ) : (
        <div className="grid h-full place-items-center bg-[radial-gradient(circle_at_30%_20%,rgba(52,96,139,0.18),transparent_34%),linear-gradient(135deg,#ffffff,#eef4fa)]">
          <div className="text-center">
            <div className="mx-auto grid h-24 w-24 place-items-center rounded-full border border-primary/20 bg-background/65 font-serif text-4xl font-semibold text-primary shadow-soft">
              {initials}
            </div>
            <p className="mt-5 px-8 font-serif text-xl font-semibold leading-6 text-foreground">Qin Tjokrosurjo, PhD</p>
            <p className="mt-2 px-8 text-xs font-semibold uppercase tracking-[0.16em] text-primary/80">
              Biomarker strategy
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
