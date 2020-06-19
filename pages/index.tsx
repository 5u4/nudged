import React from "react";
import Head from "next/head";
import Count from "../components/Count";

export const IndexPage: React.FC = () => {
  return (
    <>
      <Head>
        <title>Firebase Vercel Proxy</title>
      </Head>
      <Count />
    </>
  );
};

export default IndexPage;
