import { Link, useNavigate } from "react-router-dom";
import MainLogo from "../../assets/img/blogLogo.png";
import MainLogo2 from "../../assets/img/logoPurple.png";

export default function Header() {
  const navigator = useNavigate()

  const goHome = () => {
    navigator("/")
  };

  const goLogin = () => {
    navigator("/login")
  }

  return (
    <header className="md:text-lg lg:text-xl xl:text-xl shadow-md h-16">
        <div className="flex items-center h-16 justify-between px-5">
        <img alt="logo" src={MainLogo} className="max-h-[5vh] cursor-pointer" onClick={goHome} />
        <button onClick={goLogin} className="text-white bg-black text-lg whitespace-nowrap px-2.5 py-1 rounded-lg">
          로그인하기</button>
      </div>
    </header>
  );
}
