import type { Image } from "$live/std/ui/types/Image.ts";
import { Head } from "$fresh/runtime.ts";

export interface ImageProps {
  altText?: string;
  title?: string;
  src: Image;
  className: string;
  preCarregarImagem?: boolean;
}

export default function Image(
  { altText, title, src, className, preCarregarImagem}: ImageProps,
) {
  return (
    <>
      {preCarregarImagem
        ? (
          <Head>
            <link rel="preload" as="image" href={src} />
          </Head>
        )
        : null}

      <img
        class={className}
        src={src}
        alt={altText}
        title={title}
        preload={preCarregarImagem ? "true":"false"}
        loading={preCarregarImagem ? "eager":"lazy"}
        decoding={preCarregarImagem ? "sync":"async"}
      />
    </>
  );
}
