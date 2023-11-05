import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../assets/img/welcomimg.png";
import axios from "axios";

const Login = () => {

  const [ email, setEmail ] = useState("")
  const [ password, setPassword ] = useState("")

  const navigator = useNavigate();

  const handleLogin = async () => {
    const requestData = {
      email : email,
      password : password,
    }
    await axios
            .post(`${process.env.REACT_APP_API_BASE_URL}/users/login`, requestData)
            .then((res) => {
              console.log(res.data)
            })
            .catch((err) => {
              console.log(err.message);
            })
  }

  return (
    <div className="flex items-center justify-center text-center h-screen">
      <div className=" border-2 border-gray-200 p-10 m-auto mx-5 max-w-lg lg:mx-auto md:mx-auto">
        <img
          alt="logo"
          src={logo}
          className="max-h-[11vh] cursor-pointer mx-auto"
          onClick={() => navigator('/')}
        />
        <p className="text-gray-400 text-base mt-3">나만의 블로그 만들기 ✒️</p>
        <br />
        <div>
          <input
            type="email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            className="px-4 py-3 max-w-md w-full my-2 bg-gray-100 rounded-md"
            placeholder="이메일을 입력하세요"
          />
        </div>
        <div>
          <input
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            className="px-4 py-3 max-w-md w-full my-2 bg-gray-100 rounded-md"
            placeholder="비밀번호를 입력하세요"
          />
        </div>
        <button
          onClick={handleLogin}
          className="py-2.5 text-white bg-black text-lg whitespace-nowrap px-2.5 rounded-lg w-full my-3 max-w-md">
          로그인 하기
        </button>
        <p className="text-gray-400">
          회원이 아니세요?
          <Link to="/sign-up" className="text-indigo-600 hover:underline mx-2">
            회원가입하러 가기
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
