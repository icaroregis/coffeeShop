import { Routes as Routers, Route } from "react-router-dom";
import { Home } from "../pages";
import { ShoppingCart } from "../pages";

export function Routes() {
  return (
    <Routers>
      <Route path="/" element={<Home />} />
      <Route path="/cart" element={<ShoppingCart />} />
    </Routers>
  );
}
