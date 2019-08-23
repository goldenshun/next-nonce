import React from 'react';
import NonceContext from './NonceContext';

const withNonce = (WrappedComponent) => {
  const WithNonce = (props) => {
    const { nonce } = props;

    return (
      <NonceContext.Provider value={nonce}>
        <WrappedComponent {...props} />
      </NonceContext.Provider>
    );
  };

  WithNonce.getInitialProps = async (ctx) => {
    const nonce = 'hey';
    const componentProps = WrappedComponent.getInitialProps
      && (await WrappedComponent.getInitialProps(ctx));

    return { ...componentProps, nonce };
  };

  WithNonce.displayName = `WithNonce(${WrappedComponent.displayName || WrappedComponent.name || 'Component'})`;

  return WithNonce;
};

export default withNonce;
