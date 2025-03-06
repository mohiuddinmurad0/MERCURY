import React, { useContext } from "react";
import { ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import { AllContext } from "../Context/AllContext";



const TransactionsPage = () => {

  const {currency} = useContext(AllContext)

  const transactions = [
    { date: "Mar 4", from: "Payment from Acme Corp", amount: `+${currency}200.00`, account: "AR", method: "Request or Invoice Pay...", status: "success" },
    { date: "Mar 4", from: "Payment from NASA", amount: `+${currency}419.00`, account: "AR", method: "Request or Invoice Pay...", status: "failed" },
    { date: "Mar 4", from: "Mercury Working Capital", amount: `-${currency}2,200.00`, account: "Ops / Payroll", method: "Working Capital Loan..." },
    { date: "Mar 4", from: "Lily's Eatery", amount: `+${currency}0.93`, account: "Ops / Payroll", method: "Jane B. ••1234" },
    { date: "Mar 4", from: "From AR", amount: `+${currency}54,810.16`, account: "Ops / Payroll", method: "Transfer" },
    { date: "Mar 4", from: "To Ops / Payroll", amount: `-${currency}54,810.16`, account: "AR", method: "Transfer" },
  ];

  return (

    <div className="p-6 bg-white rounded-lg shadow-md lg:w-[85%] md:w-[50%] flex flex-col">
    
      <div className="flex justify-between items-center border-b pb-3 mb-4">
        <h2 className="text-[#1e1e2a] text-xl font-semibold">Recent Transactions</h2>
        <Link to="/transaction" className="flex items-center text-blue-600 hover:underline">
          View All <ChevronRight size={16} className="ml-1" />
        </Link>
      </div>


      <div className="overflow-x-auto">
        <table className="w-full border-collapse border text-left">
          {/* Table Head */}
          <thead>
            <tr className="bg-gray-100 text-gray-700 text-sm">
              <th className="p-3 border">Date</th>
              <th className="p-3 border">To/From</th>
              <th className="p-3 border">Amount</th>
              <th className="p-3 border">Account</th>
              <th className="p-3 border">Payment Method</th>
            </tr>
          </thead>

          
          <tbody>
            {transactions.map((txn, index) => (
              <tr key={index} className="text-gray-800 hover:bg-gray-50 transition">
                <td className="p-3 border">{txn.date}</td>
                <td className="p-3 border flex items-center gap-2">
                  <div className="w-6 h-6 bg-gray-200 rounded-full flex items-center justify-center text-xs font-bold text-gray-700">
                    {txn.from.charAt(0)}
                  </div>
                  {txn.from}
                  {txn.status === "failed" && (
                    <span className="ml-2 text-red-500 text-xs bg-red-100 px-2 py-1 rounded">Failed</span>
                  )}
                </td>
                <td className={`p-3 border font-medium ${txn.amount.startsWith("+") ? "text-green-600" : "text-red-600"}`}>
                  {txn.amount}
                </td>
                <td className="p-3 border">{txn.account}</td>
                <td className="p-3 border text-gray-500 text-sm">{txn.method}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TransactionsPage;
