import React, { useContext } from "react";
import { ChevronDown , Filter , Download, FileText} from "lucide-react";
import { AllContext } from "../Context/AllContext";

const transactions = [
  { date: "Mar 4", name: "Payment from Acme Corp", amount: 200.0, account: "AR", status: "Success", method: "Request or Invoice" },
  { date: "Mar 4", name: "Payment from NASA", amount: 419.0, account: "AR", status: "Failed", method: "Request or Invoice" },
  { date: "Mar 4", name: "Mercury Working Capital", amount: -2200.0, account: "Ops / Payroll", method: "Working Capital" },
  { date: "Mar 4", name: "Lily's Eatery", amount: 0.93, account: "Ops / Payroll", method: "Jane B. ••1234" },
  { date: "Mar 4", name: "From AR", amount: 54810.16, account: "Ops / Payroll", method: "Transfer" },
  { date: "Mar 4", name: "To Ops / Payroll", amount: -54810.16, account: "AR", method: "Transfer" },
  { date: "Mar 4", name: "Mercury Working Capital", amount: -2200.0, account: "Ops / Payroll", method: "Working Capital" },
  { date: "Mar 4", name: "Lily's Eatery", amount: 0.93, account: "Ops / Payroll", method: "Jane B. ••1234" },
  { date: "Mar 4", name: "From AR", amount: 54810.16, account: "Ops / Payroll", method: "Transfer" },
  { date: "Mar 4", name: "To Ops / Payroll", amount: -54810.16, account: "AR", method: "Transfer" },
  { date: "Mar 4", name: "Mercury Working Capital", amount: -2200.0, account: "Ops / Payroll", method: "Working Capital" },
  { date: "Mar 4", name: "Lily's Eatery", amount: 0.93, account: "Ops / Payroll", method: "Jane B. ••1234" },
  { date: "Mar 4", name: "From AR", amount: 54810.16, account: "Ops / Payroll", method: "Transfer" },
  { date: "Mar 4", name: "To Ops / Payroll", amount: -54810.16, account: "AR", method: "Transfer" },
  { date: "Mar 4", name: "Mercury Working Capital", amount: -2200.0, account: "Ops / Payroll", method: "Working Capital" },
  { date: "Mar 4", name: "Lily's Eatery", amount: 0.93, account: "Ops / Payroll", method: "Jane B. ••1234" },
  { date: "Mar 4", name: "From AR", amount: 54810.16, account: "Ops / Payroll", method: "Transfer" },
  { date: "Mar 4", name: "To Ops / Payroll", amount: -54810.16, account: "AR", method: "Transfer" },
];

const MainTransaction = () => {

  const { currency } = useContext(AllContext)

  return (


    <div className="p-6 min-h-screen w-[1070px]">
      <div className="items-center mb-4">

       <div className="flex justify-between">
         <h2 className="text-2xl font-semibold mb-4">Transactions</h2>
          <div className="flex gap-3 py-3">
          <button className='text-[15px] bg-gray-200 text-[#363644] border px-3 py-0.5 rounded-full flex gap-2 items-center'>
         <FileText size={13}/>  Match Receipts
        </button>

        <button className='text-[15px] bg-gray-200 text-[#363644] border px-3 py-0.5 rounded-full flex gap-2 items-center'>
         <Download size={13}/>  Export All
        </button>
          </div>
        </div>

        
        <div className="flex justify-between">
        
        <div className="flex gap-3 py-3">

        <button className='text-[15px] bg-gray-200 text-[#363644] border px-3 py-0.5 rounded-full flex gap-2 items-center'>
         <Filter size={13}/>  Filters
        </button>
        
        <button className='text-[15px] hover:bg-gray-200 text-[#363644] border px-3 py-0.5 rounded-lg flex gap-2 items-center'>
           Date <ChevronDown size={13}/>
        </button>

        <button className='text-[15px] hover:bg-gray-200 text-[#363644] border px-3 py-0.5 rounded-lg flex gap-2 items-center'>
        Keywords
         <ChevronDown size={13}/>
        </button>

        <button className='text-[15px] hover:bg-gray-200 text-[#363644] border px-3 py-0.5 rounded-lg flex gap-2 items-center'>
        Amount
        <ChevronDown size={13}/>
        </button>

        </div>

        </div>

      </div>
      
      <div className="bg-white p-4">
        <div className="flex font-semibold border-b pb-2 mb-2">
          <span className="w-1/4">Date</span>
          <span className="w-1/4">To/From</span>
          <span className="w-1/4">Amount</span>
          <span className="w-1/4">Account</span>
        </div>
        {transactions.map((transaction, index) => (
          <div key={index} className="flex items-center py-2 border-b">
            <span className="w-1/4 text-gray-600">{transaction.date}</span>
            <span className="w-1/4">{transaction.name}</span>
            <span
              className={`w-1/4 font-medium ${transaction.amount < 0 ? "text-red-500" : "text-green-500"}`}
            >
              {transaction.amount < 0 ? "-" : ""}{currency}{Math.abs(transaction.amount).toFixed(2)}
            </span>
            <span className="w-1/4 text-gray-600">{transaction.account}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MainTransaction;
