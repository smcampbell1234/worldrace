import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
// pages
import {
  Account,
  Home,
  Cart,
  Checkout,
  Error,
  Log,
  Login,
  Map,
  Settings,
  SingleProduct,
  Store,
  Team,
  ProtectedPage,
  LeaderBoard,
} from './pages';
// components
import Navbar from './components/Navbar';
import {useUserContext} from './context/user_context'

const App = () => {
  const {myUser,setMyUser} = useUserContext();

  return (
    <div className="App">
      <BrowserRouter>
      {
        !!myUser &&
        <Navbar myUser={myUser} setMyUser={setMyUser}/>
      }
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="map"
            element={
              <ProtectedPage>
                <Map />
              </ProtectedPage>
            }
          />
          <Route
            path="log"
            element={
              <ProtectedPage>
                <Log />
              </ProtectedPage>
            }
          />
          <Route
            path="team"
            element={
              <ProtectedPage>
                <Team />
              </ProtectedPage>
            }
          />
          <Route
            path="leaderboard"
            element={
              <ProtectedPage>
                <LeaderBoard />
              </ProtectedPage>
            }
          />
          <Route path="login" element={<Login />} />
          <Route path="account" element={<Account />} />
          <Route path="settings" element={<Settings />} />
          <Route path="store" element={<Store />} />
          <Route path="store/:productId" element={<SingleProduct />} />
          <Route path="cart" element={<Cart />} />
          <Route path="checkout" element={<Checkout />} />
          <Route path="error" element={<Error />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
