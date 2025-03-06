import React from 'react'
import { Send, ArrowLeft, ArrowRightLeft, Plus, Receipt, FileText, Settings } from 'lucide-react';
import MainBalance from './MainBalance';
import TransactionsPage from './TransactionsPage';
import Task from './Task';
import { useNavigate } from 'react-router-dom';


const Home = () => {

  const navigate = useNavigate();
  

  return (

    <div>

      <div className='flex gap-10 items-center justify-start'>
        <h1 className='text-[19px]'>Welcome, Jane</h1>
      </div>

      <div className='flex gap-4 mt-8'>

     
        <button onClick={() => navigate("/send-money")} className='text-[15px] text-white bg-[#5266eb] border px-4 py-1.5 rounded-full flex gap-2 items-center'>
         <Send size={15}/>  Send
        </button>
        

        <button className='text-[15px] text-black bg-gray-100 hover:bg-gray-200 border px-4 py-1.5 rounded-full flex gap-2 items-center'>
          <ArrowLeft size={15}/> Request
        </button>


        <button className='text-[15px] text-black bg-gray-100 hover:bg-gray-200 border px-4 py-1.5 rounded-full flex gap-2 items-center'>
         <ArrowRightLeft size={15} /> Transfer
        </button>

        <button className='text-[15px] text-black bg-gray-100 hover:bg-gray-200 border px-4 py-1.5 rounded-full flex gap-2 items-center'>
         <Plus size={15}/> Deposit
        </button>

        <button className='text-[15px] text-black bg-gray-100 hover:bg-gray-200 border px-4 py-1.5 rounded-full flex gap-2 items-center'>
         <Receipt size={15}/> Pay Bill
        </button>

        <button className='text-[15px] text-black bg-gray-100 hover:bg-gray-200 border px-4 py-1.5 rounded-full flex gap-2 items-center'>
         <FileText size={15}/> Create Invoice
        </button>

        <div className='flex ml-40'>

          <button className='text-[15px] text-black hover:bg-gray-100  px-4 py-1.5 rounded-full flex gap-2 items-center'>
           <Settings size={15} /> Customize
          </button>

        </div>

      </div>

      <div className='flex md:flex-row gap-4 mt-8'>
        <MainBalance />
      </div>

      <div className='flex gap-4 mt-8'>
      <TransactionsPage />
      </div>


      </div>

  )
}

export default Home