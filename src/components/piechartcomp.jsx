import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from "recharts"
import { data } from "../data/mockdata"



const PieChartcomp = ({darkMode}) => {

  const expenses = data.transactions.filter(t => t.type === "expense")

  const categoryTotals = {}

  expenses.forEach(t => {
    categoryTotals[t.category] =
      (categoryTotals[t.category] || 0) + t.amount
  })
  
  const highestCategory = Object.keys(categoryTotals).reduce((a, b) =>
  categoryTotals[a] > categoryTotals[b] ? a : b)

  const chartData = Object.keys(categoryTotals).map(key => ({
    name: key,
    value: categoryTotals[key]
  }))

  const values = chartData.map(item => item.value)

const min = Math.min(...values)
const max = Math.max(...values)

const getColor = (value) => {
  const ratio = (value - min) / (max - min || 1)

  const r = Math.round(59 + (34 - 59) * ratio)   
  const g = Math.round(130 + (197 - 130) * ratio) 
  const b = Math.round(246 + (94 - 246) * ratio) 

  return `rgb(${r}, ${g}, ${b})`
}

  return (
    <div className={`py-10 w-100 rounded-2xl md:mt-20 ${darkMode ? "bg-[#030712]" : "bg-white"}`}>

        <div className="flex w-full items-center justify-center" ><h2 className={`${darkMode ?"text-white" : "text-black"}`}>Spending by Category</h2></div>

      <ResponsiveContainer width="100%" height={220}>
        <PieChart>
          <Pie
            data={chartData}
            dataKey="value"
            nameKey="name"
            outerRadius={80}
          >
            {chartData.map((entry, index) => (
              <Cell key={index} fill={getColor(entry.value)} />
            ))}
          </Pie>

          <Tooltip contentStyle={{ backgroundColor: darkMode ? "#030712" : "#ffffff", border: "none", borderRadius: "8px", color: darkMode ? "#fff" : "#000" }}
/>
        </PieChart>
        
      </ResponsiveContainer>
        <div className="INSIGHT w-full px-5 text-center " > 
        <p className={`${darkMode ?"text-gray-400" : "text-gray-600"}`}>
            Your highest spending category this month is{" "}
            <span  style={{ color: getColor(chartData.find(item => item.name === highestCategory)?.value)}} className=" font-semibold">{highestCategory}</span>.
        </p>
        </div>
    </div>
  )
}

export default PieChartcomp