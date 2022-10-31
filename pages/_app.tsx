import type { AppProps } from 'next/app';
import Head from 'next/head';
import { QueryClient, QueryClientProvider } from 'react-query';
import { RecoilRoot } from 'recoil';
import { ReactQueryDevtools } from 'react-query/devtools';
import Layout from '../provider/LayoutProvider';
import GlobalStyle from '../styles/globals';
import 'moment/locale/ko';
import { AntdCustomStyled } from '../styles/custom';
import '../styles/font.css';

const MyApp = ({ Component, pageProps }: AppProps) => {
    if (process.env.NEXT_PUBLIC_STAGE === 'prod') {
        console.log = () => {};
    }
    const queryClient = new QueryClient();
    return (
        <RecoilRoot>
            <QueryClientProvider client={queryClient}>
                <Head>
                    <meta charSet="utf-8" />
                    <meta
                        name="viewport"
                        content="width=device-width, initial-scale=1.0, maximum-scale=1, user-scalable=no"
                    />
                    <meta name="description" content="Generated by create next app" />
                    <link rel="icon" href="/favicon.ico" />
                </Head>
                <GlobalStyle />
                <AntdCustomStyled />
                <Layout>
                    <Component {...pageProps} />
                </Layout>
                {/* react-query 브라우저 디버깅 */}
                <ReactQueryDevtools initialIsOpen />
            </QueryClientProvider>
        </RecoilRoot>
    );
};

export default MyApp;
