
export interface StarProps{
    active?: boolean
}
export default function Star({active}:StarProps){
  return(
    <>
    {
        active === true ? 
        <img 
        class="w-7 h-[25px] lg:(w-8 h-[28px])"
        src="icons/fourstarsOn.webp"
        title="estrela de avaliação"
        alt="estrela de avaliação"
        loading="eager"
        fetchpriority="low"
        />
        : <img 
        class="w-7 h-7 lg:(w-8 h-8)"
        src="icons/fourstarsOff.webp"
        title="estrela de avaliação"
        alt="estrela de avaliação"
        preload="false"
        lazyload="eager"
        fetchpriority="low"
        />
    }
    </>
  )
}