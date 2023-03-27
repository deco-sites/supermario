import ImageHero from "$start/components/atoms/Image.tsx";
import { type ImageProps } from "$start/components/atoms/Image.tsx";
import type { Image } from "$live/std/ui/types/Image.ts";
import NavMain from "$start/components/molecules/NavMain.tsx";
import { navMainProps } from "$start/components/molecules/NavMain.tsx";
import { useEffect, useState } from "preact/hooks";
import BrothersCTA from "$start/components/molecules/brothersCTA.tsx";

export type Props = {
  mainMenu?: navMainProps;
  imageProps: ImageProps;
  videoConfiguracoes: videoProps;
};

export interface videoProps {
  /** @description imagem poster do vídeo */
  poster: Image;

  /** @description SEO texto alternative */
  altText?: string;

  /** @description SEO texto title */
  seoTitle: string;

  /** @description O código do vídeo no yutube, visivel no final da url */
  videoUrlCode?: string;
}

export default function HeroBanner(
  { imageProps, videoConfiguracoes, mainMenu }: Props,
) {
  const [visible, setVisible] = useState(false);

  function loadIframe() {
    console.log(visible);

    return (
      <div class="w-full absolute top-0 left-0 z-10">
        <iframe
          class="object-contain"
          width="560"
          height="315"
          src={"https://www.youtube.com/embed/" +
            videoConfiguracoes.videoUrlCode + "?autoplay=1"}
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        >
        </iframe>
      </div>
    );
  }

  return (
    <div class="md:flex flex-col-reverse bg-[#f3cc41] pt-28 md:(pt-[4.7rem])">
      <div class="w-full h-auto flex flex-col justify-start items-center 
      md:(flex-row justify-around)">
        <div class="flex flex-col items-center text-center">
          <ImageHero
            {...imageProps}
            className=" object-contain w-[228px] h-32 max-w-[300px] md:(w-1/2 h-36)"
          />
          <h2 class="text-3xl font-black uppercase font-['rocgrotesc'] font-black">
            Empresa 100% familiar
          </h2>
          <h3 class="text-2xl">
            Consertar canos é a nossa diversão!
          </h3>
          <div class="hidden md:block">
            <BrothersCTA />
          </div>
        </div>
        <div
          class="w-auto h-auto relative py-8 md:py-16"
          onClick={() => setVisible(true)}
        >
          <ImageHero
            {...imageProps}
            src={videoConfiguracoes?.poster}
            altText={videoConfiguracoes?.altText}
            title={videoConfiguracoes?.seoTitle}
            preCarregarImagem={true}
            className="
            p-0
            object-contain 
            w-full max-w-[800px]
            h-[300px] 
            md:(w-screen h-[76vh])"
          />
          {videoConfiguracoes?.videoUrlCode && visible ? loadIframe() : null}
        </div>
      </div>
      <NavMain
        {...mainMenu}
      />
      <div class="md:hidden">
        <BrothersCTA />
      </div>
    </div>
  );
}
