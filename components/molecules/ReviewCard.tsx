import Star from "$start/components/atoms/Star.tsx";
import type { Image } from "$live/std/ui/types/Image.ts";

export interface ReviewCardProps {
  /** @description defina o nome do avaliador*/
  name: string;
  /** @description defina a imagem de perfil do avaliador*/
  userImage?: Image;
  /** @description defina o texto do avaliador*/
  textReview?: string;
  /** @description defina a quantidade de estrelas recebidas*/
  rating?: number;
}

export default function ReviewCard(
  { rating=0, name, userImage, textReview }: ReviewCardProps,
) {
  return (
    <div id="reviewCardWrapper" class="w-80 h-60 p-6 flex flex-col gap-6 rounded-3xl bg-white lg:(w-96 h-60)">
      <div id="userInforWrapper" class="flex justify-center items-start gap-4">
        <img
          class="w-16 h-16 rounded-1/2 lg:(w-20 h-20)"
          src={userImage || "icons/user.webp"}
          title="estrela de avaliação"
          alt="estrela de avaliação"
          preload="false"
          lazyload="eager"
          fetchpriority="low"
        />
        <div class="flex flex-col justify-center items-center gap-3">
          <div id="starsWrapper" class="flex gap-1">
            <Star active={rating < 1 ? false : true} />
            <Star active={rating < 2 ? false : true} />
            <Star active={rating < 3 ? false : true} />
            <Star active={rating < 4 ? false : true} />
            <Star active={rating < 5 ? false : true} />
          </div>
          <h3 class="font-bold">{name}</h3>
        </div>
      </div>
      <p>
        {textReview}
      </p>
    </div>
  );
}
