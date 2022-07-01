export const fetchAPI = async () => {
  const res = await fetch(`https://wine-back-test.herokuapp.com/products?page=1&limit=10`);
  const data = await res.json();  
  return data.items;
};
