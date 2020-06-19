import { AppProps } from "next/app";
import Head from "next/head";

import "./style.css";

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Head>
        <title>Nudge Nudge</title>
        <link href="https://unpkg.com/pattern.css" rel="stylesheet" />
      </Head>
      <Component {...pageProps} />
      <div
        className="pattern-cross-dots-lg bg-pattern"
        style={{ zIndex: -10 }}
      />
    </>
  );
};

export default App;
