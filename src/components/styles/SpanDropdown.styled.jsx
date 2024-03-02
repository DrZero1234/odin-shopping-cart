import styled from "styled-components";

import PointerDown from "../../assets/PointerDown.svg";
import PointerUp from "../../assets/PointerUp.svg";

const DropdownContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 0.2em;
  align-items: center;
  color: black;

  &:hover {
    cursor: pointer;
  }
  img {
    max-width: 10px;
  }
`;

export const DropdownSpan = ({ label, isOpen, setIsOpen }) => {
  return (
    <DropdownContainer onClick={() => setIsOpen(!isOpen)}>
      <span>{label}</span>
      <img src={isOpen ? PointerUp : PointerDown} />
    </DropdownContainer>
  );
};
