export default function DashboardPage() {
  return (
    <div className="space-y-6">
      <h2 className="text-3xl mb-6">Financial Dashboard</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="card bg-green-50 border-green-200">
          <div className="card-body">
            <h3 className="text-lg font-medium text-green-800">Monthly Income</h3>
            <p className="text-2xl font-bold">$4,500.00</p>
          </div>
        </div>

        <div className="card bg-red-50 border-red-200">
          <div className="card-body">
            <h3 className="text-lg font-medium text-red-800">Monthly Expenses</h3>
            <p className="text-2xl font-bold">$2,850.00</p>
          </div>
        </div>

        <div className="card bg-blue-50 border-blue-200">
          <div className="card-body">
            <h3 className="text-lg font-medium text-blue-800">Monthly Savings</h3>
            <p className="text-2xl font-bold">$1,650.00</p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="card">
          <div className="card-header">
            <h3 className="text-xl">Expense Breakdown</h3>
          </div>
          <div className="card-body">
            <div className="h-64 flex items-center justify-center bg-amber-50 rounded-md">
              <p className="text-amber-700">Expense chart will be displayed here</p>
            </div>
          </div>
        </div>

        <div className="card">
          <div className="card-header">
            <h3 className="text-xl">Recent Transactions</h3>
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
