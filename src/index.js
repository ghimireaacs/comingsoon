import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
// import App from "./App";
import reportWebVitals from "./reportWebVitals";
import ComingSoon from "./components/body/comingsoon";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <div class="flex justify-center items-center h-screen w-screen ">
      <div class=" border-2 ">
        <div class="min-h-screen w-screen bg-gray-800 flex flex-col items-center justify-center pattern-topography-gray-700/100">
          <ComingSoon />
        </div>
      </div>
    </div>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
