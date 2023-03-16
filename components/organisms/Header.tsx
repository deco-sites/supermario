import Logo from "$start/components/atoms/logo.tsx";
import type {LogoProps} from "$start/components/atoms/logo.tsx";

export type Props = {
  active: string;
  /** @title Número de produtos */
  /** @description Total de produtos para mostrar na vitrine */
  menuName: string;
  logoProps: LogoProps;
};

// export type LogoProps{

// }

export default function Header({logoProps, menuName, active }: Props) {
  const menus = [
    { name: menuName || "Home", href: "/" },
    { name: menuName || "Components", href: "/" },
    { name: menuName || "Docs", href: "/" },
  ];

  return (
    <div class="bg-white w-full max-w-screen-lg py-6 px-8 flex flex-col md:flex-row gap-4">
      <div class="flex items-center flex-1">
        <Logo {...logoProps}/>
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
              {menuName}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
  