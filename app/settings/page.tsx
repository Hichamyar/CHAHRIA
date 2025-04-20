export default function SettingsPage() {
  return (
    <div className="space-y-6">
      <h2 className="text-3xl font-mistal">Settings</h2>

      <div className="card">
        <div className="card-header">
          <h3 className="text-xl font-mistal">Profile Settings</h3>
        </div>
        <div className="card-body">
          <div className="space-y-4">
            <div>
              <label className="label">Name</label>
              <input type="text" className="input w-full" defaultValue="John Doe" />
            </div>
            <div>
              <label className="label">Email</label>
              <input type="email" className="input w-full" defaultValue="john.doe@example.com" />
            </div>
            <div>
              <label className="label">Currency</label>
              <select className="input w-full">
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
          <h3 className="text-xl font-mistal">Notification Settings</h3>
        </div>
        <div className="card-body">
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium">Email Notifications</p>
                <p className="text-sm text-amber-700">Receive notifications via email</p>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input type="checkbox" className="sr-only peer" defaultChecked />
                <div className="w-11 h-6 bg-amber-300 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-amber-600"></div>
              </label>
            </div>
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium">Budget Alerts</p>
                <p className="text-sm text-amber-700">Get notified when you're close to your budget limit</p>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input type="checkbox" className="sr-only peer" defaultChecked />
                <div className="w-11 h-6 bg-amber-300 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-amber-600"></div>
              </label>
            </div>
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium">Monthly Reports</p>
                <p className="text-sm text-amber-700">Receive monthly financial reports</p>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input type="checkbox" className="sr-only peer" />
                <div className="w-11 h-6 bg-amber-300 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-amber-600"></div>
              </label>
            </div>
            <button className="btn btn-primary">Save Notification Settings</button>
          </div>
        </div>
      </div>

      <div className="card">
        <div className="card-header">
          <h3 className="text-xl font-mistal">Data Management</h3>
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
