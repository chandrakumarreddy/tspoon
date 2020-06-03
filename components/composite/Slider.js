import React from "react";
import { Carousel } from "react-responsive-carousel";
import { useSelector } from "react-redux";

export default function Slider({ images, marginTop }) {
  const { headerHeight = 0 } = useSelector(({ header }) => ({
    headerHeight: header.headerHeight,
  }));
  const height = `calc(100vh - ${headerHeight}px)`;
  const renderImages = () => {
    return images.map((_image) => (
      <div
        key={_image.alt}
        style={{
          boxSizing: "border-box",
          height,
        }}
      >
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
