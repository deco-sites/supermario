export interface navItemProps {
  /**
   * @description Nome item do menu
   */
  itemName?: string;
  /**
   * @description Url do item do menu - não utilize caracteres especiais
   */
  itemUrl?: string;
}

export default function NavItem({ itemName, itemUrl = "/"}: navItemProps) {
  return (
    <li class="flex md:w-full">
      <a
        href={itemUrl?.toString().replaceAll(",", "")
          .replaceAll(" ", "")}
        class={"min-w-[300px] text-white text-center py-1 w-full bg-[#f81722] py-0.5 border-t-[5px] border-lr-0 pl-1.5 pr-4  border-[#f3777d] rounded-[9px] uppercase md:(w-full py-2 px-3 border-t-2 rounded-none outline-red)"}
      >
        {itemName}
      </a>
    </li>
  );
}
