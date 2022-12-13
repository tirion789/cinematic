export const getCartFromLocalStorage = () => {
  const massive = localStorage.getItem('favorite');
  return massive ? JSON.parse(massive) : [];
};
