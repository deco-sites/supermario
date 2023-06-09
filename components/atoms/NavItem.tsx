export interface navItemProps {

  /** @description Nome item do menu */
  itemName?: string;
  /** @description Url do item do menu - não utilize caracteres especiais */
  itemUrl?: string;

  className?:string;
  
}

export default function NavItem({ itemName ="default", itemUrl = "/" , className}: navItemProps) {
  return (
    <li class={("flex md:w-screen max-w-[400px]")+" "+className}>
      <a
        href={itemUrl?.toString().replaceAll(",", "")
          .replaceAll(" ", "")}
        class="flex justify-center items-center min-w-[300px] min-h-[36px] text-white text-center py-2 w-full bg-[#B10C10] border-t-[5px] border-lr-2 pl-1.5 pr-4  border-[#f3777d] rounded-[9px] uppercase md:(w-full pt-[1px] pb-0 px-3 rounded-none  border-lr-0 border-t-[3px] outline-red)"
      >
        {itemName}
      </a>
    </li>
  );
}
