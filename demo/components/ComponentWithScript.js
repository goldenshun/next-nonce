import Head from 'next/head';
import { useNonce } from 'next-nonce';

const ComponentWithScript = () => {
  const { nonce } = useNonce();
  console.log('nonce', nonce);
  return (
    <Head>
      <script
        type="text/javascript"
        dangerouslySetInnerHTML={{
          __html: 'console.log(\'Inline script success!\')',
        }}
        nonce={nonce}
      />
    </Head>
  );
};

export default ComponentWithScript;
