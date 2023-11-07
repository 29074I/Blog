import { useState, useCallback, useEffect } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import Modal from '../components/Modal/Modal'
import logo from "../assets/img/welcomimg.png";

const Join = () => {

  const [ isOpenModal, setOpenModal ] = useState(false)
  const [ modalText, setModalText ] = useState("")
  const [showPwd, setShowPwd] = useState(false);
  const [email, setEmail] = useState("");
  const [nickname, setNickname] = useState("");
  const [password, setPassword] = useState("");

  const validatePassword = (password: string) => {
    const re = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{8,}$/;
    return re.test(password);
  };

  const validateEmail = (email: string) => {
    const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return re.test(email);
  };

  const navigator = useNavigate();

  const handleShowPwd = () => {
    setShowPwd(!showPwd);
  };

  const onClickToggleModal = useCallback(() => {
    setOpenModal(!isOpenModal)
    if(modalText === "회원가입 성공! 😍"){
      navigator('/login')
    }
  }, [isOpenModal, modalText])

  const handleJoin = async () => {

    if(!email || !nickname || !password) {
      setModalText("빈칸을 모두 채워주세요 😅")
      setOpenModal(!isOpenModal)
      return
    }

    if (!validatePassword(password)) {
      setModalText("비밀번호는 영문, 숫자, 특수문자를 <br/> 포함한 8자리 이상이어야 합니다 😅");
      setOpenModal(!isOpenModal);
      return;
    }

    const requestData = {
      email: email,
      nickname : nickname,
      password: password,
    };

    await axios
      .post(`${process.env.REACT_APP_API_BASE_URL}/users`, requestData)
      .then((res) => {
        console.log(res.data)
        setModalText("회원가입 성공! 😍")
        setOpenModal(!isOpenModal)
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  const handleCheckEmail = async () => {
    await axios
            .get(`${process.env.REACT_APP_API_BASE_URL}/users/email/${email}/exists`)
            .then((res) => {
              if (!validateEmail(email)) {
                setModalText("이메일 형식이 올바르지 않습니다 😅");
                setOpenModal(!isOpenModal);
                return;
              }

              if(res.data == false) {
                setModalText("사용 가능한 이메일입니다 😎")
                setOpenModal(!isOpenModal)
                console.log(res.data);
              } else {
                setModalText("이미 가입된 이메일입니다 😂")
                console.log(modalText);
                setOpenModal(!isOpenModal)
              }
            })
            .catch((err) => {
              console.log(err);
            })
  }

  const handleCheckNick = async () => {
    await axios
            .get(`${process.env.REACT_APP_API_BASE_URL}/users/nick/${nickname}/exists`)
            .then((res) => {
              if(res.data == false) {
                setModalText("사용 가능한 닉네임입니다 😎")
                setOpenModal(!isOpenModal)
                console.log(res.data);
              } else {
                setModalText("이미 존재하는 닉네임입니다 😂")
                console.log(modalText);
                setOpenModal(!isOpenModal)
              }
            })
            .catch((err) => {
              console.log(err);
            })
  }

  return (
    <div className="flex items-center justify-center min-h-custom">
      <div className=" border-2 border-gray-200 p-10 m-auto mx-5 max-w-lg lg:mx-auto md:mx-auto">
        <img
          alt="logo"
          src={logo}
          className="max-h-[11vh] cursor-pointer mx-auto"
          onClick={() => navigator('/')}
        />
        <p className="text-gray-400 text-base mt-3 text-center">
          나만의 블로그 만들기 ✒️
        </p>
        <br />
        <label>이메일</label>
        <div className="flex mb-2">
          <input
            type="email"
            onChange={(e) => setEmail(e.target.value)}
            className="px-4 py-3 max-w-md w-full bg-gray-100 rounded-l-md"
          />
          <button 
            // onClick={handleCheckEmail}
            onClick={handleCheckEmail}
            className="text-white relative flex-shrink-0 p-2 px-7 text-lg bg-gray-600 rounded-r-md">
            확인
          </button>
        </div>
        <label>닉네임</label>
        <div className="flex mb-2">
          <input
            type="text"
            onChange={(e) => setNickname(e.target.value)}
            className="px-4 py-3 max-w-md w-full bg-gray-100 rounded-l-md"
          />
          <button 
            onClick={handleCheckNick}
            className="text-white relative flex-shrink-0 p-2 px-7 text-lg bg-gray-600 rounded-r-md">
            확인
          </button>
        </div>
        <label>비밀번호</label>
        <input
          type={showPwd ? "text" : "password"}
          onChange={(e) => setPassword(e.target.value)}
          className="px-4 py-3 max-w-md w-full bg-gray-100 rounded-md"
          placeholder="영문, 숫자, 특수문자 포함 8자리 이상"
          maxLength={16}
        />
        <div className="flex mt-1">
          <input type="checkbox" onChange={handleShowPwd} />
          <span className="block ml-2 text-sm text-gray-500">
            비밀번호 보기
          </span>
        </div>
        <button
          onClick={handleJoin}
          className="py-2.5 text-white bg-black text-lg whitespace-nowrap px-2.5 rounded-lg w-full my-3 max-w-md"
        >
          회원가입 하기
        </button>
        <div className="text-center">
          <Link to="/login" className="text-indigo-600 hover:underline mx-2">
            로그인화면으로 이동
          </Link>
        </div>
      </div>
      {isOpenModal && (
        <Modal onClickToggleModal={onClickToggleModal}>
          {/* <h2 className="text-center text-xl font-semibold m-2">이메일 중복 확인</h2> */}
          <p dangerouslySetInnerHTML={{ __html: modalText }} className="text-center" />
          <button
            className="mt-4 bg-gray-600 text-white rounded-md text-lg py-1.5"
            onClick={onClickToggleModal}>확인</button>
        </Modal>
      )}
    </div>
  );
};

export default Join;
