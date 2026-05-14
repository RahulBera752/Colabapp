import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

import { BrowserRouter } from "react-router-dom";
import { ClerkProvider } from "@clerk/clerk-react";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const PUBLISHABLE_KEY =
"pk_test_ZW5nYWdlZC1zbmlwZS05Ni5jbGVyay5hY2NvdW50cy5kZXYk";

ReactDOM.createRoot(
  document.getElementById("root")
).render(
  <React.StrictMode>

    <ClerkProvider
      publishableKey={PUBLISHABLE_KEY}
    >

      <BrowserRouter>

        <App />

        <ToastContainer
          position="top-right"
          autoClose={2000}
          theme="dark"
        />

      </BrowserRouter>

    </ClerkProvider>

  </React.StrictMode>
);