import React, { useEffect, useState } from "react";

export default function Login({ setLogin }) {
  var password;
  var passcode;
  const [loginData, setLoginData] = useState({
    name: "",
    password: Math.floor(Math.random() * 9999 + 1),
  });
  useEffect(() => {
    console.log(loginData.password);
  }, []);

  const verify = (e) => {
    e.preventDefault();
    const email = e.target[0].value;
    var password = e.target[1].value;
    if (+password === loginData.password) {
      console.log(loginData);
      setLoginData({ name: email, password: password });
      setLogin({ isLogin: true, username: email });
      console.log("login");
      e.target[0].value = "";
      e.target[1].value = "";
    }
  };
  return (
    <>
      <div className="flex justify-center mt-20">
        <div class="w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow-xl sm:p-6 md:p-8 ">
          <form class="space-y-6" action="#" onSubmit={verify}>
            <h5 class="text-2xl font-bold text-pink-700">Log In</h5>
            <div>
              <label
                for="email"
                class="block mb-2 text-sm font-medium text-gray-900"
              >
                Your email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                placeholder="name@company.com"
                required
              />
            </div>
            <div>
              <label
                for="password"
                class="block mb-2 text-sm font-medium text-gray-900"
              >
                Your password
              </label>
              <input
                type="password"
                name="password"
                id="password"
                placeholder="••••••••"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                required
              />
            </div>

            <button
              type="submit"
              class="w-full text-white bg-pink-700 hover:bg-pink-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center "
            >
              Login to your account
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
