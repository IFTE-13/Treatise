import React, { createContext, useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './Components/Home/Home';
import Header from './Components/Header/Header';
import Login from './Components/Login/Login';
import NotFound from './Components/NotFound/NotFound';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import Admin from './Components/Admin/Admin';
import Deals from './Components/Deals/Deals';
import CheckOut from './Components/CheckOut/CheckOut';
import PlaceOrder from './Components/PlaceOrder/PlaceOrder';
import Orders from './Components/Orders/Orders';
import AddBooks from './Components/AddBooks/AddBooks';
import Edit from './Components/Admin/Edit';
import Manage from './Components/Admin/Manage';



export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]} >
      <Router>
        <Switch>
          <Route exact path="/">
            <Header></Header>
            <Home />
          </Route>
          <Route path="/home">
            <Header></Header>
            <Home />
          </Route>
          <Route path="/deals">
            <Header></Header>
            <Deals></Deals>
          </Route>
          <PrivateRoute exact path="/orders">
            <Header></Header>
            <Orders />
          </PrivateRoute>
          <Route path="/login">
            <Header></Header>
            <Login></Login>
          </Route>
          <PrivateRoute exact path="/checkOut/:id">
            <Header></Header>
            <CheckOut></CheckOut>
          </PrivateRoute>
          <PrivateRoute exact path="/checkOut/:id/placeOrder">
            <Header></Header>
            <PlaceOrder></PlaceOrder>
          </PrivateRoute>
          <PrivateRoute path="/admin">
            <Admin></Admin>
          </PrivateRoute>
          <PrivateRoute path="/addBooks">
            <Admin></Admin>
            <AddBooks />
          </PrivateRoute>
          <PrivateRoute path="/manage">
            <Admin></Admin>
            <Manage />
          </PrivateRoute>
          <PrivateRoute path="/edit">
            <Admin></Admin>
            <Edit></Edit>
          </PrivateRoute>
          <Route path="*">
            <Header></Header>
            <NotFound></NotFound>
          </Route>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
