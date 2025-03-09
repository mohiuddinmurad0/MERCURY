import React, { useContext } from "react";
import { ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import { AllContext } from "../Context/AllContext";

const TransactionsPage = () => {

  const { currency, userTransactions } = useContext(AllContext);

  return (
    <div className="p-6 bg-white rounded-lg lg:w-[85%] md:w-[50%] flex flex-col">
      

      <div className="flex justify-between items-center border-b pb-3 mb-4">
        <h2 className="text-[#1e1e2a] text-xl font-semibold">Recent Transactions</h2>
        <Link to="/transaction" className="flex items-center text-blue-600 hover:underline">
          View All <ChevronRight size={16} className="ml-1" />
        </Link>
      </div>


      <div className="overflow-x-auto">
        <table className="w-full text-left">
         
          <thead>
            <tr className="text-gray-700 text-sm">
              <th className="p-3 text-left">Date</th>
              <th className="p-3 text-left">To Email</th>
              <th className="p-3 text-left">Amount</th>
              <th className="p-3 text-left">Description</th>
              <th className="p-3 text-left">Status</th>
            </tr>
          </thead>

          <tbody>
            {[...userTransactions]
              .sort((a, b) => new Date(b.created_at) - new Date(a.created_at))
              .slice(0, 5)
              .map((txn) => (
                <tr key={txn.id} className="text-gray-800 hover:bg-gray-50 transition">
                
                  <td className="p-3 border-b">
                    {new Intl.DateTimeFormat("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                      hour: "2-digit",
                      minute: "2-digit",
                    }).format(new Date(txn.created_at))}
                  </td>

                
                  <td className="p-3  border-b">
                      {txn.from_email === "Credit"
                        ? txn.from_email
                        : txn.to_email}
                    </td>
                
                  <td className={`p-3 border-b font-medium ${txn.type === "debit" ? "text-red-600" : "text-green-600"}`}>
                    {txn.type === "debit" ? `- ${currency}${txn.amount}` : `+ ${currency}${txn.amount}`}
                  </td>

                  
                  <td className="p-3 border-b">{txn.description || "N/A"}</td>

                 
                  <td className="p-3 border-b">
                    {txn.status === "failed" ? (
                      <span className="text-red-500 text-xs bg-red-100 px-2 py-1 rounded">Failed</span>
                    ) : (
                      <span className="text-green-500 text-xs bg-green-100 px-2 py-1 rounded">Success</span>
                    )}
                  </td>
                </tr>

              ))}
          </tbody>

        </table>
      </div>
    </div>
  );
};

export default TransactionsPage;
