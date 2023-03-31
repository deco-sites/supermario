
export interface aboutProps{
    /** @description  titulo principal */
    title?: string;
    
     /** @description  adicione um novo parágrafo */
    paragraphs: paragraphProps[];
}

export interface paragraphProps{
     /** @description  texto descritivo */
    description?: string;
}

export default function About({title,paragraphs}:aboutProps){

    return(
        <div id="#about" class="w-full flex flex-col-reverse justify-center items-center gap-16 py-12 px-8 lg:(flex-row gap-8 py-24)">
            <div id="textWrapper" class="lg:w-1/2">
                <h2 class=" text-[32px] text-[#179c42] font-bold lg:text-[48px]">
                    {title}
                </h2>
                {
                    paragraphs.map(paragraph =><p class="pt-4">{paragraph.description}</p>)
                }
            </div>   
            <div id="sideBannerWrapper" class="relative">
                <img 
                    class="w-full max-h-[400px] h-[110vw] lg:(h-[605px] w-[378px] max-h-[720px])"
                    src="images/about.webp"
                    title="irmãos encanadores mario e luigi"
                    alt="irmãos encanadores mario e luigi"
                    loading="eager"
                    fetchpriority="low"
                />
                <div class="w-[136px] h-[136px] flex items-center justify-center absolute top-72 left-32 bg-[#f81722] shadow-buttonsShadow rounded-1/2 lg:(w-[186px] h-[186px] top-[27rem] left-52 )">
                <img 
                    class="w-[110px] h-[110px] animate-spin-slow lg:(w-[156px] h-[156px])"
                    src="icons/arrowRotate.webp"
                    title="selo atendimento todo dia"
                    alt="selo atendimento todo dia"
                    loading="eager"
                    fetchpriority="low"
                />
                <p class="w-1/2 flex flex-col justify-center items-center absolute animate-pulse-zoom text-3xl  font-bold text-white lg:text-4xl">
                    24/7
                    <span class="text-center text-[8px] leading-[0.5rem] font-normal lg:(leading-3 text-[12px])">
                        ATENDEMOS <br/>EMERGÊNCIAS
                    </span>
                </p>
                </div>
            </div>
        </div>
    )
}