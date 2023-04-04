import { useState } from "preact/hooks";

export default function Credits() {
  const [active, setActive] = useState("-330px");
  return (
    <div class="bg-[#f3cc41] p-12 m-0 z-20 lg:relative">
      <button
        role="button"
        onClick={() => setActive("0")}
        class="absolute left-0 w-screen h-[6.4vh] bg-[hsla(0,0%,100%,.5)] border-1 border-[rgba(35,35,35,.5)] px-4 py-2 focus:outline-none hover:(outline-none) lg:(relative w-auto h-auto) font-sans font-thin"
        aria-label="Expand the footer"
      >
        Créditos & Legal
      </button>

      <div
        class={"w-screen flex flex-col justify-center items-center gap-6 bg-white fixed left-0 p-12 ease-out duration-500" +
          " " + `bottom-[${active}]`}
      >
        <div
          onClick={() => setActive("-330px")}
          class="w-[16px] absolute left-6 top-6 lg:hidden"
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
            <path
              d="M7.292 8L1.146 1.854a.502.502 0 01.708-.708L8 7.292l6.146-6.146a.502.502 0 01.708.708L8.708 8l6.146 6.146a.502.502 0 01-.708.708L8 8.708l-6.146 6.146A.502.502 0 011.5 15s-.256-.049-.354-.146a.502.502 0 010-.708L7.292 8z"
              fill-rule="evenodd"
            >
            </path>
          </svg>
        </div>
        <button
          role="button"
          onClick={() => setActive("-330px")}
          class="hidden lg:(block w-[150px] absolute left-[50px] bottom-[50px] bg-[hsla(0,0%,100%,.5)] border-1 border-[rgba(35,35,35,.5)] px-4 py-2 focus:outline-none hover:(outline-none))  font-sans font-thin"
          aria-label="Close the footer"
        >
          Fechar
        </button>
        <img
          class="w-auto h-8 object-contain"
          src="images/legal-logos.webp"
          title="Legal logos"
          alt="Legal logos"
          width="300"
          headers="60"
          loading="lazy"
          preload="false"
        />
        <a
          href="https://www.nbcuniversal.com/privacy-policies/privacy-portuguese"
          target="_blank"
          rel="noopener"
        >
          Política De Privacidade
        </a>
        <p class="text-[#0404048c] text-[12px] font-sans font-thin">
          PLATFORM © 2023 POWSTER © 2023 Nintendo and Universal Studios. TODOS
          OS DIREITOS RESERVADOS.
        </p>
      </div>
    </div>
  );
}
