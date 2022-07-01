import Iwine from "../Interface/Iwines";

// export const getLocalStorage = async () => {
//   const items = localStorage.getItem('Cart');
//   return items;
// };

export const setLocalStorage = (cartItem: Iwine[], wine: Iwine) => {
  cartItem.push(wine);  
  localStorage.setItem('Cart', JSON.stringify(cartItem));
};
