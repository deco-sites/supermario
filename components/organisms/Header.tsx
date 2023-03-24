import Image from "$start/components/atoms/Image.tsx";
import { type ImageProps } from "$start/components/atoms/Image.tsx";
import NavMain from '$start/components/molecules/NavMain.tsx'
import { navMainProps } from "$start/components/molecules/NavMain.tsx";

export type Props = {
  mainMenu?: navMainProps;
  imageProps: ImageProps;
};

export default function Header({ imageProps, mainMenu}: Props) {
  return (
    <div class="bg-white w-full max-w-screen-lg py-6 px-8 flex flex-col md:flex-row gap-4 ">
      <div class="flex items-center flex-1">
        <Image
          {...imageProps}
          className="w-[90px] h-12 max-w-[160px]"
        />
        <div class="w-auto flex justify-center items-center bg-[#cd0b14] p-2">
          <a href="https://www.universalpics.com.br/micro/super-mario-bros" target="_blank">Comprar<br></br>Agora</a>
          <a href="https://www.universalpics.com.br/micro/super-mario-bros" target="_blank">
            <img class="w-6 h-6 max-w-[33px] max-h-[32px] md:(w-9 h-8)" src="images/booknow.png" width="100" height="100"/>
          </a>
        </div>
        <NavMain
          {...mainMenu}
        />
      </div>
    </div>
  );
}
