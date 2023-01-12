import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
      <link href="https://fonts.googleapis.com/css2?family=Rubik:wght@300;400;600;700;900&display=swap" rel="stylesheet"/> 
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/> 
        <link href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@1,800&family=Rubik:wght@300;400;600;700;900&display=swap" rel="stylesheet"></link>
        <link href='https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.1/css/all.min.css' />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
