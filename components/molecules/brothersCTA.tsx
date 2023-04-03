export default function BrothersCTA(){
    return(
        <div class="w-screen flex justify-around items-center pt-8 px-4 md:(w-[36vw] justify-center gap-16 )">
        <div id="brotherWrapper" class="flex justify-center items-center">
          <picture loading="lazy">
            <source srcset="/images/mario.webp" media="(min-width:800px)" width="800" height="300"/>
            <img
              class="w-[108px] h-[257px] md:(w-full h-[286px])"
              src="/images/marioMobile.webp"
              loading="lazy"
              preload="false"
              alt="personagem mario encanador"
              title="Mario"
          />
          </picture>
          <picture loading="lazy">
            <source srcset="/images/luigi.webp" media="(min-width:800px)" width="800" height="300"/>
            <img
              class="w-[108px] h-[257px] md:(w-full h-[286px])"
              src="/images/luigiMobile.webp"
              loading="lazy"
              preload="false"
              alt="personagem luigi encanador"
              title="Luigi"
            />
          </picture>
        </div>

        <div class="flex flex-col gap-8 md:gap-12">
          <img
            class="w-full h-28 md:h-[9vw]"
            src="/images/tv.webp"
            loading="lazy"
            preload="false"
            height={100}
            width={100}
            alt="tv encanador"
          />
          <a href="https://www.youtube.com/watch?v=iL6-Q62CjbA" class="relative group" target="_blank">
            <img
              class="w-full h-[40px] absolute z-[2] duration-1000 transition-transform group-hover:(duration-1000 ease-in-out transition-transform translate-x-1/3 ) lg:h-[52px] "
              src="/images/NovoProjeto.webp"
              loading="lazy"
              preload="false"
              height={100}
              width={100}
              alt="tampa de esgoto"
            />
            <div class="w-[80%] h-8 relative top-2 -left-4 z-[1] bg-black rounded-1/2 border-t-2 border-4 border-[#c8a82f] md:(h-10 top-1 border-t-2 border-[6px])" />
          </a>
        </div>
      </div>
    )
}