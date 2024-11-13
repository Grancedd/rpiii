class ExpenseView {
    constructor() {
        this.expenseList = document.getElementById('expense-list');
        this.genreFilter = document.getElementById("category-filter");
        this.editModal = document.getElementById("edit-modal");
    }

    displayExpenses(expenses) {
        this.expenseList.innerHTML = ''; // Очищаем список перед обновлением
        expenses.forEach(expense => {
            const expenseItem = document.createElement('li');
            expenseItem.innerHTML = `
                <span>${expense.name}</span>
                <span>${expense.amount} руб.</span>
                <span>${expense.category}</span>
                <button onclick="app.deleteExpense(${expense.id})">Удалить</button>
                <button onclick="app.openEditModal(${expense.id})">Редактировать</button>
            `;
            this.expenseList.appendChild(expenseItem);
        });
    }

    openEditModal(expenses) {
        this.editModal.style.display = "block";
        document.getElementById("edit-title").value = expenses.name;
        document.getElementById("edit-author").value = expenses.amount;
        document.getElementById("edit-genre").value = expenses.category;
    }
    closeEditModal() {
        this.editModal.style.display = "none";
    }

    getExpenseFormData() {
        return {
            name: document.getElementById('expense-name').value,
            amount: parseFloat(document.getElementById('expense-amount').value),
            category: document.querySelector('input[name="expense-category"]:checked').value
        };
    }

    clearForm() {
        document.getElementById('expense-form').reset();
    }
}

export default ExpenseView;
