import { useState, useEffect } from "preact/hooks";

export default function Atendimento() {
  const [isSectionActive, setSectionActive] = useState(false);

  useEffect(() => {
    const savedState = window.localStorage.getItem("activeSectionAtendimento")
    if (savedState === "true"){
      setSectionActive(true);
      localStorage.setItem("activeSectionAtendimento", "false");
    }
  }, [])

  return (
    <div>
      {isSectionActive ? (
        <div
          id="atendimento"
          class="w-full flex flex-wrap justify-center items-center bg-white gap-4 p-8 lg:(flex-nowrap)"
        >
          <div id="informations" class="lg:w-[50%]">
            <h2 class="font-bold text-[32px] lg:text-[48px] text-[#139c43]">
              Área de atendimento
            </h2>
            <p class="text-[20px] py-4">
              Nós adoraríamos poder atender em qualquer lugar, mas nossa van se
              limita ao Booklyn e Queens no momento.
            </p>
            <p class="text-[20px] py-4">
              Visite SMBEncanadores.com.br se quiser agendar um serviço com a
              gente
            </p>
          </div>
          <img
            class="w-[500px]"
            src="images/mapaAtendimento.webp"
            alt="mapa de atendimento dos irmãos"
          />
        </div>
      ) : null}
    </div>
  );
}
