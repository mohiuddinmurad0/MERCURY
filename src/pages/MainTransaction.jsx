import React, { useContext } from "react";
import { ChevronDown , Filter , Download, FileText} from "lucide-react";
import { AllContext } from "../Context/AllContext";



const MainTransaction = () => {

  const { currency , userTransactions } = useContext(AllContext)

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
      
      <div className="bg-white rounded-lg overflow-x-auto">
        <table className="w-full border-collapse">

          <thead>
            <tr className="text-gray-700 text-sm border-b">
              <th className="p-3 text-left">Date</th>
         
              <th className="p-3 text-left">To Email</th>
              <th className="p-4 text-left">Amount</th>
              <th className="p-3 text-left">Description</th>
              <th className="p-3 text-left">Status</th>
            </tr>
          </thead>

          <tbody>
            {[...userTransactions]
              .sort((a, b) => new Date(b.created_at) - new Date(a.created_at))
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

                
              

                  <td className="p-3 border-b">
                  {txn?.to_email}
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

export default MainTransaction;
