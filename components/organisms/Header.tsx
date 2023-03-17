import Image from "$start/components/atoms/Image.tsx";
import {type ImageProps} from "$start/components/atoms/Image.tsx";

export type Props = {
  /** @title nome do item do menu */
  menu:{
    itemName:string[],
    itemUrl?: string[]
  },
  imageProps: ImageProps;
};

export default function Header({imageProps, menu}: Props) {
  
  // const menus = [
  //   { name: menu.itemName || "Nome do item do menu", href: menu.itemUrl.toString().replace(',','') || "/" }
  // ];
  
  const menus = [menu]

  console.log(menus)

  return (
    <div class="bg-white w-full max-w-screen-lg py-6 px-8 flex flex-col md:flex-row gap-4">
      <div class="flex items-center flex-1">
        <Image 
          {...imageProps}
          className="w-[90px] h-12 max-w-[160px]"
        />
      </div>
      <ul class="flex items-center gap-6">
        {menus[0].itemName.map((name, index) => (
          
          <li>
            <a
              href={menus[0]?.itemUrl?.[index].toString().replaceAll(",","").replaceAll(" ","") || "/"}
              class={"text-gray-500 hover:text-gray-700 py-1 border-gray-500"}
            >
              {name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
  