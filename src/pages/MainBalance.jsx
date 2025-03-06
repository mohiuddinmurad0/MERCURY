import React, { useContext, useState } from "react";
import {
  Frown,
  CircleCheck,
  LineChart,
  BarChart2,
  TrendingUp,
  TrendingDown,
  ChevronDown,
  Plus,
  Settings,
} from "lucide-react";
import { AllContext } from "../Context/AllContext";

const MainBalance = () => {
  const [isLineChart, setIsLineChart] = useState(false);
  const [timeRange, setTimeRange] = useState("Last 30 days");
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const timeOptions = ["Last 7 days", "Last 30 days", "Last 90 days"];

  const { currency } = useContext(AllContext)

  return (

    <div className="flex flex-col md:flex-row gap-6">
      {/* Mercury Balance Section */}

      <div className="p-6 rounded-2xl border w-[520px] shadow-sm bg-white">
        <div className="flex justify-between items-center">
          <h2 className="flex text-[15px] text-[#363644] font-normal items-center gap-2">
            Mercury balance <CircleCheck size={14} />
          </h2>

          <div className="flex border rounded-lg overflow-hidden">
            <button
              className={`p-2 h-8 flex items-center border-r ${
                !isLineChart ? "bg-gray-200" : "bg-white"
              }`}
              onClick={() => setIsLineChart(false)}
            >
              <BarChart2 size={16} className="text-[#363644]" />
            </button>
            <button
              className={`p-2 h-8 flex items-center rounded-e-lg ${
                isLineChart ? "bg-gray-200" : "bg-white"
              }`}
              onClick={() => setIsLineChart(true)}
            >
              <LineChart size={16} className="text-[#363644]" />
            </button>
          </div>
        </div>

        {isLineChart ? (
          <>
            <h1 className="text-[28px] text-[#1e1e2a] font-normal mt-2">
              {currency} 5,144,707<span className="text-[18px] align-super">.08</span>
            </h1>

            <div className="flex justify-between mt-4">
              <p className="text-[#363644] hover:underline text-[15px]">
                Total available
              </p>
              <h2 className="text-[15px] text-[#363644] font-normal">
              {currency} 5,144,707 <span className="text-[11px] align-super">.08</span>
              </h2>
            </div>

            <div className="text-sm mt-2 ml-4">
              <p className="flex justify-between">
                <span className="text-[#535461] text-[13px]">
                  Current checking and savings total
                </span>
                <span className="text-[#535461] text-[13px]">
                {currency} 4,944,707.08
                </span>
              </p>
              <p className="flex justify-between">
                <span className="text-[#535461] text-[13px]">
                  Pending outgoing
                </span>
                <span className="text-[#535461] text-[13px]">{currency} 0.00</span>
              </p>
              <p className="flex justify-between">
                <span className="text-[#535461] text-[13px]">Treasury</span>
                <span className="text-[#535461] text-[13px]">{currency} 200,000.00</span>
              </p>
            </div>

            <div className="mt-4 flex justify-between">
              <p className="text-[#363644] text-[15px] hover:underline">
                Pending internal transfers
              </p>
              <h2 className="text-[15px] text-[#363644] font-normal">{currency} 0<span className="align-super text-[10px]">.00</span></h2>
            </div>
            
            <div className="mt-12">
            <hr className="w-full h-full"/>
            <p className="text-[13px] text-[#535461] mt-3">Your Mercury balance is a bird’s eye view of available funds across all accounts, including internal transfers that are in flight.</p>
            </div>
            

          </>
        ) : (
          <>
            <h1 className="text-[28px] text-[#1e1e2a] font-normal mt-2">
            {currency} 5,144,707<span className="text-[18px] align-super">.08</span>
            </h1>

            <div className="flex justify-between mt-2 text-sm">
              {/* Time Range Dropdown */}

              <div className="relative">
                <button
                  className="text-[14px] text-gray-500 flex items-center px-1 py-1 rounded-full hover:bg-gray-200 "
                  onClick={() => setDropdownOpen(!dropdownOpen)}
                >
                  {timeRange} <ChevronDown size={14} className="ml-1" />
                </button>

                {dropdownOpen && (
                  <div className="absolute left-0 mt-1 w-36 bg-white border rounded-lg shadow-lg z-10">
                    {timeOptions.map((option) => (
                      <button
                        key={option}
                        className="w-full text-left px-4 py-2 text-[14px] hover:bg-gray-100"
                        onClick={() => {
                          setTimeRange(option);
                          setDropdownOpen(false);
                        }}
                      >
                        {option}
                      </button>
                    ))}
                  </div>
                )}
              </div>

              <div className="flex">
                <span className="flex items-center text-green-600">
                  <TrendingUp size={14} className="mr-1" /> $1.7M
                </span>
                <span className="flex items-center text-red-500">
                  <TrendingDown size={14} className="mr-1" /> -$412K
                </span>
              </div>
            </div>

            {/* Graph Placeholder */}
            <div className="mt-4 bg-gradient-to-t from-transparent to-blue-200 h-28 w-full relative">
              <svg
                viewBox="0 0 500 100"
                className="absolute bottom-3 left-0 w-full h-full"
              >
                <path
                  d="M 0 80 Q 50 50, 100 60 T 200 70 T 300 40 T 400 50 T 500 30"
                  fill="none"
                  stroke="#4A90E2"
                  strokeWidth="2"
                />
              </svg>
            </div>

            {/* Date Labels */}
            <div className="flex justify-between text-gray-400 text-xs mt-20">
              <span>Feb 7</span>
              <span>Feb 12</span>
              <span>Feb 17</span>
              <span>Feb 22</span>
              <span>Feb 27</span>
            </div>
          </>
        )}
      </div>





      {/* Accounts Section */}

      <div className="bg-white p-6 rounded-2xl border w-[520px]">
        <div className="flex justify-between">
          <h2 className="text-[#363644] text-[15px] ">Accounts</h2>

          <div className="flex gap-2">

            <span className="group relative border flex items-center justify-center px-2 py-2 bg-gray-100 rounded-full hover:bg-gray-200 cursor-pointer shadow">
              <Plus size={14} />
              <span className="absolute left-1/2 -translate-x-1/2 bottom-full mb-2 hidden group-hover:flex items-center justify-center bg-black text-white text-xs font-medium px-2 py-2 rounded-md whitespace-nowrap after:content-[''] after:absolute after:top-full after:left-1/2 after:-translate-x-1/2 after:border-4 after:border-transparent after:border-t-black">
                Create account
              </span>
            </span>

            <span className="flex items-center px-2 py-2 bg-gray-50 hover:bg-gray-200 rounded-full ">
              <Settings size={14} />
            </span>
          </div>
        </div>

        <div className="mt-4 space-y-3">
          {[
            { name: "Credit Card", amount: `${currency} 12,505.87`, logo: <Frown /> },
            { name: "Treasury", amount: `${currency} 200,000.00`, logo: <Frown /> },
            { name: "Ops / Payroll", amount: `${currency} 2,023,267.12`, logo: <Frown /> },
            { name: "AP", amount: `${currency} 226,767.82`, logo: <Frown /> },
            { name: "AR", amount: `${currency} 0.00`, logo: <Frown /> },
          ].map((account, index) => (
            <div key={index} className="flex justify-between hover:bg-gray-200 p-2">
              <p className="text-[#363644] text-[15px] flex gap-2">
                {account.logo}
                {account.name}
              </p>
              <p className="text-[13px] text-[#363644]">{account.amount}</p>
            </div>
          ))}
        </div>

        <div className="hover:bg-gray-100">
         <button className="mt-4 text-[15px] text-[#363644] flex items-center">
          <span className="border px-1.5 py-1 rounded-full bg-gray-200">+2</span>
          &nbsp;&nbsp;View all accounts
        </button>
        </div>
      </div>
    </div>
  );
};

export default MainBalance;
