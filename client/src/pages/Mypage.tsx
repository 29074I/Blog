import ProfileInfo from "./Mypage/ProfileInfo"

const Mypage = () => {

  return (
    <div className=" grid grid-cols-1 lg:grid-cols-2 md:grid-cols-2 gap-8">
      <ProfileInfo />
      <div className="bg-violet-50 text-center">main</div>
    </div>
  )
}

export default Mypage