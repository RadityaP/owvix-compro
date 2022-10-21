import React from "react";
import Head from "next/head";
import Navbar from "../navbar";
import ScrollToTopButton from "../button/scrollToTopButton";
import Footer from "../footer";

const Container = (props) => {
  const { title, background } = props;
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logo-white-no-text.png" />
      </Head>
      <Navbar />
      <div className={`flex justify-center flex-col bg-${background}`}>{props.children}</div>
      <ScrollToTopButton />
      <Footer />
    </>
  );
};

export default Container;