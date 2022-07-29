import "styles/globals.scss";
import type { AppProps } from "next/app";
import NextHead from "next/head";
import NextScript from "next/script";
import { ProviderFont } from "context/ContextFont";

export default function MyApp({ Component, pageProps }: AppProps) {
    return (
        <>
            <NextHead>
                <title>Interpolasi</title>
                <link
                    rel="preload"
                    as="font"
                    type="font/ttf"
                    href="/VAR1GX.ttf"
                    crossOrigin="anonymous"
                />
                <link
                    rel="preload"
                    as="font"
                    type="font/ttf"
                    href="/VAR2GX.ttf"
                    crossOrigin="anonymous"
                />
                <link
                    rel="preload"
                    as="font"
                    type="font/ttf"
                    href="/VAR3GX.ttf"
                    crossOrigin="anonymous"
                />
                <link
                    rel="preload"
                    as="font"
                    type="font/ttf"
                    href="/VAR4GX.ttf"
                    crossOrigin="anonymous"
                />
                <link
                    rel="preload"
                    as="font"
                    type="font/ttf"
                    href="/VAR5GX.ttf"
                    crossOrigin="anonymous"
                />
                <link
                    rel="preload"
                    as="font"
                    type="font/ttf"
                    href="/VAR6GX.ttf"
                    crossOrigin="anonymous"
                />
                <link
                    rel="preload"
                    as="font"
                    type="font/ttf"
                    href="/VAR7GX.ttf"
                    crossOrigin="anonymous"
                />
            </NextHead>

            <NextScript src="/scripts/TouchFree_Test.js" />
            <ProviderFont>
                <Component {...pageProps} />
            </ProviderFont>
        </>
    );
}
