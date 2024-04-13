import styled from "styled-components";

import FilledStar from "../../assets/FilledStar.svg";
import BlankStar from "../../assets/BlankStar.svg";

const StyledStarRatingWrapper = styled.div`
  display: flex;

  img {
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
        <img src={FilledStar} key={i} />
      ))}

      {greyStarArray.map((elem, i) => (
        <img src={BlankStar} key={i + Math.floor(productRating)} />
      ))}
    </StyledStarRatingWrapper>
  );
};
