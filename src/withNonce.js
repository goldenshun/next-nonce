import React from 'react';

const withNonce = () => (WrappedComponent) => {
  const WithNonce = props => <WrappedComponent {...props} />;

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
