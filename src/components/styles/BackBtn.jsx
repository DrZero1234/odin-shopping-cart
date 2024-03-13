import styled from "styled-components";
import backArrow from "../../assets/BackArrow.svg";
import { Link, useNavigate } from "react-router-dom";

const Wrapper = styled.div`
  width: max-content;

  button {
    display: flex;
    flex-direction: row;
    align-items: center;
    color: white;
    gap: 1em;
    text-decoration: none;
    background: inherit;
    border: none;
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
  const navigate = useNavigate();
  return (
    <Wrapper>
      <button onClick={() => navigate(-1)}>
        <img src={backArrow} alt="" />
        <span>{label}</span>
      </button>
    </Wrapper>
  );
};
