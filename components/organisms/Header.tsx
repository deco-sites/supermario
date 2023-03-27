import Image from "$start/components/atoms/Image.tsx";
import { type ImageProps } from "$start/components/atoms/Image.tsx";

export type Props = {
  imageProps: ImageProps;
};

export default function Header({ imageProps}: Props) {
  return (
    <div class="bg-white w-full py-2 px-2 flex flex-col md:(flex-row px-6) gap-4 fixed z-10 border-black border-b-1">
      <audio id="phone-ring-audio" src="audio/phone-ring.mp3"></audio>
      <div class="flex justify-around items-center md:(justify-between w-full)">
        <h1>
          <Image
            {...imageProps}
            className=" object-contain w-[60px] h-12 max-w-[160px] md:(w-28 h-14)"
          />
        </h1>
        <div id="contact-wrapper" class="flex gap-2 text-[12px]">
          <div class="w-full bg-[#f81722] py-0.5 border-t-2 pl-1.5 pr-4 md:(py-2 px-3) border-[#f3777d] uppercase">
            <a
              class="flex justify-center items-center text-center gap-2 text-white leading-4 tracking-wider	font-black md:text-[14px]"
              href="https://www.universalpics.com.br/micro/super-mario-bros"
              target="_blank"
            >
              Comprar<br></br>Agora
              <img
                class="w-6 h-6 max-w-[33px] max-h-[32px] md:(w-9 h-8)"
                src="icons/booknow.png"
                width="100"
                height="100"
                alt="agendar uma visita"
                title="agendar uma visita"
              />
            </a>
          </div>
          <div class="w-auto flex justify-center items-start gap-2 p-0.5 text-[#f81621] leading-[0.90rem] md:(items-center  leading-5)">
            <img
              class="w-8 h-8 max-w-[80px] max-h-[42px] md:(w-10 h-10)"
              src="icons/contact.webp"
              width="100"
              height="100"
              alt="contatar os imãos encanadores"
            />
            <p class="flex flex-col font-bold md:(text-[19px])">
              Visite-nos em 
              <span class="text-[8px] font-normal md:text-[1rem]">SMBEncanadores.com.br</span>
            </p>
            
          </div>
        </div>
      </div>
    </div>
  );
}
