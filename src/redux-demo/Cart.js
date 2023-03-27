import React from "react";
import Header from "./Header";
import { useSelector, useDispatch } from "react-redux";
const Cart = () => {
  const cart_item = useSelector((store) => store.cart);
  const cartArrayItem = cart_item.cartItems;
  const dispatch = useDispatch();
  return (
    <>
      <Header />
      {cartArrayItem.length <= 0 ? (
        <h2 class="text-danger text-center mb-5">Your Cart is Empty</h2>
      ) : (
        <div className="container mt-4">
          <div className="row justify-content-center">
            <div className="col-md-10">
              <table className="table table-bordered table-right">
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Price</th>
                    <th>Image</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {cartArrayItem.map((item, index) => (
                    <tr key={index}>
                      <td>{item.itemName}</td>
                      <id>Rs {item.itemPrice}</id>
                      <td>
                        <img src={item.itemImage} width="120" />
                      </td>
                      <td>
                        <button
                          className="btn btn-danger"
                          onClick={() =>
                            dispatch({
                              type: "REMOVE_FROM_CART",
                              payload: item,
                            })
                          }
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Cart;
