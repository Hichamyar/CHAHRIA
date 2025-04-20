export default function BudgetPage() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-3xl">Budget</h2>
        <a href="/budget/add" className="btn btn-primary">
          Add Budget
        </a>
      </div>

      <div className="card">
        <div className="card-header">
          <h3 className="text-xl">Monthly Budget Overview</h3>
        </div>
        <div className="card-body">
          <div className="flex flex-col md:flex-row justify-between mb-6">
            <div>
              <p className="text-sm text-amber-700">Total Budget</p>
              <p className="text-2xl font-bold">$3,500.00</p>
            </div>
            <div>
              <p className="text-sm text-amber-700">Spent So Far</p>
              <p className="text-2xl font-bold">$2,145.00</p>
            </div>
            <div>
              <p className="text-sm text-amber-700">Remaining</p>
              <p className="text-2xl font-bold text-green-600">$1,355.00</p>
            </div>
            <div>
              <p className="text-sm text-amber-700">Budget Health</p>
              <p className="text-2xl font-bold text-green-600">Good</p>
            </div>
          </div>

          <div className="w-full bg-amber-200 rounded-full h-4 mb-6">
            <div className="bg-amber-600 h-4 rounded-full" style={{ width: "61%" }}></div>
          </div>

          <p className="text-center text-sm text-amber-700">61% of budget used</p>
        </div>
      </div>

      <div className="card">
        <div className="card-header">
          <h3 className="text-xl">Budget Categories</h3>
        </div>
        <div className="card-body p-0">
          <div className="divide-y divide-amber-200">
            <div className="p-4">
              <div className="flex justify-between mb-2">
                <div>
                  <span className="inline-block w-3 h-3 rounded-full bg-blue-500 mr-2"></span>
                  <span className="font-medium">Housing</span>
                </div>
                <div className="text-right">
                  <span className="text-amber-700">$1,200 / $1,200</span>
                </div>
              </div>
              <div className="w-full bg-amber-200 rounded-full h-2">
                <div className="bg-blue-500 h-2 rounded-full" style={{ width: "100%" }}></div>
              </div>
            </div>

            <div className="p-4">
              <div className="flex justify-between mb-2">
                <div>
                  <span className="inline-block w-3 h-3 rounded-full bg-green-500 mr-2"></span>
                  <span className="font-medium">Food</span>
                </div>
                <div className="text-right">
                  <span className="text-amber-700">$450 / $600</span>
                </div>
              </div>
              <div className="w-full bg-amber-200 rounded-full h-2">
                <div className="bg-green-500 h-2 rounded-full" style={{ width: "75%" }}></div>
              </div>
            </div>

            <div className="p-4">
              <div className="flex justify-between mb-2">
                <div>
                  <span className="inline-block w-3 h-3 rounded-full bg-purple-500 mr-2"></span>
                  <span className="font-medium">Transportation</span>
                </div>
                <div className="text-right">
                  <span className="text-amber-700">$200 / $300</span>
                </div>
              </div>
              <div className="w-full bg-amber-200 rounded-full h-2">
                <div className="bg-purple-500 h-2 rounded-full" style={{ width: "67%" }}></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
