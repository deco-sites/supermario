import CaptchaItem from "$start/components/atoms/CaptchaItem.tsx";
import { useEffect } from "preact/hooks";

export default function Captcha() {

  useEffect(() => {
      window.localStorage.setItem("activeSectionAtendimento", "false");
  }, []);

  function getCaptcha() {

    const avaliableQuestNames = ["Sinais de trânsito", "Carros"];

    const theSinalsSecretCaptcha = [0,0,0,3,0,0,0,7,0,0,0,0,0,0,0,0,];
    const theCarSecretCaptcha = [0,0,0,0,0,0,0,0,8,9,10,0,12,13,14,0,];
    const keySecret = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

    const index = Math.round(Math.random());
    const nameOfCaptcha = avaliableQuestNames[index];
    const imageOfCaptcha = index === 0
      ? "/images/cap1.webp"
      : "/images/cap2.webp";

    function handlleSubmitCaptcha() {
      let selectedSecret: number[] = [];

      //retorna uma secret baseada na imagem que é retornada ao ter um index definido
      index === 0
        ? selectedSecret = theSinalsSecretCaptcha
        : selectedSecret = theCarSecretCaptcha;

      const theSecretIsvalid = keySecret.every((item, i) =>
        item === selectedSecret[i]
      );

      if (theSecretIsvalid) {
        window.localStorage.setItem("activeSectionAtendimento", "true");
        window.location.href = "/#./sections/Atendimento.tsx-cf3d";
      } else {
        alert("você errou a combinação secreta dos super irmãos")
        window.location.reload()
        return false;
      }
    }

    return (
      <div id="captchaWrapper" class="bg-[#139c43] m-[30px] p-[6px] relative lg:(w-[29%])">
        <span class="text-white font-bold pl-4">Clique em</span>
        <h3 class="uppercase text-white text-[20px] font-bold pl-4">{nameOfCaptcha}</h3>
        <ul class="flex flex-wrap justify-center items-center lg:(w-[350px] m-auto)">
          <img
            class="absolute top-[60px] px-2 lg:(w-[355px] h-[335px] )"
            src={imageOfCaptcha}
            alt="resolva o desafio do carro"
            title="resolva o desafio do carro"
          />
          <CaptchaItem
            idOfCaptcha={0}
            setKey={() => keySecret[0] = 0}
          />
          <CaptchaItem idOfCaptcha={1} setKey={() => keySecret[1] = 1} />
          <CaptchaItem idOfCaptcha={2} setKey={() => keySecret[2] = 2} />
          <CaptchaItem idOfCaptcha={3} setKey={() => keySecret[3] = 3} />

          <CaptchaItem idOfCaptcha={4} setKey={() => keySecret[4] = 4} />
          <CaptchaItem idOfCaptcha={5} setKey={() => keySecret[5] = 5} />
          <CaptchaItem idOfCaptcha={6} setKey={() => keySecret[6] = 6} />
          <CaptchaItem idOfCaptcha={7} setKey={() => keySecret[7] = 7} />

          <CaptchaItem idOfCaptcha={8} setKey={() => keySecret[8] = 8} />
          <CaptchaItem idOfCaptcha={9} setKey={() => keySecret[9] = 9} />
          <CaptchaItem idOfCaptcha={10} setKey={() => keySecret[10] = 10} />
          <CaptchaItem idOfCaptcha={11} setKey={() => keySecret[11] = 11} />

          <CaptchaItem idOfCaptcha={12} setKey={() => keySecret[12] = 12} />
          <CaptchaItem idOfCaptcha={13} setKey={() => keySecret[13] = 13} />
          <CaptchaItem idOfCaptcha={14} setKey={() => keySecret[14] = 14} />
          <CaptchaItem idOfCaptcha={15} setKey={() => keySecret[15] = 15} />
        </ul>
        <div class="w-full flex justify-end items-end p-3 pb-1">
          <button
            onClick={() => handlleSubmitCaptcha()}
            class="bg-white py-[6px] px-6 font-bold text-[#139c43] outline-none hover:outline-none"
          >
            Enviar
          </button>
        </div>
      </div>
    );
  }

  const activeCaptcha = getCaptcha();

  return (
    <div id="captcha" class="w-screen h-1/3 flex justify-center items-center flex-col z-30 top-20 bg-white">
      <h1 class="w-[60%] lg:w-[40%] flex justify-center items-center flex-wrap font-bold uppercase text-center">
        <span class="text-[42px] lg:text-[52]">Primeiro,</span>
        <span>vamos confirmar que você não é um robô.</span>
      </h1>
      {activeCaptcha}
    </div>
  );
}
