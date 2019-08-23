import Head from 'next/head';
import { useNonce } from 'next-nonce';

const ComponentWithScript = () => {
  console.log('useNonce', useNonce);
  const { nonce } = useNonce();
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
