export const addToCart = (
  e,
  cart,
  setCart,
  currentQuantity,
  setCurrentQuantity,
  productData
) => {
  e.preventDefault();
  const cart_copy = cart.slice();
  productData.quantity = +currentQuantity;
  cart_copy.push(productData);
  setCart(cart_copy);
  setCurrentQuantity(1);
};

export const removeFromCart = (e, cart, setCart, productId) => {
  e.preventDefault();
  const itemToRemove = cart.find((item) => item.id === productId);

  if (itemToRemove) {
    const index = cart.indexOf(itemToRemove);
    const new_cart = [
      ...cart.slice(0, index),
      ...cart.slice(index + 1),
    ];
    setCart(new_cart);
  }
  return;
};
