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
    <li>
      <a
        href={itemUrl?.toString().replaceAll(",", "")
          .replaceAll(" ", "")}
        class={"text-gray-500 hover:text-gray-700 py-1 border-gray-500"}
      >
        {itemName}
      </a>
    </li>
  );
}
