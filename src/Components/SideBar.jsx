import { useContext, useState } from "react";
import {
  Home,
  CreditCard,
  List,
  Send,
  Users,
  FileText,
  DollarSign,
  Bell,
  Search,
  ChevronDown,
  ChevronRight,
  User,
} from "lucide-react";
import MainPage from "../pages/MainPage";
import { assets } from "../assets/assets";
import { Routes, Route, Link, useNavigate } from "react-router-dom";
import Bill from "../pages/Bill";
import MainTransaction from "../pages/MainTransaction";
import Task from "../pages/Task";
import SendMoney from "../pages/SendMoney";
import Login_Res from "./Login_Res";
import { AllContext } from "../Context/AllContext";
import { toast } from "react-toastify";

const Sidebar = (props) => {

  const [active, setActive] = useState("");
  const [openDropdown, setOpenDropdown] = useState(null);
  const [searchDropdown, setSearchDropdown] = useState(false);
  const [moveMoneyDropdown, setMoveMoneyDropdown] = useState(false);
  const [userDropdown, setUserDropdown] = useState(false);

  const { setToken , currency } = useContext(AllContext);

  const navigate = useNavigate();

  const logout = () => {
    setToken(false);
    localStorage.removeItem("token");

  };

  const menuItems = [
    { name: "Home", icon: Home, path: "/dashboard" },
    { name: "Tasks", icon: List, badge: 5, path: "/task" },
    { name: "Transactions", icon: Send, path: "/transaction" },
    {
      name: "Payments",
      icon: DollarSign,
      dropdown: ["Send Money", "Loan Money", "Add Money", "Request Money"],
    },
    { name: "Cards", icon: CreditCard },
    { name: "Bill", icon: FileText, path: "/bill" },
    {
      name: "Accounts",
      icon: Users,
      dropdown: ["My-Account", "Add a new Account"],
    },
  ];

  return (

    <div className="flex h-screen">

      <div className="w-52 min-h-[1150px] flex flex-col shadow-lg p-4">
        <Link to='/dashboard'><h2 className="text-xl font-bold mb-6">Mercury</h2></Link>
        <hr className="h-0.5 mb-5 w-full" />
        <nav>
          {menuItems.map((item) => (
            <div className="text-[15px]" key={item.name}>
              {/* Navigation Link */}
              <Link
                to={item.path}
                onClick={() => {
                  if (item.dropdown) {
                    setOpenDropdown(
                      openDropdown === item.name ? null : item.name
                    );
                  } else {
                    setActive(item.name);
                  }
                }}
                className={`flex items-center gap-3 p-4 rounded-lg cursor-pointer transition-all hover:bg-gray-200 ${
                  active === item.name ? "bg-gray-300 font-semibold" : ""
                }`}
              >
                <item.icon className="w-4 h-4" />
                <span>{item.name}</span>
                {item.badge && (
                  <span className="ml-auto bg-gray-300 text-black text-xs px-2 py-1 rounded-md">
                    {item.badge}
                  </span>
                )}
                {item.dropdown && (
                  <span className="ml-auto">
                    {openDropdown === item.name ? (
                      <ChevronDown />
                    ) : (
                      <ChevronRight />
                    )}
                  </span>
                )}
              </Link>

              {/* Dropdown Items */}
              {item.dropdown && openDropdown === item.name && (
                <div className="ml-8 mt-1">
                  {item.dropdown.map((subItem) => (
                    <div
                      key={subItem}
                      className="p-2 cursor-pointer hover:bg-gray-200 rounded-lg"
                    >
                      {subItem}
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col ml-[400px]">
        
        
        {/* Header */}
        <div className="flex justify-between items-center bg-white p-4 relative">
          {/* Search Box */}
          <div className="relative w-1/3">
            <div
              className="relative flex items-center border rounded-lg w-[600px] text-[15px]"
              onClick={() => setSearchDropdown(!searchDropdown)}
            >
              <Search className="absolute left-3 top-2.5 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search or jump to"
                className="pl-10 pr-4 py-2 w-full outline-none"
              />
            </div>
            {searchDropdown && (
              <div className="absolute left-0 w-[600px] bg-white shadow-md rounded-lg mt-2 p-3">
                <p className="text-gray-500">Recent Searches</p>
                <ul className="text-sm">
                  <li className="hover:bg-gray-200 p-2 cursor-pointer">
                    Dashboard
                  </li>
                  <li className="hover:bg-gray-200 p-2 cursor-pointer">
                    Payments
                  </li>
                  <li className="hover:bg-gray-200 p-2 cursor-pointer">
                    Transactions
                  </li>
                </ul>
              </div>
            )}
          </div>

          {/* Move Money Button */}
          <div className="relative">
            <button
              onClick={() => setMoveMoneyDropdown(!moveMoneyDropdown)}
              className="flex items-center border hover:bg-gray-200 px-5 py-2 text-blue-600 font-semibold rounded-full"
            >
              Move Money <ChevronDown className="ml-1" />
            </button>
            {moveMoneyDropdown && (
              <div className="absolute right-0 mt-2 bg-white shadow-md rounded-lg w-40">
                <ul className="text-sm">
                  <li className="p-2 cursor-pointer hover:bg-gray-200">
                    Transfer
                  </li>
                  <li className="p-2 cursor-pointer hover:bg-gray-200">
                    Deposit
                  </li>
                  <li className="p-2 cursor-pointer hover:bg-gray-200">
                    Withdraw
                  </li>
                </ul>
              </div>
            )}
          </div>

          {/* Notifications & User */}

          <div className="flex items-center space-x-6 relative mr-52">
            <Bell className="cursor-pointer border bg-gray-200 rounded-full" />
            <div className="relative">
              <img
                src={assets.user_icon}
                alt="User Icon"
                className="w-7 cursor-pointer"
                onClick={() => setUserDropdown(!userDropdown)}
              />
              {userDropdown && (
                <div className="absolute right-0 mt-2 bg-white shadow-md rounded-lg w-40">
                  <ul className="text-sm">
                    <li className="p-2 cursor-pointer hover:bg-gray-200">
                      Profile
                    </li>
                    <li className="p-2 cursor-pointer hover:bg-gray-200">
                      Settings
                    </li>
                    <li
                      onClick={() => {
                        
                        logout();
                        props.setDemo(false)
                        toast.info("Logout Successfully")
                        navigate("/login")
                      }}
                      className="p-2 cursor-pointer hover:bg-gray-200 text-red-500"
                    >
                      Logout
                    </li>
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="p-6">
          <Routes>
            {props.demo === true ? (
              <Route path="/dashboard" element={<MainPage />} />
            ) : (
              <Route path="/login" element={<Login_Res />} />
            )}
            <Route path="/transaction" element={<MainTransaction />} />
            <Route path="/task" element={<Task />} />
            <Route path="/send-money" element={<SendMoney />} />
            <Route path="/bill" element = {<Bill />} />
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
