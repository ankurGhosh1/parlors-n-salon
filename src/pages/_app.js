import "@/styles/globals.css";
import { NextSeo } from "next-seo";
import GoogleAnalytics from "@/components/GoogleAnalytics";

export default function App({ Component, pageProps }) {
  return (
    <>
      <GoogleAnalytics />
      <NextSeo
        title="Best Driving School"
        description=""
        openGraph={{
          type: "website",
          locale: "en_US",
          url: "https://www.mydrivingschools.com",
          site_name: "My Driving School",
          images: [
            {
              url: "https://www.mydrivingschools.com/logo.jpg",
              width: 800,
              height: 600,
              alt: "Logo",
            },
          ],
        }}
      />
      <Component {...pageProps} />
    </>
  );
}
