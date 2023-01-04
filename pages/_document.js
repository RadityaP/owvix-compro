import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Inter&display=optional"
          rel="stylesheet"
        />
        <link rel="preconnect" href="https://fonts.googleapis.com"></link>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin=""></link>
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,400;0,500;0,600;0,700;1,300&display=swap"
          rel="stylesheet"
        ></link>
        <link rel="icon" href="/favicon.ico" sizes="48x48" />
        <meta
          name="description"
          content="Owvix is creative agency based in Bandung that's ready to produce your incredible project such as documentation of event, graduation, wedding or making advertising products, indie short movie, webseries or documentary, etc. We will provided great services for you."
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
