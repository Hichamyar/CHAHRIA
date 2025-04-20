"use client"

import { useState, useEffect } from "react"
import { useFinanceStore } from "./finance-store"

export function useCurrencyFormatter() {
  const { currency } = useFinanceStore()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return {
    format: (amount: number) => {
      // Handle the case when currency is undefined during SSR
      if (!mounted) {
        return `$${amount.toFixed(2)}`
      }

      const symbol = currency?.symbol || "$"
      return `${symbol}${amount.toFixed(2)}`
    },
  }
}
