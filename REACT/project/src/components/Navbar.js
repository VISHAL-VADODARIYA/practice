import React, { useState } from "react";
import { Link } from "react-router-dom";
import Cart from "./Cart";

export default function Navbar({ login }) {
  const [buy, setBuy] = useState(false);
  function Buy() {
    setBuy(true);
  }

  return (
    <>
      <nav class="bg-pink-700 shadow-xl border-gray-200">
        <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <a href="#" class="flex items-center">
            <span class="text-white self-center text-3xl font-semibold whitespace-nowrap dark:text-white">
              Fake Store
            </span>
          </a>
          <div class="hidden w-full md:block md:w-auto" id="navbar-default">
            <ul class="font-medium flex flex-col p-4 md:p-0 mt-4 rounded-lg md:flex-row md:space-x-8 md:mt-0">
              <li>
                <Link to="/">
                  <a
                    href="#"
                    class="block py-1 pl-3 pr-3 text-white rounded hover:bg-white hover:text-pink-700"
                    aria-current="page"
                  >
                    Home
                  </a>
                </Link>
              </li>
              <li>
                <Link to="/Menswear">
                  <a
                    href="#"
                    class="block py-1 pl-3 pr-3 text-white rounded hover:bg-white hover:text-pink-700"
                  >
                    Men's Wear
                  </a>
                </Link>
              </li>
              <li>
                <Link to="/Womenswear">
                  <a
                    href="#"
                    class="block py-1 pl-3 pr-3 text-white rounded hover:bg-white hover:text-pink-700"
                  >
                    Women's Wear
                  </a>
                </Link>
              </li>
              <li>
                <Link to="/Jewelery">
                  <a
                    href="#"
                    class="block py-1 pl-3 pr-3 text-white rounded hover:bg-white hover:text-pink-700"
                  >
                    Jewellery
                  </a>
                </Link>
              </li>
              <li>
                <Link to="/Electronics">
                  <a
                    href="#"
                    class="block py-1 pl-3 pr-3 text-white rounded hover:bg-white hover:text-pink-700"
                  >
                    Electronics
                  </a>
                </Link>
              </li>
            </ul>
          </div>

          <div className="flex justify-between">
            <Link to="/login">
              <button className="px-8 py-1 bg-white rounded text-pink-700 hover:bg-pink-200">
                {login?.username ? login.username : "Login"}
              </button>
            </Link>
            <div className="m-2"> </div>

            <button
              className="px-8 py-1 bg-white rounded text-pink-700 hover:bg-pink-200"
              onClick={Buy}
            >
              Cart
            </button>
          </div>
        </div>
      </nav>
      {buy && <Cart setBuy={setBuy} />}
    </>
  );
}

{
  /* <button
    data-collapse-toggle="navbar-default"
    type="button"
    class="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
    aria-controls="navbar-default"
    aria-expanded="false"
  >
    <span class="sr-only">Open main menu</span>
    <svg
      class="w-6 h-6"
      aria-hidden="true"
      fill="currentColor"
      viewBox="0 0 20 20"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill-rule="evenodd"
        d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
        clip-rule="evenodd"
      ></path>
    </svg>
  </button> */
}
