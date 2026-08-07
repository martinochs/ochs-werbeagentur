"use client";

import Image from "next/image";
import { siteConfig } from "@/lib/seo/config";

type ProfilePhotoProps = {
  src?: string;
  alt?: string;
  className?: string;
  imageClassName?: string;
  priority?: boolean;
  sizes?: string;
};

export function ProfilePhoto({
  src = "/images/mariia-ochs.png",
  alt,
  className = "",
  imageClassName = "object-cover object-top",
  priority = false,
  sizes = "(max-width: 1024px) 100vw, 480px",
}: ProfilePhotoProps) {
  const imageAlt =
    alt ?? `${siteConfig.contactPerson} – ${siteConfig.name}`;

  return (
    <div className={`relative overflow-hidden ${className}`}>
      <Image
        src={src}
        alt={imageAlt}
        fill
        priority={priority}
        sizes={sizes}
        className={imageClassName}
      />
    </div>
  );
}
