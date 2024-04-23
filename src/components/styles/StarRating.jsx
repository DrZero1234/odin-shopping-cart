import styled from "styled-components";

import FilledStar from "../../assets/FilledStar.svg?react";
import BlankStar from "../../assets/BlankStar.svg?react";

const StyledStarRatingWrapper = styled.div`
  display: flex;

  svg {
    width: 20px;
    height: 20px;
  }
`;

export const StarRating = ({ productRating }) => {
  const filledStarArray = Array(Math.floor(productRating)).fill(true);
  const greyStarArray = Array(5 - Math.floor(productRating)).fill(
    true
  );

  return (
    <StyledStarRatingWrapper>
      {filledStarArray.map((elem, i) => (
        <FilledStar key={i} />
      ))}

      {greyStarArray.map((elem, i) => (
        <BlankStar key={i + Math.floor(productRating)} />
      ))}
    </StyledStarRatingWrapper>
  );
};
