import Image from "$start/components/atoms/Image.tsx";
import { type ImageProps } from "$start/components/atoms/Image.tsx";
import NavMain from "$start/components/molecules/NavMain.tsx";
import { navMainProps } from "$start/components/molecules/NavMain.tsx";

export type Props = {
  mainMenu?: navMainProps;
  imageProps: ImageProps;
};

export default function Header({ imageProps, mainMenu }: Props) {
  return (
    <div class="bg-white w-full max-w-screen-lg py-6 px-8 flex flex-col md:flex-row gap-4 ">
      <audio id="phone-ring-audio" src="audio/phone-ring.mp3"></audio>
      <div class="flex justify-between items-center">
        <Image
          {...imageProps}
          className=" object-contain w-full h-12 max-w-[160px]"
        />
        <div id="contact-wrapper" class="flex text-[12px]">
          <div class="w-auto flex justify-center items-center bg-[#cd0b14] p-2 border-t-2 border-[#f3777d]">
            <a
              href="https://www.universalpics.com.br/micro/super-mario-bros"
              target="_blank"
            >
              Comprar<br></br>Agora
            </a>
            <a
              href="https://www.universalpics.com.br/micro/super-mario-bros"
              target="_blank"
            >
              <img
                class="w-6 h-6 max-w-[33px] max-h-[32px] md:(w-9 h-8)"
                src="icons/booknow.png"
                width="100"
                height="100"
              />
            </a>
          </div>
          <div class="w-auto flex justify-center items-center p-2 text-[#f81621]">
            <img
              class="w-6 h-6 max-w-[33px] max-h-[32px] md:(w-9 h-8)"
              src="icons/contact.webp"
              width="100"
              height="100"
            />
            Visite-nos em SMBEncanadores.com.br
          </div>
        </div>
      </div>
      <NavMain
        {...mainMenu}
      />
    </div>
  );
}
