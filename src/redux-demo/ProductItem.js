import React from "react";
import { useDispatch } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { createAction } from "./utils/reducer/reducer.utils";

const ProductItem = ({ data }) => {
  const { itemImage, itemName, itemPrice } = data;
  const dispatch = useDispatch();

  const notify = () => toast(`${itemName} added. !!!`);
  return (
    <>
      <div className="col" style={{ marginTop: "50px" }}>
        <div className="card">
          <img
            src={itemImage}
            className="card-img-top"
            alt="..."
            style={{ height: "200px" }}
          />
          <div className="card-body">
            <h5 className="card-title">{itemName}</h5>
            <h4>Rs. {itemPrice}</h4>
            <button
              className="btn btn-warning"
              onClick={() => {
                dispatch(
                  createAction("ADD_TO_CART",data)
                  // { type: "ADD_TO_CART", payload: data }
                  );
                notify();
              }}
            >
              Add to Cart
            </button>
            <ToastContainer
              position="top-right"
              autoClose={5000}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
              theme="dark"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductItem;
