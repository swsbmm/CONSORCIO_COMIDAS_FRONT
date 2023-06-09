import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { Provider } from "react-redux";
import { store } from "./Components/Redux/store";
import { Routes, Route, Navigate, HashRouter } from "react-router-dom";
import { Main } from "./Components/Main/Main";
import { Home } from "./Components/Home/Home";
import { Restaurants } from "./Components/Restaurant/Restaurant";
import { Unselect } from "./Components/Domiciles/ProductCategories/Unselect/Unselect";
import { ShoppingCart } from "./Components/ShoppingCart/ShoppingCart";
import { SobreNosotros } from "./Components/SobreNosotros/SobreNosotros"; 
import ScrollToTop from "./Components/Redux/ScrollToTop";

import "bootstrap/dist/css/bootstrap.min.css";
import Productos from "./Components/Domiciles/NavigationMenu/productos";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <HashRouter>
        <ScrollToTop>
          <Routes>
            <Route path="/" element={<Main />}>
              
              <Route path="/" element={<Home />} />                
              <Route path="/SobreNosotros" element={<SobreNosotros />}></Route>
              <Route path="/restaurantes" element={<Restaurants />} />
              <Route path="/domiciles/:id" element={<Unselect />} />
              <Route path="/Productos" element={<Productos />} />

              {/* <Route
                path="/domiciles/pizzas"
                element={<CategoryPizza json={Categories[0]} />}
              />
              <Route
                path="/domiciles/hotdogs"
                element={<DefaultCategory json={Categories[1]} />}
              />
              <Route
                path="/domiciles/burgers"
                element={<DefaultCategory json={Categories[2]} />}
              />
              <Route
                path="/domiciles/salchipapas"
                element={<DefaultCategory json={Categories[3]} />}
              />
              <Route
                path="/domiciles/patacones&others"
                element={<DefaultCategory json={Categories[4]} />}
              />
              <Route
                path="/domiciles/drinks&others"
                element={<DefaultCategory json={Categories[5]} />}
              /> */}

              <Route
                path="/domiciles/shopping_card"
                element={<ShoppingCart />}
              />
              <Route path="*" element={<Navigate replace to="/" />} />
            </Route>
          </Routes>
        </ScrollToTop>
      </HashRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
