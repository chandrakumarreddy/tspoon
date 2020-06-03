import Head from "next/head";
import Slider from "../components/composite/Slider";
import EmailSubscription from "../components/composite/EmailSubscription";

const images = [
  { src: "/images/slider_1.png", alt: "slider-1" },
  { src: "/images/slider_2.png", alt: "slider-2" },
  { src: "/images/slider_3.png", alt: "slider-3" },
];

export default function Home() {
  return (
    <React.Fragment>
      <Head>
        <title>Tablespoon | Home</title>
      </Head>
      <Slider images={images} />
      <h1>some blocks</h1>
      <EmailSubscription />
    </React.Fragment>
  );
}
