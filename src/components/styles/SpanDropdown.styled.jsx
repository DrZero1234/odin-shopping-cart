import styled from "styled-components";

import PointerDown from "../../assets/PointerDown.svg?react";
import PointerUp from "../../assets/PointerUp.svg?react";

const DropdownContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 0.2em;
  align-items: center;
  color: black;

  &:hover {
    cursor: pointer;
  }
  svg {
    max-width: 10px;
    max-height: 10px;
  }
`;

export const DropdownSpan = ({ label, isOpen, setIsOpen }) => {
  return (
    <DropdownContainer onClick={() => setIsOpen(!isOpen)}>
      <span>{label}</span>
      {isOpen ? <PointerUp /> : <PointerDown />}
    </DropdownContainer>
  );
};
