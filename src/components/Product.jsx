import React from "react";

export const Product = (props) => {
  const item = props.item
  const imagetype =item.type =="GDSC SERIES"?"gdscSeries/":"doodleSeries/"
  return (
    <div id={item.productId} className="border-2 rounded-2xl p-2 md:p-4  m-auto ">
      {/* images */}
      <div className="xl:w-[285px] xl:h-[225px] lg:w-[240px] lg:h-[180px]   md:w-[260px] md:h-[200px] sm:w-[240px] sm:h-[180px]  ">
        <img
          className="size-[100%] rounded-xl"
          src={`src/assets/images/${imagetype}${item.image}`}
          alt=""
        />
      </div>
      <div className="mx-2 my-2">
        <h2 className="xl:text-lg md:text-[16px] sm:text-[14px] text-[12px] font-bold">{item.title}</h2>
        <span className="xl:text-sm md:text-[12px] text-[10px] font-medium">{item.type}</span>
      </div>
    </div>
  );
};
