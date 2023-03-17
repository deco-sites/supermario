import Image from "$start/components/atoms/Image.tsx";
import {type ImageProps} from "$start/components/atoms/Image.tsx";

export type Props = {
  active: string;
  /** @title nome do item do menu */
  menu:{
    itemName:string[],
    itemUrl: string[]
  },
  imageProps: ImageProps;
};

export default function Header({imageProps, menu, active }: Props) {
  const menus = [
    { name: menu || "Docs", href: "/" },
  ];

  return (
    <div class="bg-white w-full max-w-screen-lg py-6 px-8 flex flex-col md:flex-row gap-4">
      <div class="flex items-center flex-1">
        <Image 
          {...imageProps}
          className="w-[90px] h-12 max-w-[160px]"
        />
      </div>
      <ul class="flex items-center gap-6">
        {menus.map((menu) => (
          <li>
            <a
              href={menu.href}
              class={"text-gray-500 hover:text-gray-700 py-1 border-gray-500" +
                (menu.href === active ? " font-bold border-b-2" : "")}
            >
              {menu.name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
  