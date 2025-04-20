import { Plus, Filter, Search } from "lucide-react"
import Link from "next/link"

export default function ExpensesPage() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-3xl font-mistal">Expenses</h2>
        <Link href="/expenses/add" className="btn btn-primary inline-flex items-center">
          <Plus size={16} className="mr-1" /> Add Expense
        </Link>
      </div>

      <div className="card">
        <div className="card-header">
          <h3 className="text-xl font-mistal">Filter Expenses</h3>
        </div>
        <div className="card-body">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-2.5 text-amber-500" size={16} />
                <input type="text" placeholder="Search expenses..." className="input pl-9 w-full" />
              </div>
            </div>
            <div className="w-full md:w-48">
              <select className="input w-full">
                <option value="">All Categories</option>
                <option value="food">Food</option>
                <option value="housing">Housing</option>
                <option value="transportation">Transportation</option>
                <option value="utilities">Utilities</option>
                <option value="entertainment">Entertainment</option>
              </select>
            </div>
            <div className="w-full md:w-48">
              <select className="input w-full">
                <option value="">All Time</option>
                <option value="this_month">This Month</option>
                <option value="last_month">Last Month</option>
                <option value="this_year">This Year</option>
              </select>
            </div>
            <button className="btn btn-secondary inline-flex items-center">
              <Filter size={16} className="mr-1" /> Apply Filters
            </button>
          </div>
        </div>
      </div>

      <div className="card">
        <div className="card-header">
          <h3 className="text-xl font-mistal">Expense List</h3>
        </div>
        <div className="card-body p-0">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-amber-100 text-left">
                <tr>
                  <th className="p-4">Description</th>
                  <th className="p-4">Category</th>
                  <th className="p-4">Date</th>
                  <th className="p-4 text-right">Amount</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-amber-200">
                <tr className="hover:bg-amber-50">
                  <td className="p-4">Grocery Shopping</td>
                  <td className="p-4">
                    <span className="px-2 py-1 bg-green-100 text-green-800 rounded-full text-xs">Food</span>
                  </td>
                  <td className="p-4">May 15, 2023</td>
                  <td className="p-4 text-right text-red-600">$85.20</td>
                </tr>
                <tr className="hover:bg-amber-50">
                  <td className="p-4">Rent Payment</td>
                  <td className="p-4">
                    <span className="px-2 py-1 bg-blue-100 text-blue-800 rounded-full text-xs">Housing</span>
                  </td>
                  <td className="p-4">May 1, 2023</td>
                  <td className="p-4 text-right text-red-600">$1,200.00</td>
                </tr>
                <tr className="hover:bg-amber-50">
                  <td className="p-4">Gas Station</td>
                  <td className="p-4">
                    <span className="px-2 py-1 bg-purple-100 text-purple-800 rounded-full text-xs">Transportation</span>
                  </td>
                  <td className="p-4">May 10, 2023</td>
                  <td className="p-4 text-right text-red-600">$45.75</td>
                </tr>
                <tr className="hover:bg-amber-50">
                  <td className="p-4">Electricity Bill</td>
                  <td className="p-4">
                    <span className="px-2 py-1 bg-yellow-100 text-yellow-800 rounded-full text-xs">Utilities</span>
                  </td>
                  <td className="p-4">May 5, 2023</td>
                  <td className="p-4 text-right text-red-600">$94.50</td>
                </tr>
                <tr className="hover:bg-amber-50">
                  <td className="p-4">Movie Tickets</td>
                  <td className="p-4">
                    <span className="px-2 py-1 bg-pink-100 text-pink-800 rounded-full text-xs">Entertainment</span>
                  </td>
                  <td className="p-4">May 12, 2023</td>
                  <td className="p-4 text-right text-red-600">$32.00</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}
