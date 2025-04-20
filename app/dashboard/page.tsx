import { DollarSign, TrendingUp, TrendingDown, PieChart } from "lucide-react"

export default function DashboardPage() {
  return (
    <div className="space-y-6">
      <h2 className="text-3xl mb-6 font-mistal">Financial Dashboard</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="card bg-green-50 border-green-200">
          <div className="card-body flex items-center">
            <div className="rounded-full bg-green-100 p-3 mr-4">
              <DollarSign size={24} className="text-green-600" />
            </div>
            <div>
              <p className="text-sm text-green-600">Monthly Income</p>
              <h3 className="text-2xl font-bold">$4,500.00</h3>
            </div>
          </div>
        </div>

        <div className="card bg-red-50 border-red-200">
          <div className="card-body flex items-center">
            <div className="rounded-full bg-red-100 p-3 mr-4">
              <TrendingDown size={24} className="text-red-600" />
            </div>
            <div>
              <p className="text-sm text-red-600">Monthly Expenses</p>
              <h3 className="text-2xl font-bold">$2,850.00</h3>
            </div>
          </div>
        </div>

        <div className="card bg-blue-50 border-blue-200">
          <div className="card-body flex items-center">
            <div className="rounded-full bg-blue-100 p-3 mr-4">
              <TrendingUp size={24} className="text-blue-600" />
            </div>
            <div>
              <p className="text-sm text-blue-600">Monthly Savings</p>
              <h3 className="text-2xl font-bold">$1,650.00</h3>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="card">
          <div className="card-header">
            <h3 className="text-xl flex items-center font-mistal">
              <PieChart className="mr-2" /> Expense Breakdown
            </h3>
          </div>
          <div className="card-body">
            <div className="h-64 flex items-center justify-center bg-amber-50 rounded-md">
              <p className="text-amber-600">Expense chart will be displayed here</p>
            </div>
          </div>
        </div>

        <div className="card">
          <div className="card-header">
            <h3 className="text-xl font-mistal">Recent Transactions</h3>
          </div>
          <div className="card-body p-0">
            <div className="divide-y divide-amber-200">
              <div className="p-4 flex justify-between">
                <div>
                  <p className="font-medium">Grocery Shopping</p>
                  <p className="text-sm text-amber-700">Food</p>
                </div>
                <div className="text-right">
                  <p className="font-medium text-red-600">-$85.20</p>
                  <p className="text-sm text-amber-700">Today</p>
                </div>
              </div>
              <div className="p-4 flex justify-between">
                <div>
                  <p className="font-medium">Salary Deposit</p>
                  <p className="text-sm text-amber-700">Income</p>
                </div>
                <div className="text-right">
                  <p className="font-medium text-green-600">+$2,250.00</p>
                  <p className="text-sm text-amber-700">Yesterday</p>
                </div>
              </div>
              <div className="p-4 flex justify-between">
                <div>
                  <p className="font-medium">Electricity Bill</p>
                  <p className="text-sm text-amber-700">Utilities</p>
                </div>
                <div className="text-right">
                  <p className="font-medium text-red-600">-$94.50</p>
                  <p className="text-sm text-amber-700">2 days ago</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
