import ReviewCard, {
  ReviewCardProps,
} from "$start/components/molecules/ReviewCard.tsx";

export interface DepoimentsCarrosselProps {
  /** @description adcione uma avaliação de usuário*/
  review: ReviewCardProps[];
}

export default function DepoimentsCarrossel(
  { review }: DepoimentsCarrosselProps,
) {
  console.log(review);
  return (
    <div id="depoimentsCarrosel" class="w-screen bg-yellow-400 p-12">
      {review?.map((item) => (
        <ReviewCard
          key={item?.name}
          name={item?.name}
          rating={item?.rating}
          textReview={item?.textReview}
          userImage={item?.userImage}
        />
      ))}
    </div>
  );
}
