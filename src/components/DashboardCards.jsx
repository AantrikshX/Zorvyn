import React from 'react'
import {data} from '../data/mockdata.js'
import USD from "../assets/USD.png"

const DashboardCards = ({darkMode}) => {
  return (
    <div className='flex flex-wrap justify-between items-start ' >
    <div className='flex flex-wrap gap-5' >
      <div className={`INCOME  p-7 w-full  flex flex-col gap-6 md:w-100 rounded-2xl ${darkMode ? "bg-[#030712]" : "bg-white"} `} >
        <div className='flex gap-3 items-center' >
          <div className='px-3 py-2 rounded-xl bg-green-500/30' ><i className="ri-arrow-right-up-long-line text-green-500 text-xl"></i></div>
          <h1 className={`text-xl font-semibold ${darkMode ?"text-gray-400" : "text-gray-600"}`} >Monthly Income</h1>
        </div>
        <div className='flex flex-col gap-2' >
          <h1 className={`text-4xl font-semibold ${darkMode ?"text-white" : "text-black"}`} > ${data.summary.income.toLocaleString()}</h1>
          <div className='flex gap-2' ><p className={`${darkMode ?"text-gray-400" : "text-gray-600"}`} >You made an extra</p> <p className={`font-semibold ${darkMode ?"text-green-400" : "text-green-500"}`} >$452</p> <p className={`${darkMode ?"text-gray-400" : "text-gray-600"}`} >this month</p></div>
        </div>
      </div>

      <div  className={`EXPENSE p-7 w-full  flex flex-col gap-6  md:w-100 rounded-2xl ${darkMode ? "bg-[#030712]" : "bg-white"} `} >
        <div className='flex gap-3 items-center' >
          <div className='px-3 py-2 rounded-xl bg-red-500/30' ><i className="ri-arrow-right-down-long-line text-red-500 text-xl"></i></div>
          <h1 className={`text-xl font-semibold ${darkMode ?"text-gray-400" : "text-gray-600"}`}>Monthly Expense</h1>
        </div>
        <div className='flex flex-col gap-2' >
          <h1 className={`text-4xl font-semibold ${darkMode ?"text-white" : "text-black"}`} > ${data.summary.expense.toLocaleString()}</h1>
          <div className='flex gap-2' ><p className={`${darkMode ?"text-gray-400" : "text-gray-600"}`} >You overspent by</p> <p className={`font-semibold ${darkMode ?"text-red-400" : "text-red-500"}`} >$800</p> <p className={`${darkMode ?"text-gray-400" : "text-gray-600"}`} >this month</p></div>
        </div>
      </div>
    </div>
    <div className='md:w-110 w-full md:mt-0 mt-10 py-7 pl-5 bg-linear-to-br from-blue-500 to-green-500 rounded-2xl' >
      <div className='flex flex-col gap-10' >
      <div className='flex justify-between items-start' >
        <h1 className='text-white text-xl' >Total Balance</h1>
        <div className='flex justify-center items-center gap-2 pr-10' >
          <img src={USD} className='w-5 h-5' alt="" />
          <h1 className='text-white' >USD</h1>
          <button className='rounded-xl cursor-pointer flex justify-center items-center w-4 h-4 border border-gray-300' ><i className="ri-arrow-drop-down-line text-white"></i></button>
          </div>
      </div>
      <div className='flex flex-col items-start gap-2' >
        <div className=' walleticon flex gap-2 items-center justify-center' >
              <div className='py-1 px-2 rounded bg-gray-400/60' > <i className="ri-wallet-3-line text-white"></i> </div>
              <h1 className='text-white/70' >Available to use</h1>
        </div>
        <div className='flex flex-col items-start gap-5' >
          <h1 className='text-white text-5xl font-semibold' >${data.summary.balance.toLocaleString()}</h1>
          <div className='w-full flex gap-5' >
          <button className='md:px-14 px-7 min-w-0 flex-1 cursor-pointer py-1 bg-white rounded-xl flex items-center justify-center text-center gap-2' ><h1 className='' >Send</h1><i className="ri-arrow-right-up-long-line text-xl"></i></button>
          <button className='md:px-14 px-7 min-w-0 flex-1 cursor-pointer py-1 bg-white rounded-xl flex items-center justify-center text-center gap-2' ><h1 className='' >Receive</h1><i className="ri-arrow-left-down-long-line text-xl"></i></button>         
          </div>
          </div>
        
      </div>
      </div>
    </div>
    </div>
  )
}

export default DashboardCards
