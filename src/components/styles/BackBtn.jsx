import styled from "styled-components";
import backArrow from "../../assets/BackArrow.svg";
import { Link } from "react-router-dom";

const Wrapper = styled.div`
  a {
    display: flex;
    flex-direction: row;
    align-items: center;
    color: white;
    gap: 1em;
    text-decoration: none;
  }

  img {
    width: 30px;
    border: 1px solid white;
    border-radius: 100%;
  }

  &:hover {
    cursor: pointer;
    opacity: 0.7;
  }
`;

export const StyledBackBtn = ({ label }) => {
  return (
    <Wrapper>
      <Link to="..">
        <img src={backArrow} alt="" />
        <span>{label}</span>
      </Link>
    </Wrapper>
  );
};
