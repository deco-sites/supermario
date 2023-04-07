import CarrerCard from "$start/components/molecules/CarrerCards.tsx";
import Marquee from '$start/components/atoms/Marquee.tsx';

export default function Carreiras() {
  return (
    <div class="bg-marioGradient py-12">
      <Marquee/>
      <div id="carreiraTitleWrapper" class="flex justify-center flex-col-reverse items-center gap-5 uppercase pt-12 pb-16 lg:(flex-row gap-8 pl-0 pb-36)">
        <h2 class="text-[32px] text-[#179c42] font-bold lg:(w-[40%] text-right text-[48px])">Carreiras</h2>
        <img
          class="w-[260px] h-[170px] "
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
            key="CONTADOR1234"
            cargo="Contador"
            description="Nós nos encarregamos de trazer as moedas enquanto você deixa tudo em ordem."
            src="/icons/bookkeeper.png"
        />
        <CarrerCard
            key="GERENTEDEMARKETING1234"
            cargo="Gerente de marketing"
            description="Acha que consegue tornar o Mario e o Luigi famosos?"
            src="/icons/marketing.png"
        />
        <CarrerCard
            key="motorista1234"
            cargo="Motorista"
            description="Precisa saber dirigir a nossa van- ou ajudar a empurrar se ela não quiser pegar. Estacionar no Brooklyn pode ser complicado, então nosso motorista deve respeitar as placas de estacionamento!"
            src="/icons/driver.png"
        />
      </div>
    </div>
  );
}
