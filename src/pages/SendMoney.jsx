import { ChevronRight, ChevronLeft } from "lucide-react";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AllContext } from "../Context/AllContext";
import { toast } from "react-toastify";
import axios from "axios";

const SendMoney = () => {

  const navigate = useNavigate();

  const { userData, backendUrl, token } = useContext(AllContext);

  const [fromCustomerEmail, setFromCustomerEmail] = useState("");
  const [toCustomerEmail, setToCustomerEmail] = useState("");
  const [amount, setAmount] = useState("");

  const onSubmitHandler = async (e) => {

    e.preventDefault();

    if (!fromCustomerEmail || !toCustomerEmail || !amount) {
      toast.error("All fields are required!");
      return;
    }

    if (toCustomerEmail === fromCustomerEmail) {
      toast.error("You cannot send money to yourself.");
      return;
    }

    if (isNaN(amount) || parseFloat(amount) <= 0) {
      toast.error("Invalid amount. Enter a valid number.");
      return;
    }

    try {
      const headers = {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      };

      const payload = {
        from_customer_email: fromCustomerEmail,
        to_customer_email: toCustomerEmail,
        amount: parseFloat(amount),
      };

      console.log("Sending data:", payload);

      const response = await axios.post(`${backendUrl}/api/customer/send-money`, payload, { headers });

      console.log("API Response:", response.data);

      if (response.data.type === "success") {
        toast.success(response.data.message || "Transaction successful!");

        setToCustomerEmail("");
        setAmount("");
        navigate("/dashboard");
      } else {
        toast.error(response.data.message || "Transaction failed. Please try again.");
      }
    } catch (error) {
      console.error("API Error:", error.response?.data);
      toast.error(
        error.response?.data?.message || "Receiver account might be inactive or does not exist."
      );
    }
  };

  return (
    
    <div className="w-[1070px] bg-white rounded-lg">
      <form onSubmit={onSubmitHandler} className="max-w-md mt-10">
        <h2 className="text-2xl font-semibold text-black mb-4">
          Transfer Details
        </h2>

        {/* From Account */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-indigo-600">From Account</label>
          <input
            onChange={(e) => setFromCustomerEmail(e.target.value)}
            value={fromCustomerEmail}
            type="email"
            required
            placeholder={userData?.email}
            className="pl-3 w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-indigo-300"
          />
        </div>

        {/* To Account */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-indigo-600">To Account</label>
          <input
            onChange={(e) => setToCustomerEmail(e.target.value)}
            value={toCustomerEmail}
            type="email"
            required
            placeholder="Receiver's email"
            className="pl-3 w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-indigo-300"
          />
        </div>

        {/* Amount */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-indigo-600">Amount</label>
          <div className="relative mt-1">
            <span className="absolute inset-y-0 left-3 flex items-center text-gray-600">$</span>
            <input
              onChange={(e) => setAmount(e.target.value)}
              value={amount}
              type="number"
              required
              className="pl-6 w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-indigo-300"
              placeholder="0.00"
            />
          </div>
        </div>

        {/* Buttons */}
        <div className="flex justify-between">
          <button
            onClick={() => navigate("/dashboard")}
            type="button"
            className="px-4 py-2 bg-gray-200 hover:bg-gray-300 text-gray-700 rounded-full flex items-center gap-2"
          >
            <ChevronLeft size={15} /> Back
          </button>

          <button
            type="submit"
            className="px-4 py-2 bg-[#5266EB] text-white rounded-full hover:bg-[#465BD1] flex items-center gap-2"
          >
            Send <ChevronRight size={14} />
          </button>
        </div>
      </form>
    </div>
  );
};

export default SendMoney;
