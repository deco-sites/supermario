export interface Props {
  /** @description Qual mensagem deseja exibir no banner de texto rotativo */
  menssage?: string;
}

export default function Marquee({menssage="Visite-nos em smbencanadores.com.br"}:Props) {
  return (
    <div class="w-full max-w-full inline-block overflow-hidden bg-[#f81621] relative text-[#fff] py-2">
      <div id="marquee" class="animate-text-Marquee overflow-hidden whitespace-nowrap inline-flex uppercase text-[2.5rem] lg:text-[4rem] font-grotesk">
        <p class="px-12">{menssage}</p>
        <p class="px-12">{menssage}</p>
      </div>
    </div>
  );
}