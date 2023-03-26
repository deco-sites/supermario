export default function BrothersCTA(){
    return(
        <div class="w-screen flex justify-center items-center gap-4 pt-8 px-4 md:(w-[36vw])">
        <div id="brotherWrapper" class="flex justify-center items-center">
          <img
            class="w-[40%] h-auto"
            src="/images/mario.webp"
            loading="lazy"
            preload="false"
            height={100}
            width={100}
            alt="personagem mario encanador"
          />
          <img
            class="w-[40%] h-auto"
            src="/images/luigi.webp"
            loading="lazy"
            preload="false"
            height={100}
            width={100}
            alt="personagem luigi encanador"
          />
        </div>

        <div class="flex flex-col gap-8">
          <img
            class="w-full h-auto"
            src="/images/tv.webp"
            loading="lazy"
            preload="false"
            height={100}
            width={100}
            alt="tv encanador"
          />
          <a href="https://www.youtube.com/watch?v=iL6-Q62CjbA" class="relative group" target="_blank">
            <img
              class="w-full h-auto absolute z-[2] duration-1000 transition-transform group-hover:(duration-1000 ease-in-out transition-transform translate-x-1/3 )"
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