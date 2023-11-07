import BasicProfile from "../../assets/img/bagicProfileIcon.png";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
import categoryIcon from "../../assets/img/categoryIcon.png";

const ProfileInfo = () => {
  const user = useSelector((state: RootState) => state.login.user);

  return (
    <div className="mx-auto">
      <img src={BasicProfile} className="max-h-[30vh] rounded-full mb-4" />
      <div className="space-y-3 text-center">
        <p className="text-2xl font-semibold">{user.nickname}</p>
        <p className="">{user.email}</p>
        <p>한줄 소개</p>
        <p>깃헙 주소/이메일 아이콘</p>
      </div>
      <div className="text-left mt-8">
        <p className="flex items-center text-gray-500">
          <img src={categoryIcon} className="max-h-[2vh] mr-1" />
          카테고리
        </p>
      </div>
    </div>
  );
};

export default ProfileInfo;
