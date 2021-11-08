import React, { useState, useContext, createContext } from 'react';

const storeContext = createContext();

export const StoreProvider = ({ children }) => {
  const store = useProvideStore();
  const { Provider } = storeContext;
  return <Provider value={store}>{children}</Provider>;
};

export const useStore = () => {
  return useContext(storeContext);
};

const useProvideStore = () => {
  const [bag, setBag] = useState([]);
  const removeItemFromBag = (itemId) => {
    let bagTemp = bag.filter((item) => item.id !== itemId);
    setBag(bagTemp);
  };
  return {
    bag,
    setBag,
    removeItemFromBag
  };
};
