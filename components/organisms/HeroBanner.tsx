import ImageHero from "$start/components/atoms/Image.tsx";
import { type ImageProps } from "$start/components/atoms/Image.tsx";
import type { Image } from "$live/std/ui/types/Image.ts";
import NavMain from "$start/components/molecules/NavMain.tsx";
import { navMainProps } from "$start/components/molecules/NavMain.tsx";
import { useState,useEffect } from 'preact/hooks';

export type Props = {
  mainMenu?: navMainProps;
  imageProps: ImageProps;
  videoProps: videoProps;
};

export interface videoProps{
    /**
   * @description imagem poster do vídeo
   */
    poster: Image;
    /**
   * @description SEO texto alternative
   */
    altText?: string;
     /**
   * @description SEO texto title
   */
    seoTitle: string;
     /**
   * @description url do vídeo no yutube
   */
    videoUrl?: string;
}


export default function HeroBanner({ imageProps, videoProps, mainMenu }: Props) {

    const [visible, setVisible] = useState(false);

    

    function loadIframe(){

        console.log(visible)

        return(
            <iframe  
                class="object-contain w-full absolute top-0 left-0 z-10"
                width="560" height="315" 
                src={videoProps.videoUrl+"?autoplay=1 "}title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen poster=""> 
            </iframe>
            
        )
    }

  return (
    <div class="w-full pt-12 flex flex-col justify-center items-center bg-[#f3cc41]">
      <ImageHero
        {...imageProps}
        className=" object-contain w-[228px] h-32 max-w-[300px] md:(w-24 h-14)"
      />
      <h2 class="text-3xl font-black uppercase font-['rocgrotesc'] font-black">
        Empresa 100% familiar
      </h2>
      <h3 class="text-2xl">
        Consertar canos é a nossa diversão!
      </h3>
      <div class="w-full relative" onClick={()=> setVisible(true)}>
        <ImageHero
          {...imageProps}
          src={videoProps?.poster}
          altText={videoProps?.altText}
          title={videoProps?.seoTitle}
          className="absolute top-0 left-0 p-0 object-contain w-full h-[300] max-w-[600px] md:(w-24 h-14)"
        />
        {videoProps?.videoUrl && visible ? loadIframe() : null}
      </div>
      
      <NavMain/>
    </div>
  );
}
