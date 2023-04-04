export interface CarrerCardProps{
    /** @description Nome do cargo */
    cargo: string;
    /** @description Descrição da vaga */
    description?: string;
    /** @description url do icone do card da vaga */
    src?: string;
}

export default function CarrerCard({cargo,description,src}: CarrerCardProps) {
  return (
    <div class="w-full max-w-[80%] h-auto bg-white flex flex-col justify-start items-center border-2 py-8 px-6 border-[#f81621] relative text-center lg:(max-w-[268px] h-72  text-left p-4 )">
      <img
        class="w-[100px] h-[100px]  rounded-1/2 border-0 border-[#f81621] absolute -top-[50px]"
        src={src}
        loading="lazy"
        preload="false"
        height={100}
        width={100}
        alt="vagas de emprego na smbencanadores"
      />
      <h3 class="w-full pt-12 pb-4 text-2xl uppercase font-grotesk font-bold ">{cargo}</h3>
      <p class="leading-4 text-[16px] font-sans font-bold lg:text-[13px]">{description}</p>
    </div>
  );
}
