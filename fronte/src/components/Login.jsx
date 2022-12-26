import React, { useState } from "react";
import VisibilityIcon from "@mui/icons-material/Visibility";

export default function Login() {
  const [values, setValues] = useState({
    password: "",
    showPassword: false,
  });

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handlePasswordChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };
  return (
    <div class="h-screen flex">
      <div class="flex w-1/2 bg-[#111827] i justify-around items-center ">
        <div className="mb-4 mr-4">
          <img src="image2.png" className=" w-screen  " />
        </div>
      </div>
      <div class="flex w-1/2 justify-center items-center bg-white">
        <form class="bg-white">
          <h1 class="text-[#111827] font-bold text-4xl mb-12 text-center rounded-tr-xl rounded-bl-xl outline outline-offset-4 outline-2  ">
            Sign In
          </h1>
          <h1 class="text-[#111827] font-bold text-2xl mb-1">Hello Again!</h1>
          <p class="text-sm font-normal text-[#111827] mb-7">
            Welcome Back To Bi0s Hardware CMS
          </p>
          <div class="flex items-center border-2 py-2 px-3 rounded-2xl mb-4">
            <input
              class="pl-2 outline-none border-none"
              type="text"
              name=""
              id=""
              placeholder="Email Address"
            />
          </div>
          <div class="flex items-center border-2 py-2 px-3 rounded-2xl">
            <input
              class="pl-2 outline-none border-none"
              type={values.showPassword ? "text" : "password"}
              onChange={handlePasswordChange("password")}
              value={values.password}
              placeholder="Password"
              name=""
              id=""
            />
            <VisibilityIcon
              className="text-gray-400 , cursor-pointer"
              onClick={handleClickShowPassword}
              onMouseDown={handleMouseDownPassword}
            />
          </div>
          <div className="mt-2">
            <span class="text-sm ml-48 hover:text-[#3b82f6] cursor-pointer">
              Forgot Password ?
            </span>
          </div>

          <div class="flex items-start mt-2 ml-2">
            <div class="flex items-center h-5">
              <input
                id="remember"
                aria-describedby="remember"
                type="checkbox"
                class="bg-gray-50 border-gray-300 focus:ring-3 focus:ring-blue-300 h-4 w-4 rounded"
                required=""
              />
            </div>
            <div class="text-sm ml-3">
              <label for="remember" class="font-medium text-gray-900">
                Remember me
              </label>
            </div>
          </div>
          <button className=" w-full bg-[#111827] mt-4 py-2 rounded-2xl text-white  font-semibold mb-2 hover:bg-[#9ca3af] ">
            Login
          </button>
        </form>
      </div>
    </div>
  );
}
