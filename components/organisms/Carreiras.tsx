import CarrerCard from "../molecules/CarrerCards.tsx";

export default function Carreiras() {
  return (
    <div>
      <div id="carreiraTitleWrapper" class="flex justify-end items-center gap-8 uppercase py-16">
        <h2 class="text-[32px] text-[#179c42] font-bold lg:text-[48px]">Carreiras</h2>
        <img
          class="w-[280px] h-44 "
          src="/images/apply.png"
          loading="lazy"
          preload="false"
          height={300}
          width={200}
          alt="se inscreva agora para vaga de emprego na smbencanadores"
        />
      </div>
      <div id="vagasCardsWrapper" class="flex flex-col justify-center items-center gap-16 lg:(flex-row gap-4)">
        <CarrerCard
            key="atendente1234"
            cargo="Atendente"
            description="Somos inundados com chamados para serviços todos os dias e precisamos de alguém que nos ajude a não entrar pelo cano."
            src="/icons/dispatcher.png"
        />
        <CarrerCard
            key="atendente1234"
            cargo="Atendente"
            description="Somos inundados com chamados para serviços todos os dias e precisamos de alguém que nos ajude a não entrar pelo cano."
            src="/icons/bookkeeper.png"
        />
        <CarrerCard
            key="atendente1234"
            cargo="Atendente"
            description="Somos inundados com chamados para serviços todos os dias e precisamos de alguém que nos ajude a não entrar pelo cano."
            src="/icons/marketing.png"
        />
        <CarrerCard
            key="atendente1234"
            cargo="Atendente"
            description="Somos inundados com chamados para serviços todos os dias e precisamos de alguém que nos ajude a não entrar pelo cano."
            src="/icons/driver.png"
        />
      </div>
    </div>
  );
}
