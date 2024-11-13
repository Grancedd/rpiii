// presenter.js
import ExpenseModel from './model.js';
import ExpenseView from './view.js';

class ExpensePresenter {
    constructor(model, view) {
        this.model = new ExpenseModel();
        this.view = new ExpenseView();

        this.init();
    }

    init() {
        document.getElementById('expense-form').addEventListener('submit', (event) => {
            event.preventDefault();
            this.handleAddExpense();
        });

        // Пример фильтрации можно добавить здесь
    }
    showExpenses() {
        const category = this.view.categoryFilter.value;
        const expenses = category === "all" ? this.model.getExpenses() : this.model.getExpenses().filter(expense => expense.category === category);
        this.view.displayExpenses(expenses);
    }
    handleAddExpense() {
        const expenseData = this.view.getExpenseFormData();
        this.model.addExpense(expenseData);
        this.view.displayExpenses(this.model.getExpenses());
        this.view.clearForm();
    }

    deleteExpense(id) {
        this.model.deleteExpense(id);
        this.show();
    }
    openEditModal(id) {
        const expense = this.model.getExpenses().find(expense => expense.id === id);
        if (expense) {
            this.currentExpenseId = id;
            this.view.openEditModal(expense);
        }
    }

    saveEditExpense(event) {
        event.preventDefault();
        const updatedExpense = {
            name: document.getElementById("edit-name").value,
            amount: document.getElementById("edit-amount").value,
            category: document.getElementById("edit-category").value
        };

        this.model.updateExpense(this.currentExpenseId, updatedExpense);
        this.currentExpenseId = null;
        this.view.closeEditModal();
        this.showExpenses();
    }
    closeEditModal() {
        this.view.closeEditModal();
    }

    filterExpenses() {
        this.showExpenses();
    }
}

new ExpensePresenter();
