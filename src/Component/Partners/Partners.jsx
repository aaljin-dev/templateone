import React from "react";
import { DataImage } from "../mockData";
import ImageUi from "../Shared/Imageui";

const Partners = () => {
  console.log(DataImage);

  return (
    <div className="bg-gray-100 py-16 borderr">
      <div className="max-w-[94%] mx-auto px-4 flex flex-wrap justify-center md:justify-between items-center gap-5 borderr">
        {DataImage.map((item) => {
          return (
            <div key={item.id}>
              <ImageUi
                src={item.image}
                alt={item.id}
                className={"w-35 h-35 object-contain"}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Partners;
