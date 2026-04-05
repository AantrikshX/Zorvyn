import React , {useState} from 'react'
import logo from '../assets/zorvynlogolight.png'
import {data} from '../data/mockdata.js'
import me from '../assets/me.jpeg'
import DashboardCards from '../components/DashboardCards.jsx'
import  LineChart  from '../components/linechart.jsx'
import Piechart from '../components/piechartcomp.jsx'
import Table from "../components/Table.jsx"


const Dashboard = () => {
    const [showDropdown, setShowDropdown] = useState(false)
    const [role, setRole] = useState("Admin")
    const [darkMode, setDarkMode] = useState(true)
  return (
    <div className={`${darkMode ? "bg-[#030712]" : "bg-white"} w-full relative`}>
      <nav className='w-full flex items-center justify-between py-5 px-3 md:px-10 border-b border-gray-500/30' >
        <div><img src={logo}  alt="logo" className="h-8" /></div>
        <div className={`flex gap-2 p-1 rounded-lg ${darkMode ? "bg-[#101828]" : "bg-gray-200"}`} >
            <div className={`flex gap-2 rounded-lg ${darkMode ? "bg-[#030712]" : "bg-white"} `} >
                <img src={me} className='w-10 rounded-lg h-11' alt="Aantriksh" />
                <div className='flex items-center justify-center'>
                    <div className={`${darkMode ?"text-white" : "text-black"} hidden md:block`} ><p>{data.user.name}</p></div>
                    <button onClick={() => setShowDropdown(prev => !prev)} className='dropdown cursor-pointer' ><i className={`ri-arrow-drop-down-line ${darkMode ?"text-white" : "text-black"} inline-block text-2xl transform transition-transform duration-300 ${showDropdown?"rotate-180":""}`}></i></button>
                    {showDropdown && (<div className={`absolute right-10 top-20 ${darkMode ? "bg-[#030712]" : "bg-white"}  rounded-lg p-2 w-32 shadow-lg" `}>
                                        <p className={`${darkMode ?"text-white" : "text-black"}  px-2 py-1 hover:bg-gray-500/30 rounded cursor-pointer`}>
                                             Profile
                                        </p>
                                        <div className="border-t border-gray-500 mt-2 pt-2">
                                            <p className="text-gray-400 text-sm mb-1">Role</p>
                                            <button onClick={() =>setRole(prev => (prev === "Admin" ? "Viewer" : "Admin"))}
                                                    className="w-full flex justify-between items-center px-2 py-1 rounded hover:bg-gray-500/30">
                                                    <span className={`${darkMode ?"text-white" : "text-black"}`}>{role}</span>
                                                    <div className="w-10 h-5 bg-gray-500 rounded-full flex items-center px-1">
                                                        <div className={`w-4 h-4 bg-white rounded-full transition ${role === "Admin" ? "translate-x-5" : "translate-x-0"}`}></div>
                                                    </div>
                                            </button>
                                        </div>
                                    <p className={`${darkMode ?"text-white" : "text-black"} px-2 py-1 hover:bg-gray-500/30 rounded cursor-pointer `}> Logout</p>
                                    </div>
                        )}
                </div>  
            </div>
            <button  onClick={() => setDarkMode(prev => !prev)}
                     className={`py-2 px-3 cursor-pointer rounded-lg ${darkMode ? "bg-[#030712]" : "bg-white"} `}  >
                        <i className={`text-xl ${darkMode?"ri-moon-line text-white":"ri-sun-line text-yellow-500"}`}></i>
            </button>
            <button className={`py-2 px-3 cursor-pointer rounded-lg ${darkMode ? "bg-[#030712]" : "bg-white"} `} ><i className={`ri-notification-line ${darkMode ?"text-white" : "text-black"} text-xl`}></i></button>

        </div>
    </nav>
    <div className={`w-full min-h-screen p-6 md:p-10 ${darkMode ? "bg-[#101828]" : "bg-gray-200"} `} >
        <div>
            <h1 className={`${darkMode ?"text-white" : "text-black"} text-5xl tracking-tight `}>Hi, {data.user.name}! Welcome back.</h1>
            <p className={`mt-2 ${darkMode ?"text-gray-400" : "text-gray-600"}`} >Manage your money and gain insights into your spending patterns.</p>
        </div>
        <div className='CONTENT' >
        <div className=' CARDS mt-10'><DashboardCards darkMode={darkMode} /></div>
        <div className=' CHARTS md:-mt-10 mt-15 flex flex-wrap items-start gap-25 w-full' ><LineChart darkMode={darkMode} /> <Piechart darkMode={darkMode} /></div>
        <div className='TABLE mt-10 ' ><Table role={role} darkMode={darkMode} /></div>
        </div>
    </div>
    </div>
  )
}

export default Dashboard