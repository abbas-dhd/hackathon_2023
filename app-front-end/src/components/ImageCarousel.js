import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const ImageCarousel = () => {
  return (
    <Carousel
      autoPlay
      animationHandler="fade"
      swipeable={false}
      infiniteLoop={true}
      interval={2000}
      showStatus={false}
      showIndicators={false}
      showArrows={false}
      showThumbs={false}
      emulateTouch={true}
    >
      <div>
        <img
          alt=""
          src="https://orionstorage.s3.ap-south-1.amazonaws.com/promotional/promotional-1.png"
        />
      </div>
      <div>
        <img
          alt=""
          src="https://orionstorage.s3.ap-south-1.amazonaws.com/promotional/promotional-2.png"
        />
      </div>
      <div>
        <img
          alt=""
          src="https://orionstorage.s3.ap-south-1.amazonaws.com/promotional/promotional-3.png"
        />
      </div>
      {/* <div>
        <img
          alt=""
          src="https://images.pexels.com/photos/1457983/pexels-photo-1457983.jpeg"
        />
      </div>
      <div>
        <img
          alt=""
          src="https://images.pexels.com/photos/1457983/pexels-photo-1457983.jpeg"
        />
      </div>
      <div>
        <img
          alt=""
          src="https://images.pexels.com/photos/1457983/pexels-photo-1457983.jpeg"
        />
      </div>
      <div>
        <img
          alt=""
          src="https://images.pexels.com/photos/1457983/pexels-photo-1457983.jpeg"
        />
      </div> */}
    </Carousel>
  );
};

export default ImageCarousel;
