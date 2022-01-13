import "tailwindcss/tailwind.css";
import "./styles/Extra.css";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import Head from "next/head";
function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://api.mapbox.com/mapbox-gl-js/v2.3.1/mapbox-gl.css"
          rel="stylesheet"
        />

        <title>Airbnb</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
