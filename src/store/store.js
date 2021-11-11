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
    console.log('run')
    console.log(itemId)
    let bagTemp = bag.filter((item) => parseInt(item.id) !== parseInt(itemId));
    console.log(bagTemp)
    setBag(bagTemp);
  };
  return {
    bag,
    setBag,
    removeItemFromBag
  };
};
