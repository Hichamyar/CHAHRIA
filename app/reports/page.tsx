import { BarChart3, PieChart, TrendingUp, Download } from "lucide-react"

export default function ReportsPage() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-3xl font-mistal">Financial Reports</h2>
        <button className="btn btn-secondary inline-flex items-center">
          <Download size={16} className="mr-1" /> Export Data
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="card">
          <div className="card-header">
            <h3 className="text-xl flex items-center font-mistal">
              <BarChart3 className="mr-2" /> Monthly Expenses
            </h3>
          </div>
          <div className="card-body">
            <div className="h-64 flex items-center justify-center bg-amber-50 rounded-md">
              <p className="text-amber-600">Monthly expense chart will be displayed here</p>
            </div>
          </div>
        </div>

        <div className="card">
          <div className="card-header">
            <h3 className="text-xl flex items-center font-mistal">
              <PieChart className="mr-2" /> Expense Distribution
            </h3>
          </div>
          <div className="card-body">
            <div className="h-64 flex items-center justify-center bg-amber-50 rounded-md">
              <p className="text-amber-600">Expense distribution chart will be displayed here</p>
            </div>
          </div>
        </div>
      </div>

      <div className="card">
        <div className="card-header">
          <h3 className="text-xl flex items-center font-mistal">
            <TrendingUp className="mr-2" /> Savings Trend
          </h3>
        </div>
        <div className="card-body">
          <div className="h-64 flex items-center justify-center bg-amber-50 rounded-md">
            <p className="text-amber-600">Savings trend chart will be displayed here</p>
          </div>
        </div>
      </div>

      <div className="card">
        <div className="card-header">
          <h3 className="text-xl font-mistal">Financial Summary</h3>
        </div>
        <div className="card-body">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-amber-50 p-4 rounded-md">
              <h4 className="font-medium mb-2">Income vs Expenses</h4>
              <p className="text-sm text-amber-700 mb-1">Total Income: $13,500.00</p>
              <p className="text-sm text-amber-700 mb-1">Total Expenses: $8,550.00</p>
              <p className="text-sm text-green-600 mb-1">Net Savings: $4,950.00</p>
            </div>

            <div className="bg-amber-50 p-4 rounded-md">
              <h4 className="font-medium mb-2">Top Expense Categories</h4>
              <p className="text-sm text-amber-700 mb-1">1. Housing: $3,600.00</p>
              <p className="text-sm text-amber-700 mb-1">2. Food: $1,350.00</p>
              <p className="text-sm text-amber-700 mb-1">3. Transportation: $950.00</p>
            </div>

            <div className="bg-amber-50 p-4 rounded-md">
              <h4 className="font-medium mb-2">Savings Rate</h4>
              <p className="text-sm text-amber-700 mb-1">Current Month: 36.7%</p>
              <p className="text-sm text-amber-700 mb-1">Previous Month: 32.5%</p>
              <p className="text-sm text-green-600 mb-1">Change: +4.2%</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
