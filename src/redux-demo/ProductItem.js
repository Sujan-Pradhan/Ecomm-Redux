import React from "react";
import { useDispatch } from "react-redux";

const ProductItem = (props) => {
  const show = props.data;
  const dispatch = useDispatch();
  return (
    <>
      <div className="col" style={{ marginTop: "50px" }}>
        <div className="card">
          <img
            src={show.itemImage}
            className="card-img-top"
            alt="..."
            style={{ height: "200px" }}
          />
          <div className="card-body">
            <h5 className="card-title">{show.itemName}</h5>
            <h4>Rs. {show.itemPrice}</h4>
            <button
              className="btn btn-warning"
              onClick={() => {
                dispatch({ type: "ADD_TO_CART", payload: show });
              }}
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductItem;
