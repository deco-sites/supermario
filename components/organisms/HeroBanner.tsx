import Image from "$start/components/atoms/Image.tsx";
import { type ImageProps } from "$start/components/atoms/Image.tsx";
import NavMain from "$start/components/molecules/NavMain.tsx";
import { navMainProps } from "$start/components/molecules/NavMain.tsx";

export type Props = {
  mainMenu?: navMainProps;
  imageProps: ImageProps;
};

function loadIframe(){
    return(
        <iframe class="object-contain w-full" width="560" height="315" src="https://www.youtube.com/embed/L7Jt4BdAOE0?autoplay=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen ></iframe>
    )
}

export default function HeroBanner({ imageProps, mainMenu }: Props) {
  return (
    <div class="w-full pt-12 p-4 flex flex-col justify-center items-center bg-[#f3cc41]">
      <Image
        {...imageProps}
        className=" object-contain w-[228px] h-32 max-w-[300px] md:(w-24 h-14)"
      />
      <h2 class="text-3xl font-black uppercase font-['rocgrotesc'] font-black">
        Empresa 100% familiar
      </h2>
      <h3 class="text-2xl">
        Consertar canos é a nossa diversão!
      </h3>
      <div class="w-[400px]">
        {loadIframe()}
      </div>
      
      <NavMain/>
    </div>
  );
}
