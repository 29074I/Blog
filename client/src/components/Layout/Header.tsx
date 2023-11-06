import { useNavigate } from "react-router-dom";
import MainLogo from "../../assets/img/blogLogo.png";
// import MainLogo2 from "../../assets/img/logoPurple.png";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { useState, useEffect } from "react";

export default function Header() {

  const navigator = useNavigate()
  const [ btnText, setBtnText ] = useState("")
  const isLoggedIn = useSelector((state: RootState ) => state.login.isLoggedIn)

  useEffect(() => {
    (!isLoggedIn) ? setBtnText('로그인하기') : setBtnText('마이페이지')
  },[btnText])

  return (
    <header className="md:text-lg lg:text-xl xl:text-xl shadow-md h-16">
        <div className="flex items-center h-16 justify-between px-5">
        <img alt="logo" src={MainLogo} className="max-h-[5vh] cursor-pointer" onClick={() => navigator('/')} />
        <button 
          onClick={() => (!isLoggedIn) ? navigator('/login') : navigator('/mypage')} 
          className="text-white bg-black text-lg whitespace-nowrap px-2.5 py-1 rounded-lg">
          {btnText}</button>
      </div>
    </header>
  );
}
