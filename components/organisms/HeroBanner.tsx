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

  useEffect(() => {
    console.log(visible);
  }, [visible]);

  function loadIframe() {
    console.log(visible);

    return (
      <div class="flex justify-center items-center w-screen h-screen fixed  bg-black overflow-hidden top-0 left-0 z-[9] lg:(left-[0%] top-[20px])">
        <iframe
          class="object-contain w-full h-[42%] lg:h-[80%]"
          width="860"
          height="615"
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

  function sliderMsg() {
    console.log("call");
    const [msg, setMsg] = useState("");
    const [msgIndex, setMsgIndex] = useState(0);
    const listMsg = [
      "Agora atendendo no Brooklyn e Queens!",
      "Trabalho confiável e de qualidade!",
      "Satisfação garantida!",
      "Conhecidos na vizinhança!",
    ];

    setTimeout(() => {
      if (msgIndex > listMsg.length) {
        setMsg(listMsg[0]);
        setMsgIndex(0);
      } else {
        setMsg(listMsg[msgIndex]);
        setMsgIndex(msgIndex + 1);
      }
    }, 4000);
    return <p id="slide" class="w-auto absolute left-[12rem]">{msg}</p>;
  }

  return (
    <div class="md:flex flex-col-reverse bg-[#f3cc41] pt-28 pb-12 md:(pt-[4.7rem] pb-8)">
      {
        visible ?  <div
        id="botaoCloseVideo"
        onClick={() => setVisible(false)}
        class="w-[32px] fixed left-6 top-[8rem]  z-30 lg:(w-[50px])"
        aria-label="Close the footer"
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="#fff">
          <path
            d="M7.292 8L1.146 1.854a.502.502 0 01.708-.708L8 7.292l6.146-6.146a.502.502 0 01.708.708L8.708 8l6.146 6.146a.502.502 0 01-.708.708L8 8.708l-6.146 6.146A.502.502 0 011.5 15s-.256-.049-.354-.146a.502.502 0 010-.708L7.292 8z"
            fill-rule="evenodd"
          >
          </path>
        </svg>
      </div> : null
      }
      <div class="flex flex-col">
        <div class="w-full h-auto flex flex-col justify-start items-center 
      md:(flex-row justify-around pt-8)">
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
            class="w-auto h-auto relative py-8 md:(pt-16 pb-0)"
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
            md:(w-screen h-[73vh])"
            />
            {videoConfiguracoes?.videoUrlCode && visible ? loadIframe() : null}
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
            alt="tampa de esgoto"
          />
          <style
            dangerouslySetInnerHTML={{
              __html: `
              @keyframes fadeIn{
                0%{opacity: 0}
                50%{opacity: 1}
                100%{opacity: 0}
              }
              #slide{
                animation: fadeIn 4s ease-in-out infinite
              }
              `,
            }}
          >
          </style>
          {sliderMsg()}
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
