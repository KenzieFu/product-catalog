import React from "react";
import { Product } from "../components/Product";
import gdscSeries from "../data/gdscSeries";
import ReactLoading from 'react-loading';

export const MainPage = () => {
  return (
    // body
    <div className="md:m-10 m-4 ">
      {/* banner */}
      <div></div>
      {/* list of Product */}
      <div>
        <h2 className="xl:text-3xl lg:text-2xl text-xl font-bold">List of Products</h2>
        {/* Product Section */}
        <div className=" my-5">
          <div className="border-b-2 my-5">
            <h3 className="md:text-xl text-lg  font-bold mx-4  text-orange-300">
              GDSC Series
            </h3>
          </div>

          <div className="grid lg:grid-cols-3 xl:grid-cols-4 gap-x-6 gap-y-6 md:grid-cols-3 grid-cols-2 ">

            {gdscSeries &&
              gdscSeries.map(
                (item) => item.type == "GDSC SERIES" && <Product item={item} />
              )}
          </div>
        </div>
        <div className="mt-16">
          <div className="border-b-2 my-5">
            <h3 className="md:text-xl text-lg  font-bold mx-4  text-orange-300">
              Doodle Google Series
            </h3>
          </div>

          <div className="grid lg:grid-cols-3 xl:grid-cols-4 gap-x-6 gap-y-6 md:grid-cols-3 grid-cols-2 ">
            {gdscSeries &&
              gdscSeries.map(
                (item) => item.type == "DOODLE SERIES" && <Product item={item} />
              )}
            
          </div>
        </div>
      </div>
    </div>
  );
};
