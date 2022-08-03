import React from "react";

//import images
import Logo from "../img/logo.png";
import Avatar from "../img/avatar.png";

//import for Google Auth.
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { app } from "../firebase.config";

//import Link
import { Link } from "react-router-dom";

//import Icons
import { MdShoppingBasket } from "react-icons/md";

const Header = () => {
  const provider = new GoogleAuthProvider();
  const auth = getAuth(app);

  const login = async () => {
    const response = await signInWithPopup(auth, provider);
    console.log(response);
  };
  return (
    <header className="py-6 px-16 fixed z-50 w-screen ">
      {/* desktop & tablet */}

      <div className="hidden md:flex w-full h-full items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <img src={Logo} alt="logo" className="w-10 object-cover" />
          <p className="text-xl text-headingColor font-bold">City</p>
        </Link>

        <div className="flex items-center gap-8">
          <ul className="flex items-center gap-8">
            <li
              className="text-base text-textColor cursor-pointer
           hover:text-headingColor duration-100 transition-all ease-in-out"
            >
              Home
            </li>
            <li
              className="text-base text-textColor cursor-pointer
           hover:text-headingColor duration-100 transition-all ease-in-out"
            >
              Menu
            </li>
            <li
              className="text-base text-textColor cursor-pointer
           hover:text-headingColor duration-100 transition-all ease-in-out"
            >
              About Us
            </li>
            <li
              className="text-base text-textColor cursor-pointer
           hover:text-headingColor duration-100 transition-all ease-in-out"
            >
              Service
            </li>
          </ul>
          <div className="relative flex items-center justify-center">
            <MdShoppingBasket className="text-2xl text-textColor cursor-pointer" />
            <div
              className="w-5 h-5 rounded-full bg-cartNumBg 
          flex items-center justify-center absolute -top-2 -right-2"
            >
              <p className="text-xs text-white font-semibold">3</p>
            </div>
          </div>
          <div>
            <img
              onClick={login}
              src={Avatar}
              alt="userProfile"
              className="w-10 min-w-[40px] min-h-[40px] drop-shadow-xl cursor-pointer "
            />
          </div>
        </div>
      </div>

      {/* mobile */}
      <div className="flex md:hidden "></div>
    </header>
  );
};

export default Header;
