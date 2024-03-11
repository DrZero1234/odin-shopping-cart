import { useState } from "react";
import styled from "styled-components";
import { StyledCartButton } from "../CartButton.styled";
import { DropdownSpan } from "../SpanDropdown.styled";
import { NavLink } from "react-router-dom";

import cartIcon from "../../../assets/CartIcon.svg";

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
  padding: 5px 10px;
  min-height: 100px;

  .empty-cart {
    min-height: inherit;
    padding: 10px 15px;
    display: flex;
    align-items: flex-end;
  }
`;

export const StyledDropdown = ({
  childType = "span",
  label,
  list = [],
  totalPrice,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <StyledDropdownWrapper>
      {childType === "btn" ? (
        <StyledCartButton
          onClick={() => setIsOpen(!isOpen)}
          data-testid="DropdownParent"
        >
          <img src={cartIcon} />
          <span>{label}</span>
        </StyledCartButton>
      ) : childType === "span" ? (
        <DropdownSpan
          data-testid="DropdownParent"
          label={label}
          isOpen={isOpen}
          setIsOpen={setIsOpen}
        />
      ) : null}
      <StyledDropdownList isOpen={isOpen}>
        {childType === "btn" && list.length < 1 ? (
          <div className="empty-cart">
            <h4>Not items in your cart</h4>
          </div>
        ) : // Header Dropdown if the cart has items in it
        childType === "btn" && list.length > 0 ? (
          <>
            {list.map((product) => (
              <p>{product.productName}</p>
            ))}
          </>
        ) : (
          /* Header dropdown span for the categories */
          list.map((item, i) => {
            const url = encodeURI(item);
            console.log(url);
            return (
              <li key={i}>
                <NavLink to={url}>{item}</NavLink>
              </li>
            );
          })
        )}
      </StyledDropdownList>
    </StyledDropdownWrapper>
  );
};
