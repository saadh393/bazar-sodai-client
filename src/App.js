// 🔥 Dependencis 🔥
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import HomePage from "./Pages/HomePage";
import OrderPage from "./Pages/OrderPage";
import AdminPage from "./Pages/AdminPage";
import LoginPage from "./Pages/LoginPage";
import Navbar from "./Components/Navbar/Navbar";
import CheckoutPage from "./Pages/CheckoutPage";
import { createContext, useState } from "react";
import PrivateRoute from "./Components/PrivateRoute/PrivateRoute";

export const UserContext = createContext({});

function App() {
  const [user, setUser] = useState({});
  return (
    <>
      <UserContext.Provider value={[user, setUser]}>
        <Router>
          <Switch>
            <Container>
              <Route exact path="/">
                <Navbar />
                <HomePage />
              </Route>

              <PrivateRoute path="/orders">
                <Navbar />
                <OrderPage />
              </PrivateRoute>

              <Route path="/login">
                <Navbar />
                <LoginPage />
              </Route>

              <PrivateRoute path="/checkout/:_id">
                <Navbar />
                <CheckoutPage />
              </PrivateRoute>
            </Container>
          </Switch>

          <Switch>
            <PrivateRoute path="/admin">
              <AdminPage />
            </PrivateRoute>
          </Switch>
        </Router>
      </UserContext.Provider>
    </>
  );
}

export default App;
