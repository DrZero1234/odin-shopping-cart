import styled from "styled-components";

import HomeShoe from "../../assets/HomeShoe.png";
import HomeMenFashion from "../../assets/HomeMenFashion.png";
import HomeWomenFashion from "../../assets/HomeWomenFashion.png";
import HomeJewelry from "../../assets/HomeJewelry.png";

const StyledHomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  width: 100%;
  color: white;

  h1 {
    font-size: 5rem;
    font-family: "OswaldBold", sans-serif;
  }

  p {
    font-size: 1.25rem;
  }
`;

const StyledHomeIntroFlex = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3.5em;
`;

const StyledFlexSection = styled.section`
  display: flex;
  &:nth-child(even) {
    flex-direction: row-reverse;
  }

  &:nth-child(odd) {
    flex-direction: row;
  }

  .section-text-wrapper {
    display: flex;
    flex-direction: column;
    gap: 3rem;
  }

  .img-wrapper {
    width: 100%;
    display: flex;
  }

  &:nth-child(even) .img-wrapper {
    justify-content: flex-start;
  }

  &:nth-child(odd) .img-wrapper {
    justify-content: flex-end;
  }

  h3 {
    font-size: 5em;
    font-family: "OswaldMedium", sans-serif;
  }

  img {
    max-width: 100%;
    width: 500px;
  }

  div {
    width: 50%;
  }
`;

export const Home = () => {
  return (
    <StyledHomeContainer>
      <h1>Home page goes here</h1>
      <StyledHomeIntroFlex>
        <StyledFlexSection>
          <div className="section-text-wrapper">
            <h3>Shoes</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing
              elit. Ea, neque, consequatur consectetur rem fugiat,
              natus provident tenetur nesciunt optio sapiente autem
              nostrum praesentium iste dolore modi harum quod ullam
              voluptatibus fuga deleniti commodi. Quia odio odit cum
              nemo numquam! Architecto blanditiis sed ipsa dolorem
              quibusdam quaerat. Incidunt qui minima hic facere
              assumenda eaque mollitia consectetur fugit corrupti?
              Facilis inventore aliquam, debitis, libero, at harum
              fuga facere rem vitae obcaecati voluptate porro
              veritatis. Tempore, itaque maxime?
            </p>
          </div>
          <div className="img-wrapper">
            <img src={HomeShoe} />
          </div>
        </StyledFlexSection>
        <StyledFlexSection>
          <div>
            <h3>Men´s fashion</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing
              elit. Ea, neque, consequatur consectetur rem fugiat,
              natus provident tenetur nesciunt optio sapiente autem
              nostrum praesentium iste dolore modi harum quod ullam
              voluptatibus fuga deleniti commodi. Quia odio odit cum
              nemo numquam! Architecto blanditiis sed ipsa dolorem
              quibusdam quaerat. Incidunt qui minima hic facere
              assumenda eaque mollitia consectetur fugit corrupti?
              Facilis inventore aliquam, debitis, libero, at harum
              fuga facere rem vitae obcaecati voluptate porro
              veritatis. Tempore, itaque maxime?
            </p>
          </div>
          <div className="img-wrapper">
            <img src={HomeMenFashion} />
          </div>
        </StyledFlexSection>
        <StyledFlexSection>
          <div>
            <h3>Women´s fashion</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing
              elit. Ea, neque, consequatur consectetur rem fugiat,
              natus provident tenetur nesciunt optio sapiente autem
              nostrum praesentium iste dolore modi harum quod ullam
              voluptatibus fuga deleniti commodi. Quia odio odit cum
              nemo numquam! Architecto blanditiis sed ipsa dolorem
              quibusdam quaerat. Incidunt qui minima hic facere
              assumenda eaque mollitia consectetur fugit corrupti?
              Facilis inventore aliquam, debitis, libero, at harum
              fuga facere rem vitae obcaecati voluptate porro
              veritatis. Tempore, itaque maxime?
            </p>
          </div>
          <div className="img-wrapper">
            <img src={HomeWomenFashion} />
          </div>
        </StyledFlexSection>
        <StyledFlexSection>
          <div>
            <h3>Jewelry</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing
              elit. Ea, neque, consequatur consectetur rem fugiat,
              natus provident tenetur nesciunt optio sapiente autem
              nostrum praesentium iste dolore modi harum quod ullam
              voluptatibus fuga deleniti commodi. Quia odio odit cum
              nemo numquam! Architecto blanditiis sed ipsa dolorem
              quibusdam quaerat. Incidunt qui minima hic facere
              assumenda eaque mollitia consectetur fugit corrupti?
              Facilis inventore aliquam, debitis, libero, at harum
              fuga facere rem vitae obcaecati voluptate porro
              veritatis. Tempore, itaque maxime?
            </p>
          </div>
          <div className="img-wrapper">
            <img src={HomeJewelry} />
          </div>
        </StyledFlexSection>
      </StyledHomeIntroFlex>
    </StyledHomeContainer>
  );
};
