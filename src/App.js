// import Show from "./redux-basic/Show";
import "./App.css";
// import cartReducer from "./redux-basic/Reducer/cartReducer";
import { createStore } from "redux";
//createStore is used to tells our complier that any reducer is a store
import { Provider } from "react-redux";
//Provider is used to provide data from the reducer to component
// import gameReducer from "./redux-basic/Reducer/gameReducer";
// import ComA from "./redux-basic/ComA";
// import ComB from "./redux-basic/ComB";

import { persistStore, persistReducer } from "redux-persist";
// Redux persist used for data in localstorage
import storage from "redux-persist/lib/storage";
// To add at local storage without adding to cart
import { PersistGate } from "redux-persist/integration/react";
// PersistGate delays the rendering of your app's UI until your persisted state has been retrieved and saved to redux
import { RootReducer } from "./redux-demo/reducer";
import MyRoutes from "./MyRoutes";

function App() {
  // const store = createStore(cartReducer);
  // const store = createStore(gameReducer);

  const persistConfig = {
    key: "root",
    storage,
  };

  const persistedReducer = persistReducer(persistConfig, RootReducer);

  const store = createStore(persistedReducer);
  const persistor = persistStore(store);

  return (
    <div className="App">
      <Provider store={store}>
        {/* <Show /> */}
        {/* <ComA />
        <ComB /> */}
        <PersistGate persistor={persistor}>
          <MyRoutes />
        </PersistGate>
      </Provider>
    </div>
  );
}

export default App;
