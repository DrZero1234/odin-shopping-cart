import styled from "styled-components";

import React, { useState } from "react";

const SelectContainer = styled.div`
  position: relative;
  margin: 0;
`;

const SelectLabelButton = styled.button`
  padding: 0.3rem 0.5rem;
  min-width: 7rem;
  font-size: 0.9rem;
  font-weight: 500;
  background-color: #fff;
  border: none;
  border-radius: 5px;
  color: #111;
  align-items: center;
  justify-content: space-between;
  border: 1px solid slategrey;
  cursor: pointer;
  box-shadow: 0 1px 4px 0 #ccc;
  transition: 0.3s ease;
  &:hover {
    background-color: #eee;
  }
`;

const DropdownStyle = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  max-height: 40vmax;
  min-width: 10rem;
  padding: 0.4rem;
  display: flex;
  flex-direction: column;
  border-radius: 5px;
  background: #fafafa;
  border: 1.5px solid slategrey;
  transition: max-height 0.2s ease;
  overflow: scroll;
  visibility: ${({ isVisible }) => isVisible}
  max-height: ${({ isVisible }) => (isVisible ? "40px" : "0px")}
`;

const DropdownItem = styled.div`
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue",
    sans-serif;
  display: flex;
  align-items: center;
  width: 90%;
  margin: 0.15rem 0;
  padding: 0.3rem 0.5rem;
  font-size: 0.9rem;
  font-weight: 400;
  color: #333;
  border-radius: 0.3rem;
  cursor: pointer;
  &:hover,
  :focus,
  :focus:hover {
    background-color: #166edc;
    color: #fafafa;
    outline: none;
  }
`;

export const DropdownButton = ({ btnLabel, values }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <SelectContainer>
      <SelectLabelButton onClick={handleClick}>
        {btnLabel}
      </SelectLabelButton>
      <DropdownStyle isVisible={open}>
        {values.map((value, index) => (
          <DropdownItem key={index}>{value.name}</DropdownItem>
        ))}
      </DropdownStyle>
    </SelectContainer>
  );
};
