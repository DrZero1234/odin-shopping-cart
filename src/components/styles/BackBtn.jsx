import styled from "styled-components";
import BackArrow from "../../assets/BackArrow.svg?react";
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

  svg {
    width: 30px;
    height: 30px;
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
        <BackArrow />
        <span>{label}</span>
      </button>
    </Wrapper>
  );
};
