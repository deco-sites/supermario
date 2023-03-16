import type { Image } from "$live/std/ui/types/Image.ts";

export interface LogoProps {
    altText?: string;
    title?: string
    src: Image;
  }

  export default function Logo({ altText, src, title }: LogoProps){
    return (
        <img
            class="w-[90px] h-12 max-w-[160px]"
            src={src}
            alt={altText}
            title={title}
        />
    );
  }
  