import Link from "next/link"
import { ArrowRight, PiggyBank, CreditCard, BarChart3 } from "lucide-react"

export default function Home() {
  return (
    <div className="space-y-8">
      <section className="card">
        <div className="card-body text-center py-12">
          <h2 className="text-4xl mb-4 font-mistal">Welcome to Your Financial Journey</h2>
          <p className="text-xl mb-6 max-w-2xl mx-auto">
            Track your expenses, manage your budget, and achieve your financial goals with our elegant finance tracker.
          </p>
          <Link href="/dashboard" className="btn btn-primary inline-flex items-center">
            Get Started <ArrowRight className="ml-2" size={16} />
          </Link>
        </div>
      </section>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="card">
          <div className="card-header">
            <h3 className="text-xl flex items-center font-mistal">
              <CreditCard className="mr-2" /> Track Expenses
            </h3>
          </div>
          <div className="card-body">
            <p className="mb-4">Record and categorize your expenses to understand your spending habits.</p>
            <Link href="/expenses" className="btn btn-outline">
              View Expenses
            </Link>
          </div>
        </div>

        <div className="card">
          <div className="card-header">
            <h3 className="text-xl flex items-center font-mistal">
              <PiggyBank className="mr-2" /> Manage Budget
            </h3>
          </div>
          <div className="card-body">
            <p className="mb-4">Set budgets for different categories and stay on track with your financial goals.</p>
            <Link href="/budget" className="btn btn-outline">
              View Budget
            </Link>
          </div>
        </div>

        <div className="card">
          <div className="card-header">
            <h3 className="text-xl flex items-center font-mistal">
              <BarChart3 className="mr-2" /> View Reports
            </h3>
          </div>
          <div className="card-body">
            <p className="mb-4">Analyze your financial data with beautiful charts and insightful reports.</p>
            <Link href="/reports" className="btn btn-outline">
              View Reports
            </Link>
          </div>
        </div>
      </div>

      <section className="card bg-amber-100">
        <div className="card-body">
          <h2 className="text-2xl mb-4 font-mistal">Financial Tip of the Day</h2>
          <p className="italic">
            "The habit of saving is itself an education; it fosters every virtue, teaches self-denial, cultivates the
            sense of order, trains to forethought, and so broadens the mind."
          </p>
          <p className="text-right mt-2">— T.T. Munger</p>
        </div>
      </section>
    </div>
  )
}
