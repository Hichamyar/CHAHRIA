export default function Home() {
  return (
    <div className="space-y-6">
      <section className="card">
        <div className="card-body text-center py-8">
          <h2 className="text-3xl mb-4">Welcome to Your Financial Journey</h2>
          <p className="text-lg mb-6 max-w-2xl mx-auto">
            Track your expenses, manage your budget, and achieve your financial goals with our finance tracker.
          </p>
          <a href="/dashboard" className="btn btn-primary">
            Get Started
          </a>
        </div>
      </section>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="card">
          <div className="card-header">
            <h3 className="text-xl">Track Expenses</h3>
          </div>
          <div className="card-body">
            <p className="mb-4">Record and categorize your expenses to understand your spending habits.</p>
            <a href="/expenses" className="btn btn-outline">
              View Expenses
            </a>
          </div>
        </div>

        <div className="card">
          <div className="card-header">
            <h3 className="text-xl">Manage Budget</h3>
          </div>
          <div className="card-body">
            <p className="mb-4">Set budgets for different categories and stay on track with your financial goals.</p>
            <a href="/budget" className="btn btn-outline">
              View Budget
            </a>
          </div>
        </div>

        <div className="card">
          <div className="card-header">
            <h3 className="text-xl">View Reports</h3>
          </div>
          <div className="card-body">
            <p className="mb-4">Analyze your financial data with beautiful charts and insightful reports.</p>
            <a href="/reports" className="btn btn-outline">
              View Reports
            </a>
          </div>
        </div>
      </div>

      <section className="card bg-amber-50">
        <div className="card-body">
          <h2 className="text-2xl mb-4">Financial Tip of the Day</h2>
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
