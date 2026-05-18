import React from "react";
import img10 from "../../assets/images/donors_featured_one.jpg";

const ImageUi = ({
  src,
  alt = "data not found",
  className = "w-full h-full",
}) => {
  return (
    <img
      src={src}
      onError={(e) => (e.currentTarget.src = img10)}
      alt={alt}
      className={className}
    />
  );
};

export default ImageUi;
