import { useState } from "react";
import styled from "styled-components";
import { StyledCartButton } from "./CartButton.styled";
import { DropdownSpan } from "./SpanDropdown.styled";

const StyledDropdownWrapper = styled.div`
  li {
    display: block;
    color: black;
    text-decoration: none;
    padding: 10px 15px;
    text-align: center;
  }
`;

const StyledDropdownList = styled.ul`
  display: ${({ isOpen }) => (isOpen ? "block" : "none")};
  position: absolute;
  background-color: white;
  min-width: 100px;
  box-shadow: 2px 2px 5px hsl(0, 0%, 0%, 0.8);
  margin-top: 5px;
  transition: display 1s;
  min-height: 100px;
`;

export const StyledDropdown = ({ childType, label, list }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <StyledDropdownWrapper>
      {childType === "btn" ? (
        <StyledCartButton onClick={() => setIsOpen(!isOpen)}>
          {label}
        </StyledCartButton>
      ) : childType === "span" ? (
        <DropdownSpan
          label={label}
          isOpen={isOpen}
          setIsOpen={setIsOpen}
        />
      ) : null}
      <StyledDropdownList isOpen={isOpen}>
        {childType === "btn" && list.length < 1 ? (
          <div
            className="empty-cart"
            style={{ minHeight: "100%", padding: "10px 15px" }}
          >
            <h4>Not items in your cart</h4>
          </div>
        ) : (
          list.map((item, i) => (
            <li key={i}>
              <a href="">{item.name}</a>
            </li>
          ))
        )}
      </StyledDropdownList>
    </StyledDropdownWrapper>
  );
};
