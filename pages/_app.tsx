import "styles/globals.scss";
import type { AppProps } from "next/app";
import { ProviderFont } from "context/ContextFont";

export default function MyApp({ Component, pageProps }: AppProps) {
    return (
        <ProviderFont>
            <Component {...pageProps} />
        </ProviderFont>
    );
}
