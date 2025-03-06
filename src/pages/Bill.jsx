import React from 'react'

const Bill = () => {

  return (

    <div>

      <div className='flex gap-10 items-center justify-start'>
        
        <h1 className='text-[28px]'>Bill Pay</h1>

        <button className='text-[15px] border bg-gray-200 px-4 py-1 rounded-full'>Add Bill</button>

        <button className='text-[12px] border bg-green-50 px-3 h-5'>Feedback</button>

      </div>

      <div className='flex gap-8'>

        <div className='mt-8 p-10 rounded-lg border w-[330px] '>
          <h3>6</h3>
          <p>Total outstanding</p>
          <p>18,149.18</p>
        </div>

        <div className='mt-8 p-10 rounded-lg border w-[330px] '>
          <h3>6</h3>
          <p>Total outstanding</p>
          <p>18,149.18</p>
        </div>

        <div className='mt-8 p-10 rounded-lg border w-[330px] '>
          <h3 className=''>6</h3>
          <p>Total outstanding</p>
          <p>18,149.18</p>
        </div>
      </div>
        
    </div>
  )
}

export default Bill