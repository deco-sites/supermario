import NavItem, { navItemProps } from "$start/components/atoms/NavItem.tsx";

export interface footerProps {
  navItem: navItemProps[];
}

export default function Footer({ navItem }: footerProps) {
  return (
    <footer class="w-full flex flex-col justify-center items-center bg-[#f3cc41] gap-12 lg:p-20">
      <span id="line-divider" class="w-full border-[#f81621] border-[2px]" />
      <nav>
        <ul class="flex flex-col gap-6 px-12 lg:(flex-row flex-wrap justify-center items-center) font-sans font-bold">
          {navItem?.map((menuItem) => (
          <NavItem
            className="!max-w-[300px]"
            key={menuItem?.itemName || "default"}
            itemName={menuItem?.itemName}
            itemUrl={menuItem?.itemUrl}
          />
        ))}
        </ul>
      </nav>
      <div id="footer-text" class="px-12"><a href="#$pageError" class="font-sans font-bold text-[12px] lg:text-[16px]"><u class="text-[#0623ff]">Copyright</u> 2023. | Construído por Mario e Luigi</a></div>
    </footer>
  );
}