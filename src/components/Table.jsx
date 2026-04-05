import { useState } from "react"
import { data } from "../data/mockdata"

const Table = ({role , darkMode}) => {
  const [search, setSearch] = useState("")
  const [filter, setFilter] = useState("all")
  const [transactions, setTransactions] = useState(data.transactions)
  const [showToast, setShowToast] = useState(false)

  const filteredTransactions = transactions
    .filter(t => filter === "all" || t.type === filter)
    .filter(t =>
      t.category.toLowerCase().includes(search.toLowerCase())
    )
    const deleteTransaction = (id) => {
    setTransactions(prev => prev.filter(t => t.id !== id))
    setShowToast(true)

    setTimeout(()=>{
      setShowToast(false)
    },2000)
  }

  return (
    <div className={`p-6 rounded-2xl mt-10 max-h-150 md:overflow-x-hidden overflow-x-scroll overflow-y-scroll ${darkMode ? "bg-[#030712] , scrollbar-dark " : "bg-white , scrollbar-light"} `}>
      
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-5">
        <h2 className={`text-xl font-semibold ${darkMode ?"text-white" : "text-black"}`}>Transactions</h2>

        <div className="flex flex-col gap-3 md:flex-row">
          {role === "Admin" && ( <button className={`cursor-pointer text-white px-4 py-2 rounded-lg ${darkMode?"bg-blue-600 ":"bg-blue-400"} hover:bg-blue-500 `}>
                                      <i className="ri-add-line"></i>
                                       Add Transaction
                                  </button>)}
          <input
            type="text"
            placeholder="Search category..."
            className={`px-3 py-2 rounded-lg outline-none ${darkMode?"bg-gray-800 , text-white":"bg-gray-500/30 , text-black"} `}
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />

          <select
            className={`px-3 py-2 outline-none rounded-lg ${darkMode?"bg-gray-800 , text-white":"bg-gray-500/30 , text-black"}`}
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
          >
            <option value="all">All</option>
            <option value="income">Income</option>
            <option value="expense">Expense</option>
          </select>
        </div>
      </div>
        <div className="overflow-x-auto" >
      <table className={`w-full text-left border-separate border-spacing-y-3 ${darkMode?"text-gray-400":"text-gray-600"}`}>
        <thead>
          <tr className={`border-b text-sm ${darkMode?"border-gray-700 , text-gray-400":"border-gray-500 , text-gray-600"}`}>
            <th className="py-3 px-2">Category</th>
            <th className="px-2" >Date</th>
            <th className="px-2" >Amount</th>
            <th className="px-2" >Type</th>
            {role === "Admin" && <th className="px-2" >Action</th>}
          </tr>
        </thead>

        <tbody>
          {filteredTransactions.map((t) => (
            <tr
              key={t.id}
              className={`border-b transition ${darkMode?"border-gray-700 , hover:bg-gray-900":"border-gray-500 , hover:bg-gray-400/30"} `}
              
            >
              <td className="py-3 flex items-center gap-3">
                <div className={`p-2 rounded-lg ${darkMode?"bg-gray-800":"bg-gray-200"} `} >
                  <i className={`${t.icon} ${darkMode ?"text-white" : "text-black"} `}></i>
                </div>
                {t.category}
              </td>

              <td className="py-3 px-2 whitespace-nowrap" >{t.date}</td>

              <td
                className={` px-2 font-semibold ${
                  t.type === "income"
                    ? "text-green-400"
                    : "text-red-400"
                }`}
              >
                ${t.amount.toLocaleString()}
              </td>

              <td className="capitalize px-2">{t.type}</td>
              {role === "Admin" && ( <td className="px-2">
                                      <button onClick={() =>{if (confirm("Delete this transaction?")){deleteTransaction(t.id)} } } className="text-red-400 cursor-pointer hover:text-red-300">
                                            Delete
                                      </button>
                </td>)}
            </tr>
          ))}
        </tbody>
      </table>
      </div>

            {showToast && (<div className="fixed bottom-5 right-5 bg-green-600 text-white px-4 py-2 rounded-lg shadow-lg transition">
                            Transaction deleted
                            </div>)}

      {filteredTransactions.length === 0 && (
        <p className="text-gray-500 mt-4">
          No transactions found
        </p>
      )}
    </div>
  )
}

export default Table