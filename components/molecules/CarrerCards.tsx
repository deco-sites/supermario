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
    <div class="flex flex-col border-2 border-[#f81621] relative">
      <img
        class="w-[100px] h-24  rounded-1/2 border-2 border-[#f81621]"
        src={src}
        loading="lazy"
        preload="false"
        height={100}
        width={100}
        alt="vagas de emprego na smbencanadores"
      />
      <h3>{cargo}</h3>
      <p>{description}</p>
    </div>
  );
}
