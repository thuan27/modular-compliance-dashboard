import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import App from "./App.tsx";
import { Amplify } from "aws-amplify";
import awsmobile from "./aws-exports.ts";
import "./assets/scss/_global.scss";

Amplify.configure(awsmobile);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>
);
