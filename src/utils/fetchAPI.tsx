export const fetchAPI = async () => {
  const res = await fetch(`https://wine-back-test.herokuapp.com/products`);
  const data = await res.json();  
  return data.items;
};

export const fetchAllAPI = async () => {
  const res = await fetch(`https://wine-back-test.herokuapp.com/products`);
  const data = await res.json();  
  return data.items;
};
