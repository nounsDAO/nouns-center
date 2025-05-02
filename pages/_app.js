import 'tailwindcss/tailwind.css';
import '../styles/globals.css';
import Layout from '../components/Layout';

import { getDefaultWallets, RainbowKitProvider } from '@rainbow-me/rainbowkit';
import { publicProvider } from 'wagmi/providers/public';

import { chain, configureChains, createClient, WagmiConfig } from 'wagmi';

const { chains, provider } = configureChains([chain.mainnet], [publicProvider()]);

const { connectors } = getDefaultWallets({
  appName: 'Nouns Center',
  chains,
});

const wagmiClient = createClient({
  autoConnect: true,
  connectors,
  provider,
});

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <WagmiConfig client={wagmiClient}>
        <RainbowKitProvider chains={chains} coolMode>
          <Component {...pageProps} />
        </RainbowKitProvider>
      </WagmiConfig>
      {/* {asPath === "/" && <div id="autocomplete"></div>} */}
    </Layout>
  );
}

export default MyApp;
