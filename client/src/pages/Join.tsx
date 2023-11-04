import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/img/welcomimg.png";

const Join = () => {
  const [showPwd, setShowPwd] = useState(false);

  const handleShowPwd = () => {
    setShowPwd(!showPwd);
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <div className=" border-2 border-gray-200 p-10 m-auto mx-5 max-w-lg lg:mx-auto md:mx-auto">
        <img
          alt="logo"
          src={logo}
          className="max-h-[11vh] cursor-pointer mx-auto"
        />
        <p className="text-gray-400 text-base mt-3 text-center">
          나만의 블로그 만들기 ✒️
        </p>
        <br />
        <label>아이디</label>
        <div className="flex mb-2">
          <input
            type="id"
            className="px-4 py-3 max-w-md w-full bg-gray-100 rounded-l-md"
          />
          <button className="text-white relative flex-shrink-0 p-2 px-7 text-lg bg-gray-600 rounded-r-md">
            인증
          </button>
        </div>
        <label>닉네임</label>
        <div className="flex mb-2">
          <input
            type="nickname"
            className="px-4 py-3 max-w-md w-full bg-gray-100 rounded-l-md"
          />
          <button className="text-white relative flex-shrink-0 p-2 px-7 text-lg bg-gray-600 rounded-r-md">
            확인
          </button>
        </div>
        <label>비밀번호</label>
        <input
          type={showPwd ? "text" : "password"}
          className="px-4 py-3 max-w-md w-full bg-gray-100 rounded-l-md"
          placeholder="영문, 숫자, 특수문자 포함 8자리 이상"
          maxLength={16}
        />
        <div className="flex mt-1">
          <input type="checkbox" onChange={handleShowPwd} />
          <span className="block ml-2 text-sm text-gray-500">
            비밀번호 보기
          </span>
        </div>
        <button className="py-2.5 text-white bg-black text-lg whitespace-nowrap px-2.5 rounded-lg w-full my-3 max-w-md">
          로그인 하기
        </button>
        <div className="text-center">
          <Link to="/login" className="text-indigo-600 hover:underline mx-2">
            로그인화면으로 이동
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Join;
