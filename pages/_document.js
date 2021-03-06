import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html>
        <Head>
          <link
            href="https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@300&display=swap"
            rel="stylesheet"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Mulish:wght@800&display=swap"
            rel="stylesheet"
          ></link>
          <link
            href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300&display=swap"
            rel="stylesheet"
          ></link>

          {/* <link
            href="https://unpkg.com/cloudinary-video-player@1.9.0/dist/cld-video-player.min.css"
            rel="stylesheet"
          ></link>
          <script
            defer
            src="https://unpkg.com/cloudinary-video-player@1.9.0/dist/cld-video-player.min.js"
            type="text/javascript"
          ></script> */}
          <script
            defer
            src="https://widget.cloudinary.com/v2.0/global/all.js"
            type="text/javascript"
          ></script>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
