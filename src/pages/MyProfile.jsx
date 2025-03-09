import { useContext } from "react";
import { assets } from "../assets/assets";
import { AllContext } from "../Context/AllContext";

const MyProfile = () => {
  const { userData } = useContext(AllContext);

  return (

    <div className="max-w-2xl  bg-white  rounded-lg">
      <div className="flex items-center space-x-4">
        <img
          src={assets.user_icon}
          alt="Profile"
          className="w-16 h-16 border rounded-full"
        />

        <div className="flex gap-4 items-center">
          <h2 className="text-2xl font-semibold">{userData?.name}</h2>
          <span className="text-[13px] text-gray-500  py-0 px- rounded-md">
            {userData?.status === "active" ? "🟢 Active" : "🔴 Pending"}
          </span>
        </div>
      </div>


      <div className="mt-8 space-y-4">
        <div className="flex justify-between border-b border-t pt-2 pb-2">
          <span className="text-gray-600">Email Address</span>
          <span className="text-gray-800">{userData?.email}</span>
          <span className="text-blue-500 cursor-pointer hover:underline">Edit</span>
        </div>

        <div className="flex justify-between border-b pb-2">
          <span className="text-gray-600">Balance</span>
          <span className="text-gray-800">{userData?.balance}</span>
        </div>


        <div className="flex justify-between border-b pb-2">
          <span className="text-gray-600">Account Created</span>
          <span className="text-gray-800">
            {new Date(userData?.created_at).toLocaleString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
              hour: "2-digit",
              minute: "2-digit",
              second: "2-digit",
              hour12: true,
            })}
          </span>
        </div>
      </div>
    </div>

  );
};

export default MyProfile;
