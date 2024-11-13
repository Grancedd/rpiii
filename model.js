class ExpenseModel {
    constructor() {
        this.expenses = [
            { id: 1, name: "Картофель", amount: "2", category: "Food" },
            { id: 2, name: "Лада", amount: "30000", category: "Transport" },
            { id: 3, name: "Аттаркционы", amount: "500", category: "Entertainment" }
        ];
    }

    getExpenses() {
        return this.expenses;
    }

    addExpense(expense) {
        this.expenses.push(expense);
    }

    deleteExpense(id) {
        this.expenses = this.expenses.filter(expense => expense.id !== id);
    }

    updateExpense(id, updatedExpense) {
        const index = this.Expenses.findIndex(Expense => Expense.id === id);
        if (index !== -1) {
            this.Expenses[index] = { ...this.Expenses[index], ...updatedExpense };
        }
    }
}

export default ExpenseModel;
