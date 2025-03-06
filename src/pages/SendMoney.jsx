import { ChevronRight , ChevronLeft} from "lucide-react";

const SendMoney = () => {

  return (

    <div className="w-[1070px] bg-white rounded-lg">
    
    <div className="">
      <div className=" max-w-md mt-10">
        <h2 className="text-2xl font-semibold text-black mb-4">Transfer details</h2>

        {/* Amount Input */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-indigo-600">Form Account</label>
          <div className="relative mt-1">
            <input
              type="text"
              className="pl-3 w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-indigo-300"
              placeholder="form-mail@gmail.com"
            />
          </div>
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-indigo-600">To Account</label>
          <div className="relative mt-1">
            <input
              type="text"
              className="pl-3 w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-indigo-300"
              placeholder="to-email@gmail.com"
            />
          </div>
        </div>

        {/* Transfer To */}
           <div className="mb-4">
          <label className="block text-sm font-medium text-indigo-600">Amount</label>
          <div className="relative mt-1">
            <span className="absolute inset-y-0 left-3 flex items-center text-gray-600">$</span>
            <input
              type="text"
              className="pl-6 w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-indigo-300"
              placeholder="0.00"
            />
          </div>
        </div>

        {/* Buttons */}
        <div className="flex justify-between">
          
          <button className="px-4 py-2 bg-gray-200 hover:bg-gray-300 text-gray-700 rounded-full flex items-center gap-2"><ChevronLeft size={15} /> Back</button>
          
          <button className="px-4 py-2 bg-[#5266EB] text-white rounded-full hover:bg-[#465BD1] flex items-center gap-2">
            Next <ChevronRight  size={14}/>
          </button>
        </div>
      </div>
    </div>

    </div>
  )
}

export default SendMoney