import React from "react";
import Slider from "../components/composite/Slider";

const images = [
  { src: "/images/slider_1.png", alt: "slider-1" },
  { src: "/images/slider_2.png", alt: "slider-2" },
  { src: "/images/slider_3.png", alt: "slider-3" },
];

export default function Home() {
  return (
    <React.Fragment>
      <Slider images={images} />
    </React.Fragment>
  );
}
