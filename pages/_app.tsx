import "styles/globals.scss";
import type { AppProps } from "next/app";
import NextScript from "next/script";
import { ProviderFont } from "context/ContextFont";

export default function MyApp({ Component, pageProps }: AppProps) {
    return (
        <>
            <NextScript src="/scripts/TouchFree_Tooling.js" strategy="beforeInteractive" />
            <NextScript src="/scripts/TouchFree_Test.js" />
            <ProviderFont>
                <Component {...pageProps} />
            </ProviderFont>
        </>
    );
}
