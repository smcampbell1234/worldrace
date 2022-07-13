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

const App = () => {
  const [user, setUser] = useState(null);

  return (
    <div className="App">
      <BrowserRouter>
      {
        !!user &&
        <Navbar user={user}/>
      }
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="map"
            element={
              <ProtectedPage user={user}>
                <Map />
              </ProtectedPage>
            }
          />
          <Route
            path="log"
            element={
              <ProtectedPage user={user}>
                <Log />
              </ProtectedPage>
            }
          />
          <Route
            path="team"
            element={
              <ProtectedPage user={user}>
                <Team />
              </ProtectedPage>
            }
          />
          <Route
            path="leaderboard"
            element={
              <ProtectedPage user={user}>
                <LeaderBoard />
              </ProtectedPage>
            }
          />
          <Route path="login" element={<Login setUser={setUser} />} />
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
