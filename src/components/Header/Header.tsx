import React from "react";

// Link
import { Link } from "react-router-dom";

// Hooks
import { useSelector } from "react-redux";

// Components
import NavBar from "../Header/NavBar.tsx";
import Container from "../Container.tsx";

// Images
import Logo from "../../images/Logo.tsx";
import Ecommerce from "../../images/Ecommerce.tsx";

// Icons
import Search from "../../icons/Search.tsx";
import Cart from "../../icons/Cart.tsx";
import Profile from "../../icons/Profile.tsx";

const Header: React.FC = () => {
  const userId = localStorage.getItem("userId");

  const logOut = (): void => {
    if (userId) {
      localStorage.removeItem("userId");
    }
  };
  const cartItems = useSelector((state) => state.cart?.cartItems)?.map(
    (cartItem) => {
      return cartItem?.quantity;
    }
  );

  return (
    <header className="w-full py-5 px-12">
      <Container>
        <div className="flex justify-between">
          {/* left side logo */}
          <Link to="/">
            <div className="flex gap-2 items-center">
              <Logo />
              <Ecommerce />
            </div>
          </Link>
          {/* navbar */}
          <NavBar />
          {/* right side input cart logout logos */}
          <div>
            <div className="flex items-center gap-8">
              {/* input */}
              <div className="flex gap-2 border-solid border-2 border-[#E6E7E8] rounded-lg px-4 py-3">
                <Search />
                <input
                  type="text"
                  placeholder="Search products"
                  className="border-none outline-none px-2"
                />
              </div>
              <div className="flex gap-8">
                <Link
                  className="flex gap-2 items-center justify-center"
                  to="/cart"
                >
                  <Cart />
                  {cartItems?.length > 0 && (
                    <span className="w-5 h-5 text-center flex items-center justify-center bg-slate-700 rounded-full text-white">
                      {cartItems?.reduce(
                        (sum: number, num: number) => sum + num
                      )}
                    </span>
                  )}
                </Link>
                {userId ? (
                  <Link onClick={logOut} to="/sign-in">
                    <Profile />
                  </Link>
                ) : (
                  <Link to="/sign-in">
                    <Profile />
                  </Link>
                )}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Header;
