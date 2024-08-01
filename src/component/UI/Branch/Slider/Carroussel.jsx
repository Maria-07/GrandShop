import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import { config } from "react-spring";

// Dynamically import the Carousel component
const Carousel = dynamic(() => import("react-spring-3d-carousel"), {
  ssr: false,
});

const Carroussel = (props) => {
  const table = props.cards.map((element, index) => {
    return { ...element, onClick: () => setGoToSlide(index) };
  });

  const [offsetRadius, setOffsetRadius] = useState(2);
  const [showArrows, setShowArrows] = useState(false);
  const [goToSlide, setGoToSlide] = useState(null);
  const [cards] = useState(table);

  useEffect(() => {
    setOffsetRadius(props.offset);
    setShowArrows(props.showArrows);
  }, [props.offset, props.showArrows]);

  return (
    <div>
      <div
        style={{
          width: props.width,
          height: props.height,
          margin: props.margin,
        }}
      >
        <Carousel
          slides={cards}
          goToSlide={goToSlide}
          offsetRadius={offsetRadius}
          showNavigation={showArrows}
          animationConfig={config.gentle}
        />
      </div>
    </div>
  );
};

export default Carroussel;
