import "./App.css";
//Se importan las rutas de las vistas para conectar con rutas
import Home from "pages/home";
import Categories from "pages/client/categories";
import Products from "pages/client/products";
import Orders from "pages/client/orders";
import DeliveryRequest from "pages/client/deliveryreq";
import DeliveryConfirm from "pages/client/deliveryconf";
import Politics from "pages/client/politics";
import Login from "pages/admin/login";
import Welcome from "pages/admin/welcome";
import ProductManagement from "pages/admin/productmanag";
import SellerManagement from "pages/admin/sellermanag";
import SalesReport from "pages/admin/salesrep";
import Report from "pages/admin/report";
import OrdersClient from "pages/admin/ordersclient";
import Registry from "pages/admin/registry";
//Se importa React-Router-Dom
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/politics">
            <Politics />
          </Route>
          <Route path="/categories">
            <Categories />
          </Route>
          <Route path="/products">
            <Products />
          </Route>
          <Route path="/orders">
            <Orders />
          </Route>
          <Route path="/deliveryreq">
            <DeliveryRequest />
          </Route>
          <Route path="/deliveryconf">
            <DeliveryConfirm />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/welcome">
            <Welcome />
          </Route>
          <Route path="/productmanag">
            <ProductManagement />
          </Route>
          <Route path="/sellermanag">
            <SellerManagement />
          </Route>
          <Route path="/salesrep">
            <SalesReport />
          </Route>
          <Route path="/report">
            <Report />
          </Route>
          <Route path="/ordersclient">
            <OrdersClient />
          </Route>
          <Route path="/registry">
            <Registry />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
