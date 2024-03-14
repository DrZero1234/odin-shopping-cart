import { useState } from "react";
import styled, { keyframes } from "styled-components";
import { StyledCartButton } from "../CartButton.styled";
import { DropdownSpan } from "../SpanDropdown.styled";
import { NavLink, Link } from "react-router-dom";

import cartIcon from "../../../assets/CartIcon.svg";
import { CartItem } from "../../CartItem";

const StyledDropdownWrapper = styled.div`
  li {
    display: block;
    color: black;
    text-decoration: none;
    padding: 10px 15px;
    text-align: center;
  }
`;

const dropdownOpen = keyframes`
  from {
      transform: scaleY(0%);
  } to {
    transform: scaleY(1);
  }
`;

const StyledDropdownList = styled.ul`
  display: ${({ isOpen }) => (isOpen ? "block" : "none")};
  position: absolute;
  background-color: white;
  min-width: 100px;
  box-shadow: 2px 2px 5px hsl(0, 0%, 0%, 0.8);
  margin-top: 10px;
  transition: display 1s;
  padding: 5px 10px;
  min-height: 100px;
  animation: 0.3s ${dropdownOpen} ease-in-out;
  .empty-cart {
    min-height: inherit;
    padding: 10px 15px;
    display: flex;
    align-items: flex-end;
  }

  > input[type="number"]  {
    max-width: 60px;
    text-align: center;
  }

  a > button {
    width: 100%;
    display: flex;
    justify-content: center;
  }
`;

export const StyledDropdown = ({
  childType = "span",
  label,
  list = [],
  totalPrice,
  setCart,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  console.log(`Total price: ${totalPrice}`);

  return (
    <StyledDropdownWrapper>
      {childType === "btn" ? (
        <StyledCartButton
          onClick={() => setIsOpen(!isOpen)}
          data-testid="DropdownParent"
        >
          {list.length}
          <img src={cartIcon} />
          <span>{label}</span>
          {list.length ? (
            <span className="cart-btn-total-price">
              ${+totalPrice}
            </span>
          ) : null}
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
              <>
                <CartItem
                  productData={product}
                  cart={list}
                  setCart={setCart}
                />
              </>
            ))}
            <Link to="/checkout">
              <button>View Checkout</button>
            </Link>
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
