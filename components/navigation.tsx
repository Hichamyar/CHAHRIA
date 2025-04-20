"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState } from "react"
import { Menu, X } from "lucide-react"

export default function Navigation() {
  const pathname = usePathname()
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navItems = [
    { name: "Home", href: "/" },
    { name: "Dashboard", href: "/dashboard" },
    { name: "Expenses", href: "/expenses" },
    { name: "Budget", href: "/budget" },
    { name: "Reports", href: "/reports" },
    { name: "Settings", href: "/settings" },
  ]

  return (
    <nav className="py-4">
      <div className="container mx-auto">
        {/* Mobile menu button */}
        <div className="flex md:hidden justify-end">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="p-2 rounded-md bg-amber-200">
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Desktop navigation */}
        <div className="hidden md:flex space-x-4">
          {navItems.map((item) => (
            <Link key={item.name} href={item.href} className={`nav-link ${pathname === item.href ? "active" : ""}`}>
              {item.name}
            </Link>
          ))}
        </div>

        {/* Mobile navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-2 bg-white rounded-md shadow-lg border border-amber-200">
            <div className="flex flex-col p-2">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`nav-link my-1 ${pathname === item.href ? "active" : ""}`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
