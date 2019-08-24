import { createContext, useContext } from 'react';

export const NonceContext = createContext({ nonce: null });

export const useNonce = () => useContext(NonceContext);
