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
    <div class="bg-[#f3cc41]">
      <Image
        {...imageProps}
        className=" object-contain w-[228] h-32 max-w-[300px] md:(w-24 h-14)"
      />
    </div>
  );
}
