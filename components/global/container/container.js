import React from 'react';
import Head from 'next/head';
import Navbar from '../navbar';
import ScrollToTopButton from '../button/scrollToTopButton';
import Footer from '../footer';

const Container = (props) => {
  const { title, background } = props;
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta
          name="description"
          content="Owvix is creative agency based in Bandung that's ready to produce your incredible project such as documentation of event, graduation, wedding or making advertising products, indie short movie, webseries or documentary, etc. We will provided great services for you."
        />
        <meta charSet="utf-8" />
        <meta name="keywords" content="owvix, photography, agency, creative, industry" />
        <meta name="robots" content="all" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Navbar />
      <div className={`flex justify-center flex-col bg-${background}`}>{props.children}</div>
      <ScrollToTopButton />
      <Footer />
    </>
  );
};

export default Container;
