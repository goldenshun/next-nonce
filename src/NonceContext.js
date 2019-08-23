import { createContext, useContext } from 'react';

export const NonceContext = createContext();

export const useNonce = () => useContext(NonceContext);
