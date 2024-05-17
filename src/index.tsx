import "./index.css";
import ReactDOM from "react-dom/client";
import React from "react";
import App from "./App.tsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
// import { Provider } from "react-redux";
// import { PersistGate } from "redux-persist/integration/react";
// import { persistStore } from "redux-persist";
// import { store } from "./redux/store";
// import { StyledEngineProvider } from "@mui/material/styles";


// const persistor = persistStore(store);
const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    {/* <Provider store={store}>
      <PersistGate persistor={persistor}> */}
          <BrowserRouter>
            {/* <StyledEngineProvider injectFirst> */}
              <App/>
            {/* </StyledEngineProvider> */}
          </BrowserRouter>
      {/* </PersistGate>
    </Provider> */}
  </React.StrictMode>
);