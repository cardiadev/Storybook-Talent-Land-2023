interface IRating {
  arrayStarsFilled: number[];
  arrayStarsRemaining: number[];
}

export const useRentalRating = (rating: number): IRating => {
  const starsFilled = Math.ceil(rating);
  const starsRemaining = 5 - starsFilled;

  const arrayStarsFilled = Array(starsFilled)
    .fill(0)
    .map((_, i) => i + 1);

  const arrayStarsRemaining = Array(starsRemaining)
    .fill(0)
    .map((_, i) => i + 1);

  return { arrayStarsFilled, arrayStarsRemaining };
};
