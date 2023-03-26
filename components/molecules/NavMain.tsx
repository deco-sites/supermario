import NavItem from "$start/components/atoms/NavItem.tsx";
import { navItemProps } from "$start/components/atoms/NavItem.tsx";

export interface navMainProps {
  navItem?: navItemProps[];
}

export default function NavMain({ navItem }: navMainProps) {
  return (
    <nav>
      <ul class="flex flex-col justify-center items-center gap-6 md:(flex-row gap-1)">
        {navItem?.map((item) => {
          return <NavItem itemName={item.itemName} itemUrl={item.itemUrl} />;
        })}
      </ul>
    </nav>
  );
}
