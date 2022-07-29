import { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";

export default function MyDocument() {
    return (
        <Html lang="en">
            <Head>
                <Script src="/scripts/TouchFree_Tooling.js" strategy="beforeInteractive" />
            </Head>
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    );
}
