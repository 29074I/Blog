import React from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../assets/img/welcomimg.png";

const Login = () => {
  const navigator = useNavigate();
  const goHome = () => {
    navigator("/");
  };

  return (
    <div className="flex items-center justify-center text-center h-screen">
      <div className=" border-2 border-gray-200 p-10 m-auto mx-5 max-w-lg lg:mx-auto md:mx-auto">
        <img
          alt="logo"
          src={logo}
          className="max-h-[11vh] cursor-pointer mx-auto"
          onClick={goHome}
        />
        <p className="text-gray-400 text-base mt-3">
          나만의 블로그 만들기 ✒️
        </p>
        <br />
        <input
          type="id"
          className="px-4 py-3 rounded-lg my-2 max-w-md w-full bg-gray-100"
          placeholder="아이디를 입력해주세요"
        />
        <input
          type="password"
          className="px-4 py-3 rounded-lg my-2 max-w-md w-full bg-gray-100"
          placeholder="비밀번호를 입력해주세요"
        />
        <button className="py-2.5 text-white bg-black text-lg whitespace-nowrap px-2.5 rounded-lg w-full my-3 max-w-md">
          로그인 하기
        </button>
        <p className="text-gray-400">
          회원이 아니세요?
          <Link to="/join" className="text-indigo-600 hover:underline mx-2">
            회원가입하러 가기
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
