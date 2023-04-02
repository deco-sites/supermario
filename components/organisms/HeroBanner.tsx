import type { Image } from "$live/std/ui/types/Image.ts";

//atoms imports
import ImageHero,{ ImageProps } from "$start/components/atoms/Image.tsx";

//molecules imports
import NavMain,{ navMainProps } from "$start/components/molecules/NavMain.tsx";
import BrothersCTA from "$start/components/molecules/brothersCTA.tsx";
import YutubeVideoIframe  from "$start/components/molecules/YutubeVideoIframe.tsx";
import TextSlider from "$start/components/molecules/TextSlider.tsx";

import { useState } from "preact/hooks";

export type Props = {
  mainMenu?: navMainProps;
  imageProps: ImageProps;
  videoConfiguracoes: videoProps;
};

export interface videoProps {
  /** @description imagem poster do vídeo */
  poster: Image;

 /** @description imagem poster mobile do vídeo */
  posterMobile: Image;

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
  const [iframeVisible, setIframeVisible] = useState(false);


  return (
    <div class="md:flex flex-col-reverse bg-[#f3cc41] pt-28 pb-12 md:(pt-[4.7rem] pb-8)">
      {iframeVisible
        ? (
          <div
            id="botaoCloseVideo"
            onClick={() => setIframeVisible(false)}
            class="w-[32px] fixed left-6 top-[8rem]  z-30 lg:(w-[50px])"
            aria-label="Close the footer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="#fff"
            >
              <path
                d="M7.292 8L1.146 1.854a.502.502 0 01.708-.708L8 7.292l6.146-6.146a.502.502 0 01.708.708L8.708 8l6.146 6.146a.502.502 0 01-.708.708L8 8.708l-6.146 6.146A.502.502 0 011.5 15s-.256-.049-.354-.146a.502.502 0 010-.708L7.292 8z"
                fill-rule="evenodd"
              >
              </path>
            </svg>
          </div>
        )
        : null}
      <div class="flex flex-col">
        <div class="w-full h-auto flex flex-col justify-start items-center 
      md:(flex-row justify-around pt-8)">
          <div class="flex flex-col items-center text-center uppercase font-grotesk text-[#242424]">
            
            <ImageHero
              {...imageProps}
              className=" object-contain w-[228px] h-32 max-w-[300px] md:(w-1/2 h-36)"
            />
            <h2 class="text-3xl">
              Empresa 100<span class="font-sans font-bold">%</span>familiar
            </h2>
            <h3 class="text-2xl text-[1.6rem]">
              Consertar canos é a nossa diversão!
            </h3>
            <div class="hidden md:block">
              <BrothersCTA />
            </div>
          </div>

          <div
            class="w-auto h-auto relative py-8 md:(pt-16 pb-0)"
            onClick={() => setIframeVisible(true)}
          >
            <picture loading="eager">
              <source srcset={videoConfiguracoes?.poster} media="(min-width:800px)" width="800" height="300"/>
              <ImageHero
              {...imageProps}
              src={videoConfiguracoes?.posterMobile}
              altText={videoConfiguracoes?.altText}
              title={videoConfiguracoes?.seoTitle}
              preCarregarImagem={true}
              className="p-0 object-contain w-full max-w-[800px] h-[300px] md:(w-screen h-[73vh])"
            />
            </picture>
           
            {videoConfiguracoes?.videoUrlCode && iframeVisible ? <YutubeVideoIframe videoUrlCode={videoConfiguracoes?.videoUrlCode}/> : null}
          </div>
        </div>
        <div
          id="certified-wrapper"
          class="hidden lg:(w-full flex justify-start items-center relative text-4xl px-[4vw]) "
        >
          <img
            class="w-[100px] h-24 "
            src="/images/certifiedsuper.webp"
            loading="lazy"
            preload="false"
            height={100}
            width={100}
            alt="certificado dos irmãos"
          />
          <TextSlider/>
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
