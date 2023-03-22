import Image from "$start/components/atoms/Image.tsx";
import { type ImageProps } from "$start/components/atoms/Image.tsx";

export type Props = {
  /** @description dadadadada **/
  menu?: menuItem[];
  imageProps: ImageProps;
};

export interface menuItem {
  itemName?: string;
  itemUrl?: string;
}

export default function Header({ imageProps, menu }: Props) {
  console.log(menu);
  return (
    <div class="bg-white w-full max-w-screen-lg py-6 px-8 flex flex-col md:flex-row gap-4 ">
      <div class="flex items-center flex-1">
        <Image
          {...imageProps}
          className="w-[90px] h-12 max-w-[160px]"
        />
      </div>
      <ul class="flex items-center gap-6">
        {menu?.map((item, index) => (
          <li>
            <a
              href={item?.itemUrl?.toString().replaceAll(",", "")
                .replaceAll(" ", "") || "/"}
              class={"text-gray-500 hover:text-gray-700 py-1 border-gray-500"}
            >
              {item?.itemName}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
