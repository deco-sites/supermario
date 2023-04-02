import ReviewCard, {
  ReviewCardProps,
} from "$start/components/molecules/ReviewCard.tsx";

import Slider from "$start/components/organisms/Slider.tsx";
import SliderControllerJS from "$start/components/organisms/SliderJs.tsx";

export interface DepoimentsCarrosselProps {
  /** @description adcione uma avaliação de usuário*/
  review: ReviewCardProps[];
}

export default function DepoimentsCarrossel(
  { review }: DepoimentsCarrosselProps,
) {

  return (
    <div
      id="depoimentsCarrosel"
      class="w-screen bg-[#f3cc41] p-12 relative overflow-x-hidden lg:(w-[100%] pt-16 pb-32)"
    >
      <div id="titleWrapper" class="w-full flex flex-col justify-center items-center gap-4 p-6 lg:(px-12 flex-row justify-start gap-[28%])">
        <img
          class="w-64 h-32 lg:(w-[150px] h-16) object-contain"
          src="images/share.webp"
          title="super mario plumbing"
          alt="super mario plumbing"
          loading="lazy"
          fetchpriority="low"
        />
        <h2 class="font-bold text-3xl text-[#189c41] uppercase pt-4 lg:pt-0">
          Depoimentos
        </h2>
      </div>
      <Slider
        class="gap-3 w-screen relative -left-12 px-6 lg:(w-[92%] left-12 pr-3 p-0 overflow-hidden)"
        snap="block py-4"
      >
        {review?.map((item) => (
          <ReviewCard
            key={item?.name}
            name={item?.name}
            rating={item?.rating}
            textReview={item?.textReview}
            userImage={item?.userImage}
          />
        ))}
      </Slider>
      <div class="hidden lg:block absolute top-[50%] w-full">
        <div class="hidden relative sm:block z-10 col-start-1 row-start-3 sm:top-4">
          <div class="absolute left-[0px]  bg-interactive-inverse rounded-full border-default border-0 ">
            <button
              class="outline-none cursor-fancy focus:outline-none hover:(outline-none cursor-fancy)"
              data-slide="next"
              aria-label="Next item"
            >
              <svg
                class="rotate-180 scale-[2.5] outline-none"
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="#fff"
              >
                <path d="M10 20A10 10 0 1 0 0 10a10 10 0 0 0 10 10zM8.711 4.3l5.7 5.766L8.7 15.711l-1.4-1.422 4.289-4.242-4.3-4.347z" />
              </svg>
            </button>
          </div>
        </div>
        
        <div class="hidden relative sm:block z-10 col-start-3 row-start-3 sm:top-4">
          <div class="absolute right-[108px] bg-interactive-inverse rounded-full border-default border-0">
            <button
              class="outline-none cursor-fancy focus:outline-none hover:(outline-none cursor-fancy)"
              data-slide="prev"
              aria-label="Previous item"
            >
              <svg
                class="scale-[2.5] outline-none"
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="#fff"
              >
                <path d="M10 20A10 10 0 1 0 0 10a10 10 0 0 0 10 10zM8.711 4.3l5.7 5.766L8.7 15.711l-1.4-1.422 4.289-4.242-4.3-4.347z" />
              </svg>
            </button>
          </div>
        </div>
      </div>
      <SliderControllerJS rootId={"depoimentsCarrosel"} />
    </div>
  );
}
