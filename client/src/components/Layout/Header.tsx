import { useNavigate } from "react-router-dom";
import MainLogo from "../../assets/img/blogLogo.png";
// import MainLogo2 from "../../assets/img/logoPurple.png";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { useState, useEffect } from "react";
import WriteLogo from "../../assets/img/writeIcon.png";

export default function Header() {
  const navigator = useNavigate();
  const [btnText, setBtnText] = useState("");
  const isLoggedIn = useSelector((state: RootState) => state.login.isLoggedIn);
  const email = useSelector((state: RootState) => state.login.user.email);

  useEffect(() => {
    !isLoggedIn ? setBtnText("블로그 시작") : setBtnText("내 블로그");
  }, [btnText]);

  return (
    <header className="md:text-lg lg:text-xl xl:text-xl shadow-md h-16">
      <div className="flex items-center justify-between px-3 w-full h-full max-w-1200 mx-auto">
        <img
          alt="logo"
          src={MainLogo}
          className="max-h-[5vh] cursor-pointer"
          onClick={() => navigator("/")}
        />
        <div className="flex items-center">
          {isLoggedIn && (
            <img
              alt="WriteLogo"
              src={WriteLogo}
              className="max-h-[3vh] cursor-pointer px-2"
              onClick={() => navigator("/write-note")}
            />
          )}
          <button
            onClick={() =>
              !isLoggedIn ? navigator("/login") : navigator(`/${email}`)
            }
            className="text-white bg-black text-lg whitespace-nowrap px-2.5 py-1 rounded-lg"
          >
            {btnText}
          </button>
        </div>
      </div>
    </header>
  );
}
