import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer
} from "recharts"

import { chartData } from "../data/mockdata.js"

const Linechart = ({darkMode}) => {
  return (
    <div className={`p-6 rounded-2xl max-w-225 w-full ${darkMode ? "bg-[#030712]" : "bg-white"} `}>
      <h2 className={`text-xl mb-4 ${darkMode ?"text-white" : "text-black"}`}>
        Monthly Income vs Expense
      </h2>

      <ResponsiveContainer width="100%" height={350}>
        <LineChart data={chartData}>
          <CartesianGrid stroke={darkMode ? "#374151" : "#e5e7eb"} strokeDasharray="3 3" />

          <XAxis dataKey="month" stroke={darkMode ? "#9ca3af" : "#374151"} />
          <YAxis stroke={darkMode ? "#9ca3af" : "#374151"} />

          <Tooltip contentStyle={{ backgroundColor: darkMode ? "#030712" : "#ffffff", border: "none", borderRadius: "8px", color: darkMode ? "#fff" : "#000"}}
/>

          <Line
            type="monotone"
            dataKey="income"
            stroke="#22c55e"
            strokeWidth={3}
            dot={{ r: 4 }}
          />

          <Line
            type="monotone"
            dataKey="expense"
            stroke="#ef4444"
            strokeWidth={3}
            dot={{ r: 4 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}

export default Linechart