import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <div className="h-screen flex justify-center items-center bg-gray-900">
      <div className="mockup-phone border-primary">
        <div className="camera"></div>
        <div className="display">
          <div className="artboard artboard-demo phone-2 overflow-hidden">
            <main className="w-full h-full pt-5 overflow-y-auto">
              <BrowserRouter>
                <App />
              </BrowserRouter>
            </main>
          </div>
        </div>
      </div>
    </div>
  </React.StrictMode>
);
