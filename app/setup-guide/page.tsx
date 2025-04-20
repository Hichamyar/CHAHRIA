"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useFinanceStore } from "@/lib/finance-store"
import { useCurrencyFormatter } from "@/lib/format-currency"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ArrowLeft, ArrowRight, Check, Home, PiggyBank } from "lucide-react"

export default function SetupGuidePage() {
  const router = useRouter()
  const { addIncomeSource, expenseCategories, updateExpenseCategory, getCurrentMonth } = useFinanceStore()
  const currencyFormatter = useCurrencyFormatter()

  const [activeTab, setActiveTab] = useState("revenue")
  const [income, setIncome] = useState({
    name: "Primary Income",
    amount: 0,
    frequency: "monthly",
  })

  const [budgets, setBudgets] = useState<any[]>([])
  const [newBudget, setNewBudget] = useState({
    categoryId: "",
    amount: 0,
  })

  const handleAddIncome = () => {
    if (income.name && income.amount > 0) {
      addIncomeSource(income)
      setActiveTab("budgets")
    }
  }

  const handleAddBudget = () => {
    if (newBudget.categoryId && newBudget.amount > 0) {
      const category = expenseCategories.find((cat) => cat.id === newBudget.categoryId)
      if (category) {
        setBudgets([
          ...budgets,
          {
            ...newBudget,
            id: Date.now(),
            name: category.name,
            color: category.color,
          },
        ])
        setNewBudget({
          categoryId: "",
          amount: 0,
        })
      }
    }
  }

  const handleSaveAll = () => {
    // Save budgets
    budgets.forEach((budget) => {
      updateExpenseCategory(budget.categoryId, {
        budget: budget.amount,
      })
    })

    // Redirect to dashboard
    router.push("/")
  }

  const getCategoryName = (categoryId: string) => {
    const category = expenseCategories.find((cat) => cat.id === categoryId)
    return category ? category.name : "Uncategorized"
  }

  const getCategoryColor = (categoryId: string) => {
    const category = expenseCategories.find((cat) => cat.id === categoryId)
    return category ? category.color : "#CCCCCC"
  }

  return (
    <div className="container mx-auto py-10 max-w-3xl">
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl">Setup Guide</CardTitle>
          <CardDescription>Let's set up your finances step by step</CardDescription>
        </CardHeader>
        <CardContent>
          <Tabs value={activeTab} onValueChange={setActiveTab}>
            <TabsList className="grid grid-cols-2 mb-8">
              <TabsTrigger value="revenue" className="flex items-center gap-2">
                <Home className="h-4 w-4" />
                <span>Income</span>
              </TabsTrigger>
              <TabsTrigger value="budgets" className="flex items-center gap-2">
                <PiggyBank className="h-4 w-4" />
                <span>Budgets</span>
              </TabsTrigger>
            </TabsList>

            <TabsContent value="revenue" className="space-y-4">
              <div className="space-y-2">
                <h3 className="text-lg font-medium">Step 1: Add Your Income</h3>
                <p className="text-muted-foreground">Let's start by adding your primary source of income.</p>
              </div>

              <div className="space-y-4 pt-4">
                <div className="grid gap-2">
                  <Label htmlFor="income-name">Income Source</Label>
                  <Input
                    id="income-name"
                    value={income.name}
                    onChange={(e) => setIncome({ ...income, name: e.target.value })}
                    placeholder="e.g., Salary, Freelance Work"
                  />
                </div>

                <div className="grid gap-2">
                  <Label htmlFor="income-amount">Amount</Label>
                  <Input
                    id="income-amount"
                    type="number"
                    value={income.amount || ""}
                    onChange={(e) => setIncome({ ...income, amount: Number(e.target.value) })}
                    placeholder="0.00"
                  />
                </div>

                <div className="grid gap-2">
                  <Label htmlFor="income-frequency">Frequency</Label>
                  <Select
                    value={income.frequency}
                    onValueChange={(value) => setIncome({ ...income, frequency: value as any })}
                  >
                    <SelectTrigger id="income-frequency">
                      <SelectValue placeholder="Select frequency" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="daily">Daily</SelectItem>
                      <SelectItem value="weekly">Weekly</SelectItem>
                      <SelectItem value="biweekly">Bi-weekly</SelectItem>
                      <SelectItem value="monthly">Monthly</SelectItem>
                      <SelectItem value="yearly">Yearly</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="flex justify-end pt-4">
                <Button onClick={handleAddIncome}>
                  Continue
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </TabsContent>

            <TabsContent value="budgets" className="space-y-4">
              <div className="space-y-2">
                <h3 className="text-lg font-medium">Step 2: Set Your Budget Limits</h3>
                <p className="text-muted-foreground">
                  Now, let's set budget limits for your spending categories. This will help you track and control your
                  expenses.
                </p>
              </div>

              <div className="space-y-4 pt-4">
                <div className="grid gap-2">
                  <Label htmlFor="budget-category">Budget Category</Label>
                  <Select
                    value={newBudget.categoryId}
                    onValueChange={(value) => setNewBudget({ ...newBudget, categoryId: value })}
                  >
                    <SelectTrigger id="budget-category">
                      <SelectValue placeholder="Select category" />
                    </SelectTrigger>
                    <SelectContent>
                      {expenseCategories.map((category) => (
                        <SelectItem key={category.id} value={category.id}>
                          <div className="flex items-center">
                            <div
                              className="w-3 h-3 rounded-full mr-2"
                              style={{ backgroundColor: category.color }}
                            ></div>
                            {category.name}
                          </div>
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="grid gap-2">
                  <Label htmlFor="budget-amount">Monthly Budget Amount</Label>
                  <Input
                    id="budget-amount"
                    type="number"
                    value={newBudget.amount || ""}
                    onChange={(e) => setNewBudget({ ...newBudget, amount: Number(e.target.value) })}
                    placeholder="0.00"
                  />
                </div>

                <Button onClick={handleAddBudget}>Add Budget</Button>
              </div>

              {budgets.length > 0 && (
                <div className="pt-4">
                  <h4 className="text-sm font-medium mb-2">Added Budgets:</h4>
                  <div className="space-y-2">
                    {budgets.map((budget) => (
                      <div key={budget.id} className="flex justify-between items-center p-2 border rounded-md">
                        <div className="flex items-center">
                          <div className="w-3 h-3 rounded-full mr-2" style={{ backgroundColor: budget.color }}></div>
                          <span className="font-medium">{budget.name}</span>
                        </div>
                        <div>
                          <span>{currencyFormatter.format(budget.amount)}/month</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              <div className="flex justify-between pt-4">
                <Button variant="outline" onClick={() => setActiveTab("revenue")}>
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Back
                </Button>
                <Button onClick={handleSaveAll}>
                  <Check className="mr-2 h-4 w-4" />
                  Save & Finish
                </Button>
              </div>
            </TabsContent>
          </Tabs>
        </CardContent>
        <CardFooter className="flex justify-center border-t pt-6">
          <Button variant="outline" onClick={() => router.push("/")}>
            Skip for now
          </Button>
        </CardFooter>
      </Card>
    </div>
  )
}
