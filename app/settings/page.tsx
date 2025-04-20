export default function SettingsPage() {
  return (
    <div className="space-y-6">
      <h2 className="text-3xl">Settings</h2>

      <div className="card">
        <div className="card-header">
          <h3 className="text-xl">Profile Settings</h3>
        </div>
        <div className="card-body">
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-1">Name</label>
              <input type="text" className="w-full p-2 border border-amber-300 rounded" defaultValue="John Doe" />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Email</label>
              <input
                type="email"
                className="w-full p-2 border border-amber-300 rounded"
                defaultValue="john.doe@example.com"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Currency</label>
              <select className="w-full p-2 border border-amber-300 rounded">
                <option value="USD">USD ($)</option>
                <option value="EUR">EUR (€)</option>
                <option value="GBP">GBP (£)</option>
                <option value="JPY">JPY (¥)</option>
              </select>
            </div>
            <button className="btn btn-primary">Save Profile</button>
          </div>
        </div>
      </div>

      <div className="card">
        <div className="card-header">
          <h3 className="text-xl">Data Management</h3>
        </div>
        <div className="card-body">
          <div className="space-y-4">
            <button className="btn btn-secondary">Export All Data</button>
            <button className="btn btn-secondary">Import Data</button>
            <button className="btn btn-outline text-red-600 border-red-600 hover:bg-red-50">Delete All Data</button>
          </div>
        </div>
      </div>
    </div>
  )
}
