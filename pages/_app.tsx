import { useState, useEffect } from 'react';

export default function SOLTrek({ Component, pageProps }: AppProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <Wallet>
      <ThemeProvider>
        <ReactFlowProvider>
          <NetworkProvider>
            <ModalProvider>
              <DefaultHead />
              <Component {...pageProps} />
            </ModalProvider>
          </NetworkProvider>
        </ReactFlowProvider>
      </ThemeProvider>
    </Wallet>
  );
}
