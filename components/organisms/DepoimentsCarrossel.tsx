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
  console.log(review);
  return (
    <div id="depoimentsCarrosel" class="w-screen bg-yellow-400 p-12 relative">
      <Slider
        class="gap-3"
        snap="snap-center sm:snap-start block first:ml-6 sm:first:ml-0 last:mr-6 sm:last:mr-0"
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
            <div class="hidden relative sm:block z-10 col-start-1 row-start-3">
              <div class="absolute left-[-28px]  bg-interactive-inverse rounded-full border-default border-0 ">
                <button class="outline-none active:outline-none" data-slide="prev" aria-label="Previous item">
                    <svg class="rotate-180 scale-150 outline-none active:outline-none" xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#fff"><path d="M10 20A10 10 0 1 0 0 10a10 10 0 0 0 10 10zM8.711 4.3l5.7 5.766L8.7 15.711l-1.4-1.422 4.289-4.242-4.3-4.347z"/></svg>
                </button>
              </div>
            </div>
            <div class="hidden relative sm:block z-10 col-start-3 row-start-3">
              <div class="absolute right-[70px] bg-interactive-inverse rounded-full border-default border-0">
                <button data-slide="next" aria-label="Next item">
                    <svg class="scale-150" xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#fff"><path d="M10 20A10 10 0 1 0 0 10a10 10 0 0 0 10 10zM8.711 4.3l5.7 5.766L8.7 15.711l-1.4-1.422 4.289-4.242-4.3-4.347z"/></svg>
                </button>
              </div>
            </div>
          </div>
      <SliderControllerJS rootId={"depoimentsCarrosel"} />
    </div>
  );
}
