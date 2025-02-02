import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
//import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/styles/bootstrap.custom.css";
import "./assets/styles/index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import HomePage from "./pages/HomePage";
import ProductPage from "./pages/ProductPage";
import store from "./store";
import { Provider } from "react-redux";
import { HelmetProvider } from "react-helmet-async";
import CartPage from "./pages/CartPage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import ShippingPage from "./pages/ShippingPage";
import PrivateRoutes from "./components/common/routes/PrivateRoutes";
import PaymentPage from "./pages/PaymentPage";
import PlaceOrder from "./pages/PlaceOrder";
import OrderPage from "./pages/OrderPage";
import UserProfilePage from "./pages/UserProfilePage";
import AdminRoutes from "./components/common/routes/AdminRoutes";
import AdminOrdersPage from "./pages/admin/AdminOrdersPage";
import AdminProductsPage from "./pages/admin/AdminProductsPage";
import AdminUsersPage from "./pages/admin/AdminUsersPage";
import EditUsers from "./pages/admin/EditUsers";
import EditProduct from "./pages/admin/EditProduct";
import SignInPage from "./pages/SignInPage";
import LoginWithOTP from "./pages/LoginWithOTP";
import ForgotPassword from "./pages/ForgotPassword";
import ResetPasswordPage from "./pages/ResetPasswordPage";

const routes = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path="/" index={true} element={<HomePage />} />
s
      <Route path="/search/:keyword/page/:pageNumber" element={<HomePage />} />

      <Route path="" element={<PrivateRoutes />}>
        <Route path="/shipping" element={<ShippingPage />} />
      </Route>
    </Route>
  )
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <HelmetProvider>
      <Provider store={store}>
        <RouterProvider router={routes} />
      </Provider>
    </HelmetProvider>
  </React.StrictMode>
);

reportWebVitals();
