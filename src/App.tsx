import { useEffect, useState } from "react";

import { Routes, Route, Link } from "react-router-dom";
import Checkout from "./Checkout";
import Details from "./Details";
import Home from "./Home";
import Legal from "./Legal";
import Login from "./Login";
import Plant from "./Plant";
import Store from "./Store";

import { CookiesProvider } from "react-cookie";
import Form from "./Form";

function App() {
  return (
    <div>
      <Routes>
        <Route index element={<Home />} />

        <Route path="checkout/:itemId" element={<Checkout />} />

        <Route path="checkout/:itemId/form" element={<Form />} />

        <Route path="login" element={<Login />} />

        <Route element={<Plant />}>
          <Route path="/:id/" element={<Details />} />

          <Route path="/:id/legal" element={<Legal />} />

          <Route path="/:id/store" element={<Store />} />
        </Route>
      </Routes>
    </div>
  );
}

function AppWithProvider() {
  return (
    <CookiesProvider>
      <App />
    </CookiesProvider>
  );
}

export default AppWithProvider;
