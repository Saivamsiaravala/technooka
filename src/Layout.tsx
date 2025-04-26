import { Outlet } from "react-router-dom";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import SideBar from "./Components/SideBar";
import { useState } from "react";
import Login from "./Pages/Login ";

const Layout = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const loginHandler: () => void = () => {
    setIsLoggedIn(true);
  };
  return (
    <>
      {!isLoggedIn ? (
        <div className="login">
          <Login loginHandler={loginHandler} />
        </div>
      ) : (
        <div className="layout">
          <Header />
          <main>
            <Outlet />
          </main>
          <Footer />
          <SideBar />
        </div>
      )}
    </>
  );
};

export default Layout;
