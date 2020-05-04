import React from "react";
import { Carousel } from "react-responsive-carousel";

export default function Slider({ images, marginTop }) {
  const renderImages = () => {
    return images.map((_image) => (
      <div key={_image.alt} style={{ height: "100%" }}>
        <img src={_image.src} alt={_image.alt} width="100%" height="100%" />
      </div>
    ));
  };
  return (
    <div style={{ marginTop }}>
      <Carousel showStatus={false} showThumbs={false} infiniteLoop autoPlay>
        {renderImages()}
      </Carousel>
    </div>
  );
}
