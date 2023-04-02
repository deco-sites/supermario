export default function BrothersCTA(){
    return(
        <div class="w-screen flex justify-around items-center pt-8 px-4 md:(w-[36vw] justify-center gap-16 )">
        <div id="brotherWrapper" class="flex justify-center items-center">
          <img
            class="w-1/2 h-64 md:(w-[60%] h-[20vw])"
            src="/images/mario.webp"
            loading="lazy"
            preload="false"
            height="300"
            width="500"
            alt="personagem mario encanador"
            title="Mario"
          />
          <img
            class="w-1/2 h-64 md:(w-[60%] h-[20vw])"
            src="/images/luigi.webp"
            loading="lazy"
            preload="false"
            height="300"
            width="500"
            alt="personagem luigi encanador"
            title="Luigi"
          />
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