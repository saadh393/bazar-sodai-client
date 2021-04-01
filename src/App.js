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

              <Route path="/orders">
                <Navbar />
                <OrderPage />
              </Route>

              <Route path="/login">
                <Navbar />
                <LoginPage />
              </Route>

              <Route path="/checkout/:_id">
                <Navbar />
                <CheckoutPage />
              </Route>
            </Container>
          </Switch>

          <Switch>
            <Route path="/admin">
              <AdminPage />
            </Route>
          </Switch>
        </Router>
      </UserContext.Provider>
    </>
  );
}

export default App;
