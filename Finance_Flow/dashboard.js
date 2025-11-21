// ====================================
// STATE MANAGEMENT
// ====================================
let transactions = JSON.parse(localStorage.getItem('transactions')) || [];
let chart = null;
let editingId = null;

const categoryIcons = {
    food: '🍔',
    transport: '🚗',
    shopping: '🛍️',
    bills: '💡',
    entertainment: '🎮',
    health: '⚕️',
    salary: '💼',
    other: '📦'
};

const categoryNames = {
    food: 'Food & Dining',
    transport: 'Transportation',
    shopping: 'Shopping',
    bills: 'Bills & Utilities',
    entertainment: 'Entertainment',
    health: 'Healthcare',
    salary: 'Salary',
    other: 'Other'
};

// ====================================
// CHART FUNCTIONS
// ====================================
function initChart() {
    const ctx = document.getElementById('spendingChart');
    if (!ctx) return;

    const categoryData = getCategoryData();

    if (chart) {
        chart.destroy();
    }

    // Show empty state if no expenses
    if (categoryData.values.length === 0) {
        const chartContainer = ctx.parentElement;
        chartContainer.innerHTML = `
            <div style="display: flex; flex-direction: column; align-items: center; justify-content: center; height: 400px; color: rgba(255, 255, 255, 0.8);">
                <div style="font-size: 4em; margin-bottom: 1rem;">📊</div>
                <p style="text-align: center;">No expense data yet.<br>Add some transactions to see your spending chart!</p>
            </div>
        `;
        return;
    }

    // Restore canvas
    const chartContainer = ctx.parentElement;
    chartContainer.innerHTML = '<canvas id="spendingChart"></canvas>';
    const newCtx = document.getElementById('spendingChart').getContext('2d');

    chart = new Chart(newCtx, {
        type: 'doughnut',
        data: {
            labels: categoryData.labels,
            datasets: [{
                data: categoryData.values,
                backgroundColor: [
                    'rgba(239, 68, 68, 0.8)',
                    'rgba(249, 115, 22, 0.8)',
                    'rgba(234, 179, 8, 0.8)',
                    'rgba(34, 197, 94, 0.8)',
                    'rgba(59, 130, 246, 0.8)',
                    'rgba(168, 85, 247, 0.8)',
                    'rgba(236, 72, 153, 0.8)',
                    'rgba(148, 163, 184, 0.8)'
                ],
                borderWidth: 2,
                borderColor: 'rgba(255, 255, 255, 0.5)'
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    position: 'bottom',
                    labels: {
                        color: 'white',
                        padding: 15,
                        font: { size: 12 }
                    }
                }
            }
        }
    });
}

function getCategoryData() {
    const categories = {};
    transactions.filter(t => t.type === 'expense').forEach(t => {
        categories[t.category] = (categories[t.category] || 0) + parseFloat(t.amount);
    });

    return {
        labels: Object.keys(categories).map(cat => categoryNames[cat] || cat),
        values: Object.values(categories)
    };
}

// ====================================
// STATISTICS FUNCTIONS
// ====================================
function updateStats() {
    const income = transactions
        .filter(t => t.type === 'income')
        .reduce((sum, t) => sum + parseFloat(t.amount), 0);

    const expenses = transactions
        .filter(t => t.type === 'expense')
        .reduce((sum, t) => sum + parseFloat(t.amount), 0);

    const balance = income - expenses;
    const savingsRate = income > 0 ? ((balance / income) * 100).toFixed(1) : 0.0;

    document.getElementById('totalBalance').textContent = `₹${balance.toFixed(2)}`;
    document.getElementById('totalIncome').textContent = `₹${income.toFixed(2)}`;
    document.getElementById('totalExpenses').textContent = `₹${expenses.toFixed(2)}`;
    document.getElementById('savingsRate').textContent = `${savingsRate}%`;
}

// ====================================
// CATEGORY LIST FUNCTIONS
// ====================================
function updateCategoryList() {
    const categoryData = getCategoryData();
    const totalExpenses = categoryData.values.reduce((a, b) => a + b, 0);

    if (categoryData.values.length === 0) {
        document.getElementById('categoryList').innerHTML = 
            '<p style="color: rgba(255,255,255,0.7); text-align: center; padding: 2rem 0;">No expenses yet</p>';
        return;
    }

    const html = categoryData.labels.map((label, i) => {
        const amount = categoryData.values[i];
        const percentage = totalExpenses > 0 ? (amount / totalExpenses * 100) : 0;
        const categoryKey = Object.keys(categoryIcons)[i] || 'other';

        return `
            <div class="category-item">
                <div class="category-info">
                    <span style="font-size: 1.5em;">${categoryIcons[categoryKey]}</span>
                    <span>${label}</span>
                </div>
                <div class="category-bar">
                    <div class="category-progress" style="width: ${percentage}%"></div>
                </div>
                <div class="category-amount">₹${amount.toFixed(2)}</div>
            </div>
        `;
    }).join('');

    document.getElementById('categoryList').innerHTML = html;
}

// ====================================
// TRANSACTION LIST FUNCTIONS
// ====================================
function renderTransactions() {
    const sorted = [...transactions].sort((a, b) => new Date(b.date) - new Date(a.date));

    if (sorted.length === 0) {
        document.getElementById('transactionsList').innerHTML = `
            <div style="display: flex; flex-direction: column; align-items: center; justify-content: center; height: 200px; color: rgba(255, 255, 255, 0.8);">
                <div style="font-size: 3em; margin-bottom: 1rem;">💳</div>
                <p style="text-align: center;">No transactions yet.<br>Click "+ Add Transaction" to get started!</p>
            </div>
        `;
        return;
    }

    const html = sorted.map(t => `
        <div class="transaction-item">
            <div class="transaction-info">
                <div class="transaction-icon">${categoryIcons[t.category]}</div>
                <div class="transaction-details">
                    <h4>${t.description}</h4>
                    <p>${new Date(t.date).toLocaleDateString('en-US', { 
                        month: 'short', 
                        day: 'numeric', 
                        year: 'numeric' 
                    })} • ${categoryNames[t.category]}</p>
                </div>
            </div>
            <div style="display: flex; align-items: center; gap: 15px;">
                <div class="transaction-amount ${t.type === 'income' ? 'amount-positive' : 'amount-negative'}">
                    ${t.type === 'income' ? '+' : '-'}₹${parseFloat(t.amount).toFixed(2)}
                </div>
                <div style="display: flex; gap: 8px;">
                    <button onclick="editTransaction(${t.id})" style="background: rgba(102, 126, 234, 0.3); border: none; border-radius: 8px; padding: 8px 12px; cursor: pointer; font-size: 1.1em; color: white; transition: all 0.2s;" onmouseover="this.style.background='rgba(102, 126, 234, 0.5)'" onmouseout="this.style.background='rgba(102, 126, 234, 0.3)'" title="Edit">
                        ✏️
                    </button>
                    <button onclick="deleteTransaction(${t.id})" style="background: rgba(239, 68, 68, 0.3); border: none; border-radius: 8px; padding: 8px 12px; cursor: pointer; font-size: 1.1em; color: white; transition: all 0.2s;" onmouseover="this.style.background='rgba(239, 68, 68, 0.5)'" onmouseout="this.style.background='rgba(239, 68, 68, 0.3)'" title="Delete">
                        🗑️
                    </button>
                </div>
            </div>
        </div>
    `).join('');

    document.getElementById('transactionsList').innerHTML = html;
}

// ====================================
// MODAL FUNCTIONS
// ====================================
function openModal() {
    editingId = null;
    const modalTitle = document.querySelector('#transactionModal .modal-header h2');
    if (modalTitle) {
        modalTitle.textContent = 'Add New Transaction';
    }
    
    document.getElementById('transactionForm').reset();
    document.getElementById('date').valueAsDate = new Date();
    document.getElementById('transactionModal').classList.add('active');
}

function closeModal() {
    document.getElementById('transactionModal').classList.remove('active');
    document.getElementById('transactionForm').reset();
    editingId = null;
}

// ====================================
// CRUD OPERATIONS
// ====================================
function addTransaction(transaction) {
    transaction.id = Date.now();
    transactions.push(transaction);
    localStorage.setItem('transactions', JSON.stringify(transactions));
    
    updateStats();
    renderTransactions();
    updateCategoryList();
    initChart();
    showNotification('✓ Transaction added successfully!', 'success');
}

function editTransaction(id) {
    editingId = id;
    const transaction = transactions.find(t => t.id === id);
    
    if (!transaction) return;

    // Update modal title
    const modalTitle = document.querySelector('#transactionModal .modal-header h2');
    if (modalTitle) {
        modalTitle.textContent = 'Edit Transaction';
    }

    // Pre-fill form
    document.getElementById('description').value = transaction.description;
    document.getElementById('amount').value = transaction.amount;
    document.getElementById('type').value = transaction.type;
    document.getElementById('category').value = transaction.category;
    document.getElementById('date').value = transaction.date;

    // Open modal
    document.getElementById('transactionModal').classList.add('active');
}

function updateTransaction(id, updatedData) {
    const index = transactions.findIndex(t => t.id === id);
    if (index !== -1) {
        transactions[index] = { ...transactions[index], ...updatedData };
        localStorage.setItem('transactions', JSON.stringify(transactions));
        
        updateStats();
        renderTransactions();
        updateCategoryList();
        initChart();
        showNotification('✓ Transaction updated successfully!', 'success');
    }
}

function deleteTransaction(id) {
    const transaction = transactions.find(t => t.id === id);
    if (!transaction) return;

    if (confirm(`🗑️ Delete "${transaction.description}"?\n\nThis action cannot be undone.`)) {
        transactions = transactions.filter(t => t.id !== id);
        localStorage.setItem('transactions', JSON.stringify(transactions));
        
        updateStats();
        renderTransactions();
        updateCategoryList();
        initChart();
        showNotification('✓ Transaction deleted successfully!', 'error');
    }
}

function clearAllTransactions() {
    if (confirm('⚠️ Are you sure you want to delete ALL transactions?\n\nThis action cannot be undone!')) {
        transactions = [];
        localStorage.setItem('transactions', JSON.stringify(transactions));
        
        updateStats();
        renderTransactions();
        updateCategoryList();
        initChart();
        showNotification('✓ All transactions cleared!', 'error');
    }
}

// ====================================
// NOTIFICATION SYSTEM
// ====================================
function showNotification(message, type = 'success') {
    let notification = document.getElementById('notification');
    
    if (!notification) {
        notification = document.createElement('div');
        notification.id = 'notification';
        notification.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            padding: 1rem 1.5rem;
            border-radius: 15px;
            background: rgba(255, 255, 255, 0.95);
            backdrop-filter: blur(10px);
            box-shadow: 0 8px 32px rgba(31, 38, 135, 0.37);
            border: 1px solid rgba(255, 255, 255, 0.3);
            z-index: 2000;
            display: none;
            align-items: center;
            gap: 0.75rem;
            min-width: 300px;
            font-weight: 600;
            color: #1f2937;
            animation: slideIn 0.3s ease;
        `;
        document.body.appendChild(notification);
    }

    notification.style.borderLeft = type === 'success' ? '4px solid #10b981' : '4px solid #ef4444';
    notification.textContent = message;
    notification.style.display = 'flex';

    setTimeout(() => {
        notification.style.display = 'none';
    }, 3000);
}

// ====================================
// EVENT LISTENERS
// ====================================
document.addEventListener('DOMContentLoaded', function() {
    // Form submit handler
    document.getElementById('transactionForm').addEventListener('submit', (e) => {
        e.preventDefault();

        const transactionData = {
            description: document.getElementById('description').value,
            amount: document.getElementById('amount').value,
            type: document.getElementById('type').value,
            category: document.getElementById('category').value,
            date: document.getElementById('date').value
        };

        if (editingId) {
            updateTransaction(editingId, transactionData);
        } else {
            addTransaction(transactionData);
        }

        closeModal();
    });

    // Close modal on background click
    document.getElementById('transactionModal').addEventListener('click', (e) => {
        if (e.target.id === 'transactionModal') {
            closeModal();
        }
    });

    // Close modal on ESC key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && document.getElementById('transactionModal').classList.contains('active')) {
            closeModal();
        }
    });

    // Initialize with empty data
    if (transactions.length === 0) {
        transactions = [];
        localStorage.setItem('transactions', JSON.stringify(transactions));
    }

    // Initialize app
    updateStats();
    renderTransactions();
    updateCategoryList();
    initChart();
});