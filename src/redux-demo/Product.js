import React, { useState } from "react";
import ProductItem from "./ProductItem";
import { useSelector } from "react-redux";

const Product = () => {
  const itemsData = useSelector((store) => store.items);

  const [itemList, setItemList] = useState(itemsData.items);
  // items => inital data at reducer in itemReducer
  return (
    <>
      <div className="container">
        <div className="row row-cols-1 row-cols-md-3 g-4">
          {itemList.map((item, index) => 
             <ProductItem key={index} data={item} />
          )}
        </div>
      </div>
    </>
  );
};

export default Product;
